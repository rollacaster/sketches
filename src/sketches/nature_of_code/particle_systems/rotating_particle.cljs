(ns sketches.nature-of-code.particle-systems.rotating-particle
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn create-particle [location]
  {:location location
   :velocity [(- (rand 2) 1) (- (rand 2) 2)]
   :acceleration [0 0.05]
   :lifespan 255.0
   :aAcceleration 0.0
   :aVelocity 0.1
   :angle 0.0})

(defn update-particle [{:keys [acceleration velocity location lifespan
                               aVelocity aAcceleration angle]
                        :as particle}]
  (let [velocity (v/add velocity acceleration)
        location (v/add velocity location)
        lifespan (- lifespan 2.0)
        aVelocity (+ aVelocity aAcceleration)
        angle (+ aVelocity angle)]
    (-> particle
        (assoc :velocity velocity)
        (assoc :location location)
        (assoc :acceleration [0 0])
        (assoc :lifespan lifespan)
        (assoc :aVelocity aVelocity)
        (assoc :angle (+ aVelocity angle))
        (assoc :aAcceleration 0))))

(defn apply-force [particle force]
  (update particle :acceleration #(v/add % force)))

(defn draw-particle [{:keys [lifespan angle] [x y] :location :as particle}]
  (q/push-matrix)
  (q/rect-mode :center)
  (q/translate x y)
  (q/rotate angle)
  (q/stroke 0 lifespan)
  (q/fill 0 lifespan)
  (q/rect 0 0 8 8)
  (q/pop-matrix)
  particle)

(defn is-dead [{:keys [lifespan]}]
  (< lifespan 0.0))

(defn setup []
  (create-particle [(/ (q/width) 2) (/ (q/height) 2)]))

(defn update-state [particle]
  (if (is-dead particle)
    (create-particle [(/ (q/width) 2) (/ (q/height) 2)])
    (-> particle
        (apply-force [0.1 0])
        update-particle)))

(defn draw [particle]
  (q/background 255)
  (draw-particle particle))


(defn run [host]
  (q/defsketch rotating-particle
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
