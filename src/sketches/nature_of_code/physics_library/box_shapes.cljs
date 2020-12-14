(ns sketches.nature-of-code.physics-library.box-shapes
  (:require matter
            [oops.core :refer [ocall oget]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.nature-of-code.physics-library.matter :as m]))

(defn setup []
  (q/frame-rate 30)
  (let [engine (ocall (oget matter "Engine") "create")
        ground (m/rect 150 300 300 60 {:isStatic true})]
    (m/add engine ground)))

(defn update-state [engine]
  (m/update-engine engine))

(defn draw [engine]
  (m/render engine))

(defn mouse-pressed [engine {:keys [x y]}]
  (m/add engine (m/rect x y 20 20)))

(defn run [host]
  (q/defsketch box-shapes
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-pressed mouse-pressed
    :middleware [md/fun-mode]
    :size [300 300]))
