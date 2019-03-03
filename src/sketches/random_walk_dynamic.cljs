(ns sketches.random-walk-dynamic
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn setup []
  (def location (atom [(/ (q/width) 2) (/ (q/height) 2)]))
  (q/background 255))

(defn draw []
  (q/stroke 0)
  (let [choice (q/random 1)
        [x y] @location
        velocity (cond
                   (< choice 0.500) [(if (> x (q/mouse-x)) -1 1)
                                     (if (> y (q/mouse-y)) -1 1)]
                   (< choice 0.625) [0 1]
                   (< choice 0.750) [1 0]
                   (< choice 0.875) [-1 0]
                   (< choice 1.000) [0 -1])]
    (let [[x y] (swap! location #(v/add % velocity))]
      (q/point x y))))

(defn run-random-walk-dynamic [host]
  (q/defsketch random-walk-dynamic
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
