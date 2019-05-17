(ns sketches.core
  (:require [reagent.core :as r]
            [sketches.generative-artistry.tiled-lines :as tl]
            [sketches.generative-artistry.joy-division :as jd]
            [sketches.generative-artistry.cubic-disarray :as cd]
            [sketches.nature-of-code.bouncing-ball :as bb]
            [sketches.nature-of-code.fire :as f]
            [sketches.nature-of-code.noise-animate :as na]
            [sketches.nature-of-code.noise-detail :as nd]
            [sketches.nature-of-code.noise-terrain :as nt]
            [sketches.nature-of-code.paint-splatter :as p]
            [sketches.nature-of-code.random-walk :as rw]
            [sketches.nature-of-code.random-walk-custom-step :as rwc]
            [sketches.nature-of-code.random-walk-dynamic :as rwd]
            [sketches.nature-of-code.random-walk-gaussian :as rwg]
            [sketches.nature-of-code.random-walk-noise :as rwn]
            [sketches.nature-of-code.balloon :as b]
            [sketches.nature-of-code.car :as c]
            [sketches.nature-of-code.noise-car :as nc]
            [sketches.nature-of-code.mouse-acceleration :as ma]
            [sketches.nature-of-code.frictions :as fr]
            [sketches.nature-of-code.fluid :as fl]
            [sketches.inferno :as i]
            [sketches.fire-texture :as ft]
            [sketches.fire-ball :as fb]
            [sketches.reverse-roots :as rr]
            [sketches.nature-of-code.force-push :as fp]
            [sketches.generative-artistry.triangular-mesh :as tm]
            [sketches.generative-artistry.un-deux-trois :as un]
            [sketches.generative-artistry.circle-packing :as cp]
            [sketches.generative-artistry.hypnotic-squares :as hs]
            [sketches.generative-artistry.piet-mondarin :as pm]))

(defn card [title sub-title children]
  [:div.bg-white.br2.flex.flex-column.justify-between.items-center.f3.black.mb3.mr3-ns
   [:div.w5.h5.pa4.flex.justify-center.items-center
    children]
   [:div.mt3
    [:span.ma0 title]]
   [:div.mb3.f4
    sub-title]])

(defn rac-sketch [title run-sketch run-immediately]
  (let [isStarted (r/atom false)]
    (fn []
      [card
       title
       ""
       (if (or @isStarted run-immediately)
         (let [id (str (random-uuid))]
           [(with-meta (fn [] [:div {:id id}])
              {:component-did-mount #(run-sketch id)})])
         [:div.h-100.w-100.flex.justify-center.items-center.bg-gray
          [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])])))

(defn sketch [title exercise-title exercise-link run-sketch run-immediately]
  (let [isStarted (r/atom false)]
    (fn []
      [card
       title
       [:a.link.bb {:href exercise-link :target "_blank"} exercise-title]
       (if (or @isStarted run-immediately)
         (let [id (str (random-uuid))]
           [(with-meta (fn [] [:div {:id id}])
              {:component-did-mount #(run-sketch id)})])
         [:div.h-100.w-100.flex.justify-center.items-center.bg-gray
          [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])])))

(defn section [title description]
  [:div.mb4
   [:a.link.white {:href (str "#" title)}
    [:h2 title]]
     [:p description]])

(defn rac-sketches []
  [:<>
   [:div
    [:div.flex.flex-wrap.justify-start
     [rac-sketch "Inferno" i/run]
     [rac-sketch "Reverse Roots" rr/run]
     [rac-sketch "Fire Ball" fb/run]
     [rac-sketch "Fire Texture" ft/run]]]])

(defn nature-of-code []
  [:<>
   [section
    "Nature of Code"
    [:<>
     "Exercises of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/shiffman"} "Daniel Shiffman's"] " "
     [:a.pointer.bb.link.white {:href "https://natureofcode.com/"} "Nature of Code"]
     " implemented in ClojureScript."]]
   [:div
    [:h3.tracked "Introduction"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Random Walk" "Exercise I.1" "https://natureofcode.com/book/introduction/#exercise-i1" rw/run]
     [sketch "Random Walk II" "Exercise I.3" "https://natureofcode.com/book/introduction/#exercise-i3" rwd/run]
     [sketch "Paint Splatter" "Exercise I.4" "https://natureofcode.com/book/introduction/#exercise-i4" p/run]
     [sketch "Random Walk III" "Exercise I.5" "https://natureofcode.com/book/introduction/#exercise-i5" rwg/run]
     [sketch "Random Walk IV" "Exercise I.6" "https://natureofcode.com/book/introduction/#exercise-i6" rwc/run]
     [sketch "Random Walk V" "Exercise I.7" "https://natureofcode.com/book/introduction/#exercise-i7" rwn/run]
     [sketch "Noise Detail" "Exercise I.8" "https://natureofcode.com/book/introduction/#exercise-i8" nd/run]
     [sketch "Noise Animate" "Exercise I.9" "https://natureofcode.com/book/introduction/#exercise-i9" na/run]
     [sketch "Noise Terrain" "Exercise I.10" "https://natureofcode.com/book/introduction/#exercise-i10" nt/run]]]
   [:div
    [:h3.tracked "Vectors"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Bouncing Ball" "Exercise 1.3" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise3" bb/run]
     [sketch "Car" "Exercise 1.5" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise5" c/run]
     [sketch "Noise Car" "Exercise 1.6" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise6" nc/run]
     [sketch "Mouse Acceleration" "Exercise 1.8" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise8" ma/run]]]
   [:div
    [:h3.tracked "Forces"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Balloon" "Exercise 2.1" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise1" b/run]
     [sketch "Force Push" "Exercise 2.3" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise3" fp/run]
     [sketch "Frictions" "Exercise 2.4" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise4" fr/run]
     [sketch "Fluid" "Exercise 2.5" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise5" fl/run]]]
   [:div
    [:h3.tracked "Particle Systems"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Fire" "Exercise 4.11" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise11" f/run]]]])

(defn generative-artistry []
  [:<>
   [section
    "Generative Artistry"
    [:<>
     "Tutorials of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/twholman?"} "Tim Holman's"] " "
     [:a.pointer.bb.link.white {:href "https://generativeartistry.com/"} "Generative Artistry"]
     " implemented in ClojureScript."]]
   [:div.flex.flex-wrap.justify-start
    [sketch "01" "Tiled Lines" "https://generativeartistry.com/tutorials/tiled-lines/" tl/run]
    [sketch "02" "Joy Division" "https://generativeartistry.com/tutorials/joy-division/" jd/run]
    [sketch "03" "Cubic Disarray" "https://generativeartistry.com/tutorials/cubic-disarray/" cd/run]
    [sketch "04" "Triangular Mesh" "https://generativeartistry.com/tutorials/triangular-mesh/" tm/run]
    [sketch "05" "Un Deux Trois" "https://generativeartistry.com/tutorials/un-deux-trois/" un/run]
    [sketch "06" "Circle Packing" "https://generativeartistry.com/tutorials/circle-packing/" cp/run]
    [sketch "07" "Hypnotic Squares" "https://generativeartistry.com/tutorials/hypnotic-squares/" hs/run]
    [sketch "08" "Piet Mondrian" "https://generativeartistry.com/tutorials/piet-mondrian/" pm/run]]])

(defn app []
  [:main.sans-serif.pa4.white.mw9.center
   [:div.mb5
    [:h1 "Sketches by "
     [:a.pointer.bb.link.white {:href "https://twitter.com/rollacaster"} "@rollacaster"]]]
   [:div.mb5
    [rac-sketches]]
   [:div.mb5
    [generative-artistry]]
   [:div.mb5
    [nature-of-code]]])

(r/render app (.getElementById js/document "app"))
