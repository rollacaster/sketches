(ns sketches.nature-of-code.game-of-life
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup-board []
  (let [w 5
        columns (/ (q/width) w)
        rows (/ (q/height) w)]
    (for [x (range 0 columns)]
      (for [y (range 0 rows)]
        (rand-int 2)))))

(defn setup []
  (q/stroke 0)
  {:board (setup-board)})

(defn board []
  (let [w 5
        columns (/ 50 w)
        rows (/ 50 w)]
    (for [x (range 0 columns)]
      (for [y (range 0 rows)]
        (rand-int 2)))))

(defn update-state [{:keys [board] :as state}]
  (assoc state :board
         (for [x (range 0 (count board))]
           (for [y (range 0 (count (nth board x)))]
             (let [neighbour-count (-
                                    (reduce +
                                            (for [i (range -1 2)
                                                  j (range -1 2)]
                                              (nth (nth board (+ x i) ()) (+ y j) 0)))
                                    1)]
               (let [current (nth (nth board x) y)]
                 (cond
                   (and (= current 1) (< neighbour-count 2)) 0
                   (and (= current 1) (> neighbour-count 3)) 0
                   (and (= current 0) (= neighbour-count 3)) 1
                   :else current)))))))

(defn update-board [x y board]
  (map sequence
       (assoc-in (into [] (map #(into [] %) board)) [x y] 1)))

(defn draw [{:keys [board]}]
  (let [updated-board
        (if (q/mouse-pressed?)
          (update-board (q/floor (/ (q/mouse-x) 5)) (q/floor (/ (q/mouse-y) 5)) board)
          board)]
    (doseq [x (range 0 (count updated-board))
            y (range 0 (count (nth updated-board x)))]
      (do
        (if (= (nth (nth updated-board x) y) 1)
          (q/fill 0)
          (q/fill 255))
        (q/rect (* x 5) (* y 5) 5 5)))))

(defn mouse-clicked [{:keys [board] :as state} {:keys [x y]}]
  (update state :board (fn [board] (update-board (q/floor (/ x 5)) (q/floor (/ y 5)) board))))

(defn run [host]
  (q/defsketch game-of-life
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-clicked mouse-clicked
    :middleware [md/fun-mode]
    :size [300 300]))
