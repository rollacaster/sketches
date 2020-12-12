(ns sketches.nature-of-code.matter
  (:require [matter]
            [oops.core :refer [ocall oget]]
            [quil.core :as q]))

(def bodies (oget matter "Bodies"))
(def world (oget matter "World"))

(defn rect
  ([x y width height]
   (rect x y width height nil))
  ([x y width height params]
   (ocall bodies "rectangle" x y width height (clj->js params))))

(defn circle
  ([x y width height]
   (circle x y width height nil))
  ([x y width height params]
   (ocall bodies "circle" x y width height (clj->js params))))

(defn add [engine & composites]
  (ocall world "add" (oget engine "world") (clj->js composites))
  engine)

(defn update-engine [engine]
  (ocall (oget matter "Engine") "update" engine (/ 1000 30)))

(defn render [engine]
  (q/clear)
  (doseq [body (ocall (oget matter "Composite") "allBodies" (oget engine "world"))]
   (q/begin-shape)
   (doseq [vert (oget body "vertices")]
     (q/vertex (oget vert "x") (oget vert "y")))
   (q/end-shape :close)))
