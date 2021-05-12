// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.rainbow_circles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.rac_sketches.rainbow_circles.setup = (function sketches$rac_sketches$rainbow_circles$setup(){
quil.core.text_align.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

return (0);
});
sketches.rac_sketches.rainbow_circles.update_state = (function sketches$rac_sketches$rainbow_circles$update_state(state){
return cljs.core.mod((0.02 + state),quil.core.PI);
});
sketches.rac_sketches.rainbow_circles.draw = (function sketches$rac_sketches$rainbow_circles$draw(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

var step = (quil.core.width() / (25));
var seq__24247 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(quil.core.width() + step),step));
var chunk__24252 = null;
var count__24253 = (0);
var i__24254 = (0);
while(true){
if((i__24254 < count__24253)){
var x = chunk__24252.cljs$core$IIndexed$_nth$arity$2(null,i__24254);
var seq__24255_24259 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(quil.core.height() + step),step));
var chunk__24256_24260 = null;
var count__24257_24261 = (0);
var i__24258_24262 = (0);
while(true){
if((i__24258_24262 < count__24257_24261)){
var y_24263 = chunk__24256_24260.cljs$core$IIndexed$_nth$arity$2(null,i__24258_24262);
var even_x_24264 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((x / step),(2)),(0));
var even_y_24265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((y_24263 / step),(2)),(0));
var pulse_24266 = (step * ((((even_x_24264) && (even_y_24265)))?quil.core.sin(state):((((!(even_x_24264)) && (even_y_24265)))?quil.core.cos(state):((((even_x_24264) && (!(even_y_24265))))?quil.core.cos(state):((((!(even_x_24264)) && (!(even_y_24265))))?quil.core.sin(state):null)))));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(x,(0),(quil.core.width() + step),(0),(255)),(255),(200));

quil.core.ellipse(x,y_24263,(((2) * pulse_24266) * quil.core.sin(state)),(((2) * pulse_24266) * quil.core.sin(state)));


var G__24267 = seq__24255_24259;
var G__24268 = chunk__24256_24260;
var G__24269 = count__24257_24261;
var G__24270 = (i__24258_24262 + (1));
seq__24255_24259 = G__24267;
chunk__24256_24260 = G__24268;
count__24257_24261 = G__24269;
i__24258_24262 = G__24270;
continue;
} else {
var temp__5735__auto___24271 = cljs.core.seq(seq__24255_24259);
if(temp__5735__auto___24271){
var seq__24255_24272__$1 = temp__5735__auto___24271;
if(cljs.core.chunked_seq_QMARK_(seq__24255_24272__$1)){
var c__4351__auto___24273 = cljs.core.chunk_first(seq__24255_24272__$1);
var G__24274 = cljs.core.chunk_rest(seq__24255_24272__$1);
var G__24275 = c__4351__auto___24273;
var G__24276 = cljs.core.count(c__4351__auto___24273);
var G__24277 = (0);
seq__24255_24259 = G__24274;
chunk__24256_24260 = G__24275;
count__24257_24261 = G__24276;
i__24258_24262 = G__24277;
continue;
} else {
var y_24278 = cljs.core.first(seq__24255_24272__$1);
var even_x_24279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((x / step),(2)),(0));
var even_y_24280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((y_24278 / step),(2)),(0));
var pulse_24281 = (step * ((((even_x_24279) && (even_y_24280)))?quil.core.sin(state):((((!(even_x_24279)) && (even_y_24280)))?quil.core.cos(state):((((even_x_24279) && (!(even_y_24280))))?quil.core.cos(state):((((!(even_x_24279)) && (!(even_y_24280))))?quil.core.sin(state):null)))));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(x,(0),(quil.core.width() + step),(0),(255)),(255),(200));

quil.core.ellipse(x,y_24278,(((2) * pulse_24281) * quil.core.sin(state)),(((2) * pulse_24281) * quil.core.sin(state)));


var G__24282 = cljs.core.next(seq__24255_24272__$1);
var G__24283 = null;
var G__24284 = (0);
var G__24285 = (0);
seq__24255_24259 = G__24282;
chunk__24256_24260 = G__24283;
count__24257_24261 = G__24284;
i__24258_24262 = G__24285;
continue;
}
} else {
}
}
break;
}

var G__24286 = seq__24247;
var G__24287 = chunk__24252;
var G__24288 = count__24253;
var G__24289 = (i__24254 + (1));
seq__24247 = G__24286;
chunk__24252 = G__24287;
count__24253 = G__24288;
i__24254 = G__24289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__24247);
if(temp__5735__auto__){
var seq__24247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24247__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24247__$1);
var G__24290 = cljs.core.chunk_rest(seq__24247__$1);
var G__24291 = c__4351__auto__;
var G__24292 = cljs.core.count(c__4351__auto__);
var G__24293 = (0);
seq__24247 = G__24290;
chunk__24252 = G__24291;
count__24253 = G__24292;
i__24254 = G__24293;
continue;
} else {
var x = cljs.core.first(seq__24247__$1);
var seq__24248_24294 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(quil.core.height() + step),step));
var chunk__24249_24295 = null;
var count__24250_24296 = (0);
var i__24251_24297 = (0);
while(true){
if((i__24251_24297 < count__24250_24296)){
var y_24298 = chunk__24249_24295.cljs$core$IIndexed$_nth$arity$2(null,i__24251_24297);
var even_x_24299 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((x / step),(2)),(0));
var even_y_24300 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((y_24298 / step),(2)),(0));
var pulse_24301 = (step * ((((even_x_24299) && (even_y_24300)))?quil.core.sin(state):((((!(even_x_24299)) && (even_y_24300)))?quil.core.cos(state):((((even_x_24299) && (!(even_y_24300))))?quil.core.cos(state):((((!(even_x_24299)) && (!(even_y_24300))))?quil.core.sin(state):null)))));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(x,(0),(quil.core.width() + step),(0),(255)),(255),(200));

quil.core.ellipse(x,y_24298,(((2) * pulse_24301) * quil.core.sin(state)),(((2) * pulse_24301) * quil.core.sin(state)));


var G__24302 = seq__24248_24294;
var G__24303 = chunk__24249_24295;
var G__24304 = count__24250_24296;
var G__24305 = (i__24251_24297 + (1));
seq__24248_24294 = G__24302;
chunk__24249_24295 = G__24303;
count__24250_24296 = G__24304;
i__24251_24297 = G__24305;
continue;
} else {
var temp__5735__auto___24306__$1 = cljs.core.seq(seq__24248_24294);
if(temp__5735__auto___24306__$1){
var seq__24248_24307__$1 = temp__5735__auto___24306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24248_24307__$1)){
var c__4351__auto___24308 = cljs.core.chunk_first(seq__24248_24307__$1);
var G__24309 = cljs.core.chunk_rest(seq__24248_24307__$1);
var G__24310 = c__4351__auto___24308;
var G__24311 = cljs.core.count(c__4351__auto___24308);
var G__24312 = (0);
seq__24248_24294 = G__24309;
chunk__24249_24295 = G__24310;
count__24250_24296 = G__24311;
i__24251_24297 = G__24312;
continue;
} else {
var y_24313 = cljs.core.first(seq__24248_24307__$1);
var even_x_24314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((x / step),(2)),(0));
var even_y_24315 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((y_24313 / step),(2)),(0));
var pulse_24316 = (step * ((((even_x_24314) && (even_y_24315)))?quil.core.sin(state):((((!(even_x_24314)) && (even_y_24315)))?quil.core.cos(state):((((even_x_24314) && (!(even_y_24315))))?quil.core.cos(state):((((!(even_x_24314)) && (!(even_y_24315))))?quil.core.sin(state):null)))));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(x,(0),(quil.core.width() + step),(0),(255)),(255),(200));

quil.core.ellipse(x,y_24313,(((2) * pulse_24316) * quil.core.sin(state)),(((2) * pulse_24316) * quil.core.sin(state)));


var G__24317 = cljs.core.next(seq__24248_24307__$1);
var G__24318 = null;
var G__24319 = (0);
var G__24320 = (0);
seq__24248_24294 = G__24317;
chunk__24249_24295 = G__24318;
count__24250_24296 = G__24319;
i__24251_24297 = G__24320;
continue;
}
} else {
}
}
break;
}

var G__24321 = cljs.core.next(seq__24247__$1);
var G__24322 = null;
var G__24323 = (0);
var G__24324 = (0);
seq__24247 = G__24321;
chunk__24252 = G__24322;
count__24253 = G__24323;
i__24254 = G__24324;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.rac_sketches.rainbow_circles.run = (function sketches$rac_sketches$rainbow_circles$run(host){
sketches.rac_sketches.rainbow_circles.rainbow_circles = (function sketches$rac_sketches$rainbow_circles$run_$_rainbow_circles(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24325__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24326__i = 0, G__24326__a = new Array(arguments.length -  0);
while (G__24326__i < G__24326__a.length) {G__24326__a[G__24326__i] = arguments[G__24326__i + 0]; ++G__24326__i;}
  args = new cljs.core.IndexedSeq(G__24326__a,0,null);
} 
return G__24325__delegate.call(this,args);};
G__24325.cljs$lang$maxFixedArity = 0;
G__24325.cljs$lang$applyTo = (function (arglist__24327){
var args = cljs.core.seq(arglist__24327);
return G__24325__delegate(args);
});
G__24325.cljs$core$IFn$_invoke$arity$variadic = G__24325__delegate;
return G__24325;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.rainbow_circles.update_state))?(function() { 
var G__24328__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rainbow_circles.update_state,args);
};
var G__24328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24329__i = 0, G__24329__a = new Array(arguments.length -  0);
while (G__24329__i < G__24329__a.length) {G__24329__a[G__24329__i] = arguments[G__24329__i + 0]; ++G__24329__i;}
  args = new cljs.core.IndexedSeq(G__24329__a,0,null);
} 
return G__24328__delegate.call(this,args);};
G__24328.cljs$lang$maxFixedArity = 0;
G__24328.cljs$lang$applyTo = (function (arglist__24330){
var args = cljs.core.seq(arglist__24330);
return G__24328__delegate(args);
});
G__24328.cljs$core$IFn$_invoke$arity$variadic = G__24328__delegate;
return G__24328;
})()
:sketches.rac_sketches.rainbow_circles.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.rainbow_circles.setup))?(function() { 
var G__24331__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rainbow_circles.setup,args);
};
var G__24331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24332__i = 0, G__24332__a = new Array(arguments.length -  0);
while (G__24332__i < G__24332__a.length) {G__24332__a[G__24332__i] = arguments[G__24332__i + 0]; ++G__24332__i;}
  args = new cljs.core.IndexedSeq(G__24332__a,0,null);
} 
return G__24331__delegate.call(this,args);};
G__24331.cljs$lang$maxFixedArity = 0;
G__24331.cljs$lang$applyTo = (function (arglist__24333){
var args = cljs.core.seq(arglist__24333);
return G__24331__delegate(args);
});
G__24331.cljs$core$IFn$_invoke$arity$variadic = G__24331__delegate;
return G__24331;
})()
:sketches.rac_sketches.rainbow_circles.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.rainbow_circles.draw))?(function() { 
var G__24334__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rainbow_circles.draw,args);
};
var G__24334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24335__i = 0, G__24335__a = new Array(arguments.length -  0);
while (G__24335__i < G__24335__a.length) {G__24335__a[G__24335__i] = arguments[G__24335__i + 0]; ++G__24335__i;}
  args = new cljs.core.IndexedSeq(G__24335__a,0,null);
} 
return G__24334__delegate.call(this,args);};
G__24334.cljs$lang$maxFixedArity = 0;
G__24334.cljs$lang$applyTo = (function (arglist__24336){
var args = cljs.core.seq(arglist__24336);
return G__24334__delegate(args);
});
G__24334.cljs$core$IFn$_invoke$arity$variadic = G__24334__delegate;
return G__24334;
})()
:sketches.rac_sketches.rainbow_circles.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.rainbow_circles.rainbow_circles', sketches.rac_sketches.rainbow_circles.rainbow_circles);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.rainbow_circles.rainbow_circles,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24337__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24338__i = 0, G__24338__a = new Array(arguments.length -  0);
while (G__24338__i < G__24338__a.length) {G__24338__a[G__24338__i] = arguments[G__24338__i + 0]; ++G__24338__i;}
  args = new cljs.core.IndexedSeq(G__24338__a,0,null);
} 
return G__24337__delegate.call(this,args);};
G__24337.cljs$lang$maxFixedArity = 0;
G__24337.cljs$lang$applyTo = (function (arglist__24339){
var args = cljs.core.seq(arglist__24339);
return G__24337__delegate(args);
});
G__24337.cljs$core$IFn$_invoke$arity$variadic = G__24337__delegate;
return G__24337;
})()
:host)], null));
}
});
