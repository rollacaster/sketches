(ns sketches.mover
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn update-mover [{:keys [velocity location] :as mover} acceleration]
  (let [velocity (v/add velocity acceleration)
        location (v/add location velocity)]
    (-> mover
        (assoc :location location)
        (assoc :velocity velocity)
        (assoc :accleration [0 0]))))

(defn keep-inside [{[x y] :location}]
  [(cond (> x (q/width)) 0
         (< x 0) (q/width)
         :else x)
   (cond (> y (q/height)) 0
         (< y 0) (q/height)
         :else y)])

(defn bounce-inside [{[x y] :location [vx vy] :velocity :as mover}]
  (assoc mover :velocity
         [(cond (> x (q/width)) (* -1 vx)
                (< x 0) (* -1 vx)
                :else vx)
          (cond (> y (q/height)) (* -1 vy)
                (< y 0) (* -1 vy)
                :else vy)]))
