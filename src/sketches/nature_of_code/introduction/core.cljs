(ns sketches.nature-of-code.introduction.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.introduction.noise-animate :as na]
            [sketches.nature-of-code.introduction.noise-detail :as nd]
            [sketches.nature-of-code.introduction.noise-terrain :as nt]
            [sketches.nature-of-code.introduction.paint-splatter :as p]
            [sketches.nature-of-code.introduction.random-walk :as rw]
            [sketches.nature-of-code.introduction.random-walk-custom-step :as rwc]
            [sketches.nature-of-code.introduction.random-walk-dynamic :as rwd]
            [sketches.nature-of-code.introduction.random-walk-gaussian :as rwg]
            [sketches.nature-of-code.introduction.random-walk-noise :as rwn]))

(defn main []
  [:div
   [:h3.tracked.tc.tl-ns "Introduction"]
   [cards-container
    [:<>
     [exercise-card "Random Walk" "Exercise I.1" "https://natureofcode.com/book/introduction/#exercise-i1" rw/run]
     [exercise-card "Random Walk II" "Exercise I.3" "https://natureofcode.com/book/introduction/#exercise-i3" rwd/run]
     [exercise-card "Paint Splatter" "Exercise I.4" "https://natureofcode.com/book/introduction/#exercise-i4" p/run]
     [exercise-card "Random Walk III" "Exercise I.5" "https://natureofcode.com/book/introduction/#exercise-i5" rwg/run]
     [exercise-card "Random Walk IV" "Exercise I.6" "https://natureofcode.com/book/introduction/#exercise-i6" rwc/run]
     [exercise-card "Random Walk V" "Exercise I.7" "https://natureofcode.com/book/introduction/#exercise-i7" rwn/run]
     [exercise-card "Noise Detail" "Exercise I.8" "https://natureofcode.com/book/introduction/#exercise-i8" nd/run]
     [exercise-card "Noise Animate" "Exercise I.9" "https://natureofcode.com/book/introduction/#exercise-i9" na/run]
     [exercise-card "Noise Terrain" "Exercise I.10" "https://natureofcode.com/book/introduction/#exercise-i10" nt/run]]]])
