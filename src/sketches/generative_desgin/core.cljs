(ns sketches.generative-desgin.core
  (:require [sketches.components :refer [cards-container exercise-card section]]
            [sketches.generative-desgin.P-01.P-1-0-01 :as P-1-0-01]
            [sketches.generative-desgin.P-01.P-1-1-1-01 :as P-1-1-1-01]
            [sketches.generative-desgin.P-01.P-1-1-2-01 :as P-1-1-2-01]
            [sketches.generative-desgin.P-01.P-1-2-1-01 :as P-1-2-1-01]
            [sketches.generative-desgin.P-01.P-1-2-3-01 :as P-1-2-3-01]
            [sketches.generative-desgin.P-02.P-2-0-01 :as P-2-0-01]
            [sketches.generative-desgin.P-02.P-2-1-1-01 :as P-2-1-1-01]
            [sketches.generative-desgin.P-02.P-2-1-2-01 :as P-2-1-2-01]
            [sketches.generative-desgin.P-02.P-2-1-3-01 :as P-2-1-3-01]
            [sketches.generative-desgin.P-02.P-2-1-4-01 :as P-2-1-4-01]
            [sketches.generative-desgin.P-02.P-2-1-5-01 :as P-2-1-5-01]
            [sketches.generative-desgin.P-02.P-2-2-1-01 :as P-2-2-1-01]
            [sketches.generative-desgin.P-02.P-2-2-3-01 :as P-2-2-3-01]
            [sketches.generative-desgin.P-02.P-2-2-4-01 :as P-2-2-4-01]
            [sketches.generative-desgin.P-02.P-2-2-5-01 :as P-2-2-5-01]
            [sketches.generative-desgin.P-02.P-2-2-6-01 :as P-2-2-6-01]
            [sketches.generative-desgin.P-02.P-2-3-1-01 :as P-2-3-1-01]
            [sketches.generative-desgin.P-02.P-2-3-3-01 :as P-2-3-3-01]
            [sketches.generative-desgin.P-02.P-2-3-4-01 :as P-2-3-4-01]
            [sketches.generative-desgin.P-02.P-2-3-6-01 :as P-2-3-6-01]
            [sketches.generative-desgin.P-02.P-2-3-7-01 :as P-2-3-7-01]
            [sketches.generative-desgin.P-03.P-3-0-01 :as P-3-0-01]
            [sketches.generative-desgin.P-03.P-3-1-2-01 :as P_3_1_2_01]
            [sketches.generative-desgin.P-03.P-3-1-3-01 :as P_3_1_3_01]
            [sketches.generative-desgin.P-03.P-3-1-4-01 :as P_3_1_4_01]))

(defn main []
  [:<>
   [section
    "Generative Design"
    [:<>
     "Exercises of "
     [:a.pointer.bb.link.white {:href "http://www.generative-gestaltung.de/2/"} "Generative Design"] " "
     " implemented in ClojureScript."]]
   [:div
    [:h3.tracked.tc.tl-ns "Color"]
    [cards-container
     [:<>
      [exercise-card "Hello, color" "P_1_0_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_0_01" P-1-0-01/run]
      [exercise-card "Color spectrum in grid" "P-1-1-1-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_1_01" P-1-1-1-01/run]
      [exercise-card "Color spectrum in a circle" "P-1-1-2-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_2_01" P-1-1-2-01/run]
      [exercise-card "Color palettes interpolation" "P-1-2-1-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_1_01" P-1-2-1-01/run]
      [exercise-card "Color palettes from rules" "P-1-2-3-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_3_01" P-1-2-3-01/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Shape"]
    [cards-container
     [:<>
      [exercise-card "Hello, Shape" "P_2_0_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_0_01" P-2-0-01/run]
      [exercise-card "Alignment in a grid" "P_2_1_1_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_01" P-2-1-1-01/run]
      [exercise-card "Movement in a grid" "P_2_1_2_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_2_01" P-2-1-2-01/run]
      [exercise-card "Complex modules in a grid" "P_2_1_3_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_3_01" P-2-1-3-01/run]
      [exercise-card "Checkboxes in a grid" "P_2_1_4_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_4_01" P-2-1-4-01/run]
      [exercise-card "From grid to moiré" "P_2_1_5_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_5_01" P-2-1-5-01/run]
      [exercise-card "Dumb agents" "P-2-2-1-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_1_01" P-2-2-1-01/run]
      [exercise-card "Shape from agents" "P-2-2-3-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_3_01" P-2-2-3-01/run]
      [exercise-card "Growth structure from agents" "P-2-2-4-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_4_01" P-2-2-4-01/run]
      [exercise-card "Structural density from agents" "P-2-2-5-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_5_01" P-2-2-5-01/run]
      [exercise-card "Agents on a pendulum" "P-2-2-6-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_6_01" P-2-2-6-01/run ]
      [exercise-card "Drawing with brushes" "P-2-3-1-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_1_01" P-2-3-1-01/run ]
      [exercise-card "Drawing with type" "P-2-3-3-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_3_01" P-2-3-3-01/run]
      [exercise-card "Drawing with dynamic brush" "P-2-3-4-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_4_01" P-2-3-4-01/run]
      [exercise-card "Drawing with complex modules" "P-2-3-6-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_6_01" P-2-3-6-01/run]
      [exercise-card "Drawing with multiple brushes" "P-2-3-7-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_3_7_01" P-2-3-7-01/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Type"]
    [cards-container
     [:<>
      [exercise-card "Hello, Type" "P_3_0_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_3_0_01" P-3-0-01/run]
      [exercise-card "Text as blueprint" "P_3_1_2_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_3_1_2_01" P_3_1_2_01/run]
      [exercise-card "Text frequencies" "P_3_1_3_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_3_1_3_01" P_3_1_3_01/run]
      [exercise-card "Text treemap" "P_3_1_4_01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_3_1_4_01" P_3_1_4_01/run]]]]])

