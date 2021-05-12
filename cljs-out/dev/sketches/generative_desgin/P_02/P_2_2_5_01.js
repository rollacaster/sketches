// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_2_5_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_2_5_01.min_radius = (3);
sketches.generative_desgin.P_02.P_2_2_5_01.max_radius = (30);
sketches.generative_desgin.P_02.P_2_2_5_01.setup = (function sketches$generative_desgin$P_02$P_2_2_5_01$setup(){
quil.core.no_fill();

quil.core.rect_mode(cljs.core.cst$kw$radius);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$circles,cljs.core.PersistentVector.EMPTY], null);
});
sketches.generative_desgin.P_02.P_2_2_5_01.update_state = (function sketches$generative_desgin$P_02$P_2_2_5_01$update_state(p__22545){
var map__22546 = p__22545;
var map__22546__$1 = ((((!((map__22546 == null)))?(((((map__22546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22546):map__22546);
var state = map__22546__$1;
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22546__$1,cljs.core.cst$kw$circles);
var new_x = quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.width());
var new_y = quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.height());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$circles,(function (){var new_r = sketches.generative_desgin.P_02.P_2_2_5_01.max_radius;
while(true){
if((new_r > sketches.generative_desgin.P_02.P_2_2_5_01.min_radius)){
var overlapping_QMARK_ = cljs.core.some(((function (new_r,new_x,new_y,map__22546,map__22546__$1,state,circles){
return (function (p__22548){
var vec__22549 = p__22548;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(2),null);
return (quil.core.dist.cljs$core$IFn$_invoke$arity$4(new_x,new_y,x,y) < (r + new_r));
});})(new_r,new_x,new_y,map__22546,map__22546__$1,state,circles))
,circles);
if(cljs.core.truth_(overlapping_QMARK_)){
var G__22552 = (new_r - (1));
new_r = G__22552;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(circles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y,new_r], null));
}
} else {
return circles;
}
break;
}
})());
});
sketches.generative_desgin.P_02.P_2_2_5_01.draw = (function sketches$generative_desgin$P_02$P_2_2_5_01$draw(p__22553){
var map__22554 = p__22553;
var map__22554__$1 = ((((!((map__22554 == null)))?(((((map__22554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22554):map__22554);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22554__$1,cljs.core.cst$kw$circles);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__22556 = cljs.core.seq(circles);
var chunk__22557 = null;
var count__22558 = (0);
var i__22559 = (0);
while(true){
if((i__22559 < count__22558)){
var vec__22560 = chunk__22557.cljs$core$IIndexed$_nth$arity$2(null,i__22559);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22560,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22560,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22560,(2),null);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight(1.5);

quil.core.ellipse(x,y,((2) * r),((2) * r));


var G__22566 = seq__22556;
var G__22567 = chunk__22557;
var G__22568 = count__22558;
var G__22569 = (i__22559 + (1));
seq__22556 = G__22566;
chunk__22557 = G__22567;
count__22558 = G__22568;
i__22559 = G__22569;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22556);
if(temp__5735__auto__){
var seq__22556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22556__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22556__$1);
var G__22570 = cljs.core.chunk_rest(seq__22556__$1);
var G__22571 = c__4351__auto__;
var G__22572 = cljs.core.count(c__4351__auto__);
var G__22573 = (0);
seq__22556 = G__22570;
chunk__22557 = G__22571;
count__22558 = G__22572;
i__22559 = G__22573;
continue;
} else {
var vec__22563 = cljs.core.first(seq__22556__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(2),null);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight(1.5);

quil.core.ellipse(x,y,((2) * r),((2) * r));


var G__22574 = cljs.core.next(seq__22556__$1);
var G__22575 = null;
var G__22576 = (0);
var G__22577 = (0);
seq__22556 = G__22574;
chunk__22557 = G__22575;
count__22558 = G__22576;
i__22559 = G__22577;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_2_5_01.run = (function sketches$generative_desgin$P_02$P_2_2_5_01$run(host){
sketches.generative_desgin.P_02.P_2_2_5_01.structural_density_from_agents = (function sketches$generative_desgin$P_02$P_2_2_5_01$run_$_structural_density_from_agents(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22578__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22579__i = 0, G__22579__a = new Array(arguments.length -  0);
while (G__22579__i < G__22579__a.length) {G__22579__a[G__22579__i] = arguments[G__22579__i + 0]; ++G__22579__i;}
  args = new cljs.core.IndexedSeq(G__22579__a,0,null);
} 
return G__22578__delegate.call(this,args);};
G__22578.cljs$lang$maxFixedArity = 0;
G__22578.cljs$lang$applyTo = (function (arglist__22580){
var args = cljs.core.seq(arglist__22580);
return G__22578__delegate(args);
});
G__22578.cljs$core$IFn$_invoke$arity$variadic = G__22578__delegate;
return G__22578;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_5_01.update_state))?(function() { 
var G__22581__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_5_01.update_state,args);
};
var G__22581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22582__i = 0, G__22582__a = new Array(arguments.length -  0);
while (G__22582__i < G__22582__a.length) {G__22582__a[G__22582__i] = arguments[G__22582__i + 0]; ++G__22582__i;}
  args = new cljs.core.IndexedSeq(G__22582__a,0,null);
} 
return G__22581__delegate.call(this,args);};
G__22581.cljs$lang$maxFixedArity = 0;
G__22581.cljs$lang$applyTo = (function (arglist__22583){
var args = cljs.core.seq(arglist__22583);
return G__22581__delegate(args);
});
G__22581.cljs$core$IFn$_invoke$arity$variadic = G__22581__delegate;
return G__22581;
})()
:sketches.generative_desgin.P_02.P_2_2_5_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_5_01.setup))?(function() { 
var G__22584__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_5_01.setup,args);
};
var G__22584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22585__i = 0, G__22585__a = new Array(arguments.length -  0);
while (G__22585__i < G__22585__a.length) {G__22585__a[G__22585__i] = arguments[G__22585__i + 0]; ++G__22585__i;}
  args = new cljs.core.IndexedSeq(G__22585__a,0,null);
} 
return G__22584__delegate.call(this,args);};
G__22584.cljs$lang$maxFixedArity = 0;
G__22584.cljs$lang$applyTo = (function (arglist__22586){
var args = cljs.core.seq(arglist__22586);
return G__22584__delegate(args);
});
G__22584.cljs$core$IFn$_invoke$arity$variadic = G__22584__delegate;
return G__22584;
})()
:sketches.generative_desgin.P_02.P_2_2_5_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_5_01.draw))?(function() { 
var G__22587__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_5_01.draw,args);
};
var G__22587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22588__i = 0, G__22588__a = new Array(arguments.length -  0);
while (G__22588__i < G__22588__a.length) {G__22588__a[G__22588__i] = arguments[G__22588__i + 0]; ++G__22588__i;}
  args = new cljs.core.IndexedSeq(G__22588__a,0,null);
} 
return G__22587__delegate.call(this,args);};
G__22587.cljs$lang$maxFixedArity = 0;
G__22587.cljs$lang$applyTo = (function (arglist__22589){
var args = cljs.core.seq(arglist__22589);
return G__22587__delegate(args);
});
G__22587.cljs$core$IFn$_invoke$arity$variadic = G__22587__delegate;
return G__22587;
})()
:sketches.generative_desgin.P_02.P_2_2_5_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_2_5_01.structural_density_from_agents', sketches.generative_desgin.P_02.P_2_2_5_01.structural_density_from_agents);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_2_5_01.structural_density_from_agents,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22590__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22591__i = 0, G__22591__a = new Array(arguments.length -  0);
while (G__22591__i < G__22591__a.length) {G__22591__a[G__22591__i] = arguments[G__22591__i + 0]; ++G__22591__i;}
  args = new cljs.core.IndexedSeq(G__22591__a,0,null);
} 
return G__22590__delegate.call(this,args);};
G__22590.cljs$lang$maxFixedArity = 0;
G__22590.cljs$lang$applyTo = (function (arglist__22592){
var args = cljs.core.seq(arglist__22592);
return G__22590__delegate(args);
});
G__22590.cljs$core$IFn$_invoke$arity$variadic = G__22590__delegate;
return G__22590;
})()
:host)], null));
}
});
