(ns sketches.generative-desgin.P-02.P-2-2-4-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def max-count 500)

(defn setup []
  (q/stroke-weight 0.5)
  {:current-count 1
   :x [(/ (q/width) 2)]
   :y [(/ (q/height) 2)]
   :r [10]})

(defn update-state [{:keys [current-count x y r]}]
  (when (>= current-count max-count)
    (q/no-loop))
  (let [new-r (q/random 1 7)
        new-x (q/random new-r (- (q/width) new-r))
        new-y (q/random new-r (- (q/height) new-r))
        [_ closest-i]
        (reduce (fn [[closest-dist j] i]
                  (let [new-dist (q/dist new-x new-y (nth x i) (nth y i))]
                    (if (< new-dist closest-dist) [new-dist i] [closest-dist j])))
                [(.-MAX_VALUE js/Number) 0] (range 0 current-count))
        angle (q/atan2 (- new-y (nth y closest-i)) (- new-x (nth x closest-i)))]
    {:x (cons (+ (nth x closest-i) (* (q/cos angle) (+ (nth r closest-i) new-r))) x)
     :y (cons (+ (nth y closest-i) (* (q/sin angle) (+ (nth r closest-i) new-r))) y)
     :r (cons new-r r)
     :current-count (inc current-count)}))

(defn draw [{:keys [x y r current-count]}]
  (q/clear)
  (q/fill 50)
  (doseq [i (range 0 current-count)]
    (q/ellipse (nth x i) (nth y i) (* (nth r i) 2) (* (nth r i) 2))))

(defn run [host]
  (q/defsketch growth-structure-from-agents
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
