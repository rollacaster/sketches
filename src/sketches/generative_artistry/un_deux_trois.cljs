(ns sketches.generative-artistry.un-deux-trois
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [clojure.pprint :as p]))

(defn draw-line [x y width height positions]
  (q/push-matrix)
  (q/translate (+ x (/ width 2)) (+ y (/ height 2)))
  (q/rotate (q/random 5))
  (q/translate (- (/ width 2)) (- (/ height 2)))
  (doall
   (for [i positions]
     (q/line (* i width) 0 (* i width) height)))
  (q/pop-matrix))

(defn setup []
  (let [step 20
        third-of-height (/ (q/height) 3)]
    (q/stroke-weight 4)
    (doall
     (for [y (range step (- (q/height) step) step)]
       (doall
        (for [x (range step (- (q/width) step) step)]
          (cond
            (< y third-of-height) (draw-line x y step step [0.5])
            (< y (* third-of-height 2)) (draw-line x y step step [0.2 0.8])
            :else (draw-line x y step step [0.1 0.5 0.9]))))))))


(defn run [host]
  (q/defsketch un-deux-trois
    :host host
    :setup setup
    :size [300 300]))
