// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.dynamic_origin');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.dynamic_origin.create_particle = (function sketches$nature_of_code$particle_systems$dynamic_origin$create_particle(location){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1))], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$aAcceleration,0.0,cljs.core.cst$kw$aVelocity,0.1,cljs.core.cst$kw$angle,0.0], null);
});
sketches.nature_of_code.particle_systems.dynamic_origin.update_particle = (function sketches$nature_of_code$particle_systems$dynamic_origin$update_particle(p__22289){
var map__22290 = p__22289;
var map__22290__$1 = ((((!((map__22290 == null)))?(((((map__22290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22290):map__22290);
var particle = map__22290__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$lifespan);
var aVelocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$aVelocity);
var aAcceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$aAcceleration);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.cst$kw$angle);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
var lifespan__$1 = (lifespan - 2.0);
var aVelocity__$1 = (aVelocity + aAcceleration);
var angle__$1 = (aVelocity__$1 + angle);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$lifespan,lifespan__$1),cljs.core.cst$kw$aVelocity,aVelocity__$1),cljs.core.cst$kw$angle,(aVelocity__$1 + angle__$1)),cljs.core.cst$kw$aAcceleration,(0));
});
sketches.nature_of_code.particle_systems.dynamic_origin.apply_force = (function sketches$nature_of_code$particle_systems$dynamic_origin$apply_force(particle,force){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,(function (p1__22292_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__22292_SHARP_,force);
}));
});
sketches.nature_of_code.particle_systems.dynamic_origin.display = (function sketches$nature_of_code$particle_systems$dynamic_origin$display(p__22293){
var map__22294 = p__22293;
var map__22294__$1 = ((((!((map__22294 == null)))?(((((map__22294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22294):map__22294);
var particle = map__22294__$1;
var vec__22295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22294__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22294__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22294__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$4((127),(0),(0),lifespan);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));

quil.core.pop_matrix();

return particle;
});
sketches.nature_of_code.particle_systems.dynamic_origin.is_dead = (function sketches$nature_of_code$particle_systems$dynamic_origin$is_dead(p__22299){
var map__22300 = p__22299;
var map__22300__$1 = ((((!((map__22300 == null)))?(((((map__22300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22300):map__22300);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22300__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.dynamic_origin.setup = (function sketches$nature_of_code$particle_systems$dynamic_origin$setup(){
return cljs.core.List.EMPTY;
});
sketches.nature_of_code.particle_systems.dynamic_origin.update_state = (function sketches$nature_of_code$particle_systems$dynamic_origin$update_state(particles){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.dynamic_origin.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (particle){
return sketches.nature_of_code.particle_systems.dynamic_origin.apply_force(sketches.nature_of_code.particle_systems.dynamic_origin.update_particle(particle),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.1], null));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.nature_of_code.particle_systems.dynamic_origin.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x(),quil.core.mouse_y()], null)))));
});
sketches.nature_of_code.particle_systems.dynamic_origin.draw = (function sketches$nature_of_code$particle_systems$dynamic_origin$draw(particles){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__22302 = cljs.core.seq(particles);
var chunk__22303 = null;
var count__22304 = (0);
var i__22305 = (0);
while(true){
if((i__22305 < count__22304)){
var particle = chunk__22303.cljs$core$IIndexed$_nth$arity$2(null,i__22305);
sketches.nature_of_code.particle_systems.dynamic_origin.display(particle);


var G__22306 = seq__22302;
var G__22307 = chunk__22303;
var G__22308 = count__22304;
var G__22309 = (i__22305 + (1));
seq__22302 = G__22306;
chunk__22303 = G__22307;
count__22304 = G__22308;
i__22305 = G__22309;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22302);
if(temp__5735__auto__){
var seq__22302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22302__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22302__$1);
var G__22310 = cljs.core.chunk_rest(seq__22302__$1);
var G__22311 = c__4351__auto__;
var G__22312 = cljs.core.count(c__4351__auto__);
var G__22313 = (0);
seq__22302 = G__22310;
chunk__22303 = G__22311;
count__22304 = G__22312;
i__22305 = G__22313;
continue;
} else {
var particle = cljs.core.first(seq__22302__$1);
sketches.nature_of_code.particle_systems.dynamic_origin.display(particle);


var G__22314 = cljs.core.next(seq__22302__$1);
var G__22315 = null;
var G__22316 = (0);
var G__22317 = (0);
seq__22302 = G__22314;
chunk__22303 = G__22315;
count__22304 = G__22316;
i__22305 = G__22317;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.dynamic_origin.run = (function sketches$nature_of_code$particle_systems$dynamic_origin$run(host){
sketches.nature_of_code.particle_systems.dynamic_origin.dynamic_origin = (function sketches$nature_of_code$particle_systems$dynamic_origin$run_$_dynamic_origin(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22318__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22319__i = 0, G__22319__a = new Array(arguments.length -  0);
while (G__22319__i < G__22319__a.length) {G__22319__a[G__22319__i] = arguments[G__22319__i + 0]; ++G__22319__i;}
  args = new cljs.core.IndexedSeq(G__22319__a,0,null);
} 
return G__22318__delegate.call(this,args);};
G__22318.cljs$lang$maxFixedArity = 0;
G__22318.cljs$lang$applyTo = (function (arglist__22320){
var args = cljs.core.seq(arglist__22320);
return G__22318__delegate(args);
});
G__22318.cljs$core$IFn$_invoke$arity$variadic = G__22318__delegate;
return G__22318;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.dynamic_origin.update_state))?(function() { 
var G__22321__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.dynamic_origin.update_state,args);
};
var G__22321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22322__i = 0, G__22322__a = new Array(arguments.length -  0);
while (G__22322__i < G__22322__a.length) {G__22322__a[G__22322__i] = arguments[G__22322__i + 0]; ++G__22322__i;}
  args = new cljs.core.IndexedSeq(G__22322__a,0,null);
} 
return G__22321__delegate.call(this,args);};
G__22321.cljs$lang$maxFixedArity = 0;
G__22321.cljs$lang$applyTo = (function (arglist__22323){
var args = cljs.core.seq(arglist__22323);
return G__22321__delegate(args);
});
G__22321.cljs$core$IFn$_invoke$arity$variadic = G__22321__delegate;
return G__22321;
})()
:sketches.nature_of_code.particle_systems.dynamic_origin.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.dynamic_origin.setup))?(function() { 
var G__22324__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.dynamic_origin.setup,args);
};
var G__22324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22325__i = 0, G__22325__a = new Array(arguments.length -  0);
while (G__22325__i < G__22325__a.length) {G__22325__a[G__22325__i] = arguments[G__22325__i + 0]; ++G__22325__i;}
  args = new cljs.core.IndexedSeq(G__22325__a,0,null);
} 
return G__22324__delegate.call(this,args);};
G__22324.cljs$lang$maxFixedArity = 0;
G__22324.cljs$lang$applyTo = (function (arglist__22326){
var args = cljs.core.seq(arglist__22326);
return G__22324__delegate(args);
});
G__22324.cljs$core$IFn$_invoke$arity$variadic = G__22324__delegate;
return G__22324;
})()
:sketches.nature_of_code.particle_systems.dynamic_origin.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.dynamic_origin.draw))?(function() { 
var G__22327__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.dynamic_origin.draw,args);
};
var G__22327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22328__i = 0, G__22328__a = new Array(arguments.length -  0);
while (G__22328__i < G__22328__a.length) {G__22328__a[G__22328__i] = arguments[G__22328__i + 0]; ++G__22328__i;}
  args = new cljs.core.IndexedSeq(G__22328__a,0,null);
} 
return G__22327__delegate.call(this,args);};
G__22327.cljs$lang$maxFixedArity = 0;
G__22327.cljs$lang$applyTo = (function (arglist__22329){
var args = cljs.core.seq(arglist__22329);
return G__22327__delegate(args);
});
G__22327.cljs$core$IFn$_invoke$arity$variadic = G__22327__delegate;
return G__22327;
})()
:sketches.nature_of_code.particle_systems.dynamic_origin.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.dynamic_origin.dynamic_origin', sketches.nature_of_code.particle_systems.dynamic_origin.dynamic_origin);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.dynamic_origin.dynamic_origin,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22330__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22331__i = 0, G__22331__a = new Array(arguments.length -  0);
while (G__22331__i < G__22331__a.length) {G__22331__a[G__22331__i] = arguments[G__22331__i + 0]; ++G__22331__i;}
  args = new cljs.core.IndexedSeq(G__22331__a,0,null);
} 
return G__22330__delegate.call(this,args);};
G__22330.cljs$lang$maxFixedArity = 0;
G__22330.cljs$lang$applyTo = (function (arglist__22332){
var args = cljs.core.seq(arglist__22332);
return G__22330__delegate(args);
});
G__22330.cljs$core$IFn$_invoke$arity$variadic = G__22330__delegate;
return G__22330;
})()
:host)], null));
}
});
