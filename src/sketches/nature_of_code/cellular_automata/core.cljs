(ns sketches.nature-of-code.cellular-automata.core
  (:require [sketches.components :refer [cards-container exercise-card]]
            [sketches.nature-of-code.cellular-automata.game-of-life :as gl]
            [sketches.nature-of-code.cellular-automata.random-cellular-automaton
             :as
             rca]))

(defn main []
  [:div
    [:h3.tracked.tc.tl-ns "Cellular Automata"]
    [cards-container
     [:<>
      [exercise-card "Random CA" "Exercise 7.1" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise1" rca/run]
      [exercise-card "Game of Life" "Exercise 7.6" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise6" gl/run]]]])
