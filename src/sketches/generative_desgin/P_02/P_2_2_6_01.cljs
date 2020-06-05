(ns sketches.generative-desgin.P-02.P-2-2-6-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(def max-angle 360)

(defn setup []
  (q/color-mode :hsb 360 100 100 100)
  (q/no-fill)
  (q/stroke-weight 1)
  (let [joints 5
        speed-relation 2
        center [(/ (q/width) 2) (/ (q/height) 2)]]
    {:joints joints
     :line-length 40
     :speed-relation speed-relation
     :center center
     :angle 0
     :pendulum-paths (vec (take joints (repeat [])))
     :pendulum-centers (vec (take joints (repeat center)))
     :show-pendulum true
     :show-pendulum-path true}))

(defn update-state [{:keys [angle speed joints speed-relation line-length center pendulum-paths pendulum-centers] :as state}]
  (let [[pendulum-paths pendulum-centers]
        (if (<= angle (+ max-angle speed))
          (loop [i 0
                 pos center
                 paths pendulum-paths
                 centers pendulum-centers]
            (if (< i joints)
              (let [a (* (if (= (mod i 2) 0) 1 -1)
                         (* angle (Math/pow speed-relation i)))
                    next-pos (v/add (v/mult (v/from-angle (q/radians a))
                                            (* (/ (- joints i) joints) line-length))
                                    pos)]
                (recur (inc i)
                       next-pos
                       (update paths i conj (vec next-pos))
                       (assoc centers i (if (= i 0) center (last (nth paths (dec i)))))))
              [paths centers]))
          [])
        speed (/ 8 (Math/pow 1.75 (dec joints)) (Math/pow speed-relation (dec speed-relation)))]
    (-> state
        (update :angle + speed)
        (assoc :pendulum-paths pendulum-paths)
        (assoc :pendulum-centers pendulum-centers))))

(defn draw [{:keys [joints pendulum-paths pendulum-centers show-pendulum-path show-pendulum]}]
  (q/background 0 0 100)
  (when show-pendulum
    (doseq [[i pendulum-path] (map-indexed #(vector %1 %2) pendulum-paths)]
      (let [[x1 y1] (nth pendulum-centers i)
            [x2 y2] (last pendulum-path)]
        (q/no-stroke)
        (q/fill 0 10)
        (q/ellipse x2 y2 4 4)
        (q/no-fill)
        (q/stroke 0 10)
        (q/line x1 y1 x2 y2))))
  (q/no-fill)
  (q/no-stroke)
  (when show-pendulum-path
    (doseq [[i pendulum-path] (map-indexed #(vector %1 %2) pendulum-paths)]
      (q/begin-shape)
      (let [hue (q/map-range i 0 joints 120 360)]
        (q/stroke hue 80 60 50))
      (doseq [[x y] pendulum-path]
        (q/vertex x y))
      (q/end-shape))))

(defn key-pressed [state {:keys [key]}]
  (case key
    :ArrowUp (-> state
                 (update :line-length + 2)
                 (assoc :angle 0)
                 (assoc :pendulum-paths (vec (take (:joints state) (repeat []))))
                 (assoc :pendulum-centers (vec (take (:joints state) (repeat (:center state))))))
    :ArrowDown (-> state
                 (update :line-length - 2)
                 (assoc :angle 0)
                 (assoc :pendulum-paths (vec (take (:joints state) (repeat []))))
                 (assoc :pendulum-centers (vec (take (:joints state) (repeat (:center state))))))
    :ArrowLeft (let [joints (Math/max 1 (dec (:joints state)))]
                 (-> state
                     (assoc :joints joints)
                     (assoc :angle 0)
                     (assoc :pendulum-paths (vec (take joints (repeat []))))
                     (assoc :pendulum-centers (vec (take joints (repeat (:center state)))))))
    :ArrowRight (let [joints (Math/min 10 (inc (:joints state)))]
                 (-> state
                     (assoc :joints joints)
                     (assoc :angle 0)
                     (assoc :pendulum-paths (vec (take joints (repeat []))))
                     (assoc :pendulum-centers (vec (take joints (repeat (:center state)))))))
    :+ (-> state
           (update :speed-relation #(Math/min 5 (+ % 0.5)))
           (assoc :angle 0)
           (assoc :pendulum-paths (vec (take (:joints state) (repeat []))))
           (assoc :pendulum-centers (vec (take (:joints state) (repeat (:center state))))))
    :- (-> state
           (update :speed-relation #(Math/max 2 (- % 0.5)))
           (assoc :angle 0)
           (assoc :pendulum-paths (vec (take (:joints state) (repeat []))))
           (assoc :pendulum-centers (vec (take (:joints state) (repeat (:center state))))))
    :1 (update state :show-pendulum not)
    :2 (update state :show-pendulum-path not)
    state))

(defn run [host]
  (q/defsketch agents-on-a-pendulum
    :host host
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
