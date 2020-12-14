(ns sketches.nature-of-code.fractals.own-cantor
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn draw-circle [x y r]
  (q/ellipse x y r r)
  (q/ellipse (+ x (/ r 2)) y (/ r 2) (/ r 2))
  (q/ellipse (- x (/ r 2)) y (/ r 2) (/ r 2)))

(defn cantor [x y l]
  (when (>= l 1)
    (draw-circle x y l)
    #_(q/line x y (+ x l) y)
    (let [y2 (+ y 20)]
      (cantor x y2 (/ l 3))
      (cantor (+ x (* l (/ 2 3))) y2 (/ l 3)))))

(defn draw [state]
  (q/clear)
  (q/translate 0 (/ (q/height) 2))
  (q/background 255)
  (q/stroke-weight 5)
  (cantor 20 20 (/ (q/width) 1)))



(defn run [host]
  (q/defsketch own-cantor
    :host host
    :draw draw
    :middleware [md/fun-mode]
    :size [300 300]))
