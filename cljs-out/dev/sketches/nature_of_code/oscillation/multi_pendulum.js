// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.multi_pendulum');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.oscillation.multi_pendulum.create_pendulum = (function sketches$nature_of_code$oscillation$multi_pendulum$create_pendulum(origin,r){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$origin,origin,cljs.core.cst$kw$r,r,cljs.core.cst$kw$angle,(quil.core.PI / 4.0),cljs.core.cst$kw$damping,0.995,cljs.core.cst$kw$a_DASH_velocity,0.0,cljs.core.cst$kw$a_DASH_acceleration,0.0], null);
});
sketches.nature_of_code.oscillation.multi_pendulum.update_pendulum = (function sketches$nature_of_code$oscillation$multi_pendulum$update_pendulum(p__23993){
var map__23994 = p__23993;
var map__23994__$1 = ((((!((map__23994 == null)))?(((((map__23994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23994):map__23994);
var pendulum = map__23994__$1;
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$angle);
var a_velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$a_DASH_velocity);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$r);
var damping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$damping);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$origin);
var gravity = 0.4;
var a_acceleration = (((- gravity) / r) * quil.core.sin(angle));
var a_velocity__$1 = (a_velocity + a_acceleration);
var angle__$1 = (angle + a_velocity__$1);
var location = sketches.vector.add.cljs$core$IFn$_invoke$arity$2((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(r * quil.core.sin(angle__$1)),(r * quil.core.cos(angle__$1))],null)),origin);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pendulum,cljs.core.cst$kw$a_DASH_acceleration,a_acceleration),cljs.core.cst$kw$angle,angle__$1),cljs.core.cst$kw$origin,origin),cljs.core.cst$kw$location,location),cljs.core.cst$kw$a_DASH_velocity,(a_velocity__$1 * damping));
});
sketches.nature_of_code.oscillation.multi_pendulum.draw_pendulum = (function sketches$nature_of_code$oscillation$multi_pendulum$draw_pendulum(p__23996){
var map__23997 = p__23996;
var map__23997__$1 = ((((!((map__23997 == null)))?(((((map__23997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23997):map__23997);
var vec__23998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,cljs.core.cst$kw$origin);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23998,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23998,(1),null);
var vec__24001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24001,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24001,(1),null);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,cljs.core.cst$kw$r);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23997__$1,cljs.core.cst$kw$angle);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.line.cljs$core$IFn$_invoke$arity$4(ox,oy,x,y);

return quil.core.ellipse(x,y,(16),(16));
});
sketches.nature_of_code.oscillation.multi_pendulum.setup = (function sketches$nature_of_code$oscillation$multi_pendulum$setup(){
return (new cljs.core.List(null,sketches.nature_of_code.oscillation.multi_pendulum.create_pendulum(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(0)], null),100.0),(new cljs.core.List(null,sketches.nature_of_code.oscillation.multi_pendulum.create_pendulum(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(100)], null),100.0),(new cljs.core.List(null,sketches.nature_of_code.oscillation.multi_pendulum.create_pendulum(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(200)], null),100.0),null,(1),null)),(2),null)),(3),null));
});
sketches.nature_of_code.oscillation.multi_pendulum.update_state = (function sketches$nature_of_code$oscillation$multi_pendulum$update_state(pendulums){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,pendulum){
return sketches.nature_of_code.oscillation.multi_pendulum.update_pendulum(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0)))?pendulum:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pendulum,cljs.core.cst$kw$origin,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pendulums,(idx - (1)))))));
}),pendulums);
});
sketches.nature_of_code.oscillation.multi_pendulum.draw = (function sketches$nature_of_code$oscillation$multi_pendulum$draw(pendulums){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__24005 = cljs.core.seq(pendulums);
var chunk__24006 = null;
var count__24007 = (0);
var i__24008 = (0);
while(true){
if((i__24008 < count__24007)){
var pendulum = chunk__24006.cljs$core$IIndexed$_nth$arity$2(null,i__24008);
sketches.nature_of_code.oscillation.multi_pendulum.draw_pendulum(pendulum);


var G__24009 = seq__24005;
var G__24010 = chunk__24006;
var G__24011 = count__24007;
var G__24012 = (i__24008 + (1));
seq__24005 = G__24009;
chunk__24006 = G__24010;
count__24007 = G__24011;
i__24008 = G__24012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24005);
if(temp__5735__auto__){
var seq__24005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24005__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24005__$1);
var G__24013 = cljs.core.chunk_rest(seq__24005__$1);
var G__24014 = c__4351__auto__;
var G__24015 = cljs.core.count(c__4351__auto__);
var G__24016 = (0);
seq__24005 = G__24013;
chunk__24006 = G__24014;
count__24007 = G__24015;
i__24008 = G__24016;
continue;
} else {
var pendulum = cljs.core.first(seq__24005__$1);
sketches.nature_of_code.oscillation.multi_pendulum.draw_pendulum(pendulum);


var G__24017 = cljs.core.next(seq__24005__$1);
var G__24018 = null;
var G__24019 = (0);
var G__24020 = (0);
seq__24005 = G__24017;
chunk__24006 = G__24018;
count__24007 = G__24019;
i__24008 = G__24020;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.multi_pendulum.run = (function sketches$nature_of_code$oscillation$multi_pendulum$run(host){
sketches.nature_of_code.oscillation.multi_pendulum.multi_pendulum = (function sketches$nature_of_code$oscillation$multi_pendulum$run_$_multi_pendulum(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24021__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24022__i = 0, G__24022__a = new Array(arguments.length -  0);
while (G__24022__i < G__24022__a.length) {G__24022__a[G__24022__i] = arguments[G__24022__i + 0]; ++G__24022__i;}
  args = new cljs.core.IndexedSeq(G__24022__a,0,null);
} 
return G__24021__delegate.call(this,args);};
G__24021.cljs$lang$maxFixedArity = 0;
G__24021.cljs$lang$applyTo = (function (arglist__24023){
var args = cljs.core.seq(arglist__24023);
return G__24021__delegate(args);
});
G__24021.cljs$core$IFn$_invoke$arity$variadic = G__24021__delegate;
return G__24021;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_pendulum.update_state))?(function() { 
var G__24024__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_pendulum.update_state,args);
};
var G__24024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24025__i = 0, G__24025__a = new Array(arguments.length -  0);
while (G__24025__i < G__24025__a.length) {G__24025__a[G__24025__i] = arguments[G__24025__i + 0]; ++G__24025__i;}
  args = new cljs.core.IndexedSeq(G__24025__a,0,null);
} 
return G__24024__delegate.call(this,args);};
G__24024.cljs$lang$maxFixedArity = 0;
G__24024.cljs$lang$applyTo = (function (arglist__24026){
var args = cljs.core.seq(arglist__24026);
return G__24024__delegate(args);
});
G__24024.cljs$core$IFn$_invoke$arity$variadic = G__24024__delegate;
return G__24024;
})()
:sketches.nature_of_code.oscillation.multi_pendulum.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_pendulum.setup))?(function() { 
var G__24027__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_pendulum.setup,args);
};
var G__24027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24028__i = 0, G__24028__a = new Array(arguments.length -  0);
while (G__24028__i < G__24028__a.length) {G__24028__a[G__24028__i] = arguments[G__24028__i + 0]; ++G__24028__i;}
  args = new cljs.core.IndexedSeq(G__24028__a,0,null);
} 
return G__24027__delegate.call(this,args);};
G__24027.cljs$lang$maxFixedArity = 0;
G__24027.cljs$lang$applyTo = (function (arglist__24029){
var args = cljs.core.seq(arglist__24029);
return G__24027__delegate(args);
});
G__24027.cljs$core$IFn$_invoke$arity$variadic = G__24027__delegate;
return G__24027;
})()
:sketches.nature_of_code.oscillation.multi_pendulum.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.multi_pendulum.draw))?(function() { 
var G__24030__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.multi_pendulum.draw,args);
};
var G__24030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24031__i = 0, G__24031__a = new Array(arguments.length -  0);
while (G__24031__i < G__24031__a.length) {G__24031__a[G__24031__i] = arguments[G__24031__i + 0]; ++G__24031__i;}
  args = new cljs.core.IndexedSeq(G__24031__a,0,null);
} 
return G__24030__delegate.call(this,args);};
G__24030.cljs$lang$maxFixedArity = 0;
G__24030.cljs$lang$applyTo = (function (arglist__24032){
var args = cljs.core.seq(arglist__24032);
return G__24030__delegate(args);
});
G__24030.cljs$core$IFn$_invoke$arity$variadic = G__24030__delegate;
return G__24030;
})()
:sketches.nature_of_code.oscillation.multi_pendulum.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.multi_pendulum.multi_pendulum', sketches.nature_of_code.oscillation.multi_pendulum.multi_pendulum);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.multi_pendulum.multi_pendulum,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24033__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24034__i = 0, G__24034__a = new Array(arguments.length -  0);
while (G__24034__i < G__24034__a.length) {G__24034__a[G__24034__i] = arguments[G__24034__i + 0]; ++G__24034__i;}
  args = new cljs.core.IndexedSeq(G__24034__a,0,null);
} 
return G__24033__delegate.call(this,args);};
G__24033.cljs$lang$maxFixedArity = 0;
G__24033.cljs$lang$applyTo = (function (arglist__24035){
var args = cljs.core.seq(arglist__24035);
return G__24033__delegate(args);
});
G__24033.cljs$core$IFn$_invoke$arity$variadic = G__24033__delegate;
return G__24033;
})()
:host)], null));
}
});
