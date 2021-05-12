// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.joy_division');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_artistry.joy_division.setup = (function sketches$generative_artistry$joy_division$setup(host){
return null;
});
sketches.generative_artistry.joy_division.draw = (function sketches$generative_artistry$joy_division$draw(){
quil.core.no_loop();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var step = (20);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (yStep){
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (xStep){
var distance_to_center = quil.core.abs((xStep - (quil.core.width() / (2))));
var variance = (function (){var x__4037__auto__ = (((quil.core.width() / (2)) - (50)) - distance_to_center);
var y__4038__auto__ = (0);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var r = ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * (variance / (2))) * (-1));
return quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2(xStep,(r + yStep));
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((- step),((step + step) + quil.core.width()),step)));

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.height(),step)));
});
sketches.generative_artistry.joy_division.run = (function sketches$generative_artistry$joy_division$run(host){
sketches.generative_artistry.joy_division.tiledLines = (function sketches$generative_artistry$joy_division$run_$_tiledLines(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24377__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24378__i = 0, G__24378__a = new Array(arguments.length -  0);
while (G__24378__i < G__24378__a.length) {G__24378__a[G__24378__i] = arguments[G__24378__i + 0]; ++G__24378__i;}
  args = new cljs.core.IndexedSeq(G__24378__a,0,null);
} 
return G__24377__delegate.call(this,args);};
G__24377.cljs$lang$maxFixedArity = 0;
G__24377.cljs$lang$applyTo = (function (arglist__24379){
var args = cljs.core.seq(arglist__24379);
return G__24377__delegate(args);
});
G__24377.cljs$core$IFn$_invoke$arity$variadic = G__24377__delegate;
return G__24377;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.joy_division.setup))?(function() { 
var G__24380__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.joy_division.setup,args);
};
var G__24380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24381__i = 0, G__24381__a = new Array(arguments.length -  0);
while (G__24381__i < G__24381__a.length) {G__24381__a[G__24381__i] = arguments[G__24381__i + 0]; ++G__24381__i;}
  args = new cljs.core.IndexedSeq(G__24381__a,0,null);
} 
return G__24380__delegate.call(this,args);};
G__24380.cljs$lang$maxFixedArity = 0;
G__24380.cljs$lang$applyTo = (function (arglist__24382){
var args = cljs.core.seq(arglist__24382);
return G__24380__delegate(args);
});
G__24380.cljs$core$IFn$_invoke$arity$variadic = G__24380__delegate;
return G__24380;
})()
:sketches.generative_artistry.joy_division.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_artistry.joy_division.draw))?(function() { 
var G__24383__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.joy_division.draw,args);
};
var G__24383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24384__i = 0, G__24384__a = new Array(arguments.length -  0);
while (G__24384__i < G__24384__a.length) {G__24384__a[G__24384__i] = arguments[G__24384__i + 0]; ++G__24384__i;}
  args = new cljs.core.IndexedSeq(G__24384__a,0,null);
} 
return G__24383__delegate.call(this,args);};
G__24383.cljs$lang$maxFixedArity = 0;
G__24383.cljs$lang$applyTo = (function (arglist__24385){
var args = cljs.core.seq(arglist__24385);
return G__24383__delegate(args);
});
G__24383.cljs$core$IFn$_invoke$arity$variadic = G__24383__delegate;
return G__24383;
})()
:sketches.generative_artistry.joy_division.draw)], 0));
});
goog.exportSymbol('sketches.generative_artistry.joy_division.tiledLines', sketches.generative_artistry.joy_division.tiledLines);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.joy_division.tiledLines,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24386__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24387__i = 0, G__24387__a = new Array(arguments.length -  0);
while (G__24387__i < G__24387__a.length) {G__24387__a[G__24387__i] = arguments[G__24387__i + 0]; ++G__24387__i;}
  args = new cljs.core.IndexedSeq(G__24387__a,0,null);
} 
return G__24386__delegate.call(this,args);};
G__24386.cljs$lang$maxFixedArity = 0;
G__24386.cljs$lang$applyTo = (function (arglist__24388){
var args = cljs.core.seq(arglist__24388);
return G__24386__delegate(args);
});
G__24386.cljs$core$IFn$_invoke$arity$variadic = G__24386__delegate;
return G__24386;
})()
:host)], null));
}
});
