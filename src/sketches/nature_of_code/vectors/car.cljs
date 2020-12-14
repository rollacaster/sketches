(ns sketches.nature-of-code.vectors.car
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  (q/ellipse-mode :center)
  {:acceleration [0 0]
   :velocity [0 0]
   :location [150 150]})

(defn move-through [{[x y] :location :as vehicle}]
  (assoc vehicle :location [(cond
                              (> x (q/width)) 0
                              (< x 0) (q/width)
                              :else x)
                            (cond
                              (> y (q/height)) 0
                              (< y 0) (q/height)
                              :else y)]))

(defn update-state [{:keys [location acceleration velocity]}]
  (move-through
   {:acceleration acceleration
    :velocity (v/limit (v/add velocity acceleration) 10)
    :location (v/add (v/add velocity acceleration) location)}))

(defn draw [{[x y] :location}]
  (q/background 255)
  (q/fill 0)
  (q/ellipse x y 16 16))

(defn on-key-down [state ev]
  (cond (= (:key ev) :up) (update state :acceleration v/add [0 -0.001])
        (= (:key ev) :down) (update state :acceleration v/add [0 0.001])
        :else state))

(defn run [host]
  (q/defsketch car-sketch
    :host host
    :setup setup
    :key-pressed on-key-down
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
