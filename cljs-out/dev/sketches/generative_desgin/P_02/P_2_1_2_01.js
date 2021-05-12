// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_1_2_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_1_2_01.tile_count = (20);
sketches.generative_desgin.P_02.P_2_1_2_01.setup = (function sketches$generative_desgin$P_02$P_2_1_2_01$setup(){
return quil.core.no_fill();
});
sketches.generative_desgin.P_02.P_2_1_2_01.update_state = (function sketches$generative_desgin$P_02$P_2_1_2_01$update_state(){
return null;
});
sketches.generative_desgin.P_02.P_2_1_2_01.draw = (function sketches$generative_desgin$P_02$P_2_1_2_01$draw(){
quil.core.random_seed((0));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) / (2)),((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) / (2)));

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(130));

quil.core.stroke_weight((quil.core.mouse_y() / (60)));

var seq__23052 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_2_01.tile_count));
var chunk__23057 = null;
var count__23058 = (0);
var i__23059 = (0);
while(true){
if((i__23059 < count__23058)){
var grid_y = chunk__23057.cljs$core$IIndexed$_nth$arity$2(null,i__23059);
var seq__23060_23064 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_2_01.tile_count));
var chunk__23061_23065 = null;
var count__23062_23066 = (0);
var i__23063_23067 = (0);
while(true){
if((i__23063_23067 < count__23062_23066)){
var grid_x_23068 = chunk__23061_23065.cljs$core$IIndexed$_nth$arity$2(null,i__23063_23067);
var pos_x_23069 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_x_23068);
var pos_y_23070 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_y);
var shift_x_23071 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
var shift_y_23072 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
quil.core.ellipse((pos_x_23069 + shift_x_23071),(pos_y_23070 + shift_y_23072),(quil.core.mouse_y() / (15)),(quil.core.mouse_y() / (15)));


var G__23073 = seq__23060_23064;
var G__23074 = chunk__23061_23065;
var G__23075 = count__23062_23066;
var G__23076 = (i__23063_23067 + (1));
seq__23060_23064 = G__23073;
chunk__23061_23065 = G__23074;
count__23062_23066 = G__23075;
i__23063_23067 = G__23076;
continue;
} else {
var temp__5735__auto___23077 = cljs.core.seq(seq__23060_23064);
if(temp__5735__auto___23077){
var seq__23060_23078__$1 = temp__5735__auto___23077;
if(cljs.core.chunked_seq_QMARK_(seq__23060_23078__$1)){
var c__4351__auto___23079 = cljs.core.chunk_first(seq__23060_23078__$1);
var G__23080 = cljs.core.chunk_rest(seq__23060_23078__$1);
var G__23081 = c__4351__auto___23079;
var G__23082 = cljs.core.count(c__4351__auto___23079);
var G__23083 = (0);
seq__23060_23064 = G__23080;
chunk__23061_23065 = G__23081;
count__23062_23066 = G__23082;
i__23063_23067 = G__23083;
continue;
} else {
var grid_x_23084 = cljs.core.first(seq__23060_23078__$1);
var pos_x_23085 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_x_23084);
var pos_y_23086 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_y);
var shift_x_23087 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
var shift_y_23088 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
quil.core.ellipse((pos_x_23085 + shift_x_23087),(pos_y_23086 + shift_y_23088),(quil.core.mouse_y() / (15)),(quil.core.mouse_y() / (15)));


var G__23089 = cljs.core.next(seq__23060_23078__$1);
var G__23090 = null;
var G__23091 = (0);
var G__23092 = (0);
seq__23060_23064 = G__23089;
chunk__23061_23065 = G__23090;
count__23062_23066 = G__23091;
i__23063_23067 = G__23092;
continue;
}
} else {
}
}
break;
}

var G__23093 = seq__23052;
var G__23094 = chunk__23057;
var G__23095 = count__23058;
var G__23096 = (i__23059 + (1));
seq__23052 = G__23093;
chunk__23057 = G__23094;
count__23058 = G__23095;
i__23059 = G__23096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23052);
if(temp__5735__auto__){
var seq__23052__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23052__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23052__$1);
var G__23097 = cljs.core.chunk_rest(seq__23052__$1);
var G__23098 = c__4351__auto__;
var G__23099 = cljs.core.count(c__4351__auto__);
var G__23100 = (0);
seq__23052 = G__23097;
chunk__23057 = G__23098;
count__23058 = G__23099;
i__23059 = G__23100;
continue;
} else {
var grid_y = cljs.core.first(seq__23052__$1);
var seq__23053_23101 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_2_01.tile_count));
var chunk__23054_23102 = null;
var count__23055_23103 = (0);
var i__23056_23104 = (0);
while(true){
if((i__23056_23104 < count__23055_23103)){
var grid_x_23105 = chunk__23054_23102.cljs$core$IIndexed$_nth$arity$2(null,i__23056_23104);
var pos_x_23106 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_x_23105);
var pos_y_23107 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_y);
var shift_x_23108 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
var shift_y_23109 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
quil.core.ellipse((pos_x_23106 + shift_x_23108),(pos_y_23107 + shift_y_23109),(quil.core.mouse_y() / (15)),(quil.core.mouse_y() / (15)));


var G__23110 = seq__23053_23101;
var G__23111 = chunk__23054_23102;
var G__23112 = count__23055_23103;
var G__23113 = (i__23056_23104 + (1));
seq__23053_23101 = G__23110;
chunk__23054_23102 = G__23111;
count__23055_23103 = G__23112;
i__23056_23104 = G__23113;
continue;
} else {
var temp__5735__auto___23114__$1 = cljs.core.seq(seq__23053_23101);
if(temp__5735__auto___23114__$1){
var seq__23053_23115__$1 = temp__5735__auto___23114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23053_23115__$1)){
var c__4351__auto___23116 = cljs.core.chunk_first(seq__23053_23115__$1);
var G__23117 = cljs.core.chunk_rest(seq__23053_23115__$1);
var G__23118 = c__4351__auto___23116;
var G__23119 = cljs.core.count(c__4351__auto___23116);
var G__23120 = (0);
seq__23053_23101 = G__23117;
chunk__23054_23102 = G__23118;
count__23055_23103 = G__23119;
i__23056_23104 = G__23120;
continue;
} else {
var grid_x_23121 = cljs.core.first(seq__23053_23115__$1);
var pos_x_23122 = ((quil.core.width() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_x_23121);
var pos_y_23123 = ((quil.core.height() / sketches.generative_desgin.P_02.P_2_1_2_01.tile_count) * grid_y);
var shift_x_23124 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
var shift_y_23125 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((- quil.core.mouse_x()),quil.core.mouse_x()) / (20));
quil.core.ellipse((pos_x_23122 + shift_x_23124),(pos_y_23123 + shift_y_23125),(quil.core.mouse_y() / (15)),(quil.core.mouse_y() / (15)));


var G__23126 = cljs.core.next(seq__23053_23115__$1);
var G__23127 = null;
var G__23128 = (0);
var G__23129 = (0);
seq__23053_23101 = G__23126;
chunk__23054_23102 = G__23127;
count__23055_23103 = G__23128;
i__23056_23104 = G__23129;
continue;
}
} else {
}
}
break;
}

var G__23130 = cljs.core.next(seq__23052__$1);
var G__23131 = null;
var G__23132 = (0);
var G__23133 = (0);
seq__23052 = G__23130;
chunk__23057 = G__23131;
count__23058 = G__23132;
i__23059 = G__23133;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_1_2_01.run = (function sketches$generative_desgin$P_02$P_2_1_2_01$run(host){
sketches.generative_desgin.P_02.P_2_1_2_01.movement_in_grid = (function sketches$generative_desgin$P_02$P_2_1_2_01$run_$_movement_in_grid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23134__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23135__i = 0, G__23135__a = new Array(arguments.length -  0);
while (G__23135__i < G__23135__a.length) {G__23135__a[G__23135__i] = arguments[G__23135__i + 0]; ++G__23135__i;}
  args = new cljs.core.IndexedSeq(G__23135__a,0,null);
} 
return G__23134__delegate.call(this,args);};
G__23134.cljs$lang$maxFixedArity = 0;
G__23134.cljs$lang$applyTo = (function (arglist__23136){
var args = cljs.core.seq(arglist__23136);
return G__23134__delegate(args);
});
G__23134.cljs$core$IFn$_invoke$arity$variadic = G__23134__delegate;
return G__23134;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_2_01.update_state))?(function() { 
var G__23137__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_2_01.update_state,args);
};
var G__23137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23138__i = 0, G__23138__a = new Array(arguments.length -  0);
while (G__23138__i < G__23138__a.length) {G__23138__a[G__23138__i] = arguments[G__23138__i + 0]; ++G__23138__i;}
  args = new cljs.core.IndexedSeq(G__23138__a,0,null);
} 
return G__23137__delegate.call(this,args);};
G__23137.cljs$lang$maxFixedArity = 0;
G__23137.cljs$lang$applyTo = (function (arglist__23139){
var args = cljs.core.seq(arglist__23139);
return G__23137__delegate(args);
});
G__23137.cljs$core$IFn$_invoke$arity$variadic = G__23137__delegate;
return G__23137;
})()
:sketches.generative_desgin.P_02.P_2_1_2_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_2_01.setup))?(function() { 
var G__23140__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_2_01.setup,args);
};
var G__23140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23141__i = 0, G__23141__a = new Array(arguments.length -  0);
while (G__23141__i < G__23141__a.length) {G__23141__a[G__23141__i] = arguments[G__23141__i + 0]; ++G__23141__i;}
  args = new cljs.core.IndexedSeq(G__23141__a,0,null);
} 
return G__23140__delegate.call(this,args);};
G__23140.cljs$lang$maxFixedArity = 0;
G__23140.cljs$lang$applyTo = (function (arglist__23142){
var args = cljs.core.seq(arglist__23142);
return G__23140__delegate(args);
});
G__23140.cljs$core$IFn$_invoke$arity$variadic = G__23140__delegate;
return G__23140;
})()
:sketches.generative_desgin.P_02.P_2_1_2_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_2_01.draw))?(function() { 
var G__23143__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_2_01.draw,args);
};
var G__23143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23144__i = 0, G__23144__a = new Array(arguments.length -  0);
while (G__23144__i < G__23144__a.length) {G__23144__a[G__23144__i] = arguments[G__23144__i + 0]; ++G__23144__i;}
  args = new cljs.core.IndexedSeq(G__23144__a,0,null);
} 
return G__23143__delegate.call(this,args);};
G__23143.cljs$lang$maxFixedArity = 0;
G__23143.cljs$lang$applyTo = (function (arglist__23145){
var args = cljs.core.seq(arglist__23145);
return G__23143__delegate(args);
});
G__23143.cljs$core$IFn$_invoke$arity$variadic = G__23143__delegate;
return G__23143;
})()
:sketches.generative_desgin.P_02.P_2_1_2_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_1_2_01.movement_in_grid', sketches.generative_desgin.P_02.P_2_1_2_01.movement_in_grid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_1_2_01.movement_in_grid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23146__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23147__i = 0, G__23147__a = new Array(arguments.length -  0);
while (G__23147__i < G__23147__a.length) {G__23147__a[G__23147__i] = arguments[G__23147__i + 0]; ++G__23147__i;}
  args = new cljs.core.IndexedSeq(G__23147__a,0,null);
} 
return G__23146__delegate.call(this,args);};
G__23146.cljs$lang$maxFixedArity = 0;
G__23146.cljs$lang$applyTo = (function (arglist__23148){
var args = cljs.core.seq(arglist__23148);
return G__23146__delegate(args);
});
G__23146.cljs$core$IFn$_invoke$arity$variadic = G__23146__delegate;
return G__23146;
})()
:host)], null));
}
});
