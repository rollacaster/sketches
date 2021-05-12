// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.noise_colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.rac_sketches.noise_colors.global$module$nice_color_palettes = goog.global["nice-color-palettes"];
sketches.rac_sketches.noise_colors.palettes = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(sketches.rac_sketches.noise_colors.global$module$nice_color_palettes);
sketches.rac_sketches.noise_colors.pick_random = (function sketches$rac_sketches$noise_colors$pick_random(list){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,cljs.core.rand_int((cljs.core.count(list) - (1))));
});
sketches.rac_sketches.noise_colors.pick_random_palette = (function sketches$rac_sketches$noise_colors$pick_random_palette(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17922_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return quil.core.unhex(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(p1__17922_SHARP_)));
}),sketches.rac_sketches.noise_colors.pick_random(sketches.rac_sketches.noise_colors.palettes));
});
sketches.rac_sketches.noise_colors.setup = (function sketches$rac_sketches$noise_colors$setup(){
quil.core.no_stroke();

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsl);

var w = (10);
var seed = quil.core.random.cljs$core$IFn$_invoke$arity$1((300));
var palette = sketches.rac_sketches.noise_colors.pick_random_palette();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (w,seed,palette){
return (function sketches$rac_sketches$noise_colors$setup_$_iter__17927(s__17928){
return (new cljs.core.LazySeq(null,((function (w,seed,palette){
return (function (){
var s__17928__$1 = s__17928;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17928__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__17933 = cljs.core.first(xs__6292__auto__);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,(1),null);
var iterys__4320__auto__ = ((function (s__17928__$1,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette){
return (function sketches$rac_sketches$noise_colors$setup_$_iter__17927_$_iter__17929(s__17930){
return (new cljs.core.LazySeq(null,((function (s__17928__$1,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette){
return (function (){
var s__17930__$1 = s__17930;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__17930__$1);
if(temp__5735__auto____$1){
var s__17930__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17930__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__17930__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__17932 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__17931 = (0);
while(true){
if((i__17931 < size__4323__auto__)){
var vec__17936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__17931);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(1),null);
var nx = (seed + (row / w));
var ny = (seed + (cell / w));
cljs.core.chunk_append(b__17932,(function (){var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(palette,quil.core.round(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(0),(cljs.core.count(palette) - (1)))));
var pos_noise = quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(-20),(30));
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127)], null)));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((pos_noise + x),(pos_noise + y),quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(10),(20)),quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(10),(20)));
})());

var G__17942 = (i__17931 + (1));
i__17931 = G__17942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17932),sketches$rac_sketches$noise_colors$setup_$_iter__17927_$_iter__17929(cljs.core.chunk_rest(s__17930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17932),null);
}
} else {
var vec__17939 = cljs.core.first(s__17930__$2);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939,(1),null);
var nx = (seed + (row / w));
var ny = (seed + (cell / w));
return cljs.core.cons((function (){var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(palette,quil.core.round(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(0),(cljs.core.count(palette) - (1)))));
var pos_noise = quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(-20),(30));
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127)], null)));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((pos_noise + x),(pos_noise + y),quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(10),(20)),quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(nx,ny),(0),(1),(10),(20)));
})(),sketches$rac_sketches$noise_colors$setup_$_iter__17927_$_iter__17929(cljs.core.rest(s__17930__$2)));
}
} else {
return null;
}
break;
}
});})(s__17928__$1,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette))
,null,null));
});})(s__17928__$1,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (s__17928__$1,iterys__4320__auto__,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette){
return (function (p1__17925_SHARP_,p2__17926_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17925_SHARP_,(p2__17926_SHARP_ * (10))],null));
});})(s__17928__$1,iterys__4320__auto__,vec__17933,row,x,xs__6292__auto__,temp__5735__auto__,w,seed,palette))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((quil.core.height() / w)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$rac_sketches$noise_colors$setup_$_iter__17927(cljs.core.rest(s__17928__$1)));
} else {
var G__17943 = cljs.core.rest(s__17928__$1);
s__17928__$1 = G__17943;
continue;
}
} else {
return null;
}
break;
}
});})(w,seed,palette))
,null,null));
});})(w,seed,palette))
;
return iter__4324__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (iter__4324__auto__,w,seed,palette){
return (function (p1__17923_SHARP_,p2__17924_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17923_SHARP_,(p2__17924_SHARP_ * (10))],null));
});})(iter__4324__auto__,w,seed,palette))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((quil.core.width() / w))));
})());
});
sketches.rac_sketches.noise_colors.update_state = (function sketches$rac_sketches$noise_colors$update_state(){
return null;
});
sketches.rac_sketches.noise_colors.draw = (function sketches$rac_sketches$noise_colors$draw(){
return null;
});
sketches.rac_sketches.noise_colors.run = (function sketches$rac_sketches$noise_colors$run(host){
sketches.rac_sketches.noise_colors.no453 = (function sketches$rac_sketches$noise_colors$run_$_no453(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17944__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17945__i = 0, G__17945__a = new Array(arguments.length -  0);
while (G__17945__i < G__17945__a.length) {G__17945__a[G__17945__i] = arguments[G__17945__i + 0]; ++G__17945__i;}
  args = new cljs.core.IndexedSeq(G__17945__a,0,null);
} 
return G__17944__delegate.call(this,args);};
G__17944.cljs$lang$maxFixedArity = 0;
G__17944.cljs$lang$applyTo = (function (arglist__17946){
var args = cljs.core.seq(arglist__17946);
return G__17944__delegate(args);
});
G__17944.cljs$core$IFn$_invoke$arity$variadic = G__17944__delegate;
return G__17944;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.noise_colors.update_state))?(function() { 
var G__17947__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.noise_colors.update_state,args);
};
var G__17947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17948__i = 0, G__17948__a = new Array(arguments.length -  0);
while (G__17948__i < G__17948__a.length) {G__17948__a[G__17948__i] = arguments[G__17948__i + 0]; ++G__17948__i;}
  args = new cljs.core.IndexedSeq(G__17948__a,0,null);
} 
return G__17947__delegate.call(this,args);};
G__17947.cljs$lang$maxFixedArity = 0;
G__17947.cljs$lang$applyTo = (function (arglist__17949){
var args = cljs.core.seq(arglist__17949);
return G__17947__delegate(args);
});
G__17947.cljs$core$IFn$_invoke$arity$variadic = G__17947__delegate;
return G__17947;
})()
:sketches.rac_sketches.noise_colors.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.noise_colors.setup))?(function() { 
var G__17950__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.noise_colors.setup,args);
};
var G__17950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17951__i = 0, G__17951__a = new Array(arguments.length -  0);
while (G__17951__i < G__17951__a.length) {G__17951__a[G__17951__i] = arguments[G__17951__i + 0]; ++G__17951__i;}
  args = new cljs.core.IndexedSeq(G__17951__a,0,null);
} 
return G__17950__delegate.call(this,args);};
G__17950.cljs$lang$maxFixedArity = 0;
G__17950.cljs$lang$applyTo = (function (arglist__17952){
var args = cljs.core.seq(arglist__17952);
return G__17950__delegate(args);
});
G__17950.cljs$core$IFn$_invoke$arity$variadic = G__17950__delegate;
return G__17950;
})()
:sketches.rac_sketches.noise_colors.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.noise_colors.draw))?(function() { 
var G__17953__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.noise_colors.draw,args);
};
var G__17953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17954__i = 0, G__17954__a = new Array(arguments.length -  0);
while (G__17954__i < G__17954__a.length) {G__17954__a[G__17954__i] = arguments[G__17954__i + 0]; ++G__17954__i;}
  args = new cljs.core.IndexedSeq(G__17954__a,0,null);
} 
return G__17953__delegate.call(this,args);};
G__17953.cljs$lang$maxFixedArity = 0;
G__17953.cljs$lang$applyTo = (function (arglist__17955){
var args = cljs.core.seq(arglist__17955);
return G__17953__delegate(args);
});
G__17953.cljs$core$IFn$_invoke$arity$variadic = G__17953__delegate;
return G__17953;
})()
:sketches.rac_sketches.noise_colors.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.noise_colors.no453', sketches.rac_sketches.noise_colors.no453);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.noise_colors.no453,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17956__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17957__i = 0, G__17957__a = new Array(arguments.length -  0);
while (G__17957__i < G__17957__a.length) {G__17957__a[G__17957__i] = arguments[G__17957__i + 0]; ++G__17957__i;}
  args = new cljs.core.IndexedSeq(G__17957__a,0,null);
} 
return G__17956__delegate.call(this,args);};
G__17956.cljs$lang$maxFixedArity = 0;
G__17956.cljs$lang$applyTo = (function (arglist__17958){
var args = cljs.core.seq(arglist__17958);
return G__17956__delegate(args);
});
G__17956.cljs$core$IFn$_invoke$arity$variadic = G__17956__delegate;
return G__17956;
})()
:host)], null));
}
});
