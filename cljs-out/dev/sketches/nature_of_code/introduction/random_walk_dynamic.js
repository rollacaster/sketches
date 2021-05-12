// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.random_walk_dynamic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.introduction.random_walk_dynamic.setup = (function sketches$nature_of_code$introduction$random_walk_dynamic$setup(){
sketches.nature_of_code.introduction.random_walk_dynamic.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.random_walk_dynamic.draw = (function sketches$nature_of_code$introduction$random_walk_dynamic$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

var choice = quil.core.random.cljs$core$IFn$_invoke$arity$1((1));
var vec__17902 = cljs.core.deref(sketches.nature_of_code.introduction.random_walk_dynamic.location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(1),null);
var velocity = (((choice < 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.mouse_x()))?(-1):(1)),(((y > quil.core.mouse_y()))?(-1):(1))], null):(((choice < 0.625))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):(((choice < 0.75))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null):(((choice < 0.875))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null):(((choice < 1.0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null):null)))));
var vec__17905 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_dynamic.location,((function (choice,vec__17902,x,y,velocity){
return (function (p1__17901_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__17901_SHARP_,velocity);
});})(choice,vec__17902,x,y,velocity))
);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17905,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17905,(1),null);
return quil.core.point.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1);
});
sketches.nature_of_code.introduction.random_walk_dynamic.run = (function sketches$nature_of_code$introduction$random_walk_dynamic$run(host){
sketches.nature_of_code.introduction.random_walk_dynamic.random_walk_dynamic = (function sketches$nature_of_code$introduction$random_walk_dynamic$run_$_random_walk_dynamic(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17908__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17909__i = 0, G__17909__a = new Array(arguments.length -  0);
while (G__17909__i < G__17909__a.length) {G__17909__a[G__17909__i] = arguments[G__17909__i + 0]; ++G__17909__i;}
  args = new cljs.core.IndexedSeq(G__17909__a,0,null);
} 
return G__17908__delegate.call(this,args);};
G__17908.cljs$lang$maxFixedArity = 0;
G__17908.cljs$lang$applyTo = (function (arglist__17910){
var args = cljs.core.seq(arglist__17910);
return G__17908__delegate(args);
});
G__17908.cljs$core$IFn$_invoke$arity$variadic = G__17908__delegate;
return G__17908;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_dynamic.setup))?(function() { 
var G__17911__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_dynamic.setup,args);
};
var G__17911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17912__i = 0, G__17912__a = new Array(arguments.length -  0);
while (G__17912__i < G__17912__a.length) {G__17912__a[G__17912__i] = arguments[G__17912__i + 0]; ++G__17912__i;}
  args = new cljs.core.IndexedSeq(G__17912__a,0,null);
} 
return G__17911__delegate.call(this,args);};
G__17911.cljs$lang$maxFixedArity = 0;
G__17911.cljs$lang$applyTo = (function (arglist__17913){
var args = cljs.core.seq(arglist__17913);
return G__17911__delegate(args);
});
G__17911.cljs$core$IFn$_invoke$arity$variadic = G__17911__delegate;
return G__17911;
})()
:sketches.nature_of_code.introduction.random_walk_dynamic.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.random_walk_dynamic.draw))?(function() { 
var G__17914__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.random_walk_dynamic.draw,args);
};
var G__17914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17915__i = 0, G__17915__a = new Array(arguments.length -  0);
while (G__17915__i < G__17915__a.length) {G__17915__a[G__17915__i] = arguments[G__17915__i + 0]; ++G__17915__i;}
  args = new cljs.core.IndexedSeq(G__17915__a,0,null);
} 
return G__17914__delegate.call(this,args);};
G__17914.cljs$lang$maxFixedArity = 0;
G__17914.cljs$lang$applyTo = (function (arglist__17916){
var args = cljs.core.seq(arglist__17916);
return G__17914__delegate(args);
});
G__17914.cljs$core$IFn$_invoke$arity$variadic = G__17914__delegate;
return G__17914;
})()
:sketches.nature_of_code.introduction.random_walk_dynamic.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.random_walk_dynamic.random_walk_dynamic', sketches.nature_of_code.introduction.random_walk_dynamic.random_walk_dynamic);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.random_walk_dynamic.random_walk_dynamic,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17917__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17918__i = 0, G__17918__a = new Array(arguments.length -  0);
while (G__17918__i < G__17918__a.length) {G__17918__a[G__17918__i] = arguments[G__17918__i + 0]; ++G__17918__i;}
  args = new cljs.core.IndexedSeq(G__17918__a,0,null);
} 
return G__17917__delegate.call(this,args);};
G__17917.cljs$lang$maxFixedArity = 0;
G__17917.cljs$lang$applyTo = (function (arglist__17919){
var args = cljs.core.seq(arglist__17919);
return G__17917__delegate(args);
});
G__17917.cljs$core$IFn$_invoke$arity$variadic = G__17917__delegate;
return G__17917;
})()
:host)], null));
}
});
