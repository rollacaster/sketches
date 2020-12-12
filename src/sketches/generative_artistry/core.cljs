(ns sketches.generative-artistry.core
  (:require [sketches.components :refer [cards-container exercise-card section]]
            [sketches.generative-artistry.circle-packing :as cp]
            [sketches.generative-artistry.cubic-disarray :as cd]
            [sketches.generative-artistry.hypnotic-squares :as hs]
            [sketches.generative-artistry.joy-division :as jd]
            [sketches.generative-artistry.piet-mondarin :as pm]
            [sketches.generative-artistry.tiled-lines :as tl]
            [sketches.generative-artistry.triangular-mesh :as tm]
            [sketches.generative-artistry.un-deux-trois :as un]))

(defn main []
  [:<>
   [section
    "Generative Artistry"
    [:<>
     "Tutorials of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/twholman?"} "Tim Holman's"] " "
     [:a.pointer.bb.link.white {:href "https://generativeartistry.com/"} "Generative Artistry"]
     " implemented in ClojureScript."]]
   [cards-container
    [:<>
     [exercise-card "01" "Tiled Lines" "https://generativeartistry.com/tutorials/tiled-lines/" tl/run]
     [exercise-card "02" "Joy Division" "https://generativeartistry.com/tutorials/joy-division/" jd/run]
     [exercise-card "03" "Cubic Disarray" "https://generativeartistry.com/tutorials/cubic-disarray/" cd/run]
     [exercise-card "04" "Triangular Mesh" "https://generativeartistry.com/tutorials/triangular-mesh/" tm/run]
     [exercise-card "05" "Un Deux Trois" "https://generativeartistry.com/tutorials/un-deux-trois/" un/run]
     [exercise-card "06" "Circle Packing" "https://generativeartistry.com/tutorials/circle-packing/" cp/run]
     [exercise-card "07" "Hypnotic Squares" "https://generativeartistry.com/tutorials/hypnotic-squares/" hs/run]
     [exercise-card "08" "Piet Mondrian" "https://generativeartistry.com/tutorials/piet-mondrian/" pm/run]]]])



