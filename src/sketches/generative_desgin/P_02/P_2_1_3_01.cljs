(ns sketches.generative-desgin.P-02.P-2-1-3-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def tile-count-x 10)
(def tile-count-y 10)

(defn setup []
  (q/no-fill)
  (q/stroke 0 128)
  {:tile-width (/ (q/width) tile-count-x)
   :tile-height (/ (q/height) tile-count-y)})

(defn update-state [state]
  state)

(defn draw [{:keys [tile-width tile-height]}]
  (q/background 255)
  (q/translate (/ tile-width 2) (/ tile-height 2))
  (q/random-seed 0)
  (let [circle-count (+ (/ (q/mouse-x) 30) 1)
        end-size (q/map-range (q/mouse-x) 0 (Math/max (q/width) (q/mouse-x)) (/ tile-width 2) 0)
        end-offset (q/map-range (q/mouse-y) 0 (Math/max (q/height) (q/mouse-y)) 0 (/ (- tile-width end-size) 2))]
    (doseq [grid-y (range 0 tile-count-y)
            grid-x (range 0 tile-count-x)]
      (q/push-matrix)
      (q/translate (* tile-width grid-x) (* tile-height grid-y))
      (q/scale 1 (/ tile-height tile-width))
      (case (int (q/random 0 4))
        0 (q/rotate (- q/HALF-PI))
        1 (q/rotate 0)
        2 (q/rotate q/HALF-PI)
        3 (q/rotate q/PI))
      (doseq [i (range 0 circle-count)]
        (let [diameter (q/map-range i 0 circle-count tile-width end-size)
              offset (q/map-range i 0 circle-count 0 end-offset)]
          (q/ellipse offset 0 diameter diameter)))
      (q/pop-matrix))))

(defn run [host]
  (q/defsketch complex-modules-in-grid
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
