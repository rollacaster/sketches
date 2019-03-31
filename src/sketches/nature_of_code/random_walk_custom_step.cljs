(ns sketches.nature-of-code.random-walk-custom-step
  (:require [quil.core :as q :include-macros true]
            [sketches.nature-of-code.vector :as v]))

(defn setup []
  (def location (atom [(/ (q/width) 2) (/ (q/height) 2)]))
  (q/background 255))

(defn custom-prop []
  (loop []
      (let [r1 (rand 1)
            r2 (rand 1)]
        (if (< r1 (* r2 r2))
          r2
          (recur)))))

(defn draw []
  (q/stroke 0)
  (let [choice (q/random 1)
        step-size (custom-prop)
        velocity (cond
                   (< choice 0.25) [0 step-size]
                   (< choice 0.50) [step-size 0]
                   (< choice 0.75) [(- step-size) 0]
                   (< choice 1.0) [0 (- step-size)])]
    (let [[x y] (swap! location #(v/add % velocity))]
      (q/point x y))))

(defn run [host]
  (q/defsketch random-walk-custom-step
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
