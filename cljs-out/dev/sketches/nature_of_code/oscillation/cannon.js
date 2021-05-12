// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.cannon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.oscillation.cannon.setup = (function sketches$nature_of_code$oscillation$cannon$setup(){
quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() * 0.1),(quil.core.height() * 0.8)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$aAcceleration,(0),cljs.core.cst$kw$aVelocity,0.2,cljs.core.cst$kw$angle,(0),cljs.core.cst$kw$mass,(20)], null);
});
sketches.nature_of_code.oscillation.cannon.compute_position = (function sketches$nature_of_code$oscillation$cannon$compute_position(mover){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$velocity,(function (p1__24083_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$acceleration.cljs$core$IFn$_invoke$arity$1(mover),p1__24083_SHARP_);
})),cljs.core.cst$kw$location,(function (p1__24084_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__24084_SHARP_,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$acceleration.cljs$core$IFn$_invoke$arity$1(mover),cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(mover)));
})),cljs.core.cst$kw$aVelocity,(function (p1__24085_SHARP_){
return (cljs.core.cst$kw$aAcceleration.cljs$core$IFn$_invoke$arity$1(mover) + p1__24085_SHARP_);
})),cljs.core.cst$kw$angle,(function (p1__24086_SHARP_){
return ((cljs.core.cst$kw$aAcceleration.cljs$core$IFn$_invoke$arity$1(mover) + cljs.core.cst$kw$aVelocity.cljs$core$IFn$_invoke$arity$1(mover)) + p1__24086_SHARP_);
})),cljs.core.cst$kw$aAcceleration,(0)),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
sketches.nature_of_code.oscillation.cannon.shoot = (function sketches$nature_of_code$oscillation$cannon$shoot(p__24087){
var map__24088 = p__24087;
var map__24088__$1 = ((((!((map__24088 == null)))?(((((map__24088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24088):map__24088);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24088__$1,cljs.core.cst$kw$velocity);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sketches.vector.mag(velocity),0.0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(-100)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
});
sketches.nature_of_code.oscillation.cannon.update_cannonball = (function sketches$nature_of_code$oscillation$cannon$update_cannonball(cannonball){
return sketches.nature_of_code.oscillation.cannon.compute_position(sketches.mover.apply_force(cannonball,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,(3)], null),sketches.nature_of_code.oscillation.cannon.shoot(cannonball))));
});
sketches.nature_of_code.oscillation.cannon.update_state = (function sketches$nature_of_code$oscillation$cannon$update_state(cannonball){
return sketches.nature_of_code.oscillation.cannon.update_cannonball(cannonball);
});
sketches.nature_of_code.oscillation.cannon.draw_cannon = (function sketches$nature_of_code$oscillation$cannon$draw_cannon(){
var tr__14574__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() * 0.1),(quil.core.height() * 0.8)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14574__auto__);

var fill__14558__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var previous_fill__14559__auto__ = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__14558__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__14558__auto__);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__14558__auto__);

}

var return_val__14560__auto__ = (function (){
quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(15),(30),(20));

var tr__14580__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.radians((225))], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto__);

quil.core.ellipse((0),(0),(20),(20));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(10),(20),(20));
}finally {quil.core.pop_matrix();
}})()
;
if((previous_fill__14559__auto__ == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__14559__auto__);
}

return return_val__14560__auto__;
}finally {quil.core.pop_matrix();
}});
sketches.nature_of_code.oscillation.cannon.draw_cannonball = (function sketches$nature_of_code$oscillation$cannon$draw_cannonball(p__24090){
var map__24091 = p__24090;
var map__24091__$1 = ((((!((map__24091 == null)))?(((((map__24091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24091):map__24091);
var vec__24092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24091__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24092,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24092,(1),null);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24091__$1,cljs.core.cst$kw$angle);
quil.core.rect_mode(cljs.core.cst$kw$center);

var tr__14574__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14574__auto__);

var fill__14558__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
var previous_fill__14559__auto__ = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__14558__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__14558__auto__);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__14558__auto__);

}

var return_val__14560__auto__ = (function (){var tr__14580__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto__);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(15),(15));
}finally {quil.core.pop_matrix();
}})();
if((previous_fill__14559__auto__ == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__14559__auto__);
}

return return_val__14560__auto__;
}finally {quil.core.pop_matrix();
}});
sketches.nature_of_code.oscillation.cannon.draw = (function sketches$nature_of_code$oscillation$cannon$draw(cannonball){
quil.core.background.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

sketches.nature_of_code.oscillation.cannon.draw_cannonball(cannonball);

return sketches.nature_of_code.oscillation.cannon.draw_cannon();
});
sketches.nature_of_code.oscillation.cannon.run = (function sketches$nature_of_code$oscillation$cannon$run(host){
sketches.nature_of_code.oscillation.cannon.cannon = (function sketches$nature_of_code$oscillation$cannon$run_$_cannon(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24096__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24097__i = 0, G__24097__a = new Array(arguments.length -  0);
while (G__24097__i < G__24097__a.length) {G__24097__a[G__24097__i] = arguments[G__24097__i + 0]; ++G__24097__i;}
  args = new cljs.core.IndexedSeq(G__24097__a,0,null);
} 
return G__24096__delegate.call(this,args);};
G__24096.cljs$lang$maxFixedArity = 0;
G__24096.cljs$lang$applyTo = (function (arglist__24098){
var args = cljs.core.seq(arglist__24098);
return G__24096__delegate(args);
});
G__24096.cljs$core$IFn$_invoke$arity$variadic = G__24096__delegate;
return G__24096;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.cannon.update_state))?(function() { 
var G__24099__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.cannon.update_state,args);
};
var G__24099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24100__i = 0, G__24100__a = new Array(arguments.length -  0);
while (G__24100__i < G__24100__a.length) {G__24100__a[G__24100__i] = arguments[G__24100__i + 0]; ++G__24100__i;}
  args = new cljs.core.IndexedSeq(G__24100__a,0,null);
} 
return G__24099__delegate.call(this,args);};
G__24099.cljs$lang$maxFixedArity = 0;
G__24099.cljs$lang$applyTo = (function (arglist__24101){
var args = cljs.core.seq(arglist__24101);
return G__24099__delegate(args);
});
G__24099.cljs$core$IFn$_invoke$arity$variadic = G__24099__delegate;
return G__24099;
})()
:sketches.nature_of_code.oscillation.cannon.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.cannon.setup))?(function() { 
var G__24102__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.cannon.setup,args);
};
var G__24102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24103__i = 0, G__24103__a = new Array(arguments.length -  0);
while (G__24103__i < G__24103__a.length) {G__24103__a[G__24103__i] = arguments[G__24103__i + 0]; ++G__24103__i;}
  args = new cljs.core.IndexedSeq(G__24103__a,0,null);
} 
return G__24102__delegate.call(this,args);};
G__24102.cljs$lang$maxFixedArity = 0;
G__24102.cljs$lang$applyTo = (function (arglist__24104){
var args = cljs.core.seq(arglist__24104);
return G__24102__delegate(args);
});
G__24102.cljs$core$IFn$_invoke$arity$variadic = G__24102__delegate;
return G__24102;
})()
:sketches.nature_of_code.oscillation.cannon.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.cannon.draw))?(function() { 
var G__24105__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.cannon.draw,args);
};
var G__24105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24106__i = 0, G__24106__a = new Array(arguments.length -  0);
while (G__24106__i < G__24106__a.length) {G__24106__a[G__24106__i] = arguments[G__24106__i + 0]; ++G__24106__i;}
  args = new cljs.core.IndexedSeq(G__24106__a,0,null);
} 
return G__24105__delegate.call(this,args);};
G__24105.cljs$lang$maxFixedArity = 0;
G__24105.cljs$lang$applyTo = (function (arglist__24107){
var args = cljs.core.seq(arglist__24107);
return G__24105__delegate(args);
});
G__24105.cljs$core$IFn$_invoke$arity$variadic = G__24105__delegate;
return G__24105;
})()
:sketches.nature_of_code.oscillation.cannon.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.cannon.cannon', sketches.nature_of_code.oscillation.cannon.cannon);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.cannon.cannon,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24108__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24109__i = 0, G__24109__a = new Array(arguments.length -  0);
while (G__24109__i < G__24109__a.length) {G__24109__a[G__24109__i] = arguments[G__24109__i + 0]; ++G__24109__i;}
  args = new cljs.core.IndexedSeq(G__24109__a,0,null);
} 
return G__24108__delegate.call(this,args);};
G__24108.cljs$lang$maxFixedArity = 0;
G__24108.cljs$lang$applyTo = (function (arglist__24110){
var args = cljs.core.seq(arglist__24110);
return G__24108__delegate(args);
});
G__24108.cljs$core$IFn$_invoke$arity$variadic = G__24108__delegate;
return G__24108;
})()
:host)], null));
}
});
