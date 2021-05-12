// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.rotating_particle');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.rotating_particle.create_particle = (function sketches$nature_of_code$particle_systems$rotating_particle$create_particle(location){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (2))], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.05], null),cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$aAcceleration,0.0,cljs.core.cst$kw$aVelocity,0.1,cljs.core.cst$kw$angle,0.0], null);
});
sketches.nature_of_code.particle_systems.rotating_particle.update_particle = (function sketches$nature_of_code$particle_systems$rotating_particle$update_particle(p__23679){
var map__23680 = p__23679;
var map__23680__$1 = ((((!((map__23680 == null)))?(((((map__23680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23680):map__23680);
var particle = map__23680__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$lifespan);
var aVelocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$aVelocity);
var aAcceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$aAcceleration);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.cst$kw$angle);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
var lifespan__$1 = (lifespan - 2.0);
var aVelocity__$1 = (aVelocity + aAcceleration);
var angle__$1 = (aVelocity__$1 + angle);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$lifespan,lifespan__$1),cljs.core.cst$kw$aVelocity,aVelocity__$1),cljs.core.cst$kw$angle,(aVelocity__$1 + angle__$1)),cljs.core.cst$kw$aAcceleration,(0));
});
sketches.nature_of_code.particle_systems.rotating_particle.apply_force = (function sketches$nature_of_code$particle_systems$rotating_particle$apply_force(particle,force){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,(function (p1__23682_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__23682_SHARP_,force);
}));
});
sketches.nature_of_code.particle_systems.rotating_particle.draw_particle = (function sketches$nature_of_code$particle_systems$rotating_particle$draw_particle(p__23683){
var map__23684 = p__23683;
var map__23684__$1 = ((((!((map__23684 == null)))?(((((map__23684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23684):map__23684);
var particle = map__23684__$1;
var vec__23685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23684__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));

quil.core.pop_matrix();

return particle;
});
sketches.nature_of_code.particle_systems.rotating_particle.is_dead = (function sketches$nature_of_code$particle_systems$rotating_particle$is_dead(p__23689){
var map__23690 = p__23689;
var map__23690__$1 = ((((!((map__23690 == null)))?(((((map__23690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23690):map__23690);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23690__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.rotating_particle.setup = (function sketches$nature_of_code$particle_systems$rotating_particle$setup(){
return sketches.nature_of_code.particle_systems.rotating_particle.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));
});
sketches.nature_of_code.particle_systems.rotating_particle.update_state = (function sketches$nature_of_code$particle_systems$rotating_particle$update_state(particle){
if(cljs.core.truth_(sketches.nature_of_code.particle_systems.rotating_particle.is_dead(particle))){
return sketches.nature_of_code.particle_systems.rotating_particle.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));
} else {
return sketches.nature_of_code.particle_systems.rotating_particle.update_particle(sketches.nature_of_code.particle_systems.rotating_particle.apply_force(particle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(0)], null)));
}
});
sketches.nature_of_code.particle_systems.rotating_particle.draw = (function sketches$nature_of_code$particle_systems$rotating_particle$draw(particle){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

return sketches.nature_of_code.particle_systems.rotating_particle.draw_particle(particle);
});
sketches.nature_of_code.particle_systems.rotating_particle.run = (function sketches$nature_of_code$particle_systems$rotating_particle$run(host){
sketches.nature_of_code.particle_systems.rotating_particle.rotating_particle = (function sketches$nature_of_code$particle_systems$rotating_particle$run_$_rotating_particle(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23692__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23693__i = 0, G__23693__a = new Array(arguments.length -  0);
while (G__23693__i < G__23693__a.length) {G__23693__a[G__23693__i] = arguments[G__23693__i + 0]; ++G__23693__i;}
  args = new cljs.core.IndexedSeq(G__23693__a,0,null);
} 
return G__23692__delegate.call(this,args);};
G__23692.cljs$lang$maxFixedArity = 0;
G__23692.cljs$lang$applyTo = (function (arglist__23694){
var args = cljs.core.seq(arglist__23694);
return G__23692__delegate(args);
});
G__23692.cljs$core$IFn$_invoke$arity$variadic = G__23692__delegate;
return G__23692;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.rotating_particle.update_state))?(function() { 
var G__23695__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.rotating_particle.update_state,args);
};
var G__23695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23696__i = 0, G__23696__a = new Array(arguments.length -  0);
while (G__23696__i < G__23696__a.length) {G__23696__a[G__23696__i] = arguments[G__23696__i + 0]; ++G__23696__i;}
  args = new cljs.core.IndexedSeq(G__23696__a,0,null);
} 
return G__23695__delegate.call(this,args);};
G__23695.cljs$lang$maxFixedArity = 0;
G__23695.cljs$lang$applyTo = (function (arglist__23697){
var args = cljs.core.seq(arglist__23697);
return G__23695__delegate(args);
});
G__23695.cljs$core$IFn$_invoke$arity$variadic = G__23695__delegate;
return G__23695;
})()
:sketches.nature_of_code.particle_systems.rotating_particle.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.rotating_particle.setup))?(function() { 
var G__23698__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.rotating_particle.setup,args);
};
var G__23698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23699__i = 0, G__23699__a = new Array(arguments.length -  0);
while (G__23699__i < G__23699__a.length) {G__23699__a[G__23699__i] = arguments[G__23699__i + 0]; ++G__23699__i;}
  args = new cljs.core.IndexedSeq(G__23699__a,0,null);
} 
return G__23698__delegate.call(this,args);};
G__23698.cljs$lang$maxFixedArity = 0;
G__23698.cljs$lang$applyTo = (function (arglist__23700){
var args = cljs.core.seq(arglist__23700);
return G__23698__delegate(args);
});
G__23698.cljs$core$IFn$_invoke$arity$variadic = G__23698__delegate;
return G__23698;
})()
:sketches.nature_of_code.particle_systems.rotating_particle.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.rotating_particle.draw))?(function() { 
var G__23701__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.rotating_particle.draw,args);
};
var G__23701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23702__i = 0, G__23702__a = new Array(arguments.length -  0);
while (G__23702__i < G__23702__a.length) {G__23702__a[G__23702__i] = arguments[G__23702__i + 0]; ++G__23702__i;}
  args = new cljs.core.IndexedSeq(G__23702__a,0,null);
} 
return G__23701__delegate.call(this,args);};
G__23701.cljs$lang$maxFixedArity = 0;
G__23701.cljs$lang$applyTo = (function (arglist__23703){
var args = cljs.core.seq(arglist__23703);
return G__23701__delegate(args);
});
G__23701.cljs$core$IFn$_invoke$arity$variadic = G__23701__delegate;
return G__23701;
})()
:sketches.nature_of_code.particle_systems.rotating_particle.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.rotating_particle.rotating_particle', sketches.nature_of_code.particle_systems.rotating_particle.rotating_particle);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.rotating_particle.rotating_particle,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23704__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23705__i = 0, G__23705__a = new Array(arguments.length -  0);
while (G__23705__i < G__23705__a.length) {G__23705__a[G__23705__i] = arguments[G__23705__i + 0]; ++G__23705__i;}
  args = new cljs.core.IndexedSeq(G__23705__a,0,null);
} 
return G__23704__delegate.call(this,args);};
G__23704.cljs$lang$maxFixedArity = 0;
G__23704.cljs$lang$applyTo = (function (arglist__23706){
var args = cljs.core.seq(arglist__23706);
return G__23704__delegate(args);
});
G__23704.cljs$core$IFn$_invoke$arity$variadic = G__23704__delegate;
return G__23704;
})()
:host)], null));
}
});
