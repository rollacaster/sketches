(ns sketches.generative-desgin.P-02.P-2-1-5-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-fill)
  {:draw-mode 1})

(defn update-state [state]
  state)

(defn overlay [draw-mode]
  (let [w (- (q/width) 100)
        h (- (q/height) 100)]
    (if (= draw-mode 1)
      (doseq [i (range (/ (- w) 2) (/ w 2) 5)]
        (q/line i (/ (- h) 2) i (/ h 2)))
      (doseq [i (range 0 w 10)]
        (q/ellipse 0 0 i i)))))

(defn draw [{:keys [draw-mode]}]
  (q/background 255)
  (q/translate (/ (q/width) 2) (/ (q/height) 2))
  (q/stroke-weight 3)
  (overlay draw-mode)
  (let [x (q/map-range (q/mouse-x) 0 (q/width) -50 50)
        a (q/map-range (q/mouse-x) 0 (q/width) -0.5 0.5)
        s (q/map-range (q/mouse-y) 0 (q/height) 0.7 1)]
    (if (= draw-mode 1)
      (q/rotate a)
      (q/translate x 0))
    (q/scale s)
    (q/stroke-weight 2)
    (overlay draw-mode)))

(defn key-pressed [state {:keys [key]}]
  (case key
    :1 (assoc state :draw-mode 1)
    :2 (assoc state :draw-mode 2)
    state))

(defn run [host]
  (q/defsketch moire-in-a-grid
    :host host
    :setup setup
    :draw draw
    :update update-state
    :key-pressed key-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
