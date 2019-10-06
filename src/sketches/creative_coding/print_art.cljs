(ns sketches.creative-coding.print-art
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [nice-color-palettes]))

(def palettes (js->clj nice-color-palettes))

(defn pick-random [list]
  (nth list (rand-int (- (count list) 1))))

(defn pick-random-palette []
  (map
   #(map (fn [s] (q/unhex (apply str s)))
         (partition 2 (rest %)))
   (pick-random palettes)))


(defn setup []
  (let [grid 40
        font "Helvetica"
        palette (pick-random-palette)
        points (for [x (range grid)
                     y (range grid)]
                 (let [u (/ x (- grid 1))
                       v (/ y (- grid 1))]
                   {:color (nth palette (rand-int 3))
                    :position [u v]
                    :radius (* (q/abs (q/noise u v)) 0.2)
                    :rotation (* (q/abs (q/noise u v)) 0.5)}))]
    (doseq [{:keys [radius color rotation]
             [u v] :position} points]
      (q/push-matrix)
      (apply q/fill color)
      (q/translate (q/map-range u 0 1 0 (q/width))
                   (q/map-range v 0 1 0 (q/height)))
      (q/rotate rotation)
      (q/text-font font (* radius (q/width)))
      (q/text "=" 0 0)
      (q/pop-matrix))))

(defn run [host]
  (q/defsketch print-art
    :host host
    :setup setup
    :size [300 300]))
