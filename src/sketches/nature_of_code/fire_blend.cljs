(ns sketches.nature-of-code.fire-blend
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(defn setup []
  (q/image-mode :center)
  (q/color-mode :hsb)
  (q/no-stroke)
  {:particles ()
   :image (q/load-image "images/texture-white.png")})

(defn create-texture [location]
  (assoc (m/create-mover 10 location)
         :velocity [(* (q/random-gaussian) 0.8) (- (q/random-gaussian) 1.0)]
         :lifespan 255.0))

(defn is-dead [{:keys [lifespan]}]
  (< lifespan 0.0))

(defn apply-force [force {:keys [mass acceleration] :as particle}]
  (assoc particle :acceleration (v/add acceleration (v/div force mass))))

(defn dec-lifespan [particle] (update particle :lifespan (comp dec dec)))

(defn update-state [state]
  (update state :particles
          #(->> (conj % (create-texture [0 100]))
                (map (comp m/compute-position dec-lifespan))
                (remove is-dead))))

(defn draw-particle [{:keys [lifespan] [x y] :location} image]
  (q/tint lifespan 255 255)
  (q/image image x y
           (q/map-range lifespan 255 0 100 0)
           (q/map-range lifespan 255 0 100 0)))

(defn draw [{:keys [particles image]}]
  (q/blend-mode :exclusion)
  (q/background 255)
  (q/color-mode :hsb)
  (doseq [particle particles]
    (draw-particle particle image)))

(defn run [host]
  (q/defsketch fire-blend
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]
    :renderer :p3d))
