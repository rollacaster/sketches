// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.fractals.sierpinski');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.nature_of_code.fractals.sierpinski.compute_triangles = (function sketches$nature_of_code$fractals$sierpinski$compute_triangles(v1,v2,v3){
var vec__23542 = sketches.vector.mult(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(v1,v2),0.5);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542,(1),null);
var vec__23545 = sketches.vector.mult(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(v1,v3),0.5);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545,(1),null);
var vec__23548 = sketches.vector.mult(sketches.vector.add.cljs$core$IFn$_invoke$arity$2(v3,v2),0.5);
var x3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23548,(0),null);
var y3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23548,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),v2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x3,y3], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x3,y3], null),v3], null)], null);
});
sketches.nature_of_code.fractals.sierpinski.do_sierpinski = (function sketches$nature_of_code$fractals$sierpinski$do_sierpinski(init_triangle,step){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,(0))){
return init_triangle;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23551_SHARP_){
var G__23552 = p1__23551_SHARP_;
var G__23553 = (step - (1));
return (sketches.nature_of_code.fractals.sierpinski.do_sierpinski.cljs$core$IFn$_invoke$arity$2 ? sketches.nature_of_code.fractals.sierpinski.do_sierpinski.cljs$core$IFn$_invoke$arity$2(G__23552,G__23553) : sketches.nature_of_code.fractals.sierpinski.do_sierpinski.call(null,G__23552,G__23553));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.sierpinski.compute_triangles,init_triangle)], 0));
}
});
sketches.nature_of_code.fractals.sierpinski.sierpinski = (function sketches$nature_of_code$fractals$sierpinski$sierpinski(init_triangle,step){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),sketches.nature_of_code.fractals.sierpinski.do_sierpinski(init_triangle,step));
});
sketches.nature_of_code.fractals.sierpinski.draw = (function sketches$nature_of_code$fractals$sierpinski$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((200));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((-50),(-50));

var step = quil.core.round(quil.core.map_range(quil.core.mouse_x(),(0),quil.core.width(),(0),(5)));
var vec__23554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(280)], null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(1),null);
var vec__23557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(120)], null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23557,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23557,(1),null);
var vec__23560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(280)], null);
var x3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var y3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(1),null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step,vec__23554,x1,y1,vec__23557,x2,y2,vec__23560,x3,y3){
return (function (p__23563){
var vec__23564 = p__23563;
var vec__23567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(0),null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(0),null);
var y1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(1),null);
var vec__23570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(1),null);
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23570,(0),null);
var y2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23570,(1),null);
var vec__23573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(2),null);
var x3__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23573,(0),null);
var y3__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23573,(1),null);
return quil.core.triangle(x1__$1,y1__$1,x2__$1,y2__$1,x3__$1,y3__$1);
});})(step,vec__23554,x1,y1,vec__23557,x2,y2,vec__23560,x3,y3))
,sketches.nature_of_code.fractals.sierpinski.sierpinski(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x3,y3], null)], null),step)));
});
sketches.nature_of_code.fractals.sierpinski.setup = (function sketches$nature_of_code$fractals$sierpinski$setup(){
return quil.core.frame_rate((5));
});
sketches.nature_of_code.fractals.sierpinski.run = (function sketches$nature_of_code$fractals$sierpinski$run(host){
sketches.nature_of_code.fractals.sierpinski.sierpinski_sketch = (function sketches$nature_of_code$fractals$sierpinski$run_$_sierpinski_sketch(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23576__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23577__i = 0, G__23577__a = new Array(arguments.length -  0);
while (G__23577__i < G__23577__a.length) {G__23577__a[G__23577__i] = arguments[G__23577__i + 0]; ++G__23577__i;}
  args = new cljs.core.IndexedSeq(G__23577__a,0,null);
} 
return G__23576__delegate.call(this,args);};
G__23576.cljs$lang$maxFixedArity = 0;
G__23576.cljs$lang$applyTo = (function (arglist__23578){
var args = cljs.core.seq(arglist__23578);
return G__23576__delegate(args);
});
G__23576.cljs$core$IFn$_invoke$arity$variadic = G__23576__delegate;
return G__23576;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.sierpinski.setup))?(function() { 
var G__23579__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.sierpinski.setup,args);
};
var G__23579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23580__i = 0, G__23580__a = new Array(arguments.length -  0);
while (G__23580__i < G__23580__a.length) {G__23580__a[G__23580__i] = arguments[G__23580__i + 0]; ++G__23580__i;}
  args = new cljs.core.IndexedSeq(G__23580__a,0,null);
} 
return G__23579__delegate.call(this,args);};
G__23579.cljs$lang$maxFixedArity = 0;
G__23579.cljs$lang$applyTo = (function (arglist__23581){
var args = cljs.core.seq(arglist__23581);
return G__23579__delegate(args);
});
G__23579.cljs$core$IFn$_invoke$arity$variadic = G__23579__delegate;
return G__23579;
})()
:sketches.nature_of_code.fractals.sierpinski.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.fractals.sierpinski.draw))?(function() { 
var G__23582__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.fractals.sierpinski.draw,args);
};
var G__23582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23583__i = 0, G__23583__a = new Array(arguments.length -  0);
while (G__23583__i < G__23583__a.length) {G__23583__a[G__23583__i] = arguments[G__23583__i + 0]; ++G__23583__i;}
  args = new cljs.core.IndexedSeq(G__23583__a,0,null);
} 
return G__23582__delegate.call(this,args);};
G__23582.cljs$lang$maxFixedArity = 0;
G__23582.cljs$lang$applyTo = (function (arglist__23584){
var args = cljs.core.seq(arglist__23584);
return G__23582__delegate(args);
});
G__23582.cljs$core$IFn$_invoke$arity$variadic = G__23582__delegate;
return G__23582;
})()
:sketches.nature_of_code.fractals.sierpinski.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.fractals.sierpinski.sierpinski_sketch', sketches.nature_of_code.fractals.sierpinski.sierpinski_sketch);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.fractals.sierpinski.sierpinski_sketch,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23585__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23586__i = 0, G__23586__a = new Array(arguments.length -  0);
while (G__23586__i < G__23586__a.length) {G__23586__a[G__23586__i] = arguments[G__23586__i + 0]; ++G__23586__i;}
  args = new cljs.core.IndexedSeq(G__23586__a,0,null);
} 
return G__23585__delegate.call(this,args);};
G__23585.cljs$lang$maxFixedArity = 0;
G__23585.cljs$lang$applyTo = (function (arglist__23587){
var args = cljs.core.seq(arglist__23587);
return G__23585__delegate(args);
});
G__23585.cljs$core$IFn$_invoke$arity$variadic = G__23585__delegate;
return G__23585;
})()
:host)], null));
}
});
