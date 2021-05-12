// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.particle_party');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.rac_sketches.particle_party.global$module$nice_color_palettes = goog.global["nice-color-palettes"];
sketches.rac_sketches.particle_party.palettes = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(sketches.rac_sketches.particle_party.global$module$nice_color_palettes);
sketches.rac_sketches.particle_party.pick_random = (function sketches$rac_sketches$particle_party$pick_random(list){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,cljs.core.rand_int((cljs.core.count(list) - (1))));
});
sketches.rac_sketches.particle_party.pick_random_palette = (function sketches$rac_sketches$particle_party$pick_random_palette(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22335_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return quil.core.unhex(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(p1__22335_SHARP_)));
}),sketches.rac_sketches.particle_party.pick_random(sketches.rac_sketches.particle_party.palettes));
});
sketches.rac_sketches.particle_party.create_particle = (function sketches$rac_sketches$particle_party$create_particle(color){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),quil.core.height()], null),cljs.core.cst$kw$lifespan,(255),cljs.core.cst$kw$color,color], null);
});
sketches.rac_sketches.particle_party.setup = (function sketches$rac_sketches$particle_party$setup(){
quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$colors,sketches.rac_sketches.particle_party.pick_random_palette()], null);
});
sketches.rac_sketches.particle_party.update_particle = (function sketches$rac_sketches$particle_party$update_particle(particle){
var levity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.05], null);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.4,0.4),(0)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sketches.mover.update_mover(particle,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(levity,wind)),cljs.core.cst$kw$lifespan,cljs.core.dec);
});
sketches.rac_sketches.particle_party.update_state = (function sketches$rac_sketches$particle_party$update_state(p__22336){
var map__22337 = p__22336;
var map__22337__$1 = ((((!((map__22337 == null)))?(((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22337):map__22337);
var state = map__22337__$1;
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$particles);
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$colors);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particles,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(quil.core.frame_count(),(500)),(0)))?cljs.core.List.EMPTY:cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.particle_party.update_particle,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22337,map__22337__$1,state,particles,colors){
return (function (p__22339){
var map__22340 = p__22339;
var map__22340__$1 = ((((!((map__22340 == null)))?(((((map__22340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22340):map__22340);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340__$1,cljs.core.cst$kw$lifespan);
return (lifespan >= (0));
});})(map__22337,map__22337__$1,state,particles,colors))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.rac_sketches.particle_party.create_particle(cljs.core.rand_nth(colors)))))));
});
sketches.rac_sketches.particle_party.draw_particle = (function sketches$rac_sketches$particle_party$draw_particle(p__22342){
var map__22343 = p__22342;
var map__22343__$1 = ((((!((map__22343 == null)))?(((((map__22343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22343):map__22343);
var vec__22344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22344,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22344,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,cljs.core.cst$kw$lifespan);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,cljs.core.cst$kw$color);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(color,lifespan));

return quil.core.ellipse(x,y,quil.core.map_range(lifespan,(0),(255),(0),(32)),quil.core.map_range(lifespan,(0),(255),(0),(32)));
});
sketches.rac_sketches.particle_party.draw = (function sketches$rac_sketches$particle_party$draw(p__22348){
var map__22349 = p__22348;
var map__22349__$1 = ((((!((map__22349 == null)))?(((((map__22349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22349):map__22349);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22349__$1,cljs.core.cst$kw$particles);
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22349__$1,cljs.core.cst$kw$colors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(quil.core.frame_count(),(500)),(0))){
quil.core.clear();
} else {
}

var seq__22351 = cljs.core.seq(particles);
var chunk__22352 = null;
var count__22353 = (0);
var i__22354 = (0);
while(true){
if((i__22354 < count__22353)){
var particle = chunk__22352.cljs$core$IIndexed$_nth$arity$2(null,i__22354);
sketches.rac_sketches.particle_party.draw_particle(particle);


var G__22355 = seq__22351;
var G__22356 = chunk__22352;
var G__22357 = count__22353;
var G__22358 = (i__22354 + (1));
seq__22351 = G__22355;
chunk__22352 = G__22356;
count__22353 = G__22357;
i__22354 = G__22358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22351);
if(temp__5735__auto__){
var seq__22351__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22351__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22351__$1);
var G__22359 = cljs.core.chunk_rest(seq__22351__$1);
var G__22360 = c__4351__auto__;
var G__22361 = cljs.core.count(c__4351__auto__);
var G__22362 = (0);
seq__22351 = G__22359;
chunk__22352 = G__22360;
count__22353 = G__22361;
i__22354 = G__22362;
continue;
} else {
var particle = cljs.core.first(seq__22351__$1);
sketches.rac_sketches.particle_party.draw_particle(particle);


var G__22363 = cljs.core.next(seq__22351__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__22351 = G__22363;
chunk__22352 = G__22364;
count__22353 = G__22365;
i__22354 = G__22366;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.rac_sketches.particle_party.run = (function sketches$rac_sketches$particle_party$run(host){
sketches.rac_sketches.particle_party.reverse_roots = (function sketches$rac_sketches$particle_party$run_$_reverse_roots(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22367__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22368__i = 0, G__22368__a = new Array(arguments.length -  0);
while (G__22368__i < G__22368__a.length) {G__22368__a[G__22368__i] = arguments[G__22368__i + 0]; ++G__22368__i;}
  args = new cljs.core.IndexedSeq(G__22368__a,0,null);
} 
return G__22367__delegate.call(this,args);};
G__22367.cljs$lang$maxFixedArity = 0;
G__22367.cljs$lang$applyTo = (function (arglist__22369){
var args = cljs.core.seq(arglist__22369);
return G__22367__delegate(args);
});
G__22367.cljs$core$IFn$_invoke$arity$variadic = G__22367__delegate;
return G__22367;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.particle_party.update_state))?(function() { 
var G__22370__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.particle_party.update_state,args);
};
var G__22370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22371__i = 0, G__22371__a = new Array(arguments.length -  0);
while (G__22371__i < G__22371__a.length) {G__22371__a[G__22371__i] = arguments[G__22371__i + 0]; ++G__22371__i;}
  args = new cljs.core.IndexedSeq(G__22371__a,0,null);
} 
return G__22370__delegate.call(this,args);};
G__22370.cljs$lang$maxFixedArity = 0;
G__22370.cljs$lang$applyTo = (function (arglist__22372){
var args = cljs.core.seq(arglist__22372);
return G__22370__delegate(args);
});
G__22370.cljs$core$IFn$_invoke$arity$variadic = G__22370__delegate;
return G__22370;
})()
:sketches.rac_sketches.particle_party.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.particle_party.setup))?(function() { 
var G__22373__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.particle_party.setup,args);
};
var G__22373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22374__i = 0, G__22374__a = new Array(arguments.length -  0);
while (G__22374__i < G__22374__a.length) {G__22374__a[G__22374__i] = arguments[G__22374__i + 0]; ++G__22374__i;}
  args = new cljs.core.IndexedSeq(G__22374__a,0,null);
} 
return G__22373__delegate.call(this,args);};
G__22373.cljs$lang$maxFixedArity = 0;
G__22373.cljs$lang$applyTo = (function (arglist__22375){
var args = cljs.core.seq(arglist__22375);
return G__22373__delegate(args);
});
G__22373.cljs$core$IFn$_invoke$arity$variadic = G__22373__delegate;
return G__22373;
})()
:sketches.rac_sketches.particle_party.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.particle_party.draw))?(function() { 
var G__22376__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.particle_party.draw,args);
};
var G__22376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22377__i = 0, G__22377__a = new Array(arguments.length -  0);
while (G__22377__i < G__22377__a.length) {G__22377__a[G__22377__i] = arguments[G__22377__i + 0]; ++G__22377__i;}
  args = new cljs.core.IndexedSeq(G__22377__a,0,null);
} 
return G__22376__delegate.call(this,args);};
G__22376.cljs$lang$maxFixedArity = 0;
G__22376.cljs$lang$applyTo = (function (arglist__22378){
var args = cljs.core.seq(arglist__22378);
return G__22376__delegate(args);
});
G__22376.cljs$core$IFn$_invoke$arity$variadic = G__22376__delegate;
return G__22376;
})()
:sketches.rac_sketches.particle_party.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.particle_party.reverse_roots', sketches.rac_sketches.particle_party.reverse_roots);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.particle_party.reverse_roots,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22379__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22380__i = 0, G__22380__a = new Array(arguments.length -  0);
while (G__22380__i < G__22380__a.length) {G__22380__a[G__22380__i] = arguments[G__22380__i + 0]; ++G__22380__i;}
  args = new cljs.core.IndexedSeq(G__22380__a,0,null);
} 
return G__22379__delegate.call(this,args);};
G__22379.cljs$lang$maxFixedArity = 0;
G__22379.cljs$lang$applyTo = (function (arglist__22381){
var args = cljs.core.seq(arglist__22381);
return G__22379__delegate(args);
});
G__22379.cljs$core$IFn$_invoke$arity$variadic = G__22379__delegate;
return G__22379;
})()
:host)], null));
}
});
