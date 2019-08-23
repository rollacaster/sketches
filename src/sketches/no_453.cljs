(ns sketches.no-453
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-stroke)
  (q/color-mode :hsb)
  (let [u (/ (q/width) 10)
        v (/ (q/height) 10)
        grid (vec (repeat u (vec (repeat v 1))))]
    (doall
     (for [[x row] (map-indexed list grid)
           [y cell] (map-indexed list row)]
       (do
         (let [color-noise (q/map-range (q/noise (/ x (q/width)) y) 0 1 0 255)
               pos-noise (q/map-range (q/noise x y) 0 1 -20 30)]
           (q/fill color-noise 127 255 color-noise)
           (q/ellipse (+ pos-noise (* u x))
                      (+ pos-noise (* v y))
                      u v)))))))

(defn update-state [])

(defn draw [])

(defn run [host]
  (q/defsketch no453
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
