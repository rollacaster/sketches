(ns sketches.nature-of-code.koch-curve
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn setup-koch-line [a b]
  {:start a :end b})

(defn update-koch-line [lines]
  (reduce (fn [lines {:keys [start end]}]
            (let [a start
                  b (v/add start (v/div (v/sub end start) 3))
                  c (v/add b (v/rotate (v/div (v/sub end start) 3) (- (q/radians 60))))
                  d (v/add start (v/mult (v/sub end start) (/ 2 3)))
                  e end]
              (-> lines
                  (conj (setup-koch-line a b))
                  (conj (setup-koch-line b c))
                  (conj (setup-koch-line c d))
                  (conj (setup-koch-line d e)))))
          []
          lines))

(defn setup []
  {:lines
   (->> [(setup-koch-line [0 200] [700 200])])})

(defn n-times [n f]
        (apply comp (repeat n f)))

(defn update-state [state]
  (q/clear)
  (q/background 200)
  (let [times (q/map-range (q/mouse-x) 0 (q/width) 0 6)]
    {:lines
     ((n-times times update-koch-line) [(setup-koch-line [(* 0.3 (q/width)) (/ (q/height) 2)] [(* 0.5 (q/width)) (/ (q/height) 4)])
                                        (setup-koch-line [(* 0.5 (q/width)) (/ (q/height) 4)] [(* 0.7 (q/width)) (/ (q/height) 2)])
                                        (setup-koch-line [(* 0.7 (q/width)) (/ (q/height) 2)] [(* 0.5 (q/width)) (* (q/height) (/ 3 4))])
                                        (setup-koch-line [(* 0.5 (q/width)) (* (q/height) (/ 3 4))] [(* 0.3 (q/width)) (/ (q/height) 2)])])}))

(defn draw-koch-line [{[x1 y1] :start [x2 y2] :end}]
  (q/stroke 0)
  (q/line x1 y1 x2 y2))


(defn draw [{:keys [lines]}]
  (doseq [koch-line lines]
    (draw-koch-line koch-line)))

(defn run [host]
  (q/defsketch koch-curve
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
