(ns sketches.nature-of-code.introduction.paint-splatter
  (:require [quil.core :as q :include-macros true]))

(defn draw []
  (let [sd 100
        mean (/ (q/width) 2)
        x (+ (* (q/random-gaussian) sd) mean)
        y (+ (* (q/random-gaussian) sd) mean)]
    (q/fill (+ (* (q/random-gaussian) 50) 128)
            (+ (* (q/random-gaussian) 50) 128)
            (+ (* (q/random-gaussian) 50) 255))
    (q/ellipse x y 10 10)))

(defn run [host]
  (q/defsketch paint-splatter
    :host host
    :draw draw
    :size [300 300]))
