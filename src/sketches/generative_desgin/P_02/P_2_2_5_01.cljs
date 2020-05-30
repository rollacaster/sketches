(ns sketches.generative-desgin.P-02.P-2-2-5-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def min-radius 3)
(def max-radius 30)

(defn setup []
  (q/no-fill)
  (q/rect-mode :radius)
  {:circles []})

(defn update-state [{:keys [circles] :as state}]
  (let [new-x (q/random 0 (q/width))
        new-y (q/random 0 (q/height))]
    (assoc state :circles
           (loop [new-r max-radius]
             (if (> new-r min-radius)
               (let [overlapping? (some (fn [[x y r]] (< (q/dist new-x new-y x y) (+ r new-r))) circles)]
                 (if overlapping?
                   (recur (dec new-r))
                   (conj circles [new-x new-y new-r])))
               circles)))))

(defn draw [{:keys [circles]}]
  (q/background 255)
  (doseq [[x y r] circles]
    (q/stroke 0)
    (q/stroke-weight 1.5)
    (q/ellipse x y (* 2 r) (* 2 r))))

(defn run [host]
  (q/defsketch structural-density-from-agents
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
