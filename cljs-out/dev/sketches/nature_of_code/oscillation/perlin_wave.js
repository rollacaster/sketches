// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.perlin_wave');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.oscillation.perlin_wave.setup = (function sketches$nature_of_code$oscillation$perlin_wave$setup(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23952_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$angle,cljs.core.cst$kw$x],[(p1__23952_SHARP_ * 0.1),(p1__23952_SHARP_ * (24))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((quil.core.width() / (24))));
});
sketches.nature_of_code.oscillation.perlin_wave.draw = (function sketches$nature_of_code$oscillation$perlin_wave$draw(angles){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__23953 = cljs.core.seq(angles);
var chunk__23954 = null;
var count__23955 = (0);
var i__23956 = (0);
while(true){
if((i__23956 < count__23955)){
var map__23957 = chunk__23954.cljs$core$IIndexed$_nth$arity$2(null,i__23956);
var map__23957__$1 = ((((!((map__23957 == null)))?(((((map__23957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23957):map__23957);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23957__$1,cljs.core.cst$kw$x);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23957__$1,cljs.core.cst$kw$angle);
var y_23961 = quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$1(angle),(0),(1),(0),quil.core.height());
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(50));

quil.core.ellipse(x,y_23961,(48),(48));


var G__23962 = seq__23953;
var G__23963 = chunk__23954;
var G__23964 = count__23955;
var G__23965 = (i__23956 + (1));
seq__23953 = G__23962;
chunk__23954 = G__23963;
count__23955 = G__23964;
i__23956 = G__23965;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23953);
if(temp__5735__auto__){
var seq__23953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23953__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23953__$1);
var G__23966 = cljs.core.chunk_rest(seq__23953__$1);
var G__23967 = c__4351__auto__;
var G__23968 = cljs.core.count(c__4351__auto__);
var G__23969 = (0);
seq__23953 = G__23966;
chunk__23954 = G__23967;
count__23955 = G__23968;
i__23956 = G__23969;
continue;
} else {
var map__23959 = cljs.core.first(seq__23953__$1);
var map__23959__$1 = ((((!((map__23959 == null)))?(((((map__23959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23959):map__23959);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$x);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$angle);
var y_23970 = quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$1(angle),(0),(1),(0),quil.core.height());
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(50));

quil.core.ellipse(x,y_23970,(48),(48));


var G__23971 = cljs.core.next(seq__23953__$1);
var G__23972 = null;
var G__23973 = (0);
var G__23974 = (0);
seq__23953 = G__23971;
chunk__23954 = G__23972;
count__23955 = G__23973;
i__23956 = G__23974;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.perlin_wave.update_state = (function sketches$nature_of_code$oscillation$perlin_wave$update_state(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23975_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__23975_SHARP_,cljs.core.cst$kw$angle,cljs.core._PLUS_,0.02);
}),state);
});
sketches.nature_of_code.oscillation.perlin_wave.run = (function sketches$nature_of_code$oscillation$perlin_wave$run(host){
sketches.nature_of_code.oscillation.perlin_wave.perlin_wave = (function sketches$nature_of_code$oscillation$perlin_wave$run_$_perlin_wave(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23976__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23977__i = 0, G__23977__a = new Array(arguments.length -  0);
while (G__23977__i < G__23977__a.length) {G__23977__a[G__23977__i] = arguments[G__23977__i + 0]; ++G__23977__i;}
  args = new cljs.core.IndexedSeq(G__23977__a,0,null);
} 
return G__23976__delegate.call(this,args);};
G__23976.cljs$lang$maxFixedArity = 0;
G__23976.cljs$lang$applyTo = (function (arglist__23978){
var args = cljs.core.seq(arglist__23978);
return G__23976__delegate(args);
});
G__23976.cljs$core$IFn$_invoke$arity$variadic = G__23976__delegate;
return G__23976;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.perlin_wave.update_state))?(function() { 
var G__23979__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.perlin_wave.update_state,args);
};
var G__23979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23980__i = 0, G__23980__a = new Array(arguments.length -  0);
while (G__23980__i < G__23980__a.length) {G__23980__a[G__23980__i] = arguments[G__23980__i + 0]; ++G__23980__i;}
  args = new cljs.core.IndexedSeq(G__23980__a,0,null);
} 
return G__23979__delegate.call(this,args);};
G__23979.cljs$lang$maxFixedArity = 0;
G__23979.cljs$lang$applyTo = (function (arglist__23981){
var args = cljs.core.seq(arglist__23981);
return G__23979__delegate(args);
});
G__23979.cljs$core$IFn$_invoke$arity$variadic = G__23979__delegate;
return G__23979;
})()
:sketches.nature_of_code.oscillation.perlin_wave.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.perlin_wave.setup))?(function() { 
var G__23982__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.perlin_wave.setup,args);
};
var G__23982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23983__i = 0, G__23983__a = new Array(arguments.length -  0);
while (G__23983__i < G__23983__a.length) {G__23983__a[G__23983__i] = arguments[G__23983__i + 0]; ++G__23983__i;}
  args = new cljs.core.IndexedSeq(G__23983__a,0,null);
} 
return G__23982__delegate.call(this,args);};
G__23982.cljs$lang$maxFixedArity = 0;
G__23982.cljs$lang$applyTo = (function (arglist__23984){
var args = cljs.core.seq(arglist__23984);
return G__23982__delegate(args);
});
G__23982.cljs$core$IFn$_invoke$arity$variadic = G__23982__delegate;
return G__23982;
})()
:sketches.nature_of_code.oscillation.perlin_wave.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.perlin_wave.draw))?(function() { 
var G__23985__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.perlin_wave.draw,args);
};
var G__23985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23986__i = 0, G__23986__a = new Array(arguments.length -  0);
while (G__23986__i < G__23986__a.length) {G__23986__a[G__23986__i] = arguments[G__23986__i + 0]; ++G__23986__i;}
  args = new cljs.core.IndexedSeq(G__23986__a,0,null);
} 
return G__23985__delegate.call(this,args);};
G__23985.cljs$lang$maxFixedArity = 0;
G__23985.cljs$lang$applyTo = (function (arglist__23987){
var args = cljs.core.seq(arglist__23987);
return G__23985__delegate(args);
});
G__23985.cljs$core$IFn$_invoke$arity$variadic = G__23985__delegate;
return G__23985;
})()
:sketches.nature_of_code.oscillation.perlin_wave.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.perlin_wave.perlin_wave', sketches.nature_of_code.oscillation.perlin_wave.perlin_wave);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.perlin_wave.perlin_wave,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23988__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23989__i = 0, G__23989__a = new Array(arguments.length -  0);
while (G__23989__i < G__23989__a.length) {G__23989__a[G__23989__i] = arguments[G__23989__i + 0]; ++G__23989__i;}
  args = new cljs.core.IndexedSeq(G__23989__a,0,null);
} 
return G__23988__delegate.call(this,args);};
G__23988.cljs$lang$maxFixedArity = 0;
G__23988.cljs$lang$applyTo = (function (arglist__23990){
var args = cljs.core.seq(arglist__23990);
return G__23988__delegate(args);
});
G__23988.cljs$core$IFn$_invoke$arity$variadic = G__23988__delegate;
return G__23988;
})()
:host)], null));
}
});
