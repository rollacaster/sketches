(ns sketches.nature-of-code.fractals.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.fractals.koch-curve :as kc]
            [sketches.nature-of-code.fractals.own-cantor :as oc]
            [sketches.nature-of-code.fractals.sierpinski :as si]))

(defn main []
  [:div
    [:h3.tracked.tc.tl-ns "Fractals"]
    [cards-container
     [:<>
      [exercise-card "Own Cantor" "Exercise 8.1" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise1" oc/run]
      [exercise-card "Koch Curve" "Exercise 8.2" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise2" kc/run]
      [exercise-card "Sierpinski" "Exercise 8.5" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise5" si/run]]]])
