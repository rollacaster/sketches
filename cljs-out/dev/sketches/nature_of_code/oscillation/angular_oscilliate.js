// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.angular_oscilliate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.oscillation.angular_oscilliate.setup = (function sketches$nature_of_code$oscillation$angular_oscilliate$setup(){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-30),(-30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(-50)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(-50)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(0)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-30),(-30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(50)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.03], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null)], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null));
});
sketches.nature_of_code.oscillation.angular_oscilliate.draw = (function sketches$nature_of_code$oscillation$angular_oscilliate$draw(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__22384 = cljs.core.seq(state);
var chunk__22385 = null;
var count__22386 = (0);
var i__22387 = (0);
while(true){
if((i__22387 < count__22386)){
var map__22388 = chunk__22385.cljs$core$IIndexed$_nth$arity$2(null,i__22387);
var map__22388__$1 = ((((!((map__22388 == null)))?(((((map__22388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22388):map__22388);
var vec__22389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.cst$kw$angle);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22389,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22389,(1),null);
var vec__22392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.cst$kw$amplitude);
var am1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392,(0),null);
var am2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392,(1),null);
var vec__22395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.cst$kw$location);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395,(0),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395,(1),null);
var x_22410 = (l1 + (am1 * quil.core.cos(a1)));
var y_22411 = (l2 + (am2 * quil.core.cos(a2)));
quil.core.push_matrix();

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((175));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x_22410,y_22411);

quil.core.ellipse(x_22410,y_22411,(20),(20));

quil.core.pop_matrix();


var G__22412 = seq__22384;
var G__22413 = chunk__22385;
var G__22414 = count__22386;
var G__22415 = (i__22387 + (1));
seq__22384 = G__22412;
chunk__22385 = G__22413;
count__22386 = G__22414;
i__22387 = G__22415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22384);
if(temp__5735__auto__){
var seq__22384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22384__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22384__$1);
var G__22416 = cljs.core.chunk_rest(seq__22384__$1);
var G__22417 = c__4351__auto__;
var G__22418 = cljs.core.count(c__4351__auto__);
var G__22419 = (0);
seq__22384 = G__22416;
chunk__22385 = G__22417;
count__22386 = G__22418;
i__22387 = G__22419;
continue;
} else {
var map__22399 = cljs.core.first(seq__22384__$1);
var map__22399__$1 = ((((!((map__22399 == null)))?(((((map__22399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22399):map__22399);
var vec__22400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,cljs.core.cst$kw$angle);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400,(1),null);
var vec__22403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,cljs.core.cst$kw$amplitude);
var am1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22403,(0),null);
var am2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22403,(1),null);
var vec__22406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22399__$1,cljs.core.cst$kw$location);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406,(0),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406,(1),null);
var x_22420 = (l1 + (am1 * quil.core.cos(a1)));
var y_22421 = (l2 + (am2 * quil.core.cos(a2)));
quil.core.push_matrix();

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((175));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x_22420,y_22421);

quil.core.ellipse(x_22420,y_22421,(20),(20));

quil.core.pop_matrix();


var G__22422 = cljs.core.next(seq__22384__$1);
var G__22423 = null;
var G__22424 = (0);
var G__22425 = (0);
seq__22384 = G__22422;
chunk__22385 = G__22423;
count__22386 = G__22424;
i__22387 = G__22425;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.angular_oscilliate.update_oscilliator = (function sketches$nature_of_code$oscillation$angular_oscilliate$update_oscilliator(p__22426){
var map__22427 = p__22426;
var map__22427__$1 = ((((!((map__22427 == null)))?(((((map__22427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22427):map__22427);
var o = map__22427__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427__$1,cljs.core.cst$kw$velocity);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(o,cljs.core.cst$kw$velocity,sketches.vector.add,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.0E-5,2.0E-5], null))),cljs.core.cst$kw$angle,sketches.vector.add,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity)),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
sketches.nature_of_code.oscillation.angular_oscilliate.update_state = (function sketches$nature_of_code$oscillation$angular_oscilliate$update_state(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.angular_oscilliate.update_oscilliator,state);
});
sketches.nature_of_code.oscillation.angular_oscilliate.run = (function sketches$nature_of_code$oscillation$angular_oscilliate$run(host){
sketches.nature_of_code.oscillation.angular_oscilliate.angular_oscilliate = (function sketches$nature_of_code$oscillation$angular_oscilliate$run_$_angular_oscilliate(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22429__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22430__i = 0, G__22430__a = new Array(arguments.length -  0);
while (G__22430__i < G__22430__a.length) {G__22430__a[G__22430__i] = arguments[G__22430__i + 0]; ++G__22430__i;}
  args = new cljs.core.IndexedSeq(G__22430__a,0,null);
} 
return G__22429__delegate.call(this,args);};
G__22429.cljs$lang$maxFixedArity = 0;
G__22429.cljs$lang$applyTo = (function (arglist__22431){
var args = cljs.core.seq(arglist__22431);
return G__22429__delegate(args);
});
G__22429.cljs$core$IFn$_invoke$arity$variadic = G__22429__delegate;
return G__22429;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.angular_oscilliate.update_state))?(function() { 
var G__22432__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.angular_oscilliate.update_state,args);
};
var G__22432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22433__i = 0, G__22433__a = new Array(arguments.length -  0);
while (G__22433__i < G__22433__a.length) {G__22433__a[G__22433__i] = arguments[G__22433__i + 0]; ++G__22433__i;}
  args = new cljs.core.IndexedSeq(G__22433__a,0,null);
} 
return G__22432__delegate.call(this,args);};
G__22432.cljs$lang$maxFixedArity = 0;
G__22432.cljs$lang$applyTo = (function (arglist__22434){
var args = cljs.core.seq(arglist__22434);
return G__22432__delegate(args);
});
G__22432.cljs$core$IFn$_invoke$arity$variadic = G__22432__delegate;
return G__22432;
})()
:sketches.nature_of_code.oscillation.angular_oscilliate.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.angular_oscilliate.setup))?(function() { 
var G__22435__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.angular_oscilliate.setup,args);
};
var G__22435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22436__i = 0, G__22436__a = new Array(arguments.length -  0);
while (G__22436__i < G__22436__a.length) {G__22436__a[G__22436__i] = arguments[G__22436__i + 0]; ++G__22436__i;}
  args = new cljs.core.IndexedSeq(G__22436__a,0,null);
} 
return G__22435__delegate.call(this,args);};
G__22435.cljs$lang$maxFixedArity = 0;
G__22435.cljs$lang$applyTo = (function (arglist__22437){
var args = cljs.core.seq(arglist__22437);
return G__22435__delegate(args);
});
G__22435.cljs$core$IFn$_invoke$arity$variadic = G__22435__delegate;
return G__22435;
})()
:sketches.nature_of_code.oscillation.angular_oscilliate.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.angular_oscilliate.draw))?(function() { 
var G__22438__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.angular_oscilliate.draw,args);
};
var G__22438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22439__i = 0, G__22439__a = new Array(arguments.length -  0);
while (G__22439__i < G__22439__a.length) {G__22439__a[G__22439__i] = arguments[G__22439__i + 0]; ++G__22439__i;}
  args = new cljs.core.IndexedSeq(G__22439__a,0,null);
} 
return G__22438__delegate.call(this,args);};
G__22438.cljs$lang$maxFixedArity = 0;
G__22438.cljs$lang$applyTo = (function (arglist__22440){
var args = cljs.core.seq(arglist__22440);
return G__22438__delegate(args);
});
G__22438.cljs$core$IFn$_invoke$arity$variadic = G__22438__delegate;
return G__22438;
})()
:sketches.nature_of_code.oscillation.angular_oscilliate.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.angular_oscilliate.angular_oscilliate', sketches.nature_of_code.oscillation.angular_oscilliate.angular_oscilliate);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.angular_oscilliate.angular_oscilliate,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22441__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22442__i = 0, G__22442__a = new Array(arguments.length -  0);
while (G__22442__i < G__22442__a.length) {G__22442__a[G__22442__i] = arguments[G__22442__i + 0]; ++G__22442__i;}
  args = new cljs.core.IndexedSeq(G__22442__a,0,null);
} 
return G__22441__delegate.call(this,args);};
G__22441.cljs$lang$maxFixedArity = 0;
G__22441.cljs$lang$applyTo = (function (arglist__22443){
var args = cljs.core.seq(arglist__22443);
return G__22441__delegate(args);
});
G__22441.cljs$core$IFn$_invoke$arity$variadic = G__22441__delegate;
return G__22441;
})()
:host)], null));
}
});
