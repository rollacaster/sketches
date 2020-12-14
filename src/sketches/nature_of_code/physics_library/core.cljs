(ns sketches.nature-of-code.physics-library.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.physics-library.box-shapes :as bs]
            [sketches.nature-of-code.physics-library.circular-shapes :as cs]))

(defn main []
  [:div
   [:h3.tracked.tc.tl-ns "Physics Libraries"]
   [cards-container
    [:<>
     [exercise-card "Circular Shapes" "Exercise 5.1" "https://natureofcode.com/book/chapter-5-physics-libraries/#chapter05_exercise1" cs/run]
     [exercise-card "Box Shapes" "Exercise 5.2" "https://natureofcode.com/book/chapter-5-physics-libraries/#chapter05_exercise2" bs/run]]]])
