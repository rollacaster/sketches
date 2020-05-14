(ns sketches.generative-desgin.P-02.P-2-1-1-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def tile-count 20)

(defn setup [])

(defn update-state [])

(defn draw []
  (q/clear)
  (q/stroke-cap :round)

  (q/random-seed 0)

  (doseq [grid-y (range 0 tile-count)
          grid-x (range 0 tile-count)]
    (let [pos-x (* (/ (q/width) tile-count) grid-x)
          pos-y (* (/ (q/height) tile-count) grid-y)
          toggle (int (q/random 0 2))]
      (when (= toggle 0)
        (q/stroke-weight (/ (q/mouse-x) 20))
        (q/line pos-x pos-y (+ pos-x (/ (q/width) tile-count)) (+ pos-y (/ (q/height) tile-count))))
      (when (= toggle 1)
        (q/stroke-weight (/ (q/mouse-y) 20))
        (q/line pos-x (+ pos-y (/ (q/height) tile-count)) (+ pos-x (/ (q/width) tile-count)) pos-y)))))

(defn run [host]
  (q/defsketch alignment-in-a-grid
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
