// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.bob');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.oscillation.bob.draw = (function sketches$nature_of_code$oscillation$bob$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var amplitude = 110.0;
var period = 80.0;
var x = (amplitude * quil.core.cos(((quil.core.TWO_PI * quil.core.frame_count()) / period)));
var y = ((60) * quil.core.abs(quil.core.sin(((quil.core.TWO_PI * quil.core.frame_count()) / period))));
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(0));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x,(y + (quil.core.height() / (2))));

quil.core.ellipse(x,(y + (quil.core.height() / (2))),(80),(80));

return quil.core.pop_matrix();
});
sketches.nature_of_code.oscillation.bob.run = (function sketches$nature_of_code$oscillation$bob$run(host){
sketches.nature_of_code.oscillation.bob.bob = (function sketches$nature_of_code$oscillation$bob$run_$_bob(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24072__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24073__i = 0, G__24073__a = new Array(arguments.length -  0);
while (G__24073__i < G__24073__a.length) {G__24073__a[G__24073__i] = arguments[G__24073__i + 0]; ++G__24073__i;}
  args = new cljs.core.IndexedSeq(G__24073__a,0,null);
} 
return G__24072__delegate.call(this,args);};
G__24072.cljs$lang$maxFixedArity = 0;
G__24072.cljs$lang$applyTo = (function (arglist__24074){
var args = cljs.core.seq(arglist__24074);
return G__24072__delegate(args);
});
G__24072.cljs$core$IFn$_invoke$arity$variadic = G__24072__delegate;
return G__24072;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.bob.draw))?(function() { 
var G__24075__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.bob.draw,args);
};
var G__24075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24076__i = 0, G__24076__a = new Array(arguments.length -  0);
while (G__24076__i < G__24076__a.length) {G__24076__a[G__24076__i] = arguments[G__24076__i + 0]; ++G__24076__i;}
  args = new cljs.core.IndexedSeq(G__24076__a,0,null);
} 
return G__24075__delegate.call(this,args);};
G__24075.cljs$lang$maxFixedArity = 0;
G__24075.cljs$lang$applyTo = (function (arglist__24077){
var args = cljs.core.seq(arglist__24077);
return G__24075__delegate(args);
});
G__24075.cljs$core$IFn$_invoke$arity$variadic = G__24075__delegate;
return G__24075;
})()
:sketches.nature_of_code.oscillation.bob.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.bob.bob', sketches.nature_of_code.oscillation.bob.bob);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.bob.bob,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24078__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24079__i = 0, G__24079__a = new Array(arguments.length -  0);
while (G__24079__i < G__24079__a.length) {G__24079__a[G__24079__i] = arguments[G__24079__i + 0]; ++G__24079__i;}
  args = new cljs.core.IndexedSeq(G__24079__a,0,null);
} 
return G__24078__delegate.call(this,args);};
G__24078.cljs$lang$maxFixedArity = 0;
G__24078.cljs$lang$applyTo = (function (arglist__24080){
var args = cljs.core.seq(arglist__24080);
return G__24078__delegate(args);
});
G__24078.cljs$core$IFn$_invoke$arity$variadic = G__24078__delegate;
return G__24078;
})()
:host)], null));
}
});
