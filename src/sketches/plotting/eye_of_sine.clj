(ns sketches.plotting.eye-of-sine
  (:require [thi.ng.geom.svg.adapter :as adapt]
            [thi.ng.geom.svg.core :as svg :refer [ellipse]]))
(def scene
  (svg/svg
   {:width 300 :height 300}
   (svg/group
    {}
    (let [rings 50]
      (map
       (fn [i]
         (let [progress-in-percent (/ i rings)
               cur-pi (* progress-in-percent Math/PI)
               min-width 0
               max-additional-width 80]
           (ellipse [150 (+ 20 (* 5 i))] (+ min-width (* max-additional-width (Math/sin cur-pi))) 10
                    {:fill "none" :stroke "black"})))
       (range rings))))
   (svg/group
    {:transform "rotate(90) translate(0 -300)"}
    (let [rings 50]
     (map
      (fn [i]
        (let [progress-in-percent (/ i rings)
              cur-pi (* progress-in-percent Math/PI)
              min-width 0
              max-additional-width 80]
          (ellipse [150 (+ 20 (* 5 i))] (+ min-width (* max-additional-width (Math/sin cur-pi))) 10
                   {:fill "none" :stroke "black"})))
      (range rings))))))

(comment
  (->> scene
       adapt/all-as-svg
       svg/serialize
       (spit "temp.svg")))

