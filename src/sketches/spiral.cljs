(ns sketches.spiral
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn draw [host]
  (fn []
    (q/frame-rate 5)
    (.clearRect (.getContext (.getElementById js/document host) "2d") 0 0 (q/width) (q/height))
    (q/stroke 0)
    (q/rotate (mod (q/frame-count) q/TWO-PI))
    (q/begin-shape)
    (doseq [x (range 1000)]
      (q/vertex (+ 150 (* (q/cos x) x))
                (+ 150 (* (q/sin x) x))))
    (q/end-shape)))

(defn run-spiral [host]
  (q/defsketch particle
    :host host
    :draw (draw host)
    :size [300 300]))
