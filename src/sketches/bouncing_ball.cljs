(ns sketches.bouncing-ball
  (:require [quil.core :as q :include-macros true]))

(def location (atom (hash-map :x 0 :y 0 :z 0)))
(def velocity (atom (hash-map :x 1.5 :y 1.5 :z 3.5)))

(defn add [v1 v2]
  (hash-map :x (+ (:x v1) (:x v2))
            :y (+ (:y v1) (:y v2))
            :z (+ (:z v1) (:z v2))))

(defn setup []
  (q/background 255))

(defn draw []
  (q/background 255)
  (q/stroke 127)
  (q/no-fill)
  (q/rotate-x q/THIRD-PI)
  (q/rotate-z 0.1)
  (let [location (swap! location #(add % @velocity))
        velocity (swap! velocity (fn [{:keys [x y z]}]
                                   (hash-map
                                    :x (if (or (> (:x location) 125) (< (:x location) -125))
                                         (* x -1) x)
                                    :y (if (or (> (:y location) 90) (< (:y location) -125))
                                         (* y -1) y)
                                    :z (if (or (> (:z location) 90) (< (:z location) -125))
                                         (* z -1) z))))]
    (q/translate (+ 20 (/ (q/width) 2)) 100 -180)
    (q/box 250)
    (q/push-matrix)
    (q/translate (:x location) (:y location) (:z location))
    (q/sphere 40)
    (q/pop-matrix)))

(defn run [host]
  (q/defsketch bouncing-ball
    :host host
    :setup setup
    :draw draw
    :size [500 500]
    :renderer :p3d))
