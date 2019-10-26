(ns sketches.nature-of-code.particle-force
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn create-particle [location]
  {:location location
   :velocity [(- (rand 2) 1) (- (rand 2) 2)]
   :acceleration [0 0.05]
   :lifespan 255.0})

(defn update-particle [{:keys [acceleration velocity location lifespan] :as particle}]
  (let [velocity (v/add velocity acceleration)
        location (v/add velocity location)
        lifespan (- lifespan 2.0)]
    (-> particle
        (assoc :velocity velocity)
        (assoc :location location)
        (assoc :lifespan lifespan))))

(defn apply-force [particle force]
  (update particle :acceleration #(v/add % force)))

(defn display [{:keys [lifespan] [x y] :location}]
  (q/stroke 0 lifespan)
  (q/fill 0 lifespan)
  (q/ellipse x y 8 8))

(defn is-dead [{:keys [lifespan]}]
  (< lifespan 0.0))

(defn setup []
  (create-particle [(/ (q/width) 2) (/ (q/height) 2)]))

(defn update-state [particle]
  (if (is-dead particle)
    (create-particle [(/ (q/width) 2) (/ (q/height) 2)])
    (-> particle
        (apply-force [-0.01 0.01])
        update-particle)))

(defn draw [particle]
  (q/background 255)
  (display particle))

(defn run [host]
  (q/defsketch particle-force
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
