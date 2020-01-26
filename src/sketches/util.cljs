(ns sketches.util)

(defn log [& a]
  (-> js/console
      (.-log)
      (.apply nil (into-array a))))
