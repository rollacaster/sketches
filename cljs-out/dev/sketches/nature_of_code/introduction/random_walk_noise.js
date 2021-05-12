// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.random_walk_noise');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.introduction.random_walk_noise.setup = (function sketches$nature_of_code$introduction$random_walk_noise$setup(){
sketches.nature_of_code.introduction.random_walk_noise.walker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));

sketches.nature_of_code.introduction.random_walk_noise.tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.random_walk_noise.draw = (function sketches$nature_of_code$introduction$random_walk_noise$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var tx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_noise.tx,(function (p1__17961_SHARP_){
return (0.01 + p1__17961_SHARP_);
}));
var choice = cljs.core.rand_int((4));
var step = quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$1(tx),(0),(1),(0),(10));
var new_position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),step], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [step,(0)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- step),(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- step)], null)
)));
var vec__17963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_noise.walker,((function (tx,choice,step,new_position){
return (function (p1__17962_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__17962_SHARP_,new_position);
});})(tx,choice,step,new_position))
);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(1),null);
return quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
sketches.nature_of_code.introduction.random_walk_noise.run = (function sketches$nature_of_code$introduction$random_walk_noise$run(host){
sketches.nature_of_code.introduction.random_walk_noise.random_walk_noise = (function sketches$nature_of_code$introduction$random_walk_noise$run_$_random_walk_noise(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17966__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17967__i = 0, G__17967__a = new Array(arguments.length -  0);
while (G__17967__i < G__17967__a.length) {G__17967__a[G__17967__i] = arguments[G__17967__i + 0]; ++G__17967__i;}
  args = new cljs.core.IndexedSeq(G__17967__a,0,null);
} 
return G__17966__delegate.call(this,args);};
G__17966.cljs$lang$maxFixedArity = 0;
G__17966.cljs$lang$applyTo = (function (arglist__17968){
var args = cljs.core.seq(arglist__17968);
return G__17966__delegate(args);
});
G__17966.cljs$core$IFn$_invoke$arity$variadic = G__17966__delegate;
return G__17966;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_noise.setup))?(function() { 
var G__17969__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_noise.setup,args);
};
var G__17969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17970__i = 0, G__17970__a = new Array(arguments.length -  0);
while (G__17970__i < G__17970__a.length) {G__17970__a[G__17970__i] = arguments[G__17970__i + 0]; ++G__17970__i;}
  args = new cljs.core.IndexedSeq(G__17970__a,0,null);
} 
return G__17969__delegate.call(this,args);};
G__17969.cljs$lang$maxFixedArity = 0;
G__17969.cljs$lang$applyTo = (function (arglist__17971){
var args = cljs.core.seq(arglist__17971);
return G__17969__delegate(args);
});
G__17969.cljs$core$IFn$_invoke$arity$variadic = G__17969__delegate;
return G__17969;
})()
:sketches.nature_of_code.introduction.random_walk_noise.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_noise.draw))?(function() { 
var G__17972__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_noise.draw,args);
};
var G__17972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17973__i = 0, G__17973__a = new Array(arguments.length -  0);
while (G__17973__i < G__17973__a.length) {G__17973__a[G__17973__i] = arguments[G__17973__i + 0]; ++G__17973__i;}
  args = new cljs.core.IndexedSeq(G__17973__a,0,null);
} 
return G__17972__delegate.call(this,args);};
G__17972.cljs$lang$maxFixedArity = 0;
G__17972.cljs$lang$applyTo = (function (arglist__17974){
var args = cljs.core.seq(arglist__17974);
return G__17972__delegate(args);
});
G__17972.cljs$core$IFn$_invoke$arity$variadic = G__17972__delegate;
return G__17972;
})()
:sketches.nature_of_code.introduction.random_walk_noise.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.random_walk_noise.random_walk_noise', sketches.nature_of_code.introduction.random_walk_noise.random_walk_noise);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.random_walk_noise.random_walk_noise,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17975__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17976__i = 0, G__17976__a = new Array(arguments.length -  0);
while (G__17976__i < G__17976__a.length) {G__17976__a[G__17976__i] = arguments[G__17976__i + 0]; ++G__17976__i;}
  args = new cljs.core.IndexedSeq(G__17976__a,0,null);
} 
return G__17975__delegate.call(this,args);};
G__17975.cljs$lang$maxFixedArity = 0;
G__17975.cljs$lang$applyTo = (function (arglist__17977){
var args = cljs.core.seq(arglist__17977);
return G__17975__delegate(args);
});
G__17975.cljs$core$IFn$_invoke$arity$variadic = G__17975__delegate;
return G__17975;
})()
:host)], null));
}
});
