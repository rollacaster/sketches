(ns sketches.nature-of-code.forces.repulse-mouse
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(defn compute-position [{:keys [acceleration velocity location] :as mover}]
  (let [velocity (v/add acceleration velocity)
        location (v/add velocity location)]
    (-> mover
        (assoc :acceleration [0 0])
        (assoc :velocity velocity)
        (assoc :location location))))

(defn attract [mover attractor]
  (let [{loc1 :location} attractor
        {loc2 :location} mover
        vectorBetween (v/sub loc1 loc2)
        distanceBetween (q/constrain (v/mag vectorBetween) 5.0 25.0)
        G 0.4
        strength (/ (* G (:mass attractor) (:mass mover)) (* distanceBetween distanceBetween))]
    (v/mult (v/normalize vectorBetween) strength)))

(defn repulse [mover attractor]
  (let [{loc1 :location} attractor
        {loc2 :location} mover
        vectorBetween (v/sub loc1 loc2)
        distanceBetween (q/constrain (v/mag vectorBetween) 5.0 25.0)
        G 0.0001
        strength (/ (* G (:mass attractor) (:mass mover)) (* distanceBetween distanceBetween))]
    (v/mult (v/mult (v/normalize vectorBetween) strength) -1)))

(defn setup []
  {:movers (map (fn [x] {:mass (+ 10 (rand-int 50))
                         :location [(rand-int 500) (rand-int 500)]
                         :velocity [0 0]
                         :acceleration [0 0]})
                (range 0 10))})

(defn update-mover [movers mover]
  (let [mouse {:mass 100 :location [(q/mouse-x) (q/mouse-y)]}]
    (compute-position
     (m/apply-force
      (reduce #(m/apply-force %1 (repulse %1 %2)) mover movers)
      (attract mover mouse)))))

(defn update-state [state]
  (update state :movers (fn [movers] (map #(update-mover movers %) movers))))

(defn draw [{:keys [movers]}]
  (q/clear)
  (q/background 255)
  (doseq [{:keys [mass] [x y] :location} movers]
    (q/ellipse x y mass mass)))

(defn run [host]
  (q/defsketch repulse-mouse
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
