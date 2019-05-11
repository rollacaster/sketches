(ns sketches.nature-of-code.frictions
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(defn setup []
  {:movers (doall (map
                   (fn [mover] {:mass (+ 1 (rand-int 50))
                                :location [0 0]
                                :velocity [0 0]
                                :acceleration [0 0]})
                   (range 50)))
   :friction-areas (map
                    (fn [i]
                      (let [width (/ (q/width) 5)
                            colors [[0 0 255] [0 255 0] [255 255 0] [0 255 255] [255 0 0]]]
                        {:x (* i width)
                         :width width
                         :color (get colors i)
                         :friction (q/random 0.01 0.2)}))
                    (range 5))})

(defn gravity [{:keys [mass]}]
  (vector 0 (* 0.1 mass)))

(defn compute-friction [friction {:keys [velocity]}]
  (-> velocity
      (v/mult -1)
      v/normalize
      (v/mult (or friction 0.01))))

(defn compute-position [{:keys [acceleration velocity location] :as mover}]
  (let [velocity (v/add acceleration velocity)
        location (v/add location velocity)
        acceleration (v/mult acceleration 0)]
    (-> mover
        (assoc :velocity velocity)
        (assoc :location location)
        (assoc :acceleration acceleration))))

(defn update-mover [mover friction]
  (let [wind [0.1 0]]
    (-> mover  
        (m/apply-force wind)
        (m/apply-force (gravity mover))
        (m/apply-force (compute-friction friction mover))
        compute-position
        m/check-edges)))

(defn update-state [{:keys [movers friction-areas] :as state}]
  {:movers (doall (map
                   (fn [mover]
                     (let [friction (:friction (first (filter
                                                       #(< (:x %) (first (:location mover)))
                                                       (reverse friction-areas))))]
                       (update-mover mover friction)))
                   movers))
   :friction-areas friction-areas})

(defn draw-friction-area [{:keys [x width color friction]}]
  (apply q/fill color)
  (q/rect x 0 width (q/height)))

(defn draw [{:keys [movers friction-areas]}]
  (q/clear)
  (doseq [friction-area friction-areas]
    (draw-friction-area friction-area))
  (q/fill 255 0 255)
  (doseq [{:keys [mass] [x y] :location} movers]
      (q/ellipse x y mass mass)))

(defn run [host]
  (q/defsketch frictions
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
