// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.particle_force');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.particle_force.create_particle = (function sketches$nature_of_code$particle_systems$particle_force$create_particle(location){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (2))], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.05], null),cljs.core.cst$kw$lifespan,255.0], null);
});
sketches.nature_of_code.particle_systems.particle_force.update_particle = (function sketches$nature_of_code$particle_systems$particle_force$update_particle(p__23592){
var map__23593 = p__23592;
var map__23593__$1 = ((((!((map__23593 == null)))?(((((map__23593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23593):map__23593);
var particle = map__23593__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23593__$1,cljs.core.cst$kw$lifespan);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
var lifespan__$1 = (lifespan - 2.0);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$lifespan,lifespan__$1);
});
sketches.nature_of_code.particle_systems.particle_force.apply_force = (function sketches$nature_of_code$particle_systems$particle_force$apply_force(particle,force){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,(function (p1__23595_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__23595_SHARP_,force);
}));
});
sketches.nature_of_code.particle_systems.particle_force.display = (function sketches$nature_of_code$particle_systems$particle_force$display(p__23596){
var map__23597 = p__23596;
var map__23597__$1 = ((((!((map__23597 == null)))?(((((map__23597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23597):map__23597);
var vec__23598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23598,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23598,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,cljs.core.cst$kw$lifespan);
quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),lifespan);

return quil.core.ellipse(x,y,(8),(8));
});
sketches.nature_of_code.particle_systems.particle_force.is_dead = (function sketches$nature_of_code$particle_systems$particle_force$is_dead(p__23602){
var map__23603 = p__23602;
var map__23603__$1 = ((((!((map__23603 == null)))?(((((map__23603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23603):map__23603);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23603__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.particle_force.setup = (function sketches$nature_of_code$particle_systems$particle_force$setup(){
return sketches.nature_of_code.particle_systems.particle_force.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));
});
sketches.nature_of_code.particle_systems.particle_force.update_state = (function sketches$nature_of_code$particle_systems$particle_force$update_state(particle){
if(cljs.core.truth_(sketches.nature_of_code.particle_systems.particle_force.is_dead(particle))){
return sketches.nature_of_code.particle_systems.particle_force.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));
} else {
return sketches.nature_of_code.particle_systems.particle_force.update_particle(sketches.nature_of_code.particle_systems.particle_force.apply_force(particle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.01,0.01], null)));
}
});
sketches.nature_of_code.particle_systems.particle_force.draw = (function sketches$nature_of_code$particle_systems$particle_force$draw(particle){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

return sketches.nature_of_code.particle_systems.particle_force.display(particle);
});
sketches.nature_of_code.particle_systems.particle_force.run = (function sketches$nature_of_code$particle_systems$particle_force$run(host){
sketches.nature_of_code.particle_systems.particle_force.particle_force = (function sketches$nature_of_code$particle_systems$particle_force$run_$_particle_force(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23605__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23606__i = 0, G__23606__a = new Array(arguments.length -  0);
while (G__23606__i < G__23606__a.length) {G__23606__a[G__23606__i] = arguments[G__23606__i + 0]; ++G__23606__i;}
  args = new cljs.core.IndexedSeq(G__23606__a,0,null);
} 
return G__23605__delegate.call(this,args);};
G__23605.cljs$lang$maxFixedArity = 0;
G__23605.cljs$lang$applyTo = (function (arglist__23607){
var args = cljs.core.seq(arglist__23607);
return G__23605__delegate(args);
});
G__23605.cljs$core$IFn$_invoke$arity$variadic = G__23605__delegate;
return G__23605;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particle_force.update_state))?(function() { 
var G__23608__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particle_force.update_state,args);
};
var G__23608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23609__i = 0, G__23609__a = new Array(arguments.length -  0);
while (G__23609__i < G__23609__a.length) {G__23609__a[G__23609__i] = arguments[G__23609__i + 0]; ++G__23609__i;}
  args = new cljs.core.IndexedSeq(G__23609__a,0,null);
} 
return G__23608__delegate.call(this,args);};
G__23608.cljs$lang$maxFixedArity = 0;
G__23608.cljs$lang$applyTo = (function (arglist__23610){
var args = cljs.core.seq(arglist__23610);
return G__23608__delegate(args);
});
G__23608.cljs$core$IFn$_invoke$arity$variadic = G__23608__delegate;
return G__23608;
})()
:sketches.nature_of_code.particle_systems.particle_force.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particle_force.setup))?(function() { 
var G__23611__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particle_force.setup,args);
};
var G__23611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23612__i = 0, G__23612__a = new Array(arguments.length -  0);
while (G__23612__i < G__23612__a.length) {G__23612__a[G__23612__i] = arguments[G__23612__i + 0]; ++G__23612__i;}
  args = new cljs.core.IndexedSeq(G__23612__a,0,null);
} 
return G__23611__delegate.call(this,args);};
G__23611.cljs$lang$maxFixedArity = 0;
G__23611.cljs$lang$applyTo = (function (arglist__23613){
var args = cljs.core.seq(arglist__23613);
return G__23611__delegate(args);
});
G__23611.cljs$core$IFn$_invoke$arity$variadic = G__23611__delegate;
return G__23611;
})()
:sketches.nature_of_code.particle_systems.particle_force.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particle_force.draw))?(function() { 
var G__23614__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particle_force.draw,args);
};
var G__23614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23615__i = 0, G__23615__a = new Array(arguments.length -  0);
while (G__23615__i < G__23615__a.length) {G__23615__a[G__23615__i] = arguments[G__23615__i + 0]; ++G__23615__i;}
  args = new cljs.core.IndexedSeq(G__23615__a,0,null);
} 
return G__23614__delegate.call(this,args);};
G__23614.cljs$lang$maxFixedArity = 0;
G__23614.cljs$lang$applyTo = (function (arglist__23616){
var args = cljs.core.seq(arglist__23616);
return G__23614__delegate(args);
});
G__23614.cljs$core$IFn$_invoke$arity$variadic = G__23614__delegate;
return G__23614;
})()
:sketches.nature_of_code.particle_systems.particle_force.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.particle_force.particle_force', sketches.nature_of_code.particle_systems.particle_force.particle_force);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.particle_force.particle_force,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23617__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23618__i = 0, G__23618__a = new Array(arguments.length -  0);
while (G__23618__i < G__23618__a.length) {G__23618__a[G__23618__i] = arguments[G__23618__i + 0]; ++G__23618__i;}
  args = new cljs.core.IndexedSeq(G__23618__a,0,null);
} 
return G__23617__delegate.call(this,args);};
G__23617.cljs$lang$maxFixedArity = 0;
G__23617.cljs$lang$applyTo = (function (arglist__23619){
var args = cljs.core.seq(arglist__23619);
return G__23617__delegate(args);
});
G__23617.cljs$core$IFn$_invoke$arity$variadic = G__23617__delegate;
return G__23617;
})()
:host)], null));
}
});
