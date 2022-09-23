(ns sketches.nature-of-code.physics-library.circular-shapes
  (:require matter-js
            [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.nature-of-code.physics-library.matter :as m]))-

(defn setup []
  (q/frame-rate 30)
  (let [engine (.create (.-Engine matter-js))
        ground (m/rect 150 300 300 60 {:isStatic true})]
    (m/add engine ground)))

(defn update-state [engine]
  (m/update-engine engine))

(defn draw [engine]
  (m/render engine))

(defn mouse-pressed [engine {:keys [x y]}]
  (m/add engine (m/circle x y 20 20)))

(defn run [host]
  (q/defsketch circular-shapes
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :mouse-pressed mouse-pressed
    :size [300 300]))
