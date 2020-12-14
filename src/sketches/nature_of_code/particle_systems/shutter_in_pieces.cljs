(ns sketches.nature-of-code.particle-systems.shutter-in-pieces
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(defn setup []
  (q/no-stroke)
  (map
   (fn [[x0 y0]]
     {:particles (for [x (range 0 100 10)
                       y (range 0 100 10)]
                   (-> (m/create-mover 10 [(+ x0 x) (+ y0 y)])
                       (assoc :lifespan 255)))
      :exploding false})
   (map
    (fn [x y] [x y])
    (range 50 (- (q/width) 50) (/ (- (q/width) 50) 2))
    (range 50 (- (q/height) 50) (/ (- (q/height) 50) 2)))))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn compute-explosion-force [particle particles]
  (let [[x1 y1] (:location (first particles))
        [x2 y2] (:location (last particles))
        mid [(+ x1 (/ (- x2 x1) 2)) (+ y1 (/ (- y2 y1) 2))]
        [d1 d2] (v/mult (v/normalize (v/sub (:location particle) mid)) 50)]
    [d1 d2]))

(defn update-particle-system [{:keys [particles exploding]
                               :as particle-system}]
  (if exploding
    (assoc particle-system :particles (->> particles
                                           (map (fn [particle]
                                                  (-> particle
                                                      (update :lifespan dec)
                                                      m/compute-position)))
                                           (remove is-dead)))
    particle-system))

(defn update-state [particle-systems]
  (map update-particle-system particle-systems))

(defn draw-particle [{:keys [lifespan angle mass]
                      [x y] :location
                      :as particle}]
  (q/push-matrix)
  (q/rect-mode :center)
  (q/translate x y)
  (q/rotate angle)
  (q/fill 127 0 0 lifespan)
  (q/rect 0 0 mass mass)
  (q/pop-matrix)
  particle)

(defn draw [particle-systems]
  (q/background 255)
  (doseq [particle-system particle-systems]
    (doseq [particle (:particles particle-system)]
      (draw-particle particle))))

(defn is-particle-system-clicked [{:keys [particles]} x y]
  (let [[x1 y1] (:location (first particles))
        [x2 y2] (:location (last particles))]
    (and (> x x1) (> y y1) (< x x2) (< y y2))))

(defn mouse-pressed [particle-systems {:keys [x y]}]
  (map (fn [particle-system]
         (-> particle-system
             (update :particles #(map (fn [particle] (m/apply-force
                                                     particle
                                                     (compute-explosion-force particle %))) %))
             (assoc :exploding (or (:exploding particle-system) (is-particle-system-clicked particle-system x y)))))
       particle-systems))

(defn run [host]
  (q/defsketch shutter-in-pieces
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :mouse-pressed mouse-pressed
    :size [300 300]))
