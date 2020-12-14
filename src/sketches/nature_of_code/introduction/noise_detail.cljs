(ns sketches.nature-of-code.introduction.noise-detail
  (:require [quil.core :as q :include-macros true]))

;; float xoff = 0.0;
;; for (int x = 0; x < width; x++) {
;; For every xoff, start yoff at 0.
;;   float yoff = 0.0;
;;   for (int y = 0; y < height; y++) {
;; Use xoff and yoff for noise().
;;     float bright = map(noise(xoff,yoff),0,1,0,255);
;; Use x and y for pixel location.
;;     pixels[x+y*width] = color(bright);
;; Increment yoff.
;;     yoff += 0.01;
;;   }
;; Increment xoff.
;;   xoff += 0.01;
;; }
(defn setup []
  (q/color-mode :hsb)
  (q/noise-detail 4 0.35)
  (let [xoff (atom 0.0)]
    (doseq [x (range 0 (q/width))]
      (let [yoff (atom 0.0)]
        (doseq [y (range 0 (q/height))]
          (q/stroke (q/map-range (q/noise @xoff @yoff) 0 1 0 255) 255 127)
          (q/point x y)
          (swap! yoff #(+ 0.03 %)))
        (swap! xoff #(+ 0.03 %))))))

(defn draw [])

(defn run [host]
  (q/defsketch noise-detail
    :host host
    :setup setup host
    :draw draw host
    :size [300 300]))
