(ns sketches.generative-desgin.P-01.P-1-0-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-cursor)
  (q/color-mode :hsb 360 100 100)
  (q/rect-mode :center)
  (q/no-stroke))

(defn update-state [])

(defn draw []
  (q/background (q/map-range (q/mouse-y) 0 300 0 360) 100 100)
  (q/fill (- 360 (q/map-range (q/mouse-y) 0 300 0 360)) 100 100)
  (q/rect 150 150 (+ (q/mouse-x) 1) (+ (q/mouse-x) 1)))

(defn run [host]
  (q/defsketch p1001
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
