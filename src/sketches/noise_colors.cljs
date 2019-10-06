(ns sketches.noise-colors
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [nice-color-palettes]
            [clojure.string :as s]))

(def palettes (js->clj nice-color-palettes))

(defn pick-random [list]
  (nth list (rand-int (- (count list) 1))))

(defn pick-random-palette []
  (map
   #(map (fn [s] (q/unhex (apply str s)))
         (partition 2 (rest %)))
   (pick-random palettes)))

(defn setup []
  (q/no-stroke)
  (q/color-mode :hsl)
  (let [w 10
        seed (q/random 300)
        palette (pick-random-palette)]
    (doall
     (for [[row x] (map-indexed #(vector %1 (* %2 10)) (range (/ (q/width) w)))
           [cell y] (map-indexed #(vector %1 (* %2 10)) (range (/ (q/height) w)))
           :let [nx (+ seed (/ row w))
                 ny (+ seed (/ cell w))]]
       (do
         (let [color (nth palette (q/round (q/map-range (q/noise nx ny) 0 1 0 (dec (count palette)))))
               pos-noise (q/map-range (q/noise nx ny) 0 1 -20 30)]
           (apply q/fill (concat color [127]))
           (q/rect (+ pos-noise x)
                      (+ pos-noise y)
                      (q/map-range (q/noise nx ny) 0 1 10 20)
                      (q/map-range (q/noise nx ny) 0 1 10 20))))))))

(defn update-state [])

(defn draw [])

(defn run [host]
  (q/defsketch no453
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
