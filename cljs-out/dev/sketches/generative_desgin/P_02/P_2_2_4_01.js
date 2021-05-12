// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_2_4_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_2_4_01.max_count = (500);
sketches.generative_desgin.P_02.P_2_2_4_01.setup = (function sketches$generative_desgin$P_02$P_2_2_4_01$setup(){
quil.core.stroke_weight(0.5);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$current_DASH_count,(1),cljs.core.cst$kw$x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2))], null),cljs.core.cst$kw$y,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.height() / (2))], null),cljs.core.cst$kw$r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null);
});
sketches.generative_desgin.P_02.P_2_2_4_01.update_state = (function sketches$generative_desgin$P_02$P_2_2_4_01$update_state(p__21293){
var map__21294 = p__21293;
var map__21294__$1 = ((((!((map__21294 == null)))?(((((map__21294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21294):map__21294);
var current_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,cljs.core.cst$kw$current_DASH_count);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,cljs.core.cst$kw$r);
if((current_count >= sketches.generative_desgin.P_02.P_2_2_4_01.max_count)){
quil.core.no_loop();
} else {
}

var new_r = quil.core.random.cljs$core$IFn$_invoke$arity$2((1),(7));
var new_x = quil.core.random.cljs$core$IFn$_invoke$arity$2(new_r,(quil.core.width() - new_r));
var new_y = quil.core.random.cljs$core$IFn$_invoke$arity$2(new_r,(quil.core.height() - new_r));
var vec__21296 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_r,new_x,new_y,map__21294,map__21294__$1,current_count,x,y,r){
return (function (p__21299,i){
var vec__21300 = p__21299;
var closest_dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21300,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21300,(1),null);
var new_dist = quil.core.dist.cljs$core$IFn$_invoke$arity$4(new_x,new_y,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,i));
if((new_dist < closest_dist)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_dist,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [closest_dist,j], null);
}
});})(new_r,new_x,new_y,map__21294,map__21294__$1,current_count,x,y,r))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number.MAX_VALUE,(0)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),current_count));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(0),null);
var closest_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(1),null);
var angle = quil.core.atan2((new_y - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,closest_i)),(new_x - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,closest_i)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.cons((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,closest_i) + (quil.core.cos(angle) * (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,closest_i) + new_r))),x),cljs.core.cst$kw$y,cljs.core.cons((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,closest_i) + (quil.core.sin(angle) * (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,closest_i) + new_r))),y),cljs.core.cst$kw$r,cljs.core.cons(new_r,r),cljs.core.cst$kw$current_DASH_count,(current_count + (1))], null);
});
sketches.generative_desgin.P_02.P_2_2_4_01.draw = (function sketches$generative_desgin$P_02$P_2_2_4_01$draw(p__21303){
var map__21304 = p__21303;
var map__21304__$1 = ((((!((map__21304 == null)))?(((((map__21304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21304):map__21304);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,cljs.core.cst$kw$r);
var current_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,cljs.core.cst$kw$current_DASH_count);
quil.core.clear();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((50));

var seq__21306 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),current_count));
var chunk__21307 = null;
var count__21308 = (0);
var i__21309 = (0);
while(true){
if((i__21309 < count__21308)){
var i = chunk__21307.cljs$core$IIndexed$_nth$arity$2(null,i__21309);
quil.core.ellipse(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,i),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,i) * (2)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,i) * (2)));


var G__21310 = seq__21306;
var G__21311 = chunk__21307;
var G__21312 = count__21308;
var G__21313 = (i__21309 + (1));
seq__21306 = G__21310;
chunk__21307 = G__21311;
count__21308 = G__21312;
i__21309 = G__21313;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21306);
if(temp__5735__auto__){
var seq__21306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21306__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21306__$1);
var G__21314 = cljs.core.chunk_rest(seq__21306__$1);
var G__21315 = c__4351__auto__;
var G__21316 = cljs.core.count(c__4351__auto__);
var G__21317 = (0);
seq__21306 = G__21314;
chunk__21307 = G__21315;
count__21308 = G__21316;
i__21309 = G__21317;
continue;
} else {
var i = cljs.core.first(seq__21306__$1);
quil.core.ellipse(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,i),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,i) * (2)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,i) * (2)));


var G__21318 = cljs.core.next(seq__21306__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21306 = G__21318;
chunk__21307 = G__21319;
count__21308 = G__21320;
i__21309 = G__21321;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_2_4_01.run = (function sketches$generative_desgin$P_02$P_2_2_4_01$run(host){
sketches.generative_desgin.P_02.P_2_2_4_01.growth_structure_from_agents = (function sketches$generative_desgin$P_02$P_2_2_4_01$run_$_growth_structure_from_agents(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21322__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21323__i = 0, G__21323__a = new Array(arguments.length -  0);
while (G__21323__i < G__21323__a.length) {G__21323__a[G__21323__i] = arguments[G__21323__i + 0]; ++G__21323__i;}
  args = new cljs.core.IndexedSeq(G__21323__a,0,null);
} 
return G__21322__delegate.call(this,args);};
G__21322.cljs$lang$maxFixedArity = 0;
G__21322.cljs$lang$applyTo = (function (arglist__21324){
var args = cljs.core.seq(arglist__21324);
return G__21322__delegate(args);
});
G__21322.cljs$core$IFn$_invoke$arity$variadic = G__21322__delegate;
return G__21322;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_4_01.update_state))?(function() { 
var G__21325__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_4_01.update_state,args);
};
var G__21325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21326__i = 0, G__21326__a = new Array(arguments.length -  0);
while (G__21326__i < G__21326__a.length) {G__21326__a[G__21326__i] = arguments[G__21326__i + 0]; ++G__21326__i;}
  args = new cljs.core.IndexedSeq(G__21326__a,0,null);
} 
return G__21325__delegate.call(this,args);};
G__21325.cljs$lang$maxFixedArity = 0;
G__21325.cljs$lang$applyTo = (function (arglist__21327){
var args = cljs.core.seq(arglist__21327);
return G__21325__delegate(args);
});
G__21325.cljs$core$IFn$_invoke$arity$variadic = G__21325__delegate;
return G__21325;
})()
:sketches.generative_desgin.P_02.P_2_2_4_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_4_01.setup))?(function() { 
var G__21328__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_4_01.setup,args);
};
var G__21328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21329__i = 0, G__21329__a = new Array(arguments.length -  0);
while (G__21329__i < G__21329__a.length) {G__21329__a[G__21329__i] = arguments[G__21329__i + 0]; ++G__21329__i;}
  args = new cljs.core.IndexedSeq(G__21329__a,0,null);
} 
return G__21328__delegate.call(this,args);};
G__21328.cljs$lang$maxFixedArity = 0;
G__21328.cljs$lang$applyTo = (function (arglist__21330){
var args = cljs.core.seq(arglist__21330);
return G__21328__delegate(args);
});
G__21328.cljs$core$IFn$_invoke$arity$variadic = G__21328__delegate;
return G__21328;
})()
:sketches.generative_desgin.P_02.P_2_2_4_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_4_01.draw))?(function() { 
var G__21331__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_4_01.draw,args);
};
var G__21331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21332__i = 0, G__21332__a = new Array(arguments.length -  0);
while (G__21332__i < G__21332__a.length) {G__21332__a[G__21332__i] = arguments[G__21332__i + 0]; ++G__21332__i;}
  args = new cljs.core.IndexedSeq(G__21332__a,0,null);
} 
return G__21331__delegate.call(this,args);};
G__21331.cljs$lang$maxFixedArity = 0;
G__21331.cljs$lang$applyTo = (function (arglist__21333){
var args = cljs.core.seq(arglist__21333);
return G__21331__delegate(args);
});
G__21331.cljs$core$IFn$_invoke$arity$variadic = G__21331__delegate;
return G__21331;
})()
:sketches.generative_desgin.P_02.P_2_2_4_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_2_4_01.growth_structure_from_agents', sketches.generative_desgin.P_02.P_2_2_4_01.growth_structure_from_agents);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_2_4_01.growth_structure_from_agents,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21334__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21335__i = 0, G__21335__a = new Array(arguments.length -  0);
while (G__21335__i < G__21335__a.length) {G__21335__a[G__21335__i] = arguments[G__21335__i + 0]; ++G__21335__i;}
  args = new cljs.core.IndexedSeq(G__21335__a,0,null);
} 
return G__21334__delegate.call(this,args);};
G__21334.cljs$lang$maxFixedArity = 0;
G__21334.cljs$lang$applyTo = (function (arglist__21336){
var args = cljs.core.seq(arglist__21336);
return G__21334__delegate(args);
});
G__21334.cljs$core$IFn$_invoke$arity$variadic = G__21334__delegate;
return G__21334;
})()
:host)], null));
}
});
