// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_3_1_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_3_1_01.setup = (function sketches$generative_desgin$P_02$P_2_3_1_01$setup(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line_DASH_length,(0),cljs.core.cst$kw$angle,(0),cljs.core.cst$kw$angle_DASH_speed,(1),cljs.core.cst$kw$c,quil.core.color.cljs$core$IFn$_invoke$arity$3((181),(157),(0))], null);
});
sketches.generative_desgin.P_02.P_2_3_1_01.update_state = (function sketches$generative_desgin$P_02$P_2_3_1_01$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$angle,cljs.core._PLUS_,cljs.core.cst$kw$angle_DASH_speed.cljs$core$IFn$_invoke$arity$1(state));
});
sketches.generative_desgin.P_02.P_2_3_1_01.draw = (function sketches$generative_desgin$P_02$P_2_3_1_01$draw(p__22506){
var map__22507 = p__22506;
var map__22507__$1 = ((((!((map__22507 == null)))?(((((map__22507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22507):map__22507);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507__$1,cljs.core.cst$kw$c);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507__$1,cljs.core.cst$kw$angle);
var line_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507__$1,cljs.core.cst$kw$line_DASH_length);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_x(),quil.core.mouse_y());

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.radians(angle));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1(c);

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),line_length,(0));

return quil.core.pop_matrix();
} else {
return null;
}
});
sketches.generative_desgin.P_02.P_2_3_1_01.mouse_pressed = (function sketches$generative_desgin$P_02$P_2_3_1_01$mouse_pressed(state,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$line_DASH_length,quil.core.random.cljs$core$IFn$_invoke$arity$2((70),(200)));
});
sketches.generative_desgin.P_02.P_2_3_1_01.key_pressed = (function sketches$generative_desgin$P_02$P_2_3_1_01$key_pressed(state,p__22509){
var map__22510 = p__22509;
var map__22510__$1 = ((((!((map__22510 == null)))?(((((map__22510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22510):map__22510);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,cljs.core.cst$kw$key);
var G__22512 = key;
var G__22512__$1 = (((G__22512 instanceof cljs.core.Keyword))?G__22512.fqn:null);
switch (G__22512__$1) {
case "ArrowUp":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$line_DASH_length,cljs.core._PLUS_,(5));

break;
case "ArrowDown":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$line_DASH_length,cljs.core._,(5));

break;
case "ArrowLeft":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$angle_DASH_speed,cljs.core._,0.5);

break;
case "ArrowRight":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$angle_DASH_speed,cljs.core._PLUS_,0.5);

break;
default:
return state;

}
});
sketches.generative_desgin.P_02.P_2_3_1_01.key_released = (function sketches$generative_desgin$P_02$P_2_3_1_01$key_released(state,p__22514){
var map__22515 = p__22514;
var map__22515__$1 = ((((!((map__22515 == null)))?(((((map__22515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22515):map__22515);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22515__$1,cljs.core.cst$kw$key);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));

var G__22517 = key;
var G__22517__$1 = (((G__22517 instanceof cljs.core.Keyword))?G__22517.fqn:null);
switch (G__22517__$1) {
case "Backspace":
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

return state;

break;
case "d":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$angle,cljs.core._PLUS_,(180)),cljs.core.cst$kw$angle_DASH_speed,cljs.core._STAR_,(-1));

break;
case "space":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$c,quil.core.color.cljs$core$IFn$_invoke$arity$4(quil.core.random.cljs$core$IFn$_invoke$arity$1((255)),quil.core.random.cljs$core$IFn$_invoke$arity$1((255)),quil.core.random.cljs$core$IFn$_invoke$arity$1((255)),quil.core.random.cljs$core$IFn$_invoke$arity$2((80),(100))));

break;
default:
return state;

}
});
sketches.generative_desgin.P_02.P_2_3_1_01.run = (function sketches$generative_desgin$P_02$P_2_3_1_01$run(host){
sketches.generative_desgin.P_02.P_2_3_1_01.animated_brushes = (function sketches$generative_desgin$P_02$P_2_3_1_01$run_$_animated_brushes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.update_state))?(function() { 
var G__22519__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.update_state,args);
};
var G__22519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22520__i = 0, G__22520__a = new Array(arguments.length -  0);
while (G__22520__i < G__22520__a.length) {G__22520__a[G__22520__i] = arguments[G__22520__i + 0]; ++G__22520__i;}
  args = new cljs.core.IndexedSeq(G__22520__a,0,null);
} 
return G__22519__delegate.call(this,args);};
G__22519.cljs$lang$maxFixedArity = 0;
G__22519.cljs$lang$applyTo = (function (arglist__22521){
var args = cljs.core.seq(arglist__22521);
return G__22519__delegate(args);
});
G__22519.cljs$core$IFn$_invoke$arity$variadic = G__22519__delegate;
return G__22519;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.setup))?(function() { 
var G__22522__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.setup,args);
};
var G__22522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22523__i = 0, G__22523__a = new Array(arguments.length -  0);
while (G__22523__i < G__22523__a.length) {G__22523__a[G__22523__i] = arguments[G__22523__i + 0]; ++G__22523__i;}
  args = new cljs.core.IndexedSeq(G__22523__a,0,null);
} 
return G__22522__delegate.call(this,args);};
G__22522.cljs$lang$maxFixedArity = 0;
G__22522.cljs$lang$applyTo = (function (arglist__22524){
var args = cljs.core.seq(arglist__22524);
return G__22522__delegate(args);
});
G__22522.cljs$core$IFn$_invoke$arity$variadic = G__22522__delegate;
return G__22522;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.mouse_pressed))?(function() { 
var G__22525__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.mouse_pressed,args);
};
var G__22525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22526__i = 0, G__22526__a = new Array(arguments.length -  0);
while (G__22526__i < G__22526__a.length) {G__22526__a[G__22526__i] = arguments[G__22526__i + 0]; ++G__22526__i;}
  args = new cljs.core.IndexedSeq(G__22526__a,0,null);
} 
return G__22525__delegate.call(this,args);};
G__22525.cljs$lang$maxFixedArity = 0;
G__22525.cljs$lang$applyTo = (function (arglist__22527){
var args = cljs.core.seq(arglist__22527);
return G__22525__delegate(args);
});
G__22525.cljs$core$IFn$_invoke$arity$variadic = G__22525__delegate;
return G__22525;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22528__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22529__i = 0, G__22529__a = new Array(arguments.length -  0);
while (G__22529__i < G__22529__a.length) {G__22529__a[G__22529__i] = arguments[G__22529__i + 0]; ++G__22529__i;}
  args = new cljs.core.IndexedSeq(G__22529__a,0,null);
} 
return G__22528__delegate.call(this,args);};
G__22528.cljs$lang$maxFixedArity = 0;
G__22528.cljs$lang$applyTo = (function (arglist__22530){
var args = cljs.core.seq(arglist__22530);
return G__22528__delegate(args);
});
G__22528.cljs$core$IFn$_invoke$arity$variadic = G__22528__delegate;
return G__22528;
})()
:host),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.key_pressed))?(function() { 
var G__22531__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.key_pressed,args);
};
var G__22531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22532__i = 0, G__22532__a = new Array(arguments.length -  0);
while (G__22532__i < G__22532__a.length) {G__22532__a[G__22532__i] = arguments[G__22532__i + 0]; ++G__22532__i;}
  args = new cljs.core.IndexedSeq(G__22532__a,0,null);
} 
return G__22531__delegate.call(this,args);};
G__22531.cljs$lang$maxFixedArity = 0;
G__22531.cljs$lang$applyTo = (function (arglist__22533){
var args = cljs.core.seq(arglist__22533);
return G__22531__delegate(args);
});
G__22531.cljs$core$IFn$_invoke$arity$variadic = G__22531__delegate;
return G__22531;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.key_pressed),cljs.core.cst$kw$key_DASH_released,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.key_released))?(function() { 
var G__22534__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.key_released,args);
};
var G__22534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22535__i = 0, G__22535__a = new Array(arguments.length -  0);
while (G__22535__i < G__22535__a.length) {G__22535__a[G__22535__i] = arguments[G__22535__i + 0]; ++G__22535__i;}
  args = new cljs.core.IndexedSeq(G__22535__a,0,null);
} 
return G__22534__delegate.call(this,args);};
G__22534.cljs$lang$maxFixedArity = 0;
G__22534.cljs$lang$applyTo = (function (arglist__22536){
var args = cljs.core.seq(arglist__22536);
return G__22534__delegate(args);
});
G__22534.cljs$core$IFn$_invoke$arity$variadic = G__22534__delegate;
return G__22534;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.key_released),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_1_01.draw))?(function() { 
var G__22537__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_1_01.draw,args);
};
var G__22537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22538__i = 0, G__22538__a = new Array(arguments.length -  0);
while (G__22538__i < G__22538__a.length) {G__22538__a[G__22538__i] = arguments[G__22538__i + 0]; ++G__22538__i;}
  args = new cljs.core.IndexedSeq(G__22538__a,0,null);
} 
return G__22537__delegate.call(this,args);};
G__22537.cljs$lang$maxFixedArity = 0;
G__22537.cljs$lang$applyTo = (function (arglist__22539){
var args = cljs.core.seq(arglist__22539);
return G__22537__delegate(args);
});
G__22537.cljs$core$IFn$_invoke$arity$variadic = G__22537__delegate;
return G__22537;
})()
:sketches.generative_desgin.P_02.P_2_3_1_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_3_1_01.animated_brushes', sketches.generative_desgin.P_02.P_2_3_1_01.animated_brushes);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_3_1_01.animated_brushes,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22540__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22541__i = 0, G__22541__a = new Array(arguments.length -  0);
while (G__22541__i < G__22541__a.length) {G__22541__a[G__22541__i] = arguments[G__22541__i + 0]; ++G__22541__i;}
  args = new cljs.core.IndexedSeq(G__22541__a,0,null);
} 
return G__22540__delegate.call(this,args);};
G__22540.cljs$lang$maxFixedArity = 0;
G__22540.cljs$lang$applyTo = (function (arglist__22542){
var args = cljs.core.seq(arglist__22542);
return G__22540__delegate(args);
});
G__22540.cljs$core$IFn$_invoke$arity$variadic = G__22540__delegate;
return G__22540;
})()
:host)], null));
}
});
