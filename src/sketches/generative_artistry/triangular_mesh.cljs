(ns sketches.generative-artistry.triangular-mesh
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [clojure.pprint :as p]))

(defn setup []
  (let [gap (/ (q/width) 8)
        lines (doall (for [y (range gap (q/height) gap)]
                       (for [x (range gap (q/width) gap)
                             :let [odd (odd? (/ y gap))]]
                         {:x (+ x (* gap (- (* (q/random 1) 0.8) 0.4)) (if odd (/ gap 2) 0))
                          :y (+ y (* gap (- (* (q/random 1) 0.8) 0.4)))})))
        dot-line (map-indexed
                  (fn [lineIdx line]
                    (reduce concat
                            (let [dot-line
                                  (map-indexed
                                   (fn [idx point]
                                     (if (odd? lineIdx)
                                       [point (get (into [] (get (into [] lines) (inc lineIdx))) idx)]
                                       [(get (into [] (get (into [] lines) (inc lineIdx))) idx) point]))
                                   line)]
                              dot-line
                              )))
                  (butlast lines))]
    (doall
     (map
      (fn [line]
        (doall
         (map-indexed
          (fn [idx p1]
            (let [p2 (get (into [] line) (inc idx))
                  p3 (get (into [] line) (inc (inc idx)))]
              (q/fill (* (rand-int 16) (/ 255 16)))
              (q/triangle (:x p1) (:y p1) (:x p2) (:y p2) (:x p3) (:y p3))))
          (butlast (butlast line)))))
      dot-line))))



(defn run [host]
  (q/defsketch triangular-mesh
    :host host
    :setup setup
    :size [300 300]))
