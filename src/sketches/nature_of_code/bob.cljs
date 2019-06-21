(ns sketches.nature-of-code.bob
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn draw []
  (q/background 255)
  (let [amplitude 110.0
        period 80.0
        x (* amplitude (q/cos (/ (* q/TWO-PI (q/frame-count)) period)))
        y (* 60 (q/abs (q/sin (/ (* q/TWO-PI (q/frame-count)) period))))]
    (q/push-matrix)
    (q/translate (/ (q/width) 2) 0)
    (q/line 0 0 x (+ y (/ (q/height) 2)))
    (q/ellipse x (+ y (/ (q/height) 2)) 80 80)
    (q/pop-matrix)))

(defn run [host]
  (q/defsketch bob
    :host host
    :draw draw
    :size [300 300]))
