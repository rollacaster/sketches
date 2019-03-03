(ns sketches.core
  (:require [reagent.core :as r]
            [sketches.fire :as f]
            [sketches.spiral :as s]
            [sketches.random-walk :as rw]
            [sketches.paint-splatter :as p]
            [sketches.noise :as n]))

(defn card [title children]
  [:div.bg-white.br2.flex.flex-column.justify-between.items-center.f2.black.mb3.mr3-ns
   [:div.w5.h5.pa4.flex.justify-center.items-center
    children]
   [:div.mv3
    [:span.ma0 title]]])

(defn sketch [title run-sketch]
  (let [isStarted (r/atom false)]
    (fn []
      [card title
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
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Random Walk" rw/run-random-walk]
     [sketch "Paint Splatter" p/run-paint-splatter]
     [sketch "Noise" n/run-noise]
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Vectors"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Oscillation"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Spiral" s/run-spiral]
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Particle Systems"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Fire" f/run-fire]
     [card "in progress" "🚧"]]]])

(r/render app (.getElementById js/document "app"))
