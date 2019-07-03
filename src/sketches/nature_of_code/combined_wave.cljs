(ns sketches.nature-of-code.combined-wave
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (map #(vector (* % 24)
                [{:amplitude 200
                  :angle-vel 0.01
                  :angle (* % 0.1)}
                 {:amplitude 50
                  :angle-vel 0.03
                  :angle (* % 0.3)}
                 {:amplitude 150
                  :angle-vel 0.06
                  :angle (* % 0.5)}]) (range (/ (q/width) 24))))

(defn update-state [state]
  (map (fn [[x ys]]
         [x (map (fn [{:keys [angle-vel] :as y}] (update y :angle + angle-vel)) ys)])
       state))

(defn combine-waves [waves]
  (reduce (fn [total-y {:keys [angle-vel amplitude angle]}]
            (+ total-y (q/map-range (q/sin angle) -1 1 0 amplitude)))
          0 waves))

(defn draw-wave-element [[x waves]]
  (q/stroke 0)
  (q/fill 0 50)
  (q/ellipse x (combine-waves waves) 48 48))

(defn draw [state]
  (q/background 255)
  (doseq [wave-element state]
    (draw-wave-element wave-element)))

(defn run [host]
  (q/defsketch combined-wave
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
