(ns sketches.nature-of-code.oscillation.multi-springs
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(defn create-spring [x y l]
  {:location [x y] :len l})

(defn connect [bob spring]
  (let [k 0.1
        force (v/sub (:location bob) (:location spring))
        d (v/mag force)
        stretch (- d (:len spring))]
    (m/apply-force bob (v/mult (v/normalize force) (* -1 k stretch)))))

(defn setup []
  [{:spring (create-spring (/ (q/width) 2) 0 100)
    :bob (m/create-mover 50 [(- (/ (q/width) 2) 50) 50])}
   {:spring (create-spring (- (/ (q/width) 2) 100) 0 100)
    :bob (m/create-mover 50 [(- (/ (q/width) 2) 150) 50])}])

(defn update-state [state]
  (reduce (fn [springs {:keys [spring bob]}]
            (conj springs
                  {:bob
                   (-> bob
                       (m/apply-force [0 1])
                       (connect spring)
                       (m/compute-position))
                   :spring (if-let [last-bob-location (-> springs
                                                          last
                                                          :bob
                                                          :location)]
                             (assoc spring :location last-bob-location)
                             spring)}))
          []
          state))

(defn draw [state]
  (q/background 255)
  (q/rect-mode :center)
  (doseq [{:keys [spring bob]} state]
    (let [{:keys [len] [a1 a2] :location} spring
          {:keys [mass] [x y] :location} bob]
      (q/line x y a1 a2)
      (q/rect a1 a2 10 10)
      (q/ellipse x y mass mass))))

(defn run [host]
  (q/defsketch multi-springs
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
