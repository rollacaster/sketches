(ns sketches.creative-coding.webgl
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [nice-color-palettes]
            [bezier-easing]))



(def palettes (js->clj nice-color-palettes))

(defn pick-random [list]
  (nth list (rand-int (- (count list) 1))))

(defn pick-random-palette []
  (pick-random palettes))

(defn draw [{:keys [rotation boxes]}]
  (q/clear)
  (q/translate 0 0 -500)
  (q/rotate (q/radians 45) 0 1 0)
  (q/rotate rotation 1 0 0)
  (q/ambient-light 200 200 200)
  (q/directional-light 255 255 255 0 1 -0.5)
  (doseq [{:keys [scale position color]} boxes]
    (q/push-matrix)
    (apply q/ambient color)
    (apply q/scale scale)
    (apply q/translate position)
    (q/box 100 100 100)
    (q/pop-matrix)))

(def ease-fn (bezier-easing 0.67 0.03 0.29 0.99))

(defn update-state [state]
  (-> state
      (update :rotation #(ease-fn (q/sin (* (:play-head state)  q/PI))))
      (update :play-head #(mod (+ % 0.01) 1))))

(defn setup []
  (q/stroke-weight 0)
  (let [palette (pick-random-palette)]
    {:boxes (map
             (fn [i]
               (let [color (map (fn [s] (q/unhex (apply str s))) (partition 2 (rest (pick-random (take (q/random 1 (- (count palette) 1)) palette)))))]
                 {:scale [(q/random -1 1) (q/random -1 1) (q/random -1 1)]
                  :position [(q/random 0 (q/width))
                             (q/random 0 (q/height))
                             (q/random 0 (q/height))]
                  :color color}))
             (range 100))
     :rotation 0
     :play-head 0}))

(defn run [host]
  (q/defsketch webgl
    :host host
    :setup setup
    :draw draw
    :update update-state
    :renderer :p3d
    :middleware [md/fun-mode]
    :size [300 300]))
