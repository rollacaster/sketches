// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_1_1_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_1_1_01.tile_count = (20);
sketches.generative_desgin.P_02.P_2_1_1_01.setup = (function sketches$generative_desgin$P_02$P_2_1_1_01$setup(){
return null;
});
sketches.generative_desgin.P_02.P_2_1_1_01.update_state = (function sketches$generative_desgin$P_02$P_2_1_1_01$update_state(){
return null;
});
sketches.generative_desgin.P_02.P_2_1_1_01.draw = (function sketches$generative_desgin$P_02$P_2_1_1_01$draw(){
quil.core.clear();

quil.core.stroke_cap(cljs.core.cst$kw$round);

quil.core.random_seed((0));

var seq__21457 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_1_01.tile_count));
var chunk__21462 = null;
var count__21463 = (0);
var i__21464 = (0);
while(true){
if((i__21464 < count__21463)){
var grid_y = chunk__21462.cljs$core$IIndexed$_nth$arity$2(null,i__21464);
var seq__21465_21469 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_1_01.tile_count));
var chunk__21466_21470 = null;
var count__21467_21471 = (0);
var i__21468_21472 = (0);
while(true){
if((i__21468_21472 < count__21467_21471)){
var grid_x_21473 = chunk__21466_21470.cljs$core$IIndexed$_nth$arity$2(null,i__21468_21472);
var pos_x_21474 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_x_21473);
var pos_y_21475 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_y);
var toggle_21476 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)) | (0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21476,(0))){
quil.core.stroke_weight((quil.core.mouse_x() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21474,pos_y_21475,(pos_x_21474 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_y_21475 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21476,(1))){
quil.core.stroke_weight((quil.core.mouse_y() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21474,(pos_y_21475 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_x_21474 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),pos_y_21475);
} else {
}


var G__21477 = seq__21465_21469;
var G__21478 = chunk__21466_21470;
var G__21479 = count__21467_21471;
var G__21480 = (i__21468_21472 + (1));
seq__21465_21469 = G__21477;
chunk__21466_21470 = G__21478;
count__21467_21471 = G__21479;
i__21468_21472 = G__21480;
continue;
} else {
var temp__5735__auto___21481 = cljs.core.seq(seq__21465_21469);
if(temp__5735__auto___21481){
var seq__21465_21482__$1 = temp__5735__auto___21481;
if(cljs.core.chunked_seq_QMARK_(seq__21465_21482__$1)){
var c__4351__auto___21483 = cljs.core.chunk_first(seq__21465_21482__$1);
var G__21484 = cljs.core.chunk_rest(seq__21465_21482__$1);
var G__21485 = c__4351__auto___21483;
var G__21486 = cljs.core.count(c__4351__auto___21483);
var G__21487 = (0);
seq__21465_21469 = G__21484;
chunk__21466_21470 = G__21485;
count__21467_21471 = G__21486;
i__21468_21472 = G__21487;
continue;
} else {
var grid_x_21488 = cljs.core.first(seq__21465_21482__$1);
var pos_x_21489 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_x_21488);
var pos_y_21490 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_y);
var toggle_21491 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)) | (0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21491,(0))){
quil.core.stroke_weight((quil.core.mouse_x() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21489,pos_y_21490,(pos_x_21489 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_y_21490 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21491,(1))){
quil.core.stroke_weight((quil.core.mouse_y() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21489,(pos_y_21490 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_x_21489 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),pos_y_21490);
} else {
}


var G__21492 = cljs.core.next(seq__21465_21482__$1);
var G__21493 = null;
var G__21494 = (0);
var G__21495 = (0);
seq__21465_21469 = G__21492;
chunk__21466_21470 = G__21493;
count__21467_21471 = G__21494;
i__21468_21472 = G__21495;
continue;
}
} else {
}
}
break;
}

var G__21496 = seq__21457;
var G__21497 = chunk__21462;
var G__21498 = count__21463;
var G__21499 = (i__21464 + (1));
seq__21457 = G__21496;
chunk__21462 = G__21497;
count__21463 = G__21498;
i__21464 = G__21499;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21457);
if(temp__5735__auto__){
var seq__21457__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21457__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21457__$1);
var G__21500 = cljs.core.chunk_rest(seq__21457__$1);
var G__21501 = c__4351__auto__;
var G__21502 = cljs.core.count(c__4351__auto__);
var G__21503 = (0);
seq__21457 = G__21500;
chunk__21462 = G__21501;
count__21463 = G__21502;
i__21464 = G__21503;
continue;
} else {
var grid_y = cljs.core.first(seq__21457__$1);
var seq__21458_21504 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_1_01.tile_count));
var chunk__21459_21505 = null;
var count__21460_21506 = (0);
var i__21461_21507 = (0);
while(true){
if((i__21461_21507 < count__21460_21506)){
var grid_x_21508 = chunk__21459_21505.cljs$core$IIndexed$_nth$arity$2(null,i__21461_21507);
var pos_x_21509 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_x_21508);
var pos_y_21510 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_y);
var toggle_21511 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)) | (0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21511,(0))){
quil.core.stroke_weight((quil.core.mouse_x() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21509,pos_y_21510,(pos_x_21509 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_y_21510 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21511,(1))){
quil.core.stroke_weight((quil.core.mouse_y() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21509,(pos_y_21510 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_x_21509 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),pos_y_21510);
} else {
}


var G__21512 = seq__21458_21504;
var G__21513 = chunk__21459_21505;
var G__21514 = count__21460_21506;
var G__21515 = (i__21461_21507 + (1));
seq__21458_21504 = G__21512;
chunk__21459_21505 = G__21513;
count__21460_21506 = G__21514;
i__21461_21507 = G__21515;
continue;
} else {
var temp__5735__auto___21516__$1 = cljs.core.seq(seq__21458_21504);
if(temp__5735__auto___21516__$1){
var seq__21458_21517__$1 = temp__5735__auto___21516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21458_21517__$1)){
var c__4351__auto___21518 = cljs.core.chunk_first(seq__21458_21517__$1);
var G__21519 = cljs.core.chunk_rest(seq__21458_21517__$1);
var G__21520 = c__4351__auto___21518;
var G__21521 = cljs.core.count(c__4351__auto___21518);
var G__21522 = (0);
seq__21458_21504 = G__21519;
chunk__21459_21505 = G__21520;
count__21460_21506 = G__21521;
i__21461_21507 = G__21522;
continue;
} else {
var grid_x_21523 = cljs.core.first(seq__21458_21517__$1);
var pos_x_21524 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_x_21523);
var pos_y_21525 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count) * grid_y);
var toggle_21526 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)) | (0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21526,(0))){
quil.core.stroke_weight((quil.core.mouse_x() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21524,pos_y_21525,(pos_x_21524 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_y_21525 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(toggle_21526,(1))){
quil.core.stroke_weight((quil.core.mouse_y() / (20)));

quil.core.line.cljs$core$IFn$_invoke$arity$4(pos_x_21524,(pos_y_21525 + (quil.core.height() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),(pos_x_21524 + (quil.core.width() / sketches.generative_desgin.P_02.P_2_1_1_01.tile_count)),pos_y_21525);
} else {
}


var G__21527 = cljs.core.next(seq__21458_21517__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__21458_21504 = G__21527;
chunk__21459_21505 = G__21528;
count__21460_21506 = G__21529;
i__21461_21507 = G__21530;
continue;
}
} else {
}
}
break;
}

var G__21531 = cljs.core.next(seq__21457__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21457 = G__21531;
chunk__21462 = G__21532;
count__21463 = G__21533;
i__21464 = G__21534;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_1_1_01.run = (function sketches$generative_desgin$P_02$P_2_1_1_01$run(host){
sketches.generative_desgin.P_02.P_2_1_1_01.alignment_in_a_grid = (function sketches$generative_desgin$P_02$P_2_1_1_01$run_$_alignment_in_a_grid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21535__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21536__i = 0, G__21536__a = new Array(arguments.length -  0);
while (G__21536__i < G__21536__a.length) {G__21536__a[G__21536__i] = arguments[G__21536__i + 0]; ++G__21536__i;}
  args = new cljs.core.IndexedSeq(G__21536__a,0,null);
} 
return G__21535__delegate.call(this,args);};
G__21535.cljs$lang$maxFixedArity = 0;
G__21535.cljs$lang$applyTo = (function (arglist__21537){
var args = cljs.core.seq(arglist__21537);
return G__21535__delegate(args);
});
G__21535.cljs$core$IFn$_invoke$arity$variadic = G__21535__delegate;
return G__21535;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_1_01.update_state))?(function() { 
var G__21538__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_1_01.update_state,args);
};
var G__21538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21539__i = 0, G__21539__a = new Array(arguments.length -  0);
while (G__21539__i < G__21539__a.length) {G__21539__a[G__21539__i] = arguments[G__21539__i + 0]; ++G__21539__i;}
  args = new cljs.core.IndexedSeq(G__21539__a,0,null);
} 
return G__21538__delegate.call(this,args);};
G__21538.cljs$lang$maxFixedArity = 0;
G__21538.cljs$lang$applyTo = (function (arglist__21540){
var args = cljs.core.seq(arglist__21540);
return G__21538__delegate(args);
});
G__21538.cljs$core$IFn$_invoke$arity$variadic = G__21538__delegate;
return G__21538;
})()
:sketches.generative_desgin.P_02.P_2_1_1_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_1_01.setup))?(function() { 
var G__21541__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_1_01.setup,args);
};
var G__21541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21542__i = 0, G__21542__a = new Array(arguments.length -  0);
while (G__21542__i < G__21542__a.length) {G__21542__a[G__21542__i] = arguments[G__21542__i + 0]; ++G__21542__i;}
  args = new cljs.core.IndexedSeq(G__21542__a,0,null);
} 
return G__21541__delegate.call(this,args);};
G__21541.cljs$lang$maxFixedArity = 0;
G__21541.cljs$lang$applyTo = (function (arglist__21543){
var args = cljs.core.seq(arglist__21543);
return G__21541__delegate(args);
});
G__21541.cljs$core$IFn$_invoke$arity$variadic = G__21541__delegate;
return G__21541;
})()
:sketches.generative_desgin.P_02.P_2_1_1_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_1_01.draw))?(function() { 
var G__21544__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_1_01.draw,args);
};
var G__21544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21545__i = 0, G__21545__a = new Array(arguments.length -  0);
while (G__21545__i < G__21545__a.length) {G__21545__a[G__21545__i] = arguments[G__21545__i + 0]; ++G__21545__i;}
  args = new cljs.core.IndexedSeq(G__21545__a,0,null);
} 
return G__21544__delegate.call(this,args);};
G__21544.cljs$lang$maxFixedArity = 0;
G__21544.cljs$lang$applyTo = (function (arglist__21546){
var args = cljs.core.seq(arglist__21546);
return G__21544__delegate(args);
});
G__21544.cljs$core$IFn$_invoke$arity$variadic = G__21544__delegate;
return G__21544;
})()
:sketches.generative_desgin.P_02.P_2_1_1_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_1_1_01.alignment_in_a_grid', sketches.generative_desgin.P_02.P_2_1_1_01.alignment_in_a_grid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_1_1_01.alignment_in_a_grid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21547__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21548__i = 0, G__21548__a = new Array(arguments.length -  0);
while (G__21548__i < G__21548__a.length) {G__21548__a[G__21548__i] = arguments[G__21548__i + 0]; ++G__21548__i;}
  args = new cljs.core.IndexedSeq(G__21548__a,0,null);
} 
return G__21547__delegate.call(this,args);};
G__21547.cljs$lang$maxFixedArity = 0;
G__21547.cljs$lang$applyTo = (function (arglist__21549){
var args = cljs.core.seq(arglist__21549);
return G__21547__delegate(args);
});
G__21547.cljs$core$IFn$_invoke$arity$variadic = G__21547__delegate;
return G__21547;
})()
:host)], null));
}
});
