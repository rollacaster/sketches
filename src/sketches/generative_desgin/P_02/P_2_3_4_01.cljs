(ns sketches.generative-desgin.P-02.P-2-3-4-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  {:x (q/mouse-x)
   :y (q/mouse-y)
   :step-size 5
   :module-size 25
   :angle 0
   :d 0
   :line-module (q/load-image "images/dynamic-brush.svg")})

(defn update-state [{:keys [x y step-size] :as state}]
  (if (and (q/mouse-pressed?) (= (q/mouse-button) :left))
    (let [d (q/dist x y (q/mouse-x) (q/mouse-y))]
      (if (> d step-size)
        (let [angle (q/atan2 (- (q/mouse-y) y) (- (q/mouse-x) x))]
          (-> state
              (assoc :d d)
              (assoc :angle angle )
              (update :x + (* (q/cos angle) step-size))))
        state))
    state))

(defn draw [{:keys [angle line-module module-size d] :as state}]
  
  (when (and (q/mouse-pressed?) (= (q/mouse-button) :left))
    (q/push-matrix)
    (q/translate (q/mouse-x) (q/mouse-y))
    (q/rotate (+ angle q/PI))
    (when (q/loaded? line-module) (q/image line-module 0 0 d module-size))
    (q/pop-matrix)))

(defn mouse-pressed [state {:keys [x y]}]
  (assoc state :x x :y y))

(defn run [host]
  (q/defsketch dynamic-brushes
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-pressed mouse-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
