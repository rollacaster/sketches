(ns sketches.rac-sketches.reverse-roots
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(defn create-particle []
  {:acceleration [0 0]
   :velocity [0 0]
   :location [(/ (q/width) 2) (q/height)]
   :lifespan 255})

(defn setup []
  {:particles ()})

(defn update-particle [particle]
  (let [levity [0 -0.01]
        wind [(q/random -0.1 0.1) 0]]
    (-> particle
        (m/update-mover (v/add levity wind))
        (update :lifespan dec))))

(defn update-state [{:keys [particles]}]
  (if (= (mod (q/frame-count) 500) 0)
    {:particles ()}
    {:particles
     (->> (conj particles (create-particle))
          (filter (fn [{:keys [lifespan]}] (>= lifespan 0)))
          (map update-particle))}))

(defn draw-particle [{[x y] :location :keys [lifespan]}]
  (q/fill 255 lifespan)
  (q/ellipse x y
             (q/map-range lifespan 0 255 0 32)
             (q/map-range lifespan 0 255 0 32)))

(defn draw [{:keys [particles]}]
  (when (= (mod (q/frame-count) 500) 0)
    (q/clear))
  (doall (map draw-particle particles)))

(defn run [host]
  (q/defsketch reverse-roots
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
