(ns sketches.rac-sketches.rotating-angles
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  {:angle-lights-0 0
   :angle (q/random 0 q/TWO-PI)})
(defn update-state [state]
  (-> state
      (update :angle-lights-0 (fn [angle] (mod (+ angle 0.04) 100000)))))

(defn draw-beams [[x0 y0] r angles angle]
  (q/with-translation [x0 y0]
    (q/with-rotation [angle]
      (doseq [angle angles]
        (let [x1 (* r (Math/cos angle))
              y1 (* r (Math/sin angle))]
          (q/line 0 0 x1 y1))))))

(defn x [proportion]
  (* (q/width) (/ proportion 100)))

(defn y [proportion]
  (* (q/height) (/ proportion 100)))

(defn oscillate-value [value from to]
  (q/map-range (q/sin value) -1 1 from to))


(defn draw [{:keys [angle-lights-0 angle]}]
  (q/clear)
  (doseq [x0 (range 0 (q/width) 20)
          y0 (range 0 (q/width) 20)]
    (draw-beams [(x x0) (y y0)]
                (/ (q/width) 5)
                (range 0 angle q/QUARTER-PI)
                (oscillate-value (q/sin angle-lights-0) 0 q/QUARTER-PI))))

(defn run [host]
  (q/defsketch lights
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
