// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_01.P_1_0_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_01.P_1_0_01.setup = (function sketches$generative_desgin$P_01$P_1_0_01$setup(){
quil.core.no_cursor();

quil.core.color_mode.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hsb,(360),(100),(100));

quil.core.rect_mode(cljs.core.cst$kw$center);

return quil.core.no_stroke();
});
sketches.generative_desgin.P_01.P_1_0_01.update_state = (function sketches$generative_desgin$P_01$P_1_0_01$update_state(){
return null;
});
sketches.generative_desgin.P_01.P_1_0_01.draw = (function sketches$generative_desgin$P_01$P_1_0_01$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(quil.core.mouse_y(),(0),(300),(0),(360)),(100),(100));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(((360) - quil.core.map_range(quil.core.mouse_y(),(0),(300),(0),(360))),(100),(100));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((150),(150),(quil.core.mouse_x() + (1)),(quil.core.mouse_x() + (1)));
});
sketches.generative_desgin.P_01.P_1_0_01.run = (function sketches$generative_desgin$P_01$P_1_0_01$run(host){
sketches.generative_desgin.P_01.P_1_0_01.p1001 = (function sketches$generative_desgin$P_01$P_1_0_01$run_$_p1001(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19633__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19634__i = 0, G__19634__a = new Array(arguments.length -  0);
while (G__19634__i < G__19634__a.length) {G__19634__a[G__19634__i] = arguments[G__19634__i + 0]; ++G__19634__i;}
  args = new cljs.core.IndexedSeq(G__19634__a,0,null);
} 
return G__19633__delegate.call(this,args);};
G__19633.cljs$lang$maxFixedArity = 0;
G__19633.cljs$lang$applyTo = (function (arglist__19635){
var args = cljs.core.seq(arglist__19635);
return G__19633__delegate(args);
});
G__19633.cljs$core$IFn$_invoke$arity$variadic = G__19633__delegate;
return G__19633;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_0_01.update_state))?(function() { 
var G__19636__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_0_01.update_state,args);
};
var G__19636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19637__i = 0, G__19637__a = new Array(arguments.length -  0);
while (G__19637__i < G__19637__a.length) {G__19637__a[G__19637__i] = arguments[G__19637__i + 0]; ++G__19637__i;}
  args = new cljs.core.IndexedSeq(G__19637__a,0,null);
} 
return G__19636__delegate.call(this,args);};
G__19636.cljs$lang$maxFixedArity = 0;
G__19636.cljs$lang$applyTo = (function (arglist__19638){
var args = cljs.core.seq(arglist__19638);
return G__19636__delegate(args);
});
G__19636.cljs$core$IFn$_invoke$arity$variadic = G__19636__delegate;
return G__19636;
})()
:sketches.generative_desgin.P_01.P_1_0_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_0_01.setup))?(function() { 
var G__19639__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_0_01.setup,args);
};
var G__19639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19640__i = 0, G__19640__a = new Array(arguments.length -  0);
while (G__19640__i < G__19640__a.length) {G__19640__a[G__19640__i] = arguments[G__19640__i + 0]; ++G__19640__i;}
  args = new cljs.core.IndexedSeq(G__19640__a,0,null);
} 
return G__19639__delegate.call(this,args);};
G__19639.cljs$lang$maxFixedArity = 0;
G__19639.cljs$lang$applyTo = (function (arglist__19641){
var args = cljs.core.seq(arglist__19641);
return G__19639__delegate(args);
});
G__19639.cljs$core$IFn$_invoke$arity$variadic = G__19639__delegate;
return G__19639;
})()
:sketches.generative_desgin.P_01.P_1_0_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_0_01.draw))?(function() { 
var G__19642__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_0_01.draw,args);
};
var G__19642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19643__i = 0, G__19643__a = new Array(arguments.length -  0);
while (G__19643__i < G__19643__a.length) {G__19643__a[G__19643__i] = arguments[G__19643__i + 0]; ++G__19643__i;}
  args = new cljs.core.IndexedSeq(G__19643__a,0,null);
} 
return G__19642__delegate.call(this,args);};
G__19642.cljs$lang$maxFixedArity = 0;
G__19642.cljs$lang$applyTo = (function (arglist__19644){
var args = cljs.core.seq(arglist__19644);
return G__19642__delegate(args);
});
G__19642.cljs$core$IFn$_invoke$arity$variadic = G__19642__delegate;
return G__19642;
})()
:sketches.generative_desgin.P_01.P_1_0_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_01.P_1_0_01.p1001', sketches.generative_desgin.P_01.P_1_0_01.p1001);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_01.P_1_0_01.p1001,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19645__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19646__i = 0, G__19646__a = new Array(arguments.length -  0);
while (G__19646__i < G__19646__a.length) {G__19646__a[G__19646__i] = arguments[G__19646__i + 0]; ++G__19646__i;}
  args = new cljs.core.IndexedSeq(G__19646__a,0,null);
} 
return G__19645__delegate.call(this,args);};
G__19645.cljs$lang$maxFixedArity = 0;
G__19645.cljs$lang$applyTo = (function (arglist__19647){
var args = cljs.core.seq(arglist__19647);
return G__19645__delegate(args);
});
G__19645.cljs$core$IFn$_invoke$arity$variadic = G__19645__delegate;
return G__19645;
})()
:host)], null));
}
});
