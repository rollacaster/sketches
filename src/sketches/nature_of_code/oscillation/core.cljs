(ns sketches.nature-of-code.oscillation.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.oscillation.angular-oscilliate :as ao]
            [sketches.nature-of-code.oscillation.asteroids :as as]
            [sketches.nature-of-code.oscillation.bob :as bo]
            [sketches.nature-of-code.oscillation.cannon :as cn]
            [sketches.nature-of-code.oscillation.combined-wave :as co]
            [sketches.nature-of-code.oscillation.custom-waves :as cw]
            [sketches.nature-of-code.oscillation.insect :as in]
            [sketches.nature-of-code.oscillation.multi-pendulum :as mp]
            [sketches.nature-of-code.oscillation.multi-springs :as ms]
            [sketches.nature-of-code.oscillation.perlin-wave :as pw]
            [sketches.nature-of-code.oscillation.rotate-baton :as rb]
            [sketches.nature-of-code.oscillation.spiral :as sp]
            [sketches.nature-of-code.oscillation.vehicle :as ve]))

(defn main []
  [:div
   [:h3.tracked.tc.tl-ns "Oscillation"]
   [cards-container
    [:<>
     [exercise-card "Rotate baton" "Exercise 3.1" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise1" rb/run]
     [exercise-card "Cannon" "Exercise 3.2" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise2" cn/run]
     [exercise-card "Vehicle" "Exercise 3.3" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise3" ve/run]
     [exercise-card "Spiral" "Exercise 3.4" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise4" sp/run]
     [exercise-card "Asteroids" "Exercise 3.5" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise5" as/run]
     [exercise-card "Bob" "Exercise 3.6" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise6" bo/run]
     [exercise-card "Insect" "Exercise 3.7" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise7" in/run]
     [exercise-card "Angular Oscilliate" "Exercise 3.8" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise8" ao/run]
     [exercise-card "Perlin Wave" "Exercise 3.9" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise9" pw/run]
     [exercise-card "Custom Waves" "Exercise 3.10" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise10" cw/run]
     [exercise-card "Combined Wave" "Exercise 3.11" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise11" co/run]
     [exercise-card "Multi Pendulum" "Exercise 3.12" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise12" mp/run]
     [exercise-card "Multi Springs" "Exercise 3.16" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise16" ms/run]]]])
