(ns sketches.components
  (:require [sketches.icons :refer [play-icon reload-icon stop-icon]]
            [quil.core :as q]
            [reagent.core :as r]))

(defn section [title description]
  [:div.mb4.tc.tl-ns
   [:a.link.white {:href (str "#" title)}
    [:h2 title]]
     [:p description]])

(defn cards-container [children]
  [:div.flex.flex-wrap.justify-center.justify-start-ns
   children])

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

(defn sketch [title run-sketch run-immediately]
  (let [is-started (r/atom false)]
    (fn []
      (if (or @is-started run-immediately)
        (let [id (str title)]
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
           {:on-click #(reset! is-started true) :aria-label (str "Run " title " Sketch")}
           (play-icon :medium "white")]]]))))

(defn exercise-card [title exercise-title exercise-link run-sketch run-immediately]
  (fn []
    [card
     title
     [:a.link.bb {:href exercise-link :target "_blank" :rel "noreferrer"} exercise-title]
     [sketch title run-sketch run-immediately]]))
