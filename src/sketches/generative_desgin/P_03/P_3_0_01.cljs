(ns sketches.generative-desgin.P-03.P-3-0-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  (q/fill 0)
  (q/text-font "sans-serif")
  (q/text-align :center :center)
  {:letter "A"})

(defn mouse-moved [state _]
  (q/clear)
  (q/text-size (+ (* (- (q/mouse-x) (/ (q/width) 2)) 5) 1))
  (q/text (:letter state) (/ (q/width) 2) (q/mouse-y))
  state)

(defn mouse-dragged [state _]
  (q/text-size (+ (* (- (q/mouse-x) (/ (q/width) 2)) 5) 1))
  (q/text (:letter state) (/ (q/width) 2) (q/mouse-y))
  state)

(defn key-typed [state {:keys [raw-key]}]
  (assoc state :letter raw-key))

(defn run [host]
  (q/defsketch hello-type
    :host host
    :setup setup
    :mouse-moved mouse-moved
    :mouse-dragged mouse-dragged
    :key-typed key-typed
    :middleware [md/fun-mode]
    :size [300 300]))
