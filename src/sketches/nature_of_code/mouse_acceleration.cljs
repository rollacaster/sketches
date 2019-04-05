(ns sketches.nature-of-code.mouse-acceleration
  (:require [quil.core :as q :include-macros true]
            [sketches.nature-of-code.vector :as v]
            [quil.middleware :as md]))

(defn setup []
  (q/ellipse-mode :center)
  {:acceleration [0 0]
   :velocity [0 0]
   :location [0 0]})

(defn update-state [{:keys [velocity location]}]
  (let [distance (v/sub [(q/mouse-x) (q/mouse-y)] location)
        acceleration (v/mult (v/normalize distance)
                             (* 0.001 (v/mag distance)))
        velocity (v/limit (v/add acceleration velocity) 5)]
    {:acceleration acceleration
     :velocity velocity
     :location (v/add location velocity)}))

(defn draw [{[x y] :location}]
  (q/background 255)
  (q/translate 32 32)
  (q/ellipse x y 32 32))

(defn run [host]
  (q/defsketch mouse-acceleration
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
