(ns sketches.icons)

;; TODO Create macro for generating new icons
(defn icon [path size color]
  (let [sizes {:small 12 :medium 24 :large 48}]
    [:svg {:width (size sizes) :height (size sizes) :viewBox "0 0 24 24"}
     [:path {:d path :fill color}]]))

(defn play-icon
  ([] (icon "M3 22v-20l18 10-18 10z" :medium "black"))
  ([size] (icon "M3 22v-20l18 10-18 10z" size "black"))
  ([size color] (icon "M3 22v-20l18 10-18 10z" size color)))

(defn pause-icon
  ([] (icon "M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" :medium "black"))
  ([size] (icon "M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" size "black"))
  ([size color] (icon "M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" size color)))

(defn stop-icon
  ([] (icon "M2 2h20v20h-20z" :medium "black"))
  ([size] (icon "M2 2h20v20h-20z" size "black"))
  ([size color] (icon "M2 2h20v20h-20z" size color)))

(defn reload-icon
  ([] (icon "M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" :medium "black"))
  ([size] (icon "M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" size "black"))
  ([size color] (icon "M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" size color)))
