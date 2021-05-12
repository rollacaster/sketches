// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.frictions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.forces.frictions.setup = (function sketches$nature_of_code$forces$frictions$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$movers,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (mover){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((1) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((50)))),cljs.core.cst$kw$friction_DASH_areas,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var width = (quil.core.width() / (5));
var colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)], null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(i * width),cljs.core.cst$kw$width,width,cljs.core.cst$kw$color,cljs.core.get.cljs$core$IFn$_invoke$arity$2(colors,i),cljs.core.cst$kw$friction,quil.core.random.cljs$core$IFn$_invoke$arity$2(0.01,0.2)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null);
});
sketches.nature_of_code.forces.frictions.gravity = (function sketches$nature_of_code$forces$frictions$gravity(p__20314){
var map__20315 = p__20314;
var map__20315__$1 = ((((!((map__20315 == null)))?(((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20315):map__20315);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20315__$1,cljs.core.cst$kw$mass);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(0),(0.1 * mass)],null));
});
sketches.nature_of_code.forces.frictions.compute_friction = (function sketches$nature_of_code$forces$frictions$compute_friction(friction,p__20317){
var map__20318 = p__20317;
var map__20318__$1 = ((((!((map__20318 == null)))?(((((map__20318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20318):map__20318);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20318__$1,cljs.core.cst$kw$velocity);
return sketches.vector.mult(sketches.vector.normalize(sketches.vector.mult(velocity,(-1))),(function (){var or__3949__auto__ = friction;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return 0.01;
}
})());
});
sketches.nature_of_code.forces.frictions.compute_position = (function sketches$nature_of_code$forces$frictions$compute_position(p__20320){
var map__20321 = p__20320;
var map__20321__$1 = ((((!((map__20321 == null)))?(((((map__20321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20321):map__20321);
var mover = map__20321__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(location,velocity__$1);
var acceleration__$1 = sketches.vector.mult(acceleration,(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$acceleration,acceleration__$1);
});
sketches.nature_of_code.forces.frictions.update_mover = (function sketches$nature_of_code$forces$frictions$update_mover(mover,friction){
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(0)], null);
return sketches.mover.check_edges(sketches.nature_of_code.forces.frictions.compute_position(sketches.mover.apply_force(sketches.mover.apply_force(sketches.mover.apply_force(mover,wind),sketches.nature_of_code.forces.frictions.gravity(mover)),sketches.nature_of_code.forces.frictions.compute_friction(friction,mover))));
});
sketches.nature_of_code.forces.frictions.update_state = (function sketches$nature_of_code$forces$frictions$update_state(p__20324){
var map__20325 = p__20324;
var map__20325__$1 = ((((!((map__20325 == null)))?(((((map__20325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20325):map__20325);
var state = map__20325__$1;
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,cljs.core.cst$kw$movers);
var friction_areas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,cljs.core.cst$kw$friction_DASH_areas);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$movers,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20325,map__20325__$1,state,movers,friction_areas){
return (function (mover){
var friction = cljs.core.cst$kw$friction.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20325,map__20325__$1,state,movers,friction_areas){
return (function (p1__20323_SHARP_){
return (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p1__20323_SHARP_) < cljs.core.first(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(mover)));
});})(map__20325,map__20325__$1,state,movers,friction_areas))
,cljs.core.reverse(friction_areas))));
return sketches.nature_of_code.forces.frictions.update_mover(mover,friction);
});})(map__20325,map__20325__$1,state,movers,friction_areas))
,movers)),cljs.core.cst$kw$friction_DASH_areas,friction_areas], null);
});
sketches.nature_of_code.forces.frictions.draw_friction_area = (function sketches$nature_of_code$forces$frictions$draw_friction_area(p__20327){
var map__20328 = p__20327;
var map__20328__$1 = ((((!((map__20328 == null)))?(((((map__20328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20328):map__20328);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20328__$1,cljs.core.cst$kw$x);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20328__$1,cljs.core.cst$kw$width);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20328__$1,cljs.core.cst$kw$color);
var friction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20328__$1,cljs.core.cst$kw$friction);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,color);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,(0),width,quil.core.height());
});
sketches.nature_of_code.forces.frictions.draw = (function sketches$nature_of_code$forces$frictions$draw(p__20330){
var map__20331 = p__20330;
var map__20331__$1 = ((((!((map__20331 == null)))?(((((map__20331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20331):map__20331);
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,cljs.core.cst$kw$movers);
var friction_areas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,cljs.core.cst$kw$friction_DASH_areas);
quil.core.clear();

var seq__20333_20351 = cljs.core.seq(friction_areas);
var chunk__20334_20352 = null;
var count__20335_20353 = (0);
var i__20336_20354 = (0);
while(true){
if((i__20336_20354 < count__20335_20353)){
var friction_area_20355 = chunk__20334_20352.cljs$core$IIndexed$_nth$arity$2(null,i__20336_20354);
sketches.nature_of_code.forces.frictions.draw_friction_area(friction_area_20355);


var G__20356 = seq__20333_20351;
var G__20357 = chunk__20334_20352;
var G__20358 = count__20335_20353;
var G__20359 = (i__20336_20354 + (1));
seq__20333_20351 = G__20356;
chunk__20334_20352 = G__20357;
count__20335_20353 = G__20358;
i__20336_20354 = G__20359;
continue;
} else {
var temp__5735__auto___20360 = cljs.core.seq(seq__20333_20351);
if(temp__5735__auto___20360){
var seq__20333_20361__$1 = temp__5735__auto___20360;
if(cljs.core.chunked_seq_QMARK_(seq__20333_20361__$1)){
var c__4351__auto___20362 = cljs.core.chunk_first(seq__20333_20361__$1);
var G__20363 = cljs.core.chunk_rest(seq__20333_20361__$1);
var G__20364 = c__4351__auto___20362;
var G__20365 = cljs.core.count(c__4351__auto___20362);
var G__20366 = (0);
seq__20333_20351 = G__20363;
chunk__20334_20352 = G__20364;
count__20335_20353 = G__20365;
i__20336_20354 = G__20366;
continue;
} else {
var friction_area_20367 = cljs.core.first(seq__20333_20361__$1);
sketches.nature_of_code.forces.frictions.draw_friction_area(friction_area_20367);


var G__20368 = cljs.core.next(seq__20333_20361__$1);
var G__20369 = null;
var G__20370 = (0);
var G__20371 = (0);
seq__20333_20351 = G__20368;
chunk__20334_20352 = G__20369;
count__20335_20353 = G__20370;
i__20336_20354 = G__20371;
continue;
}
} else {
}
}
break;
}

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(255));

var seq__20337 = cljs.core.seq(movers);
var chunk__20338 = null;
var count__20339 = (0);
var i__20340 = (0);
while(true){
if((i__20340 < count__20339)){
var map__20341 = chunk__20338.cljs$core$IIndexed$_nth$arity$2(null,i__20340);
var map__20341__$1 = ((((!((map__20341 == null)))?(((((map__20341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20341):map__20341);
var vec__20342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20341__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20341__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20372 = seq__20337;
var G__20373 = chunk__20338;
var G__20374 = count__20339;
var G__20375 = (i__20340 + (1));
seq__20337 = G__20372;
chunk__20338 = G__20373;
count__20339 = G__20374;
i__20340 = G__20375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20337);
if(temp__5735__auto__){
var seq__20337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20337__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20337__$1);
var G__20376 = cljs.core.chunk_rest(seq__20337__$1);
var G__20377 = c__4351__auto__;
var G__20378 = cljs.core.count(c__4351__auto__);
var G__20379 = (0);
seq__20337 = G__20376;
chunk__20338 = G__20377;
count__20339 = G__20378;
i__20340 = G__20379;
continue;
} else {
var map__20346 = cljs.core.first(seq__20337__$1);
var map__20346__$1 = ((((!((map__20346 == null)))?(((((map__20346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20346):map__20346);
var vec__20347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20346__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20346__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20380 = cljs.core.next(seq__20337__$1);
var G__20381 = null;
var G__20382 = (0);
var G__20383 = (0);
seq__20337 = G__20380;
chunk__20338 = G__20381;
count__20339 = G__20382;
i__20340 = G__20383;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.frictions.run = (function sketches$nature_of_code$forces$frictions$run(host){
sketches.nature_of_code.forces.frictions.frictions = (function sketches$nature_of_code$forces$frictions$run_$_frictions(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20384__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20385__i = 0, G__20385__a = new Array(arguments.length -  0);
while (G__20385__i < G__20385__a.length) {G__20385__a[G__20385__i] = arguments[G__20385__i + 0]; ++G__20385__i;}
  args = new cljs.core.IndexedSeq(G__20385__a,0,null);
} 
return G__20384__delegate.call(this,args);};
G__20384.cljs$lang$maxFixedArity = 0;
G__20384.cljs$lang$applyTo = (function (arglist__20386){
var args = cljs.core.seq(arglist__20386);
return G__20384__delegate(args);
});
G__20384.cljs$core$IFn$_invoke$arity$variadic = G__20384__delegate;
return G__20384;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.frictions.update_state))?(function() { 
var G__20387__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.frictions.update_state,args);
};
var G__20387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20388__i = 0, G__20388__a = new Array(arguments.length -  0);
while (G__20388__i < G__20388__a.length) {G__20388__a[G__20388__i] = arguments[G__20388__i + 0]; ++G__20388__i;}
  args = new cljs.core.IndexedSeq(G__20388__a,0,null);
} 
return G__20387__delegate.call(this,args);};
G__20387.cljs$lang$maxFixedArity = 0;
G__20387.cljs$lang$applyTo = (function (arglist__20389){
var args = cljs.core.seq(arglist__20389);
return G__20387__delegate(args);
});
G__20387.cljs$core$IFn$_invoke$arity$variadic = G__20387__delegate;
return G__20387;
})()
:sketches.nature_of_code.forces.frictions.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.frictions.setup))?(function() { 
var G__20390__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.frictions.setup,args);
};
var G__20390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20391__i = 0, G__20391__a = new Array(arguments.length -  0);
while (G__20391__i < G__20391__a.length) {G__20391__a[G__20391__i] = arguments[G__20391__i + 0]; ++G__20391__i;}
  args = new cljs.core.IndexedSeq(G__20391__a,0,null);
} 
return G__20390__delegate.call(this,args);};
G__20390.cljs$lang$maxFixedArity = 0;
G__20390.cljs$lang$applyTo = (function (arglist__20392){
var args = cljs.core.seq(arglist__20392);
return G__20390__delegate(args);
});
G__20390.cljs$core$IFn$_invoke$arity$variadic = G__20390__delegate;
return G__20390;
})()
:sketches.nature_of_code.forces.frictions.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.frictions.draw))?(function() { 
var G__20393__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.frictions.draw,args);
};
var G__20393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20394__i = 0, G__20394__a = new Array(arguments.length -  0);
while (G__20394__i < G__20394__a.length) {G__20394__a[G__20394__i] = arguments[G__20394__i + 0]; ++G__20394__i;}
  args = new cljs.core.IndexedSeq(G__20394__a,0,null);
} 
return G__20393__delegate.call(this,args);};
G__20393.cljs$lang$maxFixedArity = 0;
G__20393.cljs$lang$applyTo = (function (arglist__20395){
var args = cljs.core.seq(arglist__20395);
return G__20393__delegate(args);
});
G__20393.cljs$core$IFn$_invoke$arity$variadic = G__20393__delegate;
return G__20393;
})()
:sketches.nature_of_code.forces.frictions.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.frictions.frictions', sketches.nature_of_code.forces.frictions.frictions);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.frictions.frictions,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20396__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20397__i = 0, G__20397__a = new Array(arguments.length -  0);
while (G__20397__i < G__20397__a.length) {G__20397__a[G__20397__i] = arguments[G__20397__i + 0]; ++G__20397__i;}
  args = new cljs.core.IndexedSeq(G__20397__a,0,null);
} 
return G__20396__delegate.call(this,args);};
G__20396.cljs$lang$maxFixedArity = 0;
G__20396.cljs$lang$applyTo = (function (arglist__20398){
var args = cljs.core.seq(arglist__20398);
return G__20396__delegate(args);
});
G__20396.cljs$core$IFn$_invoke$arity$variadic = G__20396__delegate;
return G__20396;
})()
:host)], null));
}
});
