(ns sketches.nature-of-code.forces.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.forces.balloon :as b]
            [sketches.nature-of-code.forces.fluid :as fl]
            [sketches.nature-of-code.forces.force-push :as fp]
            [sketches.nature-of-code.forces.frictions :as fr]
            [sketches.nature-of-code.forces.invisible-attractors :as ia]
            [sketches.nature-of-code.forces.own-force :as of]
            [sketches.nature-of-code.forces.repulse-mouse :as rm]
            [sketches.nature-of-code.forces.surface-area :as sa]))

(defn main []
  [:div
    [:h3.tracked.tc.tl-ns "Forces"]
    [cards-container
     [:<>
      [exercise-card "Balloon" "Exercise 2.1" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise1" b/run]
      [exercise-card "Force Push" "Exercise 2.3" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise3" fp/run]
      [exercise-card "Frictions" "Exercise 2.4" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise4" fr/run]
      [exercise-card "Fluid" "Exercise 2.5" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise5" fl/run]
      [exercise-card "Surface Area" "Exercise 2.6" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise6" sa/run]
      ;; Fluid resistance does not only work opposite to the velocity vector, but also perpendicular to it. This is known as “lift-induced drag” and will cause an airplane with an angled wing to rise in altitude. Try creating a simulation of lift.
      #_[exercise-card "Lift-induced Drag" "Exercise 2.7" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise7" ld/run true]
      [exercise-card "Invisible Attractors" "Exercise 2.8" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise8" ia/run]
      [exercise-card "Own Force" "Exercise 2.9" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise9" of/run]
      [exercise-card "Repulse Mouse" "Exercise 2.10" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise10" rm/run]]]])
