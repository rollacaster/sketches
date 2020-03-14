(ns sketches.nature-of-code.particles-repel
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]
            [sketches.vector :as v]))

(def gravity [0 0.3])

(defn setup []
  {:particles () :origin [(/ (q/width) 2) (/ (q/height) 2)]})

(defn create-particle [location]
  (assoc
   (m/create-mover 20 location)
   :velocity [(- (rand 2) 1) (- (rand 2) 2)]
   :lifespan 255.0))

(defn create-confetti [location]
  (-> (create-particle location)
      (assoc :type :confetti
             :a-acceleration 0.1)))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn decrease-lifespan [particle] (update particle :lifespan (comp dec dec)))

(defn repel [{:keys [location mass]} particle]
  (let [dir (v/sub location, (:location particle))
        d (q/constrain (v/mag dir) 5 100)
        force (/ (* -1 mass) (* d d))]
    (v/mult (v/normalize dir) force)))

(defn update-state [ps]
  (-> ps
      (update :particles
              #(map (fn [particle]
                      (reduce
                       (fn [particle repeller]
                         (m/apply-force particle (repel repeller particle)))
                       particle
                       %))
                    %))
      (update :particles #(conj % (apply (if (> (q/random 1) 0.5)
                                              create-particle
                                              create-confetti)
                                            (list (:origin ps)))))
      (update :particles #(map (fn [particle] (m/apply-force particle gravity)) %))
      (update :particles #(map (comp decrease-lifespan m/compute-position) %))
      (update :particles #(remove is-dead %))))

(defmulti draw-particle :type)
(defmethod draw-particle :confetti [{:keys [lifespan angle] [x y] :location :as particle}]
  (q/rect-mode :center)
  (q/fill 175 lifespan)
  (q/stroke 0 lifespan)
  (q/push-matrix)
  (q/translate x y)
  (q/rotate angle)
  (q/rect 0 0 8 8)
  (q/pop-matrix)
  particle)
(defmethod draw-particle :default [{:keys [lifespan] [x y] :location :as particle}]
  (q/stroke 0 lifespan)
  (q/fill 0 lifespan)
  (q/ellipse x y 8 8)
  particle)

(defn draw [{:keys [particles]}]
  (q/background 255)
  (doseq [particle particles]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch particles-repel
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
