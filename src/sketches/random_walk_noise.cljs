(ns sketches.random-walk-noise
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn setup []
  (def walker (atom [(/ (q/width) 2) (/ (q/height) 2)]))
  (def tx (atom 0))
  (q/background 255))

(defn draw []
  (q/stroke 0)
  (let [tx (swap! tx #(+ 0.01 %))
        choice (rand-int 4)
        step (q/map-range (q/noise tx) 0 1 0 10)
        new-position (cond (= choice 0) [0 step]
                           (= choice 1) [step 0]
                           (= choice 2) [(- step) 0]
                           :else [0 (- step)])
        [x y] (swap! walker #(v/add % new-position))]
    (q/point x y)))

(defn run [host]
  (q/defsketch random-walk-noise
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
