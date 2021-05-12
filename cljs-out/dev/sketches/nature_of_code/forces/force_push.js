// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.forces.force_push');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.forces.force_push.create_mover = (function sketches$nature_of_code$forces$force_push$create_mover(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$mass,quil.core.random.cljs$core$IFn$_invoke$arity$2((10),(40))], null);
});
sketches.nature_of_code.forces.force_push.setup = (function sketches$nature_of_code$forces$force_push$setup(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.create_mover,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(20)));
});
sketches.nature_of_code.forces.force_push.push_back = (function sketches$nature_of_code$forces$force_push$push_back(p__18177){
var map__18178 = p__18177;
var map__18178__$1 = ((((!((map__18178 == null)))?(((((map__18178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18178):map__18178);
var mover = map__18178__$1;
var vec__18179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18178__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18179,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18179,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?(-1):(((x < (0)))?(1):(0)
)),(((y > quil.core.height()))?(-1):(((y < (0)))?(1):(0)
))], null);
});
sketches.nature_of_code.forces.force_push.update_mover = (function sketches$nature_of_code$forces$force_push$update_mover(p__18183){
var map__18184 = p__18183;
var map__18184__$1 = ((((!((map__18184 == null)))?(((((map__18184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18184):map__18184);
var mover = map__18184__$1;
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18184__$1,cljs.core.cst$kw$mass);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.03,(0)], null);
var gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null);
return sketches.mover.update_mover(mover,sketches.vector.add.cljs$core$IFn$_invoke$arity$variadic(sketches.vector.div(gravity,mass),sketches.vector.div(wind,mass),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sketches.vector.div(sketches.nature_of_code.forces.force_push.push_back(mover),mass)], 0)));
});
sketches.nature_of_code.forces.force_push.update_state = (function sketches$nature_of_code$forces$force_push$update_state(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.update_mover,state);
});
sketches.nature_of_code.forces.force_push.draw_mover = (function sketches$nature_of_code$forces$force_push$draw_mover(p__18186){
var map__18187 = p__18186;
var map__18187__$1 = ((((!((map__18187 == null)))?(((((map__18187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18187):map__18187);
var vec__18188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18187__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18188,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18188,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18187__$1,cljs.core.cst$kw$mass);
return quil.core.ellipse(x,y,mass,mass);
});
sketches.nature_of_code.forces.force_push.draw = (function sketches$nature_of_code$forces$force_push$draw(state){
quil.core.clear();

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.draw_mover,state));
});
sketches.nature_of_code.forces.force_push.run = (function sketches$nature_of_code$forces$force_push$run(host){
sketches.nature_of_code.forces.force_push.force_push = (function sketches$nature_of_code$forces$force_push$run_$_force_push(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18192__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18193__i = 0, G__18193__a = new Array(arguments.length -  0);
while (G__18193__i < G__18193__a.length) {G__18193__a[G__18193__i] = arguments[G__18193__i + 0]; ++G__18193__i;}
  args = new cljs.core.IndexedSeq(G__18193__a,0,null);
} 
return G__18192__delegate.call(this,args);};
G__18192.cljs$lang$maxFixedArity = 0;
G__18192.cljs$lang$applyTo = (function (arglist__18194){
var args = cljs.core.seq(arglist__18194);
return G__18192__delegate(args);
});
G__18192.cljs$core$IFn$_invoke$arity$variadic = G__18192__delegate;
return G__18192;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.force_push.update_state))?(function() { 
var G__18195__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.update_state,args);
};
var G__18195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18196__i = 0, G__18196__a = new Array(arguments.length -  0);
while (G__18196__i < G__18196__a.length) {G__18196__a[G__18196__i] = arguments[G__18196__i + 0]; ++G__18196__i;}
  args = new cljs.core.IndexedSeq(G__18196__a,0,null);
} 
return G__18195__delegate.call(this,args);};
G__18195.cljs$lang$maxFixedArity = 0;
G__18195.cljs$lang$applyTo = (function (arglist__18197){
var args = cljs.core.seq(arglist__18197);
return G__18195__delegate(args);
});
G__18195.cljs$core$IFn$_invoke$arity$variadic = G__18195__delegate;
return G__18195;
})()
:sketches.nature_of_code.forces.force_push.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.force_push.setup))?(function() { 
var G__18198__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.setup,args);
};
var G__18198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18199__i = 0, G__18199__a = new Array(arguments.length -  0);
while (G__18199__i < G__18199__a.length) {G__18199__a[G__18199__i] = arguments[G__18199__i + 0]; ++G__18199__i;}
  args = new cljs.core.IndexedSeq(G__18199__a,0,null);
} 
return G__18198__delegate.call(this,args);};
G__18198.cljs$lang$maxFixedArity = 0;
G__18198.cljs$lang$applyTo = (function (arglist__18200){
var args = cljs.core.seq(arglist__18200);
return G__18198__delegate(args);
});
G__18198.cljs$core$IFn$_invoke$arity$variadic = G__18198__delegate;
return G__18198;
})()
:sketches.nature_of_code.forces.force_push.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.forces.force_push.draw))?(function() { 
var G__18201__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.forces.force_push.draw,args);
};
var G__18201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18202__i = 0, G__18202__a = new Array(arguments.length -  0);
while (G__18202__i < G__18202__a.length) {G__18202__a[G__18202__i] = arguments[G__18202__i + 0]; ++G__18202__i;}
  args = new cljs.core.IndexedSeq(G__18202__a,0,null);
} 
return G__18201__delegate.call(this,args);};
G__18201.cljs$lang$maxFixedArity = 0;
G__18201.cljs$lang$applyTo = (function (arglist__18203){
var args = cljs.core.seq(arglist__18203);
return G__18201__delegate(args);
});
G__18201.cljs$core$IFn$_invoke$arity$variadic = G__18201__delegate;
return G__18201;
})()
:sketches.nature_of_code.forces.force_push.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.forces.force_push.force_push', sketches.nature_of_code.forces.force_push.force_push);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.forces.force_push.force_push,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18204__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18205__i = 0, G__18205__a = new Array(arguments.length -  0);
while (G__18205__i < G__18205__a.length) {G__18205__a[G__18205__i] = arguments[G__18205__i + 0]; ++G__18205__i;}
  args = new cljs.core.IndexedSeq(G__18205__a,0,null);
} 
return G__18204__delegate.call(this,args);};
G__18204.cljs$lang$maxFixedArity = 0;
G__18204.cljs$lang$applyTo = (function (arglist__18206){
var args = cljs.core.seq(arglist__18206);
return G__18204__delegate(args);
});
G__18204.cljs$core$IFn$_invoke$arity$variadic = G__18204__delegate;
return G__18204;
})()
:host)], null));
}
});
