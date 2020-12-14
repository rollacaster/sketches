(ns sketches.nature-of-code.oscillation.rotate-baton
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  0)

(defn update-state [rotation]
  (+ 1 rotation))

(defn draw [rotation]
  (q/background 255)
  (q/fill 0)
  (q/translate (/ (q/width) 2) (/ (q/height) 2))
  (q/rotate (q/radians rotation))
  (q/line 0 -100 0 100)
  (q/ellipse 0 -100 20 20)
  (q/ellipse 0 100 20 20))

(defn run [host]
  (q/defsketch rotate-baton
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
