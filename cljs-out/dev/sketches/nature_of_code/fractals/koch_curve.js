// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.fractals.koch_curve');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.fractals.koch_curve.setup_koch_line = (function sketches$nature_of_code$fractals$koch_curve$setup_koch_line(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,a,cljs.core.cst$kw$end,b], null);
});
sketches.nature_of_code.fractals.koch_curve.update_koch_line = (function sketches$nature_of_code$fractals$koch_curve$update_koch_line(lines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (lines__$1,p__23492){
var map__23493 = p__23492;
var map__23493__$1 = ((((!((map__23493 == null)))?(((((map__23493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23493):map__23493);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23493__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23493__$1,cljs.core.cst$kw$end);
var a = start;
var b = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(start,sketches.vector.div(sketches.vector.sub(end,start),(3)));
var c = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(b,sketches.vector.rotate(sketches.vector.div(sketches.vector.sub(end,start),(3)),(- quil.core.radians((60)))));
var d = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(start,sketches.vector.mult(sketches.vector.sub(end,start),((2) / (3))));
var e = end;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines__$1,sketches.nature_of_code.fractals.koch_curve.setup_koch_line(a,b)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(b,c)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(c,d)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(d,e));
}),cljs.core.PersistentVector.EMPTY,lines);
});
sketches.nature_of_code.fractals.koch_curve.setup = (function sketches$nature_of_code$fractals$koch_curve$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.nature_of_code.fractals.koch_curve.setup_koch_line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(200)], null))], null)], null);
});
sketches.nature_of_code.fractals.koch_curve.n_times = (function sketches$nature_of_code$fractals$koch_curve$n_times(n,f){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,f));
});
sketches.nature_of_code.fractals.koch_curve.update_state = (function sketches$nature_of_code$fractals$koch_curve$update_state(state){
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((200));

var times = quil.core.map_range(quil.core.mouse_x(),(0),quil.core.width(),(0),(6));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lines,(function (){var G__23496 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.nature_of_code.fractals.koch_curve.setup_koch_line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.3 * quil.core.width()),(quil.core.height() / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * quil.core.width()),(quil.core.height() / (4))], null)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * quil.core.width()),(quil.core.height() / (4))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.7 * quil.core.width()),(quil.core.height() / (2))], null)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.7 * quil.core.width()),(quil.core.height() / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * quil.core.width()),(quil.core.height() * ((3) / (4)))], null)),sketches.nature_of_code.fractals.koch_curve.setup_koch_line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * quil.core.width()),(quil.core.height() * ((3) / (4)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.3 * quil.core.width()),(quil.core.height() / (2))], null))], null);
var fexpr__23495 = sketches.nature_of_code.fractals.koch_curve.n_times(times,sketches.nature_of_code.fractals.koch_curve.update_koch_line);
return (fexpr__23495.cljs$core$IFn$_invoke$arity$1 ? fexpr__23495.cljs$core$IFn$_invoke$arity$1(G__23496) : fexpr__23495.call(null,G__23496));
})()], null);
});
sketches.nature_of_code.fractals.koch_curve.draw_koch_line = (function sketches$nature_of_code$fractals$koch_curve$draw_koch_line(p__23497){
var map__23498 = p__23497;
var map__23498__$1 = ((((!((map__23498 == null)))?(((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23498):map__23498);
var vec__23499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,cljs.core.cst$kw$start);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(1),null);
var vec__23502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,cljs.core.cst$kw$end);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(1),null);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);
});
sketches.nature_of_code.fractals.koch_curve.draw = (function sketches$nature_of_code$fractals$koch_curve$draw(p__23506){
var map__23507 = p__23506;
var map__23507__$1 = ((((!((map__23507 == null)))?(((((map__23507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23507):map__23507);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23507__$1,cljs.core.cst$kw$lines);
var seq__23509 = cljs.core.seq(lines);
var chunk__23510 = null;
var count__23511 = (0);
var i__23512 = (0);
while(true){
if((i__23512 < count__23511)){
var koch_line = chunk__23510.cljs$core$IIndexed$_nth$arity$2(null,i__23512);
sketches.nature_of_code.fractals.koch_curve.draw_koch_line(koch_line);


var G__23513 = seq__23509;
var G__23514 = chunk__23510;
var G__23515 = count__23511;
var G__23516 = (i__23512 + (1));
seq__23509 = G__23513;
chunk__23510 = G__23514;
count__23511 = G__23515;
i__23512 = G__23516;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23509);
if(temp__5735__auto__){
var seq__23509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23509__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23509__$1);
var G__23517 = cljs.core.chunk_rest(seq__23509__$1);
var G__23518 = c__4351__auto__;
var G__23519 = cljs.core.count(c__4351__auto__);
var G__23520 = (0);
seq__23509 = G__23517;
chunk__23510 = G__23518;
count__23511 = G__23519;
i__23512 = G__23520;
continue;
} else {
var koch_line = cljs.core.first(seq__23509__$1);
sketches.nature_of_code.fractals.koch_curve.draw_koch_line(koch_line);


var G__23521 = cljs.core.next(seq__23509__$1);
var G__23522 = null;
var G__23523 = (0);
var G__23524 = (0);
seq__23509 = G__23521;
chunk__23510 = G__23522;
count__23511 = G__23523;
i__23512 = G__23524;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.fractals.koch_curve.run = (function sketches$nature_of_code$fractals$koch_curve$run(host){
sketches.nature_of_code.fractals.koch_curve.koch_curve = (function sketches$nature_of_code$fractals$koch_curve$run_$_koch_curve(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23525__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23526__i = 0, G__23526__a = new Array(arguments.length -  0);
while (G__23526__i < G__23526__a.length) {G__23526__a[G__23526__i] = arguments[G__23526__i + 0]; ++G__23526__i;}
  args = new cljs.core.IndexedSeq(G__23526__a,0,null);
} 
return G__23525__delegate.call(this,args);};
G__23525.cljs$lang$maxFixedArity = 0;
G__23525.cljs$lang$applyTo = (function (arglist__23527){
var args = cljs.core.seq(arglist__23527);
return G__23525__delegate(args);
});
G__23525.cljs$core$IFn$_invoke$arity$variadic = G__23525__delegate;
return G__23525;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.koch_curve.update_state))?(function() { 
var G__23528__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.koch_curve.update_state,args);
};
var G__23528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23529__i = 0, G__23529__a = new Array(arguments.length -  0);
while (G__23529__i < G__23529__a.length) {G__23529__a[G__23529__i] = arguments[G__23529__i + 0]; ++G__23529__i;}
  args = new cljs.core.IndexedSeq(G__23529__a,0,null);
} 
return G__23528__delegate.call(this,args);};
G__23528.cljs$lang$maxFixedArity = 0;
G__23528.cljs$lang$applyTo = (function (arglist__23530){
var args = cljs.core.seq(arglist__23530);
return G__23528__delegate(args);
});
G__23528.cljs$core$IFn$_invoke$arity$variadic = G__23528__delegate;
return G__23528;
})()
:sketches.nature_of_code.fractals.koch_curve.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.koch_curve.setup))?(function() { 
var G__23531__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.koch_curve.setup,args);
};
var G__23531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23532__i = 0, G__23532__a = new Array(arguments.length -  0);
while (G__23532__i < G__23532__a.length) {G__23532__a[G__23532__i] = arguments[G__23532__i + 0]; ++G__23532__i;}
  args = new cljs.core.IndexedSeq(G__23532__a,0,null);
} 
return G__23531__delegate.call(this,args);};
G__23531.cljs$lang$maxFixedArity = 0;
G__23531.cljs$lang$applyTo = (function (arglist__23533){
var args = cljs.core.seq(arglist__23533);
return G__23531__delegate(args);
});
G__23531.cljs$core$IFn$_invoke$arity$variadic = G__23531__delegate;
return G__23531;
})()
:sketches.nature_of_code.fractals.koch_curve.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.koch_curve.draw))?(function() { 
var G__23534__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.koch_curve.draw,args);
};
var G__23534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23535__i = 0, G__23535__a = new Array(arguments.length -  0);
while (G__23535__i < G__23535__a.length) {G__23535__a[G__23535__i] = arguments[G__23535__i + 0]; ++G__23535__i;}
  args = new cljs.core.IndexedSeq(G__23535__a,0,null);
} 
return G__23534__delegate.call(this,args);};
G__23534.cljs$lang$maxFixedArity = 0;
G__23534.cljs$lang$applyTo = (function (arglist__23536){
var args = cljs.core.seq(arglist__23536);
return G__23534__delegate(args);
});
G__23534.cljs$core$IFn$_invoke$arity$variadic = G__23534__delegate;
return G__23534;
})()
:sketches.nature_of_code.fractals.koch_curve.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.fractals.koch_curve.koch_curve', sketches.nature_of_code.fractals.koch_curve.koch_curve);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.fractals.koch_curve.koch_curve,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23537__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23538__i = 0, G__23538__a = new Array(arguments.length -  0);
while (G__23538__i < G__23538__a.length) {G__23538__a[G__23538__i] = arguments[G__23538__i + 0]; ++G__23538__i;}
  args = new cljs.core.IndexedSeq(G__23538__a,0,null);
} 
return G__23537__delegate.call(this,args);};
G__23537.cljs$lang$maxFixedArity = 0;
G__23537.cljs$lang$applyTo = (function (arglist__23539){
var args = cljs.core.seq(arglist__23539);
return G__23537__delegate(args);
});
G__23537.cljs$core$IFn$_invoke$arity$variadic = G__23537__delegate;
return G__23537;
})()
:host)], null));
}
});
