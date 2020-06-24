(ns sketches.generative-desgin.P-03.P-3-1-2-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as md]))

(defn setup []
  
  (let [font (q/load-font "fonts/miso-bold.ttf")]
    (q/text-font font 25)
    (q/text-align :left :baseline)
    (q/no-stroke)
    (q/fill 0)
    {:font font 
     :shape-space (q/load-image "images/space.svg")
     :shape-space2 (q/load-image "images/space2.svg")
     :shape-period (q/load-image "images/period.svg")
     :shape-comma (q/load-image "images/comma.svg")
     :shape-exlamationmark (q/load-image "images/exclamationmark.svg")
     :shape-questionmark (q/load-image "images/questionmark.svg")
     :shape-return (q/load-image "images/return.svg")
     :text-typed (str "Ich bin der Musikant mit Taschenrechner in der Hand!\n\n"
                      "Ich addiere\n"
                      "Kontrolliere\nUnd komponiere\nUnd wenn ich diese Taste drück,\nSpielt er ein kleines Musikstück?\n\n"
                      "Ich bin der Musikant mit Taschenrechner in der Hand!\n\n"
                      "Ich addiere\n"
                      "Und subtrahiere, \n\n"
                      "Kontrolliere\nUnd komponiere\nUnd wenn ich diese Taste drück,\nSpielt er ein kleines Musikstück?\n\n")
     :center-x (/ (q/width) 2)
     :center-y (/ (q/height) 2)
     :offset-x 0
     :offset-y 0
     :zoom 0.75
     :act-random-seed 6}))

(defn update-state [{:keys [act-random-seed] :as state}]
  (q/random-seed act-random-seed)
  state)

(defn draw [{:keys [text-typed shape-space shape-space2 shape-comma shape-period
                    shape-exlamationmark shape-questionmark shape-return zoom]}]
  (q/background 255)
  (q/scale zoom)
  (doseq [letter text-typed]
    (let [letter-width (q/text-width letter)]
      (case letter
        " " (let [dir (q/floor (q/random 0 2))]
              (cond (= dir 0)
                    (do
                      (q/image shape-space 1 -15)
                      (q/translate 4 1)
                      (q/rotate q/QUARTER-PI))
                    (= dir 1)
                    (do
                      (q/image shape-space2 1 -15)
                      (q/translate 14 -5)
                      (q/rotate q/QUARTER-PI))))
        "," (do
              (q/image shape-comma 1 -15)
              (q/translate 35 15)
              (q/rotate q/QUARTER-PI))
        "." (do
              (q/image shape-period 1 -55)
              (q/translate 56 -56)
              (q/rotate q/HALF-PI))
        "!" (do
              (q/image shape-exlamationmark 1 -27)
              (q/translate 42.5 -17.5)
              (q/rotate (- q/QUARTER-PI)))
        "?" (do
              (q/image shape-questionmark 1 -27)
              (q/translate 42.5 -17.5)
              (q/rotate (- q/QUARTER-PI)))
        "\n" (do
               (q/image shape-return 1 -15)
               (q/translate 1 10)
               (q/rotate q/PI))
        (do
          (q/text letter 0 0)
          (q/translate letter-width 0 0))))))

(defn run [host]
  (q/defsketch blueprint
    :host host
    :setup setup
    :draw draw
    :update update-state
    :middleware [md/fun-mode md/navigation-2d]
    :size [300 300]))
