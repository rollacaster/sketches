// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.heart_of_clojure');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.rac_sketches.heart_of_clojure.setup_particle = (function sketches$rac_sketches$heart_of_clojure$setup_particle(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null),cljs.core.cst$kw$speed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$lifespan,(255)], null);
});
sketches.rac_sketches.heart_of_clojure.setup = (function sketches$rac_sketches$heart_of_clojure$setup(){
quil.core.no_stroke();

quil.core.blend_mode(cljs.core.cst$kw$add);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return cljs.core.List.EMPTY;
});
sketches.rac_sketches.heart_of_clojure.v_add = (function sketches$rac_sketches$heart_of_clojure$v_add(p__18088,p__18089){
var vec__18090 = p__18088;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(1),null);
var vec__18093 = p__18089;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
sketches.rac_sketches.heart_of_clojure.update_particle = (function sketches$rac_sketches$heart_of_clojure$update_particle(p__18096){
var map__18097 = p__18096;
var map__18097__$1 = ((((!((map__18097 == null)))?(((((map__18097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18097):map__18097);
var particle = map__18097__$1;
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18097__$1,cljs.core.cst$kw$speed);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18097__$1,cljs.core.cst$kw$location);
var acc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.8,0.8),quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.8,0.8)], null);
var new_speed = sketches.rac_sketches.heart_of_clojure.v_add(acc,speed);
var new_location = sketches.rac_sketches.heart_of_clojure.v_add(location,new_speed);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$location,new_location),cljs.core.cst$kw$speed,new_speed),cljs.core.cst$kw$lifespan,cljs.core.dec);
});
sketches.rac_sketches.heart_of_clojure.update_state = (function sketches$rac_sketches$heart_of_clojure$update_state(state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18099_SHARP_){
return (cljs.core.cst$kw$lifespan.cljs$core$IFn$_invoke$arity$1(p1__18099_SHARP_) > (0));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.heart_of_clojure.update_particle,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(sketches.rac_sketches.heart_of_clojure.setup_particle()))));
});
sketches.rac_sketches.heart_of_clojure.draw_particle = (function sketches$rac_sketches$heart_of_clojure$draw_particle(p__18100){
var map__18101 = p__18100;
var map__18101__$1 = ((((!((map__18101 == null)))?(((((map__18101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18101):map__18101);
var vec__18102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,cljs.core.cst$kw$lifespan);
quil.core.fill.cljs$core$IFn$_invoke$arity$4(quil.core.map_range(lifespan,(127),(20),(127),(50)),(255),(100),lifespan);

return quil.core.ellipse(x,y,quil.core.map_range(lifespan,(0),(255),(0),quil.core.map_range(quil.core.sin((lifespan / (3))),(0),(1),(0),(150))),quil.core.map_range(lifespan,(0),(255),(0),quil.core.map_range(quil.core.sin(lifespan),(0),(1),(0),(150))));
});
sketches.rac_sketches.heart_of_clojure.draw = (function sketches$rac_sketches$heart_of_clojure$draw(state){
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$3((200),(127),(0));

var seq__18106 = cljs.core.seq(state);
var chunk__18107 = null;
var count__18108 = (0);
var i__18109 = (0);
while(true){
if((i__18109 < count__18108)){
var particle = chunk__18107.cljs$core$IIndexed$_nth$arity$2(null,i__18109);
sketches.rac_sketches.heart_of_clojure.draw_particle(particle);


var G__18110 = seq__18106;
var G__18111 = chunk__18107;
var G__18112 = count__18108;
var G__18113 = (i__18109 + (1));
seq__18106 = G__18110;
chunk__18107 = G__18111;
count__18108 = G__18112;
i__18109 = G__18113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18106);
if(temp__5735__auto__){
var seq__18106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18106__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18106__$1);
var G__18114 = cljs.core.chunk_rest(seq__18106__$1);
var G__18115 = c__4351__auto__;
var G__18116 = cljs.core.count(c__4351__auto__);
var G__18117 = (0);
seq__18106 = G__18114;
chunk__18107 = G__18115;
count__18108 = G__18116;
i__18109 = G__18117;
continue;
} else {
var particle = cljs.core.first(seq__18106__$1);
sketches.rac_sketches.heart_of_clojure.draw_particle(particle);


var G__18118 = cljs.core.next(seq__18106__$1);
var G__18119 = null;
var G__18120 = (0);
var G__18121 = (0);
seq__18106 = G__18118;
chunk__18107 = G__18119;
count__18108 = G__18120;
i__18109 = G__18121;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.rac_sketches.heart_of_clojure.run = (function sketches$rac_sketches$heart_of_clojure$run(host){
sketches.rac_sketches.heart_of_clojure.heart_of_clojure = (function sketches$rac_sketches$heart_of_clojure$run_$_heart_of_clojure(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18122__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18123__i = 0, G__18123__a = new Array(arguments.length -  0);
while (G__18123__i < G__18123__a.length) {G__18123__a[G__18123__i] = arguments[G__18123__i + 0]; ++G__18123__i;}
  args = new cljs.core.IndexedSeq(G__18123__a,0,null);
} 
return G__18122__delegate.call(this,args);};
G__18122.cljs$lang$maxFixedArity = 0;
G__18122.cljs$lang$applyTo = (function (arglist__18124){
var args = cljs.core.seq(arglist__18124);
return G__18122__delegate(args);
});
G__18122.cljs$core$IFn$_invoke$arity$variadic = G__18122__delegate;
return G__18122;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.heart_of_clojure.update_state))?(function() { 
var G__18125__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.heart_of_clojure.update_state,args);
};
var G__18125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18126__i = 0, G__18126__a = new Array(arguments.length -  0);
while (G__18126__i < G__18126__a.length) {G__18126__a[G__18126__i] = arguments[G__18126__i + 0]; ++G__18126__i;}
  args = new cljs.core.IndexedSeq(G__18126__a,0,null);
} 
return G__18125__delegate.call(this,args);};
G__18125.cljs$lang$maxFixedArity = 0;
G__18125.cljs$lang$applyTo = (function (arglist__18127){
var args = cljs.core.seq(arglist__18127);
return G__18125__delegate(args);
});
G__18125.cljs$core$IFn$_invoke$arity$variadic = G__18125__delegate;
return G__18125;
})()
:sketches.rac_sketches.heart_of_clojure.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.heart_of_clojure.setup))?(function() { 
var G__18128__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.heart_of_clojure.setup,args);
};
var G__18128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18129__i = 0, G__18129__a = new Array(arguments.length -  0);
while (G__18129__i < G__18129__a.length) {G__18129__a[G__18129__i] = arguments[G__18129__i + 0]; ++G__18129__i;}
  args = new cljs.core.IndexedSeq(G__18129__a,0,null);
} 
return G__18128__delegate.call(this,args);};
G__18128.cljs$lang$maxFixedArity = 0;
G__18128.cljs$lang$applyTo = (function (arglist__18130){
var args = cljs.core.seq(arglist__18130);
return G__18128__delegate(args);
});
G__18128.cljs$core$IFn$_invoke$arity$variadic = G__18128__delegate;
return G__18128;
})()
:sketches.rac_sketches.heart_of_clojure.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.heart_of_clojure.draw))?(function() { 
var G__18131__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.heart_of_clojure.draw,args);
};
var G__18131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18132__i = 0, G__18132__a = new Array(arguments.length -  0);
while (G__18132__i < G__18132__a.length) {G__18132__a[G__18132__i] = arguments[G__18132__i + 0]; ++G__18132__i;}
  args = new cljs.core.IndexedSeq(G__18132__a,0,null);
} 
return G__18131__delegate.call(this,args);};
G__18131.cljs$lang$maxFixedArity = 0;
G__18131.cljs$lang$applyTo = (function (arglist__18133){
var args = cljs.core.seq(arglist__18133);
return G__18131__delegate(args);
});
G__18131.cljs$core$IFn$_invoke$arity$variadic = G__18131__delegate;
return G__18131;
})()
:sketches.rac_sketches.heart_of_clojure.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.heart_of_clojure.heart_of_clojure', sketches.rac_sketches.heart_of_clojure.heart_of_clojure);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.heart_of_clojure.heart_of_clojure,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18134__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18135__i = 0, G__18135__a = new Array(arguments.length -  0);
while (G__18135__i < G__18135__a.length) {G__18135__a[G__18135__i] = arguments[G__18135__i + 0]; ++G__18135__i;}
  args = new cljs.core.IndexedSeq(G__18135__a,0,null);
} 
return G__18134__delegate.call(this,args);};
G__18134.cljs$lang$maxFixedArity = 0;
G__18134.cljs$lang$applyTo = (function (arglist__18136){
var args = cljs.core.seq(arglist__18136);
return G__18134__delegate(args);
});
G__18134.cljs$core$IFn$_invoke$arity$variadic = G__18134__delegate;
return G__18134;
})()
:host)], null));
}
});
