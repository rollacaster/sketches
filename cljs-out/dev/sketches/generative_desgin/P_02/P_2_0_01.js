// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_0_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_0_01.setup = (function sketches$generative_desgin$P_02$P_2_0_01$setup(){
return null;
});
sketches.generative_desgin.P_02.P_2_0_01.update_state = (function sketches$generative_desgin$P_02$P_2_0_01$update_state(){
return null;
});
sketches.generative_desgin.P_02.P_2_0_01.draw = (function sketches$generative_desgin$P_02$P_2_0_01$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

var circle_resolution = quil.core.map_range(quil.core.mouse_y(),(0),quil.core.height(),(2),(80));
var radius = ((quil.core.mouse_x() - (quil.core.width() / (2))) + 0.5);
var angle = (quil.core.TWO_PI / circle_resolution);
quil.core.stroke_weight((quil.core.mouse_y() / (20)));

quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var seq__22194_22198 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),circle_resolution));
var chunk__22195_22199 = null;
var count__22196_22200 = (0);
var i__22197_22201 = (0);
while(true){
if((i__22197_22201 < count__22196_22200)){
var i_22202 = chunk__22195_22199.cljs$core$IIndexed$_nth$arity$2(null,i__22197_22201);
var x_22203 = (quil.core.cos((angle * i_22202)) * radius);
var y_22204 = (quil.core.sin((angle * i_22202)) * radius);
quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x_22203,y_22204);


var G__22205 = seq__22194_22198;
var G__22206 = chunk__22195_22199;
var G__22207 = count__22196_22200;
var G__22208 = (i__22197_22201 + (1));
seq__22194_22198 = G__22205;
chunk__22195_22199 = G__22206;
count__22196_22200 = G__22207;
i__22197_22201 = G__22208;
continue;
} else {
var temp__5735__auto___22209 = cljs.core.seq(seq__22194_22198);
if(temp__5735__auto___22209){
var seq__22194_22210__$1 = temp__5735__auto___22209;
if(cljs.core.chunked_seq_QMARK_(seq__22194_22210__$1)){
var c__4351__auto___22211 = cljs.core.chunk_first(seq__22194_22210__$1);
var G__22212 = cljs.core.chunk_rest(seq__22194_22210__$1);
var G__22213 = c__4351__auto___22211;
var G__22214 = cljs.core.count(c__4351__auto___22211);
var G__22215 = (0);
seq__22194_22198 = G__22212;
chunk__22195_22199 = G__22213;
count__22196_22200 = G__22214;
i__22197_22201 = G__22215;
continue;
} else {
var i_22216 = cljs.core.first(seq__22194_22210__$1);
var x_22217 = (quil.core.cos((angle * i_22216)) * radius);
var y_22218 = (quil.core.sin((angle * i_22216)) * radius);
quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x_22217,y_22218);


var G__22219 = cljs.core.next(seq__22194_22210__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__22194_22198 = G__22219;
chunk__22195_22199 = G__22220;
count__22196_22200 = G__22221;
i__22197_22201 = G__22222;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$close);
});
sketches.generative_desgin.P_02.P_2_0_01.run = (function sketches$generative_desgin$P_02$P_2_0_01$run(host){
sketches.generative_desgin.P_02.P_2_0_01.circle_lines = (function sketches$generative_desgin$P_02$P_2_0_01$run_$_circle_lines(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22223__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22224__i = 0, G__22224__a = new Array(arguments.length -  0);
while (G__22224__i < G__22224__a.length) {G__22224__a[G__22224__i] = arguments[G__22224__i + 0]; ++G__22224__i;}
  args = new cljs.core.IndexedSeq(G__22224__a,0,null);
} 
return G__22223__delegate.call(this,args);};
G__22223.cljs$lang$maxFixedArity = 0;
G__22223.cljs$lang$applyTo = (function (arglist__22225){
var args = cljs.core.seq(arglist__22225);
return G__22223__delegate(args);
});
G__22223.cljs$core$IFn$_invoke$arity$variadic = G__22223__delegate;
return G__22223;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_0_01.update_state))?(function() { 
var G__22226__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_0_01.update_state,args);
};
var G__22226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22227__i = 0, G__22227__a = new Array(arguments.length -  0);
while (G__22227__i < G__22227__a.length) {G__22227__a[G__22227__i] = arguments[G__22227__i + 0]; ++G__22227__i;}
  args = new cljs.core.IndexedSeq(G__22227__a,0,null);
} 
return G__22226__delegate.call(this,args);};
G__22226.cljs$lang$maxFixedArity = 0;
G__22226.cljs$lang$applyTo = (function (arglist__22228){
var args = cljs.core.seq(arglist__22228);
return G__22226__delegate(args);
});
G__22226.cljs$core$IFn$_invoke$arity$variadic = G__22226__delegate;
return G__22226;
})()
:sketches.generative_desgin.P_02.P_2_0_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_0_01.setup))?(function() { 
var G__22229__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_0_01.setup,args);
};
var G__22229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22230__i = 0, G__22230__a = new Array(arguments.length -  0);
while (G__22230__i < G__22230__a.length) {G__22230__a[G__22230__i] = arguments[G__22230__i + 0]; ++G__22230__i;}
  args = new cljs.core.IndexedSeq(G__22230__a,0,null);
} 
return G__22229__delegate.call(this,args);};
G__22229.cljs$lang$maxFixedArity = 0;
G__22229.cljs$lang$applyTo = (function (arglist__22231){
var args = cljs.core.seq(arglist__22231);
return G__22229__delegate(args);
});
G__22229.cljs$core$IFn$_invoke$arity$variadic = G__22229__delegate;
return G__22229;
})()
:sketches.generative_desgin.P_02.P_2_0_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_0_01.draw))?(function() { 
var G__22232__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_0_01.draw,args);
};
var G__22232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22233__i = 0, G__22233__a = new Array(arguments.length -  0);
while (G__22233__i < G__22233__a.length) {G__22233__a[G__22233__i] = arguments[G__22233__i + 0]; ++G__22233__i;}
  args = new cljs.core.IndexedSeq(G__22233__a,0,null);
} 
return G__22232__delegate.call(this,args);};
G__22232.cljs$lang$maxFixedArity = 0;
G__22232.cljs$lang$applyTo = (function (arglist__22234){
var args = cljs.core.seq(arglist__22234);
return G__22232__delegate(args);
});
G__22232.cljs$core$IFn$_invoke$arity$variadic = G__22232__delegate;
return G__22232;
})()
:sketches.generative_desgin.P_02.P_2_0_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_0_01.circle_lines', sketches.generative_desgin.P_02.P_2_0_01.circle_lines);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_0_01.circle_lines,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22235__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22236__i = 0, G__22236__a = new Array(arguments.length -  0);
while (G__22236__i < G__22236__a.length) {G__22236__a[G__22236__i] = arguments[G__22236__i + 0]; ++G__22236__i;}
  args = new cljs.core.IndexedSeq(G__22236__a,0,null);
} 
return G__22235__delegate.call(this,args);};
G__22235.cljs$lang$maxFixedArity = 0;
G__22235.cljs$lang$applyTo = (function (arglist__22237){
var args = cljs.core.seq(arglist__22237);
return G__22235__delegate(args);
});
G__22235.cljs$core$IFn$_invoke$arity$variadic = G__22235__delegate;
return G__22235;
})()
:host)], null));
}
});
