(ns sketches.generative-desgin.P-01.P-1-2-1-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn shake-colors [{:keys [tile-count-y] :as state}]
  (loop [i 0 state state]
    (let [colors-added (-> state
                           (assoc-in [:colors-left i] (q/color (q/random 0 60) (q/random 0 100) 100))
                           (assoc-in [:colors-right i] (q/color (q/random 160 190) 100 (q/random 0 100))))]
      (if (= i tile-count-y)
        colors-added
        (recur (inc i) colors-added)))))

(defn setup []
  (q/no-stroke)
  (shake-colors {:tile-count-x 2
                 :tile-count-y 10
                 :colors-left [] :colors-right []}))

(defn update-state [state]
  (-> state
      (assoc :tile-count-x (int (q/map-range (q/mouse-x) 0 (q/width) 2 100)))
      (assoc :tile-count-y (int (q/map-range (q/mouse-y) 0 (q/height) 2 10)))))

(defn draw [{:keys [tile-count-x tile-count-y colors-left colors-right]}]
  (let [tile-width (/ (q/width) tile-count-x)
        tile-height (/ (q/height) tile-count-y)]
    (doseq [grid-y (range 0 tile-count-y)]
      (let [col1 (nth colors-left grid-y)
            col2 (nth colors-right grid-y)]
        (doseq [grid-x (range 0 tile-count-x)]
          (let [amount (q/map-range grid-x 0 (- tile-count-x 1) 0 1)
                intercol (q/lerp-color col1 col2 amount)
                pos-x (* tile-width grid-x)
                pos-y (* tile-height grid-y)]
            (q/fill intercol)
            (q/rect pos-x pos-y tile-width tile-height)))))))

(defn run [host]
  (q/defsketch palettes-interpolation
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-released shake-colors
    :middleware [md/fun-mode]
    :size [300 300]))
