// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sketches.components');
goog.require('sketches.rac_sketches.fire_ball');
goog.require('sketches.rac_sketches.fire_texture');
goog.require('sketches.rac_sketches.flowers');
goog.require('sketches.rac_sketches.heart_of_clojure');
goog.require('sketches.rac_sketches.inferno');
goog.require('sketches.rac_sketches.noise_colors');
goog.require('sketches.rac_sketches.particle_party');
goog.require('sketches.rac_sketches.rainbow_circles');
goog.require('sketches.rac_sketches.reverse_roots');
goog.require('sketches.rac_sketches.rotating_angles');
sketches.rac_sketches.core.rac_card = (function sketches$rac_sketches$core$rac_card(title,run_sketch,run_immediately){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.components.card,title,"",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.components.sketch,title,run_sketch,run_immediately], null)], null);
});
});
sketches.rac_sketches.core.main = (function sketches$rac_sketches$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.components.cards_container,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Noise Colors",sketches.rac_sketches.noise_colors.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Heart of Clojure",sketches.rac_sketches.heart_of_clojure.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Inferno",sketches.rac_sketches.inferno.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Reverse Roots",sketches.rac_sketches.reverse_roots.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Fire Ball",sketches.rac_sketches.fire_ball.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Fire Texture",sketches.rac_sketches.fire_texture.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Flower",sketches.rac_sketches.flowers.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Rainbow Circles",sketches.rac_sketches.rainbow_circles.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Oscillating Angles",sketches.rac_sketches.rotating_angles.run], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.core.rac_card,"Particle Party",sketches.rac_sketches.particle_party.run], null)], null)], null)], null)], null);
});
