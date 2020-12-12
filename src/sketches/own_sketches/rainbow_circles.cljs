(ns sketches.own-sketches.rainbow-circles
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/text-align :center)
  (q/color-mode :hsb)
  (q/no-stroke)
  0)

(defn update-state [state]
  (mod (+ 0.02 state) q/PI))

(defn draw [state]
  (q/background 0 0 255)
  (q/fill 0)
  (let [step (/ (q/width) 25)]
    (doseq [x (range 0 (+ (q/width) step) step)
            y (range 0 (+ (q/height) step) step)]
      (let [even-x (= (mod (/ x step) 2) 0)
            even-y (= (mod (/ y step) 2) 0)
            pulse (* step (cond
                            (and even-x even-y) (q/sin state)
                            (and (not even-x) even-y) (q/cos state)
                            (and even-x (not even-y)) (q/cos state)
                            (and (not even-x) (not even-y)) (q/sin state)))]
        (q/fill (q/map-range x 0 (+ (q/width) step) 0 255) 255 200)
        (q/ellipse x y
                   (* 2 pulse (q/sin state))
                   (* 2 pulse (q/sin state)))))))

(defn run [host]
  (q/defsketch rainbow-circles
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
