// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.vectors.car');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
goog.require('quil.middleware');
sketches.nature_of_code.vectors.car.setup = (function sketches$nature_of_code$vectors$car$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.ellipse_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150)], null)], null);
});
sketches.nature_of_code.vectors.car.move_through = (function sketches$nature_of_code$vectors$car$move_through(p__19650){
var map__19651 = p__19650;
var map__19651__$1 = ((((!((map__19651 == null)))?(((((map__19651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19651):map__19651);
var vehicle = map__19651__$1;
var vec__19652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?(0):(((x < (0)))?quil.core.width():x
)),(((y > quil.core.height()))?(0):(((y < (0)))?quil.core.height():y
))], null));
});
sketches.nature_of_code.vectors.car.update_state = (function sketches$nature_of_code$vectors$car$update_state(p__19656){
var map__19657 = p__19656;
var map__19657__$1 = ((((!((map__19657 == null)))?(((((map__19657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19657):map__19657);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19657__$1,cljs.core.cst$kw$location);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19657__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19657__$1,cljs.core.cst$kw$velocity);
return sketches.nature_of_code.vectors.car.move_through(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,acceleration,cljs.core.cst$kw$velocity,sketches.vector.limit(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration),(10)),cljs.core.cst$kw$location,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration),location)], null));
});
sketches.nature_of_code.vectors.car.draw = (function sketches$nature_of_code$vectors$car$draw(p__19659){
var map__19660 = p__19659;
var map__19660__$1 = ((((!((map__19660 == null)))?(((((map__19660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19660):map__19660);
var vec__19661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19660__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19661,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19661,(1),null);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.ellipse(x,y,(16),(16));
});
sketches.nature_of_code.vectors.car.on_key_down = (function sketches$nature_of_code$vectors$car$on_key_down(state,ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$up)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$acceleration,sketches.vector.add,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.001], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$down)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$acceleration,sketches.vector.add,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.001], null));
} else {
return state;

}
}
});
sketches.nature_of_code.vectors.car.run = (function sketches$nature_of_code$vectors$car$run(host){
sketches.nature_of_code.vectors.car.car_sketch = (function sketches$nature_of_code$vectors$car$run_$_car_sketch(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19665__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19666__i = 0, G__19666__a = new Array(arguments.length -  0);
while (G__19666__i < G__19666__a.length) {G__19666__a[G__19666__i] = arguments[G__19666__i + 0]; ++G__19666__i;}
  args = new cljs.core.IndexedSeq(G__19666__a,0,null);
} 
return G__19665__delegate.call(this,args);};
G__19665.cljs$lang$maxFixedArity = 0;
G__19665.cljs$lang$applyTo = (function (arglist__19667){
var args = cljs.core.seq(arglist__19667);
return G__19665__delegate(args);
});
G__19665.cljs$core$IFn$_invoke$arity$variadic = G__19665__delegate;
return G__19665;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.car.update_state))?(function() { 
var G__19668__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.car.update_state,args);
};
var G__19668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19669__i = 0, G__19669__a = new Array(arguments.length -  0);
while (G__19669__i < G__19669__a.length) {G__19669__a[G__19669__i] = arguments[G__19669__i + 0]; ++G__19669__i;}
  args = new cljs.core.IndexedSeq(G__19669__a,0,null);
} 
return G__19668__delegate.call(this,args);};
G__19668.cljs$lang$maxFixedArity = 0;
G__19668.cljs$lang$applyTo = (function (arglist__19670){
var args = cljs.core.seq(arglist__19670);
return G__19668__delegate(args);
});
G__19668.cljs$core$IFn$_invoke$arity$variadic = G__19668__delegate;
return G__19668;
})()
:sketches.nature_of_code.vectors.car.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.car.setup))?(function() { 
var G__19671__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.car.setup,args);
};
var G__19671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19672__i = 0, G__19672__a = new Array(arguments.length -  0);
while (G__19672__i < G__19672__a.length) {G__19672__a[G__19672__i] = arguments[G__19672__i + 0]; ++G__19672__i;}
  args = new cljs.core.IndexedSeq(G__19672__a,0,null);
} 
return G__19671__delegate.call(this,args);};
G__19671.cljs$lang$maxFixedArity = 0;
G__19671.cljs$lang$applyTo = (function (arglist__19673){
var args = cljs.core.seq(arglist__19673);
return G__19671__delegate(args);
});
G__19671.cljs$core$IFn$_invoke$arity$variadic = G__19671__delegate;
return G__19671;
})()
:sketches.nature_of_code.vectors.car.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.car.on_key_down))?(function() { 
var G__19674__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.car.on_key_down,args);
};
var G__19674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19675__i = 0, G__19675__a = new Array(arguments.length -  0);
while (G__19675__i < G__19675__a.length) {G__19675__a[G__19675__i] = arguments[G__19675__i + 0]; ++G__19675__i;}
  args = new cljs.core.IndexedSeq(G__19675__a,0,null);
} 
return G__19674__delegate.call(this,args);};
G__19674.cljs$lang$maxFixedArity = 0;
G__19674.cljs$lang$applyTo = (function (arglist__19676){
var args = cljs.core.seq(arglist__19676);
return G__19674__delegate(args);
});
G__19674.cljs$core$IFn$_invoke$arity$variadic = G__19674__delegate;
return G__19674;
})()
:sketches.nature_of_code.vectors.car.on_key_down),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.car.draw))?(function() { 
var G__19677__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.car.draw,args);
};
var G__19677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19678__i = 0, G__19678__a = new Array(arguments.length -  0);
while (G__19678__i < G__19678__a.length) {G__19678__a[G__19678__i] = arguments[G__19678__i + 0]; ++G__19678__i;}
  args = new cljs.core.IndexedSeq(G__19678__a,0,null);
} 
return G__19677__delegate.call(this,args);};
G__19677.cljs$lang$maxFixedArity = 0;
G__19677.cljs$lang$applyTo = (function (arglist__19679){
var args = cljs.core.seq(arglist__19679);
return G__19677__delegate(args);
});
G__19677.cljs$core$IFn$_invoke$arity$variadic = G__19677__delegate;
return G__19677;
})()
:sketches.nature_of_code.vectors.car.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.vectors.car.car_sketch', sketches.nature_of_code.vectors.car.car_sketch);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.vectors.car.car_sketch,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19680__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19681__i = 0, G__19681__a = new Array(arguments.length -  0);
while (G__19681__i < G__19681__a.length) {G__19681__a[G__19681__i] = arguments[G__19681__i + 0]; ++G__19681__i;}
  args = new cljs.core.IndexedSeq(G__19681__a,0,null);
} 
return G__19680__delegate.call(this,args);};
G__19680.cljs$lang$maxFixedArity = 0;
G__19680.cljs$lang$applyTo = (function (arglist__19682){
var args = cljs.core.seq(arglist__19682);
return G__19680__delegate(args);
});
G__19680.cljs$core$IFn$_invoke$arity$variadic = G__19680__delegate;
return G__19680;
})()
:host)], null));
}
});
