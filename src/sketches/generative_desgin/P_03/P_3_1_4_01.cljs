(ns sketches.generative-desgin.P-03.P-3-1-4-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))
(comment
  (def t (atom ""))
  (-> (.fetch js/window "data/faust_kurz.txt")
      (.then #(.text %))
      (.then #(reset! t %)))
  (frequencies @t)
  @t
  
  (reduce (fn [letters letter]
                      (let [x (+ (:x (last letters)) 5)]
                        (conj letters (assoc letter
                                             :x (if (and (>= x (q/width)) (= letter " ")) 20 x)
                                             :y (if (and (>= x (q/width)) (= letter " ")) (+ (:y (last letters)) 30) (:y (last letters)))))))
                    []
                    (map #(hash-map :letter % :x 0 :y 40) temp)))
(def alphabet "ABCDEFGHIJKLMNORSTUVWYZÄÖÜß,.;!? ")

(defn setup [text]
  (def temp text)
  (q/text-font "monospace" 18)
  (q/fill 87 35 129)
  {:letter-counts (frequencies text)
   :letters (reduce (fn [letters letter]
                      (let [x (+ (:x (last letters)) (q/text-width (:letter letter)))]
                        (conj letters (assoc letter
                                             :x (if (and (>= x (q/width)) (= letter " ")) 20 x)
                                             :y (if (and (>= x (q/width)) (= letter " ")) (+ (:y (last letters)) 30) (:y (last letters)))))))
                    []
                    (map #(hash-map :letter % :x 0 :y 40) temp))})

(defn update-state [state]
  state)

(defn draw [{:keys [letters]}]
  (doseq [{:keys [letter x y]} letters]
    (q/text letter x y)))

(defn run [host]
  (-> (.fetch js/window "data/faust_kurz.txt")
      (.then #(.text %))
      (.then (fn [text]
               (q/defsketch text-image
                 :host host
                 :setup #(setup text)
                 :draw draw
                 :update update-state
                 :middleware [md/fun-mode]
                 :size [300 300])))))
