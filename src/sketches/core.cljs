(ns sketches.core
  (:require [reagent.core :as r]
            [sketches.fire :as f]
            [sketches.spiral :as s]
            [sketches.random-walk :as rw]))

(defn sketch [title children]
  (let [isStarted (r/atom false)]
    (fn []
      [:div.bg-white.br2.flex.flex-column.justify-between.items-center.f2.black.mb3.mr3-ns
       [:div.w5.h5.pa4
        (if @isStarted
          [children]
          [:div.h-100.w-100.br-100.flex.justify-center.items-center.bg-gray
           [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])]
       [:div.mv3
        [:span.ma0 title]]])))

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

(r/render [:main.sans-serif.f1.pa4.white
           [:div.flex.flex-wrap.justify-center.justify-start-ns
            [sketch "Fire" fire]
            [sketch "Spiral" spiral]
            [sketch "Random Walk" random-walk]]]
          (.getElementById js/document "app"))
