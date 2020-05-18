(ns sketches.generative-desgin.P-02.P-2-1-4-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def cols 18)
(def rows 9)

(defn setup [host]
  {:image (q/load-image "images/shape.jpg")
   :check-boxes (let [host-element (.getElementById js/document host)
                      div (.createElement js/document "div")]
                  (.remove (.-firstElementChild host-element))
                  (set! (.-id div) "mirror")
                  (.appendChild host-element div)
                  (flatten
                   (for [y (range 0 rows)]
                     (let [checkboxes
                           (doall (for [x (range 0 cols)]
                                    (let [check-box (.createElement js/document "input")]
                                      (set! (.-type check-box) "checkbox")
                                      (set! (.-display (.-style check-box)) "inline")
                                      (.appendChild div check-box)
                                      check-box)))]
                       (let [span (.createElement js/document "span")]
                         (set! (.-innerHTML span) "<br/>")
                         (.appendChild div span))
                       checkboxes))))})

(defn update-state [state]
  state)

(defn draw [{:keys [image check-boxes]}]
  (when (q/loaded? image)
    (doseq [y (range 0 (.-height image))
            x (range 0 (.-width image))]
      (let [c (q/color (q/get-pixel image x y))
            bright (/ (+ (q/red c) (q/green c) (q/blue c)) 3)
            threshold 100
            check-index (+ x (* y cols))]
        (set! (.-checked (nth check-boxes check-index)) (> bright threshold))))))

(defn run [host]
  (q/defsketch checkboxes-grid
    :host host
    :setup #(setup host)
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
