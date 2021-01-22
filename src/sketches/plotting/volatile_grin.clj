(ns sketches.plotting.volatile-grin
  (:require [thi.ng.geom.svg.adapter :as adapt]
            [thi.ng.geom.svg.core :as svg]))

(def width 300)
(def height 300)
(def step 20)
(defn point-in-circle? [[x y] r]
  (<= (Math/sqrt (+ (* x x) (* y y))) r))
(def line '([0 0]
  [20 0]
  [40 0]
  [60 0]
  [80 0]
  [100 0]
  [120 0]
  [140 0]
  [160 0]
  [180 0]
  [200 0]
  [220 0]
  [240 0]
  [260 0]
  [280 0]
  [300 0]))
(def middle-line (map (fn [[x]] [x 150]) line))
(def r 120)
(defn translate [[x y] [dx dy]]
  [(+ x dx) (+ y dy)])

(defn wiggle-line [step line]
  (map
   (fn [[x y]]
     (translate [x (+ (rand-int step) y)] [150 150]))
   line))

(defn increase-line-frequency [r line]
  (->> line
       (reduce
        (fn [line [x y]]
          (if (and
               (> (count line) 0)
               (not=
                (point-in-circle? (nth line (dec (count line))) r)
                (point-in-circle? [x y] r)))
            (vec
             (concat
              line
              (let [[x0] (nth line (dec (count line)))
                    step 1]
                (for [x (range x0 (+ x step) step)]
                  [x y]))))
            (conj line [x y])))
        [])))

;; New algo
;; load b/w image to canvas
;; add point y=0 to canvas
  ;; while height not reached
    ;; add line
    ;; while width not reacched
    ;; if overlaps with image
    ;;    increase by 5 + wiggle y
    ;;    increase by 20  + wiggle y
    ;; draw polyline

(def scene
  (svg/svg
   {:width width :height height}
   (svg/group
    {}
    #_(for [x (range (- width) width 20)
          y (range (- height) height 20)]
      (when (point-in-circle? [x y] 120)
        (svg/ellipse [(+ 150 x) (+ 150 y)] 2 2 {:opacity 0.1})))
    (let [step 12
          r 100]
      (->> (for [y (range (- height) height step)]
             (for [x (range (- width) (+ width step) step)]
               [x y]))
           (map (partial increase-line-frequency r))
           (map (partial wiggle-line step))
           (map #(svg/polyline % {:stroke "black"}))))
    #_(let [r 120]
      (svg/ellipse [150 150] r r {:stroke "black" :stroke-width 3 :fill "transparent"
                                  :opacity 0.1})))))

(defn html [content]
  (str "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta charset=\"utf-8\">
        <meta content=\"IE=edge,chrome=1\" http-equiv=\"X-UA-Compatible\">
        <title></title>
    </head>
    <body style=\"display:flex;justify-content:center;align-items:center;height:100vh\">
      <div style=\"border: 2px solid lightgray\">
       "content "
      </div>
    </body>
</html>"))

(->> scene
     adapt/all-as-svg
     svg/serialize
     (spit "temp.svg"))
(->> scene
     adapt/all-as-svg
     svg/serialize
     html
     (spit "index.html"))
