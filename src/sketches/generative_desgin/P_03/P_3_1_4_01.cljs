(ns sketches.generative-desgin.P-03.P-3-1-4-01
  (:require [clojure.string :as s]
            [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def text (atom ""))
(-> (.fetch js/window "data/pride_and_prejudice.txt")
    (.then #(.text %))
    (.then #(reset! text %)))

(defn setup []
  (q/text-align :center :baseline)
  (let [words (re-seq #"\w+" @text)
        treemap (new js/gd.Treemap 1 1 297 297 #js{:sort true :direction "both"})]
    (doseq [word words]
      (.addData treemap (s/lower-case word)))
    (.calculate treemap)
    {:treemap treemap}))

(defn update-state [state]
  state)

(defn draw [{:keys [treemap]}]
  (doseq [item (.-items treemap)]
    (q/fill 255)
    (q/stroke 0)
    (q/rect ^js (.-x item) ^js (.-y item) ^js (.-w item) ^js (.-h item))
    (let [word (.-data item)
          text-width (q/text-width word)
          max-font-size (/ (* 100 (* (.-w item) 0.9)) text-width)
          font-size (js/Math.min max-font-size (* ^js (.-h item) 0.9))]
      (q/text-size font-size)
      (q/fill 0)
      (q/no-stroke)
      (q/text word (+ ^js (.-x item) (/ ^js (.-w item) 2)) (+ ^js (.-y item) (* ^js (.-h item) 0.8)))))
  (q/no-loop))

(defn run [host]
  (q/defsketch text-treemap
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
