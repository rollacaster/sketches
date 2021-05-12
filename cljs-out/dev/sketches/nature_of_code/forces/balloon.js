// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.balloon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.forces.balloon.setup = (function sketches$nature_of_code$forces$balloon$setup(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$xoff,0.001], null);
});
sketches.nature_of_code.forces.balloon.keep_inside = (function sketches$nature_of_code$forces$balloon$keep_inside(p__20740){
var vec__20741 = p__20740;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?quil.core.width():(((x < (0)))?(0):x)),(((y > quil.core.height()))?quil.core.height():(((y < (0)))?(0):y))], null);
});
sketches.nature_of_code.forces.balloon.is_stopped = (function sketches$nature_of_code$forces$balloon$is_stopped(p__20744){
var map__20745 = p__20744;
var map__20745__$1 = ((((!((map__20745 == null)))?(((((map__20745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20745):map__20745);
var vec__20746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,cljs.core.cst$kw$location);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20746,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20746,(1),null);
var vec__20749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,cljs.core.cst$kw$velocity);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(1),null);
return (((vy <= 0.02)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))));
});
sketches.nature_of_code.forces.balloon.update_state = (function sketches$nature_of_code$forces$balloon$update_state(state){
var map__20753 = state;
var map__20753__$1 = ((((!((map__20753 == null)))?(((((map__20753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20753):map__20753);
var xoff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,cljs.core.cst$kw$xoff);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,cljs.core.cst$kw$location);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20753__$1,cljs.core.cst$kw$acceleration);
var gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.05], null);
var acceleration__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$1(xoff),(0),(1),-0.05,0.05),(0)], null);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(gravity,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration__$1));
var location__$1 = sketches.nature_of_code.forces.balloon.keep_inside(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$velocity,(((cljs.core.second(location__$1) <= (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- (cljs.core.second(velocity__$1) / (2)))], null):(cljs.core.truth_(sketches.nature_of_code.forces.balloon.is_stopped(state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):velocity__$1
)),cljs.core.cst$kw$location,(cljs.core.truth_(sketches.nature_of_code.forces.balloon.is_stopped(state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null):location__$1),cljs.core.cst$kw$xoff,(xoff + 0.001)], null),cljs.core.cst$kw$location,sketches.nature_of_code.forces.balloon.keep_inside);
});
sketches.nature_of_code.forces.balloon.draw = (function sketches$nature_of_code$forces$balloon$draw(p__20755){
var map__20756 = p__20755;
var map__20756__$1 = ((((!((map__20756 == null)))?(((((map__20756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20756):map__20756);
var vec__20757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20757,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20757,(1),null);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(0));

quil.core.line.cljs$core$IFn$_invoke$arity$4(x,(y + (32)),x,(y + (100)));

return quil.core.ellipse(x,y,(45),(64));
});
sketches.nature_of_code.forces.balloon.run = (function sketches$nature_of_code$forces$balloon$run(host){
sketches.nature_of_code.forces.balloon.balloon = (function sketches$nature_of_code$forces$balloon$run_$_balloon(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20761__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20762__i = 0, G__20762__a = new Array(arguments.length -  0);
while (G__20762__i < G__20762__a.length) {G__20762__a[G__20762__i] = arguments[G__20762__i + 0]; ++G__20762__i;}
  args = new cljs.core.IndexedSeq(G__20762__a,0,null);
} 
return G__20761__delegate.call(this,args);};
G__20761.cljs$lang$maxFixedArity = 0;
G__20761.cljs$lang$applyTo = (function (arglist__20763){
var args = cljs.core.seq(arglist__20763);
return G__20761__delegate(args);
});
G__20761.cljs$core$IFn$_invoke$arity$variadic = G__20761__delegate;
return G__20761;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.balloon.update_state))?(function() { 
var G__20764__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.balloon.update_state,args);
};
var G__20764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20765__i = 0, G__20765__a = new Array(arguments.length -  0);
while (G__20765__i < G__20765__a.length) {G__20765__a[G__20765__i] = arguments[G__20765__i + 0]; ++G__20765__i;}
  args = new cljs.core.IndexedSeq(G__20765__a,0,null);
} 
return G__20764__delegate.call(this,args);};
G__20764.cljs$lang$maxFixedArity = 0;
G__20764.cljs$lang$applyTo = (function (arglist__20766){
var args = cljs.core.seq(arglist__20766);
return G__20764__delegate(args);
});
G__20764.cljs$core$IFn$_invoke$arity$variadic = G__20764__delegate;
return G__20764;
})()
:sketches.nature_of_code.forces.balloon.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.balloon.setup))?(function() { 
var G__20767__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.balloon.setup,args);
};
var G__20767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20768__i = 0, G__20768__a = new Array(arguments.length -  0);
while (G__20768__i < G__20768__a.length) {G__20768__a[G__20768__i] = arguments[G__20768__i + 0]; ++G__20768__i;}
  args = new cljs.core.IndexedSeq(G__20768__a,0,null);
} 
return G__20767__delegate.call(this,args);};
G__20767.cljs$lang$maxFixedArity = 0;
G__20767.cljs$lang$applyTo = (function (arglist__20769){
var args = cljs.core.seq(arglist__20769);
return G__20767__delegate(args);
});
G__20767.cljs$core$IFn$_invoke$arity$variadic = G__20767__delegate;
return G__20767;
})()
:sketches.nature_of_code.forces.balloon.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.balloon.draw))?(function() { 
var G__20770__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.balloon.draw,args);
};
var G__20770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20771__i = 0, G__20771__a = new Array(arguments.length -  0);
while (G__20771__i < G__20771__a.length) {G__20771__a[G__20771__i] = arguments[G__20771__i + 0]; ++G__20771__i;}
  args = new cljs.core.IndexedSeq(G__20771__a,0,null);
} 
return G__20770__delegate.call(this,args);};
G__20770.cljs$lang$maxFixedArity = 0;
G__20770.cljs$lang$applyTo = (function (arglist__20772){
var args = cljs.core.seq(arglist__20772);
return G__20770__delegate(args);
});
G__20770.cljs$core$IFn$_invoke$arity$variadic = G__20770__delegate;
return G__20770;
})()
:sketches.nature_of_code.forces.balloon.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.balloon.balloon', sketches.nature_of_code.forces.balloon.balloon);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.balloon.balloon,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20773__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20774__i = 0, G__20774__a = new Array(arguments.length -  0);
while (G__20774__i < G__20774__a.length) {G__20774__a[G__20774__i] = arguments[G__20774__i + 0]; ++G__20774__i;}
  args = new cljs.core.IndexedSeq(G__20774__a,0,null);
} 
return G__20773__delegate.call(this,args);};
G__20773.cljs$lang$maxFixedArity = 0;
G__20773.cljs$lang$applyTo = (function (arglist__20775){
var args = cljs.core.seq(arglist__20775);
return G__20773__delegate(args);
});
G__20773.cljs$core$IFn$_invoke$arity$variadic = G__20773__delegate;
return G__20773;
})()
:host)], null));
}
});
