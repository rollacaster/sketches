(ns sketches.nature-of-code.vectors.noise-car
  (:require [quil.core :as q]
            [sketches.vector :as v]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  (q/ellipse-mode :center)
  {:acceleration [0 0]
   :velocity [0 0]
   :location [150 150]
   :xoff 0.0
   :yoff 0.0})

(defn move-through [{[x y] :location :as vehicle}]
  (assoc vehicle :location [(cond
                              (> x (q/width)) 0
                              (< x 0) (q/width)
                              :else x)
                            (cond
                              (> y (q/height)) 0
                              (< y 0) (q/height)
                              :else y)]))

(defn update-state [{:keys [location acceleration velocity
                            xoff yoff]}]
  (move-through
   (let [acceleration [0 (q/map-range (q/noise xoff yoff) 0 1 -0.01 0.01)]
         velocity (v/limit (v/add velocity acceleration) 10)]
     {:acceleration acceleration
      :velocity velocity
      :location (v/add (v/add velocity acceleration) location)
      :xoff (+ xoff 0.0001)
      :yoff (+ yoff 0.0001)})))

(defn draw [{[x y] :location}]
  (q/background 255)
  (q/fill 0)
  (q/ellipse x y 16 16))

(defn run [host]
  (q/defsketch car-sketch
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
