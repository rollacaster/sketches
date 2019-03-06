(ns sketches.fire
  (:require [quil.core :as q :include-macros true]
            [sketches.vector :as v]))

(def particle-system (atom {:particles () :origin [150 200]}))

(defn create-particle [location]
  {:location location
   :velocity [(* (q/random-gaussian) 0.3) (- (* (q/random-gaussian) 0.4) 1.0)]
   :acceleration [0 0]
   :lifespan 255.0
   :mass 10})

(defn add-particle [ps]
  (update ps :particles #(conj % (create-particle (:origin ps)))))

(defn display-particle [{:keys [lifespan] [x y] :location :as particle}]
  (q/color-mode :rgb)
  (q/fill (q/color 255 24 0 lifespan))
  (q/ellipse x y (q/map-range lifespan 0 255 0 24) (q/map-range lifespan 0 255 0 24)))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))

(defn apply-force [{:keys [mass acceleration] :as particle} force]
  (assoc particle :acceleration (v/add acceleration (v/div force mass))))

(defn update-particle [{:keys [acceleration velocity location lifespan] :as particle}]
  (let [velocity (v/add velocity acceleration)
        location (v/add velocity location)
        lifespan (- lifespan 2.0)]
    (-> particle
        (assoc :velocity velocity)
        (assoc :location location)
        (assoc :lifespan lifespan)
        (assoc :acceleration [0 0]))))

(defn run-particle-system [{:keys [particles confetti] :as ps}]
  (doseq [particle particles]
    (display-particle particle))
  (let [wind [(q/map-range (q/mouse-x) 0.0 (q/width) -0.3 0.3)
              (q/map-range (q/mouse-y) 0.0 (q/height) -0.3 0.3)]]
    (-> ps
        (update :particles #(map (fn [particle] (apply-force particle wind)) %))
        (update :particles #(map update-particle %))
        (update :particles #(remove is-dead %)))))

(defn setup [host]
  (fn []
    (set! (.-globalCompositeOperation (.getContext (.getElementById js/document host) "2d")) "lighter")))

(defn draw [host]
  (fn []
    (.clearRect (.getContext (.getElementById js/document host) "2d") 0 0 (q/width) (q/height))
    (q/background 0)
    (swap! particle-system (comp add-particle add-particle run-particle-system))))

(defn run [host]
  (q/defsketch particle
    :host host
    :setup (setup host)
    :draw (draw host)
    :size [300 300]))
