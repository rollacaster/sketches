(ns sketches.generative-artistry.tiled-lines
  (:require [quil.core :as q]
            [quil.middleware :as md]))

(defn setup [])

(defn draw []
  (q/no-loop)
  (q/background 255)
  (q/stroke 0)
  (let [step 30]
    (doall (map
            (fn [xStep]
              (doall
               (map
                (fn [yStep]
                  (q/push-matrix)
                  (q/translate xStep yStep)
                  (let [is-inverted (< 0.5 (q/random 1))]
                    (apply q/line (if is-inverted
                                    [0 0 step step]
                                    [step 0 0 step])))
                  (q/pop-matrix))
                (range 0 (q/height) step))))
            (range 0 (q/width) step)))))

(defn run [host]
  (q/defsketch tiledLines
    :host host
    :setup setup
    :draw draw
    :size [300 300]))
