(ns sketches.random-walk
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn setup []
  (def location (atom [(/ (q/width) 2) (/ (q/height) 2)]))
  (q/background 255))

(defn draw []
  (q/stroke 0)
  (let [choice (q/random 1)
        velocity (cond
                   (< choice 0.250) [0 -1]
                   (< choice 0.500) [1 0]
                   (< choice 0.750) [-1 0]
                   (< choice 1.000) [0 1]
                   :else [0 -1])]
    (let [[x y] (swap! location #(v/add % velocity))]
      (q/point x y))))

(defn run-random-walk [host]
  (q/defsketch random-walk
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
