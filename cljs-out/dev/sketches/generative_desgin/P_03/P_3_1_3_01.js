// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_03.P_3_1_3_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_03.P_3_1_3_01.text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
window.fetch("data/faust_kurz.txt").then((function (p1__20795_SHARP_){
return p1__20795_SHARP_.text();
})).then((function (p1__20796_SHARP_){
return cljs.core.reset_BANG_(sketches.generative_desgin.P_03.P_3_1_3_01.text,p1__20796_SHARP_);
}));
sketches.generative_desgin.P_03.P_3_1_3_01.alphabet = "ABCDEFGHIJKLMNORSTUVWYZ\u00C4\u00D6\u00DC\u00DF,.;!? ";
sketches.generative_desgin.P_03.P_3_1_3_01.setup = (function sketches$generative_desgin$P_03$P_3_1_3_01$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$counts,cljs.core.frequencies(cljs.core.deref(sketches.generative_desgin.P_03.P_3_1_3_01.text)),cljs.core.cst$kw$text,cljs.core.deref(sketches.generative_desgin.P_03.P_3_1_3_01.text)], null);
});
sketches.generative_desgin.P_03.P_3_1_3_01.update_state = (function sketches$generative_desgin$P_03$P_3_1_3_01$update_state(state){
return state;
});
sketches.generative_desgin.P_03.P_3_1_3_01.draw = (function sketches$generative_desgin$P_03$P_3_1_3_01$draw(p__20797){
var map__20798 = p__20797;
var map__20798__$1 = ((((!((map__20798 == null)))?(((((map__20798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20798):map__20798);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,cljs.core.cst$kw$text);
var counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,cljs.core.cst$kw$counts);
quil.core.clear();

quil.core.text_size((11));

var padding_left = (15);
var x = padding_left;
var idx = (0);
var y = (15);
while(true){
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(text,idx);
var m = quil.core.constrain(quil.core.map_range(quil.core.mouse_x(),(50),(quil.core.width() - (50)),(0),(1)),(0),(1));
var alph_idx = sketches.generative_desgin.P_03.P_3_1_3_01.alphabet.indexOf(clojure.string.upper_case(char$));
var inter_y = quil.core.lerp(y,((15) + (alph_idx * (20))),m);
quil.core.fill.cljs$core$IFn$_invoke$arity$4((87),(35),(129),((counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(char$) : counts.call(null,char$)) * (3)));

quil.core.text.cljs$core$IFn$_invoke$arity$3(char$,x,inter_y);

if((idx < (cljs.core.count(text) - (1)))){
var new_x = (x + quil.core.text_width(char$));
var new_line_QMARK_ = (((new_x > (quil.core.width() - (65)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$," ")));
var G__20800 = ((new_line_QMARK_)?padding_left:new_x);
var G__20801 = (idx + (1));
var G__20802 = ((new_line_QMARK_)?((20) + y):y);
x = G__20800;
idx = G__20801;
y = G__20802;
continue;
} else {
return null;
}
break;
}
});
sketches.generative_desgin.P_03.P_3_1_3_01.run = (function sketches$generative_desgin$P_03$P_3_1_3_01$run(host){
sketches.generative_desgin.P_03.P_3_1_3_01.text_frequencies = (function sketches$generative_desgin$P_03$P_3_1_3_01$run_$_text_frequencies(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20803__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20804__i = 0, G__20804__a = new Array(arguments.length -  0);
while (G__20804__i < G__20804__a.length) {G__20804__a[G__20804__i] = arguments[G__20804__i + 0]; ++G__20804__i;}
  args = new cljs.core.IndexedSeq(G__20804__a,0,null);
} 
return G__20803__delegate.call(this,args);};
G__20803.cljs$lang$maxFixedArity = 0;
G__20803.cljs$lang$applyTo = (function (arglist__20805){
var args = cljs.core.seq(arglist__20805);
return G__20803__delegate(args);
});
G__20803.cljs$core$IFn$_invoke$arity$variadic = G__20803__delegate;
return G__20803;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_3_01.update_state))?(function() { 
var G__20806__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_3_01.update_state,args);
};
var G__20806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20807__i = 0, G__20807__a = new Array(arguments.length -  0);
while (G__20807__i < G__20807__a.length) {G__20807__a[G__20807__i] = arguments[G__20807__i + 0]; ++G__20807__i;}
  args = new cljs.core.IndexedSeq(G__20807__a,0,null);
} 
return G__20806__delegate.call(this,args);};
G__20806.cljs$lang$maxFixedArity = 0;
G__20806.cljs$lang$applyTo = (function (arglist__20808){
var args = cljs.core.seq(arglist__20808);
return G__20806__delegate(args);
});
G__20806.cljs$core$IFn$_invoke$arity$variadic = G__20806__delegate;
return G__20806;
})()
:sketches.generative_desgin.P_03.P_3_1_3_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_3_01.setup))?(function() { 
var G__20809__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_3_01.setup,args);
};
var G__20809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20810__i = 0, G__20810__a = new Array(arguments.length -  0);
while (G__20810__i < G__20810__a.length) {G__20810__a[G__20810__i] = arguments[G__20810__i + 0]; ++G__20810__i;}
  args = new cljs.core.IndexedSeq(G__20810__a,0,null);
} 
return G__20809__delegate.call(this,args);};
G__20809.cljs$lang$maxFixedArity = 0;
G__20809.cljs$lang$applyTo = (function (arglist__20811){
var args = cljs.core.seq(arglist__20811);
return G__20809__delegate(args);
});
G__20809.cljs$core$IFn$_invoke$arity$variadic = G__20809__delegate;
return G__20809;
})()
:sketches.generative_desgin.P_03.P_3_1_3_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_3_01.draw))?(function() { 
var G__20812__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_3_01.draw,args);
};
var G__20812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20813__i = 0, G__20813__a = new Array(arguments.length -  0);
while (G__20813__i < G__20813__a.length) {G__20813__a[G__20813__i] = arguments[G__20813__i + 0]; ++G__20813__i;}
  args = new cljs.core.IndexedSeq(G__20813__a,0,null);
} 
return G__20812__delegate.call(this,args);};
G__20812.cljs$lang$maxFixedArity = 0;
G__20812.cljs$lang$applyTo = (function (arglist__20814){
var args = cljs.core.seq(arglist__20814);
return G__20812__delegate(args);
});
G__20812.cljs$core$IFn$_invoke$arity$variadic = G__20812__delegate;
return G__20812;
})()
:sketches.generative_desgin.P_03.P_3_1_3_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_03.P_3_1_3_01.text_frequencies', sketches.generative_desgin.P_03.P_3_1_3_01.text_frequencies);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_03.P_3_1_3_01.text_frequencies,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20815__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20816__i = 0, G__20816__a = new Array(arguments.length -  0);
while (G__20816__i < G__20816__a.length) {G__20816__a[G__20816__i] = arguments[G__20816__i + 0]; ++G__20816__i;}
  args = new cljs.core.IndexedSeq(G__20816__a,0,null);
} 
return G__20815__delegate.call(this,args);};
G__20815.cljs$lang$maxFixedArity = 0;
G__20815.cljs$lang$applyTo = (function (arglist__20817){
var args = cljs.core.seq(arglist__20817);
return G__20815__delegate(args);
});
G__20815.cljs$core$IFn$_invoke$arity$variadic = G__20815__delegate;
return G__20815;
})()
:host)], null));
}
});
