(ns sketches.nature-of-code.particle-systems.fire
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]))

(defn setup []
  (q/blend-mode :add)
  {:particles () :origin [150 200]})

(defn create-particle [location]
  (-> (m/create-mover 10 location)
      (assoc :velocity [(* (q/random-gaussian) 0.3) (- (* (q/random-gaussian) 0.4) 1.0)]
             :lifespan 255.0)))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn update-lifespan [particle] (update particle :lifespan (comp dec dec)))

(defn update-state [ps]
  (-> ps
      (update :particles #(conj % (create-particle (:origin ps))))
      (update :particles #(conj % (create-particle (:origin ps))))
      (update :particles #(map (comp update-lifespan m/update-mover)  %))
      (update :particles #(remove is-dead %))))

(defn draw-particle [{:keys [lifespan] [x y] :location}]
  (q/color-mode :rgb)
  (q/fill (q/color 255 24 0 lifespan))
  (q/ellipse x y (q/map-range lifespan 0 255 0 24) (q/map-range lifespan 0 255 0 24)))

(defn draw [{:keys [particles]}]
  (q/clear)
  (q/background 0)
  (doseq [particle particles]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch fire
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))


