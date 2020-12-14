(ns sketches.nature-of-code.particle-systems.particles-with-images
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]
            [sketches.mover :as m]))

(defn create-particle [location images]
  (assoc (m/create-mover 10 location)
         :velocity [(q/random-gaussian) (- (q/random-gaussian) 1.0)]
         :lifespan 255.0
         :mass 10
         :image (rand-nth images)))

(defn setup []
  (q/frame-rate 30)
  {:images [(q/load-image "images/sojka.jpg")
            (q/load-image "images/fcb.jpg")
            (q/load-image "images/emacs.png")]
   :particles ()
   :origin [(/ (q/width) 2) (/ (q/height) 2)]})

(defn draw-particle [{:keys [lifespan image] [x y] :location}]
  (q/image-mode :center)
  (q/tint 255 lifespan)
  (q/image image x y 80 80))

(defn is-dead [{:keys [lifespan]}] (< lifespan 0.0))
(defn dec-lifespan [particle] (update particle :lifespan (comp dec dec dec dec dec)))

(defn update-state [{:keys [images] :as ps}]
  (-> ps
      (update :particles #(conj % (create-particle (:origin ps) images)))
      (update :particles #(map (comp m/compute-position dec-lifespan) %))
      (update :particles #(remove is-dead %))))

(defn draw [{:keys [particles]}]
  (q/background 255)
  (doseq [particle particles]
    (draw-particle particle)))

(defn run [host]
  (q/defsketch particles-with-images
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode]
    :size [300 300]))
