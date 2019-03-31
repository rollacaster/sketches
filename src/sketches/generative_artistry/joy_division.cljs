(ns sketches.generative-artistry.joy-division
  (:require [quil.core :as q]
            [quil.middleware :as md]))

(defn setup [host])

(defn draw []
  (q/no-loop)
  (q/background 255)
  (q/stroke 0)
  (let [step 20]
    (doall (map
            (fn [yStep]
              (q/begin-shape)
              (doall
               (map
                (fn [xStep]
                  (let [distance-to-center (q/abs (- xStep (/ (q/width) 2)))
                        variance (max (- (/ (q/width) 2) 50 distance-to-center) 0)
                        r (* (q/random 1) (/ variance 2) -1)]
                    (q/curve-vertex xStep (+ r yStep))))
                (range (- step) (+ step step (q/width)) step)))
              (q/end-shape))
            (range 0 (q/height) step)))))

(defn run [host]
  (q/defsketch tiledLines
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
