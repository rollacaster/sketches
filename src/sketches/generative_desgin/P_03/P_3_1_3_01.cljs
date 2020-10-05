(ns sketches.generative-desgin.P-03.P-3-1-3-01
  (:require [clojure.string :as s]
            [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def text (atom ""))
(-> (.fetch js/window "data/faust_kurz.txt")
    (.then #(.text %))
    (.then #(reset! text %)))

(def alphabet "ABCDEFGHIJKLMNORSTUVWYZÄÖÜß,.;!? ")


(defn setup []
  {:counts (frequencies @text)
   :text @text})

(defn update-state [state]
  state)

(defn draw [{:keys [text counts]}]
  (q/clear)

  (q/text-size 11)
  (let [padding-left 15]
    (loop [x padding-left
           idx 0
           y 15]
      (let [char (nth text idx)
            m (q/constrain (q/map-range (q/mouse-x) 50 (- (q/width) 50) 0 1) 0 1)
            alph-idx (.indexOf alphabet (s/upper-case char))
            inter-y (q/lerp y (+ 15 (* alph-idx 20)) m)]
        (q/fill 87 35 129 (* (counts char) 3))
        (q/text char x inter-y)
        (when (< idx (dec (count text)))
          (let [new-x (+ x (q/text-width char))
                new-line? (and (> new-x (- (q/width) 65)) (= char " "))]
            (recur (if new-line? padding-left new-x)
                   (inc idx)
                   (if new-line? (+ 20 y) y))))))))

(defn run [host]
  (q/defsketch text-frequencies
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
