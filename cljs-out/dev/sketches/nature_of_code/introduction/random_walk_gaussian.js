// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.random_walk_gaussian');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.introduction.random_walk_gaussian.setup = (function sketches$nature_of_code$introduction$random_walk_gaussian$setup(){
sketches.nature_of_code.introduction.random_walk_gaussian.walker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150)], null));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.random_walk_gaussian.draw = (function sketches$nature_of_code$introduction$random_walk_gaussian$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.point.cljs$core$IFn$_invoke$arity$2((150),(150));

var choice = cljs.core.rand_int((4));
var step = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * (5)),(0)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(quil.core.random_gaussian() * (5))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (quil.core.random_gaussian() * (5))),(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- (quil.core.random_gaussian() * (5)))], null)
)));
var vec__21137 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_gaussian.walker,((function (choice,step){
return (function (walker){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(walker,step);
});})(choice,step))
);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(1),null);
return quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
sketches.nature_of_code.introduction.random_walk_gaussian.run = (function sketches$nature_of_code$introduction$random_walk_gaussian$run(host){
sketches.nature_of_code.introduction.random_walk_gaussian.random_walk_gaussian = (function sketches$nature_of_code$introduction$random_walk_gaussian$run_$_random_walk_gaussian(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21140__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21141__i = 0, G__21141__a = new Array(arguments.length -  0);
while (G__21141__i < G__21141__a.length) {G__21141__a[G__21141__i] = arguments[G__21141__i + 0]; ++G__21141__i;}
  args = new cljs.core.IndexedSeq(G__21141__a,0,null);
} 
return G__21140__delegate.call(this,args);};
G__21140.cljs$lang$maxFixedArity = 0;
G__21140.cljs$lang$applyTo = (function (arglist__21142){
var args = cljs.core.seq(arglist__21142);
return G__21140__delegate(args);
});
G__21140.cljs$core$IFn$_invoke$arity$variadic = G__21140__delegate;
return G__21140;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_gaussian.setup))?(function() { 
var G__21143__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_gaussian.setup,args);
};
var G__21143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21144__i = 0, G__21144__a = new Array(arguments.length -  0);
while (G__21144__i < G__21144__a.length) {G__21144__a[G__21144__i] = arguments[G__21144__i + 0]; ++G__21144__i;}
  args = new cljs.core.IndexedSeq(G__21144__a,0,null);
} 
return G__21143__delegate.call(this,args);};
G__21143.cljs$lang$maxFixedArity = 0;
G__21143.cljs$lang$applyTo = (function (arglist__21145){
var args = cljs.core.seq(arglist__21145);
return G__21143__delegate(args);
});
G__21143.cljs$core$IFn$_invoke$arity$variadic = G__21143__delegate;
return G__21143;
})()
:sketches.nature_of_code.introduction.random_walk_gaussian.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_gaussian.draw))?(function() { 
var G__21146__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_gaussian.draw,args);
};
var G__21146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21147__i = 0, G__21147__a = new Array(arguments.length -  0);
while (G__21147__i < G__21147__a.length) {G__21147__a[G__21147__i] = arguments[G__21147__i + 0]; ++G__21147__i;}
  args = new cljs.core.IndexedSeq(G__21147__a,0,null);
} 
return G__21146__delegate.call(this,args);};
G__21146.cljs$lang$maxFixedArity = 0;
G__21146.cljs$lang$applyTo = (function (arglist__21148){
var args = cljs.core.seq(arglist__21148);
return G__21146__delegate(args);
});
G__21146.cljs$core$IFn$_invoke$arity$variadic = G__21146__delegate;
return G__21146;
})()
:sketches.nature_of_code.introduction.random_walk_gaussian.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.random_walk_gaussian.random_walk_gaussian', sketches.nature_of_code.introduction.random_walk_gaussian.random_walk_gaussian);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.random_walk_gaussian.random_walk_gaussian,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21149__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21150__i = 0, G__21150__a = new Array(arguments.length -  0);
while (G__21150__i < G__21150__a.length) {G__21150__a[G__21150__i] = arguments[G__21150__i + 0]; ++G__21150__i;}
  args = new cljs.core.IndexedSeq(G__21150__a,0,null);
} 
return G__21149__delegate.call(this,args);};
G__21149.cljs$lang$maxFixedArity = 0;
G__21149.cljs$lang$applyTo = (function (arglist__21151){
var args = cljs.core.seq(arglist__21151);
return G__21149__delegate(args);
});
G__21149.cljs$core$IFn$_invoke$arity$variadic = G__21149__delegate;
return G__21149;
})()
:host)], null));
}
});
