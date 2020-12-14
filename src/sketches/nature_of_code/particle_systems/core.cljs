(ns sketches.nature-of-code.particle-systems.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.particle-systems.asteroids-with-particles
             :as
             ap]
            [sketches.nature-of-code.particle-systems.dynamic-origin :as do]
            [sketches.nature-of-code.particle-systems.fire :as f]
            [sketches.nature-of-code.particle-systems.fire-blend :as rib]
            [sketches.nature-of-code.particle-systems.fire-rainbow :as rf]
            [sketches.nature-of-code.particle-systems.mixed-particles :as mip]
            [sketches.nature-of-code.particle-systems.particle-force :as pf]
            [sketches.nature-of-code.particle-systems.particles-on-click :as ac]
            [sketches.nature-of-code.particle-systems.particles-repel :as prs]
            [sketches.nature-of-code.particle-systems.particles-with-images :as pi]
            [sketches.nature-of-code.particle-systems.particles-with-repellers
             :as
             pr]
            [sketches.nature-of-code.particle-systems.rotating-particle :as rp]
            [sketches.nature-of-code.particle-systems.shutter-in-pieces :as sip]))

(defn main []
  [:div
    [:h3.tracked.tc.tl-ns "Particle Systems"]
    [cards-container
     [:<>
      [exercise-card "Particle Force" "Exercise 4.1" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise1" pf/run]
      [exercise-card "Rotating Particle" "Exercise 4.2" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise2" rp/run]
      [exercise-card "Dynamic Origin" "Exercise 4.3" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise3" do/run]
      [exercise-card "Asteroids with Particles" "Exercise 4.4" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise4" ap/run]
      [exercise-card "Particles on Click" "Exercise 4.5" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise5" ac/run]
      [exercise-card "Shutter in Pieces" "Exercise 4.6" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise6" sip/run]
      [exercise-card "Mixed Particles" "Exercise 4.8" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise8" mip/run]
      [exercise-card "Particles with Repellers" "Exercise 4.9" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise9" pr/run]
      [exercise-card "Particles repel" "Exercise 4.10" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise10" prs/run]
      [exercise-card "Fire" "Exercise 4.11" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise11" f/run]
      [exercise-card "Particle with Images" "Exercise 4.12" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise12" pi/run]
      [exercise-card "Rainbow Fire" "Exercise 4.13" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise13" rf/run]
      [exercise-card "Fire Blend" "Exercise 4.14" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise14" rib/run]]]])
