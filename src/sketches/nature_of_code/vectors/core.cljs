(ns sketches.nature-of-code.vectors.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.vectors.bouncing-ball :as bb]
            [sketches.nature-of-code.vectors.car :as c]
            [sketches.nature-of-code.vectors.mouse-acceleration :as ma]
            [sketches.nature-of-code.vectors.noise-car :as nc]))

(defn main []
  [:div
    [:h3.tracked.tc.tl-ns "Vectors"]
    [cards-container
     [:<>
      [exercise-card "Bouncing Ball" "Exercise 1.3" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise3" bb/run]
      [exercise-card "Car" "Exercise 1.5" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise5" c/run]
      [exercise-card "Noise Car" "Exercise 1.6" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise6" nc/run]
      [exercise-card "Mouse Acceleration" "Exercise 1.8" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise8" ma/run]]]])
