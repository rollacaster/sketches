(ns sketches.nature-of-code.custom-waves
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (list
   (let [element-counts (/ (q/width) 24)
         angle-vel 0.02]
     {:amplitude 200
      :angle-vel angle-vel
      :elements (map #(vector (* % 24) (* % angle-vel)) (range element-counts))
      :location [0 (* 0.1 (q/height))]})
   (let [element-counts (/ (q/width) 48)
         angle-vel 0.3]
     {:amplitude 50
      :angle-vel angle-vel
      :elements (map #(vector (* % 24) (* % angle-vel)) (range element-counts))
      :location [0 (* 0.8 (q/height))]})))

(defn update-element [angle-vel [x y]]
  [(mod (+ 1 x) (q/width)) (+ angle-vel y)])

(defn update-wave [{:keys [angle-vel] :as wave}]
  (update wave :elements (partial map (partial update-element angle-vel))))

(defn update-state [waves]
  (map update-wave waves))

(defn draw-wave [{:keys [angleVel elements amplitude]
                  [l1 l2] :location}]
  (doseq [[x angle] elements]
    (let [y (q/map-range (q/sin angle) -1 1 0 amplitude)]
      (q/stroke 0)
      (q/fill 0 50)
      (q/ellipse (+ l1 x) (+ l2 y) 48 48))))

(defn draw [waves]
  (q/background 255)
  (doseq [wave waves]
    (draw-wave wave)))

(defn run [host]
  (q/defsketch custom-waves
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
