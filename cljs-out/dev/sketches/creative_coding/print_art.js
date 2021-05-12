// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.creative_coding.print_art');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.creative_coding.print_art.global$module$nice_color_palettes = goog.global["nice-color-palettes"];
sketches.creative_coding.print_art.palettes = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(sketches.creative_coding.print_art.global$module$nice_color_palettes);
sketches.creative_coding.print_art.pick_random = (function sketches$creative_coding$print_art$pick_random(list){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,cljs.core.rand_int((cljs.core.count(list) - (1))));
});
sketches.creative_coding.print_art.pick_random_palette = (function sketches$creative_coding$print_art$pick_random_palette(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20266_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return quil.core.unhex(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(p1__20266_SHARP_)));
}),sketches.creative_coding.print_art.pick_random(sketches.creative_coding.print_art.palettes));
});
sketches.creative_coding.print_art.setup = (function sketches$creative_coding$print_art$setup(){
var grid = (40);
var font = "Helvetica";
var palette = sketches.creative_coding.print_art.pick_random_palette();
var points = (function (){var iter__4324__auto__ = ((function (grid,font,palette){
return (function sketches$creative_coding$print_art$setup_$_iter__20267(s__20268){
return (new cljs.core.LazySeq(null,((function (grid,font,palette){
return (function (){
var s__20268__$1 = s__20268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20268__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__20268__$1,x,xs__6292__auto__,temp__5735__auto__,grid,font,palette){
return (function sketches$creative_coding$print_art$setup_$_iter__20267_$_iter__20269(s__20270){
return (new cljs.core.LazySeq(null,((function (s__20268__$1,x,xs__6292__auto__,temp__5735__auto__,grid,font,palette){
return (function (){
var s__20270__$1 = s__20270;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20270__$1);
if(temp__5735__auto____$1){
var s__20270__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20270__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20270__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20272 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20271 = (0);
while(true){
if((i__20271 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20271);
cljs.core.chunk_append(b__20272,(function (){var u = (x / (grid - (1)));
var v = (y / (grid - (1)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(palette,cljs.core.rand_int((3))),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),cljs.core.cst$kw$radius,(quil.core.abs(quil.core.noise.cljs$core$IFn$_invoke$arity$2(u,v)) * 0.2),cljs.core.cst$kw$rotation,(quil.core.abs(quil.core.noise.cljs$core$IFn$_invoke$arity$2(u,v)) * 0.5)], null);
})());

var G__20287 = (i__20271 + (1));
i__20271 = G__20287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20272),sketches$creative_coding$print_art$setup_$_iter__20267_$_iter__20269(cljs.core.chunk_rest(s__20270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20272),null);
}
} else {
var y = cljs.core.first(s__20270__$2);
return cljs.core.cons((function (){var u = (x / (grid - (1)));
var v = (y / (grid - (1)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(palette,cljs.core.rand_int((3))),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),cljs.core.cst$kw$radius,(quil.core.abs(quil.core.noise.cljs$core$IFn$_invoke$arity$2(u,v)) * 0.2),cljs.core.cst$kw$rotation,(quil.core.abs(quil.core.noise.cljs$core$IFn$_invoke$arity$2(u,v)) * 0.5)], null);
})(),sketches$creative_coding$print_art$setup_$_iter__20267_$_iter__20269(cljs.core.rest(s__20270__$2)));
}
} else {
return null;
}
break;
}
});})(s__20268__$1,x,xs__6292__auto__,temp__5735__auto__,grid,font,palette))
,null,null));
});})(s__20268__$1,x,xs__6292__auto__,temp__5735__auto__,grid,font,palette))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$creative_coding$print_art$setup_$_iter__20267(cljs.core.rest(s__20268__$1)));
} else {
var G__20288 = cljs.core.rest(s__20268__$1);
s__20268__$1 = G__20288;
continue;
}
} else {
return null;
}
break;
}
});})(grid,font,palette))
,null,null));
});})(grid,font,palette))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid));
})();
var seq__20273 = cljs.core.seq(points);
var chunk__20274 = null;
var count__20275 = (0);
var i__20276 = (0);
while(true){
if((i__20276 < count__20275)){
var map__20277 = chunk__20274.cljs$core$IIndexed$_nth$arity$2(null,i__20276);
var map__20277__$1 = ((((!((map__20277 == null)))?(((((map__20277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20277):map__20277);
var vec__20278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$position);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20278,(1),null);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$radius);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$color);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$rotation);
quil.core.push_matrix();

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,color);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(quil.core.map_range(u,(0),(1),(0),quil.core.width()),quil.core.map_range(v,(0),(1),(0),quil.core.height()));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(rotation);

quil.core.text_font.cljs$core$IFn$_invoke$arity$2(font,(radius * quil.core.width()));

quil.core.text.cljs$core$IFn$_invoke$arity$3("=",(0),(0));

quil.core.pop_matrix();


var G__20289 = seq__20273;
var G__20290 = chunk__20274;
var G__20291 = count__20275;
var G__20292 = (i__20276 + (1));
seq__20273 = G__20289;
chunk__20274 = G__20290;
count__20275 = G__20291;
i__20276 = G__20292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20273);
if(temp__5735__auto__){
var seq__20273__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20273__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20273__$1);
var G__20293 = cljs.core.chunk_rest(seq__20273__$1);
var G__20294 = c__4351__auto__;
var G__20295 = cljs.core.count(c__4351__auto__);
var G__20296 = (0);
seq__20273 = G__20293;
chunk__20274 = G__20294;
count__20275 = G__20295;
i__20276 = G__20296;
continue;
} else {
var map__20282 = cljs.core.first(seq__20273__$1);
var map__20282__$1 = ((((!((map__20282 == null)))?(((((map__20282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20282):map__20282);
var vec__20283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,cljs.core.cst$kw$position);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20283,(1),null);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,cljs.core.cst$kw$radius);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,cljs.core.cst$kw$color);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,cljs.core.cst$kw$rotation);
quil.core.push_matrix();

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,color);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(quil.core.map_range(u,(0),(1),(0),quil.core.width()),quil.core.map_range(v,(0),(1),(0),quil.core.height()));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(rotation);

quil.core.text_font.cljs$core$IFn$_invoke$arity$2(font,(radius * quil.core.width()));

quil.core.text.cljs$core$IFn$_invoke$arity$3("=",(0),(0));

quil.core.pop_matrix();


var G__20297 = cljs.core.next(seq__20273__$1);
var G__20298 = null;
var G__20299 = (0);
var G__20300 = (0);
seq__20273 = G__20297;
chunk__20274 = G__20298;
count__20275 = G__20299;
i__20276 = G__20300;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.creative_coding.print_art.run = (function sketches$creative_coding$print_art$run(host){
sketches.creative_coding.print_art.print_art = (function sketches$creative_coding$print_art$run_$_print_art(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20301__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20302__i = 0, G__20302__a = new Array(arguments.length -  0);
while (G__20302__i < G__20302__a.length) {G__20302__a[G__20302__i] = arguments[G__20302__i + 0]; ++G__20302__i;}
  args = new cljs.core.IndexedSeq(G__20302__a,0,null);
} 
return G__20301__delegate.call(this,args);};
G__20301.cljs$lang$maxFixedArity = 0;
G__20301.cljs$lang$applyTo = (function (arglist__20303){
var args = cljs.core.seq(arglist__20303);
return G__20301__delegate(args);
});
G__20301.cljs$core$IFn$_invoke$arity$variadic = G__20301__delegate;
return G__20301;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.creative_coding.print_art.setup))?(function() { 
var G__20304__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.creative_coding.print_art.setup,args);
};
var G__20304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20305__i = 0, G__20305__a = new Array(arguments.length -  0);
while (G__20305__i < G__20305__a.length) {G__20305__a[G__20305__i] = arguments[G__20305__i + 0]; ++G__20305__i;}
  args = new cljs.core.IndexedSeq(G__20305__a,0,null);
} 
return G__20304__delegate.call(this,args);};
G__20304.cljs$lang$maxFixedArity = 0;
G__20304.cljs$lang$applyTo = (function (arglist__20306){
var args = cljs.core.seq(arglist__20306);
return G__20304__delegate(args);
});
G__20304.cljs$core$IFn$_invoke$arity$variadic = G__20304__delegate;
return G__20304;
})()
:sketches.creative_coding.print_art.setup)], 0));
});
goog.exportSymbol('sketches.creative_coding.print_art.print_art', sketches.creative_coding.print_art.print_art);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.creative_coding.print_art.print_art,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20307__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20308__i = 0, G__20308__a = new Array(arguments.length -  0);
while (G__20308__i < G__20308__a.length) {G__20308__a[G__20308__i] = arguments[G__20308__i + 0]; ++G__20308__i;}
  args = new cljs.core.IndexedSeq(G__20308__a,0,null);
} 
return G__20307__delegate.call(this,args);};
G__20307.cljs$lang$maxFixedArity = 0;
G__20307.cljs$lang$applyTo = (function (arglist__20309){
var args = cljs.core.seq(arglist__20309);
return G__20307__delegate(args);
});
G__20307.cljs$core$IFn$_invoke$arity$variadic = G__20307__delegate;
return G__20307;
})()
:host)], null));
}
});
