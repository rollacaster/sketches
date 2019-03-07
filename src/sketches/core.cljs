(ns sketches.core
  (:require [reagent.core :as r]
            [sketches.fire :as f]
            [sketches.spiral :as s]
            [sketches.random-walk :as rw]
            [sketches.random-walk-dynamic :as rwd]
            [sketches.random-walk-gaussian :as rwg]
            [sketches.random-walk-custom-step :as rwc]
            [sketches.paint-splatter :as p]
            [sketches.random-walk-noise :as rwn]
            [sketches.noise :as n]))

(defn card [title sub-title children]
  [:div.bg-white.br2.flex.flex-column.justify-between.items-center.f2.black.mb3.mr3-ns
   [:div.w5.h5.pa4.flex.justify-center.items-center
    children]
   [:div.mt3
    [:span.ma0 title]]
   [:div.mb3.f4
    sub-title]])

(defn sketch [title exercise-title exercise-link run-sketch]
  (let [isStarted (r/atom false)]
    (fn []
      [card
       title
       [:a.link.bb {:href exercise-link :target "_blank"} exercise-title]
       (if @isStarted
         (let [canvas-id (str (random-uuid))]
           [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
              {:component-did-mount #(run-sketch canvas-id)})])
         [:div.h-100.w-100.br-100.flex.justify-center.items-center.bg-gray
          [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])])))

(defn app []
  [:main.sans-serif.pa4.white
   [:div.mb5
    [:h1 "Nature of Code - Exercises"]
    [:p.f4.lh-title "Exercises of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/shiffman"} "Daniel Shiffman's"] " "
     [:a.pointer.bb.link.white {:href "https://natureofcode.com/"} "Nature of Code"]
     " implemented in ClojureScript."]
    [:p [:a.pointer.bb.link.white {:href "https://github.com/rollacaster/sketches"} "GitHub"]]]
   [:div
    [:h2.tracked "Introduction"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Random Walk" "Exercise I.1" "https://natureofcode.com/book/introduction/#exercise-i1" rw/run]
     [sketch "Random Walk II" "Exercise I.3" "https://natureofcode.com/book/introduction/#exercise-i3" rwd/run]
     [sketch "Paint Splatter" "Exercise I.4" "https://natureofcode.com/book/introduction/#exercise-i4" p/run]
     [sketch "Random Walk III" "Exercise I.5" "https://natureofcode.com/book/introduction/#exercise-i5" rwg/run]
     [sketch "Random Walk IV" "Exercise I.6" "https://natureofcode.com/book/introduction/#exercise-i6" rwc/run]
     [sketch "Random Walk V" "Exercise I.7" "https://natureofcode.com/book/introduction/#exercise-i7" rwn/run]
     #_[sketch "Noise" n/run-noise]
     [card "in progress" "-" "🚧"]]]
   [:div
    [:h2.tracked "Vectors"]
    [:div.flex.flex-wrap.justify-start
     [card "in progress" "-" "🚧"]]]
   [:div
    [:h2.tracked "Oscillation"]
    [:div.flex.flex-wrap.justify-start
     #_[sketch "Spiral" s/run-spiral]
     [card "in progress" "-" "🚧"]]]
   [:div
    [:h2.tracked "Particle Systems"]
    [:div.flex.flex-wrap.justify-start
     [sketch "Fire" "Exercise 4.11" "https://natureofcode.com/book/chapter-4-particle-systems#chapter04_exercise11" f/run]
     [card "in progress" "-" "🚧"]]]])

(r/render app (.getElementById js/document "app"))
