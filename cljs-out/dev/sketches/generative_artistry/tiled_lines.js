// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.tiled_lines');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_artistry.tiled_lines.setup = (function sketches$generative_artistry$tiled_lines$setup(){
return null;
});
sketches.generative_artistry.tiled_lines.draw = (function sketches$generative_artistry$tiled_lines$draw(){
quil.core.no_loop();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var step = (30);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (xStep){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (yStep){
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(xStep,yStep);

var is_inverted_20780 = (0.5 < quil.core.random.cljs$core$IFn$_invoke$arity$1((1)));
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.line,((is_inverted_20780)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),step,step], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [step,(0),(0),step], null)));

return quil.core.pop_matrix();
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.height(),step)));
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),step)));
});
sketches.generative_artistry.tiled_lines.run = (function sketches$generative_artistry$tiled_lines$run(host){
sketches.generative_artistry.tiled_lines.tiledLines = (function sketches$generative_artistry$tiled_lines$run_$_tiledLines(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20781__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20782__i = 0, G__20782__a = new Array(arguments.length -  0);
while (G__20782__i < G__20782__a.length) {G__20782__a[G__20782__i] = arguments[G__20782__i + 0]; ++G__20782__i;}
  args = new cljs.core.IndexedSeq(G__20782__a,0,null);
} 
return G__20781__delegate.call(this,args);};
G__20781.cljs$lang$maxFixedArity = 0;
G__20781.cljs$lang$applyTo = (function (arglist__20783){
var args = cljs.core.seq(arglist__20783);
return G__20781__delegate(args);
});
G__20781.cljs$core$IFn$_invoke$arity$variadic = G__20781__delegate;
return G__20781;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.tiled_lines.setup))?(function() { 
var G__20784__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.tiled_lines.setup,args);
};
var G__20784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20785__i = 0, G__20785__a = new Array(arguments.length -  0);
while (G__20785__i < G__20785__a.length) {G__20785__a[G__20785__i] = arguments[G__20785__i + 0]; ++G__20785__i;}
  args = new cljs.core.IndexedSeq(G__20785__a,0,null);
} 
return G__20784__delegate.call(this,args);};
G__20784.cljs$lang$maxFixedArity = 0;
G__20784.cljs$lang$applyTo = (function (arglist__20786){
var args = cljs.core.seq(arglist__20786);
return G__20784__delegate(args);
});
G__20784.cljs$core$IFn$_invoke$arity$variadic = G__20784__delegate;
return G__20784;
})()
:sketches.generative_artistry.tiled_lines.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_artistry.tiled_lines.draw))?(function() { 
var G__20787__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.tiled_lines.draw,args);
};
var G__20787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20788__i = 0, G__20788__a = new Array(arguments.length -  0);
while (G__20788__i < G__20788__a.length) {G__20788__a[G__20788__i] = arguments[G__20788__i + 0]; ++G__20788__i;}
  args = new cljs.core.IndexedSeq(G__20788__a,0,null);
} 
return G__20787__delegate.call(this,args);};
G__20787.cljs$lang$maxFixedArity = 0;
G__20787.cljs$lang$applyTo = (function (arglist__20789){
var args = cljs.core.seq(arglist__20789);
return G__20787__delegate(args);
});
G__20787.cljs$core$IFn$_invoke$arity$variadic = G__20787__delegate;
return G__20787;
})()
:sketches.generative_artistry.tiled_lines.draw)], 0));
});
goog.exportSymbol('sketches.generative_artistry.tiled_lines.tiledLines', sketches.generative_artistry.tiled_lines.tiledLines);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.tiled_lines.tiledLines,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20790__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20791__i = 0, G__20791__a = new Array(arguments.length -  0);
while (G__20791__i < G__20791__a.length) {G__20791__a[G__20791__i] = arguments[G__20791__i + 0]; ++G__20791__i;}
  args = new cljs.core.IndexedSeq(G__20791__a,0,null);
} 
return G__20790__delegate.call(this,args);};
G__20790.cljs$lang$maxFixedArity = 0;
G__20790.cljs$lang$applyTo = (function (arglist__20792){
var args = cljs.core.seq(arglist__20792);
return G__20790__delegate(args);
});
G__20790.cljs$core$IFn$_invoke$arity$variadic = G__20790__delegate;
return G__20790;
})()
:host)], null));
}
});
