// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_2_1_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_2_1_01.north = (0);
sketches.generative_desgin.P_02.P_2_2_1_01.north_east = (1);
sketches.generative_desgin.P_02.P_2_2_1_01.east = (2);
sketches.generative_desgin.P_02.P_2_2_1_01.south_east = (3);
sketches.generative_desgin.P_02.P_2_2_1_01.south = (4);
sketches.generative_desgin.P_02.P_2_2_1_01.south_west = (5);
sketches.generative_desgin.P_02.P_2_2_1_01.west = (6);
sketches.generative_desgin.P_02.P_2_2_1_01.north_west = (7);
sketches.generative_desgin.P_02.P_2_2_1_01.step_size = (1);
sketches.generative_desgin.P_02.P_2_2_1_01.diameter = (1);
sketches.generative_desgin.P_02.P_2_2_1_01.setup = (function sketches$generative_desgin$P_02$P_2_2_1_01$setup(){
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(40));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos_DASH_x,(quil.core.width() / (2)),cljs.core.cst$kw$pos_DASH_y,(quil.core.height() / (2))], null)], null);
});
sketches.generative_desgin.P_02.P_2_2_1_01.update_pos = (function sketches$generative_desgin$P_02$P_2_2_1_01$update_pos(pos){
var direction = cljs.core.rand_int((8));
var map__21174 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.north))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_y,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.north_east))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size),cljs.core.cst$kw$pos_DASH_y,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.east))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.south_east))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size),cljs.core.cst$kw$pos_DASH_y,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.south))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_y,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.south_west))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size),cljs.core.cst$kw$pos_DASH_y,cljs.core._PLUS_,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.west))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,sketches.generative_desgin.P_02.P_2_2_1_01.north_west))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$pos_DASH_x,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size),cljs.core.cst$kw$pos_DASH_y,cljs.core._,sketches.generative_desgin.P_02.P_2_2_1_01.step_size):null))))))));
var map__21174__$1 = ((((!((map__21174 == null)))?(((((map__21174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21174):map__21174);
var pos_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$pos_DASH_x);
var pos_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.cst$kw$pos_DASH_y);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos_DASH_x,(((pos_x > quil.core.width()))?(0):(((pos_x < (0)))?quil.core.width():pos_x
)),cljs.core.cst$kw$pos_DASH_y,(((pos_y > quil.core.height()))?(0):(((pos_y < (0)))?quil.core.height():pos_y
))], null);
});
sketches.generative_desgin.P_02.P_2_2_1_01.update_state = (function sketches$generative_desgin$P_02$P_2_2_1_01$update_state(state){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_x(),cljs.core.iterate(sketches.generative_desgin.P_02.P_2_2_1_01.update_pos,cljs.core.last(state)));
});
sketches.generative_desgin.P_02.P_2_2_1_01.draw = (function sketches$generative_desgin$P_02$P_2_2_1_01$draw(state){
var seq__21176 = cljs.core.seq(state);
var chunk__21177 = null;
var count__21178 = (0);
var i__21179 = (0);
while(true){
if((i__21179 < count__21178)){
var map__21180 = chunk__21177.cljs$core$IIndexed$_nth$arity$2(null,i__21179);
var map__21180__$1 = ((((!((map__21180 == null)))?(((((map__21180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21180):map__21180);
var pos_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,cljs.core.cst$kw$pos_DASH_x);
var pos_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,cljs.core.cst$kw$pos_DASH_y);
quil.core.ellipse((pos_x + (sketches.generative_desgin.P_02.P_2_2_1_01.step_size / (2))),(pos_y + (sketches.generative_desgin.P_02.P_2_2_1_01.step_size / (2))),sketches.generative_desgin.P_02.P_2_2_1_01.diameter,sketches.generative_desgin.P_02.P_2_2_1_01.diameter);


var G__21184 = seq__21176;
var G__21185 = chunk__21177;
var G__21186 = count__21178;
var G__21187 = (i__21179 + (1));
seq__21176 = G__21184;
chunk__21177 = G__21185;
count__21178 = G__21186;
i__21179 = G__21187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21176);
if(temp__5735__auto__){
var seq__21176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21176__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21176__$1);
var G__21188 = cljs.core.chunk_rest(seq__21176__$1);
var G__21189 = c__4351__auto__;
var G__21190 = cljs.core.count(c__4351__auto__);
var G__21191 = (0);
seq__21176 = G__21188;
chunk__21177 = G__21189;
count__21178 = G__21190;
i__21179 = G__21191;
continue;
} else {
var map__21182 = cljs.core.first(seq__21176__$1);
var map__21182__$1 = ((((!((map__21182 == null)))?(((((map__21182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21182):map__21182);
var pos_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182__$1,cljs.core.cst$kw$pos_DASH_x);
var pos_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182__$1,cljs.core.cst$kw$pos_DASH_y);
quil.core.ellipse((pos_x + (sketches.generative_desgin.P_02.P_2_2_1_01.step_size / (2))),(pos_y + (sketches.generative_desgin.P_02.P_2_2_1_01.step_size / (2))),sketches.generative_desgin.P_02.P_2_2_1_01.diameter,sketches.generative_desgin.P_02.P_2_2_1_01.diameter);


var G__21192 = cljs.core.next(seq__21176__$1);
var G__21193 = null;
var G__21194 = (0);
var G__21195 = (0);
seq__21176 = G__21192;
chunk__21177 = G__21193;
count__21178 = G__21194;
i__21179 = G__21195;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_2_1_01.run = (function sketches$generative_desgin$P_02$P_2_2_1_01$run(host){
sketches.generative_desgin.P_02.P_2_2_1_01.dumb_agents = (function sketches$generative_desgin$P_02$P_2_2_1_01$run_$_dumb_agents(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21196__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21197__i = 0, G__21197__a = new Array(arguments.length -  0);
while (G__21197__i < G__21197__a.length) {G__21197__a[G__21197__i] = arguments[G__21197__i + 0]; ++G__21197__i;}
  args = new cljs.core.IndexedSeq(G__21197__a,0,null);
} 
return G__21196__delegate.call(this,args);};
G__21196.cljs$lang$maxFixedArity = 0;
G__21196.cljs$lang$applyTo = (function (arglist__21198){
var args = cljs.core.seq(arglist__21198);
return G__21196__delegate(args);
});
G__21196.cljs$core$IFn$_invoke$arity$variadic = G__21196__delegate;
return G__21196;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_1_01.update_state))?(function() { 
var G__21199__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_1_01.update_state,args);
};
var G__21199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21200__i = 0, G__21200__a = new Array(arguments.length -  0);
while (G__21200__i < G__21200__a.length) {G__21200__a[G__21200__i] = arguments[G__21200__i + 0]; ++G__21200__i;}
  args = new cljs.core.IndexedSeq(G__21200__a,0,null);
} 
return G__21199__delegate.call(this,args);};
G__21199.cljs$lang$maxFixedArity = 0;
G__21199.cljs$lang$applyTo = (function (arglist__21201){
var args = cljs.core.seq(arglist__21201);
return G__21199__delegate(args);
});
G__21199.cljs$core$IFn$_invoke$arity$variadic = G__21199__delegate;
return G__21199;
})()
:sketches.generative_desgin.P_02.P_2_2_1_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_1_01.setup))?(function() { 
var G__21202__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_1_01.setup,args);
};
var G__21202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21203__i = 0, G__21203__a = new Array(arguments.length -  0);
while (G__21203__i < G__21203__a.length) {G__21203__a[G__21203__i] = arguments[G__21203__i + 0]; ++G__21203__i;}
  args = new cljs.core.IndexedSeq(G__21203__a,0,null);
} 
return G__21202__delegate.call(this,args);};
G__21202.cljs$lang$maxFixedArity = 0;
G__21202.cljs$lang$applyTo = (function (arglist__21204){
var args = cljs.core.seq(arglist__21204);
return G__21202__delegate(args);
});
G__21202.cljs$core$IFn$_invoke$arity$variadic = G__21202__delegate;
return G__21202;
})()
:sketches.generative_desgin.P_02.P_2_2_1_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_1_01.draw))?(function() { 
var G__21205__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_1_01.draw,args);
};
var G__21205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21206__i = 0, G__21206__a = new Array(arguments.length -  0);
while (G__21206__i < G__21206__a.length) {G__21206__a[G__21206__i] = arguments[G__21206__i + 0]; ++G__21206__i;}
  args = new cljs.core.IndexedSeq(G__21206__a,0,null);
} 
return G__21205__delegate.call(this,args);};
G__21205.cljs$lang$maxFixedArity = 0;
G__21205.cljs$lang$applyTo = (function (arglist__21207){
var args = cljs.core.seq(arglist__21207);
return G__21205__delegate(args);
});
G__21205.cljs$core$IFn$_invoke$arity$variadic = G__21205__delegate;
return G__21205;
})()
:sketches.generative_desgin.P_02.P_2_2_1_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_2_1_01.dumb_agents', sketches.generative_desgin.P_02.P_2_2_1_01.dumb_agents);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_2_1_01.dumb_agents,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21208__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21209__i = 0, G__21209__a = new Array(arguments.length -  0);
while (G__21209__i < G__21209__a.length) {G__21209__a[G__21209__i] = arguments[G__21209__i + 0]; ++G__21209__i;}
  args = new cljs.core.IndexedSeq(G__21209__a,0,null);
} 
return G__21208__delegate.call(this,args);};
G__21208.cljs$lang$maxFixedArity = 0;
G__21208.cljs$lang$applyTo = (function (arglist__21210){
var args = cljs.core.seq(arglist__21210);
return G__21208__delegate(args);
});
G__21208.cljs$core$IFn$_invoke$arity$variadic = G__21208__delegate;
return G__21208;
})()
:host)], null));
}
});
