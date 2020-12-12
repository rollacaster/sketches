(ns sketches.own-sketches.particle-party
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [nice-color-palettes]
            [sketches.vector :as v]
            [sketches.mover :as m]))

(def palettes (js->clj nice-color-palettes))

(defn pick-random [list]
  (nth list (rand-int (- (count list) 1))))

(defn pick-random-palette []
  (map
   #(map (fn [s] (q/unhex (apply str s)))
         (partition 2 (rest %)))
   (pick-random palettes)))


(defn create-particle [color]
  {:acceleration [0 0]
   :velocity [0 0]
   :location [(/ (q/width) 2) (q/height)]
   :lifespan 255
   :color color})

(defn setup []
  (q/no-stroke)
  {:particles ()
   :colors (pick-random-palette)})

(defn update-particle [particle]
  (let [levity [0 -0.05]
        wind [(q/random -0.4 0.4) 0]]
    (-> particle
        (m/update-mover (v/add levity wind))
        (update :lifespan dec ))))

(defn update-state [{:keys [particles colors] :as state}]
  (assoc state :particles (if (= (mod (q/frame-count) 500) 0)
    ()
    (->> (conj particles (create-particle (rand-nth colors)))
         (filter (fn [{:keys [lifespan]}] (>= lifespan 0)))
         (map update-particle)))))

(defn draw-particle [{[x y] :location :keys [lifespan color]}]
  (apply q/fill (conj color lifespan))
  (q/ellipse x y
             (q/map-range lifespan 0 255 0 32)
             (q/map-range lifespan 0 255 0 32)))

(defn draw [{:keys [particles colors]}]
  (when (= (mod (q/frame-count) 500) 0)
    (q/clear))
  (doseq [particle particles]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch reverse-roots
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
