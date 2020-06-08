(ns sketches.generative-desgin.P-02.P-2-3-3-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/background 255)
  (let [font "Georgia"]
    (q/text-font font)
    (q/text-align :left)
    (q/fill 0)
    (let [letters "All the worlds a stage, and all the men and women merely players. They have their exits and their entrances."]
      {:x (q/mouse-x)
       :y (q/mouse-y)
       :step-size 5.0
       :font font
       :letters letters
       :new-letter (first letters)
       :font-size-min 3
       :angle-distortion 0.0
       :counter 0
       :angle 0})))

(defn update-state [{:keys [letters x y step-size counter font-size-min] :as state}]
  (let [d (q/dist x y (q/mouse-x) (q/mouse-y))]
    (q/text-size (+ font-size-min (/ d 2)))
    (if (and (q/mouse-pressed?) (= (q/mouse-button) :left) (> d step-size))
      (let [angle (q/atan2 (- (q/mouse-y) y) (- (q/mouse-x) x))
            counter (if (>= counter (dec (count letters))) 0 (inc counter))
            new-letter (nth letters counter)]
        (prn new-letter)
        (-> state
            (assoc :counter counter)
            (assoc :angle angle)
            (update :x (fn [x] (+ x (* (q/cos angle) step-size))))
            (update :y (fn [y] (+ y (* (q/sin angle) step-size))))
            (assoc :step-size (q/text-width new-letter))
            (assoc :new-letter new-letter)))
      state)))

(defn draw [{:keys [x y font-size-min angle-distortion angle new-letter step-size]}]
  (when (and (q/mouse-pressed?) (= (q/mouse-button) :left))
    (let [d (q/dist x y (q/mouse-x) (q/mouse-y))]
      (q/text-size (+ font-size-min (/ d 2)))
      (when (> d step-size)
        (q/push-matrix)
        (q/translate x y)
        (q/rotate (+ angle (q/random angle-distortion)))
        (q/text new-letter 0 0)
        (q/pop-matrix)))))

(defn mouse-pressed [state {:keys [x y]}]
  (assoc state :x x :y y))

(defn run [host]
  (q/defsketch type-drawing
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-pressed mouse-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
