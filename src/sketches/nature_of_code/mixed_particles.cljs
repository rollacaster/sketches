(ns sketches.nature-of-code.mixed-particles
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]))

(defn setup []
  {:particles ()
   :origin [(/ (q/width) 2) (/ (q/height) 2)]})

(defn create-particle [location]
  (-> (m/create-mover 100 location)
      (assoc :velocity [(- (rand 2) 1) (- (rand 2) 2)])
      (assoc :acceleration [0 0.05])
      (assoc :a-acceleration 0.1)
      (assoc :lifespan 255)))

(defn create-confetti [location]
  (-> (create-particle location)
      (assoc :type :confetti)))

(defmulti draw-particle :type)

(defmethod draw-particle :confetti [{:keys [lifespan angle] [x y] :location :as particle}]
  (q/rect-mode :center)
  (q/fill 175 lifespan)
  (q/stroke 0 lifespan)
  (q/push-matrix)
  (q/translate x y)
  (q/rotate angle)
  (q/rect 0 0 8 8)
  (q/pop-matrix)
  particle)


(defmethod draw-particle :default [{:keys [lifespan] [x y] :location :as particle}]
  (q/stroke 0 lifespan)
  (q/fill 0 lifespan)
  (q/ellipse x y 8 8)
  particle)

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn decrease-lifespan [particle]
  (update particle :lifespan (comp dec dec)))

(defn update-state [{:keys [origin] :as ps}]
  (-> ps
      (update :particles #(conj % (if (> (q/random 1) 0.5) (create-particle origin) (create-confetti origin))))
      (update :particles #(map (comp m/compute-position decrease-lifespan) %))
      (update :particles #(remove is-dead %))))

(defn draw [{:keys [particles]}]
  (q/background 255)
  (doseq [particle particles]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch mixed-particles
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
