// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.creative_coding.webgl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.creative_coding.webgl.global$module$nice_color_palettes = goog.global["nice-color-palettes"];
sketches.creative_coding.webgl.global$module$bezier_easing = goog.global["bezier-easing"];
sketches.creative_coding.webgl.palettes = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(sketches.creative_coding.webgl.global$module$nice_color_palettes);
sketches.creative_coding.webgl.pick_random = (function sketches$creative_coding$webgl$pick_random(list){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,cljs.core.rand_int((cljs.core.count(list) - (1))));
});
sketches.creative_coding.webgl.pick_random_palette = (function sketches$creative_coding$webgl$pick_random_palette(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20116_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return quil.core.unhex(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(p1__20116_SHARP_)));
}),sketches.creative_coding.webgl.pick_random(sketches.creative_coding.webgl.palettes));
});
sketches.creative_coding.webgl.draw = (function sketches$creative_coding$webgl$draw(p__20117){
var map__20118 = p__20117;
var map__20118__$1 = ((((!((map__20118 == null)))?(((((map__20118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20118):map__20118);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,cljs.core.cst$kw$rotation);
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,cljs.core.cst$kw$boxes);
quil.core.clear();

quil.core.translate.cljs$core$IFn$_invoke$arity$3((0),(0),(-500));

quil.core.rotate.cljs$core$IFn$_invoke$arity$4(quil.core.radians((45)),(0),(1),(0));

quil.core.rotate.cljs$core$IFn$_invoke$arity$4(rotation,(1),(0),(0));

quil.core.ambient_light.cljs$core$IFn$_invoke$arity$3((200),(200),(200));

quil.core.directional_light((255),(255),(255),(0),(1),-0.5);

var seq__20120 = cljs.core.seq(boxes);
var chunk__20121 = null;
var count__20122 = (0);
var i__20123 = (0);
while(true){
if((i__20123 < count__20122)){
var map__20124 = chunk__20121.cljs$core$IIndexed$_nth$arity$2(null,i__20123);
var map__20124__$1 = ((((!((map__20124 == null)))?(((((map__20124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20124):map__20124);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20124__$1,cljs.core.cst$kw$scale);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20124__$1,cljs.core.cst$kw$position);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20124__$1,cljs.core.cst$kw$color);
quil.core.push_matrix();

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.ambient,color);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.scale,scale);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.translate,position);

quil.core.box.cljs$core$IFn$_invoke$arity$3((100),(100),(100));

quil.core.pop_matrix();


var G__20128 = seq__20120;
var G__20129 = chunk__20121;
var G__20130 = count__20122;
var G__20131 = (i__20123 + (1));
seq__20120 = G__20128;
chunk__20121 = G__20129;
count__20122 = G__20130;
i__20123 = G__20131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20120);
if(temp__5735__auto__){
var seq__20120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20120__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20120__$1);
var G__20132 = cljs.core.chunk_rest(seq__20120__$1);
var G__20133 = c__4351__auto__;
var G__20134 = cljs.core.count(c__4351__auto__);
var G__20135 = (0);
seq__20120 = G__20132;
chunk__20121 = G__20133;
count__20122 = G__20134;
i__20123 = G__20135;
continue;
} else {
var map__20126 = cljs.core.first(seq__20120__$1);
var map__20126__$1 = ((((!((map__20126 == null)))?(((((map__20126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20126):map__20126);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,cljs.core.cst$kw$scale);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,cljs.core.cst$kw$position);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20126__$1,cljs.core.cst$kw$color);
quil.core.push_matrix();

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.ambient,color);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.scale,scale);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.translate,position);

quil.core.box.cljs$core$IFn$_invoke$arity$3((100),(100),(100));

quil.core.pop_matrix();


var G__20136 = cljs.core.next(seq__20120__$1);
var G__20137 = null;
var G__20138 = (0);
var G__20139 = (0);
seq__20120 = G__20136;
chunk__20121 = G__20137;
count__20122 = G__20138;
i__20123 = G__20139;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.creative_coding.webgl.ease_fn = (sketches.creative_coding.webgl.global$module$bezier_easing.cljs$core$IFn$_invoke$arity$4 ? sketches.creative_coding.webgl.global$module$bezier_easing.cljs$core$IFn$_invoke$arity$4(0.67,0.03,0.29,0.99) : sketches.creative_coding.webgl.global$module$bezier_easing.call(null,0.67,0.03,0.29,0.99));
sketches.creative_coding.webgl.update_state = (function sketches$creative_coding$webgl$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rotation,(function (){
var G__20141 = quil.core.sin((cljs.core.cst$kw$play_DASH_head.cljs$core$IFn$_invoke$arity$1(state) * quil.core.PI));
return (sketches.creative_coding.webgl.ease_fn.cljs$core$IFn$_invoke$arity$1 ? sketches.creative_coding.webgl.ease_fn.cljs$core$IFn$_invoke$arity$1(G__20141) : sketches.creative_coding.webgl.ease_fn.call(null,G__20141));
})),cljs.core.cst$kw$play_DASH_head,(function (p1__20140_SHARP_){
return cljs.core.mod((p1__20140_SHARP_ + 0.01),(1));
}));
});
sketches.creative_coding.webgl.setup = (function sketches$creative_coding$webgl$setup(){
quil.core.stroke_weight((0));

var palette = sketches.creative_coding.webgl.pick_random_palette();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$boxes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (palette){
return (function (i){
var color = sketches.creative_coding.webgl.pick_random(palette);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$scale,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1)),quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1)),quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1))], null),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.width()),quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()),quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.height())], null),cljs.core.cst$kw$color,color], null);
});})(palette))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((100))),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$play_DASH_head,(0)], null);
});
sketches.creative_coding.webgl.run = (function sketches$creative_coding$webgl$run(host){
sketches.creative_coding.webgl.webgl = (function sketches$creative_coding$webgl$run_$_webgl(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20142__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20143__i = 0, G__20143__a = new Array(arguments.length -  0);
while (G__20143__i < G__20143__a.length) {G__20143__a[G__20143__i] = arguments[G__20143__i + 0]; ++G__20143__i;}
  args = new cljs.core.IndexedSeq(G__20143__a,0,null);
} 
return G__20142__delegate.call(this,args);};
G__20142.cljs$lang$maxFixedArity = 0;
G__20142.cljs$lang$applyTo = (function (arglist__20144){
var args = cljs.core.seq(arglist__20144);
return G__20142__delegate(args);
});
G__20142.cljs$core$IFn$_invoke$arity$variadic = G__20142__delegate;
return G__20142;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.creative_coding.webgl.update_state))?(function() { 
var G__20145__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.creative_coding.webgl.update_state,args);
};
var G__20145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20146__i = 0, G__20146__a = new Array(arguments.length -  0);
while (G__20146__i < G__20146__a.length) {G__20146__a[G__20146__i] = arguments[G__20146__i + 0]; ++G__20146__i;}
  args = new cljs.core.IndexedSeq(G__20146__a,0,null);
} 
return G__20145__delegate.call(this,args);};
G__20145.cljs$lang$maxFixedArity = 0;
G__20145.cljs$lang$applyTo = (function (arglist__20147){
var args = cljs.core.seq(arglist__20147);
return G__20145__delegate(args);
});
G__20145.cljs$core$IFn$_invoke$arity$variadic = G__20145__delegate;
return G__20145;
})()
:sketches.creative_coding.webgl.update_state),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p3d,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.creative_coding.webgl.setup))?(function() { 
var G__20148__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.creative_coding.webgl.setup,args);
};
var G__20148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20149__i = 0, G__20149__a = new Array(arguments.length -  0);
while (G__20149__i < G__20149__a.length) {G__20149__a[G__20149__i] = arguments[G__20149__i + 0]; ++G__20149__i;}
  args = new cljs.core.IndexedSeq(G__20149__a,0,null);
} 
return G__20148__delegate.call(this,args);};
G__20148.cljs$lang$maxFixedArity = 0;
G__20148.cljs$lang$applyTo = (function (arglist__20150){
var args = cljs.core.seq(arglist__20150);
return G__20148__delegate(args);
});
G__20148.cljs$core$IFn$_invoke$arity$variadic = G__20148__delegate;
return G__20148;
})()
:sketches.creative_coding.webgl.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.creative_coding.webgl.draw))?(function() { 
var G__20151__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.creative_coding.webgl.draw,args);
};
var G__20151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20152__i = 0, G__20152__a = new Array(arguments.length -  0);
while (G__20152__i < G__20152__a.length) {G__20152__a[G__20152__i] = arguments[G__20152__i + 0]; ++G__20152__i;}
  args = new cljs.core.IndexedSeq(G__20152__a,0,null);
} 
return G__20151__delegate.call(this,args);};
G__20151.cljs$lang$maxFixedArity = 0;
G__20151.cljs$lang$applyTo = (function (arglist__20153){
var args = cljs.core.seq(arglist__20153);
return G__20151__delegate(args);
});
G__20151.cljs$core$IFn$_invoke$arity$variadic = G__20151__delegate;
return G__20151;
})()
:sketches.creative_coding.webgl.draw)], 0));
});
goog.exportSymbol('sketches.creative_coding.webgl.webgl', sketches.creative_coding.webgl.webgl);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.creative_coding.webgl.webgl,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20154__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20155__i = 0, G__20155__a = new Array(arguments.length -  0);
while (G__20155__i < G__20155__a.length) {G__20155__a[G__20155__i] = arguments[G__20155__i + 0]; ++G__20155__i;}
  args = new cljs.core.IndexedSeq(G__20155__a,0,null);
} 
return G__20154__delegate.call(this,args);};
G__20154.cljs$lang$maxFixedArity = 0;
G__20154.cljs$lang$applyTo = (function (arglist__20156){
var args = cljs.core.seq(arglist__20156);
return G__20154__delegate(args);
});
G__20154.cljs$core$IFn$_invoke$arity$variadic = G__20154__delegate;
return G__20154;
})()
:host)], null));
}
});
