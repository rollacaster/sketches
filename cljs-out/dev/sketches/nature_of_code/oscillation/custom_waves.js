// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.custom_waves');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.oscillation.custom_waves.setup = (function sketches$nature_of_code$oscillation$custom_waves$setup(){
return (new cljs.core.List(null,(function (){var element_counts = (quil.core.width() / (24));
var angle_vel = 0.02;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$amplitude,(200),cljs.core.cst$kw$angle_DASH_vel,angle_vel,cljs.core.cst$kw$elements,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (element_counts,angle_vel){
return (function (p1__21717_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__21717_SHARP_ * (24)),(p1__21717_SHARP_ * angle_vel)],null));
});})(element_counts,angle_vel))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(element_counts)),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.1 * quil.core.height())], null)], null);
})(),(new cljs.core.List(null,(function (){var element_counts = (quil.core.width() / (48));
var angle_vel = 0.3;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$amplitude,(50),cljs.core.cst$kw$angle_DASH_vel,angle_vel,cljs.core.cst$kw$elements,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (element_counts,angle_vel){
return (function (p1__21718_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__21718_SHARP_ * (24)),(p1__21718_SHARP_ * angle_vel)],null));
});})(element_counts,angle_vel))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(element_counts)),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.8 * quil.core.height())], null)], null);
})(),null,(1),null)),(2),null));
});
sketches.nature_of_code.oscillation.custom_waves.update_element = (function sketches$nature_of_code$oscillation$custom_waves$update_element(angle_vel,p__21719){
var vec__21720 = p__21719;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21720,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21720,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(((1) + x),quil.core.width()),(angle_vel + y)], null);
});
sketches.nature_of_code.oscillation.custom_waves.update_wave = (function sketches$nature_of_code$oscillation$custom_waves$update_wave(p__21723){
var map__21724 = p__21723;
var map__21724__$1 = ((((!((map__21724 == null)))?(((((map__21724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21724):map__21724);
var wave = map__21724__$1;
var angle_vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21724__$1,cljs.core.cst$kw$angle_DASH_vel);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(wave,cljs.core.cst$kw$elements,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.custom_waves.update_element,angle_vel)));
});
sketches.nature_of_code.oscillation.custom_waves.update_state = (function sketches$nature_of_code$oscillation$custom_waves$update_state(waves){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.custom_waves.update_wave,waves);
});
sketches.nature_of_code.oscillation.custom_waves.draw_wave = (function sketches$nature_of_code$oscillation$custom_waves$draw_wave(p__21726){
var map__21727 = p__21726;
var map__21727__$1 = ((((!((map__21727 == null)))?(((((map__21727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21727):map__21727);
var vec__21728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727__$1,cljs.core.cst$kw$location);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(0),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(1),null);
var angleVel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727__$1,cljs.core.cst$kw$angleVel);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727__$1,cljs.core.cst$kw$elements);
var amplitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727__$1,cljs.core.cst$kw$amplitude);
var seq__21732 = cljs.core.seq(elements);
var chunk__21733 = null;
var count__21734 = (0);
var i__21735 = (0);
while(true){
if((i__21735 < count__21734)){
var vec__21736 = chunk__21733.cljs$core$IIndexed$_nth$arity$2(null,i__21735);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21736,(0),null);
var angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21736,(1),null);
var y_21742 = quil.core.map_range(quil.core.sin(angle),(-1),(1),(0),amplitude);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(50));

quil.core.ellipse((l1 + x),(l2 + y_21742),(48),(48));


var G__21743 = seq__21732;
var G__21744 = chunk__21733;
var G__21745 = count__21734;
var G__21746 = (i__21735 + (1));
seq__21732 = G__21743;
chunk__21733 = G__21744;
count__21734 = G__21745;
i__21735 = G__21746;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21732);
if(temp__5735__auto__){
var seq__21732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21732__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21732__$1);
var G__21747 = cljs.core.chunk_rest(seq__21732__$1);
var G__21748 = c__4351__auto__;
var G__21749 = cljs.core.count(c__4351__auto__);
var G__21750 = (0);
seq__21732 = G__21747;
chunk__21733 = G__21748;
count__21734 = G__21749;
i__21735 = G__21750;
continue;
} else {
var vec__21739 = cljs.core.first(seq__21732__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21739,(0),null);
var angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21739,(1),null);
var y_21751 = quil.core.map_range(quil.core.sin(angle),(-1),(1),(0),amplitude);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(50));

quil.core.ellipse((l1 + x),(l2 + y_21751),(48),(48));


var G__21752 = cljs.core.next(seq__21732__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__21732 = G__21752;
chunk__21733 = G__21753;
count__21734 = G__21754;
i__21735 = G__21755;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.custom_waves.draw = (function sketches$nature_of_code$oscillation$custom_waves$draw(waves){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__21756 = cljs.core.seq(waves);
var chunk__21757 = null;
var count__21758 = (0);
var i__21759 = (0);
while(true){
if((i__21759 < count__21758)){
var wave = chunk__21757.cljs$core$IIndexed$_nth$arity$2(null,i__21759);
sketches.nature_of_code.oscillation.custom_waves.draw_wave(wave);


var G__21760 = seq__21756;
var G__21761 = chunk__21757;
var G__21762 = count__21758;
var G__21763 = (i__21759 + (1));
seq__21756 = G__21760;
chunk__21757 = G__21761;
count__21758 = G__21762;
i__21759 = G__21763;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21756);
if(temp__5735__auto__){
var seq__21756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21756__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21756__$1);
var G__21764 = cljs.core.chunk_rest(seq__21756__$1);
var G__21765 = c__4351__auto__;
var G__21766 = cljs.core.count(c__4351__auto__);
var G__21767 = (0);
seq__21756 = G__21764;
chunk__21757 = G__21765;
count__21758 = G__21766;
i__21759 = G__21767;
continue;
} else {
var wave = cljs.core.first(seq__21756__$1);
sketches.nature_of_code.oscillation.custom_waves.draw_wave(wave);


var G__21768 = cljs.core.next(seq__21756__$1);
var G__21769 = null;
var G__21770 = (0);
var G__21771 = (0);
seq__21756 = G__21768;
chunk__21757 = G__21769;
count__21758 = G__21770;
i__21759 = G__21771;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.oscillation.custom_waves.run = (function sketches$nature_of_code$oscillation$custom_waves$run(host){
sketches.nature_of_code.oscillation.custom_waves.custom_waves = (function sketches$nature_of_code$oscillation$custom_waves$run_$_custom_waves(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21772__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21773__i = 0, G__21773__a = new Array(arguments.length -  0);
while (G__21773__i < G__21773__a.length) {G__21773__a[G__21773__i] = arguments[G__21773__i + 0]; ++G__21773__i;}
  args = new cljs.core.IndexedSeq(G__21773__a,0,null);
} 
return G__21772__delegate.call(this,args);};
G__21772.cljs$lang$maxFixedArity = 0;
G__21772.cljs$lang$applyTo = (function (arglist__21774){
var args = cljs.core.seq(arglist__21774);
return G__21772__delegate(args);
});
G__21772.cljs$core$IFn$_invoke$arity$variadic = G__21772__delegate;
return G__21772;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.custom_waves.update_state))?(function() { 
var G__21775__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.custom_waves.update_state,args);
};
var G__21775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21776__i = 0, G__21776__a = new Array(arguments.length -  0);
while (G__21776__i < G__21776__a.length) {G__21776__a[G__21776__i] = arguments[G__21776__i + 0]; ++G__21776__i;}
  args = new cljs.core.IndexedSeq(G__21776__a,0,null);
} 
return G__21775__delegate.call(this,args);};
G__21775.cljs$lang$maxFixedArity = 0;
G__21775.cljs$lang$applyTo = (function (arglist__21777){
var args = cljs.core.seq(arglist__21777);
return G__21775__delegate(args);
});
G__21775.cljs$core$IFn$_invoke$arity$variadic = G__21775__delegate;
return G__21775;
})()
:sketches.nature_of_code.oscillation.custom_waves.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.custom_waves.setup))?(function() { 
var G__21778__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.custom_waves.setup,args);
};
var G__21778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21779__i = 0, G__21779__a = new Array(arguments.length -  0);
while (G__21779__i < G__21779__a.length) {G__21779__a[G__21779__i] = arguments[G__21779__i + 0]; ++G__21779__i;}
  args = new cljs.core.IndexedSeq(G__21779__a,0,null);
} 
return G__21778__delegate.call(this,args);};
G__21778.cljs$lang$maxFixedArity = 0;
G__21778.cljs$lang$applyTo = (function (arglist__21780){
var args = cljs.core.seq(arglist__21780);
return G__21778__delegate(args);
});
G__21778.cljs$core$IFn$_invoke$arity$variadic = G__21778__delegate;
return G__21778;
})()
:sketches.nature_of_code.oscillation.custom_waves.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.custom_waves.draw))?(function() { 
var G__21781__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.custom_waves.draw,args);
};
var G__21781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21782__i = 0, G__21782__a = new Array(arguments.length -  0);
while (G__21782__i < G__21782__a.length) {G__21782__a[G__21782__i] = arguments[G__21782__i + 0]; ++G__21782__i;}
  args = new cljs.core.IndexedSeq(G__21782__a,0,null);
} 
return G__21781__delegate.call(this,args);};
G__21781.cljs$lang$maxFixedArity = 0;
G__21781.cljs$lang$applyTo = (function (arglist__21783){
var args = cljs.core.seq(arglist__21783);
return G__21781__delegate(args);
});
G__21781.cljs$core$IFn$_invoke$arity$variadic = G__21781__delegate;
return G__21781;
})()
:sketches.nature_of_code.oscillation.custom_waves.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.custom_waves.custom_waves', sketches.nature_of_code.oscillation.custom_waves.custom_waves);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.custom_waves.custom_waves,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21784__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21785__i = 0, G__21785__a = new Array(arguments.length -  0);
while (G__21785__i < G__21785__a.length) {G__21785__a[G__21785__i] = arguments[G__21785__i + 0]; ++G__21785__i;}
  args = new cljs.core.IndexedSeq(G__21785__a,0,null);
} 
return G__21784__delegate.call(this,args);};
G__21784.cljs$lang$maxFixedArity = 0;
G__21784.cljs$lang$applyTo = (function (arglist__21786){
var args = cljs.core.seq(arglist__21786);
return G__21784__delegate(args);
});
G__21784.cljs$core$IFn$_invoke$arity$variadic = G__21784__delegate;
return G__21784;
})()
:host)], null));
}
});
