(ns sketches.rac-sketches.text-snake
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(def x-offset 15)
(def step 15)
(def path-count 11)
(def height 300)
(def speed 3)

(defn setup []
  (q/text-align :center)
  (q/text-size 30)
  (->> "HELLO!"
       (repeat 19)
       (apply str)
       (map-indexed
        (fn [i letter]
          {:i 0
           :start (* i 10)
           :letter (str letter)}))))

(defmulti length first)
(defmethod length :arc [[_ _ _ _ height start stop]]
  (Math/abs (* (/ height 2) (- stop start))))
(defmethod length :line [[_ _ y1 _ y2]]
  (Math/abs (- y2 y1)))

(defmulti position first)
(defmethod position :arc [[_ x y _ height start stop up] t]
  (let [r (/ height 2)
        angle (- start stop)
        phi (* angle (if up t (- 1 t)))]
    [((if (>= start q/PI) + -) x (* r (Math/cos phi)))
     ((if (>= start q/PI) + -) y (* r (Math/sin phi)))]))
(defmethod position :line [[_ x1 y1 _ y2 up] t]
  [x1 (+ y1 (* (- y2 y1) (if up (- 1 t) t)))])

(def curved-path
  (->> path-count
       range
       (mapcat (fn [i]
                 (let [x (+ x-offset (* i 2 step))]
                   [[:arc (- x step)
                     (if (even? i) (- 300 step) step)
                     (* 2 step)
                     (* 2 step)
                     (if (even? i) 0 q/PI)
                     (if (even? i) q/PI q/TWO-PI)
                     (even? i)]
                    [:line x step x (- height step) (even? i)]])))))

(def curve-length (reduce + (map length curved-path)))

(defn path-pos [t]
  (->> curved-path
       (reduce (fn [total-length el]
                 (let [el-length (length el)]
                   (if (>= (Math/ceil (+ total-length el-length speed)) t)
                     (reduced (position el (/ (- t total-length) el-length)))
                     (+ total-length (length el))))) 0)))

(defn draw [letters]
  (q/clear)
  (doseq [{:keys [i letter]} letters]
    (let [[x y] (path-pos i)
          [nx ny] (path-pos (+ i speed))]
      (q/push-matrix)
      (q/translate x y)

      (q/rotate (+ (Math/atan2 (- ny y) (- nx x)) (- q/HALF-PI)))
      (q/fill 0)
      (q/rotate q/PI)
      (q/text letter 0 0)
      (q/pop-matrix))))

(defn update-letter [{:keys [start] :as letter}]
  (update letter :i (fn [i] (if (and (< i curve-length) (< start (q/frame-count)))
                             (+ i speed)
                             0))))

(defn update-state [letters]
  (map update-letter letters))

(defn run [host]
  (q/defsketch text-snake
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))

(comment
  (defn stop-sketch [id]
    (q/with-sketch (q/get-sketch-by-id id)
      (q/no-loop)))
  (do (stop-sketch "Text Snake")
      (run "Text Snake")))
