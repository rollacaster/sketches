(ns sketches.mover
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(defn apply-force [{:keys [mass] :as mover} force]
  (update mover :acceleration #(v/add % (v/div force mass))))

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

(defn check-edges [mover]
  (let [{:keys [location]} mover
        [x y] location
        mover (if (> x (q/width))
                (-> mover
                    (assoc :location [(q/width) y])
                    (update :velocity (fn [[x y]] (vector (* -1 x) y))))
                (if (< x 0)
                  (-> mover
                      (update :velocity (fn [[x y]] (vector (* -1 x) y)))
                      (assoc :location [0 y]))
                  mover))]
    (if (> y (q/height))
      (-> mover
          (update :velocity (fn [[x y]] (vector x (* -1 y))))
          (assoc :location [x (q/height)]))
      mover)))
