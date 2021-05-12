// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.fire');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
sketches.nature_of_code.particle_systems.fire.setup = (function sketches$nature_of_code$particle_systems$fire$setup(){
quil.core.blend_mode(cljs.core.cst$kw$add);

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(200)], null)], null);
});
sketches.nature_of_code.particle_systems.fire.create_particle = (function sketches$nature_of_code$particle_systems$fire$create_particle(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((10),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.3),((quil.core.random_gaussian() * 0.4) - 1.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0], 0));
});
sketches.nature_of_code.particle_systems.fire.is_dead = (function sketches$nature_of_code$particle_systems$fire$is_dead(p__20023){
var map__20024 = p__20023;
var map__20024__$1 = ((((!((map__20024 == null)))?(((((map__20024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20024):map__20024);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20024__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.fire.update_lifespan = (function sketches$nature_of_code$particle_systems$fire$update_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.fire.update_state = (function sketches$nature_of_code$particle_systems$fire$update_state(ps){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ps,cljs.core.cst$kw$particles,(function (p1__20026_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20026_SHARP_,sketches.nature_of_code.particle_systems.fire.create_particle(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps)));
})),cljs.core.cst$kw$particles,(function (p1__20027_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20027_SHARP_,sketches.nature_of_code.particle_systems.fire.create_particle(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps)));
})),cljs.core.cst$kw$particles,(function (p1__20028_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire.update_lifespan,sketches.mover.update_mover),p1__20028_SHARP_);
})),cljs.core.cst$kw$particles,(function (p1__20029_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire.is_dead,p1__20029_SHARP_);
}));
});
sketches.nature_of_code.particle_systems.fire.draw_particle = (function sketches$nature_of_code$particle_systems$fire$draw_particle(p__20030){
var map__20031 = p__20030;
var map__20031__$1 = ((((!((map__20031 == null)))?(((((map__20031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20031):map__20031);
var vec__20032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20031__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20032,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20032,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20031__$1,cljs.core.cst$kw$lifespan);
quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rgb);

quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.color.cljs$core$IFn$_invoke$arity$4((255),(24),(0),lifespan));

return quil.core.ellipse(x,y,quil.core.map_range(lifespan,(0),(255),(0),(24)),quil.core.map_range(lifespan,(0),(255),(0),(24)));
});
sketches.nature_of_code.particle_systems.fire.draw = (function sketches$nature_of_code$particle_systems$fire$draw(p__20036){
var map__20037 = p__20036;
var map__20037__$1 = ((((!((map__20037 == null)))?(((((map__20037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20037):map__20037);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20037__$1,cljs.core.cst$kw$particles);
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

var seq__20039 = cljs.core.seq(particles);
var chunk__20040 = null;
var count__20041 = (0);
var i__20042 = (0);
while(true){
if((i__20042 < count__20041)){
var particle = chunk__20040.cljs$core$IIndexed$_nth$arity$2(null,i__20042);
sketches.nature_of_code.particle_systems.fire.draw_particle(particle);


var G__20043 = seq__20039;
var G__20044 = chunk__20040;
var G__20045 = count__20041;
var G__20046 = (i__20042 + (1));
seq__20039 = G__20043;
chunk__20040 = G__20044;
count__20041 = G__20045;
i__20042 = G__20046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20039);
if(temp__5735__auto__){
var seq__20039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20039__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20039__$1);
var G__20047 = cljs.core.chunk_rest(seq__20039__$1);
var G__20048 = c__4351__auto__;
var G__20049 = cljs.core.count(c__4351__auto__);
var G__20050 = (0);
seq__20039 = G__20047;
chunk__20040 = G__20048;
count__20041 = G__20049;
i__20042 = G__20050;
continue;
} else {
var particle = cljs.core.first(seq__20039__$1);
sketches.nature_of_code.particle_systems.fire.draw_particle(particle);


var G__20051 = cljs.core.next(seq__20039__$1);
var G__20052 = null;
var G__20053 = (0);
var G__20054 = (0);
seq__20039 = G__20051;
chunk__20040 = G__20052;
count__20041 = G__20053;
i__20042 = G__20054;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.fire.run = (function sketches$nature_of_code$particle_systems$fire$run(host){
sketches.nature_of_code.particle_systems.fire.fire = (function sketches$nature_of_code$particle_systems$fire$run_$_fire(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20055__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20056__i = 0, G__20056__a = new Array(arguments.length -  0);
while (G__20056__i < G__20056__a.length) {G__20056__a[G__20056__i] = arguments[G__20056__i + 0]; ++G__20056__i;}
  args = new cljs.core.IndexedSeq(G__20056__a,0,null);
} 
return G__20055__delegate.call(this,args);};
G__20055.cljs$lang$maxFixedArity = 0;
G__20055.cljs$lang$applyTo = (function (arglist__20057){
var args = cljs.core.seq(arglist__20057);
return G__20055__delegate(args);
});
G__20055.cljs$core$IFn$_invoke$arity$variadic = G__20055__delegate;
return G__20055;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire.update_state))?(function() { 
var G__20058__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire.update_state,args);
};
var G__20058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20059__i = 0, G__20059__a = new Array(arguments.length -  0);
while (G__20059__i < G__20059__a.length) {G__20059__a[G__20059__i] = arguments[G__20059__i + 0]; ++G__20059__i;}
  args = new cljs.core.IndexedSeq(G__20059__a,0,null);
} 
return G__20058__delegate.call(this,args);};
G__20058.cljs$lang$maxFixedArity = 0;
G__20058.cljs$lang$applyTo = (function (arglist__20060){
var args = cljs.core.seq(arglist__20060);
return G__20058__delegate(args);
});
G__20058.cljs$core$IFn$_invoke$arity$variadic = G__20058__delegate;
return G__20058;
})()
:sketches.nature_of_code.particle_systems.fire.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire.setup))?(function() { 
var G__20061__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire.setup,args);
};
var G__20061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20062__i = 0, G__20062__a = new Array(arguments.length -  0);
while (G__20062__i < G__20062__a.length) {G__20062__a[G__20062__i] = arguments[G__20062__i + 0]; ++G__20062__i;}
  args = new cljs.core.IndexedSeq(G__20062__a,0,null);
} 
return G__20061__delegate.call(this,args);};
G__20061.cljs$lang$maxFixedArity = 0;
G__20061.cljs$lang$applyTo = (function (arglist__20063){
var args = cljs.core.seq(arglist__20063);
return G__20061__delegate(args);
});
G__20061.cljs$core$IFn$_invoke$arity$variadic = G__20061__delegate;
return G__20061;
})()
:sketches.nature_of_code.particle_systems.fire.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire.draw))?(function() { 
var G__20064__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire.draw,args);
};
var G__20064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20065__i = 0, G__20065__a = new Array(arguments.length -  0);
while (G__20065__i < G__20065__a.length) {G__20065__a[G__20065__i] = arguments[G__20065__i + 0]; ++G__20065__i;}
  args = new cljs.core.IndexedSeq(G__20065__a,0,null);
} 
return G__20064__delegate.call(this,args);};
G__20064.cljs$lang$maxFixedArity = 0;
G__20064.cljs$lang$applyTo = (function (arglist__20066){
var args = cljs.core.seq(arglist__20066);
return G__20064__delegate(args);
});
G__20064.cljs$core$IFn$_invoke$arity$variadic = G__20064__delegate;
return G__20064;
})()
:sketches.nature_of_code.particle_systems.fire.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.fire.fire', sketches.nature_of_code.particle_systems.fire.fire);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.fire.fire,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20067__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20068__i = 0, G__20068__a = new Array(arguments.length -  0);
while (G__20068__i < G__20068__a.length) {G__20068__a[G__20068__i] = arguments[G__20068__i + 0]; ++G__20068__i;}
  args = new cljs.core.IndexedSeq(G__20068__a,0,null);
} 
return G__20067__delegate.call(this,args);};
G__20067.cljs$lang$maxFixedArity = 0;
G__20067.cljs$lang$applyTo = (function (arglist__20069){
var args = cljs.core.seq(arglist__20069);
return G__20067__delegate(args);
});
G__20067.cljs$core$IFn$_invoke$arity$variadic = G__20067__delegate;
return G__20067;
})()
:host)], null));
}
});
