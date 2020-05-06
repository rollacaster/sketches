(ns sketches.generative-desgin.P-01.P-1-1-1-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-stroke)
  (q/color-mode :hsb (q/width) (q/height) 100))

(defn update-state [])

(defn draw []
  (let [step-x (+ (q/mouse-x) 2)
        step-y (+ (q/mouse-y) 2)]
    (doseq [grid-y (range 0 (q/height) step-y)
            grid-x (range 0 (q/width) step-x)]
      (q/fill grid-x (- (q/height) grid-y) 100)
      (q/rect grid-x grid-y step-x step-y))))

(defn run [host]
  (q/defsketch P_1_1_1_01
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
