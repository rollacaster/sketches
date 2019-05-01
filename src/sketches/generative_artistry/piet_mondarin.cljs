(ns sketches.generative-artistry.piet-mondarin
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [quil.sketch]))

(defn split-on-x [square split-at]
  (let [square-a {:x (:x square)
                  :y (:y square)
                  :width (- (:width square) (+ (- (:width square) split-at) (:x square)))
                  :height (:height square)}
        square-b {:x split-at
                  :y (:y square)
                  :width (+ (- (:width square) split-at) (:x square))
                  :height (:height square)}]
    [square-a square-b]))

(defn split-on-y [square split-at]
  (let [square-a {:x (:x square)
                  :y (:y square)
                  :width (:width square)
                  :height (- (:height square) (+ (- (:height square) split-at) (:y square)))}
        square-b {:x (:x square)
                  :y split-at
                  :width (:width square)
                  :height (+ (- (:height square) split-at) (:y square))}]
    [square-a square-b]))

(defn split-squares-with [squares {:keys [x y]}]
  (if (> (q/random 1) 0.5)
    (reduce (fn [squares square]
              (cond
                (and (> x (:x square)) (< (:x square) (+ (:x square) (:width square)))) (concat squares (split-on-x square x))
                (and (> y (:y square)) (< (:y square) (+ (:y square) (:height square)))) (concat squares (split-on-y square y))
                :else (concat squares [square])))
            []
            squares)
    squares))

(defn draw-square [{:keys [x y width height color]}]
  (q/fill (if color color "#F2F5F1"))
  (q/rect x y width height))

(defn draw [squares]
   (doall (map draw-square squares)))

(defn add-colors [squares]
  (let [i1 (Math/floor (q/random 0 (count squares)))
        i2 (Math/floor (q/random 0 (count squares)))
        i3 (Math/floor (q/random 0 (count squares)))]
    (-> (into [] squares)
        (update i1 (fn [square] (assoc square :color "#D40920")))
        (update i2 (fn [square] (assoc square :color "#1356A2")))
        (update i3 (fn [square] (assoc square :color "#F7D842"))))))

(defn setup []
  (q/stroke-weight 8)
  (let [squares [{:x 0 :y 0 :width (q/width) :height (q/height)}]
        step (/ (q/width) 6)]
    (draw
     (add-colors
      (doall (reduce
              (fn [squares i]
                (-> squares
                    (split-squares-with {:y i})
                    (split-squares-with {:x i})))
              squares
              (range 0 (* step 6) step)))))))

(defn run [host]
  (q/defsketch pient-mondrain
    :host host
    :setup setup
    :size [300 300]))
