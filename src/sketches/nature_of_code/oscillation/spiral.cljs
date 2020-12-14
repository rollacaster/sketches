(ns sketches.nature-of-code.oscillation.spiral
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  {:radius 0
   :theta 0})

(defn draw [{:keys [radius theta]}]
  (q/no-stroke)
  (q/fill 0)
  (let [x (* radius (q/cos theta))
        y (* radius (q/sin theta))]
    (q/ellipse (+ x (/ (q/width) 2)) (+ y (/ (q/height) 2)) 16 16)))

(defn update-state [state]
  (-> state
      (update :theta + 0.05)
      (update :radius + 0.2)))

(defn run [host]
  (q/defsketch spiral
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
