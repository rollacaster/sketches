(ns sketches.nature-of-code.particle-systems.particles-with-repellers
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(def gravity [0 0.3])

(defn setup []
  {:particle-system {:particles () :origin [(/ (q/width) 2) (/ (q/height) 2)]}
   :repellers [{:location [(+ (/ (q/width) 2) 50) (- (/ (q/height) 2) 20)] :r 10 :strength 100}
               {:location [(/ (q/width) 2) (+ (/ (q/height) 2) 100)] :r 10 :strength 100}
               {:location [(- (/ (q/width) 2) 50) (+ (/ (q/height) 2) 80)] :r 10 :strength 100}]})

(defn create-particle [location]
  (assoc
   (m/create-mover 20 location)
   :velocity [(- (rand 2) 1) (- (rand 2) 2)]
   :lifespan 255.0
   :a-acceleration 0.1))

(defn create-confetti [location]
  (-> (create-particle location)
      (assoc :type :confetti)))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn repel [{:keys [location strength]} particle]
  (let [dir (v/sub location, (:location particle))
        d (q/constrain (v/mag dir) 5 100)
        force (/ (* -1 strength) (* d d))]
    (v/mult (v/normalize dir) force)))

(defn decrease-lifespan [particle] (update particle :lifespan (comp dec dec)))

(defn update-state [{:keys [repellers] :as state}]
  (-> state
      (update :particle-system (fn [ps] (-> ps
                                           (update :particles #(conj % (if (> (q/random 1) 0.5)
                                                                         (create-particle (:origin ps))
                                                                         (create-confetti(:origin ps)))))
                                           (update :particles
                                                   #(map (fn [particle]
                                                           (reduce
                                                            (fn [particle repeller]
                                                              (m/apply-force particle (repel repeller particle)))
                                                            particle
                                                            repellers))
                                                         %))
                                           (update :particles #(map (fn [particle] (m/apply-force particle gravity)) %))
                                           (update :particles #(map (comp decrease-lifespan m/compute-position) %))
                                           (update :particles #(remove is-dead %)))))))

(defmulti draw-particle :type)

(defmethod draw-particle :confetti [{:keys [lifespan angle] [x y] :location}]
  (q/rect-mode :center)
  (q/fill 175 lifespan)
  (q/stroke 0 lifespan)
  (q/push-matrix)
  (q/translate x y)
  (q/rotate angle)
  (q/rect 0 0 8 8)
  (q/pop-matrix))

(defmethod draw-particle :default [{:keys [lifespan] [x y] :location}]
  (q/stroke 0 lifespan)
  (q/fill 0 lifespan)
  (q/ellipse x y 8 8))

(defn draw-repeller [{[x y] :location :keys [r]}]
  (q/stroke 127)
  (q/fill 127)
  (q/ellipse x y (* r 2) (* r 2)))

(defn draw [{:keys [repellers particle-system]}]
  (q/background 255)
  (doseq [repeller repellers]
    (draw-repeller repeller))
  (doseq [particle (:particles particle-system)]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch particles-with-repellers
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
