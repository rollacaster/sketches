(ns sketches.creative-coding.core
  (:require [sketches.components :refer [cards-container exercise-card section]]
            [sketches.creative-coding.print-art :as pa]
            [sketches.creative-coding.webgl :as wg]))

(defn main []
  [:<>
   [section
    "Creative Coding with Canvas & WebGL"
    [:<>
     "Sketches of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/mattdesl"} "Matt DesLauriers'"] " "
     [:a.pointer.bb.link.white {:href "https://frontendmasters.com/courses/canvas-webgl/"} "Creative Coding with Canvas & WebGL"]
     " implemented in ClojureScript."]]
   [cards-container
    [:<>
     [exercise-card "01" "Print Art with Canvas" "https://frontendmasters.com/courses/canvas-webgl/" pa/run]
     [exercise-card "02" "WebGL" "https://frontendmasters.com/courses/canvas-webgl/" wg/run]]]])
