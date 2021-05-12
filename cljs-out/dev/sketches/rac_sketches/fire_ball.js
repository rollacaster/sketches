// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.fire_ball');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.rac_sketches.fire_ball.setup = (function sketches$rac_sketches$fire_ball$setup(){
quil.core.blend_mode(cljs.core.cst$kw$add);

quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY], null);
});
sketches.rac_sketches.fire_ball.update_particle = (function sketches$rac_sketches$fire_ball$update_particle(particle){
var gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.01),((quil.core.random_gaussian() - 0.8) * 0.02)], null);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.1,0.1),(0)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sketches.mover.update_mover(particle,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(gravity,wind)),cljs.core.cst$kw$lifespan,cljs.core.dec);
});
sketches.rac_sketches.fire_ball.create_particle = (function sketches$rac_sketches$fire_ball$create_particle(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() * 0.8)], null),cljs.core.cst$kw$lifespan,(255)], null);
});
sketches.rac_sketches.fire_ball.update_state = (function sketches$rac_sketches$fire_ball$update_state(p__18055){
var map__18056 = p__18055;
var map__18056__$1 = ((((!((map__18056 == null)))?(((((map__18056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18056):map__18056);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,cljs.core.cst$kw$particles);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_ball.update_particle,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__18056,map__18056__$1,particles){
return (function (p__18058){
var map__18059 = p__18058;
var map__18059__$1 = ((((!((map__18059 == null)))?(((((map__18059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18059):map__18059);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,cljs.core.cst$kw$lifespan);
return (lifespan >= (0));
});})(map__18056,map__18056__$1,particles))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.rac_sketches.fire_ball.create_particle())))], null);
});
sketches.rac_sketches.fire_ball.draw_particle = (function sketches$rac_sketches$fire_ball$draw_particle(p__18061){
var map__18062 = p__18061;
var map__18062__$1 = ((((!((map__18062 == null)))?(((((map__18062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18062):map__18062);
var vec__18063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18062__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18063,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18063,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18062__$1,cljs.core.cst$kw$lifespan);
var blue = quil.core.color.cljs$core$IFn$_invoke$arity$4((255),(127),(64),lifespan);
var red = quil.core.color.cljs$core$IFn$_invoke$arity$2((0),(0));
var n__4408__auto__ = (6);
var i = (0);
while(true){
if((i < n__4408__auto__)){
quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.lerp_color(red,blue,(i / (5))));

quil.core.ellipse(x,y,((lifespan * ((256) / (i + (1)))) / (255)),((lifespan * ((256) / (i + (1)))) / (255)));

var G__18067 = (i + (1));
i = G__18067;
continue;
} else {
return null;
}
break;
}
});
sketches.rac_sketches.fire_ball.draw = (function sketches$rac_sketches$fire_ball$draw(p__18068){
var map__18069 = p__18068;
var map__18069__$1 = ((((!((map__18069 == null)))?(((((map__18069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18069):map__18069);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18069__$1,cljs.core.cst$kw$particles);
quil.core.clear();

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_ball.draw_particle,particles));
});
sketches.rac_sketches.fire_ball.run = (function sketches$rac_sketches$fire_ball$run(host){
sketches.rac_sketches.fire_ball.particles = (function sketches$rac_sketches$fire_ball$run_$_particles(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18071__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18072__i = 0, G__18072__a = new Array(arguments.length -  0);
while (G__18072__i < G__18072__a.length) {G__18072__a[G__18072__i] = arguments[G__18072__i + 0]; ++G__18072__i;}
  args = new cljs.core.IndexedSeq(G__18072__a,0,null);
} 
return G__18071__delegate.call(this,args);};
G__18071.cljs$lang$maxFixedArity = 0;
G__18071.cljs$lang$applyTo = (function (arglist__18073){
var args = cljs.core.seq(arglist__18073);
return G__18071__delegate(args);
});
G__18071.cljs$core$IFn$_invoke$arity$variadic = G__18071__delegate;
return G__18071;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_ball.update_state))?(function() { 
var G__18074__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_ball.update_state,args);
};
var G__18074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18075__i = 0, G__18075__a = new Array(arguments.length -  0);
while (G__18075__i < G__18075__a.length) {G__18075__a[G__18075__i] = arguments[G__18075__i + 0]; ++G__18075__i;}
  args = new cljs.core.IndexedSeq(G__18075__a,0,null);
} 
return G__18074__delegate.call(this,args);};
G__18074.cljs$lang$maxFixedArity = 0;
G__18074.cljs$lang$applyTo = (function (arglist__18076){
var args = cljs.core.seq(arglist__18076);
return G__18074__delegate(args);
});
G__18074.cljs$core$IFn$_invoke$arity$variadic = G__18074__delegate;
return G__18074;
})()
:sketches.rac_sketches.fire_ball.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_ball.setup))?(function() { 
var G__18077__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_ball.setup,args);
};
var G__18077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18078__i = 0, G__18078__a = new Array(arguments.length -  0);
while (G__18078__i < G__18078__a.length) {G__18078__a[G__18078__i] = arguments[G__18078__i + 0]; ++G__18078__i;}
  args = new cljs.core.IndexedSeq(G__18078__a,0,null);
} 
return G__18077__delegate.call(this,args);};
G__18077.cljs$lang$maxFixedArity = 0;
G__18077.cljs$lang$applyTo = (function (arglist__18079){
var args = cljs.core.seq(arglist__18079);
return G__18077__delegate(args);
});
G__18077.cljs$core$IFn$_invoke$arity$variadic = G__18077__delegate;
return G__18077;
})()
:sketches.rac_sketches.fire_ball.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_ball.draw))?(function() { 
var G__18080__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_ball.draw,args);
};
var G__18080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18081__i = 0, G__18081__a = new Array(arguments.length -  0);
while (G__18081__i < G__18081__a.length) {G__18081__a[G__18081__i] = arguments[G__18081__i + 0]; ++G__18081__i;}
  args = new cljs.core.IndexedSeq(G__18081__a,0,null);
} 
return G__18080__delegate.call(this,args);};
G__18080.cljs$lang$maxFixedArity = 0;
G__18080.cljs$lang$applyTo = (function (arglist__18082){
var args = cljs.core.seq(arglist__18082);
return G__18080__delegate(args);
});
G__18080.cljs$core$IFn$_invoke$arity$variadic = G__18080__delegate;
return G__18080;
})()
:sketches.rac_sketches.fire_ball.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.fire_ball.particles', sketches.rac_sketches.fire_ball.particles);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.fire_ball.particles,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18083__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18084__i = 0, G__18084__a = new Array(arguments.length -  0);
while (G__18084__i < G__18084__a.length) {G__18084__a[G__18084__i] = arguments[G__18084__i + 0]; ++G__18084__i;}
  args = new cljs.core.IndexedSeq(G__18084__a,0,null);
} 
return G__18083__delegate.call(this,args);};
G__18083.cljs$lang$maxFixedArity = 0;
G__18083.cljs$lang$applyTo = (function (arglist__18085){
var args = cljs.core.seq(arglist__18085);
return G__18083__delegate(args);
});
G__18083.cljs$core$IFn$_invoke$arity$variadic = G__18083__delegate;
return G__18083;
})()
:host)], null));
}
});
