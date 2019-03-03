(ns sketches.spiral
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(def delta (atom 0))

(defn draw [host]
  (fn []
    (.clearRect (.getContext (.getElementById js/document host) "2d") 0 0 (q/width) (q/height))
    (q/stroke 0)
    (q/push-matrix)
    (q/translate 150 150)
    (q/rotate (mod (swap! delta + 0.01) q/TWO-PI))
    (q/begin-shape)
    (doseq [x (range 1000)]
      (q/vertex (* (q/cos x) x)
                (* (q/sin x) x)))
    (q/end-shape)
    (q/pop-matrix)))

(defn run-spiral [host]
  (q/defsketch particle
    :host host
    :draw (draw host)
    :size [300 300]))
