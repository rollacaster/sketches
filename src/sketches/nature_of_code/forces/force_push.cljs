(ns sketches.nature-of-code.forces.force-push
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(defn create-mover []
  {:location [0 0]
   :velocity [0 0]
   :mass (q/random 10 40)})

(defn setup []
  (map create-mover (range 0 20)))

(defn push-back [{[x y] :location :as mover}]
  [(cond (> x (q/width)) -1
         (< x 0) 1
         :else 0)
   (cond (> y (q/height)) -1
         (< y 0) 1
         :else 0)])

(defn update-mover [{:keys [mass] :as mover}]
  (let [wind [0.03 0]
        gravity [0 0.5]]
    (-> mover
        (m/update-mover (v/add (v/div gravity mass)
                               (v/div wind mass)
                               (v/div (push-back mover) mass))))))

(defn update-state [state]
  (map update-mover state))

(defn draw-mover [{[x y] :location :keys [mass]}]
  (q/ellipse x y mass mass))

(defn draw [state]
  (q/clear)
  (doall (map draw-mover state)))

(defn run [host]
  (q/defsketch force-push
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
