// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.random_walk');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.introduction.random_walk.setup = (function sketches$nature_of_code$introduction$random_walk$setup(){
sketches.nature_of_code.introduction.random_walk.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.random_walk.draw = (function sketches$nature_of_code$introduction$random_walk$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var choice = quil.core.random.cljs$core$IFn$_invoke$arity$1((1));
var velocity = (((choice < 0.33))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):(((choice < 0.66))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null):(((choice < 0.84))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null):(((choice < 1.0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null):null))));
var vec__21155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk.location,((function (choice,velocity){
return (function (p1__21154_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__21154_SHARP_,velocity);
});})(choice,velocity))
);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21155,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21155,(1),null);
return quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
sketches.nature_of_code.introduction.random_walk.run = (function sketches$nature_of_code$introduction$random_walk$run(host){
sketches.nature_of_code.introduction.random_walk.random_walk = (function sketches$nature_of_code$introduction$random_walk$run_$_random_walk(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21158__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21159__i = 0, G__21159__a = new Array(arguments.length -  0);
while (G__21159__i < G__21159__a.length) {G__21159__a[G__21159__i] = arguments[G__21159__i + 0]; ++G__21159__i;}
  args = new cljs.core.IndexedSeq(G__21159__a,0,null);
} 
return G__21158__delegate.call(this,args);};
G__21158.cljs$lang$maxFixedArity = 0;
G__21158.cljs$lang$applyTo = (function (arglist__21160){
var args = cljs.core.seq(arglist__21160);
return G__21158__delegate(args);
});
G__21158.cljs$core$IFn$_invoke$arity$variadic = G__21158__delegate;
return G__21158;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk.setup))?(function() { 
var G__21161__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk.setup,args);
};
var G__21161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21162__i = 0, G__21162__a = new Array(arguments.length -  0);
while (G__21162__i < G__21162__a.length) {G__21162__a[G__21162__i] = arguments[G__21162__i + 0]; ++G__21162__i;}
  args = new cljs.core.IndexedSeq(G__21162__a,0,null);
} 
return G__21161__delegate.call(this,args);};
G__21161.cljs$lang$maxFixedArity = 0;
G__21161.cljs$lang$applyTo = (function (arglist__21163){
var args = cljs.core.seq(arglist__21163);
return G__21161__delegate(args);
});
G__21161.cljs$core$IFn$_invoke$arity$variadic = G__21161__delegate;
return G__21161;
})()
:sketches.nature_of_code.introduction.random_walk.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk.draw))?(function() { 
var G__21164__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk.draw,args);
};
var G__21164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21165__i = 0, G__21165__a = new Array(arguments.length -  0);
while (G__21165__i < G__21165__a.length) {G__21165__a[G__21165__i] = arguments[G__21165__i + 0]; ++G__21165__i;}
  args = new cljs.core.IndexedSeq(G__21165__a,0,null);
} 
return G__21164__delegate.call(this,args);};
G__21164.cljs$lang$maxFixedArity = 0;
G__21164.cljs$lang$applyTo = (function (arglist__21166){
var args = cljs.core.seq(arglist__21166);
return G__21164__delegate(args);
});
G__21164.cljs$core$IFn$_invoke$arity$variadic = G__21164__delegate;
return G__21164;
})()
:sketches.nature_of_code.introduction.random_walk.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.random_walk.random_walk', sketches.nature_of_code.introduction.random_walk.random_walk);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.random_walk.random_walk,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21167__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21168__i = 0, G__21168__a = new Array(arguments.length -  0);
while (G__21168__i < G__21168__a.length) {G__21168__a[G__21168__i] = arguments[G__21168__i + 0]; ++G__21168__i;}
  args = new cljs.core.IndexedSeq(G__21168__a,0,null);
} 
return G__21167__delegate.call(this,args);};
G__21167.cljs$lang$maxFixedArity = 0;
G__21167.cljs$lang$applyTo = (function (arglist__21169){
var args = cljs.core.seq(arglist__21169);
return G__21167__delegate(args);
});
G__21167.cljs$core$IFn$_invoke$arity$variadic = G__21167__delegate;
return G__21167;
})()
:host)], null));
}
});
