(ns sketches.generative-desgin.P-01.P-1-1-2-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-stroke)
  {:segment-count 360})

(defn update-state [state]
  state)

(defn draw [{:keys [segment-count]}]
  (q/color-mode :hsb 360 (q/width) (q/height))
  (q/background 360 0 (q/height))

  (let [angle-step (/ 360 segment-count)]
    (q/begin-shape :triangle-fan)
    (q/vertex (/ (q/width) 2) (/ (q/height) 2))
    (doseq [angle (range 0 (+ 360 angle-step) angle-step)]
      (let [radius 100
            vx (+ (/ (q/width) 2) (* (q/cos (q/radians angle)) radius))
            vy (+ (/ (q/height) 2) (* (q/sin (q/radians angle)) radius))]
        (q/vertex vx vy)
        (q/fill angle (q/mouse-x) (q/mouse-y))))
    (q/end-shape)))

(defn key-pressed [state {:keys [key]}]
  (assoc state :segment-count
          (case key
            :1 360
            :2 45
            :3 24
            :4 12
            :5 6)))

(defn run [host]
  (q/defsketch color-spectrum-in-a-circle
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]
    :key-pressed key-pressed))
