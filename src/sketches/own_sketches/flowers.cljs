(ns sketches.own-sketches.flowers
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/color-mode :hsb)
  (q/frame-rate 2)
  1)

(defn constrain-petal-counts [petal-count]
  (if (< petal-count 20) petal-count 0))

(defn update-state [petal-count]
  (constrain-petal-counts (+ petal-count 1)))

(defn draw [petal-count]
  (q/clear)
  (q/translate [(/ (q/width) 2) (/ (q/height) 2)])
  (q/fill (q/random 0 255) 100 255)
  (doseq [angle (range 0 q/TWO-PI (/ q/TWO-PI petal-count))]
    (q/with-rotation [angle]
      (q/bezier 0 0 -50 -100 50 -100 0 0)))
  (q/fill (q/random 0 255) 100 255)
  (doseq [angle (range 0 q/TWO-PI (/ q/TWO-PI petal-count))]
    (q/with-rotation [angle]
      (q/bezier 0 0 -25 -50 25 -50 0 0)))
  (q/fill 200 100 100)
  (q/ellipse 0 0 20 20))


(defn run [host]
  (q/defsketch flowers
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
