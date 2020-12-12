(ns sketches.rac-sketches.inferno
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(defn setup []
  (q/blend-mode :add)
  (q/no-stroke)
  {:particles ()})

(defn update-particle [particle]
  (let [gravity [(* (q/random-gaussian) 0.01) (* (- (q/random-gaussian) 0.8) 0.02)]
        wind [(q/random -0.1 0.1) 0]]
    (-> particle
        (m/update-mover (v/add gravity wind))
        (update :lifespan dec))))

(defn create-particle []
  {:acceleration [0 0]
   :velocity [0 0]
   :location [(/ (q/width) 2) (q/height)]
   :lifespan 255})

(defn update-state [{:keys [particles]}]
  {:particles
   (->> (conj particles (create-particle))
        (filter (fn [{:keys [lifespan]}] (>= lifespan 0)))
        (map update-particle))})

(defn draw-particle [{[x y] :location :keys [lifespan]}]
  (let [blue (q/color 255 127 64 lifespan)
        red (q/color 0 0)]
    (dotimes [i 6]
      (q/fill (q/lerp-color red blue (/ i 5)))
      (q/ellipse x y
                 (/ (* 255 (/ 64 (inc i))) lifespan)
                 (/ (* 255 (/ 64 (inc i))) lifespan)))))

(defn draw [{:keys [particles]}]
  (q/clear)
  (doall (map draw-particle particles)))

(defn run [host]
  (q/defsketch inferno
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
