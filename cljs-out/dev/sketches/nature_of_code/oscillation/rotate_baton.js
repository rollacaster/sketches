// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.rotate_baton');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.oscillation.rotate_baton.setup = (function sketches$nature_of_code$oscillation$rotate_baton$setup(){
return (0);
});
sketches.nature_of_code.oscillation.rotate_baton.update_state = (function sketches$nature_of_code$oscillation$rotate_baton$update_state(rotation){
return ((1) + rotation);
});
sketches.nature_of_code.oscillation.rotate_baton.draw = (function sketches$nature_of_code$oscillation$rotate_baton$draw(rotation){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.radians(rotation));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(-100),(0),(100));

quil.core.ellipse((0),(-100),(20),(20));

return quil.core.ellipse((0),(100),(20),(20));
});
sketches.nature_of_code.oscillation.rotate_baton.run = (function sketches$nature_of_code$oscillation$rotate_baton$run(host){
sketches.nature_of_code.oscillation.rotate_baton.rotate_baton = (function sketches$nature_of_code$oscillation$rotate_baton$run_$_rotate_baton(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21902__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21903__i = 0, G__21903__a = new Array(arguments.length -  0);
while (G__21903__i < G__21903__a.length) {G__21903__a[G__21903__i] = arguments[G__21903__i + 0]; ++G__21903__i;}
  args = new cljs.core.IndexedSeq(G__21903__a,0,null);
} 
return G__21902__delegate.call(this,args);};
G__21902.cljs$lang$maxFixedArity = 0;
G__21902.cljs$lang$applyTo = (function (arglist__21904){
var args = cljs.core.seq(arglist__21904);
return G__21902__delegate(args);
});
G__21902.cljs$core$IFn$_invoke$arity$variadic = G__21902__delegate;
return G__21902;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.rotate_baton.update_state))?(function() { 
var G__21905__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.rotate_baton.update_state,args);
};
var G__21905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21906__i = 0, G__21906__a = new Array(arguments.length -  0);
while (G__21906__i < G__21906__a.length) {G__21906__a[G__21906__i] = arguments[G__21906__i + 0]; ++G__21906__i;}
  args = new cljs.core.IndexedSeq(G__21906__a,0,null);
} 
return G__21905__delegate.call(this,args);};
G__21905.cljs$lang$maxFixedArity = 0;
G__21905.cljs$lang$applyTo = (function (arglist__21907){
var args = cljs.core.seq(arglist__21907);
return G__21905__delegate(args);
});
G__21905.cljs$core$IFn$_invoke$arity$variadic = G__21905__delegate;
return G__21905;
})()
:sketches.nature_of_code.oscillation.rotate_baton.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.rotate_baton.setup))?(function() { 
var G__21908__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.rotate_baton.setup,args);
};
var G__21908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21909__i = 0, G__21909__a = new Array(arguments.length -  0);
while (G__21909__i < G__21909__a.length) {G__21909__a[G__21909__i] = arguments[G__21909__i + 0]; ++G__21909__i;}
  args = new cljs.core.IndexedSeq(G__21909__a,0,null);
} 
return G__21908__delegate.call(this,args);};
G__21908.cljs$lang$maxFixedArity = 0;
G__21908.cljs$lang$applyTo = (function (arglist__21910){
var args = cljs.core.seq(arglist__21910);
return G__21908__delegate(args);
});
G__21908.cljs$core$IFn$_invoke$arity$variadic = G__21908__delegate;
return G__21908;
})()
:sketches.nature_of_code.oscillation.rotate_baton.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.rotate_baton.draw))?(function() { 
var G__21911__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.rotate_baton.draw,args);
};
var G__21911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21912__i = 0, G__21912__a = new Array(arguments.length -  0);
while (G__21912__i < G__21912__a.length) {G__21912__a[G__21912__i] = arguments[G__21912__i + 0]; ++G__21912__i;}
  args = new cljs.core.IndexedSeq(G__21912__a,0,null);
} 
return G__21911__delegate.call(this,args);};
G__21911.cljs$lang$maxFixedArity = 0;
G__21911.cljs$lang$applyTo = (function (arglist__21913){
var args = cljs.core.seq(arglist__21913);
return G__21911__delegate(args);
});
G__21911.cljs$core$IFn$_invoke$arity$variadic = G__21911__delegate;
return G__21911;
})()
:sketches.nature_of_code.oscillation.rotate_baton.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.rotate_baton.rotate_baton', sketches.nature_of_code.oscillation.rotate_baton.rotate_baton);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.rotate_baton.rotate_baton,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21914__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21915__i = 0, G__21915__a = new Array(arguments.length -  0);
while (G__21915__i < G__21915__a.length) {G__21915__a[G__21915__i] = arguments[G__21915__i + 0]; ++G__21915__i;}
  args = new cljs.core.IndexedSeq(G__21915__a,0,null);
} 
return G__21914__delegate.call(this,args);};
G__21914.cljs$lang$maxFixedArity = 0;
G__21914.cljs$lang$applyTo = (function (arglist__21916){
var args = cljs.core.seq(arglist__21916);
return G__21914__delegate(args);
});
G__21914.cljs$core$IFn$_invoke$arity$variadic = G__21914__delegate;
return G__21914;
})()
:host)], null));
}
});
