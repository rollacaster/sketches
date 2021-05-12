// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.random_walk_custom_step');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.introduction.random_walk_custom_step.setup = (function sketches$nature_of_code$introduction$random_walk_custom_step$setup(){
sketches.nature_of_code.introduction.random_walk_custom_step.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.random_walk_custom_step.custom_prop = (function sketches$nature_of_code$introduction$random_walk_custom_step$custom_prop(){
while(true){
var r1 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1));
var r2 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1));
if((r1 < (r2 * r2))){
return r2;
} else {
continue;
}
break;
}
});
sketches.nature_of_code.introduction.random_walk_custom_step.draw = (function sketches$nature_of_code$introduction$random_walk_custom_step$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var choice = quil.core.random.cljs$core$IFn$_invoke$arity$1((1));
var step_size = sketches.nature_of_code.introduction.random_walk_custom_step.custom_prop();
var velocity = (((choice < 0.25))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),step_size], null):(((choice < 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [step_size,(0)], null):(((choice < 0.75))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- step_size),(0)], null):(((choice < 1.0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- step_size)], null):null))));
var vec__21120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_custom_step.location,((function (choice,step_size,velocity){
return (function (p1__21119_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__21119_SHARP_,velocity);
});})(choice,step_size,velocity))
);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120,(1),null);
return quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
sketches.nature_of_code.introduction.random_walk_custom_step.run = (function sketches$nature_of_code$introduction$random_walk_custom_step$run(host){
sketches.nature_of_code.introduction.random_walk_custom_step.random_walk_custom_step = (function sketches$nature_of_code$introduction$random_walk_custom_step$run_$_random_walk_custom_step(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21123__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21124__i = 0, G__21124__a = new Array(arguments.length -  0);
while (G__21124__i < G__21124__a.length) {G__21124__a[G__21124__i] = arguments[G__21124__i + 0]; ++G__21124__i;}
  args = new cljs.core.IndexedSeq(G__21124__a,0,null);
} 
return G__21123__delegate.call(this,args);};
G__21123.cljs$lang$maxFixedArity = 0;
G__21123.cljs$lang$applyTo = (function (arglist__21125){
var args = cljs.core.seq(arglist__21125);
return G__21123__delegate(args);
});
G__21123.cljs$core$IFn$_invoke$arity$variadic = G__21123__delegate;
return G__21123;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_custom_step.setup))?(function() { 
var G__21126__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_custom_step.setup,args);
};
var G__21126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21127__i = 0, G__21127__a = new Array(arguments.length -  0);
while (G__21127__i < G__21127__a.length) {G__21127__a[G__21127__i] = arguments[G__21127__i + 0]; ++G__21127__i;}
  args = new cljs.core.IndexedSeq(G__21127__a,0,null);
} 
return G__21126__delegate.call(this,args);};
G__21126.cljs$lang$maxFixedArity = 0;
G__21126.cljs$lang$applyTo = (function (arglist__21128){
var args = cljs.core.seq(arglist__21128);
return G__21126__delegate(args);
});
G__21126.cljs$core$IFn$_invoke$arity$variadic = G__21126__delegate;
return G__21126;
})()
:sketches.nature_of_code.introduction.random_walk_custom_step.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_custom_step.draw))?(function() { 
var G__21129__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_custom_step.draw,args);
};
var G__21129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21130__i = 0, G__21130__a = new Array(arguments.length -  0);
while (G__21130__i < G__21130__a.length) {G__21130__a[G__21130__i] = arguments[G__21130__i + 0]; ++G__21130__i;}
  args = new cljs.core.IndexedSeq(G__21130__a,0,null);
} 
return G__21129__delegate.call(this,args);};
G__21129.cljs$lang$maxFixedArity = 0;
G__21129.cljs$lang$applyTo = (function (arglist__21131){
var args = cljs.core.seq(arglist__21131);
return G__21129__delegate(args);
});
G__21129.cljs$core$IFn$_invoke$arity$variadic = G__21129__delegate;
return G__21129;
})()
:sketches.nature_of_code.introduction.random_walk_custom_step.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.random_walk_custom_step.random_walk_custom_step', sketches.nature_of_code.introduction.random_walk_custom_step.random_walk_custom_step);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.random_walk_custom_step.random_walk_custom_step,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21132__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21133__i = 0, G__21133__a = new Array(arguments.length -  0);
while (G__21133__i < G__21133__a.length) {G__21133__a[G__21133__i] = arguments[G__21133__i + 0]; ++G__21133__i;}
  args = new cljs.core.IndexedSeq(G__21133__a,0,null);
} 
return G__21132__delegate.call(this,args);};
G__21132.cljs$lang$maxFixedArity = 0;
G__21132.cljs$lang$applyTo = (function (arglist__21134){
var args = cljs.core.seq(arglist__21134);
return G__21132__delegate(args);
});
G__21132.cljs$core$IFn$_invoke$arity$variadic = G__21132__delegate;
return G__21132;
})()
:host)], null));
}
});
