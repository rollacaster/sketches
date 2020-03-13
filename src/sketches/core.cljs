(ns sketches.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [quil.core :as q]
            [sketches.noise-colors :as noc]
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
            [sketches.nature-of-code.surface-area :as sa]
            #_[sketches.nature-of-code.lift-induced-drag :as ld]
            [sketches.nature-of-code.invisible-attractors :as ia]
            [sketches.nature-of-code.own-force :as of]
            [sketches.nature-of-code.repulse-mouse :as rm]
            [sketches.nature-of-code.rotate-baton :as rb]
            [sketches.nature-of-code.cannon :as cn]
            [sketches.nature-of-code.vehicle :as ve]
            [sketches.nature-of-code.spiral :as sp]
            [sketches.heart-of-clojure :as hc]
            [sketches.nature-of-code.asteroids :as as]
            [sketches.nature-of-code.asteroids-with-particles :as ap]
            [sketches.nature-of-code.particles-with-repellers :as pr]
            [sketches.nature-of-code.particles-on-click :as ac]
            [sketches.nature-of-code.shutter-in-pieces :as sip]
            [sketches.nature-of-code.bob :as bo]
            [sketches.nature-of-code.insect :as in]
            [sketches.nature-of-code.angular-oscilliate :as ao]
            [sketches.nature-of-code.perlin-wave :as pw]
            [sketches.nature-of-code.custom-waves :as cw]
            [sketches.nature-of-code.combined-wave :as co]
            [sketches.nature-of-code.multi-pendulum :as mp]
            [sketches.nature-of-code.multi-springs :as ms]
            [sketches.nature-of-code.particle-force :as pf]
            [sketches.nature-of-code.rotating-particle :as rp]
            [sketches.nature-of-code.mixed-particles :as mip]
            [sketches.nature-of-code.dynamic-origin :as do]
            [sketches.nature-of-code.random-cellular-automaton :as rca]
            [sketches.nature-of-code.game-of-life :as gl]
            [sketches.nature-of-code.koch-curve :as kc]
            [sketches.nature-of-code.own-cantor :as oc]
            [sketches.nature-of-code.sierpinski :as si]
            [sketches.inferno :as i]
            [sketches.rotating-angles :as ra]
            [sketches.fire-texture :as ft]
            [sketches.fire-ball :as fb]
            [sketches.reverse-roots :as rr]
            [sketches.flowers :as flo]
            [sketches.rainbow-circles :as rc]
            [sketches.particle-party :as pp]
            [sketches.nature-of-code.force-push :as fp]
            [sketches.generative-artistry.triangular-mesh :as tm]
            [sketches.generative-artistry.un-deux-trois :as un]
            [sketches.generative-artistry.circle-packing :as cp]
            [sketches.generative-artistry.hypnotic-squares :as hs]
            [sketches.generative-artistry.piet-mondarin :as pm]
            [sketches.creative-coding.print-art :as pa]
            [sketches.creative-coding.webgl :as wg]
            [sketches.icons :refer [play-icon reload-icon stop-icon]]))

(defn card [title sub-title children]
  [:div.bg-white.br2.flex.flex-column.justify-between.items-center.f3.black.mb3.mr3-ns
   [:div.flex.justify-center.items-center
    children]
   [:div.mt3
    [:span.ma0 title]]
   [:div.mb3.f4
    sub-title]])

(defn stop-sketch [id]
  (q/with-sketch (q/get-sketch-by-id id)
    (q/no-loop)))

(defn sketch [run-sketch run-immediately]
  (let [is-started (r/atom false)]
    (fn []
      (if (or @is-started run-immediately)
        (let [id (str (random-uuid))]
          [(with-meta (fn [] [:div.flex.flex-column.items-center
                              [:div.w5.h5.mt4.mh4.mb3 {:id id}]
                              [:div.flex.h1
                               [:button.pointer.bn.bg-transparent
                                {:on-click #(do (stop-sketch id) (run-sketch id))}
                                (reload-icon)]
                               [:button.pointer.bn.bg-transparent
                                {:on-click #(do
                                              (stop-sketch id)
                                              (reset! is-started false))}
                                (stop-icon)]]])
             {:component-did-mount #(run-sketch id)})])
        [:div
         [:div.w5.h5.ma4.flex.justify-center.items-center.bg-gray
          [:button.button.bg-transparent.bn.white.pointer
           {:on-click #(reset! is-started true)}
           (play-icon :medium "white")]]]))))

(defn rac-card [title run-sketch run-immediately]
  (fn []
    [card
     title
     ""
     [sketch run-sketch run-immediately]]))

(defn exercise-card [title exercise-title exercise-link run-sketch run-immediately]
  (fn []
    [card
     title
     [:a.link.bb {:href exercise-link :target "_blank"} exercise-title]
     [sketch run-sketch run-immediately]]))

(defn section [title description]
  [:div.mb4.tc.tl-ns
   [:a.link.white {:href (str "#" title)}
    [:h2 title]]
     [:p description]])

(defn cards-container [& children]
  [:div.flex.flex-wrap.justify-center.justify-start-ns
   children])

(defn rac-cards []
  [:<>
   [:div
    [cards-container
     #_[rac-card "Margarete Fountain" mf/run true]
     ^{:key "Noise Colors"} [rac-card "Noise Colors" noc/run]
     ^{:key "Heart of Clojure"} [rac-card "Heart of Clojure" hc/run]
     ^{:key "Inferno"} [rac-card "Inferno" i/run]
     ^{:key "Reverse Roots"} [rac-card "Reverse Roots" rr/run]
     ^{:key "Fire Ball"} [rac-card "Fire Ball" fb/run]
     ^{:key "Fire Texture"} [rac-card "Fire Texture" ft/run]
     ^{:key "Flower"} [rac-card "Flower" flo/run]
     ^{:key "Rainbow Circles"} [rac-card "Rainbow Circles" rc/run]
     ^{:key "Oscillating Angles"} [rac-card "Oscillating Angles" ra/run ]
     ^{:key "Particle Party"} [rac-card "Particle Party" pp/run]]]])

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
    [:h3.tracked.tc.tl-ns "Introduction"]
    [cards-container
     ^{:key "Random Walk"} [exercise-card "Random Walk" "Exercise I.1" "https://natureofcode.com/book/introduction/#exercise-i1" rw/run]
     ^{:key "Random Walk II"} [exercise-card "Random Walk II" "Exercise I.3" "https://natureofcode.com/book/introduction/#exercise-i3" rwd/run]
     ^{:key "Paint Splatter"} [exercise-card "Paint Splatter" "Exercise I.4" "https://natureofcode.com/book/introduction/#exercise-i4" p/run]
     ^{:key "Random Walk III"} [exercise-card "Random Walk III" "Exercise I.5" "https://natureofcode.com/book/introduction/#exercise-i5" rwg/run]
     ^{:key "Random Walk IV"} [exercise-card "Random Walk IV" "Exercise I.6" "https://natureofcode.com/book/introduction/#exercise-i6" rwc/run]
     ^{:key "Random Walk V"} [exercise-card "Random Walk V" "Exercise I.7" "https://natureofcode.com/book/introduction/#exercise-i7" rwn/run]
     ^{:key "Noise Detail"} [exercise-card "Noise Detail" "Exercise I.8" "https://natureofcode.com/book/introduction/#exercise-i8" nd/run]
     ^{:key "Noise Animate"} [exercise-card "Noise Animate" "Exercise I.9" "https://natureofcode.com/book/introduction/#exercise-i9" na/run]
     ^{:key "Noise Terrain"} [exercise-card "Noise Terrain" "Exercise I.10" "https://natureofcode.com/book/introduction/#exercise-i10" nt/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Vectors"]
    [cards-container
     ^{:key "Bouncing Ball"} [exercise-card "Bouncing Ball" "Exercise 1.3" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise3" bb/run]
     ^{:key "Car"} [exercise-card "Car" "Exercise 1.5" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise5" c/run]
     ^{:key "Noise Car"} [exercise-card "Noise Car" "Exercise 1.6" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise6" nc/run]
     ^{:key "Mouse Acceleration"} [exercise-card "Mouse Acceleration" "Exercise 1.8" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise8" ma/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Forces"]
    [cards-container
     ^{:key "Balloon"} [exercise-card "Balloon" "Exercise 2.1" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise1" b/run]
     ^{:key "Force Push"} [exercise-card "Force Push" "Exercise 2.3" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise3" fp/run]
     ^{:key "Frictions"} [exercise-card "Frictions" "Exercise 2.4" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise4" fr/run]
     ^{:key "Fluid"} [exercise-card "Fluid" "Exercise 2.5" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise5" fl/run]
     ^{:key "Surface Area"} [exercise-card "Surface Area" "Exercise 2.6" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise6" sa/run]
     ;; Fluid resistance does not only work opposite to the velocity vector, but also perpendicular to it. This is known as “lift-induced drag” and will cause an airplane with an angled wing to rise in altitude. Try creating a simulation of lift.
     #_[exercise-card "Lift-induced Drag" "Exercise 2.7" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise7" ld/run true]
     ^{:key "Invisible Attractors"} [exercise-card "Invisible Attractors" "Exercise 2.8" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise8" ia/run]
     ^{:key "Own Force"} [exercise-card "Own Force" "Exercise 2.9" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise9" of/run]
     ^{:key "Repulse Mouse"} [exercise-card "Repulse Mouse" "Exercise 2.10" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise10" rm/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Oscillation"]
    [cards-container
     ^{:key "Rotate baton"} [exercise-card "Rotate baton" "Exercise 3.1" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise1" rb/run]
     ^{:key "Cannon"} [exercise-card "Cannon" "Exercise 3.2" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise2" cn/run]
     ^{:key "Vehicle"} [exercise-card "Vehicle" "Exercise 3.3" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise3" ve/run]
     ^{:key "Spiral"} [exercise-card "Spiral" "Exercise 3.4" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise4" sp/run]
     ^{:key "Asteroids"} [exercise-card "Asteroids" "Exercise 3.5" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise5" as/run]
     ^{:key "Bob"} [exercise-card "Bob" "Exercise 3.6" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise6" bo/run]
     ^{:key "Insect"} [exercise-card "Insect" "Exercise 3.7" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise7" in/run]
     ^{:key "Angular Oscilliate"} [exercise-card "Angular Oscilliate" "Exercise 3.8" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise8" ao/run]
     ^{:key "Perlin Wave"} [exercise-card "Perlin Wave" "Exercise 3.9" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise9" pw/run]
     ^{:key "Custom Waves"} [exercise-card "Custom Waves" "Exercise 3.10" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise10" cw/run]
     ^{:key "Combined Wave"} [exercise-card "Combined Wave" "Exercise 3.11" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise11" co/run]
     ^{:key "Multi Pendulum"} [exercise-card "Multi Pendulum" "Exercise 3.12" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise12" mp/run]
     ^{:key "Multi Springs"} [exercise-card "Multi Springs" "Exercise 3.16" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise16" ms/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Particle Systems"]
    [cards-container
     ^{:key "Particle Force"} [exercise-card "Particle Force" "Exercise 4.1" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise1" pf/run]
     ^{:key "Rotating Particle"} [exercise-card "Rotating Particle" "Exercise 4.2" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise2" rp/run]
     ^{:key "Dynamic Origin"} [exercise-card "Dynamic Origin" "Exercise 4.3" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise3" do/run]
     ^{:key "Asteroids with Particles"} [exercise-card "Asteroids with Particles" "Exercise 4.4" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise4" ap/run]
     ^{:key "Particles on Click"} [exercise-card "Particles on Click" "Exercise 4.5" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise5" ac/run]
     ^{:key "Shutter in Pieces"} [exercise-card "Shutter in Pieces" "Exercise 4.6" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise6" sip/run]
     ^{:key "Mixed Particles"} [exercise-card "Mixed Particles" "Exercise 4.8" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise8" mip/run]
     ^{:key "Particles with Repellers"} [exercise-card "Particles with Repellers" "Exercise 4.9" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise9" pr/run]
     ^{:key "Fire"} [exercise-card "Fire" "Exercise 4.11" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise11" f/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Cellular Automata"]
    [cards-container
     ^{:key "Random CA"} [exercise-card "Random CA" "Exercise 7.1" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise1" rca/run]
     ^{:key "Game of Life"} [exercise-card "Game of Life" "Exercise 7.6" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise6" gl/run]]]
   [:div
    [:h3.tracked.tc.tl-ns "Fractals"]
    [cards-container
     ^{:key "Own Cantor"} [exercise-card "Own Cantor" "Exercise 8.1" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise1" oc/run]
     ^{:key "Koch Curve"} [exercise-card "Koch Curve" "Exercise 8.2" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise2" kc/run]
     ^{:key "Sierpinski"} [exercise-card "Sierpinski" "Exercise 8.5" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise5" si/run]]]])

(defn generative-artistry []
  [:<>
   [section
    "Generative Artistry"
    [:<>
     "Tutorials of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/twholman?"} "Tim Holman's"] " "
     [:a.pointer.bb.link.white {:href "https://generativeartistry.com/"} "Generative Artistry"]
     " implemented in ClojureScript."]]
   [cards-container
    ^{:key "Tiled Lines"} [exercise-card "01" "Tiled Lines" "https://generativeartistry.com/tutorials/tiled-lines/" tl/run]
    ^{:key "Joy Division"} [exercise-card "02" "Joy Division" "https://generativeartistry.com/tutorials/joy-division/" jd/run]
    ^{:key "Cubic Disarray"} [exercise-card "03" "Cubic Disarray" "https://generativeartistry.com/tutorials/cubic-disarray/" cd/run]
    ^{:key "Triangular Mesh"} [exercise-card "04" "Triangular Mesh" "https://generativeartistry.com/tutorials/triangular-mesh/" tm/run]
    ^{:key "Un Deux Trois"} [exercise-card "05" "Un Deux Trois" "https://generativeartistry.com/tutorials/un-deux-trois/" un/run]
    ^{:key "Circle Packing"} [exercise-card "06" "Circle Packing" "https://generativeartistry.com/tutorials/circle-packing/" cp/run]
    ^{:key "Hypnotic Squares"} [exercise-card "07" "Hypnotic Squares" "https://generativeartistry.com/tutorials/hypnotic-squares/" hs/run]
    ^{:key "Piet Mondrian"} [exercise-card "08" "Piet Mondrian" "https://generativeartistry.com/tutorials/piet-mondrian/" pm/run]]])

(defn creative-coding []
  [:<>
   [section
    "Creative Coding with Canvas & WebGL"
    [:<>
     "Sketches of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/mattdesl"} "Matt DesLauriers'"] " "
     [:a.pointer.bb.link.white {:href "https://frontendmasters.com/courses/canvas-webgl/"} "Creative Coding with Canvas & WebGL"]
     " implemented in ClojureScript."]]
   [cards-container
    ^{:key "Print Art with Canvas"} [exercise-card "01" "Print Art with Canvas" "https://frontendmasters.com/courses/canvas-webgl/" pa/run]
    ^{:key "WebGL"} [exercise-card "02" "WebGL" "https://frontendmasters.com/courses/canvas-webgl/" wg/run]]])

(defn app []
  [:main.sans-serif.pa4.white.mw9.center
   [:div.mb5.tc.tl-ns
    [:h1 "Sketches by "
     [:a.pointer.bb.link.white {:href "https://twitter.com/rollacaster"} "@rollacaster"]]]
   [:div.mb5
    [rac-cards]]
   [:div.mb5
    [creative-coding]]
   [:div.mb5
    [generative-artistry]]
   [:div.mb5
    [nature-of-code]]])

(dom/render app (.getElementById js/document "app"))
