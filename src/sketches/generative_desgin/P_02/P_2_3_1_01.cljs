(ns sketches.generative-desgin.P-02.P-2-3-1-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  {:line-length 0
   :angle 0
   :angle-speed 1
   :c (q/color 181 157 0)})

(defn update-state [state]
  (update state :angle + (:angle-speed state)))

(defn draw [{:keys [c angle line-length]}]
  (when (and (q/mouse-pressed?) (= (q/mouse-button) :left))
    (q/push-matrix)
    (q/translate (q/mouse-x) (q/mouse-y))
    (q/rotate (q/radians angle))
    (q/stroke c)
    (q/line 0 0 line-length 0)
    (q/pop-matrix)))

(defn mouse-pressed [state _]
  (assoc state :line-length (q/random 70 200)))

(defn key-pressed [state {:keys [key]}]
  (case key
    :ArrowUp (update state :line-length + 5)
    :ArrowDown (update state :line-length - 5)
    :ArrowLeft (update state :angle-speed - 0.5)
    :ArrowRight (update state :angle-speed + 0.5)
    state))

(defn key-released [state {:keys [key]}]
  (prn key)
  (case key
    :Backspace (do (q/background 255) state)
    :d (-> state
           (update :angle + 180)
           (update :angle-speed * -1))
    :space (assoc state :c (q/color (q/random 255) (q/random 255) (q/random 255) (q/random 80 100)))
    state))

(defn run [host]
  (q/defsketch animated-brushes
    :host host
    :setup setup
    :draw draw
    :update update-state
    :mouse-pressed mouse-pressed
    :key-pressed key-pressed
    :key-released key-released
    :middleware [md/fun-mode]
    :size [300 300]))
