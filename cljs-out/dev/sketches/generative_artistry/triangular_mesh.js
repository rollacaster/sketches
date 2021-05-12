// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.triangular_mesh');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.pprint');
sketches.generative_artistry.triangular_mesh.setup = (function sketches$generative_artistry$triangular_mesh$setup(){
var gap = (quil.core.width() / (8));
var lines = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (gap){
return (function sketches$generative_artistry$triangular_mesh$setup_$_iter__20090(s__20091){
return (new cljs.core.LazySeq(null,((function (gap){
return (function (){
var s__20091__$1 = s__20091;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20091__$1);
if(temp__5735__auto__){
var s__20091__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20091__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20091__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20093 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20092 = (0);
while(true){
if((i__20092 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20092);
cljs.core.chunk_append(b__20093,(function (){var iter__4324__auto__ = ((function (i__20092,y,c__4322__auto__,size__4323__auto__,b__20093,s__20091__$2,temp__5735__auto__,gap){
return (function sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20094(s__20095){
return (new cljs.core.LazySeq(null,((function (i__20092,y,c__4322__auto__,size__4323__auto__,b__20093,s__20091__$2,temp__5735__auto__,gap){
return (function (){
var s__20095__$1 = s__20095;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20095__$1);
if(temp__5735__auto____$1){
var s__20095__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20095__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20095__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20097 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20096 = (0);
while(true){
if((i__20096 < size__4323__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20096);
var odd = cljs.core.odd_QMARK_((y / gap));
cljs.core.chunk_append(b__20097,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((x + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4))) + ((odd)?(gap / (2)):(0))),cljs.core.cst$kw$y,(y + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4)))], null));

var G__20102 = (i__20096 + (1));
i__20096 = G__20102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20097),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20094(cljs.core.chunk_rest(s__20095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20097),null);
}
} else {
var x = cljs.core.first(s__20095__$2);
var odd = cljs.core.odd_QMARK_((y / gap));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((x + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4))) + ((odd)?(gap / (2)):(0))),cljs.core.cst$kw$y,(y + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4)))], null),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20094(cljs.core.rest(s__20095__$2)));
}
} else {
return null;
}
break;
}
});})(i__20092,y,c__4322__auto__,size__4323__auto__,b__20093,s__20091__$2,temp__5735__auto__,gap))
,null,null));
});})(i__20092,y,c__4322__auto__,size__4323__auto__,b__20093,s__20091__$2,temp__5735__auto__,gap))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(gap,quil.core.width(),gap));
})());

var G__20103 = (i__20092 + (1));
i__20092 = G__20103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20093),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090(cljs.core.chunk_rest(s__20091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20093),null);
}
} else {
var y = cljs.core.first(s__20091__$2);
return cljs.core.cons((function (){var iter__4324__auto__ = ((function (y,s__20091__$2,temp__5735__auto__,gap){
return (function sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20098(s__20099){
return (new cljs.core.LazySeq(null,((function (y,s__20091__$2,temp__5735__auto__,gap){
return (function (){
var s__20099__$1 = s__20099;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20099__$1);
if(temp__5735__auto____$1){
var s__20099__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20099__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20099__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20101 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20100 = (0);
while(true){
if((i__20100 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20100);
var odd = cljs.core.odd_QMARK_((y / gap));
cljs.core.chunk_append(b__20101,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((x + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4))) + ((odd)?(gap / (2)):(0))),cljs.core.cst$kw$y,(y + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4)))], null));

var G__20104 = (i__20100 + (1));
i__20100 = G__20104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20101),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20098(cljs.core.chunk_rest(s__20099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20101),null);
}
} else {
var x = cljs.core.first(s__20099__$2);
var odd = cljs.core.odd_QMARK_((y / gap));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((x + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4))) + ((odd)?(gap / (2)):(0))),cljs.core.cst$kw$y,(y + (gap * ((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) * 0.8) - 0.4)))], null),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090_$_iter__20098(cljs.core.rest(s__20099__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__20091__$2,temp__5735__auto__,gap))
,null,null));
});})(y,s__20091__$2,temp__5735__auto__,gap))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(gap,quil.core.width(),gap));
})(),sketches$generative_artistry$triangular_mesh$setup_$_iter__20090(cljs.core.rest(s__20091__$2)));
}
} else {
return null;
}
break;
}
});})(gap))
,null,null));
});})(gap))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(gap,quil.core.height(),gap));
})());
var dot_line = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (gap,lines){
return (function (lineIdx,line){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var dot_line = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (gap,lines){
return (function (idx,point){
if(cljs.core.odd_QMARK_(lineIdx)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,lines),(lineIdx + (1)))),idx)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,lines),(lineIdx + (1)))),idx),point], null);
}
});})(gap,lines))
,line);
return dot_line;
})());
});})(gap,lines))
,cljs.core.butlast(lines));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gap,lines,dot_line){
return (function (line){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (gap,lines,dot_line){
return (function (idx,p1){
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,line),(idx + (1)));
var p3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,line),((idx + (1)) + (1)));
quil.core.fill.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int((16)) * ((255) / (16))));

return quil.core.triangle(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p1),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p1),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p2),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p2),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p3),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p3));
});})(gap,lines,dot_line))
,cljs.core.butlast(cljs.core.butlast(line))));
});})(gap,lines,dot_line))
,dot_line));
});
sketches.generative_artistry.triangular_mesh.run = (function sketches$generative_artistry$triangular_mesh$run(host){
sketches.generative_artistry.triangular_mesh.triangular_mesh = (function sketches$generative_artistry$triangular_mesh$run_$_triangular_mesh(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20105__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20106__i = 0, G__20106__a = new Array(arguments.length -  0);
while (G__20106__i < G__20106__a.length) {G__20106__a[G__20106__i] = arguments[G__20106__i + 0]; ++G__20106__i;}
  args = new cljs.core.IndexedSeq(G__20106__a,0,null);
} 
return G__20105__delegate.call(this,args);};
G__20105.cljs$lang$maxFixedArity = 0;
G__20105.cljs$lang$applyTo = (function (arglist__20107){
var args = cljs.core.seq(arglist__20107);
return G__20105__delegate(args);
});
G__20105.cljs$core$IFn$_invoke$arity$variadic = G__20105__delegate;
return G__20105;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.triangular_mesh.setup))?(function() { 
var G__20108__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.triangular_mesh.setup,args);
};
var G__20108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20109__i = 0, G__20109__a = new Array(arguments.length -  0);
while (G__20109__i < G__20109__a.length) {G__20109__a[G__20109__i] = arguments[G__20109__i + 0]; ++G__20109__i;}
  args = new cljs.core.IndexedSeq(G__20109__a,0,null);
} 
return G__20108__delegate.call(this,args);};
G__20108.cljs$lang$maxFixedArity = 0;
G__20108.cljs$lang$applyTo = (function (arglist__20110){
var args = cljs.core.seq(arglist__20110);
return G__20108__delegate(args);
});
G__20108.cljs$core$IFn$_invoke$arity$variadic = G__20108__delegate;
return G__20108;
})()
:sketches.generative_artistry.triangular_mesh.setup)], 0));
});
goog.exportSymbol('sketches.generative_artistry.triangular_mesh.triangular_mesh', sketches.generative_artistry.triangular_mesh.triangular_mesh);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.triangular_mesh.triangular_mesh,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20111__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20112__i = 0, G__20112__a = new Array(arguments.length -  0);
while (G__20112__i < G__20112__a.length) {G__20112__a[G__20112__i] = arguments[G__20112__i + 0]; ++G__20112__i;}
  args = new cljs.core.IndexedSeq(G__20112__a,0,null);
} 
return G__20111__delegate.call(this,args);};
G__20111.cljs$lang$maxFixedArity = 0;
G__20111.cljs$lang$applyTo = (function (arglist__20113){
var args = cljs.core.seq(arglist__20113);
return G__20111__delegate(args);
});
G__20111.cljs$core$IFn$_invoke$arity$variadic = G__20111__delegate;
return G__20111;
})()
:host)], null));
}
});
