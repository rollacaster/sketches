(ns sketches.nature-of-code.random-walk-gaussian
  (:require [quil.core :as q :include-macros true]
            [sketches.nature-of-code.vector :as v]))

(defn setup []
  (def walker (atom [150 150]))
  (q/background 255))

(defn draw []
  (q/stroke 0)
  (q/point 150 150)
  (let [choice (rand-int 4)
        step (cond (= choice 0) [(* (q/random-gaussian) 5) 0]
                   (= choice 1) [0 (* (q/random-gaussian) 5)]
                   (= choice 2) [(-(* (q/random-gaussian) 5)) 0]
                   :else [0 (-(* (q/random-gaussian) 5))])
        [x y] (swap! walker (fn [walker] (v/add walker step)))]
    (q/point x y)))

(defn run [host]
  (q/defsketch random-walk-gaussian
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
