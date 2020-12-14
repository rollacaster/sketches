(ns sketches.nature-of-code.oscillation.cannon
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(defn setup []
  (q/no-stroke)
  {:location [(* (q/width) 0.1) (* (q/height) 0.8)]
   :velocity [0 0]
   :acceleration [0 0]
   :aAcceleration 0
   :aVelocity 0.2
   :angle 0
   :mass 20})

(defn compute-position [mover]
  (-> mover
      (update :velocity #(v/add (:acceleration mover) %))
      (update :location #(v/add % (v/add (:acceleration mover) (:velocity mover))))
      (update :aVelocity #(+ (:aAcceleration mover) %))
      (update :angle #(+ (:aAcceleration mover) (:aVelocity mover) %))
      (assoc :aAcceleration 0)
      (assoc :acceleration [0 0])))

(defn shoot [{:keys [velocity]}]
  (if (= (v/mag velocity) 0.0)
    [100 -100]
    [0 0]))

(defn update-cannonball [cannonball]
  (-> cannonball
      (m/apply-force (v/add [0.0 3] (shoot cannonball)))
      compute-position))

(defn update-state [cannonball]
  (update-cannonball cannonball))

(defn draw-cannon []
  (q/with-translation [(* (q/width) 0.1) (* (q/height) 0.8)]
    (q/with-fill [0 0 0]
      (q/rect 0 15 30 20)
      (q/with-rotation [(q/radians 225)]
        (q/ellipse 0 0 20 20)
        (q/rect 0 10 20 20)))))

(defn draw-cannonball [{[x y] :location
                        :keys [angle]}]
  (q/rect-mode :center)
  (q/with-translation [x y]
    (q/with-fill [255 0 0]
      (q/with-rotation [angle]
        (q/rect 0 0 15 15)))))

(defn draw [cannonball]
  (q/background 255 255 255)
  (draw-cannonball cannonball)
  (draw-cannon))

(defn run [host]
  (q/defsketch cannon
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
