(ns sketches.generative-desgin.P-02.P-2-3-6-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def tile-size 30)

(defn setup []
  (q/rect-mode :center)
  (q/image-mode :center)
  (q/stroke-weight 0.15)
  (q/text-size 8)
  (q/text-align :center :center)
  (let [grid-resolution-x (+ (Math/round (/ (q/width) tile-size)) 2)
        grid-resolution-y (+ (Math/round (/ (q/height) tile-size)) 2)]
    {:grid-resolution-x grid-resolution-x
     :grid-resolution-y grid-resolution-y
     :tiles (->> 0 (repeat grid-resolution-x) vec (repeat grid-resolution-y) vec)
     :modules (map #(q/load-image (str "images/" (.padStart (str %) 2 "0") ".svg")) (range 16))}))

(defn update-state [{:keys [ grid-resolution-x grid-resolution-y] :as state}]
  (if (and (q/mouse-pressed?) (= (q/mouse-button) :left))
    (let [x (+ (q/floor (/ (q/mouse-x) tile-size)) 1)
          grid-x (q/constrain x 1 (- grid-resolution-x 2))
          y (+ (q/floor (/ (q/mouse-y) tile-size)) 1)
          grid-y (q/constrain y 1 (- grid-resolution-y 2))]
      (case (q/mouse-button)
        :left (update state :tiles assoc-in [grid-x grid-y] 1)
        :right (update state :tiles assoc-in [grid-x grid-y] 0)
        state))  
    state))

(defn draw [{:keys [grid-resolution-x grid-resolution-y tiles modules]}]
  (q/background 255)
  (doseq [grid-x (range grid-resolution-x)
          grid-y (range grid-resolution-y)]
    (let [pos-x (- (* tile-size grid-x) (/ tile-size 2))
          pos-y (- (* tile-size grid-y) (/ tile-size 2))]
      (when (= (nth (nth tiles grid-x) grid-y) 1)
        (let [north (str (nth (nth tiles grid-x) (dec grid-y)))
              west (nth (nth tiles (dec grid-x)) grid-y)
              south (nth (nth tiles grid-x) (inc grid-y))
              east (nth (nth tiles (inc grid-x)) grid-y)
              binary-result (str north west south east)
              decimal-result (.parseInt js/window binary-result 2)]
          (q/image (nth modules decimal-result) pos-x pos-y tile-size tile-size))))))

(defn run [host]
  (q/defsketch complex-modules
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
