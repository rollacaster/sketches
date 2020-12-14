(ns sketches.nature-of-code.oscillation.perlin-wave
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (map #(hash-map :angle (* % 0.1) :x (* % 24)) (range (/ (q/width) 24))))

(defn draw [angles]
  (q/background 255)
  (doseq [{:keys [x angle]} angles]
    (let [y (q/map-range (q/noise angle) 0 1 0 (q/height))]
      (q/stroke 0)
      (q/fill 0 50)
      (q/ellipse x y 48 48))))

(defn update-state [state]
  (map #(update % :angle + 0.02) state))

(defn run [host]
  (q/defsketch perlin-wave
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
