(ns sketches.nature-of-code.balloon
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.nature-of-code.vector :as v]))

(defn setup []
  {:location [(/ (q/width) 2) (/ (q/height) 2)]
   :velocity [0 0]
   :xoff 0.001})

(defn keep-inside [[x y]]
  [(if (> x (q/width)) (q/width) (if (< x 0) 0 x))
   (if (> y (q/height)) (q/height) (if (< y 0) 0 y))])

(defn is-stopped [{[_ y] :location [_ vy] :velocity}] (and (<= vy 0.02) (= y 0)))

(defn update-state [state]
  (let [{:keys [xoff velocity location acceleration]} state
        gravity [0 -0.05]
        acceleration [(q/map-range (q/noise xoff) 0 1 -0.05 0.05) 0]
        velocity (v/add gravity (v/add velocity acceleration))
        location (keep-inside (v/add velocity location))]
    (update 
     {:velocity (cond (<= (second location) 0) [0 (- (/ (second velocity) 2))]
                      (is-stopped state) [0 0]
                      :else velocity)
      :location (if (is-stopped state) [(/ (q/width) 2) (/ (q/height) 2)] location)
      :xoff (+ xoff 0.001)}
     :location
     keep-inside)))

(defn draw [{[x y] :location}]
  (q/background 255)
  (q/fill 255 0 0)
  (q/line x (+ y 32) x (+ y 100))
  (q/ellipse x y 45 64))

(defn run [host]
  (q/defsketch balloon
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
