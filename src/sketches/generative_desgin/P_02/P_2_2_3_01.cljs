(ns sketches.generative-desgin.P-02.P-2-2-3-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def form-resolution 15)
(def step-size 2)
(def distortion-factor 1)
(def init-radius 15)

(defn setup []
  (q/stroke 0 50)
  (q/stroke-weight 0.75)
  (q/background 255)
  (let [angle (q/radians (/ 360 form-resolution))]
    {:center-x (/ (q/width) 2)
     :center-y (/ (q/height) 2)
     :x (for [i (range 0 form-resolution)] (* (q/cos (* angle i)) init-radius))
     :y (for [i (range 0 form-resolution)] (* (q/sin (* angle i)) init-radius))}))

(defn update-state [state]
  (-> state
      (update :center-x #(+ % (* (- (q/mouse-x) %) 0.01)))
      (update :center-y #(+ % (* (- (q/mouse-y) %) 0.01)))
      (update :x #(for [i (range 0 form-resolution)] (+ (nth % i) (q/random (- step-size) step-size))))
      (update :y #(for [i (range 0 form-resolution)] (+ (nth % i) (q/random (- step-size) step-size))))))

(defn draw [{:keys [x y center-x center-y]}]
  (q/begin-shape)
  (q/curve-vertex (+ (nth x (dec form-resolution)) center-x)
                  (+ (nth y (dec form-resolution)) center-y))
  (doseq [i (range 0 form-resolution)]
    (q/curve-vertex (+ (nth x i) center-x) (+ (nth y i) center-y)))
  (q/curve-vertex (+ (nth x 0) center-x) (+ (nth y 0) center-y))
  (q/curve-vertex (+ (nth x 1) center-x) (+ (nth y 1) center-y))
  (q/end-shape))

(defn mouse-pressed []
  (let [angle (q/radians (/ 360 form-resolution))
        radius (* init-radius (q/random 0.5 1))]
    {:center-x (q/mouse-x)
     :center-y (q/mouse-y)
     :x (for [i (range 0 form-resolution)] (* (q/cos (* angle i)) radius))
     :y (for [i (range 0 form-resolution)] (* (q/sin (* angle i)) radius))}))

(defn run [host]
  (q/defsketch shapes-from-agent
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-pressed mouse-pressed
    :middleware [md/fun-mode]
    :size [300 300]))

