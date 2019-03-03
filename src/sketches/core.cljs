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

(defn sketch [title children]
  (let [isStarted (r/atom false)]
    (fn []
      [card title
       (if @isStarted
         [children]
         [:div.h-100.w-100.br-100.flex.justify-center.items-center.bg-gray
          [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])])))

(defn paint-splatter []
  (let [canvas-id "paint-splatter"]
    [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
       {:component-did-mount #(p/run-paint-splatter canvas-id)})]))

(defn random-walk []
  (let [canvas-id "random-walk"]
    [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
       {:component-did-mount #(rw/run-random-walk canvas-id)})]))

(defn fire []
  (let [canvas-id "fire"]
    [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
       {:component-did-mount #(f/run-fire canvas-id)})]))

(defn spiral []
  (let [canvas-id "spiral"]
    [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
       {:component-did-mount #(s/run-spiral canvas-id)})]))

(defn noise []
  (let [canvas-id "noise"]
    [(with-meta (fn [] [:canvas.w-100.br-100.ba.b--gray {:id canvas-id}])
       {:component-did-mount #(n/run-noise canvas-id)})]))

(defn app []
  [:main.sans-serif.pa4.white
   [:div.mb5
    [:h1 "Nature of Code - Exercises"]
    [:p.f4 "Exercises of "
     [:a.pointer.bb.link.white {:href "https://twitter.com/shiffman"} "Daniel Shiffman's"] " "
     [:a.pointer.bb.link.white {:href "https://natureofcode.com/"} "Nature of Code"]
     " implemented in ClojureScript."]
    [:p [:a.pointer.bb.link.white {:href "https://github.com/rollacaster/sketches"} "GitHub"]]]
   [:div
    [:h2.tracked "Introduction"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Random Walk" random-walk]
     [sketch "Paint Splatter" paint-splatter]
     [sketch "Noise" noise]
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Vectors"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Oscillation"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Spiral" spiral]
     [card "in progress" "🚧"]]]
   [:div
    [:h2.tracked "Particle Systems"]
    [:div.flex.flex-wrap.justify-center.justify-start-ns
     [sketch "Fire" fire]
     [card "in progress" "🚧"]]]])

(r/render app (.getElementById js/document "app"))
