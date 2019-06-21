(ns sketches.nature-of-code.insect
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn setup []
  '({:angle [0 0]
     :velocity [0 0.08]
     :amplitude [-25 -25]
     :location [-30 -30]}
    {:angle [0 0]
     :velocity [0 -0.08]
     :amplitude [25 25]
     :location [30 -30]}
    {:angle [0 0]
     :velocity [0 0.08]
     :amplitude [0 -25]
     :location [-80 0]}
    {:angle [0 0]
     :velocity [0 0.08]
     :amplitude [0 25]
     :location [80 0]}
    {:angle [0 0]
     :velocity [0 0.08]
     :amplitude [-25 -25]
     :location [-30 30]}
    {:angle [0 0]
     :velocity [0 0.08]
     :amplitude [25 25]
     :location [30 30]}))

(defn draw-foot [{[a1 a2] :angle [am1 am2] :amplitude [l1 l2] :location}]
  (let [x (+ l1 (* am1 (q/cos a1)))
        y (+ l2 (* am2 (q/cos a2)))]
    (q/push-matrix)
    (q/stroke 175)
    (q/fill 175)
    (q/translate (/ (q/width) 2) (/ (q/height) 2))
    (q/stroke-weight 4)
    (q/line 0 0 x y)
    (q/ellipse x y 20 20)
    (q/pop-matrix)))

(defn draw [state]
  (q/background 255)
  (doseq [foot state]
    (draw-foot foot))
  (q/fill 175)
  (q/stroke 175)
  (q/ellipse (/ (q/width) 2) (/ (q/height) 2) 80 120)
  (q/ellipse (/ (q/width) 2) (- (/ (q/height) 2) 60) 50 50)
  (q/fill 0)
  (q/ellipse (- (/ (q/width) 2) 10) (- (/ (q/height) 2) 70) 10 10)
  (q/ellipse (+ (/ (q/width) 2) 10) (- (/ (q/height) 2) 70) 10 10))

(defn update-foot [{:keys [velocity] :as foot}]
  (update foot :angle v/add velocity))

(defn update-state [state]
  (map update-foot state))

(defn run [host]
  (q/defsketch insect
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
