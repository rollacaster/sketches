// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_1_5_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_1_5_01.setup = (function sketches$generative_desgin$P_02$P_2_1_5_01$setup(){
quil.core.no_fill();

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$draw_DASH_mode,(1)], null);
});
sketches.generative_desgin.P_02.P_2_1_5_01.update_state = (function sketches$generative_desgin$P_02$P_2_1_5_01$update_state(state){
return state;
});
sketches.generative_desgin.P_02.P_2_1_5_01.overlay = (function sketches$generative_desgin$P_02$P_2_1_5_01$overlay(draw_mode){
var w = (quil.core.width() - (100));
var h = (quil.core.height() - (100));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(draw_mode,(1))){
var seq__22446 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3(((- w) / (2)),(w / (2)),(5)));
var chunk__22447 = null;
var count__22448 = (0);
var i__22449 = (0);
while(true){
if((i__22449 < count__22448)){
var i = chunk__22447.cljs$core$IIndexed$_nth$arity$2(null,i__22449);
quil.core.line.cljs$core$IFn$_invoke$arity$4(i,((- h) / (2)),i,(h / (2)));


var G__22454 = seq__22446;
var G__22455 = chunk__22447;
var G__22456 = count__22448;
var G__22457 = (i__22449 + (1));
seq__22446 = G__22454;
chunk__22447 = G__22455;
count__22448 = G__22456;
i__22449 = G__22457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22446);
if(temp__5735__auto__){
var seq__22446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22446__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22446__$1);
var G__22458 = cljs.core.chunk_rest(seq__22446__$1);
var G__22459 = c__4351__auto__;
var G__22460 = cljs.core.count(c__4351__auto__);
var G__22461 = (0);
seq__22446 = G__22458;
chunk__22447 = G__22459;
count__22448 = G__22460;
i__22449 = G__22461;
continue;
} else {
var i = cljs.core.first(seq__22446__$1);
quil.core.line.cljs$core$IFn$_invoke$arity$4(i,((- h) / (2)),i,(h / (2)));


var G__22462 = cljs.core.next(seq__22446__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__22446 = G__22462;
chunk__22447 = G__22463;
count__22448 = G__22464;
i__22449 = G__22465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__22450 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),w,(10)));
var chunk__22451 = null;
var count__22452 = (0);
var i__22453 = (0);
while(true){
if((i__22453 < count__22452)){
var i = chunk__22451.cljs$core$IIndexed$_nth$arity$2(null,i__22453);
quil.core.ellipse((0),(0),i,i);


var G__22466 = seq__22450;
var G__22467 = chunk__22451;
var G__22468 = count__22452;
var G__22469 = (i__22453 + (1));
seq__22450 = G__22466;
chunk__22451 = G__22467;
count__22452 = G__22468;
i__22453 = G__22469;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22450);
if(temp__5735__auto__){
var seq__22450__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22450__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22450__$1);
var G__22470 = cljs.core.chunk_rest(seq__22450__$1);
var G__22471 = c__4351__auto__;
var G__22472 = cljs.core.count(c__4351__auto__);
var G__22473 = (0);
seq__22450 = G__22470;
chunk__22451 = G__22471;
count__22452 = G__22472;
i__22453 = G__22473;
continue;
} else {
var i = cljs.core.first(seq__22450__$1);
quil.core.ellipse((0),(0),i,i);


var G__22474 = cljs.core.next(seq__22450__$1);
var G__22475 = null;
var G__22476 = (0);
var G__22477 = (0);
seq__22450 = G__22474;
chunk__22451 = G__22475;
count__22452 = G__22476;
i__22453 = G__22477;
continue;
}
} else {
return null;
}
}
break;
}
}
});
sketches.generative_desgin.P_02.P_2_1_5_01.draw = (function sketches$generative_desgin$P_02$P_2_1_5_01$draw(p__22478){
var map__22479 = p__22478;
var map__22479__$1 = ((((!((map__22479 == null)))?(((((map__22479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22479):map__22479);
var draw_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.cst$kw$draw_DASH_mode);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

quil.core.stroke_weight((3));

sketches.generative_desgin.P_02.P_2_1_5_01.overlay(draw_mode);

var x = quil.core.map_range(quil.core.mouse_x(),(0),quil.core.width(),(-50),(50));
var a = quil.core.map_range(quil.core.mouse_x(),(0),quil.core.width(),-0.5,0.5);
var s = quil.core.map_range(quil.core.mouse_y(),(0),quil.core.height(),0.7,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(draw_mode,(1))){
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(a);
} else {
quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,(0));
}

quil.core.scale.cljs$core$IFn$_invoke$arity$1(s);

quil.core.stroke_weight((2));

return sketches.generative_desgin.P_02.P_2_1_5_01.overlay(draw_mode);
});
sketches.generative_desgin.P_02.P_2_1_5_01.key_pressed = (function sketches$generative_desgin$P_02$P_2_1_5_01$key_pressed(state,p__22481){
var map__22482 = p__22481;
var map__22482__$1 = ((((!((map__22482 == null)))?(((((map__22482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22482):map__22482);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22482__$1,cljs.core.cst$kw$key);
var G__22484 = key;
var G__22484__$1 = (((G__22484 instanceof cljs.core.Keyword))?G__22484.fqn:null);
switch (G__22484__$1) {
case "1":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$draw_DASH_mode,(1));

break;
case "2":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$draw_DASH_mode,(2));

break;
default:
return state;

}
});
sketches.generative_desgin.P_02.P_2_1_5_01.run = (function sketches$generative_desgin$P_02$P_2_1_5_01$run(host){
sketches.generative_desgin.P_02.P_2_1_5_01.moire_in_a_grid = (function sketches$generative_desgin$P_02$P_2_1_5_01$run_$_moire_in_a_grid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22486__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22487__i = 0, G__22487__a = new Array(arguments.length -  0);
while (G__22487__i < G__22487__a.length) {G__22487__a[G__22487__i] = arguments[G__22487__i + 0]; ++G__22487__i;}
  args = new cljs.core.IndexedSeq(G__22487__a,0,null);
} 
return G__22486__delegate.call(this,args);};
G__22486.cljs$lang$maxFixedArity = 0;
G__22486.cljs$lang$applyTo = (function (arglist__22488){
var args = cljs.core.seq(arglist__22488);
return G__22486__delegate(args);
});
G__22486.cljs$core$IFn$_invoke$arity$variadic = G__22486__delegate;
return G__22486;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_5_01.update_state))?(function() { 
var G__22489__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_5_01.update_state,args);
};
var G__22489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22490__i = 0, G__22490__a = new Array(arguments.length -  0);
while (G__22490__i < G__22490__a.length) {G__22490__a[G__22490__i] = arguments[G__22490__i + 0]; ++G__22490__i;}
  args = new cljs.core.IndexedSeq(G__22490__a,0,null);
} 
return G__22489__delegate.call(this,args);};
G__22489.cljs$lang$maxFixedArity = 0;
G__22489.cljs$lang$applyTo = (function (arglist__22491){
var args = cljs.core.seq(arglist__22491);
return G__22489__delegate(args);
});
G__22489.cljs$core$IFn$_invoke$arity$variadic = G__22489__delegate;
return G__22489;
})()
:sketches.generative_desgin.P_02.P_2_1_5_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_5_01.setup))?(function() { 
var G__22492__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_5_01.setup,args);
};
var G__22492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22493__i = 0, G__22493__a = new Array(arguments.length -  0);
while (G__22493__i < G__22493__a.length) {G__22493__a[G__22493__i] = arguments[G__22493__i + 0]; ++G__22493__i;}
  args = new cljs.core.IndexedSeq(G__22493__a,0,null);
} 
return G__22492__delegate.call(this,args);};
G__22492.cljs$lang$maxFixedArity = 0;
G__22492.cljs$lang$applyTo = (function (arglist__22494){
var args = cljs.core.seq(arglist__22494);
return G__22492__delegate(args);
});
G__22492.cljs$core$IFn$_invoke$arity$variadic = G__22492__delegate;
return G__22492;
})()
:sketches.generative_desgin.P_02.P_2_1_5_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_5_01.key_pressed))?(function() { 
var G__22495__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_5_01.key_pressed,args);
};
var G__22495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22496__i = 0, G__22496__a = new Array(arguments.length -  0);
while (G__22496__i < G__22496__a.length) {G__22496__a[G__22496__i] = arguments[G__22496__i + 0]; ++G__22496__i;}
  args = new cljs.core.IndexedSeq(G__22496__a,0,null);
} 
return G__22495__delegate.call(this,args);};
G__22495.cljs$lang$maxFixedArity = 0;
G__22495.cljs$lang$applyTo = (function (arglist__22497){
var args = cljs.core.seq(arglist__22497);
return G__22495__delegate(args);
});
G__22495.cljs$core$IFn$_invoke$arity$variadic = G__22495__delegate;
return G__22495;
})()
:sketches.generative_desgin.P_02.P_2_1_5_01.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_5_01.draw))?(function() { 
var G__22498__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_5_01.draw,args);
};
var G__22498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22499__i = 0, G__22499__a = new Array(arguments.length -  0);
while (G__22499__i < G__22499__a.length) {G__22499__a[G__22499__i] = arguments[G__22499__i + 0]; ++G__22499__i;}
  args = new cljs.core.IndexedSeq(G__22499__a,0,null);
} 
return G__22498__delegate.call(this,args);};
G__22498.cljs$lang$maxFixedArity = 0;
G__22498.cljs$lang$applyTo = (function (arglist__22500){
var args = cljs.core.seq(arglist__22500);
return G__22498__delegate(args);
});
G__22498.cljs$core$IFn$_invoke$arity$variadic = G__22498__delegate;
return G__22498;
})()
:sketches.generative_desgin.P_02.P_2_1_5_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_1_5_01.moire_in_a_grid', sketches.generative_desgin.P_02.P_2_1_5_01.moire_in_a_grid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_1_5_01.moire_in_a_grid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22501__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22502__i = 0, G__22502__a = new Array(arguments.length -  0);
while (G__22502__i < G__22502__a.length) {G__22502__a[G__22502__i] = arguments[G__22502__i + 0]; ++G__22502__i;}
  args = new cljs.core.IndexedSeq(G__22502__a,0,null);
} 
return G__22501__delegate.call(this,args);};
G__22501.cljs$lang$maxFixedArity = 0;
G__22501.cljs$lang$applyTo = (function (arglist__22503){
var args = cljs.core.seq(arglist__22503);
return G__22501__delegate(args);
});
G__22501.cljs$core$IFn$_invoke$arity$variadic = G__22501__delegate;
return G__22501;
})()
:host)], null));
}
});
