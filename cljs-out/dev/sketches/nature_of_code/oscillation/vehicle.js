// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.vehicle');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
sketches.nature_of_code.oscillation.vehicle.setup = (function sketches$nature_of_code$oscillation$vehicle$setup(){
quil.core.rect_mode(cljs.core.cst$kw$center);

return sketches.mover.create_mover((100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null));
});
sketches.nature_of_code.oscillation.vehicle.cart_to_pol = (function sketches$nature_of_code$oscillation$vehicle$cart_to_pol(p__23903){
var vec__23904 = p__23903;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23904,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23904,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23907 = ((x * x) + (y * y));
return Math.sqrt(G__23907);
})(),quil.core.atan2(y,x)], null);
});
sketches.nature_of_code.oscillation.vehicle.pol_to_cart = (function sketches$nature_of_code$oscillation$vehicle$pol_to_cart(p__23908){
var vec__23909 = p__23908;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23909,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23909,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * quil.core.cos(phi)),(r * quil.core.sin(phi))], null);
});
sketches.nature_of_code.oscillation.vehicle.steer = (function sketches$nature_of_code$oscillation$vehicle$steer(p__23912,key){
var map__23913 = p__23912;
var map__23913__$1 = ((((!((map__23913 == null)))?(((((map__23913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23913):map__23913);
var mover = map__23913__$1;
var vec__23914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23913__$1,cljs.core.cst$kw$velocity);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(1),null);
var vec__23918 = sketches.nature_of_code.oscillation.vehicle.cart_to_pol(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$ArrowLeft)){
return sketches.nature_of_code.oscillation.vehicle.pol_to_cart(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(phi + (10))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$ArrowRight)){
return sketches.nature_of_code.oscillation.vehicle.pol_to_cart(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(phi - (10))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$ArrowUp)){
return sketches.nature_of_code.oscillation.vehicle.pol_to_cart(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r + (5)),phi], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$ArrowDown)){
return sketches.nature_of_code.oscillation.vehicle.pol_to_cart(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r - (5)),phi], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);

}
}
}
}
});
sketches.nature_of_code.oscillation.vehicle.draw = (function sketches$nature_of_code$oscillation$vehicle$draw(car){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((123));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((255));

quil.core.rect_mode(cljs.core.cst$kw$center);

var map__23921 = car;
var map__23921__$1 = ((((!((map__23921 == null)))?(((((map__23921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23921):map__23921);
var vec__23922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23921__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(1),null);
var vec__23925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23921__$1,cljs.core.cst$kw$velocity);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23925,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23925,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23921__$1,cljs.core.cst$kw$mass);
var angle = quil.core.atan2(vy,vx);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),mass,(0.5 * mass));

return quil.core.pop_matrix();
});
sketches.nature_of_code.oscillation.vehicle.update_state = (function sketches$nature_of_code$oscillation$vehicle$update_state(car){
return sketches.mover.compute_position(sketches.mover.move_through(car));
});
sketches.nature_of_code.oscillation.vehicle.key_pressed = (function sketches$nature_of_code$oscillation$vehicle$key_pressed(car,p__23929){
var map__23930 = p__23929;
var map__23930__$1 = ((((!((map__23930 == null)))?(((((map__23930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23930):map__23930);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930__$1,cljs.core.cst$kw$key);
return sketches.mover.apply_force(car,sketches.nature_of_code.oscillation.vehicle.steer(car,key));
});
sketches.nature_of_code.oscillation.vehicle.run = (function sketches$nature_of_code$oscillation$vehicle$run(host){
sketches.nature_of_code.oscillation.vehicle.vehicle = (function sketches$nature_of_code$oscillation$vehicle$run_$_vehicle(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23932__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23933__i = 0, G__23933__a = new Array(arguments.length -  0);
while (G__23933__i < G__23933__a.length) {G__23933__a[G__23933__i] = arguments[G__23933__i + 0]; ++G__23933__i;}
  args = new cljs.core.IndexedSeq(G__23933__a,0,null);
} 
return G__23932__delegate.call(this,args);};
G__23932.cljs$lang$maxFixedArity = 0;
G__23932.cljs$lang$applyTo = (function (arglist__23934){
var args = cljs.core.seq(arglist__23934);
return G__23932__delegate(args);
});
G__23932.cljs$core$IFn$_invoke$arity$variadic = G__23932__delegate;
return G__23932;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.vehicle.update_state))?(function() { 
var G__23935__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.vehicle.update_state,args);
};
var G__23935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23936__i = 0, G__23936__a = new Array(arguments.length -  0);
while (G__23936__i < G__23936__a.length) {G__23936__a[G__23936__i] = arguments[G__23936__i + 0]; ++G__23936__i;}
  args = new cljs.core.IndexedSeq(G__23936__a,0,null);
} 
return G__23935__delegate.call(this,args);};
G__23935.cljs$lang$maxFixedArity = 0;
G__23935.cljs$lang$applyTo = (function (arglist__23937){
var args = cljs.core.seq(arglist__23937);
return G__23935__delegate(args);
});
G__23935.cljs$core$IFn$_invoke$arity$variadic = G__23935__delegate;
return G__23935;
})()
:sketches.nature_of_code.oscillation.vehicle.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.vehicle.setup))?(function() { 
var G__23938__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.vehicle.setup,args);
};
var G__23938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23939__i = 0, G__23939__a = new Array(arguments.length -  0);
while (G__23939__i < G__23939__a.length) {G__23939__a[G__23939__i] = arguments[G__23939__i + 0]; ++G__23939__i;}
  args = new cljs.core.IndexedSeq(G__23939__a,0,null);
} 
return G__23938__delegate.call(this,args);};
G__23938.cljs$lang$maxFixedArity = 0;
G__23938.cljs$lang$applyTo = (function (arglist__23940){
var args = cljs.core.seq(arglist__23940);
return G__23938__delegate(args);
});
G__23938.cljs$core$IFn$_invoke$arity$variadic = G__23938__delegate;
return G__23938;
})()
:sketches.nature_of_code.oscillation.vehicle.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.vehicle.key_pressed))?(function() { 
var G__23941__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.vehicle.key_pressed,args);
};
var G__23941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23942__i = 0, G__23942__a = new Array(arguments.length -  0);
while (G__23942__i < G__23942__a.length) {G__23942__a[G__23942__i] = arguments[G__23942__i + 0]; ++G__23942__i;}
  args = new cljs.core.IndexedSeq(G__23942__a,0,null);
} 
return G__23941__delegate.call(this,args);};
G__23941.cljs$lang$maxFixedArity = 0;
G__23941.cljs$lang$applyTo = (function (arglist__23943){
var args = cljs.core.seq(arglist__23943);
return G__23941__delegate(args);
});
G__23941.cljs$core$IFn$_invoke$arity$variadic = G__23941__delegate;
return G__23941;
})()
:sketches.nature_of_code.oscillation.vehicle.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.vehicle.draw))?(function() { 
var G__23944__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.vehicle.draw,args);
};
var G__23944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23945__i = 0, G__23945__a = new Array(arguments.length -  0);
while (G__23945__i < G__23945__a.length) {G__23945__a[G__23945__i] = arguments[G__23945__i + 0]; ++G__23945__i;}
  args = new cljs.core.IndexedSeq(G__23945__a,0,null);
} 
return G__23944__delegate.call(this,args);};
G__23944.cljs$lang$maxFixedArity = 0;
G__23944.cljs$lang$applyTo = (function (arglist__23946){
var args = cljs.core.seq(arglist__23946);
return G__23944__delegate(args);
});
G__23944.cljs$core$IFn$_invoke$arity$variadic = G__23944__delegate;
return G__23944;
})()
:sketches.nature_of_code.oscillation.vehicle.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.vehicle.vehicle', sketches.nature_of_code.oscillation.vehicle.vehicle);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.vehicle.vehicle,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23947__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23948__i = 0, G__23948__a = new Array(arguments.length -  0);
while (G__23948__i < G__23948__a.length) {G__23948__a[G__23948__i] = arguments[G__23948__i + 0]; ++G__23948__i;}
  args = new cljs.core.IndexedSeq(G__23948__a,0,null);
} 
return G__23947__delegate.call(this,args);};
G__23947.cljs$lang$maxFixedArity = 0;
G__23947.cljs$lang$applyTo = (function (arglist__23949){
var args = cljs.core.seq(arglist__23949);
return G__23947__delegate(args);
});
G__23947.cljs$core$IFn$_invoke$arity$variadic = G__23947__delegate;
return G__23947;
})()
:host)], null));
}
});
