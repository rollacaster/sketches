(ns sketches.core
  (:require [quil.core :as q]
            [reagent.core :as r]
            [reagent.dom :as dom]
            [sketches.creative-coding.print-art :as pa]
            [sketches.creative-coding.webgl :as wg]
            [sketches.fire-ball :as fb]
            [sketches.fire-texture :as ft]
            [sketches.flowers :as flo]
            [sketches.generative-artistry.circle-packing :as cp]
            [sketches.generative-artistry.cubic-disarray :as cd]
            [sketches.generative-artistry.hypnotic-squares :as hs]
            [sketches.generative-artistry.joy-division :as jd]
            [sketches.generative-artistry.piet-mondarin :as pm]
            [sketches.generative-artistry.tiled-lines :as tl]
            [sketches.generative-artistry.triangular-mesh :as tm]
            [sketches.generative-artistry.un-deux-trois :as un]
            [sketches.generative-desgin.P-01.P-1-0-01 :as P-1-0-01]
            [sketches.generative-desgin.P-01.P-1-1-1-01 :as P-1-1-1-01]
            [sketches.heart-of-clojure :as hc]
            [sketches.icons :refer [play-icon reload-icon stop-icon]]
            [sketches.inferno :as i]
            [sketches.nature-of-code.angular-oscilliate :as ao]
            [sketches.nature-of-code.asteroids :as as]
            [sketches.nature-of-code.asteroids-with-particles :as ap]
            [sketches.nature-of-code.balloon :as b]
            [sketches.nature-of-code.bob :as bo]
            [sketches.nature-of-code.bouncing-ball :as bb]
            [sketches.nature-of-code.box-shapes :as bs]
            [sketches.nature-of-code.cannon :as cn]
            [sketches.nature-of-code.car :as c]
            [sketches.nature-of-code.circular-shapes :as cs]
            [sketches.nature-of-code.combined-wave :as co]
            [sketches.nature-of-code.custom-waves :as cw]
            [sketches.nature-of-code.dynamic-origin :as do]
            [sketches.nature-of-code.fire :as f]
            [sketches.nature-of-code.fire-blend :as rib]
            [sketches.nature-of-code.fire-rainbow :as rf]
            [sketches.nature-of-code.fluid :as fl]
            [sketches.nature-of-code.force-push :as fp]
            [sketches.nature-of-code.frictions :as fr]
            [sketches.nature-of-code.game-of-life :as gl]
            [sketches.nature-of-code.insect :as in]
            [sketches.nature-of-code.invisible-attractors :as ia]
            [sketches.nature-of-code.koch-curve :as kc]
            [sketches.nature-of-code.mixed-particles :as mip]
            [sketches.nature-of-code.mouse-acceleration :as ma]
            [sketches.nature-of-code.multi-pendulum :as mp]
            [sketches.nature-of-code.multi-springs :as ms]
            [sketches.nature-of-code.noise-animate :as na]
            [sketches.nature-of-code.noise-car :as nc]
            [sketches.nature-of-code.noise-detail :as nd]
            [sketches.nature-of-code.noise-terrain :as nt]
            [sketches.nature-of-code.own-cantor :as oc]
            [sketches.nature-of-code.own-force :as of]
            [sketches.nature-of-code.paint-splatter :as p]
            [sketches.nature-of-code.particle-force :as pf]
            [sketches.nature-of-code.particles-on-click :as ac]
            [sketches.nature-of-code.particles-repel :as prs]
            [sketches.nature-of-code.particles-with-images :as pi]
            [sketches.nature-of-code.particles-with-repellers :as pr]
            [sketches.nature-of-code.perlin-wave :as pw]
            [sketches.nature-of-code.random-cellular-automaton :as rca]
            [sketches.nature-of-code.random-walk :as rw]
            [sketches.nature-of-code.random-walk-custom-step :as rwc]
            [sketches.nature-of-code.random-walk-dynamic :as rwd]
            [sketches.nature-of-code.random-walk-gaussian :as rwg]
            [sketches.nature-of-code.random-walk-noise :as rwn]
            [sketches.nature-of-code.repulse-mouse :as rm]
            [sketches.nature-of-code.rotate-baton :as rb]
            [sketches.nature-of-code.rotating-particle :as rp]
            [sketches.nature-of-code.shutter-in-pieces :as sip]
            [sketches.nature-of-code.sierpinski :as si]
            [sketches.nature-of-code.spiral :as sp]
            [sketches.nature-of-code.surface-area :as sa]
            [sketches.nature-of-code.vehicle :as ve]
            [sketches.noise-colors :as noc]
            [sketches.particle-party :as pp]
            [sketches.rainbow-circles :as rc]
            [sketches.reverse-roots :as rr]
            [sketches.rotating-angles :as ra]))

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

(defn cards-container [children]
  [:div.flex.flex-wrap.justify-center.justify-start-ns
   children])

(defn rac-cards []
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

(defn generative-design []
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
      [exercise-card "Color spectrum in grid" "P-1-1-1-01" "http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_1_1_01" P-1-1-1-01/run]]]]])

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
     [:<>
      [exercise-card "Random Walk" "Exercise I.1" "https://natureofcode.com/book/introduction/#exercise-i1" rw/run]
      [exercise-card "Random Walk II" "Exercise I.3" "https://natureofcode.com/book/introduction/#exercise-i3" rwd/run]
      [exercise-card "Paint Splatter" "Exercise I.4" "https://natureofcode.com/book/introduction/#exercise-i4" p/run]
      [exercise-card "Random Walk III" "Exercise I.5" "https://natureofcode.com/book/introduction/#exercise-i5" rwg/run]
      [exercise-card "Random Walk IV" "Exercise I.6" "https://natureofcode.com/book/introduction/#exercise-i6" rwc/run]
      [exercise-card "Random Walk V" "Exercise I.7" "https://natureofcode.com/book/introduction/#exercise-i7" rwn/run]
      [exercise-card "Noise Detail" "Exercise I.8" "https://natureofcode.com/book/introduction/#exercise-i8" nd/run]
      [exercise-card "Noise Animate" "Exercise I.9" "https://natureofcode.com/book/introduction/#exercise-i9" na/run]
      [exercise-card "Noise Terrain" "Exercise I.10" "https://natureofcode.com/book/introduction/#exercise-i10" nt/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Vectors"]
    [cards-container
     [:<>
      [exercise-card "Bouncing Ball" "Exercise 1.3" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise3" bb/run]
      [exercise-card "Car" "Exercise 1.5" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise5" c/run]
      [exercise-card "Noise Car" "Exercise 1.6" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise6" nc/run]
      [exercise-card "Mouse Acceleration" "Exercise 1.8" "https://natureofcode.com/book/chapter-1-vectors#chapter01_exercise8" ma/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Forces"]
    [cards-container
     [:<>
      [exercise-card "Balloon" "Exercise 2.1" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise1" b/run]
      [exercise-card "Force Push" "Exercise 2.3" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise3" fp/run]
      [exercise-card "Frictions" "Exercise 2.4" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise4" fr/run]
      [exercise-card "Fluid" "Exercise 2.5" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise5" fl/run]
      [exercise-card "Surface Area" "Exercise 2.6" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise6" sa/run]
      ;; Fluid resistance does not only work opposite to the velocity vector, but also perpendicular to it. This is known as “lift-induced drag” and will cause an airplane with an angled wing to rise in altitude. Try creating a simulation of lift.
      #_[exercise-card "Lift-induced Drag" "Exercise 2.7" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise7" ld/run true]
      [exercise-card "Invisible Attractors" "Exercise 2.8" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise8" ia/run]
      [exercise-card "Own Force" "Exercise 2.9" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise9" of/run]
      [exercise-card "Repulse Mouse" "Exercise 2.10" "https://natureofcode.com/book/chapter-2-forces#chapter02_exercise10" rm/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Oscillation"]
    [cards-container
     [:<>
      [exercise-card "Rotate baton" "Exercise 3.1" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise1" rb/run]
      [exercise-card "Cannon" "Exercise 3.2" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise2" cn/run]
      [exercise-card "Vehicle" "Exercise 3.3" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise3" ve/run]
      [exercise-card "Spiral" "Exercise 3.4" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise4" sp/run]
      [exercise-card "Asteroids" "Exercise 3.5" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise5" as/run]
      [exercise-card "Bob" "Exercise 3.6" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise6" bo/run]
      [exercise-card "Insect" "Exercise 3.7" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise7" in/run]
      [exercise-card "Angular Oscilliate" "Exercise 3.8" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise8" ao/run]
      [exercise-card "Perlin Wave" "Exercise 3.9" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise9" pw/run]
      [exercise-card "Custom Waves" "Exercise 3.10" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise10" cw/run]
      [exercise-card "Combined Wave" "Exercise 3.11" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise11" co/run]
      [exercise-card "Multi Pendulum" "Exercise 3.12" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise12" mp/run]
      [exercise-card "Multi Springs" "Exercise 3.16" "https://natureofcode.com/book/chapter-3-oscillation#chapter03_exercise16" ms/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Particle Systems"]
    [cards-container
     [:<>
      [exercise-card "Particle Force" "Exercise 4.1" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise1" pf/run]
      [exercise-card "Rotating Particle" "Exercise 4.2" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise2" rp/run]
      [exercise-card "Dynamic Origin" "Exercise 4.3" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise3" do/run]
      [exercise-card "Asteroids with Particles" "Exercise 4.4" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise4" ap/run]
      [exercise-card "Particles on Click" "Exercise 4.5" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise5" ac/run]
      [exercise-card "Shutter in Pieces" "Exercise 4.6" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise6" sip/run]
      [exercise-card "Mixed Particles" "Exercise 4.8" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise8" mip/run]
      [exercise-card "Particles with Repellers" "Exercise 4.9" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise9" pr/run]
      [exercise-card "Particles repel" "Exercise 4.10" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise10" prs/run]
      [exercise-card "Fire" "Exercise 4.11" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise11" f/run]
      [exercise-card "Particle with Images" "Exercise 4.12" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise12" pi/run]
      [exercise-card "Rainbow Fire" "Exercise 4.13" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise13" rf/run]
      [exercise-card "Fire Blend" "Exercise 4.14" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise14" rib/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Physics Libraries"]
    [cards-container
     [:<>
      [exercise-card "Circular Shapes" "Exercise 5.1" "https://natureofcode.com/book/chapter-5-physics-libraries/#chapter05_exercise1" cs/run]
      [exercise-card "Box Shapes" "Exercise 5.2" "https://natureofcode.com/book/chapter-5-physics-libraries/#chapter05_exercise2" bs/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Cellular Automata"]
    [cards-container
     [:<>
      [exercise-card "Random CA" "Exercise 7.1" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise1" rca/run]
      [exercise-card "Game of Life" "Exercise 7.6" "https://natureofcode.com/book/chapter-7-cellular-automata/#chapter07_exercise6" gl/run]]]]
   [:div
    [:h3.tracked.tc.tl-ns "Fractals"]
    [cards-container
     [:<>
      [exercise-card "Own Cantor" "Exercise 8.1" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise1" oc/run]
      [exercise-card "Koch Curve" "Exercise 8.2" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise2" kc/run]
      [exercise-card "Sierpinski" "Exercise 8.5" "https://natureofcode.com/book/chapter-8-fractals/#chapter08_exercise5" si/run]]]]])

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
    [:<>
     [exercise-card "01" "Tiled Lines" "https://generativeartistry.com/tutorials/tiled-lines/" tl/run]
     [exercise-card "02" "Joy Division" "https://generativeartistry.com/tutorials/joy-division/" jd/run]
     [exercise-card "03" "Cubic Disarray" "https://generativeartistry.com/tutorials/cubic-disarray/" cd/run]
     [exercise-card "04" "Triangular Mesh" "https://generativeartistry.com/tutorials/triangular-mesh/" tm/run]
     [exercise-card "05" "Un Deux Trois" "https://generativeartistry.com/tutorials/un-deux-trois/" un/run]
     [exercise-card "06" "Circle Packing" "https://generativeartistry.com/tutorials/circle-packing/" cp/run]
     [exercise-card "07" "Hypnotic Squares" "https://generativeartistry.com/tutorials/hypnotic-squares/" hs/run]
     [exercise-card "08" "Piet Mondrian" "https://generativeartistry.com/tutorials/piet-mondrian/" pm/run]]]])

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
    [:<>
     [exercise-card "01" "Print Art with Canvas" "https://frontendmasters.com/courses/canvas-webgl/" pa/run]
     [exercise-card "02" "WebGL" "https://frontendmasters.com/courses/canvas-webgl/" wg/run]]]])

(defn app []
  [:main.sans-serif.pa4.white.mw9.center
   [:div.mb5.tc.tl-ns
    [:h1 "Sketches by "
     [:a.pointer.bb.link.white {:href "https://twitter.com/rollacaster"} "@rollacaster"]]]
   [:div.mb5
    [rac-cards]]
   [:div.mb5
    [generative-design]]
   [:div.mb5
    [creative-coding]]
   [:div.mb5
    [generative-artistry]]
   [:div.mb5
    [nature-of-code]]])

(dom/render app (.getElementById js/document "app"))
