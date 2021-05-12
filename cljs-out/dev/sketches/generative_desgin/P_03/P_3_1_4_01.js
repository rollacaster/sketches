// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_03.P_3_1_4_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_03.P_3_1_4_01.text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
window.fetch("data/pride_and_prejudice.txt").then((function (p1__21213_SHARP_){
return p1__21213_SHARP_.text();
})).then((function (p1__21214_SHARP_){
return cljs.core.reset_BANG_(sketches.generative_desgin.P_03.P_3_1_4_01.text,p1__21214_SHARP_);
}));
sketches.generative_desgin.P_03.P_3_1_4_01.setup = (function sketches$generative_desgin$P_03$P_3_1_4_01$setup(){
quil.core.text_align.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$center,cljs.core.cst$kw$baseline);

var words = cljs.core.re_seq(/\w+/,cljs.core.deref(sketches.generative_desgin.P_03.P_3_1_4_01.text));
var treemap = (new gd.Treemap((1),(1),(297),(297),({"sort": true, "direction": "both"})));
var seq__21215_21219 = cljs.core.seq(words);
var chunk__21216_21220 = null;
var count__21217_21221 = (0);
var i__21218_21222 = (0);
while(true){
if((i__21218_21222 < count__21217_21221)){
var word_21223 = chunk__21216_21220.cljs$core$IIndexed$_nth$arity$2(null,i__21218_21222);
treemap.addData(clojure.string.lower_case(word_21223));


var G__21224 = seq__21215_21219;
var G__21225 = chunk__21216_21220;
var G__21226 = count__21217_21221;
var G__21227 = (i__21218_21222 + (1));
seq__21215_21219 = G__21224;
chunk__21216_21220 = G__21225;
count__21217_21221 = G__21226;
i__21218_21222 = G__21227;
continue;
} else {
var temp__5735__auto___21228 = cljs.core.seq(seq__21215_21219);
if(temp__5735__auto___21228){
var seq__21215_21229__$1 = temp__5735__auto___21228;
if(cljs.core.chunked_seq_QMARK_(seq__21215_21229__$1)){
var c__4351__auto___21230 = cljs.core.chunk_first(seq__21215_21229__$1);
var G__21231 = cljs.core.chunk_rest(seq__21215_21229__$1);
var G__21232 = c__4351__auto___21230;
var G__21233 = cljs.core.count(c__4351__auto___21230);
var G__21234 = (0);
seq__21215_21219 = G__21231;
chunk__21216_21220 = G__21232;
count__21217_21221 = G__21233;
i__21218_21222 = G__21234;
continue;
} else {
var word_21235 = cljs.core.first(seq__21215_21229__$1);
treemap.addData(clojure.string.lower_case(word_21235));


var G__21236 = cljs.core.next(seq__21215_21229__$1);
var G__21237 = null;
var G__21238 = (0);
var G__21239 = (0);
seq__21215_21219 = G__21236;
chunk__21216_21220 = G__21237;
count__21217_21221 = G__21238;
i__21218_21222 = G__21239;
continue;
}
} else {
}
}
break;
}

treemap.calculate();

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$treemap,treemap], null);
});
sketches.generative_desgin.P_03.P_3_1_4_01.update_state = (function sketches$generative_desgin$P_03$P_3_1_4_01$update_state(state){
return state;
});
sketches.generative_desgin.P_03.P_3_1_4_01.draw = (function sketches$generative_desgin$P_03$P_3_1_4_01$draw(p__21240){
var map__21241 = p__21240;
var map__21241__$1 = ((((!((map__21241 == null)))?(((((map__21241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21241):map__21241);
var treemap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241__$1,cljs.core.cst$kw$treemap);
var seq__21243_21247 = cljs.core.seq(treemap.items);
var chunk__21244_21248 = null;
var count__21245_21249 = (0);
var i__21246_21250 = (0);
while(true){
if((i__21246_21250 < count__21245_21249)){
var item_21251 = chunk__21244_21248.cljs$core$IIndexed$_nth$arity$2(null,i__21246_21250);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(item_21251.x,item_21251.y,item_21251.w,item_21251.h);

var word_21252 = item_21251.data;
var text_width_21253 = quil.core.text_width(word_21252);
var max_font_size_21254 = (((100) * (item_21251.w * 0.9)) / text_width_21253);
var font_size_21255 = Math.min(max_font_size_21254,(item_21251.h * 0.9));
quil.core.text_size(font_size_21255);

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.no_stroke();

quil.core.text.cljs$core$IFn$_invoke$arity$3(word_21252,(item_21251.x + (item_21251.w / (2))),(item_21251.y + (item_21251.h * 0.8)));


var G__21256 = seq__21243_21247;
var G__21257 = chunk__21244_21248;
var G__21258 = count__21245_21249;
var G__21259 = (i__21246_21250 + (1));
seq__21243_21247 = G__21256;
chunk__21244_21248 = G__21257;
count__21245_21249 = G__21258;
i__21246_21250 = G__21259;
continue;
} else {
var temp__5735__auto___21260 = cljs.core.seq(seq__21243_21247);
if(temp__5735__auto___21260){
var seq__21243_21261__$1 = temp__5735__auto___21260;
if(cljs.core.chunked_seq_QMARK_(seq__21243_21261__$1)){
var c__4351__auto___21262 = cljs.core.chunk_first(seq__21243_21261__$1);
var G__21263 = cljs.core.chunk_rest(seq__21243_21261__$1);
var G__21264 = c__4351__auto___21262;
var G__21265 = cljs.core.count(c__4351__auto___21262);
var G__21266 = (0);
seq__21243_21247 = G__21263;
chunk__21244_21248 = G__21264;
count__21245_21249 = G__21265;
i__21246_21250 = G__21266;
continue;
} else {
var item_21267 = cljs.core.first(seq__21243_21261__$1);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(item_21267.x,item_21267.y,item_21267.w,item_21267.h);

var word_21268 = item_21267.data;
var text_width_21269 = quil.core.text_width(word_21268);
var max_font_size_21270 = (((100) * (item_21267.w * 0.9)) / text_width_21269);
var font_size_21271 = Math.min(max_font_size_21270,(item_21267.h * 0.9));
quil.core.text_size(font_size_21271);

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.no_stroke();

quil.core.text.cljs$core$IFn$_invoke$arity$3(word_21268,(item_21267.x + (item_21267.w / (2))),(item_21267.y + (item_21267.h * 0.8)));


var G__21272 = cljs.core.next(seq__21243_21261__$1);
var G__21273 = null;
var G__21274 = (0);
var G__21275 = (0);
seq__21243_21247 = G__21272;
chunk__21244_21248 = G__21273;
count__21245_21249 = G__21274;
i__21246_21250 = G__21275;
continue;
}
} else {
}
}
break;
}

return quil.core.no_loop();
});
sketches.generative_desgin.P_03.P_3_1_4_01.run = (function sketches$generative_desgin$P_03$P_3_1_4_01$run(host){
sketches.generative_desgin.P_03.P_3_1_4_01.text_treemap = (function sketches$generative_desgin$P_03$P_3_1_4_01$run_$_text_treemap(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21276__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21277__i = 0, G__21277__a = new Array(arguments.length -  0);
while (G__21277__i < G__21277__a.length) {G__21277__a[G__21277__i] = arguments[G__21277__i + 0]; ++G__21277__i;}
  args = new cljs.core.IndexedSeq(G__21277__a,0,null);
} 
return G__21276__delegate.call(this,args);};
G__21276.cljs$lang$maxFixedArity = 0;
G__21276.cljs$lang$applyTo = (function (arglist__21278){
var args = cljs.core.seq(arglist__21278);
return G__21276__delegate(args);
});
G__21276.cljs$core$IFn$_invoke$arity$variadic = G__21276__delegate;
return G__21276;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_4_01.update_state))?(function() { 
var G__21279__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_4_01.update_state,args);
};
var G__21279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21280__i = 0, G__21280__a = new Array(arguments.length -  0);
while (G__21280__i < G__21280__a.length) {G__21280__a[G__21280__i] = arguments[G__21280__i + 0]; ++G__21280__i;}
  args = new cljs.core.IndexedSeq(G__21280__a,0,null);
} 
return G__21279__delegate.call(this,args);};
G__21279.cljs$lang$maxFixedArity = 0;
G__21279.cljs$lang$applyTo = (function (arglist__21281){
var args = cljs.core.seq(arglist__21281);
return G__21279__delegate(args);
});
G__21279.cljs$core$IFn$_invoke$arity$variadic = G__21279__delegate;
return G__21279;
})()
:sketches.generative_desgin.P_03.P_3_1_4_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_4_01.setup))?(function() { 
var G__21282__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_4_01.setup,args);
};
var G__21282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21283__i = 0, G__21283__a = new Array(arguments.length -  0);
while (G__21283__i < G__21283__a.length) {G__21283__a[G__21283__i] = arguments[G__21283__i + 0]; ++G__21283__i;}
  args = new cljs.core.IndexedSeq(G__21283__a,0,null);
} 
return G__21282__delegate.call(this,args);};
G__21282.cljs$lang$maxFixedArity = 0;
G__21282.cljs$lang$applyTo = (function (arglist__21284){
var args = cljs.core.seq(arglist__21284);
return G__21282__delegate(args);
});
G__21282.cljs$core$IFn$_invoke$arity$variadic = G__21282__delegate;
return G__21282;
})()
:sketches.generative_desgin.P_03.P_3_1_4_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_4_01.draw))?(function() { 
var G__21285__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_4_01.draw,args);
};
var G__21285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21286__i = 0, G__21286__a = new Array(arguments.length -  0);
while (G__21286__i < G__21286__a.length) {G__21286__a[G__21286__i] = arguments[G__21286__i + 0]; ++G__21286__i;}
  args = new cljs.core.IndexedSeq(G__21286__a,0,null);
} 
return G__21285__delegate.call(this,args);};
G__21285.cljs$lang$maxFixedArity = 0;
G__21285.cljs$lang$applyTo = (function (arglist__21287){
var args = cljs.core.seq(arglist__21287);
return G__21285__delegate(args);
});
G__21285.cljs$core$IFn$_invoke$arity$variadic = G__21285__delegate;
return G__21285;
})()
:sketches.generative_desgin.P_03.P_3_1_4_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_03.P_3_1_4_01.text_treemap', sketches.generative_desgin.P_03.P_3_1_4_01.text_treemap);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_03.P_3_1_4_01.text_treemap,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21288__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21289__i = 0, G__21289__a = new Array(arguments.length -  0);
while (G__21289__i < G__21289__a.length) {G__21289__a[G__21289__i] = arguments[G__21289__i + 0]; ++G__21289__i;}
  args = new cljs.core.IndexedSeq(G__21289__a,0,null);
} 
return G__21288__delegate.call(this,args);};
G__21288.cljs$lang$maxFixedArity = 0;
G__21288.cljs$lang$applyTo = (function (arglist__21290){
var args = cljs.core.seq(arglist__21290);
return G__21288__delegate(args);
});
G__21288.cljs$core$IFn$_invoke$arity$variadic = G__21288__delegate;
return G__21288;
})()
:host)], null));
}
});
