// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.vectors.noise_car');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
goog.require('quil.middleware');
sketches.nature_of_code.vectors.noise_car.setup = (function sketches$nature_of_code$vectors$noise_car$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.ellipse_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150)], null),cljs.core.cst$kw$xoff,0.0,cljs.core.cst$kw$yoff,0.0], null);
});
sketches.nature_of_code.vectors.noise_car.move_through = (function sketches$nature_of_code$vectors$noise_car$move_through(p__19817){
var map__19818 = p__19817;
var map__19818__$1 = ((((!((map__19818 == null)))?(((((map__19818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19818):map__19818);
var vehicle = map__19818__$1;
var vec__19819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19818__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19819,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19819,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?(0):(((x < (0)))?quil.core.width():x
)),(((y > quil.core.height()))?(0):(((y < (0)))?quil.core.height():y
))], null));
});
sketches.nature_of_code.vectors.noise_car.update_state = (function sketches$nature_of_code$vectors$noise_car$update_state(p__19823){
var map__19824 = p__19823;
var map__19824__$1 = ((((!((map__19824 == null)))?(((((map__19824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19824):map__19824);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19824__$1,cljs.core.cst$kw$location);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19824__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19824__$1,cljs.core.cst$kw$velocity);
var xoff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19824__$1,cljs.core.cst$kw$xoff);
var yoff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19824__$1,cljs.core.cst$kw$yoff);
return sketches.nature_of_code.vectors.noise_car.move_through((function (){var acceleration__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(xoff,yoff),(0),(1),-0.01,0.01)], null);
var velocity__$1 = sketches.vector.limit(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration__$1),(10));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$acceleration,acceleration__$1,cljs.core.cst$kw$velocity,velocity__$1,cljs.core.cst$kw$location,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,acceleration__$1),location),cljs.core.cst$kw$xoff,(xoff + 1.0E-4),cljs.core.cst$kw$yoff,(yoff + 1.0E-4)], null);
})());
});
sketches.nature_of_code.vectors.noise_car.draw = (function sketches$nature_of_code$vectors$noise_car$draw(p__19826){
var map__19827 = p__19826;
var map__19827__$1 = ((((!((map__19827 == null)))?(((((map__19827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19827):map__19827);
var vec__19828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19827__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(1),null);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.ellipse(x,y,(16),(16));
});
sketches.nature_of_code.vectors.noise_car.run = (function sketches$nature_of_code$vectors$noise_car$run(host){
sketches.nature_of_code.vectors.noise_car.car_sketch = (function sketches$nature_of_code$vectors$noise_car$run_$_car_sketch(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19832__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19833__i = 0, G__19833__a = new Array(arguments.length -  0);
while (G__19833__i < G__19833__a.length) {G__19833__a[G__19833__i] = arguments[G__19833__i + 0]; ++G__19833__i;}
  args = new cljs.core.IndexedSeq(G__19833__a,0,null);
} 
return G__19832__delegate.call(this,args);};
G__19832.cljs$lang$maxFixedArity = 0;
G__19832.cljs$lang$applyTo = (function (arglist__19834){
var args = cljs.core.seq(arglist__19834);
return G__19832__delegate(args);
});
G__19832.cljs$core$IFn$_invoke$arity$variadic = G__19832__delegate;
return G__19832;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.noise_car.update_state))?(function() { 
var G__19835__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.noise_car.update_state,args);
};
var G__19835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19836__i = 0, G__19836__a = new Array(arguments.length -  0);
while (G__19836__i < G__19836__a.length) {G__19836__a[G__19836__i] = arguments[G__19836__i + 0]; ++G__19836__i;}
  args = new cljs.core.IndexedSeq(G__19836__a,0,null);
} 
return G__19835__delegate.call(this,args);};
G__19835.cljs$lang$maxFixedArity = 0;
G__19835.cljs$lang$applyTo = (function (arglist__19837){
var args = cljs.core.seq(arglist__19837);
return G__19835__delegate(args);
});
G__19835.cljs$core$IFn$_invoke$arity$variadic = G__19835__delegate;
return G__19835;
})()
:sketches.nature_of_code.vectors.noise_car.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.noise_car.setup))?(function() { 
var G__19838__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.noise_car.setup,args);
};
var G__19838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19839__i = 0, G__19839__a = new Array(arguments.length -  0);
while (G__19839__i < G__19839__a.length) {G__19839__a[G__19839__i] = arguments[G__19839__i + 0]; ++G__19839__i;}
  args = new cljs.core.IndexedSeq(G__19839__a,0,null);
} 
return G__19838__delegate.call(this,args);};
G__19838.cljs$lang$maxFixedArity = 0;
G__19838.cljs$lang$applyTo = (function (arglist__19840){
var args = cljs.core.seq(arglist__19840);
return G__19838__delegate(args);
});
G__19838.cljs$core$IFn$_invoke$arity$variadic = G__19838__delegate;
return G__19838;
})()
:sketches.nature_of_code.vectors.noise_car.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.noise_car.draw))?(function() { 
var G__19841__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.noise_car.draw,args);
};
var G__19841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19842__i = 0, G__19842__a = new Array(arguments.length -  0);
while (G__19842__i < G__19842__a.length) {G__19842__a[G__19842__i] = arguments[G__19842__i + 0]; ++G__19842__i;}
  args = new cljs.core.IndexedSeq(G__19842__a,0,null);
} 
return G__19841__delegate.call(this,args);};
G__19841.cljs$lang$maxFixedArity = 0;
G__19841.cljs$lang$applyTo = (function (arglist__19843){
var args = cljs.core.seq(arglist__19843);
return G__19841__delegate(args);
});
G__19841.cljs$core$IFn$_invoke$arity$variadic = G__19841__delegate;
return G__19841;
})()
:sketches.nature_of_code.vectors.noise_car.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.vectors.noise_car.car_sketch', sketches.nature_of_code.vectors.noise_car.car_sketch);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.vectors.noise_car.car_sketch,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19844__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19845__i = 0, G__19845__a = new Array(arguments.length -  0);
while (G__19845__i < G__19845__a.length) {G__19845__a[G__19845__i] = arguments[G__19845__i + 0]; ++G__19845__i;}
  args = new cljs.core.IndexedSeq(G__19845__a,0,null);
} 
return G__19844__delegate.call(this,args);};
G__19844.cljs$lang$maxFixedArity = 0;
G__19844.cljs$lang$applyTo = (function (arglist__19846){
var args = cljs.core.seq(arglist__19846);
return G__19844__delegate(args);
});
G__19844.cljs$core$IFn$_invoke$arity$variadic = G__19844__delegate;
return G__19844;
})()
:host)], null));
}
});
