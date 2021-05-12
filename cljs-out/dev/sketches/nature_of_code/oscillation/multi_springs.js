// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.multi_springs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.oscillation.multi_springs.create_spring = (function sketches$nature_of_code$oscillation$multi_springs$create_spring(x,y,l){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$len,l], null);
});
sketches.nature_of_code.oscillation.multi_springs.connect = (function sketches$nature_of_code$oscillation$multi_springs$connect(bob,spring){
var k = 0.1;
var force = sketches.vector.sub(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(bob),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(spring));
var d = sketches.vector.mag(force);
var stretch = (d - cljs.core.cst$kw$len.cljs$core$IFn$_invoke$arity$1(spring));
return sketches.mover.apply_force(bob,sketches.vector.mult(sketches.vector.normalize(force),(((-1) * k) * stretch)));
});
sketches.nature_of_code.oscillation.multi_springs.setup = (function sketches$nature_of_code$oscillation$multi_springs$setup(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spring,sketches.nature_of_code.oscillation.multi_springs.create_spring((quil.core.width() / (2)),(0),(100)),cljs.core.cst$kw$bob,sketches.mover.create_mover((50),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width() / (2)) - (50)),(50)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spring,sketches.nature_of_code.oscillation.multi_springs.create_spring(((quil.core.width() / (2)) - (100)),(0),(100)),cljs.core.cst$kw$bob,sketches.mover.create_mover((50),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width() / (2)) - (150)),(50)], null))], null)], null);
});
sketches.nature_of_code.oscillation.multi_springs.update_state = (function sketches$nature_of_code$oscillation$multi_springs$update_state(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (springs,p__23408){
var map__23409 = p__23408;
var map__23409__$1 = ((((!((map__23409 == null)))?(((((map__23409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23409):map__23409);
var spring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23409__$1,cljs.core.cst$kw$spring);
var bob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23409__$1,cljs.core.cst$kw$bob);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(springs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bob,sketches.mover.compute_position(sketches.nature_of_code.oscillation.multi_springs.connect(sketches.mover.apply_force(bob,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),spring)),cljs.core.cst$kw$spring,(function (){var temp__5733__auto__ = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bob.cljs$core$IFn$_invoke$arity$1(cljs.core.last(springs)));
if(cljs.core.truth_(temp__5733__auto__)){
var last_bob_location = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spring,cljs.core.cst$kw$location,last_bob_location);
} else {
return spring;
}
})()], null));
}),cljs.core.PersistentVector.EMPTY,state);
});
sketches.nature_of_code.oscillation.multi_springs.draw = (function sketches$nature_of_code$oscillation$multi_springs$draw(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.rect_mode(cljs.core.cst$kw$center);

var seq__23411 = cljs.core.seq(state);
var chunk__23412 = null;
var count__23413 = (0);
var i__23414 = (0);
while(true){
if((i__23414 < count__23413)){
var map__23415 = chunk__23412.cljs$core$IIndexed$_nth$arity$2(null,i__23414);
var map__23415__$1 = ((((!((map__23415 == null)))?(((((map__23415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23415):map__23415);
var spring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,cljs.core.cst$kw$spring);
var bob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,cljs.core.cst$kw$bob);
var map__23417_23439 = spring;
var map__23417_23440__$1 = ((((!((map__23417_23439 == null)))?(((((map__23417_23439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23417_23439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23417_23439):map__23417_23439);
var vec__23418_23441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23440__$1,cljs.core.cst$kw$location);
var a1_23442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23418_23441,(0),null);
var a2_23443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23418_23441,(1),null);
var len_23444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23417_23440__$1,cljs.core.cst$kw$len);
var map__23421_23445 = bob;
var map__23421_23446__$1 = ((((!((map__23421_23445 == null)))?(((((map__23421_23445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23421_23445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23421_23445):map__23421_23445);
var vec__23422_23447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23421_23446__$1,cljs.core.cst$kw$location);
var x_23448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422_23447,(0),null);
var y_23449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422_23447,(1),null);
var mass_23450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23421_23446__$1,cljs.core.cst$kw$mass);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x_23448,y_23449,a1_23442,a2_23443);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(a1_23442,a2_23443,(10),(10));

quil.core.ellipse(x_23448,y_23449,mass_23450,mass_23450);


var G__23451 = seq__23411;
var G__23452 = chunk__23412;
var G__23453 = count__23413;
var G__23454 = (i__23414 + (1));
seq__23411 = G__23451;
chunk__23412 = G__23452;
count__23413 = G__23453;
i__23414 = G__23454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23411);
if(temp__5735__auto__){
var seq__23411__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23411__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23411__$1);
var G__23455 = cljs.core.chunk_rest(seq__23411__$1);
var G__23456 = c__4351__auto__;
var G__23457 = cljs.core.count(c__4351__auto__);
var G__23458 = (0);
seq__23411 = G__23455;
chunk__23412 = G__23456;
count__23413 = G__23457;
i__23414 = G__23458;
continue;
} else {
var map__23427 = cljs.core.first(seq__23411__$1);
var map__23427__$1 = ((((!((map__23427 == null)))?(((((map__23427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23427):map__23427);
var spring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427__$1,cljs.core.cst$kw$spring);
var bob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427__$1,cljs.core.cst$kw$bob);
var map__23429_23459 = spring;
var map__23429_23460__$1 = ((((!((map__23429_23459 == null)))?(((((map__23429_23459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23429_23459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23429_23459):map__23429_23459);
var vec__23430_23461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23429_23460__$1,cljs.core.cst$kw$location);
var a1_23462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430_23461,(0),null);
var a2_23463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430_23461,(1),null);
var len_23464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23429_23460__$1,cljs.core.cst$kw$len);
var map__23433_23465 = bob;
var map__23433_23466__$1 = ((((!((map__23433_23465 == null)))?(((((map__23433_23465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23433_23465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23433_23465):map__23433_23465);
var vec__23434_23467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23433_23466__$1,cljs.core.cst$kw$location);
var x_23468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434_23467,(0),null);
var y_23469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434_23467,(1),null);
var mass_23470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23433_23466__$1,cljs.core.cst$kw$mass);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x_23468,y_23469,a1_23462,a2_23463);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(a1_23462,a2_23463,(10),(10));

quil.core.ellipse(x_23468,y_23469,mass_23470,mass_23470);


var G__23471 = cljs.core.next(seq__23411__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23411 = G__23471;
chunk__23412 = G__23472;
count__23413 = G__23473;
i__23414 = G__23474;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.multi_springs.run = (function sketches$nature_of_code$oscillation$multi_springs$run(host){
sketches.nature_of_code.oscillation.multi_springs.multi_springs = (function sketches$nature_of_code$oscillation$multi_springs$run_$_multi_springs(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23475__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23476__i = 0, G__23476__a = new Array(arguments.length -  0);
while (G__23476__i < G__23476__a.length) {G__23476__a[G__23476__i] = arguments[G__23476__i + 0]; ++G__23476__i;}
  args = new cljs.core.IndexedSeq(G__23476__a,0,null);
} 
return G__23475__delegate.call(this,args);};
G__23475.cljs$lang$maxFixedArity = 0;
G__23475.cljs$lang$applyTo = (function (arglist__23477){
var args = cljs.core.seq(arglist__23477);
return G__23475__delegate(args);
});
G__23475.cljs$core$IFn$_invoke$arity$variadic = G__23475__delegate;
return G__23475;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_springs.update_state))?(function() { 
var G__23478__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_springs.update_state,args);
};
var G__23478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23479__i = 0, G__23479__a = new Array(arguments.length -  0);
while (G__23479__i < G__23479__a.length) {G__23479__a[G__23479__i] = arguments[G__23479__i + 0]; ++G__23479__i;}
  args = new cljs.core.IndexedSeq(G__23479__a,0,null);
} 
return G__23478__delegate.call(this,args);};
G__23478.cljs$lang$maxFixedArity = 0;
G__23478.cljs$lang$applyTo = (function (arglist__23480){
var args = cljs.core.seq(arglist__23480);
return G__23478__delegate(args);
});
G__23478.cljs$core$IFn$_invoke$arity$variadic = G__23478__delegate;
return G__23478;
})()
:sketches.nature_of_code.oscillation.multi_springs.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_springs.setup))?(function() { 
var G__23481__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_springs.setup,args);
};
var G__23481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23482__i = 0, G__23482__a = new Array(arguments.length -  0);
while (G__23482__i < G__23482__a.length) {G__23482__a[G__23482__i] = arguments[G__23482__i + 0]; ++G__23482__i;}
  args = new cljs.core.IndexedSeq(G__23482__a,0,null);
} 
return G__23481__delegate.call(this,args);};
G__23481.cljs$lang$maxFixedArity = 0;
G__23481.cljs$lang$applyTo = (function (arglist__23483){
var args = cljs.core.seq(arglist__23483);
return G__23481__delegate(args);
});
G__23481.cljs$core$IFn$_invoke$arity$variadic = G__23481__delegate;
return G__23481;
})()
:sketches.nature_of_code.oscillation.multi_springs.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_springs.draw))?(function() { 
var G__23484__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_springs.draw,args);
};
var G__23484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23485__i = 0, G__23485__a = new Array(arguments.length -  0);
while (G__23485__i < G__23485__a.length) {G__23485__a[G__23485__i] = arguments[G__23485__i + 0]; ++G__23485__i;}
  args = new cljs.core.IndexedSeq(G__23485__a,0,null);
} 
return G__23484__delegate.call(this,args);};
G__23484.cljs$lang$maxFixedArity = 0;
G__23484.cljs$lang$applyTo = (function (arglist__23486){
var args = cljs.core.seq(arglist__23486);
return G__23484__delegate(args);
});
G__23484.cljs$core$IFn$_invoke$arity$variadic = G__23484__delegate;
return G__23484;
})()
:sketches.nature_of_code.oscillation.multi_springs.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.multi_springs.multi_springs', sketches.nature_of_code.oscillation.multi_springs.multi_springs);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.multi_springs.multi_springs,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23487__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23488__i = 0, G__23488__a = new Array(arguments.length -  0);
while (G__23488__i < G__23488__a.length) {G__23488__a[G__23488__i] = arguments[G__23488__i + 0]; ++G__23488__i;}
  args = new cljs.core.IndexedSeq(G__23488__a,0,null);
} 
return G__23487__delegate.call(this,args);};
G__23487.cljs$lang$maxFixedArity = 0;
G__23487.cljs$lang$applyTo = (function (arglist__23489){
var args = cljs.core.seq(arglist__23489);
return G__23487__delegate(args);
});
G__23487.cljs$core$IFn$_invoke$arity$variadic = G__23487__delegate;
return G__23487;
})()
:host)], null));
}
});
