// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.asteroids_with_particles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.asteroids_with_particles.setup_particle = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$setup_particle(location){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1))], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$aAcceleration,0.0,cljs.core.cst$kw$aVelocity,0.1,cljs.core.cst$kw$angle,0.0], null);
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.setup = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spaceship,sketches.mover.create_mover((50),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null)),cljs.core.cst$kw$particles,cljs.core.List.EMPTY], null);
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.is_dead = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$is_dead(p__23709){
var map__23710 = p__23709;
var map__23710__$1 = ((((!((map__23710 == null)))?(((((map__23710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23710):map__23710);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.update_particle = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$update_particle(p__23712){
var map__23713 = p__23712;
var map__23713__$1 = ((((!((map__23713 == null)))?(((((map__23713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23713):map__23713);
var particle = map__23713__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$lifespan);
var aVelocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$aVelocity);
var aAcceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$aAcceleration);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23713__$1,cljs.core.cst$kw$angle);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
var lifespan__$1 = (lifespan - 2.0);
var aVelocity__$1 = (aVelocity + aAcceleration);
var angle__$1 = (aVelocity__$1 + angle);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$lifespan,lifespan__$1),cljs.core.cst$kw$aVelocity,aVelocity__$1),cljs.core.cst$kw$angle,(aVelocity__$1 + angle__$1)),cljs.core.cst$kw$aAcceleration,(0));
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.apply_force = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$apply_force(particle,force){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,(function (p1__23715_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__23715_SHARP_,force);
}));
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.add_particle = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$add_particle(p__23716,particles){
var map__23717 = p__23716;
var map__23717__$1 = ((((!((map__23717 == null)))?(((((map__23717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23717):map__23717);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23717__$1,cljs.core.cst$kw$angle);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.key_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.key_as_keyword(),cljs.core.cst$kw$w);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.nature_of_code.particle_systems.asteroids_with_particles.setup_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((40) * quil.core.cos((angle + quil.core.PI))),((40) * quil.core.sin((angle + quil.core.PI)))], null)));
} else {
return particles;
}
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.update_state = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$update_state(p__23721){
var map__23722 = p__23721;
var map__23722__$1 = ((((!((map__23722 == null)))?(((((map__23722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23722):map__23722);
var state = map__23722__$1;
var spaceship = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23722__$1,cljs.core.cst$kw$spaceship);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particles,((function (map__23722,map__23722__$1,state,spaceship){
return (function (p1__23719_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.asteroids_with_particles.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23722,map__23722__$1,state,spaceship){
return (function (particle){
return sketches.nature_of_code.particle_systems.asteroids_with_particles.update_particle(sketches.nature_of_code.particle_systems.asteroids_with_particles.apply_force(particle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.05 * quil.core.cos((cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(spaceship) + quil.core.PI))),(0.05 * quil.core.sin((cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(spaceship) + quil.core.PI)))], null)));
});})(map__23722,map__23722__$1,state,spaceship))
,sketches.nature_of_code.particle_systems.asteroids_with_particles.add_particle(spaceship,p1__23719_SHARP_)));
});})(map__23722,map__23722__$1,state,spaceship))
),cljs.core.cst$kw$spaceship,((function (map__23722,map__23722__$1,state,spaceship){
return (function (p1__23720_SHARP_){
return sketches.mover.compute_position(sketches.mover.move_through(sketches.mover.apply_force(p1__23720_SHARP_,sketches.vector.mult(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p1__23720_SHARP_),-0.2))));
});})(map__23722,map__23722__$1,state,spaceship))
);
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.draw_spaceship = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$draw_spaceship(p__23724){
var map__23725 = p__23724;
var map__23725__$1 = ((((!((map__23725 == null)))?(((((map__23725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23725):map__23725);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23725__$1,cljs.core.cst$kw$mass);
quil.core.triangle((mass / (2)),(0),(- (mass / (2))),(- (mass / (2))),(- (mass / (2))),(mass / (2)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(((- (mass / (2))) - (2)),(5),(5),(5));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(((- (mass / (2))) - (2)),(-5),(5),(5));
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.draw_particle = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$draw_particle(p__23727){
var map__23728 = p__23727;
var map__23728__$1 = ((((!((map__23728 == null)))?(((((map__23728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23728):map__23728);
var particle = map__23728__$1;
var vec__23729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23728__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23728__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23728__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

var stroke__14566__auto___23733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),lifespan], null);
var previous_stroke__14567__auto___23734 = quil.core.current_stroke();
if(cljs.core.sequential_QMARK_(stroke__14566__auto___23733)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.stroke,stroke__14566__auto___23733);
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(stroke__14566__auto___23733);

}

var return_val__14568__auto___23735 = (function (){var fill__14558__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(0),(0),lifespan], null);
var previous_fill__14559__auto__ = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__14558__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__14558__auto__);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__14558__auto__);

}

var return_val__14560__auto__ = quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));
if((previous_fill__14559__auto__ == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__14559__auto__);
}

return return_val__14560__auto__;
})();
if((previous_stroke__14567__auto___23734 == null)){
quil.core.no_stroke();
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(previous_stroke__14567__auto___23734);
}


quil.core.pop_matrix();

return particle;
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.draw = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$draw(p__23736){
var map__23737 = p__23736;
var map__23737__$1 = ((((!((map__23737 == null)))?(((((map__23737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23737):map__23737);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23737__$1,cljs.core.cst$kw$particles);
var spaceship = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23737__$1,cljs.core.cst$kw$spaceship);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((126));

quil.core.stroke_weight((2));

var map__23739 = spaceship;
var map__23739__$1 = ((((!((map__23739 == null)))?(((((map__23739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23739):map__23739);
var vec__23740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23739__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(1),null);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23739__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

var seq__23744_23748 = cljs.core.seq(particles);
var chunk__23745_23749 = null;
var count__23746_23750 = (0);
var i__23747_23751 = (0);
while(true){
if((i__23747_23751 < count__23746_23750)){
var particle_23752 = chunk__23745_23749.cljs$core$IIndexed$_nth$arity$2(null,i__23747_23751);
sketches.nature_of_code.particle_systems.asteroids_with_particles.draw_particle(particle_23752);


var G__23753 = seq__23744_23748;
var G__23754 = chunk__23745_23749;
var G__23755 = count__23746_23750;
var G__23756 = (i__23747_23751 + (1));
seq__23744_23748 = G__23753;
chunk__23745_23749 = G__23754;
count__23746_23750 = G__23755;
i__23747_23751 = G__23756;
continue;
} else {
var temp__5735__auto___23757 = cljs.core.seq(seq__23744_23748);
if(temp__5735__auto___23757){
var seq__23744_23758__$1 = temp__5735__auto___23757;
if(cljs.core.chunked_seq_QMARK_(seq__23744_23758__$1)){
var c__4351__auto___23759 = cljs.core.chunk_first(seq__23744_23758__$1);
var G__23760 = cljs.core.chunk_rest(seq__23744_23758__$1);
var G__23761 = c__4351__auto___23759;
var G__23762 = cljs.core.count(c__4351__auto___23759);
var G__23763 = (0);
seq__23744_23748 = G__23760;
chunk__23745_23749 = G__23761;
count__23746_23750 = G__23762;
i__23747_23751 = G__23763;
continue;
} else {
var particle_23764 = cljs.core.first(seq__23744_23758__$1);
sketches.nature_of_code.particle_systems.asteroids_with_particles.draw_particle(particle_23764);


var G__23765 = cljs.core.next(seq__23744_23758__$1);
var G__23766 = null;
var G__23767 = (0);
var G__23768 = (0);
seq__23744_23748 = G__23765;
chunk__23745_23749 = G__23766;
count__23746_23750 = G__23767;
i__23747_23751 = G__23768;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix();

quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

sketches.nature_of_code.particle_systems.asteroids_with_particles.draw_spaceship(spaceship);

return quil.core.pop_matrix();
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.key_pressed = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$key_pressed(state,p__23770){
var map__23771 = p__23770;
var map__23771__$1 = ((((!((map__23771 == null)))?(((((map__23771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23771):map__23771);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23771__$1,cljs.core.cst$kw$key);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$spaceship,((function (map__23771,map__23771__$1,key){
return (function (p1__23769_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$a)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__23769_SHARP_,cljs.core.cst$kw$angle,((function (map__23771,map__23771__$1,key){
return (function (angle){
return cljs.core.mod((angle + 0.2),quil.core.TWO_PI);
});})(map__23771,map__23771__$1,key))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$d)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__23769_SHARP_,cljs.core.cst$kw$angle,((function (map__23771,map__23771__$1,key){
return (function (angle){
return cljs.core.mod((angle - 0.2),quil.core.TWO_PI);
});})(map__23771,map__23771__$1,key))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$w)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23769_SHARP_,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.cos(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(p1__23769_SHARP_)),quil.core.sin(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(p1__23769_SHARP_))], null));
} else {
return p1__23769_SHARP_;

}
}
}
});})(map__23771,map__23771__$1,key))
);
});
sketches.nature_of_code.particle_systems.asteroids_with_particles.run = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$run(host){
sketches.nature_of_code.particle_systems.asteroids_with_particles.asteroids_with_particles = (function sketches$nature_of_code$particle_systems$asteroids_with_particles$run_$_asteroids_with_particles(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23773__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23774__i = 0, G__23774__a = new Array(arguments.length -  0);
while (G__23774__i < G__23774__a.length) {G__23774__a[G__23774__i] = arguments[G__23774__i + 0]; ++G__23774__i;}
  args = new cljs.core.IndexedSeq(G__23774__a,0,null);
} 
return G__23773__delegate.call(this,args);};
G__23773.cljs$lang$maxFixedArity = 0;
G__23773.cljs$lang$applyTo = (function (arglist__23775){
var args = cljs.core.seq(arglist__23775);
return G__23773__delegate(args);
});
G__23773.cljs$core$IFn$_invoke$arity$variadic = G__23773__delegate;
return G__23773;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.asteroids_with_particles.update_state))?(function() { 
var G__23776__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.asteroids_with_particles.update_state,args);
};
var G__23776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23777__i = 0, G__23777__a = new Array(arguments.length -  0);
while (G__23777__i < G__23777__a.length) {G__23777__a[G__23777__i] = arguments[G__23777__i + 0]; ++G__23777__i;}
  args = new cljs.core.IndexedSeq(G__23777__a,0,null);
} 
return G__23776__delegate.call(this,args);};
G__23776.cljs$lang$maxFixedArity = 0;
G__23776.cljs$lang$applyTo = (function (arglist__23778){
var args = cljs.core.seq(arglist__23778);
return G__23776__delegate(args);
});
G__23776.cljs$core$IFn$_invoke$arity$variadic = G__23776__delegate;
return G__23776;
})()
:sketches.nature_of_code.particle_systems.asteroids_with_particles.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.asteroids_with_particles.setup))?(function() { 
var G__23779__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.asteroids_with_particles.setup,args);
};
var G__23779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23780__i = 0, G__23780__a = new Array(arguments.length -  0);
while (G__23780__i < G__23780__a.length) {G__23780__a[G__23780__i] = arguments[G__23780__i + 0]; ++G__23780__i;}
  args = new cljs.core.IndexedSeq(G__23780__a,0,null);
} 
return G__23779__delegate.call(this,args);};
G__23779.cljs$lang$maxFixedArity = 0;
G__23779.cljs$lang$applyTo = (function (arglist__23781){
var args = cljs.core.seq(arglist__23781);
return G__23779__delegate(args);
});
G__23779.cljs$core$IFn$_invoke$arity$variadic = G__23779__delegate;
return G__23779;
})()
:sketches.nature_of_code.particle_systems.asteroids_with_particles.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.asteroids_with_particles.key_pressed))?(function() { 
var G__23782__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.asteroids_with_particles.key_pressed,args);
};
var G__23782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23783__i = 0, G__23783__a = new Array(arguments.length -  0);
while (G__23783__i < G__23783__a.length) {G__23783__a[G__23783__i] = arguments[G__23783__i + 0]; ++G__23783__i;}
  args = new cljs.core.IndexedSeq(G__23783__a,0,null);
} 
return G__23782__delegate.call(this,args);};
G__23782.cljs$lang$maxFixedArity = 0;
G__23782.cljs$lang$applyTo = (function (arglist__23784){
var args = cljs.core.seq(arglist__23784);
return G__23782__delegate(args);
});
G__23782.cljs$core$IFn$_invoke$arity$variadic = G__23782__delegate;
return G__23782;
})()
:sketches.nature_of_code.particle_systems.asteroids_with_particles.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.asteroids_with_particles.draw))?(function() { 
var G__23785__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.asteroids_with_particles.draw,args);
};
var G__23785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23786__i = 0, G__23786__a = new Array(arguments.length -  0);
while (G__23786__i < G__23786__a.length) {G__23786__a[G__23786__i] = arguments[G__23786__i + 0]; ++G__23786__i;}
  args = new cljs.core.IndexedSeq(G__23786__a,0,null);
} 
return G__23785__delegate.call(this,args);};
G__23785.cljs$lang$maxFixedArity = 0;
G__23785.cljs$lang$applyTo = (function (arglist__23787){
var args = cljs.core.seq(arglist__23787);
return G__23785__delegate(args);
});
G__23785.cljs$core$IFn$_invoke$arity$variadic = G__23785__delegate;
return G__23785;
})()
:sketches.nature_of_code.particle_systems.asteroids_with_particles.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.asteroids_with_particles.asteroids_with_particles', sketches.nature_of_code.particle_systems.asteroids_with_particles.asteroids_with_particles);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.asteroids_with_particles.asteroids_with_particles,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23788__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23789__i = 0, G__23789__a = new Array(arguments.length -  0);
while (G__23789__i < G__23789__a.length) {G__23789__a[G__23789__i] = arguments[G__23789__i + 0]; ++G__23789__i;}
  args = new cljs.core.IndexedSeq(G__23789__a,0,null);
} 
return G__23788__delegate.call(this,args);};
G__23788.cljs$lang$maxFixedArity = 0;
G__23788.cljs$lang$applyTo = (function (arglist__23790){
var args = cljs.core.seq(arglist__23790);
return G__23788__delegate(args);
});
G__23788.cljs$core$IFn$_invoke$arity$variadic = G__23788__delegate;
return G__23788;
})()
:host)], null));
}
});
