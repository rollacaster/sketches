(ns sketches.nature-of-code.asteroids
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(defn setup []
  (m/create-mover 50 [(/ (q/width) 2) (/ (q/height) 2)]))

(defn draw [spaceship]
  (q/background 255)
  (q/fill 126)
  (q/stroke-weight 2)
  (let [{:keys [mass angle] [x y] :location} spaceship]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate angle)
    (q/triangle (/ mass 2) 0 (- (/ mass 2)) (- (/ mass 2)) (- (/ mass 2)) (/ mass 2))
    (q/rect (- (- (/ mass 2)) 5) 5 5 5)
    (q/rect (- (- (/ mass 2)) 5) -5 5 5)
    (q/pop-matrix)))

(defn update-state [{:keys [velocity] :as spaceship}]
  (-> spaceship
      (m/apply-force (v/mult velocity -0.2))
      (m/move-through)
      (m/compute-position)))

(defn key-pressed [{:keys [angle] :as spaceship} {:keys [key]}]
  (cond (= key :a) (update spaceship :angle + 0.2)
        (= key :d) (update spaceship :angle - 0.2)
        (= key :w) (assoc spaceship :acceleration [(q/cos angle) (q/sin angle)])
        :else spaceship))

(defn run [host]
  (q/defsketch asteroids
    :host host
    :setup setup
    :draw draw
    :update update-state
    :key-pressed key-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
