// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_03.P_3_0_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_03.P_3_0_01.setup = (function sketches$generative_desgin$P_03$P_3_0_01$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.text_font.cljs$core$IFn$_invoke$arity$1("sans-serif");

quil.core.text_align.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$center,cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$letter,"A"], null);
});
sketches.generative_desgin.P_03.P_3_0_01.mouse_moved = (function sketches$generative_desgin$P_03$P_3_0_01$mouse_moved(state,_){
quil.core.clear();

quil.core.text_size((((quil.core.mouse_x() - (quil.core.width() / (2))) * (5)) + (1)));

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$letter.cljs$core$IFn$_invoke$arity$1(state),(quil.core.width() / (2)),quil.core.mouse_y());

return state;
});
sketches.generative_desgin.P_03.P_3_0_01.mouse_dragged = (function sketches$generative_desgin$P_03$P_3_0_01$mouse_dragged(state,_){
quil.core.text_size((((quil.core.mouse_x() - (quil.core.width() / (2))) * (5)) + (1)));

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$letter.cljs$core$IFn$_invoke$arity$1(state),(quil.core.width() / (2)),quil.core.mouse_y());

return state;
});
sketches.generative_desgin.P_03.P_3_0_01.key_typed = (function sketches$generative_desgin$P_03$P_3_0_01$key_typed(state,p__23029){
var map__23030 = p__23029;
var map__23030__$1 = ((((!((map__23030 == null)))?(((((map__23030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23030):map__23030);
var raw_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,cljs.core.cst$kw$raw_DASH_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$letter,raw_key);
});
sketches.generative_desgin.P_03.P_3_0_01.run = (function sketches$generative_desgin$P_03$P_3_0_01$run(host){
sketches.generative_desgin.P_03.P_3_0_01.hello_type = (function sketches$generative_desgin$P_03$P_3_0_01$run_$_hello_type(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23032__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23033__i = 0, G__23033__a = new Array(arguments.length -  0);
while (G__23033__i < G__23033__a.length) {G__23033__a[G__23033__i] = arguments[G__23033__i + 0]; ++G__23033__i;}
  args = new cljs.core.IndexedSeq(G__23033__a,0,null);
} 
return G__23032__delegate.call(this,args);};
G__23032.cljs$lang$maxFixedArity = 0;
G__23032.cljs$lang$applyTo = (function (arglist__23034){
var args = cljs.core.seq(arglist__23034);
return G__23032__delegate(args);
});
G__23032.cljs$core$IFn$_invoke$arity$variadic = G__23032__delegate;
return G__23032;
})()
:host),cljs.core.cst$kw$key_DASH_typed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_0_01.key_typed))?(function() { 
var G__23035__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_0_01.key_typed,args);
};
var G__23035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23036__i = 0, G__23036__a = new Array(arguments.length -  0);
while (G__23036__i < G__23036__a.length) {G__23036__a[G__23036__i] = arguments[G__23036__i + 0]; ++G__23036__i;}
  args = new cljs.core.IndexedSeq(G__23036__a,0,null);
} 
return G__23035__delegate.call(this,args);};
G__23035.cljs$lang$maxFixedArity = 0;
G__23035.cljs$lang$applyTo = (function (arglist__23037){
var args = cljs.core.seq(arglist__23037);
return G__23035__delegate(args);
});
G__23035.cljs$core$IFn$_invoke$arity$variadic = G__23035__delegate;
return G__23035;
})()
:sketches.generative_desgin.P_03.P_3_0_01.key_typed),cljs.core.cst$kw$mouse_DASH_moved,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_0_01.mouse_moved))?(function() { 
var G__23038__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_0_01.mouse_moved,args);
};
var G__23038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23039__i = 0, G__23039__a = new Array(arguments.length -  0);
while (G__23039__i < G__23039__a.length) {G__23039__a[G__23039__i] = arguments[G__23039__i + 0]; ++G__23039__i;}
  args = new cljs.core.IndexedSeq(G__23039__a,0,null);
} 
return G__23038__delegate.call(this,args);};
G__23038.cljs$lang$maxFixedArity = 0;
G__23038.cljs$lang$applyTo = (function (arglist__23040){
var args = cljs.core.seq(arglist__23040);
return G__23038__delegate(args);
});
G__23038.cljs$core$IFn$_invoke$arity$variadic = G__23038__delegate;
return G__23038;
})()
:sketches.generative_desgin.P_03.P_3_0_01.mouse_moved),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_0_01.setup))?(function() { 
var G__23041__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_0_01.setup,args);
};
var G__23041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23042__i = 0, G__23042__a = new Array(arguments.length -  0);
while (G__23042__i < G__23042__a.length) {G__23042__a[G__23042__i] = arguments[G__23042__i + 0]; ++G__23042__i;}
  args = new cljs.core.IndexedSeq(G__23042__a,0,null);
} 
return G__23041__delegate.call(this,args);};
G__23041.cljs$lang$maxFixedArity = 0;
G__23041.cljs$lang$applyTo = (function (arglist__23043){
var args = cljs.core.seq(arglist__23043);
return G__23041__delegate(args);
});
G__23041.cljs$core$IFn$_invoke$arity$variadic = G__23041__delegate;
return G__23041;
})()
:sketches.generative_desgin.P_03.P_3_0_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$mouse_DASH_dragged,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_0_01.mouse_dragged))?(function() { 
var G__23044__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_0_01.mouse_dragged,args);
};
var G__23044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23045__i = 0, G__23045__a = new Array(arguments.length -  0);
while (G__23045__i < G__23045__a.length) {G__23045__a[G__23045__i] = arguments[G__23045__i + 0]; ++G__23045__i;}
  args = new cljs.core.IndexedSeq(G__23045__a,0,null);
} 
return G__23044__delegate.call(this,args);};
G__23044.cljs$lang$maxFixedArity = 0;
G__23044.cljs$lang$applyTo = (function (arglist__23046){
var args = cljs.core.seq(arglist__23046);
return G__23044__delegate(args);
});
G__23044.cljs$core$IFn$_invoke$arity$variadic = G__23044__delegate;
return G__23044;
})()
:sketches.generative_desgin.P_03.P_3_0_01.mouse_dragged)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_03.P_3_0_01.hello_type', sketches.generative_desgin.P_03.P_3_0_01.hello_type);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_03.P_3_0_01.hello_type,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23047__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23048__i = 0, G__23048__a = new Array(arguments.length -  0);
while (G__23048__i < G__23048__a.length) {G__23048__a[G__23048__i] = arguments[G__23048__i + 0]; ++G__23048__i;}
  args = new cljs.core.IndexedSeq(G__23048__a,0,null);
} 
return G__23047__delegate.call(this,args);};
G__23047.cljs$lang$maxFixedArity = 0;
G__23047.cljs$lang$applyTo = (function (arglist__23049){
var args = cljs.core.seq(arglist__23049);
return G__23047__delegate(args);
});
G__23047.cljs$core$IFn$_invoke$arity$variadic = G__23047__delegate;
return G__23047;
})()
:host)], null));
}
});
