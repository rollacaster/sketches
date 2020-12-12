(ns sketches.core
  (:require [reagent.dom :as dom]
            [sketches.creative-coding.core :as creative-coding]
            [sketches.generative-artistry.core :as generative-artistry]
            [sketches.generative-desgin.core :as generative-design]
            [sketches.nature-of-code.core :as nature-of-code]
            [sketches.rac-sketches.core :as rac-sketches]))

(defn app []
  [:main.sans-serif.pa4.white.mw9.center
   [:div.mb5.tc.tl-ns
    [:h1 "Sketches by "
     [:a.pointer.bb.link.white {:href "https://twitter.com/rollacaster"} "@rollacaster"]]]
   [:div.mb5
    [rac-sketches/main]]
   [:div.mb5
    [generative-design/main]]
   [:div.mb5
    [creative-coding/main]]
   [:div.mb5
    [generative-artistry/main]]
   [:div.mb5
    [nature-of-code/main]]])

(dom/render app (.getElementById js/document "app"))
