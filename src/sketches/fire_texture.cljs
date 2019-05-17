(ns sketches.fire-texture
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn setup []
  (q/no-stroke)
  (q/blend-mode :add)
  (q/image-mode :center)
  {:particles ()
   :origin [(/ (q/width) 2) (* (q/height) 0.6)]
   :image (q/load-image "images/texture.png")})

(defn create-particle [location]
  {:location location
   :velocity [(* (q/random-gaussian) 0.3) (- (* (q/random-gaussian) 0.4) 1.0)]
   :acceleration [0 0]
   :lifespan 255.0
   :mass 10})

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn apply-force [force {:keys [mass acceleration] :as particle}]
  (assoc particle :acceleration (v/add acceleration (v/div force mass))))

(defn update-particle [{:keys [acceleration velocity location lifespan] :as particle}]
  (let [velocity (v/add velocity acceleration)
        location (v/add velocity location)]
    (-> particle
        (assoc :velocity velocity)
        (assoc :location location)
        (assoc :lifespan (- lifespan 2.0))
        (assoc :acceleration [0 0]))))

(defn update-state [{:keys [origin] :as state}]
  (let [wind [(q/map-range (q/mouse-x) 0.0 (q/width) -0.3 0.3)
              (q/map-range (q/mouse-y) 0.0 (q/height) -0.3 0.3)]]
    (-> state
        (update :particles #(conj % (create-particle origin)))
        (update :particles #(map (partial apply-force wind) %))
        (update :particles #(map update-particle %))
        (update :particles #(remove is-dead %)))))

(defn draw-particle [{:keys [lifespan] [x y] :location :as particle} image]
  (q/background 0 0 0)
  (q/tint 255 127 64 lifespan)
  (when (q/loaded? image) (q/image image x y)))

(defn draw [{:keys [particles image]}]
  (q/clear)
  (doseq [particle particles]
    (draw-particle particle image)))

(defn run [host]
  (q/defsketch fire-texture
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
