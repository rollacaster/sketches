(ns sketches.generative-desgin.P-02.P-2-3-7-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  (q/no-fill)
  (let [img (q/create-graphics (q/width) (q/height))]
    (.pixelDensity img 1)
    {:line-color (q/color 0)
     :img img
     :pen-count 1}))

(defn update-state [state]
  state)

(defn draw [{:keys [img line-color pen-count]}]
  (q/background 255)
  (q/with-graphics img
    (q/stroke-weight 3)
    (q/stroke line-color)
    (when (and (q/mouse-pressed?) (= (q/mouse-button) :left))
      (let [w (q/width)
            h (q/height)
            x (q/mouse-x)
            y (q/mouse-y)
            px (- x (- (q/mouse-x) (q/pmouse-x)))
            py (- y (- (q/mouse-y) (q/pmouse-y)))]
        (q/line x y px py)
        (q/line (- w x) y (- w px) py)
        (q/line x (- h y) px (- h py))
        (q/line (- w x) (- h y) (- w px) (- h py))
        (q/line y x py px)
        (q/line y (- w x) py (- w px))
        (q/line (- h y) x (- h py) px)
        (q/line (- h y) (- w x) (- h py) (- w px)))))
  (q/image img 0 0))

(defn run [host]
  (q/defsketch multiple-brushes
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
