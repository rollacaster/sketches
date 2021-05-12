// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.cubic_disarray');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.generative_artistry.cubic_disarray.setup = (function sketches$generative_artistry$cubic_disarray$setup(){
return null;
});
sketches.generative_artistry.cubic_disarray.draw = (function sketches$generative_artistry$cubic_disarray$draw(){
quil.core.no_loop();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

quil.core.rect_mode(cljs.core.cst$kw$center);

var step = (30);
quil.core.translate.cljs$core$IFn$_invoke$arity$2((step / (2)),(step / (2)));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (xStep){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (yStep){
quil.core.push_matrix();

var max_displacement_20072 = (15);
var max_rotation_20073 = (20);
var rotate_amt_20074 = (((((yStep / quil.core.height()) * (quil.core.PI / (180))) * (((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) < 0.5))?(-1):(1))) * quil.core.random.cljs$core$IFn$_invoke$arity$1((1))) * max_rotation_20073);
var translate_amt_20075 = ((((yStep / quil.core.height()) * (((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) < 0.5))?(-1):(1))) * quil.core.random.cljs$core$IFn$_invoke$arity$1((1))) * max_displacement_20072);
quil.core.translate.cljs$core$IFn$_invoke$arity$2((xStep + translate_amt_20075),yStep);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(rotate_amt_20074);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),step,step);

return quil.core.pop_matrix();
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.height(),step)));
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),step)));
});
sketches.generative_artistry.cubic_disarray.run = (function sketches$generative_artistry$cubic_disarray$run(host){
sketches.generative_artistry.cubic_disarray.cubic_dissary = (function sketches$generative_artistry$cubic_disarray$run_$_cubic_dissary(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20076__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20077__i = 0, G__20077__a = new Array(arguments.length -  0);
while (G__20077__i < G__20077__a.length) {G__20077__a[G__20077__i] = arguments[G__20077__i + 0]; ++G__20077__i;}
  args = new cljs.core.IndexedSeq(G__20077__a,0,null);
} 
return G__20076__delegate.call(this,args);};
G__20076.cljs$lang$maxFixedArity = 0;
G__20076.cljs$lang$applyTo = (function (arglist__20078){
var args = cljs.core.seq(arglist__20078);
return G__20076__delegate(args);
});
G__20076.cljs$core$IFn$_invoke$arity$variadic = G__20076__delegate;
return G__20076;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.cubic_disarray.setup))?(function() { 
var G__20079__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.cubic_disarray.setup,args);
};
var G__20079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20080__i = 0, G__20080__a = new Array(arguments.length -  0);
while (G__20080__i < G__20080__a.length) {G__20080__a[G__20080__i] = arguments[G__20080__i + 0]; ++G__20080__i;}
  args = new cljs.core.IndexedSeq(G__20080__a,0,null);
} 
return G__20079__delegate.call(this,args);};
G__20079.cljs$lang$maxFixedArity = 0;
G__20079.cljs$lang$applyTo = (function (arglist__20081){
var args = cljs.core.seq(arglist__20081);
return G__20079__delegate(args);
});
G__20079.cljs$core$IFn$_invoke$arity$variadic = G__20079__delegate;
return G__20079;
})()
:sketches.generative_artistry.cubic_disarray.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_artistry.cubic_disarray.draw))?(function() { 
var G__20082__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.cubic_disarray.draw,args);
};
var G__20082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20083__i = 0, G__20083__a = new Array(arguments.length -  0);
while (G__20083__i < G__20083__a.length) {G__20083__a[G__20083__i] = arguments[G__20083__i + 0]; ++G__20083__i;}
  args = new cljs.core.IndexedSeq(G__20083__a,0,null);
} 
return G__20082__delegate.call(this,args);};
G__20082.cljs$lang$maxFixedArity = 0;
G__20082.cljs$lang$applyTo = (function (arglist__20084){
var args = cljs.core.seq(arglist__20084);
return G__20082__delegate(args);
});
G__20082.cljs$core$IFn$_invoke$arity$variadic = G__20082__delegate;
return G__20082;
})()
:sketches.generative_artistry.cubic_disarray.draw)], 0));
});
goog.exportSymbol('sketches.generative_artistry.cubic_disarray.cubic_dissary', sketches.generative_artistry.cubic_disarray.cubic_dissary);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.cubic_disarray.cubic_dissary,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20085__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20086__i = 0, G__20086__a = new Array(arguments.length -  0);
while (G__20086__i < G__20086__a.length) {G__20086__a[G__20086__i] = arguments[G__20086__i + 0]; ++G__20086__i;}
  args = new cljs.core.IndexedSeq(G__20086__a,0,null);
} 
return G__20085__delegate.call(this,args);};
G__20085.cljs$lang$maxFixedArity = 0;
G__20085.cljs$lang$applyTo = (function (arglist__20087){
var args = cljs.core.seq(arglist__20087);
return G__20085__delegate(args);
});
G__20085.cljs$core$IFn$_invoke$arity$variadic = G__20085__delegate;
return G__20085;
})()
:host)], null));
}
});
