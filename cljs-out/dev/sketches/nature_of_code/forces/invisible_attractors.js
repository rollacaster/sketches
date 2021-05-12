// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.invisible_attractors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.forces.invisible_attractors.compute_position = (function sketches$nature_of_code$forces$invisible_attractors$compute_position(p__20401){
var map__20402 = p__20401;
var map__20402__$1 = ((((!((map__20402 == null)))?(((((map__20402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20402):map__20402);
var mover = map__20402__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20402__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20402__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20402__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1);
});
sketches.nature_of_code.forces.invisible_attractors.setup = (function sketches$nature_of_code$forces$invisible_attractors$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$movers,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((1) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(quil.core.width()),cljs.core.rand_int(quil.core.height())], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))),cljs.core.cst$kw$attractors,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mass,cljs.core.rand_int((20)),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(quil.core.width()),cljs.core.rand_int(quil.core.height())], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)))], null);
});
sketches.nature_of_code.forces.invisible_attractors.attract = (function sketches$nature_of_code$forces$invisible_attractors$attract(mover,attractor){
var map__20404 = attractor;
var map__20404__$1 = ((((!((map__20404 == null)))?(((((map__20404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20404):map__20404);
var loc1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20404__$1,cljs.core.cst$kw$location);
var map__20405 = mover;
var map__20405__$1 = ((((!((map__20405 == null)))?(((((map__20405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20405):map__20405);
var loc2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20405__$1,cljs.core.cst$kw$location);
var vectorBetween = sketches.vector.sub(loc1,loc2);
var distanceBetween = quil.core.constrain(sketches.vector.mag(vectorBetween),5.0,25.0);
var G = 0.4;
var strength = (((G * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(attractor)) * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(mover)) / (distanceBetween * distanceBetween));
return sketches.vector.mult(sketches.vector.normalize(vectorBetween),strength);
});
sketches.nature_of_code.forces.invisible_attractors.update_mover = (function sketches$nature_of_code$forces$invisible_attractors$update_mover(attractors,mover){
return sketches.nature_of_code.forces.invisible_attractors.compute_position(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20408_SHARP_,p2__20409_SHARP_){
return sketches.mover.apply_force(mover,sketches.nature_of_code.forces.invisible_attractors.attract(p1__20408_SHARP_,p2__20409_SHARP_));
}),mover,attractors));
});
sketches.nature_of_code.forces.invisible_attractors.update_state = (function sketches$nature_of_code$forces$invisible_attractors$update_state(p__20410){
var map__20411 = p__20410;
var map__20411__$1 = ((((!((map__20411 == null)))?(((((map__20411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20411):map__20411);
var state = map__20411__$1;
var attractors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,cljs.core.cst$kw$attractors);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$movers,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.invisible_attractors.update_mover,attractors)));
});
sketches.nature_of_code.forces.invisible_attractors.draw = (function sketches$nature_of_code$forces$invisible_attractors$draw(p__20413){
var map__20414 = p__20413;
var map__20414__$1 = ((((!((map__20414 == null)))?(((((map__20414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20414):map__20414);
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20414__$1,cljs.core.cst$kw$movers);
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__20416 = cljs.core.seq(movers);
var chunk__20417 = null;
var count__20418 = (0);
var i__20419 = (0);
while(true){
if((i__20419 < count__20418)){
var map__20420 = chunk__20417.cljs$core$IIndexed$_nth$arity$2(null,i__20419);
var map__20420__$1 = ((((!((map__20420 == null)))?(((((map__20420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20420):map__20420);
var vec__20421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20421,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20430 = seq__20416;
var G__20431 = chunk__20417;
var G__20432 = count__20418;
var G__20433 = (i__20419 + (1));
seq__20416 = G__20430;
chunk__20417 = G__20431;
count__20418 = G__20432;
i__20419 = G__20433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20416);
if(temp__5735__auto__){
var seq__20416__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20416__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20416__$1);
var G__20434 = cljs.core.chunk_rest(seq__20416__$1);
var G__20435 = c__4351__auto__;
var G__20436 = cljs.core.count(c__4351__auto__);
var G__20437 = (0);
seq__20416 = G__20434;
chunk__20417 = G__20435;
count__20418 = G__20436;
i__20419 = G__20437;
continue;
} else {
var map__20425 = cljs.core.first(seq__20416__$1);
var map__20425__$1 = ((((!((map__20425 == null)))?(((((map__20425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20425):map__20425);
var vec__20426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20425__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20426,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20426,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20425__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20438 = cljs.core.next(seq__20416__$1);
var G__20439 = null;
var G__20440 = (0);
var G__20441 = (0);
seq__20416 = G__20438;
chunk__20417 = G__20439;
count__20418 = G__20440;
i__20419 = G__20441;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.invisible_attractors.run = (function sketches$nature_of_code$forces$invisible_attractors$run(host){
sketches.nature_of_code.forces.invisible_attractors.invisible_attractors = (function sketches$nature_of_code$forces$invisible_attractors$run_$_invisible_attractors(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20442__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20443__i = 0, G__20443__a = new Array(arguments.length -  0);
while (G__20443__i < G__20443__a.length) {G__20443__a[G__20443__i] = arguments[G__20443__i + 0]; ++G__20443__i;}
  args = new cljs.core.IndexedSeq(G__20443__a,0,null);
} 
return G__20442__delegate.call(this,args);};
G__20442.cljs$lang$maxFixedArity = 0;
G__20442.cljs$lang$applyTo = (function (arglist__20444){
var args = cljs.core.seq(arglist__20444);
return G__20442__delegate(args);
});
G__20442.cljs$core$IFn$_invoke$arity$variadic = G__20442__delegate;
return G__20442;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.invisible_attractors.update_state))?(function() { 
var G__20445__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.invisible_attractors.update_state,args);
};
var G__20445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20446__i = 0, G__20446__a = new Array(arguments.length -  0);
while (G__20446__i < G__20446__a.length) {G__20446__a[G__20446__i] = arguments[G__20446__i + 0]; ++G__20446__i;}
  args = new cljs.core.IndexedSeq(G__20446__a,0,null);
} 
return G__20445__delegate.call(this,args);};
G__20445.cljs$lang$maxFixedArity = 0;
G__20445.cljs$lang$applyTo = (function (arglist__20447){
var args = cljs.core.seq(arglist__20447);
return G__20445__delegate(args);
});
G__20445.cljs$core$IFn$_invoke$arity$variadic = G__20445__delegate;
return G__20445;
})()
:sketches.nature_of_code.forces.invisible_attractors.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.invisible_attractors.setup))?(function() { 
var G__20448__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.invisible_attractors.setup,args);
};
var G__20448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20449__i = 0, G__20449__a = new Array(arguments.length -  0);
while (G__20449__i < G__20449__a.length) {G__20449__a[G__20449__i] = arguments[G__20449__i + 0]; ++G__20449__i;}
  args = new cljs.core.IndexedSeq(G__20449__a,0,null);
} 
return G__20448__delegate.call(this,args);};
G__20448.cljs$lang$maxFixedArity = 0;
G__20448.cljs$lang$applyTo = (function (arglist__20450){
var args = cljs.core.seq(arglist__20450);
return G__20448__delegate(args);
});
G__20448.cljs$core$IFn$_invoke$arity$variadic = G__20448__delegate;
return G__20448;
})()
:sketches.nature_of_code.forces.invisible_attractors.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.invisible_attractors.draw))?(function() { 
var G__20451__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.invisible_attractors.draw,args);
};
var G__20451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20452__i = 0, G__20452__a = new Array(arguments.length -  0);
while (G__20452__i < G__20452__a.length) {G__20452__a[G__20452__i] = arguments[G__20452__i + 0]; ++G__20452__i;}
  args = new cljs.core.IndexedSeq(G__20452__a,0,null);
} 
return G__20451__delegate.call(this,args);};
G__20451.cljs$lang$maxFixedArity = 0;
G__20451.cljs$lang$applyTo = (function (arglist__20453){
var args = cljs.core.seq(arglist__20453);
return G__20451__delegate(args);
});
G__20451.cljs$core$IFn$_invoke$arity$variadic = G__20451__delegate;
return G__20451;
})()
:sketches.nature_of_code.forces.invisible_attractors.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.invisible_attractors.invisible_attractors', sketches.nature_of_code.forces.invisible_attractors.invisible_attractors);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.invisible_attractors.invisible_attractors,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20454__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20455__i = 0, G__20455__a = new Array(arguments.length -  0);
while (G__20455__i < G__20455__a.length) {G__20455__a[G__20455__i] = arguments[G__20455__i + 0]; ++G__20455__i;}
  args = new cljs.core.IndexedSeq(G__20455__a,0,null);
} 
return G__20454__delegate.call(this,args);};
G__20454.cljs$lang$maxFixedArity = 0;
G__20454.cljs$lang$applyTo = (function (arglist__20456){
var args = cljs.core.seq(arglist__20456);
return G__20454__delegate(args);
});
G__20454.cljs$core$IFn$_invoke$arity$variadic = G__20454__delegate;
return G__20454;
})()
:host)], null));
}
});
