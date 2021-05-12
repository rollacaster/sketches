// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.own_force');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.forces.own_force.compute_position = (function sketches$nature_of_code$forces$own_force$compute_position(p__20637){
var map__20638 = p__20637;
var map__20638__$1 = ((((!((map__20638 == null)))?(((((map__20638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20638):map__20638);
var mover = map__20638__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1);
});
sketches.nature_of_code.forces.own_force.setup = (function sketches$nature_of_code$forces$own_force$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$movers,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((1) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((500)),cljs.core.rand_int((500))], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))),cljs.core.cst$kw$attractors,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mass,cljs.core.rand_int((20)),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((500)),cljs.core.rand_int((500))], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)))], null);
});
sketches.nature_of_code.forces.own_force.attract = (function sketches$nature_of_code$forces$own_force$attract(mover,attractor){
var map__20640 = attractor;
var map__20640__$1 = ((((!((map__20640 == null)))?(((((map__20640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20640):map__20640);
var loc1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20640__$1,cljs.core.cst$kw$location);
var map__20641 = mover;
var map__20641__$1 = ((((!((map__20641 == null)))?(((((map__20641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20641):map__20641);
var loc2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20641__$1,cljs.core.cst$kw$location);
var vectorBetween = sketches.vector.sub(loc1,loc2);
var distanceBetween = quil.core.constrain(sketches.vector.mag(vectorBetween),5.0,25.0);
var G = 0.4;
var strength = ((distanceBetween * distanceBetween) / ((G * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(attractor)) * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(mover)));
return sketches.vector.mult(sketches.vector.normalize(vectorBetween),strength);
});
sketches.nature_of_code.forces.own_force.update_mover = (function sketches$nature_of_code$forces$own_force$update_mover(attractors,mover){
return sketches.nature_of_code.forces.own_force.compute_position(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20644_SHARP_,p2__20645_SHARP_){
return sketches.mover.apply_force(p1__20644_SHARP_,sketches.nature_of_code.forces.own_force.attract(p1__20644_SHARP_,p2__20645_SHARP_));
}),mover,attractors));
});
sketches.nature_of_code.forces.own_force.update_state = (function sketches$nature_of_code$forces$own_force$update_state(p__20646){
var map__20647 = p__20646;
var map__20647__$1 = ((((!((map__20647 == null)))?(((((map__20647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20647):map__20647);
var state = map__20647__$1;
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,cljs.core.cst$kw$movers);
var attractors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,cljs.core.cst$kw$attractors);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$movers,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.own_force.update_mover,attractors)));
});
sketches.nature_of_code.forces.own_force.draw = (function sketches$nature_of_code$forces$own_force$draw(p__20649){
var map__20650 = p__20649;
var map__20650__$1 = ((((!((map__20650 == null)))?(((((map__20650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20650):map__20650);
var attractors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20650__$1,cljs.core.cst$kw$attractors);
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20650__$1,cljs.core.cst$kw$movers);
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__20652_20680 = cljs.core.seq(movers);
var chunk__20653_20681 = null;
var count__20654_20682 = (0);
var i__20655_20683 = (0);
while(true){
if((i__20655_20683 < count__20654_20682)){
var map__20656_20684 = chunk__20653_20681.cljs$core$IIndexed$_nth$arity$2(null,i__20655_20683);
var map__20656_20685__$1 = ((((!((map__20656_20684 == null)))?(((((map__20656_20684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20656_20684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20656_20684):map__20656_20684);
var vec__20657_20686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656_20685__$1,cljs.core.cst$kw$location);
var x_20687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657_20686,(0),null);
var y_20688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657_20686,(1),null);
var mass_20689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656_20685__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x_20687,y_20688,mass_20689,mass_20689);


var G__20690 = seq__20652_20680;
var G__20691 = chunk__20653_20681;
var G__20692 = count__20654_20682;
var G__20693 = (i__20655_20683 + (1));
seq__20652_20680 = G__20690;
chunk__20653_20681 = G__20691;
count__20654_20682 = G__20692;
i__20655_20683 = G__20693;
continue;
} else {
var temp__5735__auto___20694 = cljs.core.seq(seq__20652_20680);
if(temp__5735__auto___20694){
var seq__20652_20695__$1 = temp__5735__auto___20694;
if(cljs.core.chunked_seq_QMARK_(seq__20652_20695__$1)){
var c__4351__auto___20696 = cljs.core.chunk_first(seq__20652_20695__$1);
var G__20697 = cljs.core.chunk_rest(seq__20652_20695__$1);
var G__20698 = c__4351__auto___20696;
var G__20699 = cljs.core.count(c__4351__auto___20696);
var G__20700 = (0);
seq__20652_20680 = G__20697;
chunk__20653_20681 = G__20698;
count__20654_20682 = G__20699;
i__20655_20683 = G__20700;
continue;
} else {
var map__20661_20701 = cljs.core.first(seq__20652_20695__$1);
var map__20661_20702__$1 = ((((!((map__20661_20701 == null)))?(((((map__20661_20701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20661_20701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20661_20701):map__20661_20701);
var vec__20662_20703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661_20702__$1,cljs.core.cst$kw$location);
var x_20704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662_20703,(0),null);
var y_20705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662_20703,(1),null);
var mass_20706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661_20702__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x_20704,y_20705,mass_20706,mass_20706);


var G__20707 = cljs.core.next(seq__20652_20695__$1);
var G__20708 = null;
var G__20709 = (0);
var G__20710 = (0);
seq__20652_20680 = G__20707;
chunk__20653_20681 = G__20708;
count__20654_20682 = G__20709;
i__20655_20683 = G__20710;
continue;
}
} else {
}
}
break;
}

var seq__20666 = cljs.core.seq(attractors);
var chunk__20667 = null;
var count__20668 = (0);
var i__20669 = (0);
while(true){
if((i__20669 < count__20668)){
var map__20670 = chunk__20667.cljs$core$IIndexed$_nth$arity$2(null,i__20669);
var map__20670__$1 = ((((!((map__20670 == null)))?(((((map__20670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20670):map__20670);
var vec__20671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20670__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20671,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20671,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20670__$1,cljs.core.cst$kw$mass);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,mass,mass);


var G__20711 = seq__20666;
var G__20712 = chunk__20667;
var G__20713 = count__20668;
var G__20714 = (i__20669 + (1));
seq__20666 = G__20711;
chunk__20667 = G__20712;
count__20668 = G__20713;
i__20669 = G__20714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20666);
if(temp__5735__auto__){
var seq__20666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20666__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20666__$1);
var G__20715 = cljs.core.chunk_rest(seq__20666__$1);
var G__20716 = c__4351__auto__;
var G__20717 = cljs.core.count(c__4351__auto__);
var G__20718 = (0);
seq__20666 = G__20715;
chunk__20667 = G__20716;
count__20668 = G__20717;
i__20669 = G__20718;
continue;
} else {
var map__20675 = cljs.core.first(seq__20666__$1);
var map__20675__$1 = ((((!((map__20675 == null)))?(((((map__20675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20675):map__20675);
var vec__20676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20676,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20676,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20675__$1,cljs.core.cst$kw$mass);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,mass,mass);


var G__20719 = cljs.core.next(seq__20666__$1);
var G__20720 = null;
var G__20721 = (0);
var G__20722 = (0);
seq__20666 = G__20719;
chunk__20667 = G__20720;
count__20668 = G__20721;
i__20669 = G__20722;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.own_force.run = (function sketches$nature_of_code$forces$own_force$run(host){
sketches.nature_of_code.forces.own_force.own_force = (function sketches$nature_of_code$forces$own_force$run_$_own_force(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20723__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20724__i = 0, G__20724__a = new Array(arguments.length -  0);
while (G__20724__i < G__20724__a.length) {G__20724__a[G__20724__i] = arguments[G__20724__i + 0]; ++G__20724__i;}
  args = new cljs.core.IndexedSeq(G__20724__a,0,null);
} 
return G__20723__delegate.call(this,args);};
G__20723.cljs$lang$maxFixedArity = 0;
G__20723.cljs$lang$applyTo = (function (arglist__20725){
var args = cljs.core.seq(arglist__20725);
return G__20723__delegate(args);
});
G__20723.cljs$core$IFn$_invoke$arity$variadic = G__20723__delegate;
return G__20723;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.own_force.update_state))?(function() { 
var G__20726__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.own_force.update_state,args);
};
var G__20726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20727__i = 0, G__20727__a = new Array(arguments.length -  0);
while (G__20727__i < G__20727__a.length) {G__20727__a[G__20727__i] = arguments[G__20727__i + 0]; ++G__20727__i;}
  args = new cljs.core.IndexedSeq(G__20727__a,0,null);
} 
return G__20726__delegate.call(this,args);};
G__20726.cljs$lang$maxFixedArity = 0;
G__20726.cljs$lang$applyTo = (function (arglist__20728){
var args = cljs.core.seq(arglist__20728);
return G__20726__delegate(args);
});
G__20726.cljs$core$IFn$_invoke$arity$variadic = G__20726__delegate;
return G__20726;
})()
:sketches.nature_of_code.forces.own_force.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.own_force.setup))?(function() { 
var G__20729__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.own_force.setup,args);
};
var G__20729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20730__i = 0, G__20730__a = new Array(arguments.length -  0);
while (G__20730__i < G__20730__a.length) {G__20730__a[G__20730__i] = arguments[G__20730__i + 0]; ++G__20730__i;}
  args = new cljs.core.IndexedSeq(G__20730__a,0,null);
} 
return G__20729__delegate.call(this,args);};
G__20729.cljs$lang$maxFixedArity = 0;
G__20729.cljs$lang$applyTo = (function (arglist__20731){
var args = cljs.core.seq(arglist__20731);
return G__20729__delegate(args);
});
G__20729.cljs$core$IFn$_invoke$arity$variadic = G__20729__delegate;
return G__20729;
})()
:sketches.nature_of_code.forces.own_force.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.own_force.draw))?(function() { 
var G__20732__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.own_force.draw,args);
};
var G__20732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20733__i = 0, G__20733__a = new Array(arguments.length -  0);
while (G__20733__i < G__20733__a.length) {G__20733__a[G__20733__i] = arguments[G__20733__i + 0]; ++G__20733__i;}
  args = new cljs.core.IndexedSeq(G__20733__a,0,null);
} 
return G__20732__delegate.call(this,args);};
G__20732.cljs$lang$maxFixedArity = 0;
G__20732.cljs$lang$applyTo = (function (arglist__20734){
var args = cljs.core.seq(arglist__20734);
return G__20732__delegate(args);
});
G__20732.cljs$core$IFn$_invoke$arity$variadic = G__20732__delegate;
return G__20732;
})()
:sketches.nature_of_code.forces.own_force.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.own_force.own_force', sketches.nature_of_code.forces.own_force.own_force);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.own_force.own_force,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20735__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20736__i = 0, G__20736__a = new Array(arguments.length -  0);
while (G__20736__i < G__20736__a.length) {G__20736__a[G__20736__i] = arguments[G__20736__i + 0]; ++G__20736__i;}
  args = new cljs.core.IndexedSeq(G__20736__a,0,null);
} 
return G__20735__delegate.call(this,args);};
G__20735.cljs$lang$maxFixedArity = 0;
G__20735.cljs$lang$applyTo = (function (arglist__20737){
var args = cljs.core.seq(arglist__20737);
return G__20735__delegate(args);
});
G__20735.cljs$core$IFn$_invoke$arity$variadic = G__20735__delegate;
return G__20735;
})()
:host)], null));
}
});
