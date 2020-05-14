(ns sketches.generative-desgin.P-02.P-2-0-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup [])

(defn update-state [])

(defn draw []
  (q/background 255)
  (q/translate (/ (q/width) 2) (/ (q/height) 2))
  (let [circle-resolution (q/map-range (q/mouse-y) 0 (q/height) 2 80)
        radius (+ (- (q/mouse-x) (/ (q/width) 2)) 0.5)
        angle (/ q/TWO-PI circle-resolution)]
    (q/stroke-weight (/ (q/mouse-y) 20))
    (q/begin-shape)
    (doseq [i (range 0 circle-resolution)]
      (let [x (* (q/cos (* angle i)) radius)
            y (* (q/sin (* angle i)) radius)]
        (q/line 0 0 x y)))
    (q/end-shape :close)))

(defn run [host]
  (q/defsketch circle-lines
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
