// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.fractals.own_cantor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.fractals.own_cantor.draw_circle = (function sketches$nature_of_code$fractals$own_cantor$draw_circle(x,y,r){
quil.core.ellipse(x,y,r,r);

quil.core.ellipse((x + (r / (2))),y,(r / (2)),(r / (2)));

return quil.core.ellipse((x - (r / (2))),y,(r / (2)),(r / (2)));
});
sketches.nature_of_code.fractals.own_cantor.cantor = (function sketches$nature_of_code$fractals$own_cantor$cantor(x,y,l){
if((l >= (1))){
sketches.nature_of_code.fractals.own_cantor.draw_circle(x,y,l);

var y2 = (y + (20));
var G__18139_18145 = x;
var G__18140_18146 = y2;
var G__18141_18147 = (l / (3));
(sketches.nature_of_code.fractals.own_cantor.cantor.cljs$core$IFn$_invoke$arity$3 ? sketches.nature_of_code.fractals.own_cantor.cantor.cljs$core$IFn$_invoke$arity$3(G__18139_18145,G__18140_18146,G__18141_18147) : sketches.nature_of_code.fractals.own_cantor.cantor.call(null,G__18139_18145,G__18140_18146,G__18141_18147));

var G__18142 = (x + (l * ((2) / (3))));
var G__18143 = y2;
var G__18144 = (l / (3));
return (sketches.nature_of_code.fractals.own_cantor.cantor.cljs$core$IFn$_invoke$arity$3 ? sketches.nature_of_code.fractals.own_cantor.cantor.cljs$core$IFn$_invoke$arity$3(G__18142,G__18143,G__18144) : sketches.nature_of_code.fractals.own_cantor.cantor.call(null,G__18142,G__18143,G__18144));
} else {
return null;
}
});
sketches.nature_of_code.fractals.own_cantor.draw = (function sketches$nature_of_code$fractals$own_cantor$draw(state){
quil.core.clear();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((0),(quil.core.height() / (2)));

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke_weight((5));

return sketches.nature_of_code.fractals.own_cantor.cantor((20),(20),(quil.core.width() / (1)));
});
sketches.nature_of_code.fractals.own_cantor.run = (function sketches$nature_of_code$fractals$own_cantor$run(host){
sketches.nature_of_code.fractals.own_cantor.own_cantor = (function sketches$nature_of_code$fractals$own_cantor$run_$_own_cantor(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18148__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18149__i = 0, G__18149__a = new Array(arguments.length -  0);
while (G__18149__i < G__18149__a.length) {G__18149__a[G__18149__i] = arguments[G__18149__i + 0]; ++G__18149__i;}
  args = new cljs.core.IndexedSeq(G__18149__a,0,null);
} 
return G__18148__delegate.call(this,args);};
G__18148.cljs$lang$maxFixedArity = 0;
G__18148.cljs$lang$applyTo = (function (arglist__18150){
var args = cljs.core.seq(arglist__18150);
return G__18148__delegate(args);
});
G__18148.cljs$core$IFn$_invoke$arity$variadic = G__18148__delegate;
return G__18148;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.own_cantor.draw))?(function() { 
var G__18151__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.own_cantor.draw,args);
};
var G__18151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18152__i = 0, G__18152__a = new Array(arguments.length -  0);
while (G__18152__i < G__18152__a.length) {G__18152__a[G__18152__i] = arguments[G__18152__i + 0]; ++G__18152__i;}
  args = new cljs.core.IndexedSeq(G__18152__a,0,null);
} 
return G__18151__delegate.call(this,args);};
G__18151.cljs$lang$maxFixedArity = 0;
G__18151.cljs$lang$applyTo = (function (arglist__18153){
var args = cljs.core.seq(arglist__18153);
return G__18151__delegate(args);
});
G__18151.cljs$core$IFn$_invoke$arity$variadic = G__18151__delegate;
return G__18151;
})()
:sketches.nature_of_code.fractals.own_cantor.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.fractals.own_cantor.own_cantor', sketches.nature_of_code.fractals.own_cantor.own_cantor);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.fractals.own_cantor.own_cantor,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18154__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18155__i = 0, G__18155__a = new Array(arguments.length -  0);
while (G__18155__i < G__18155__a.length) {G__18155__a[G__18155__i] = arguments[G__18155__i + 0]; ++G__18155__i;}
  args = new cljs.core.IndexedSeq(G__18155__a,0,null);
} 
return G__18154__delegate.call(this,args);};
G__18154.cljs$lang$maxFixedArity = 0;
G__18154.cljs$lang$applyTo = (function (arglist__18156){
var args = cljs.core.seq(arglist__18156);
return G__18154__delegate(args);
});
G__18154.cljs$core$IFn$_invoke$arity$variadic = G__18154__delegate;
return G__18154;
})()
:host)], null));
}
});
