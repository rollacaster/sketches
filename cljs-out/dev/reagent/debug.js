// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13182__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13183__i = 0, G__13183__a = new Array(arguments.length -  0);
while (G__13183__i < G__13183__a.length) {G__13183__a[G__13183__i] = arguments[G__13183__i + 0]; ++G__13183__i;}
  args = new cljs.core.IndexedSeq(G__13183__a,0,null);
} 
return G__13182__delegate.call(this,args);};
G__13182.cljs$lang$maxFixedArity = 0;
G__13182.cljs$lang$applyTo = (function (arglist__13184){
var args = cljs.core.seq(arglist__13184);
return G__13182__delegate(args);
});
G__13182.cljs$core$IFn$_invoke$arity$variadic = G__13182__delegate;
return G__13182;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13185__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13186__i = 0, G__13186__a = new Array(arguments.length -  0);
while (G__13186__i < G__13186__a.length) {G__13186__a[G__13186__i] = arguments[G__13186__i + 0]; ++G__13186__i;}
  args = new cljs.core.IndexedSeq(G__13186__a,0,null);
} 
return G__13185__delegate.call(this,args);};
G__13185.cljs$lang$maxFixedArity = 0;
G__13185.cljs$lang$applyTo = (function (arglist__13187){
var args = cljs.core.seq(arglist__13187);
return G__13185__delegate(args);
});
G__13185.cljs$core$IFn$_invoke$arity$variadic = G__13185__delegate;
return G__13185;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
