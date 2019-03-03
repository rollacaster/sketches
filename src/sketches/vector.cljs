(ns sketches.vector)

(defn add [v1 v2]
  (vector (+ (first v1) (first v2))
          (+ (second v1) (second v2))))

(defn sub [v1 v2]
  (vector (- (first v1) (first v2))
          (- (second v1) (second v2))))

(defn mult [v1 n] (vector (* (first v1) n) (* (second v1) n)))

(defn div [[x y] n] (if (or (= n 0) (= n 0.0))
                      (vector x y)
                      (vector (/ x n) (/ y n))))

(defn mag [[x y]] (Math/sqrt (+ (* x x) (* y y))))

(defn normalize [v]
  (let [m (mag v)]
    (if (not (= m 0.0)) (div v m) v)))

(defn limit [[x y] top]
  (if (> (mag [x y]) top)
    (mult (normalize [x y]) top)
    [x y]))
