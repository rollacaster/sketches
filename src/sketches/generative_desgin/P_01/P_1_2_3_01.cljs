(ns sketches.generative-desgin.P-01.P-1-2-3-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def tile-count-x 50)
(def tile-count-y 10)

(defn color-parts [h s b]
  {:hueValues (into [] (for [_ (range 0 tile-count-x)] (h)))
   :saturationValues (into [] (for [_ (range 0 tile-count-x)] (s)))
   :brightnessValues (into [] (for [_ (range 0 tile-count-x)] (b)))})

(defn setup []
  (q/color-mode :hsb 360 100 100 100)
  (q/no-stroke)
  (color-parts #(q/random 360) #(q/random 100) #(q/random 100)))

(defn update-state [state]
  state)

(defn draw [{:keys [hueValues saturationValues brightnessValues]}]
  (q/background 0 0 100)
  (let [mx (q/constrain (q/mouse-x) 0 (q/width))
        my (q/constrain (q/mouse-y) 0 (q/height))
        current-tile-count-x (int (q/map-range mx 0 (q/width) 1 tile-count-x))
        current-tile-count-y (int (q/map-range my 0 (q/width) 1 tile-count-y))
        tile-width (/ (q/width) current-tile-count-x)
        tile-height (/ (q/height) current-tile-count-y)]
    (doseq [grid-y (range 0 tile-count-y)
          grid-x (range 0 tile-count-x)]
      (let [pos-x (* tile-width grid-x)
            pos-y (* tile-height grid-y)
            index (mod (+ grid-x (* tile-count-x grid-y)) current-tile-count-x)]
        (q/fill (hueValues index) (saturationValues index) (brightnessValues index))
        (q/rect pos-x pos-y tile-width tile-height)))))

(defn key-pressed [state {:keys [key]}]
  (case key
    :1 (color-parts #(q/random 360) #(q/random 100) #(q/random 100))
    :2 (color-parts #(q/random 360) #(q/random 100) #(identity 100))
    :3 (color-parts #(q/random 360) #(identity 100) #(q/random 100))
    :4 (color-parts #(identity 0) #(identity 0) #(q/random 100))
    :5 (color-parts #(identity 195) #(identity 100) #(q/random 100))
    :6 (color-parts #(identity 195) #(q/random 100) #(identity 100))
    :7 (color-parts #(q/random 180) #(q/random 80 100) #(q/random 50 90))
    :8 (color-parts #(q/random 180 360) #(q/random 80 100) #(q/random 50 90))
    state))

(defn run [host]
  (q/defsketch color-palettes-rules
    :host host
    :setup setup
    :draw draw
    :update update-state
    :key-pressed key-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
