// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_01.P_1_1_1_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_01.P_1_1_1_01.setup = (function sketches$generative_desgin$P_01$P_1_1_1_01$setup(){
quil.core.no_stroke();

return quil.core.color_mode.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hsb,quil.core.width(),quil.core.height(),(100));
});
sketches.generative_desgin.P_01.P_1_1_1_01.update_state = (function sketches$generative_desgin$P_01$P_1_1_1_01$update_state(){
return null;
});
sketches.generative_desgin.P_01.P_1_1_1_01.draw = (function sketches$generative_desgin$P_01$P_1_1_1_01$draw(){
var step_x = (quil.core.mouse_x() + (2));
var step_y = (quil.core.mouse_y() + (2));
var seq__23272 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.height(),step_y));
var chunk__23277 = null;
var count__23278 = (0);
var i__23279 = (0);
while(true){
if((i__23279 < count__23278)){
var grid_y = chunk__23277.cljs$core$IIndexed$_nth$arity$2(null,i__23279);
var seq__23280_23284 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),step_x));
var chunk__23281_23285 = null;
var count__23282_23286 = (0);
var i__23283_23287 = (0);
while(true){
if((i__23283_23287 < count__23282_23286)){
var grid_x_23288 = chunk__23281_23285.cljs$core$IIndexed$_nth$arity$2(null,i__23283_23287);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(grid_x_23288,(quil.core.height() - grid_y),(100));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(grid_x_23288,grid_y,step_x,step_y);


var G__23289 = seq__23280_23284;
var G__23290 = chunk__23281_23285;
var G__23291 = count__23282_23286;
var G__23292 = (i__23283_23287 + (1));
seq__23280_23284 = G__23289;
chunk__23281_23285 = G__23290;
count__23282_23286 = G__23291;
i__23283_23287 = G__23292;
continue;
} else {
var temp__5735__auto___23293 = cljs.core.seq(seq__23280_23284);
if(temp__5735__auto___23293){
var seq__23280_23294__$1 = temp__5735__auto___23293;
if(cljs.core.chunked_seq_QMARK_(seq__23280_23294__$1)){
var c__4351__auto___23295 = cljs.core.chunk_first(seq__23280_23294__$1);
var G__23296 = cljs.core.chunk_rest(seq__23280_23294__$1);
var G__23297 = c__4351__auto___23295;
var G__23298 = cljs.core.count(c__4351__auto___23295);
var G__23299 = (0);
seq__23280_23284 = G__23296;
chunk__23281_23285 = G__23297;
count__23282_23286 = G__23298;
i__23283_23287 = G__23299;
continue;
} else {
var grid_x_23300 = cljs.core.first(seq__23280_23294__$1);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(grid_x_23300,(quil.core.height() - grid_y),(100));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(grid_x_23300,grid_y,step_x,step_y);


var G__23301 = cljs.core.next(seq__23280_23294__$1);
var G__23302 = null;
var G__23303 = (0);
var G__23304 = (0);
seq__23280_23284 = G__23301;
chunk__23281_23285 = G__23302;
count__23282_23286 = G__23303;
i__23283_23287 = G__23304;
continue;
}
} else {
}
}
break;
}

var G__23305 = seq__23272;
var G__23306 = chunk__23277;
var G__23307 = count__23278;
var G__23308 = (i__23279 + (1));
seq__23272 = G__23305;
chunk__23277 = G__23306;
count__23278 = G__23307;
i__23279 = G__23308;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23272);
if(temp__5735__auto__){
var seq__23272__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23272__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23272__$1);
var G__23309 = cljs.core.chunk_rest(seq__23272__$1);
var G__23310 = c__4351__auto__;
var G__23311 = cljs.core.count(c__4351__auto__);
var G__23312 = (0);
seq__23272 = G__23309;
chunk__23277 = G__23310;
count__23278 = G__23311;
i__23279 = G__23312;
continue;
} else {
var grid_y = cljs.core.first(seq__23272__$1);
var seq__23273_23313 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),step_x));
var chunk__23274_23314 = null;
var count__23275_23315 = (0);
var i__23276_23316 = (0);
while(true){
if((i__23276_23316 < count__23275_23315)){
var grid_x_23317 = chunk__23274_23314.cljs$core$IIndexed$_nth$arity$2(null,i__23276_23316);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(grid_x_23317,(quil.core.height() - grid_y),(100));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(grid_x_23317,grid_y,step_x,step_y);


var G__23318 = seq__23273_23313;
var G__23319 = chunk__23274_23314;
var G__23320 = count__23275_23315;
var G__23321 = (i__23276_23316 + (1));
seq__23273_23313 = G__23318;
chunk__23274_23314 = G__23319;
count__23275_23315 = G__23320;
i__23276_23316 = G__23321;
continue;
} else {
var temp__5735__auto___23322__$1 = cljs.core.seq(seq__23273_23313);
if(temp__5735__auto___23322__$1){
var seq__23273_23323__$1 = temp__5735__auto___23322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23273_23323__$1)){
var c__4351__auto___23324 = cljs.core.chunk_first(seq__23273_23323__$1);
var G__23325 = cljs.core.chunk_rest(seq__23273_23323__$1);
var G__23326 = c__4351__auto___23324;
var G__23327 = cljs.core.count(c__4351__auto___23324);
var G__23328 = (0);
seq__23273_23313 = G__23325;
chunk__23274_23314 = G__23326;
count__23275_23315 = G__23327;
i__23276_23316 = G__23328;
continue;
} else {
var grid_x_23329 = cljs.core.first(seq__23273_23323__$1);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(grid_x_23329,(quil.core.height() - grid_y),(100));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(grid_x_23329,grid_y,step_x,step_y);


var G__23330 = cljs.core.next(seq__23273_23323__$1);
var G__23331 = null;
var G__23332 = (0);
var G__23333 = (0);
seq__23273_23313 = G__23330;
chunk__23274_23314 = G__23331;
count__23275_23315 = G__23332;
i__23276_23316 = G__23333;
continue;
}
} else {
}
}
break;
}

var G__23334 = cljs.core.next(seq__23272__$1);
var G__23335 = null;
var G__23336 = (0);
var G__23337 = (0);
seq__23272 = G__23334;
chunk__23277 = G__23335;
count__23278 = G__23336;
i__23279 = G__23337;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_01.P_1_1_1_01.run = (function sketches$generative_desgin$P_01$P_1_1_1_01$run(host){
sketches.generative_desgin.P_01.P_1_1_1_01.P_1_1_1_01 = (function sketches$generative_desgin$P_01$P_1_1_1_01$run_$_P_1_1_1_01(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23338__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23339__i = 0, G__23339__a = new Array(arguments.length -  0);
while (G__23339__i < G__23339__a.length) {G__23339__a[G__23339__i] = arguments[G__23339__i + 0]; ++G__23339__i;}
  args = new cljs.core.IndexedSeq(G__23339__a,0,null);
} 
return G__23338__delegate.call(this,args);};
G__23338.cljs$lang$maxFixedArity = 0;
G__23338.cljs$lang$applyTo = (function (arglist__23340){
var args = cljs.core.seq(arglist__23340);
return G__23338__delegate(args);
});
G__23338.cljs$core$IFn$_invoke$arity$variadic = G__23338__delegate;
return G__23338;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_1_01.update_state))?(function() { 
var G__23341__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_1_01.update_state,args);
};
var G__23341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23342__i = 0, G__23342__a = new Array(arguments.length -  0);
while (G__23342__i < G__23342__a.length) {G__23342__a[G__23342__i] = arguments[G__23342__i + 0]; ++G__23342__i;}
  args = new cljs.core.IndexedSeq(G__23342__a,0,null);
} 
return G__23341__delegate.call(this,args);};
G__23341.cljs$lang$maxFixedArity = 0;
G__23341.cljs$lang$applyTo = (function (arglist__23343){
var args = cljs.core.seq(arglist__23343);
return G__23341__delegate(args);
});
G__23341.cljs$core$IFn$_invoke$arity$variadic = G__23341__delegate;
return G__23341;
})()
:sketches.generative_desgin.P_01.P_1_1_1_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_1_01.setup))?(function() { 
var G__23344__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_1_01.setup,args);
};
var G__23344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23345__i = 0, G__23345__a = new Array(arguments.length -  0);
while (G__23345__i < G__23345__a.length) {G__23345__a[G__23345__i] = arguments[G__23345__i + 0]; ++G__23345__i;}
  args = new cljs.core.IndexedSeq(G__23345__a,0,null);
} 
return G__23344__delegate.call(this,args);};
G__23344.cljs$lang$maxFixedArity = 0;
G__23344.cljs$lang$applyTo = (function (arglist__23346){
var args = cljs.core.seq(arglist__23346);
return G__23344__delegate(args);
});
G__23344.cljs$core$IFn$_invoke$arity$variadic = G__23344__delegate;
return G__23344;
})()
:sketches.generative_desgin.P_01.P_1_1_1_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_1_01.draw))?(function() { 
var G__23347__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_1_01.draw,args);
};
var G__23347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23348__i = 0, G__23348__a = new Array(arguments.length -  0);
while (G__23348__i < G__23348__a.length) {G__23348__a[G__23348__i] = arguments[G__23348__i + 0]; ++G__23348__i;}
  args = new cljs.core.IndexedSeq(G__23348__a,0,null);
} 
return G__23347__delegate.call(this,args);};
G__23347.cljs$lang$maxFixedArity = 0;
G__23347.cljs$lang$applyTo = (function (arglist__23349){
var args = cljs.core.seq(arglist__23349);
return G__23347__delegate(args);
});
G__23347.cljs$core$IFn$_invoke$arity$variadic = G__23347__delegate;
return G__23347;
})()
:sketches.generative_desgin.P_01.P_1_1_1_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_01.P_1_1_1_01.P_1_1_1_01', sketches.generative_desgin.P_01.P_1_1_1_01.P_1_1_1_01);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_01.P_1_1_1_01.P_1_1_1_01,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23350__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23351__i = 0, G__23351__a = new Array(arguments.length -  0);
while (G__23351__i < G__23351__a.length) {G__23351__a[G__23351__i] = arguments[G__23351__i + 0]; ++G__23351__i;}
  args = new cljs.core.IndexedSeq(G__23351__a,0,null);
} 
return G__23350__delegate.call(this,args);};
G__23350.cljs$lang$maxFixedArity = 0;
G__23350.cljs$lang$applyTo = (function (arglist__23352){
var args = cljs.core.seq(arglist__23352);
return G__23350__delegate(args);
});
G__23350.cljs$core$IFn$_invoke$arity$variadic = G__23350__delegate;
return G__23350;
})()
:host)], null));
}
});
