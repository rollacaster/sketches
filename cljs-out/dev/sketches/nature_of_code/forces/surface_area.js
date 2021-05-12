// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.surface_area');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.forces.surface_area.setup = (function sketches$nature_of_code$forces$surface_area$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$movers,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((1) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i * (50)),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((50))),cljs.core.cst$kw$liquid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(quil.core.height() / (2))], null),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),(quil.core.height() / (2))], null),cljs.core.cst$kw$c,0.1], null)], null);
});
sketches.nature_of_code.forces.surface_area.draw = (function sketches$nature_of_code$forces$surface_area$draw(p__20575){
var map__20576 = p__20575;
var map__20576__$1 = ((((!((map__20576 == null)))?(((((map__20576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20576):map__20576);
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20576__$1,cljs.core.cst$kw$movers);
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((50),(100),(255));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(quil.core.height() / (2)),quil.core.width(),(quil.core.height() / (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(255));

var seq__20578 = cljs.core.seq(movers);
var chunk__20579 = null;
var count__20580 = (0);
var i__20581 = (0);
while(true){
if((i__20581 < count__20580)){
var map__20582 = chunk__20579.cljs$core$IIndexed$_nth$arity$2(null,i__20581);
var map__20582__$1 = ((((!((map__20582 == null)))?(((((map__20582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20582):map__20582);
var vec__20583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,cljs.core.cst$kw$mass);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,(y - mass),mass,mass);


var G__20592 = seq__20578;
var G__20593 = chunk__20579;
var G__20594 = count__20580;
var G__20595 = (i__20581 + (1));
seq__20578 = G__20592;
chunk__20579 = G__20593;
count__20580 = G__20594;
i__20581 = G__20595;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20578);
if(temp__5735__auto__){
var seq__20578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20578__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20578__$1);
var G__20596 = cljs.core.chunk_rest(seq__20578__$1);
var G__20597 = c__4351__auto__;
var G__20598 = cljs.core.count(c__4351__auto__);
var G__20599 = (0);
seq__20578 = G__20596;
chunk__20579 = G__20597;
count__20580 = G__20598;
i__20581 = G__20599;
continue;
} else {
var map__20587 = cljs.core.first(seq__20578__$1);
var map__20587__$1 = ((((!((map__20587 == null)))?(((((map__20587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20587):map__20587);
var vec__20588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,cljs.core.cst$kw$mass);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,(y - mass),mass,mass);


var G__20600 = cljs.core.next(seq__20578__$1);
var G__20601 = null;
var G__20602 = (0);
var G__20603 = (0);
seq__20578 = G__20600;
chunk__20579 = G__20601;
count__20580 = G__20602;
i__20581 = G__20603;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.surface_area.compute_position = (function sketches$nature_of_code$forces$surface_area$compute_position(p__20604){
var map__20605 = p__20604;
var map__20605__$1 = ((((!((map__20605 == null)))?(((((map__20605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20605):map__20605);
var mover = map__20605__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1);
});
sketches.nature_of_code.forces.surface_area.gravity = (function sketches$nature_of_code$forces$surface_area$gravity(p__20607){
var map__20608 = p__20607;
var map__20608__$1 = ((((!((map__20608 == null)))?(((((map__20608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20608):map__20608);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608__$1,cljs.core.cst$kw$mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.1 * mass)], null);
});
sketches.nature_of_code.forces.surface_area.drag = (function sketches$nature_of_code$forces$surface_area$drag(p__20610,p__20611){
var map__20612 = p__20610;
var map__20612__$1 = ((((!((map__20612 == null)))?(((((map__20612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20612):map__20612);
var vec__20613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20613,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20613,(1),null);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,cljs.core.cst$kw$velocity);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,cljs.core.cst$kw$mass);
var map__20616 = p__20611;
var map__20616__$1 = ((((!((map__20616 == null)))?(((((map__20616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20616):map__20616);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,cljs.core.cst$kw$c);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,cljs.core.cst$kw$location);
var speed = sketches.vector.mag(velocity);
var drag_magnitude = ((c * speed) * speed);
var A = mass;
if((y > cljs.core.second(location))){
return sketches.vector.mult(sketches.vector.mult(sketches.vector.normalize(sketches.vector.mult(velocity,(-1))),drag_magnitude),A);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
});
sketches.nature_of_code.forces.surface_area.update_mover = (function sketches$nature_of_code$forces$surface_area$update_mover(liquid,mover){
return sketches.mover.keep_inside(sketches.nature_of_code.forces.surface_area.compute_position(sketches.mover.apply_force(sketches.mover.apply_force(mover,sketches.nature_of_code.forces.surface_area.gravity(mover)),sketches.nature_of_code.forces.surface_area.drag(mover,liquid))));
});
sketches.nature_of_code.forces.surface_area.update_state = (function sketches$nature_of_code$forces$surface_area$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$movers,(function (p1__20619_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.surface_area.update_mover,cljs.core.cst$kw$liquid.cljs$core$IFn$_invoke$arity$1(state)),p1__20619_SHARP_);
}));
});
sketches.nature_of_code.forces.surface_area.run = (function sketches$nature_of_code$forces$surface_area$run(host){
sketches.nature_of_code.forces.surface_area.surface_area = (function sketches$nature_of_code$forces$surface_area$run_$_surface_area(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20620__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20621__i = 0, G__20621__a = new Array(arguments.length -  0);
while (G__20621__i < G__20621__a.length) {G__20621__a[G__20621__i] = arguments[G__20621__i + 0]; ++G__20621__i;}
  args = new cljs.core.IndexedSeq(G__20621__a,0,null);
} 
return G__20620__delegate.call(this,args);};
G__20620.cljs$lang$maxFixedArity = 0;
G__20620.cljs$lang$applyTo = (function (arglist__20622){
var args = cljs.core.seq(arglist__20622);
return G__20620__delegate(args);
});
G__20620.cljs$core$IFn$_invoke$arity$variadic = G__20620__delegate;
return G__20620;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.surface_area.update_state))?(function() { 
var G__20623__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.surface_area.update_state,args);
};
var G__20623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20624__i = 0, G__20624__a = new Array(arguments.length -  0);
while (G__20624__i < G__20624__a.length) {G__20624__a[G__20624__i] = arguments[G__20624__i + 0]; ++G__20624__i;}
  args = new cljs.core.IndexedSeq(G__20624__a,0,null);
} 
return G__20623__delegate.call(this,args);};
G__20623.cljs$lang$maxFixedArity = 0;
G__20623.cljs$lang$applyTo = (function (arglist__20625){
var args = cljs.core.seq(arglist__20625);
return G__20623__delegate(args);
});
G__20623.cljs$core$IFn$_invoke$arity$variadic = G__20623__delegate;
return G__20623;
})()
:sketches.nature_of_code.forces.surface_area.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.surface_area.setup))?(function() { 
var G__20626__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.surface_area.setup,args);
};
var G__20626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20627__i = 0, G__20627__a = new Array(arguments.length -  0);
while (G__20627__i < G__20627__a.length) {G__20627__a[G__20627__i] = arguments[G__20627__i + 0]; ++G__20627__i;}
  args = new cljs.core.IndexedSeq(G__20627__a,0,null);
} 
return G__20626__delegate.call(this,args);};
G__20626.cljs$lang$maxFixedArity = 0;
G__20626.cljs$lang$applyTo = (function (arglist__20628){
var args = cljs.core.seq(arglist__20628);
return G__20626__delegate(args);
});
G__20626.cljs$core$IFn$_invoke$arity$variadic = G__20626__delegate;
return G__20626;
})()
:sketches.nature_of_code.forces.surface_area.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.surface_area.draw))?(function() { 
var G__20629__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.surface_area.draw,args);
};
var G__20629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20630__i = 0, G__20630__a = new Array(arguments.length -  0);
while (G__20630__i < G__20630__a.length) {G__20630__a[G__20630__i] = arguments[G__20630__i + 0]; ++G__20630__i;}
  args = new cljs.core.IndexedSeq(G__20630__a,0,null);
} 
return G__20629__delegate.call(this,args);};
G__20629.cljs$lang$maxFixedArity = 0;
G__20629.cljs$lang$applyTo = (function (arglist__20631){
var args = cljs.core.seq(arglist__20631);
return G__20629__delegate(args);
});
G__20629.cljs$core$IFn$_invoke$arity$variadic = G__20629__delegate;
return G__20629;
})()
:sketches.nature_of_code.forces.surface_area.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.surface_area.surface_area', sketches.nature_of_code.forces.surface_area.surface_area);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.surface_area.surface_area,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20632__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20633__i = 0, G__20633__a = new Array(arguments.length -  0);
while (G__20633__i < G__20633__a.length) {G__20633__a[G__20633__i] = arguments[G__20633__i + 0]; ++G__20633__i;}
  args = new cljs.core.IndexedSeq(G__20633__a,0,null);
} 
return G__20632__delegate.call(this,args);};
G__20632.cljs$lang$maxFixedArity = 0;
G__20632.cljs$lang$applyTo = (function (arglist__20634){
var args = cljs.core.seq(arglist__20634);
return G__20632__delegate(args);
});
G__20632.cljs$core$IFn$_invoke$arity$variadic = G__20632__delegate;
return G__20632;
})()
:host)], null));
}
});
