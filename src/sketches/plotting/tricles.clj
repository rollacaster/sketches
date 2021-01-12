(ns sketches.plotting.tricles
  (:require [quil.core :as q]
            [thi.ng.geom.svg.adapter :as adapt]
            [thi.ng.geom.svg.core :as svg]))

(def width 300)
(def height 300)
(defn row [r step y]
  (let [[row1 row2 row3]
        [(map (fn [i] [(- (+ (* i step)) r)
                      (- (+ y) r)])
              (range 0 (+ (/ width step) 2)))
         (map (fn [i] [(- (+ (- (* (inc i) step) (/ step 2)) (rand-int step)) r)
                      (- (+ y step (rand-int step)) r)])
              (range 0 (+ (/ width step) 1)))
         (map (fn [i] [(- (+ (* i step)) r)
                      (- (+ y (* step 2)) r)])
              (range 0 (+ (/ width step) 1)))]]
    [(interleave row1 row2)
     (interleave row3 row2)]))

(defn data [r step]
  (->> (range 0 width (* 2 step))
       (map (fn [y] (row r step y)))
       (mapcat concat)
       (map #(partition 2 %))))

(defn point-in-circle? [[x y] r]
  (<= (Math/sqrt (+ (* x x) (* y y))) r))
(defn line-outside-circle? [line]
  (every? (fn [point] ((complement point-in-circle?) point 120)) line))
(defn move-line-in-circle [line]
  (map (fn [[x y]]
         (if (point-in-circle? [x y] 120)
           [x y]
           [(* 120 (Math/cos (q/atan2 y x)))
            (* 120 (Math/sin (q/atan2 y x)))]))
       line))
(defn line-in-circle? [line] (every? (fn [point] (point-in-circle? point 120)) line))
(defn move-point-out-of-circle [[x y]]
  (if (point-in-circle? [x y] 120)
     [(* 121 (Math/cos (q/atan2 y x)))
      (* 121 (Math/sin (q/atan2 y x)))]
     [x y]))
(defn move-line-out-of-circle [[p1 p2]]
  [(move-point-out-of-circle p1)
   (move-point-out-of-circle p2)])

(defn left-of-circle? [[x y]]
  (or (< y -120) (> y 120) (< x 0)))
(defn cut-out-circle [lines]
  [(take-while left-of-circle? lines)
   (drop-while left-of-circle? lines)])

(def scene
  (svg/svg
   {:width 300 :height 300}
   (svg/group
    {}
    (let [r 120]
      (svg/group
       {:transform "translate(150, 150)"}
       (svg/ellipse [0 0] r r {:stroke "black" :stroke-width 3 :fill "transparent"})
       (svg/group
        {:stroke "black"}
        (map svg/line-strip
             (->> (data 150 20)
                  (map (fn [points] (->> points
                                        (remove line-outside-circle?)
                                        (mapcat move-line-in-circle)))))))
       (svg/group
        {:stroke "black"}
        (map svg/line-strip
             (->> (data 150 10)
                  (map (fn [points] (->> points
                                        (remove line-in-circle?)
                                        (mapcat move-line-out-of-circle))))
                  (mapcat cut-out-circle)))))))))

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
(comment
  (->> scene
       adapt/all-as-svg
       svg/serialize
       (spit "temp.svg"))
  (->> scene
       adapt/all-as-svg
       svg/serialize
       html
       (spit "index.html")))
