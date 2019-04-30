(ns sketches.generative-artistry.circle-packing
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [clojure.pprint :as p]))

(defn does-circle-have-a-collision [circles {:keys [x y radius]}]
  (some
   (fn [other-circle]
     (let [a (+ (/ radius 2) (/ (:radius other-circle) 2))
           x (- x (:x other-circle))
           y (- y (:y other-circle))]
       (>= a (Math/sqrt (+ (* x x) (* y y))))))
   circles))

(does-circle-have-a-collision 
 '({:x 132
   :y 132
   :radius 100})
 {:x 170
   :y 170
   :radius 10})

(defn create-circle []
  {:x (q/random (q/width))
   :y (q/random (q/height))
   :radius 2})

(defn draw-circle [{:keys [x y radius]}]
  (q/ellipse x y radius radius))

(defn setup []
  (q/no-fill)
  (let [total-circles 500
        max-radius 100
        circles (loop [i 0
                       {:keys [radius] :as circle} (create-circle)
                       circles ()]
                  (cond
                    (>= i total-circles) circles
                    (= radius max-radius)
                    (recur (inc i) (create-circle) (conj circles circle))
                    (does-circle-have-a-collision circles (update circle :radius inc))
                    (if (not (does-circle-have-a-collision circles circle))
                      (recur (inc i) (create-circle) (conj circles circle))
                      (recur i (create-circle) circles))
                    (< radius max-radius) (recur i (update circle :radius inc) circles)
                    :else (recur (inc i) (create-circle) circles)))]
    (doall (map draw-circle circles))))


(defn run [host]
  (q/defsketch circle-packing
    :host host
    :setup setup
    :size [300 300]))
