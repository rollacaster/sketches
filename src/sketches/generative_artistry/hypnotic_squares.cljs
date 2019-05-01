(ns sketches.generative-artistry.hypnotic-squares
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (let [final-size 3
        offset 2
        tile-step (/ (- (q/width) (* offset 2)) 7)
        start-size tile-step ]
    (defn draw [x y width height x-movement y-movement steps start-steps]
      (q/rect x y width height)
      (if (>= steps 0)
        (let [new-size (+ (* start-size (/ steps start-steps)) final-size)
              new-x (+ x (/ (- width new-size) 2))
              tilted-x (- new-x (* (/ (- x new-x) (+ steps 2)) x-movement))
              new-y (+ y (/ (- height new-size) 2))
              tilted-y (- new-y (* (/ (- y new-y) (+ steps 2)) y-movement))]
          (draw tilted-x tilted-y new-size new-size x-movement y-movement (dec steps) start-steps))))
    (doall
     (for [x (range offset (- (q/width) offset) tile-step)
           y (range offset (- (q/height) offset) tile-step)]
       (let [start-steps (+ 2 (Math/ceil (q/random 3)))]
         (draw x y start-size start-size (Math/floor (q/random -1 1)) (Math/floor (q/random -1 1)) start-steps start-steps))))))

(defn run [host]
  (q/defsketch hypnotic-squers
    :host host
    :setup setup
    :size [300 300]))
