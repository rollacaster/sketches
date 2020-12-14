(ns sketches.nature-of-code.oscillation.vehicle
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]))

(defn setup []
  (q/rect-mode :center)
  (m/create-mover 100 [100 100]))

(defn cart-to-pol [[x y]]
  [(Math/sqrt (+ (* x x) (* y y))) (q/atan2 y x)])

(defn pol-to-cart [[r phi]]
  [(* r (q/cos phi)) (* r (q/sin phi))])

(defn steer [{[x y] :velocity :as mover} key]
  (let [[r phi] (cart-to-pol [x y])]
       (cond
         (= key :ArrowLeft) (pol-to-cart [r (+ phi 10)])
         (= key :ArrowRight) (pol-to-cart [r (- phi 10)])
         (= key :ArrowUp) (pol-to-cart [(+ r 5) phi])
         (= key :ArrowDown) (pol-to-cart [(- r 5) phi])
         :else [x y])))

(defn draw [car]
  (q/background 255)
  (q/fill 123)
  (q/stroke 255)
  (q/rect-mode :center)
  (let [{:keys [mass]
         [x y] :location
         [vx vy] :velocity} car
        angle (q/atan2 vy vx)]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate angle)
    (q/rect 0 0 mass (* 0.5 mass))
    (q/pop-matrix)))

(defn update-state [car]
  (-> car
      m/move-through
      m/compute-position))

(defn key-pressed [car {:keys [key]}]
  (m/apply-force car (steer car key)))

(defn run [host]
  (q/defsketch vehicle
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]
    :key-pressed key-pressed))
