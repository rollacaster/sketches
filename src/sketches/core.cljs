(ns sketches.core
  (:require [quil.core :as q]
            [reagent.core :as r]
            [sketches.fire :as f]
            [sketches.spiral :as s]))

(defn sketch [title children]
  (let [isStarted (r/atom false)]
    (fn []
      [:div {:class "bg-white br2 flex flex-column justify-between items-center f2 black mb3 mr3-ns"}
       [:div.w5.h5.pa4
        (if @isStarted
          [children]
          [:div.h-100.w-100.br-100.flex.justify-center.items-center.bg-gray
           [:button.button.bg-transparent.bn.white.pointer {:on-click #(reset! isStarted true)} "▶"]])]
       [:div {:class "mv3"}
        [:span {:class "ma0"} title]]])))

(defn fire []
  (let [canvas-id "fire"]
    [(with-meta (fn [] [:canvas.w-100.br-100 {:id canvas-id}])
       {:component-did-mount #(f/run-fire canvas-id)})]))

(defn spiral []
  (let [canvas-id "spiral"]
    [(with-meta (fn [] [:canvas.w-100.br-100 {:id canvas-id}])
       {:component-did-mount #(s/run-spiral canvas-id)})]))

(r/render [:main {:class "vh-100 sans-serif f1 pa4 white"
                  :style {:background-color "#514745"}}
           [:div {:class "flex flex-wrap justify-center justify-start-ns"}
            [sketch "Fire" fire]
            [sketch "Spiral" spiral]]] (.getElementById js/document "app"))
