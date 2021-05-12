// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.combined_wave');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.oscillation.combined_wave.setup = (function sketches$nature_of_code$oscillation$combined_wave$setup(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21789_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__21789_SHARP_ * (24)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$amplitude,(200),cljs.core.cst$kw$angle_DASH_vel,0.01,cljs.core.cst$kw$angle,(p1__21789_SHARP_ * 0.1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$amplitude,(50),cljs.core.cst$kw$angle_DASH_vel,0.03,cljs.core.cst$kw$angle,(p1__21789_SHARP_ * 0.3)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$amplitude,(150),cljs.core.cst$kw$angle_DASH_vel,0.06,cljs.core.cst$kw$angle,(p1__21789_SHARP_ * 0.5)], null)], null)],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((quil.core.width() / (24))));
});
sketches.nature_of_code.oscillation.combined_wave.update_state = (function sketches$nature_of_code$oscillation$combined_wave$update_state(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21790){
var vec__21791 = p__21790;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21791,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21791,x,ys){
return (function (p__21794){
var map__21795 = p__21794;
var map__21795__$1 = ((((!((map__21795 == null)))?(((((map__21795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21795):map__21795);
var y = map__21795__$1;
var angle_vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,cljs.core.cst$kw$angle_DASH_vel);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(y,cljs.core.cst$kw$angle,cljs.core._PLUS_,angle_vel);
});})(vec__21791,x,ys))
,ys)], null);
}),state);
});
sketches.nature_of_code.oscillation.combined_wave.combine_waves = (function sketches$nature_of_code$oscillation$combined_wave$combine_waves(waves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total_y,p__21797){
var map__21798 = p__21797;
var map__21798__$1 = ((((!((map__21798 == null)))?(((((map__21798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21798):map__21798);
var angle_vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$angle_DASH_vel);
var amplitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$amplitude);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$angle);
return (total_y + quil.core.map_range(quil.core.sin(angle),(-1),(1),(0),amplitude));
}),(0),waves);
});
sketches.nature_of_code.oscillation.combined_wave.draw_wave_element = (function sketches$nature_of_code$oscillation$combined_wave$draw_wave_element(p__21800){
var vec__21801 = p__21800;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,(0),null);
var waves = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,(1),null);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(50));

return quil.core.ellipse(x,sketches.nature_of_code.oscillation.combined_wave.combine_waves(waves),(48),(48));
});
sketches.nature_of_code.oscillation.combined_wave.draw = (function sketches$nature_of_code$oscillation$combined_wave$draw(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__21804 = cljs.core.seq(state);
var chunk__21805 = null;
var count__21806 = (0);
var i__21807 = (0);
while(true){
if((i__21807 < count__21806)){
var wave_element = chunk__21805.cljs$core$IIndexed$_nth$arity$2(null,i__21807);
sketches.nature_of_code.oscillation.combined_wave.draw_wave_element(wave_element);


var G__21808 = seq__21804;
var G__21809 = chunk__21805;
var G__21810 = count__21806;
var G__21811 = (i__21807 + (1));
seq__21804 = G__21808;
chunk__21805 = G__21809;
count__21806 = G__21810;
i__21807 = G__21811;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21804);
if(temp__5735__auto__){
var seq__21804__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21804__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21804__$1);
var G__21812 = cljs.core.chunk_rest(seq__21804__$1);
var G__21813 = c__4351__auto__;
var G__21814 = cljs.core.count(c__4351__auto__);
var G__21815 = (0);
seq__21804 = G__21812;
chunk__21805 = G__21813;
count__21806 = G__21814;
i__21807 = G__21815;
continue;
} else {
var wave_element = cljs.core.first(seq__21804__$1);
sketches.nature_of_code.oscillation.combined_wave.draw_wave_element(wave_element);


var G__21816 = cljs.core.next(seq__21804__$1);
var G__21817 = null;
var G__21818 = (0);
var G__21819 = (0);
seq__21804 = G__21816;
chunk__21805 = G__21817;
count__21806 = G__21818;
i__21807 = G__21819;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.combined_wave.run = (function sketches$nature_of_code$oscillation$combined_wave$run(host){
sketches.nature_of_code.oscillation.combined_wave.combined_wave = (function sketches$nature_of_code$oscillation$combined_wave$run_$_combined_wave(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21820__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21821__i = 0, G__21821__a = new Array(arguments.length -  0);
while (G__21821__i < G__21821__a.length) {G__21821__a[G__21821__i] = arguments[G__21821__i + 0]; ++G__21821__i;}
  args = new cljs.core.IndexedSeq(G__21821__a,0,null);
} 
return G__21820__delegate.call(this,args);};
G__21820.cljs$lang$maxFixedArity = 0;
G__21820.cljs$lang$applyTo = (function (arglist__21822){
var args = cljs.core.seq(arglist__21822);
return G__21820__delegate(args);
});
G__21820.cljs$core$IFn$_invoke$arity$variadic = G__21820__delegate;
return G__21820;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.combined_wave.update_state))?(function() { 
var G__21823__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.combined_wave.update_state,args);
};
var G__21823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21824__i = 0, G__21824__a = new Array(arguments.length -  0);
while (G__21824__i < G__21824__a.length) {G__21824__a[G__21824__i] = arguments[G__21824__i + 0]; ++G__21824__i;}
  args = new cljs.core.IndexedSeq(G__21824__a,0,null);
} 
return G__21823__delegate.call(this,args);};
G__21823.cljs$lang$maxFixedArity = 0;
G__21823.cljs$lang$applyTo = (function (arglist__21825){
var args = cljs.core.seq(arglist__21825);
return G__21823__delegate(args);
});
G__21823.cljs$core$IFn$_invoke$arity$variadic = G__21823__delegate;
return G__21823;
})()
:sketches.nature_of_code.oscillation.combined_wave.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.combined_wave.setup))?(function() { 
var G__21826__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.combined_wave.setup,args);
};
var G__21826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21827__i = 0, G__21827__a = new Array(arguments.length -  0);
while (G__21827__i < G__21827__a.length) {G__21827__a[G__21827__i] = arguments[G__21827__i + 0]; ++G__21827__i;}
  args = new cljs.core.IndexedSeq(G__21827__a,0,null);
} 
return G__21826__delegate.call(this,args);};
G__21826.cljs$lang$maxFixedArity = 0;
G__21826.cljs$lang$applyTo = (function (arglist__21828){
var args = cljs.core.seq(arglist__21828);
return G__21826__delegate(args);
});
G__21826.cljs$core$IFn$_invoke$arity$variadic = G__21826__delegate;
return G__21826;
})()
:sketches.nature_of_code.oscillation.combined_wave.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.combined_wave.draw))?(function() { 
var G__21829__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.combined_wave.draw,args);
};
var G__21829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21830__i = 0, G__21830__a = new Array(arguments.length -  0);
while (G__21830__i < G__21830__a.length) {G__21830__a[G__21830__i] = arguments[G__21830__i + 0]; ++G__21830__i;}
  args = new cljs.core.IndexedSeq(G__21830__a,0,null);
} 
return G__21829__delegate.call(this,args);};
G__21829.cljs$lang$maxFixedArity = 0;
G__21829.cljs$lang$applyTo = (function (arglist__21831){
var args = cljs.core.seq(arglist__21831);
return G__21829__delegate(args);
});
G__21829.cljs$core$IFn$_invoke$arity$variadic = G__21829__delegate;
return G__21829;
})()
:sketches.nature_of_code.oscillation.combined_wave.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.combined_wave.combined_wave', sketches.nature_of_code.oscillation.combined_wave.combined_wave);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.combined_wave.combined_wave,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21832__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21833__i = 0, G__21833__a = new Array(arguments.length -  0);
while (G__21833__i < G__21833__a.length) {G__21833__a[G__21833__i] = arguments[G__21833__i + 0]; ++G__21833__i;}
  args = new cljs.core.IndexedSeq(G__21833__a,0,null);
} 
return G__21832__delegate.call(this,args);};
G__21832.cljs$lang$maxFixedArity = 0;
G__21832.cljs$lang$applyTo = (function (arglist__21834){
var args = cljs.core.seq(arglist__21834);
return G__21832__delegate(args);
});
G__21832.cljs$core$IFn$_invoke$arity$variadic = G__21832__delegate;
return G__21832;
})()
:host)], null));
}
});
