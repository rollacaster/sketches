// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.paint_splatter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.introduction.paint_splatter.draw = (function sketches$nature_of_code$introduction$paint_splatter$draw(){
var sd = (100);
var mean = (quil.core.width() / (2));
var x = ((quil.core.random_gaussian() * sd) + mean);
var y = ((quil.core.random_gaussian() * sd) + mean);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(((quil.core.random_gaussian() * (50)) + (128)),((quil.core.random_gaussian() * (50)) + (128)),((quil.core.random_gaussian() * (50)) + (255)));

return quil.core.ellipse(x,y,(10),(10));
});
sketches.nature_of_code.introduction.paint_splatter.run = (function sketches$nature_of_code$introduction$paint_splatter$run(host){
sketches.nature_of_code.introduction.paint_splatter.paint_splatter = (function sketches$nature_of_code$introduction$paint_splatter$run_$_paint_splatter(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17980__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17981__i = 0, G__17981__a = new Array(arguments.length -  0);
while (G__17981__i < G__17981__a.length) {G__17981__a[G__17981__i] = arguments[G__17981__i + 0]; ++G__17981__i;}
  args = new cljs.core.IndexedSeq(G__17981__a,0,null);
} 
return G__17980__delegate.call(this,args);};
G__17980.cljs$lang$maxFixedArity = 0;
G__17980.cljs$lang$applyTo = (function (arglist__17982){
var args = cljs.core.seq(arglist__17982);
return G__17980__delegate(args);
});
G__17980.cljs$core$IFn$_invoke$arity$variadic = G__17980__delegate;
return G__17980;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.paint_splatter.draw))?(function() { 
var G__17983__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.paint_splatter.draw,args);
};
var G__17983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17984__i = 0, G__17984__a = new Array(arguments.length -  0);
while (G__17984__i < G__17984__a.length) {G__17984__a[G__17984__i] = arguments[G__17984__i + 0]; ++G__17984__i;}
  args = new cljs.core.IndexedSeq(G__17984__a,0,null);
} 
return G__17983__delegate.call(this,args);};
G__17983.cljs$lang$maxFixedArity = 0;
G__17983.cljs$lang$applyTo = (function (arglist__17985){
var args = cljs.core.seq(arglist__17985);
return G__17983__delegate(args);
});
G__17983.cljs$core$IFn$_invoke$arity$variadic = G__17983__delegate;
return G__17983;
})()
:sketches.nature_of_code.introduction.paint_splatter.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.paint_splatter.paint_splatter', sketches.nature_of_code.introduction.paint_splatter.paint_splatter);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.paint_splatter.paint_splatter,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17986__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17987__i = 0, G__17987__a = new Array(arguments.length -  0);
while (G__17987__i < G__17987__a.length) {G__17987__a[G__17987__i] = arguments[G__17987__i + 0]; ++G__17987__i;}
  args = new cljs.core.IndexedSeq(G__17987__a,0,null);
} 
return G__17986__delegate.call(this,args);};
G__17986.cljs$lang$maxFixedArity = 0;
G__17986.cljs$lang$applyTo = (function (arglist__17988){
var args = cljs.core.seq(arglist__17988);
return G__17986__delegate(args);
});
G__17986.cljs$core$IFn$_invoke$arity$variadic = G__17986__delegate;
return G__17986;
})()
:host)], null));
}
});
