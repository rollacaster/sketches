(ns sketches.generative-desgin.P-02.P-2-1-2-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def tile-count 20)

(defn setup []
  (q/no-fill))

(defn update-state [])

(defn draw []
  (q/translate (/ (/ (q/width) tile-count) 2)
               (/ (/ (q/height) tile-count) 2))
  (q/background 255)

  (q/stroke 0 0 0 130)
  (q/stroke-weight (/ (q/mouse-y) 60))

  (doseq [grid-y (range 0 tile-count)
          grid-x (range 0 tile-count)]
    (let [pos-x (* (/ (q/width) tile-count) grid-x)
          pos-y (* (/ (q/height) tile-count) grid-y)
          shift-x (/ (q/random (- (q/mouse-x)) (q/mouse-x)) 20)
          shift-y (/ (q/random (- (q/mouse-x)) (q/mouse-x)) 20)]
      (q/ellipse (+ pos-x shift-x) (+ pos-y shift-y) (/ (q/mouse-y) 15) (/ (q/mouse-y) 15)))))

(defn run [host]
  (q/defsketch movement-in-grid
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
