// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.repulse_mouse');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.forces.repulse_mouse.compute_position = (function sketches$nature_of_code$forces$repulse_mouse$compute_position(p__20515){
var map__20516 = p__20515;
var map__20516__$1 = ((((!((map__20516 == null)))?(((((map__20516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20516):map__20516);
var mover = map__20516__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20516__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20516__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20516__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1);
});
sketches.nature_of_code.forces.repulse_mouse.attract = (function sketches$nature_of_code$forces$repulse_mouse$attract(mover,attractor){
var map__20518 = attractor;
var map__20518__$1 = ((((!((map__20518 == null)))?(((((map__20518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20518):map__20518);
var loc1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,cljs.core.cst$kw$location);
var map__20519 = mover;
var map__20519__$1 = ((((!((map__20519 == null)))?(((((map__20519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20519):map__20519);
var loc2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,cljs.core.cst$kw$location);
var vectorBetween = sketches.vector.sub(loc1,loc2);
var distanceBetween = quil.core.constrain(sketches.vector.mag(vectorBetween),5.0,25.0);
var G = 0.4;
var strength = (((G * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(attractor)) * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(mover)) / (distanceBetween * distanceBetween));
return sketches.vector.mult(sketches.vector.normalize(vectorBetween),strength);
});
sketches.nature_of_code.forces.repulse_mouse.repulse = (function sketches$nature_of_code$forces$repulse_mouse$repulse(mover,attractor){
var map__20522 = attractor;
var map__20522__$1 = ((((!((map__20522 == null)))?(((((map__20522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20522):map__20522);
var loc1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20522__$1,cljs.core.cst$kw$location);
var map__20523 = mover;
var map__20523__$1 = ((((!((map__20523 == null)))?(((((map__20523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20523):map__20523);
var loc2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20523__$1,cljs.core.cst$kw$location);
var vectorBetween = sketches.vector.sub(loc1,loc2);
var distanceBetween = quil.core.constrain(sketches.vector.mag(vectorBetween),5.0,25.0);
var G = 1.0E-4;
var strength = (((G * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(attractor)) * cljs.core.cst$kw$mass.cljs$core$IFn$_invoke$arity$1(mover)) / (distanceBetween * distanceBetween));
return sketches.vector.mult(sketches.vector.mult(sketches.vector.normalize(vectorBetween),strength),(-1));
});
sketches.nature_of_code.forces.repulse_mouse.setup = (function sketches$nature_of_code$forces$repulse_mouse$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$movers,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mass,((10) + cljs.core.rand_int((50))),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((500)),cljs.core.rand_int((500))], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10)))], null);
});
sketches.nature_of_code.forces.repulse_mouse.update_mover = (function sketches$nature_of_code$forces$repulse_mouse$update_mover(movers,mover){
var mouse = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mass,(100),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x(),quil.core.mouse_y()], null)], null);
return sketches.nature_of_code.forces.repulse_mouse.compute_position(sketches.mover.apply_force(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mouse){
return (function (p1__20526_SHARP_,p2__20527_SHARP_){
return sketches.mover.apply_force(p1__20526_SHARP_,sketches.nature_of_code.forces.repulse_mouse.repulse(p1__20526_SHARP_,p2__20527_SHARP_));
});})(mouse))
,mover,movers),sketches.nature_of_code.forces.repulse_mouse.attract(mover,mouse)));
});
sketches.nature_of_code.forces.repulse_mouse.update_state = (function sketches$nature_of_code$forces$repulse_mouse$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$movers,(function (movers){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20528_SHARP_){
return sketches.nature_of_code.forces.repulse_mouse.update_mover(movers,p1__20528_SHARP_);
}),movers);
}));
});
sketches.nature_of_code.forces.repulse_mouse.draw = (function sketches$nature_of_code$forces$repulse_mouse$draw(p__20529){
var map__20530 = p__20529;
var map__20530__$1 = ((((!((map__20530 == null)))?(((((map__20530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20530):map__20530);
var movers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20530__$1,cljs.core.cst$kw$movers);
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__20532 = cljs.core.seq(movers);
var chunk__20533 = null;
var count__20534 = (0);
var i__20535 = (0);
while(true){
if((i__20535 < count__20534)){
var map__20536 = chunk__20533.cljs$core$IIndexed$_nth$arity$2(null,i__20535);
var map__20536__$1 = ((((!((map__20536 == null)))?(((((map__20536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20536):map__20536);
var vec__20537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20546 = seq__20532;
var G__20547 = chunk__20533;
var G__20548 = count__20534;
var G__20549 = (i__20535 + (1));
seq__20532 = G__20546;
chunk__20533 = G__20547;
count__20534 = G__20548;
i__20535 = G__20549;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20532);
if(temp__5735__auto__){
var seq__20532__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20532__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20532__$1);
var G__20550 = cljs.core.chunk_rest(seq__20532__$1);
var G__20551 = c__4351__auto__;
var G__20552 = cljs.core.count(c__4351__auto__);
var G__20553 = (0);
seq__20532 = G__20550;
chunk__20533 = G__20551;
count__20534 = G__20552;
i__20535 = G__20553;
continue;
} else {
var map__20541 = cljs.core.first(seq__20532__$1);
var map__20541__$1 = ((((!((map__20541 == null)))?(((((map__20541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20541):map__20541);
var vec__20542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20541__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20541__$1,cljs.core.cst$kw$mass);
quil.core.ellipse(x,y,mass,mass);


var G__20554 = cljs.core.next(seq__20532__$1);
var G__20555 = null;
var G__20556 = (0);
var G__20557 = (0);
seq__20532 = G__20554;
chunk__20533 = G__20555;
count__20534 = G__20556;
i__20535 = G__20557;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.forces.repulse_mouse.run = (function sketches$nature_of_code$forces$repulse_mouse$run(host){
sketches.nature_of_code.forces.repulse_mouse.repulse_mouse = (function sketches$nature_of_code$forces$repulse_mouse$run_$_repulse_mouse(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20558__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20559__i = 0, G__20559__a = new Array(arguments.length -  0);
while (G__20559__i < G__20559__a.length) {G__20559__a[G__20559__i] = arguments[G__20559__i + 0]; ++G__20559__i;}
  args = new cljs.core.IndexedSeq(G__20559__a,0,null);
} 
return G__20558__delegate.call(this,args);};
G__20558.cljs$lang$maxFixedArity = 0;
G__20558.cljs$lang$applyTo = (function (arglist__20560){
var args = cljs.core.seq(arglist__20560);
return G__20558__delegate(args);
});
G__20558.cljs$core$IFn$_invoke$arity$variadic = G__20558__delegate;
return G__20558;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.repulse_mouse.update_state))?(function() { 
var G__20561__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.repulse_mouse.update_state,args);
};
var G__20561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20562__i = 0, G__20562__a = new Array(arguments.length -  0);
while (G__20562__i < G__20562__a.length) {G__20562__a[G__20562__i] = arguments[G__20562__i + 0]; ++G__20562__i;}
  args = new cljs.core.IndexedSeq(G__20562__a,0,null);
} 
return G__20561__delegate.call(this,args);};
G__20561.cljs$lang$maxFixedArity = 0;
G__20561.cljs$lang$applyTo = (function (arglist__20563){
var args = cljs.core.seq(arglist__20563);
return G__20561__delegate(args);
});
G__20561.cljs$core$IFn$_invoke$arity$variadic = G__20561__delegate;
return G__20561;
})()
:sketches.nature_of_code.forces.repulse_mouse.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.repulse_mouse.setup))?(function() { 
var G__20564__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.repulse_mouse.setup,args);
};
var G__20564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20565__i = 0, G__20565__a = new Array(arguments.length -  0);
while (G__20565__i < G__20565__a.length) {G__20565__a[G__20565__i] = arguments[G__20565__i + 0]; ++G__20565__i;}
  args = new cljs.core.IndexedSeq(G__20565__a,0,null);
} 
return G__20564__delegate.call(this,args);};
G__20564.cljs$lang$maxFixedArity = 0;
G__20564.cljs$lang$applyTo = (function (arglist__20566){
var args = cljs.core.seq(arglist__20566);
return G__20564__delegate(args);
});
G__20564.cljs$core$IFn$_invoke$arity$variadic = G__20564__delegate;
return G__20564;
})()
:sketches.nature_of_code.forces.repulse_mouse.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.repulse_mouse.draw))?(function() { 
var G__20567__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.repulse_mouse.draw,args);
};
var G__20567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20568__i = 0, G__20568__a = new Array(arguments.length -  0);
while (G__20568__i < G__20568__a.length) {G__20568__a[G__20568__i] = arguments[G__20568__i + 0]; ++G__20568__i;}
  args = new cljs.core.IndexedSeq(G__20568__a,0,null);
} 
return G__20567__delegate.call(this,args);};
G__20567.cljs$lang$maxFixedArity = 0;
G__20567.cljs$lang$applyTo = (function (arglist__20569){
var args = cljs.core.seq(arglist__20569);
return G__20567__delegate(args);
});
G__20567.cljs$core$IFn$_invoke$arity$variadic = G__20567__delegate;
return G__20567;
})()
:sketches.nature_of_code.forces.repulse_mouse.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.repulse_mouse.repulse_mouse', sketches.nature_of_code.forces.repulse_mouse.repulse_mouse);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.repulse_mouse.repulse_mouse,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20570__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20571__i = 0, G__20571__a = new Array(arguments.length -  0);
while (G__20571__i < G__20571__a.length) {G__20571__a[G__20571__i] = arguments[G__20571__i + 0]; ++G__20571__i;}
  args = new cljs.core.IndexedSeq(G__20571__a,0,null);
} 
return G__20570__delegate.call(this,args);};
G__20570.cljs$lang$maxFixedArity = 0;
G__20570.cljs$lang$applyTo = (function (arglist__20572){
var args = cljs.core.seq(arglist__20572);
return G__20570__delegate(args);
});
G__20570.cljs$core$IFn$_invoke$arity$variadic = G__20570__delegate;
return G__20570;
})()
:host)], null));
}
});
