(ns sketches.nature-of-code.physics-library.matter
  (:require [matter-js]
            [quil.core :as q]))

(def bodies (.-Bodies matter-js))
(def world (.-World matter-js))

(defn rect
  ([x y width height]
   (rect x y width height nil))
  ([x y width height params]
   (.rectangle bodies x y width height (clj->js params))))

(defn circle
  ([x y width height]
   (circle x y width height nil))
  ([x y width height params]
   (.circle bodies x y width height (clj->js params))))

(defn add [engine & composites]
  (.add world ^js (.-world engine) (clj->js composites))
  engine)

(defn update-engine [engine]
  (.update (.-Engine matter-js) engine (/ 1000 30)))

(defn render [engine]
  (q/clear)
  (doseq [body (.allBodies (.-Composite matter-js) ^js (.-world engine))]
   (q/begin-shape)
   (doseq [vert (.-vertices body)]
     (q/vertex (.-x vert) (.-y vert)))
   (q/end-shape :close)))
