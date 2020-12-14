(ns sketches.nature-of-code.core
  (:require [sketches.components :refer [section]]
            [sketches.nature-of-code.introduction.core :as introduction]
            [sketches.nature-of-code.oscillation.core :as oscillation]
            [sketches.nature-of-code.cellular-automata.core :as cellular-automata]
            [sketches.nature-of-code.forces.core :as forces]
            [sketches.nature-of-code.vectors.core :as vectors]
            [sketches.nature-of-code.particle-systems.core :as particle-systems]
            [sketches.nature-of-code.physics-library.core :as physics-library]
            [sketches.nature-of-code.fractals.core :as fractals]))

(defn main []
  [:<>
   [section
    "Nature of Code"
    [:<>
     "Exercises of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/shiffman"} "Daniel Shiffman's"] " "
     [:a.pointer.bb.link.white {:href "https://natureofcode.com/"} "Nature of Code"]
     " implemented in ClojureScript."]]
   [introduction/main]
   [vectors/main]
   [forces/main]
   [oscillation/main]
   [particle-systems/main]
   [physics-library/main]
   [cellular-automata/main]
   [fractals/main]])

