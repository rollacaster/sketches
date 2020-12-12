(ns sketches.rac-sketches.heart-of-clojure
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup-particle []
  {:location [(/ (q/width) 2) (/ (q/height) 2)]
   :speed [0 0]
   :lifespan 255})

(defn setup []
  (q/no-stroke)
  (q/blend-mode :add)
  (q/color-mode :hsb)
  ())

(defn v-add [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn update-particle [{:keys [speed location] :as particle}]
  (let [acc [(q/random -0.8 0.8) (q/random -0.8 0.8)]
        new-speed (v-add acc speed)
        new-location (v-add location new-speed)]
    (-> particle
        (assoc :location new-location)
        (assoc :speed new-speed)
        (update :lifespan dec))))

(defn update-state [state]
  (filter #(> (:lifespan %) 0)
          (map update-particle
               (conj state (comp (setup-particle))))))

(defn draw-particle [{[x y] :location :keys [lifespan]}]
  (q/fill (q/map-range lifespan 127 20 127 50)
          255 100 lifespan)
  (q/ellipse
   x y
   (q/map-range lifespan 0 255 0 (q/map-range (q/sin (/ lifespan 3)) 0 1 0 150))
   (q/map-range lifespan 0 255 0 (q/map-range (q/sin lifespan) 0 1 0 150))))

(defn draw [state]
  (q/clear)
  (q/background 200 127 0)
  (doseq [particle state]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch heart-of-clojure
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
