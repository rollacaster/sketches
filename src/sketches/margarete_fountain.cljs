(ns sketches.margarete-fountain
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.vector :as v]))

(defn setup-particle [location]
  {:velocity [0 0 0]
   :location location
   :lifespan 255})

(defn setup-ps [origin]
  {:particles ()
   :origin origin})


(defn setup []
  (q/no-stroke)
  {:rotation 0.0
   :streams (let [r 100]
              (map
               (fn [phi]
                 (setup-ps
                  [(* r (q/cos phi))
                   100
                   (* r (q/sin phi))]))
               (range 0.0 6.283185307179586 (/ q/PI (float 4.0)))))})

(defn update-particle [{:keys [location velocity] :as state}]
  (let [acceleration [(q/random -0.1 0.1) -0.1 0]
        new-velocity (v/add acceleration velocity)
        new-location (v/add location new-velocity)]
    (-> state
        (assoc :velocity new-velocity)
        (assoc :location new-location)
        (update :lifespan dec))))

(defn update-ps [{:keys [particles origin] :as state}]
  (assoc state :particles
         (->> (if (= (mod (q/frame-count) 5) 0)
                (conj particles (setup-particle origin))
                particles)
              (map update-particle)
              (filter (fn [{:keys [lifespan]}] (> lifespan 0.0))))))

(defn update-state [{:keys [streams] :as state}]
  (-> state
   (assoc :streams (map update-ps streams))
   (update :rotation + 0.1)))

(defn draw-particle [{:keys [location lifespan]}]
  (q/with-translation location
    (q/fill 255 0 0 lifespan)
    (q/sphere 10)))

(defn draw-ps [{:keys [particles]}]
  (doseq [particle particles]
    (draw-particle particle)))

(defn draw [{:keys [streams rotation]}]
  (q/clear)
  (q/with-rotation [(mod rotation 6.283185307179586) 0 1 0]
    (doseq [stream streams]
      (draw-ps stream))))

(defn run [host]
  (q/defsketch margarete
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]
    :renderer :p3d))
