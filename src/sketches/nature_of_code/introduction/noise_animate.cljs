(ns sketches.nature-of-code.introduction.noise-animate
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/frame-rate 3)
  (q/background 255))

(def zoff (atom 0))

(defn draw [host]
  (q/clear)
  (q/background 255)
  (let [xoff (atom 0.0)]
    (doseq [x (range 0 (q/width))]
      (let [yoff (atom 0.0)]
        (doseq [y (range 0 (q/height))]
          (q/stroke (q/map-range (q/noise @xoff @yoff @zoff) 0 1 0 255))
          (q/point x y)
          (swap! yoff #(+ 0.05 %)))
        (swap! xoff #(+ 0.05 %)))))
  (swap! zoff #(+ 0.05 %)))

(defn run [host]
  (q/defsketch noise
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
