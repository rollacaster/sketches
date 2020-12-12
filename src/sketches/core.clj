(ns sketches.core
  (:require [clojure.java.io :as io]
            [quil.core :as q]
            [sketches.generative-artistry.cubic-disarray :as cd]
            [tech.thomas-sojka.clj-axidraw.core :as axidraw]))

(defn plot-sketch []
  (let [file-name "temp/sketch.svg"]
    q/defsketch
    (q/sketch
     :draw cd/draw
     :size [300 300]
)
    (io/make-parents file-name)
    (axidraw/estimate file-name)
    (io/delete-file file-name)))

(comment
  (plot-sketch)
  (axidraw/raise-pen)
  (axidraw/lower-pen)
  (def file-name "temp/sketch.svg"))


