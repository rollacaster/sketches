// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.inferno');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.rac_sketches.inferno.setup = (function sketches$rac_sketches$inferno$setup(){
quil.core.blend_mode(cljs.core.cst$kw$add);

quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY], null);
});
sketches.rac_sketches.inferno.update_particle = (function sketches$rac_sketches$inferno$update_particle(particle){
var gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.01),((quil.core.random_gaussian() - 0.8) * 0.02)], null);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.1,0.1),(0)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sketches.mover.update_mover(particle,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(gravity,wind)),cljs.core.cst$kw$lifespan,cljs.core.dec);
});
sketches.rac_sketches.inferno.create_particle = (function sketches$rac_sketches$inferno$create_particle(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),quil.core.height()], null),cljs.core.cst$kw$lifespan,(255)], null);
});
sketches.rac_sketches.inferno.update_state = (function sketches$rac_sketches$inferno$update_state(p__24342){
var map__24343 = p__24342;
var map__24343__$1 = ((((!((map__24343 == null)))?(((((map__24343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24343):map__24343);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24343__$1,cljs.core.cst$kw$particles);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.inferno.update_particle,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__24343,map__24343__$1,particles){
return (function (p__24345){
var map__24346 = p__24345;
var map__24346__$1 = ((((!((map__24346 == null)))?(((((map__24346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24346):map__24346);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24346__$1,cljs.core.cst$kw$lifespan);
return (lifespan >= (0));
});})(map__24343,map__24343__$1,particles))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.rac_sketches.inferno.create_particle())))], null);
});
sketches.rac_sketches.inferno.draw_particle = (function sketches$rac_sketches$inferno$draw_particle(p__24348){
var map__24349 = p__24348;
var map__24349__$1 = ((((!((map__24349 == null)))?(((((map__24349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24349):map__24349);
var vec__24350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24349__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24349__$1,cljs.core.cst$kw$lifespan);
var blue = quil.core.color.cljs$core$IFn$_invoke$arity$4((255),(127),(64),lifespan);
var red = quil.core.color.cljs$core$IFn$_invoke$arity$2((0),(0));
var n__4408__auto__ = (6);
var i = (0);
while(true){
if((i < n__4408__auto__)){
quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.lerp_color(red,blue,(i / (5))));

quil.core.ellipse(x,y,(((255) * ((64) / (i + (1)))) / lifespan),(((255) * ((64) / (i + (1)))) / lifespan));

var G__24354 = (i + (1));
i = G__24354;
continue;
} else {
return null;
}
break;
}
});
sketches.rac_sketches.inferno.draw = (function sketches$rac_sketches$inferno$draw(p__24355){
var map__24356 = p__24355;
var map__24356__$1 = ((((!((map__24356 == null)))?(((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24356):map__24356);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24356__$1,cljs.core.cst$kw$particles);
quil.core.clear();

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.inferno.draw_particle,particles));
});
sketches.rac_sketches.inferno.run = (function sketches$rac_sketches$inferno$run(host){
sketches.rac_sketches.inferno.inferno = (function sketches$rac_sketches$inferno$run_$_inferno(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24358__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24359__i = 0, G__24359__a = new Array(arguments.length -  0);
while (G__24359__i < G__24359__a.length) {G__24359__a[G__24359__i] = arguments[G__24359__i + 0]; ++G__24359__i;}
  args = new cljs.core.IndexedSeq(G__24359__a,0,null);
} 
return G__24358__delegate.call(this,args);};
G__24358.cljs$lang$maxFixedArity = 0;
G__24358.cljs$lang$applyTo = (function (arglist__24360){
var args = cljs.core.seq(arglist__24360);
return G__24358__delegate(args);
});
G__24358.cljs$core$IFn$_invoke$arity$variadic = G__24358__delegate;
return G__24358;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.inferno.update_state))?(function() { 
var G__24361__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.inferno.update_state,args);
};
var G__24361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24362__i = 0, G__24362__a = new Array(arguments.length -  0);
while (G__24362__i < G__24362__a.length) {G__24362__a[G__24362__i] = arguments[G__24362__i + 0]; ++G__24362__i;}
  args = new cljs.core.IndexedSeq(G__24362__a,0,null);
} 
return G__24361__delegate.call(this,args);};
G__24361.cljs$lang$maxFixedArity = 0;
G__24361.cljs$lang$applyTo = (function (arglist__24363){
var args = cljs.core.seq(arglist__24363);
return G__24361__delegate(args);
});
G__24361.cljs$core$IFn$_invoke$arity$variadic = G__24361__delegate;
return G__24361;
})()
:sketches.rac_sketches.inferno.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.inferno.setup))?(function() { 
var G__24364__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.inferno.setup,args);
};
var G__24364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24365__i = 0, G__24365__a = new Array(arguments.length -  0);
while (G__24365__i < G__24365__a.length) {G__24365__a[G__24365__i] = arguments[G__24365__i + 0]; ++G__24365__i;}
  args = new cljs.core.IndexedSeq(G__24365__a,0,null);
} 
return G__24364__delegate.call(this,args);};
G__24364.cljs$lang$maxFixedArity = 0;
G__24364.cljs$lang$applyTo = (function (arglist__24366){
var args = cljs.core.seq(arglist__24366);
return G__24364__delegate(args);
});
G__24364.cljs$core$IFn$_invoke$arity$variadic = G__24364__delegate;
return G__24364;
})()
:sketches.rac_sketches.inferno.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.inferno.draw))?(function() { 
var G__24367__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.inferno.draw,args);
};
var G__24367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24368__i = 0, G__24368__a = new Array(arguments.length -  0);
while (G__24368__i < G__24368__a.length) {G__24368__a[G__24368__i] = arguments[G__24368__i + 0]; ++G__24368__i;}
  args = new cljs.core.IndexedSeq(G__24368__a,0,null);
} 
return G__24367__delegate.call(this,args);};
G__24367.cljs$lang$maxFixedArity = 0;
G__24367.cljs$lang$applyTo = (function (arglist__24369){
var args = cljs.core.seq(arglist__24369);
return G__24367__delegate(args);
});
G__24367.cljs$core$IFn$_invoke$arity$variadic = G__24367__delegate;
return G__24367;
})()
:sketches.rac_sketches.inferno.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.inferno.inferno', sketches.rac_sketches.inferno.inferno);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.inferno.inferno,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24370__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24371__i = 0, G__24371__a = new Array(arguments.length -  0);
while (G__24371__i < G__24371__a.length) {G__24371__a[G__24371__i] = arguments[G__24371__i + 0]; ++G__24371__i;}
  args = new cljs.core.IndexedSeq(G__24371__a,0,null);
} 
return G__24370__delegate.call(this,args);};
G__24370.cljs$lang$maxFixedArity = 0;
G__24370.cljs$lang$applyTo = (function (arglist__24372){
var args = cljs.core.seq(arglist__24372);
return G__24370__delegate(args);
});
G__24370.cljs$core$IFn$_invoke$arity$variadic = G__24370__delegate;
return G__24370;
})()
:host)], null));
}
});
