(ns sketches.noise-terrain
  (:require [quil.core :as q]))

(defn setup []
  (q/stroke 127)
  (q/no-fill)
  (q/translate (/ (q/width) 2) (/ (q/height) 2))
  (q/rotate-x (/ q/PI 3))
  (q/translate (/ (- (q/width)) 2) (/ (- (q/height)) 2))
  (let [scale 10
        yoff (atom 0.0)
        xoff (atom 0.0)
        cols (/ (q/width) scale)
        rows (/ (q/height) scale)
        terrain (let [col (list)]
                  (for [y (range 0 30)]
                    (do
                      (swap! yoff + 0.1)
                      (let [row (list)]
                        (for [x (range 0 30)]
                          (do
                            (swap! xoff + 0.1)
                            (q/map-range (q/noise @xoff @yoff) 0 1 -50 50)))))))]
    (doall
     (for [y (range 0 (dec rows))]
       (do
         (q/begin-shape :triangle-strip)
         (doall
          (for [x (range 0 cols)]
            (do
              (q/vertex (* x scale) (* y scale) (nth (nth terrain y) x))
              (q/vertex (* x scale) (* (inc y) scale) (nth (nth terrain (inc y)) x)))))
         (q/end-shape))))))

(defn draw []
)

(defn run [host]
  (q/defsketch noise-terrain
    :host host
    :setup setup
    :draw draw
    :size [300 300]
    :renderer :p3d))
