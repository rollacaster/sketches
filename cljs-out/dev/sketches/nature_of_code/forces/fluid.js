// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.fluid');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.forces.fluid.setup = (function sketches$nature_of_code$forces$fluid$setup(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((1) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i * (50)),(i * (50))], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((quil.core.width() / (50))));
});
sketches.nature_of_code.forces.fluid.compute_position = (function sketches$nature_of_code$forces$fluid$compute_position(p__20459){
var map__20460 = p__20459;
var map__20460__$1 = ((((!((map__20460 == null)))?(((((map__20460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20460):map__20460);
var mover = map__20460__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1);
});
sketches.nature_of_code.forces.fluid.liquid = (function sketches$nature_of_code$forces$fluid$liquid(x,y,w,h,c){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),cljs.core.cst$kw$c,c], null);
});
sketches.nature_of_code.forces.fluid.gravity = (function sketches$nature_of_code$forces$fluid$gravity(p__20462){
var map__20463 = p__20462;
var map__20463__$1 = ((((!((map__20463 == null)))?(((((map__20463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20463):map__20463);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$mass);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(0),(0.1 * mass)],null));
});
sketches.nature_of_code.forces.fluid.drag = (function sketches$nature_of_code$forces$fluid$drag(mover,liquid){
var map__20465 = mover;
var map__20465__$1 = ((((!((map__20465 == null)))?(((((map__20465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20465):map__20465);
var vec__20466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(1),null);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,cljs.core.cst$kw$velocity);
var map__20469 = liquid;
var map__20469__$1 = ((((!((map__20469 == null)))?(((((map__20469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20469):map__20469);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$c);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$location);
var speed = sketches.vector.mag(velocity);
if((y > cljs.core.second(location))){
return sketches.vector.mult(sketches.vector.normalize(sketches.vector.mult(velocity,(-1))),((c * speed) * speed));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
});
sketches.nature_of_code.forces.fluid.update_mover = (function sketches$nature_of_code$forces$fluid$update_mover(mover){
return sketches.mover.keep_inside(sketches.nature_of_code.forces.fluid.compute_position(sketches.mover.apply_force(sketches.mover.apply_force(mover,sketches.nature_of_code.forces.fluid.gravity(mover)),sketches.nature_of_code.forces.fluid.drag(mover,sketches.nature_of_code.forces.fluid.liquid((0),(quil.core.height() / (2)),quil.core.width(),(quil.core.height() / (2)),(1))))));
});
sketches.nature_of_code.forces.fluid.update_state = (function sketches$nature_of_code$forces$fluid$update_state(movers){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.fluid.update_mover,movers);
});
sketches.nature_of_code.forces.fluid.draw = (function sketches$nature_of_code$forces$fluid$draw(movers){
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((50),(100),(255));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(quil.core.height() / (2)),quil.core.width(),(quil.core.height() / (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(255));

var seq__20472 = cljs.core.seq(movers);
var chunk__20473 = null;
var count__20474 = (0);
var i__20475 = (0);
while(true){
if((i__20475 < count__20474)){
var map__20476 = chunk__20473.cljs$core$IIndexed$_nth$arity$2(null,i__20475);
var map__20476__$1 = ((((!((map__20476 == null)))?(((((map__20476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20476):map__20476);
var vec__20477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,cljs.core.cst$kw$mass);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20476__$1,cljs.core.cst$kw$velocity);
quil.core.ellipse(x,y,mass,mass);


var G__20486 = seq__20472;
var G__20487 = chunk__20473;
var G__20488 = count__20474;
var G__20489 = (i__20475 + (1));
seq__20472 = G__20486;
chunk__20473 = G__20487;
count__20474 = G__20488;
i__20475 = G__20489;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20472);
if(temp__5735__auto__){
var seq__20472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20472__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20472__$1);
var G__20490 = cljs.core.chunk_rest(seq__20472__$1);
var G__20491 = c__4351__auto__;
var G__20492 = cljs.core.count(c__4351__auto__);
var G__20493 = (0);
seq__20472 = G__20490;
chunk__20473 = G__20491;
count__20474 = G__20492;
i__20475 = G__20493;
continue;
} else {
var map__20481 = cljs.core.first(seq__20472__$1);
var map__20481__$1 = ((((!((map__20481 == null)))?(((((map__20481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20481):map__20481);
var vec__20482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20482,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20482,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,cljs.core.cst$kw$mass);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,cljs.core.cst$kw$velocity);
quil.core.ellipse(x,y,mass,mass);


var G__20494 = cljs.core.next(seq__20472__$1);
var G__20495 = null;
var G__20496 = (0);
var G__20497 = (0);
seq__20472 = G__20494;
chunk__20473 = G__20495;
count__20474 = G__20496;
i__20475 = G__20497;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.fluid.run = (function sketches$nature_of_code$forces$fluid$run(host){
sketches.nature_of_code.forces.fluid.fluid = (function sketches$nature_of_code$forces$fluid$run_$_fluid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20498__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20499__i = 0, G__20499__a = new Array(arguments.length -  0);
while (G__20499__i < G__20499__a.length) {G__20499__a[G__20499__i] = arguments[G__20499__i + 0]; ++G__20499__i;}
  args = new cljs.core.IndexedSeq(G__20499__a,0,null);
} 
return G__20498__delegate.call(this,args);};
G__20498.cljs$lang$maxFixedArity = 0;
G__20498.cljs$lang$applyTo = (function (arglist__20500){
var args = cljs.core.seq(arglist__20500);
return G__20498__delegate(args);
});
G__20498.cljs$core$IFn$_invoke$arity$variadic = G__20498__delegate;
return G__20498;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.fluid.update_state))?(function() { 
var G__20501__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.fluid.update_state,args);
};
var G__20501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20502__i = 0, G__20502__a = new Array(arguments.length -  0);
while (G__20502__i < G__20502__a.length) {G__20502__a[G__20502__i] = arguments[G__20502__i + 0]; ++G__20502__i;}
  args = new cljs.core.IndexedSeq(G__20502__a,0,null);
} 
return G__20501__delegate.call(this,args);};
G__20501.cljs$lang$maxFixedArity = 0;
G__20501.cljs$lang$applyTo = (function (arglist__20503){
var args = cljs.core.seq(arglist__20503);
return G__20501__delegate(args);
});
G__20501.cljs$core$IFn$_invoke$arity$variadic = G__20501__delegate;
return G__20501;
})()
:sketches.nature_of_code.forces.fluid.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.fluid.setup))?(function() { 
var G__20504__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.fluid.setup,args);
};
var G__20504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20505__i = 0, G__20505__a = new Array(arguments.length -  0);
while (G__20505__i < G__20505__a.length) {G__20505__a[G__20505__i] = arguments[G__20505__i + 0]; ++G__20505__i;}
  args = new cljs.core.IndexedSeq(G__20505__a,0,null);
} 
return G__20504__delegate.call(this,args);};
G__20504.cljs$lang$maxFixedArity = 0;
G__20504.cljs$lang$applyTo = (function (arglist__20506){
var args = cljs.core.seq(arglist__20506);
return G__20504__delegate(args);
});
G__20504.cljs$core$IFn$_invoke$arity$variadic = G__20504__delegate;
return G__20504;
})()
:sketches.nature_of_code.forces.fluid.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.fluid.draw))?(function() { 
var G__20507__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.fluid.draw,args);
};
var G__20507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20508__i = 0, G__20508__a = new Array(arguments.length -  0);
while (G__20508__i < G__20508__a.length) {G__20508__a[G__20508__i] = arguments[G__20508__i + 0]; ++G__20508__i;}
  args = new cljs.core.IndexedSeq(G__20508__a,0,null);
} 
return G__20507__delegate.call(this,args);};
G__20507.cljs$lang$maxFixedArity = 0;
G__20507.cljs$lang$applyTo = (function (arglist__20509){
var args = cljs.core.seq(arglist__20509);
return G__20507__delegate(args);
});
G__20507.cljs$core$IFn$_invoke$arity$variadic = G__20507__delegate;
return G__20507;
})()
:sketches.nature_of_code.forces.fluid.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.fluid.fluid', sketches.nature_of_code.forces.fluid.fluid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.fluid.fluid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20510__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20511__i = 0, G__20511__a = new Array(arguments.length -  0);
while (G__20511__i < G__20511__a.length) {G__20511__a[G__20511__i] = arguments[G__20511__i + 0]; ++G__20511__i;}
  args = new cljs.core.IndexedSeq(G__20511__a,0,null);
} 
return G__20510__delegate.call(this,args);};
G__20510.cljs$lang$maxFixedArity = 0;
G__20510.cljs$lang$applyTo = (function (arglist__20512){
var args = cljs.core.seq(arglist__20512);
return G__20510__delegate(args);
});
G__20510.cljs$core$IFn$_invoke$arity$variadic = G__20510__delegate;
return G__20510;
})()
:host)], null));
}
});
