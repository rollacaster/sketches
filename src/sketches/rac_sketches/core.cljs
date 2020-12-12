(ns sketches.rac-sketches.core
  (:require [sketches.components :refer [card cards-container sketch]]
            [sketches.rac-sketches.fire-ball :as fb]
            [sketches.rac-sketches.fire-texture :as ft]
            [sketches.rac-sketches.flowers :as flo]
            [sketches.rac-sketches.heart-of-clojure :as hc]
            [sketches.rac-sketches.inferno :as i]
            [sketches.rac-sketches.noise-colors :as noc]
            [sketches.rac-sketches.particle-party :as pp]
            [sketches.rac-sketches.rainbow-circles :as rc]
            [sketches.rac-sketches.reverse-roots :as rr]
            [sketches.rac-sketches.rotating-angles :as ra]))

(defn rac-card [title run-sketch run-immediately]
  (fn []
    [card
     title
     ""
     [sketch title run-sketch run-immediately]]))

(defn main []
  [:<>
   [:div
    [cards-container
     [:<>
      #_[rac-card "Margarete Fountain" mf/run true]
      [rac-card "Noise Colors" noc/run]
      [rac-card "Heart of Clojure" hc/run]
      [rac-card "Inferno" i/run]
      [rac-card "Reverse Roots" rr/run]
      [rac-card "Fire Ball" fb/run]
      [rac-card "Fire Texture" ft/run]
      [rac-card "Flower" flo/run]
      [rac-card "Rainbow Circles" rc/run]
      [rac-card "Oscillating Angles" ra/run ]
      [rac-card "Particle Party" pp/run]]]]])

