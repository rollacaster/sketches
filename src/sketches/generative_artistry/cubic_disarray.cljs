(ns sketches.generative-artistry.cubic-disarray
  (:require [quil.core :as q]))

(defn setup [])

(defn draw []
  (q/no-loop)
  (q/background 255)
  (q/stroke 0)
  (q/stroke-weight 2)
  (q/rect-mode :center)
  (let [step 30]
    (q/translate (/ step 2) (/ step 2))
    (doall (map
            (fn [xStep]
              (doall
               (map
                (fn [yStep]
                  (q/push-matrix)
                  (let [max-displacement 15
                        max-rotation 20
                        rotate-amt (* (/ yStep (q/height))
                                      (/ q/PI 180)
                                      (if (< (q/random 1) 0.5) -1 1)
                                      (q/random 1)
                                      max-rotation)
                        translate-amt (* (/ yStep (q/height))
                                         (if (< (q/random 1) 0.5) -1 1)
                                         (q/random 1)
                                         max-displacement)]
                    (q/translate (+ xStep translate-amt) (+ yStep))
                    (q/rotate rotate-amt))
                  (q/rect 0 0 step step)
                  (q/pop-matrix))
                (range 0 (q/height) step))))
            (range 0 (q/width) step)))))

(defn run [host]
  (q/defsketch cubic-dissary
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
