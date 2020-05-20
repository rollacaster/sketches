(ns sketches.generative-desgin.P-02.P-2-2-1-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def north 0)
(def north-east 1)
(def east 2)
(def south-east 3)
(def south 4)
(def south-west 5)
(def west 6)
(def north-west 7)

(def step-size 1)
(def diameter 1)

(defn setup []
  (q/no-stroke)
  (q/fill 0 40)
  [{:pos-x (/ (q/width) 2)
    :pos-y (/ (q/height) 2)}])

(defn update-pos [pos]
  (let [direction (rand-int 8)
          {:keys [pos-x pos-y]}
          (cond 
            (= direction north) (update pos :pos-y - step-size)
            (= direction north-east) (-> pos (update :pos-x + step-size) (update :pos-y - step-size))
            (= direction east) (update pos :pos-x + step-size)
            (= direction south-east) (-> pos (update :pos-x + step-size) (update :pos-y + step-size))
            (= direction south) (update pos :pos-y + step-size)
            (= direction south-west) (-> pos (update :pos-x - step-size) (update :pos-y + step-size))
            (= direction west) (update pos :pos-x - step-size)
            (= direction north-west) (-> pos (update :pos-x - step-size) (update :pos-y - step-size)))]
      {:pos-x (cond (> pos-x (q/width)) 0
                    (< pos-x 0) (q/width)
                    :else pos-x)
       :pos-y (cond (> pos-y (q/height)) 0
                    (< pos-y 0) (q/height)
                    :else pos-y)}))

(defn update-state [state]
  (take (q/mouse-x) (iterate update-pos (last state))))

(defn draw [state]
  (doseq [{:keys [pos-x pos-y]} state]
   (q/ellipse (+ pos-x (/ step-size 2)) (+ pos-y (/ step-size 2)) diameter diameter)))

(defn run [host]
  (q/defsketch dumb-agents
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
