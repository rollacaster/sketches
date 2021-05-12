// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.vectors.mouse_acceleration');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
goog.require('quil.middleware');
sketches.nature_of_code.vectors.mouse_acceleration.setup = (function sketches$nature_of_code$vectors$mouse_acceleration$setup(){
quil.core.ellipse_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
});
sketches.nature_of_code.vectors.mouse_acceleration.update_state = (function sketches$nature_of_code$vectors$mouse_acceleration$update_state(p__24115){
var map__24116 = p__24115;
var map__24116__$1 = ((((!((map__24116 == null)))?(((((map__24116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24116):map__24116);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24116__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24116__$1,cljs.core.cst$kw$location);
var distance = sketches.vector.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x(),quil.core.mouse_y()], null),location);
var acceleration = sketches.vector.mult(sketches.vector.normalize(distance),(0.001 * sketches.vector.mag(distance)));
var velocity__$1 = sketches.vector.limit(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity),(5));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,acceleration,cljs.core.cst$kw$velocity,velocity__$1,cljs.core.cst$kw$location,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(location,velocity__$1)], null);
});
sketches.nature_of_code.vectors.mouse_acceleration.draw = (function sketches$nature_of_code$vectors$mouse_acceleration$draw(p__24118){
var map__24119 = p__24118;
var map__24119__$1 = ((((!((map__24119 == null)))?(((((map__24119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24119):map__24119);
var vec__24120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24119__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24120,(1),null);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((32),(32));

return quil.core.ellipse(x,y,(32),(32));
});
sketches.nature_of_code.vectors.mouse_acceleration.run = (function sketches$nature_of_code$vectors$mouse_acceleration$run(host){
sketches.nature_of_code.vectors.mouse_acceleration.mouse_acceleration = (function sketches$nature_of_code$vectors$mouse_acceleration$run_$_mouse_acceleration(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24124__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24125__i = 0, G__24125__a = new Array(arguments.length -  0);
while (G__24125__i < G__24125__a.length) {G__24125__a[G__24125__i] = arguments[G__24125__i + 0]; ++G__24125__i;}
  args = new cljs.core.IndexedSeq(G__24125__a,0,null);
} 
return G__24124__delegate.call(this,args);};
G__24124.cljs$lang$maxFixedArity = 0;
G__24124.cljs$lang$applyTo = (function (arglist__24126){
var args = cljs.core.seq(arglist__24126);
return G__24124__delegate(args);
});
G__24124.cljs$core$IFn$_invoke$arity$variadic = G__24124__delegate;
return G__24124;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.mouse_acceleration.update_state))?(function() { 
var G__24127__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.mouse_acceleration.update_state,args);
};
var G__24127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24128__i = 0, G__24128__a = new Array(arguments.length -  0);
while (G__24128__i < G__24128__a.length) {G__24128__a[G__24128__i] = arguments[G__24128__i + 0]; ++G__24128__i;}
  args = new cljs.core.IndexedSeq(G__24128__a,0,null);
} 
return G__24127__delegate.call(this,args);};
G__24127.cljs$lang$maxFixedArity = 0;
G__24127.cljs$lang$applyTo = (function (arglist__24129){
var args = cljs.core.seq(arglist__24129);
return G__24127__delegate(args);
});
G__24127.cljs$core$IFn$_invoke$arity$variadic = G__24127__delegate;
return G__24127;
})()
:sketches.nature_of_code.vectors.mouse_acceleration.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.mouse_acceleration.setup))?(function() { 
var G__24130__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.mouse_acceleration.setup,args);
};
var G__24130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24131__i = 0, G__24131__a = new Array(arguments.length -  0);
while (G__24131__i < G__24131__a.length) {G__24131__a[G__24131__i] = arguments[G__24131__i + 0]; ++G__24131__i;}
  args = new cljs.core.IndexedSeq(G__24131__a,0,null);
} 
return G__24130__delegate.call(this,args);};
G__24130.cljs$lang$maxFixedArity = 0;
G__24130.cljs$lang$applyTo = (function (arglist__24132){
var args = cljs.core.seq(arglist__24132);
return G__24130__delegate(args);
});
G__24130.cljs$core$IFn$_invoke$arity$variadic = G__24130__delegate;
return G__24130;
})()
:sketches.nature_of_code.vectors.mouse_acceleration.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.mouse_acceleration.draw))?(function() { 
var G__24133__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.mouse_acceleration.draw,args);
};
var G__24133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24134__i = 0, G__24134__a = new Array(arguments.length -  0);
while (G__24134__i < G__24134__a.length) {G__24134__a[G__24134__i] = arguments[G__24134__i + 0]; ++G__24134__i;}
  args = new cljs.core.IndexedSeq(G__24134__a,0,null);
} 
return G__24133__delegate.call(this,args);};
G__24133.cljs$lang$maxFixedArity = 0;
G__24133.cljs$lang$applyTo = (function (arglist__24135){
var args = cljs.core.seq(arglist__24135);
return G__24133__delegate(args);
});
G__24133.cljs$core$IFn$_invoke$arity$variadic = G__24133__delegate;
return G__24133;
})()
:sketches.nature_of_code.vectors.mouse_acceleration.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.vectors.mouse_acceleration.mouse_acceleration', sketches.nature_of_code.vectors.mouse_acceleration.mouse_acceleration);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.vectors.mouse_acceleration.mouse_acceleration,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24136__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24137__i = 0, G__24137__a = new Array(arguments.length -  0);
while (G__24137__i < G__24137__a.length) {G__24137__a[G__24137__i] = arguments[G__24137__i + 0]; ++G__24137__i;}
  args = new cljs.core.IndexedSeq(G__24137__a,0,null);
} 
return G__24136__delegate.call(this,args);};
G__24136.cljs$lang$maxFixedArity = 0;
G__24136.cljs$lang$applyTo = (function (arglist__24138){
var args = cljs.core.seq(arglist__24138);
return G__24136__delegate(args);
});
G__24136.cljs$core$IFn$_invoke$arity$variadic = G__24136__delegate;
return G__24136;
})()
:host)], null));
}
});
