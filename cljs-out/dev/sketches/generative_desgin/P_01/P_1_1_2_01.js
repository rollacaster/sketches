// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_01.P_1_1_2_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_01.P_1_1_2_01.setup = (function sketches$generative_desgin$P_01$P_1_1_2_01$setup(){
quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$segment_DASH_count,(360)], null);
});
sketches.generative_desgin.P_01.P_1_1_2_01.update_state = (function sketches$generative_desgin$P_01$P_1_1_2_01$update_state(state){
return state;
});
sketches.generative_desgin.P_01.P_1_1_2_01.draw = (function sketches$generative_desgin$P_01$P_1_1_2_01$draw(p__17729){
var map__17730 = p__17729;
var map__17730__$1 = ((((!((map__17730 == null)))?(((((map__17730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17730):map__17730);
var segment_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,cljs.core.cst$kw$segment_DASH_count);
quil.core.color_mode.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hsb,(360),quil.core.width(),quil.core.height());

quil.core.background.cljs$core$IFn$_invoke$arity$3((360),(0),quil.core.height());

var angle_step = ((360) / segment_count);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$triangle_DASH_fan);

quil.core.vertex.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

var seq__17732_17736 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((360) + angle_step),angle_step));
var chunk__17733_17737 = null;
var count__17734_17738 = (0);
var i__17735_17739 = (0);
while(true){
if((i__17735_17739 < count__17734_17738)){
var angle_17740 = chunk__17733_17737.cljs$core$IIndexed$_nth$arity$2(null,i__17735_17739);
var radius_17741 = (100);
var vx_17742 = ((quil.core.width() / (2)) + (quil.core.cos(quil.core.radians(angle_17740)) * radius_17741));
var vy_17743 = ((quil.core.height() / (2)) + (quil.core.sin(quil.core.radians(angle_17740)) * radius_17741));
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(vx_17742,vy_17743);

quil.core.fill.cljs$core$IFn$_invoke$arity$3(angle_17740,quil.core.mouse_x(),quil.core.mouse_y());


var G__17744 = seq__17732_17736;
var G__17745 = chunk__17733_17737;
var G__17746 = count__17734_17738;
var G__17747 = (i__17735_17739 + (1));
seq__17732_17736 = G__17744;
chunk__17733_17737 = G__17745;
count__17734_17738 = G__17746;
i__17735_17739 = G__17747;
continue;
} else {
var temp__5735__auto___17748 = cljs.core.seq(seq__17732_17736);
if(temp__5735__auto___17748){
var seq__17732_17749__$1 = temp__5735__auto___17748;
if(cljs.core.chunked_seq_QMARK_(seq__17732_17749__$1)){
var c__4351__auto___17750 = cljs.core.chunk_first(seq__17732_17749__$1);
var G__17751 = cljs.core.chunk_rest(seq__17732_17749__$1);
var G__17752 = c__4351__auto___17750;
var G__17753 = cljs.core.count(c__4351__auto___17750);
var G__17754 = (0);
seq__17732_17736 = G__17751;
chunk__17733_17737 = G__17752;
count__17734_17738 = G__17753;
i__17735_17739 = G__17754;
continue;
} else {
var angle_17755 = cljs.core.first(seq__17732_17749__$1);
var radius_17756 = (100);
var vx_17757 = ((quil.core.width() / (2)) + (quil.core.cos(quil.core.radians(angle_17755)) * radius_17756));
var vy_17758 = ((quil.core.height() / (2)) + (quil.core.sin(quil.core.radians(angle_17755)) * radius_17756));
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(vx_17757,vy_17758);

quil.core.fill.cljs$core$IFn$_invoke$arity$3(angle_17755,quil.core.mouse_x(),quil.core.mouse_y());


var G__17759 = cljs.core.next(seq__17732_17749__$1);
var G__17760 = null;
var G__17761 = (0);
var G__17762 = (0);
seq__17732_17736 = G__17759;
chunk__17733_17737 = G__17760;
count__17734_17738 = G__17761;
i__17735_17739 = G__17762;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();
});
sketches.generative_desgin.P_01.P_1_1_2_01.key_pressed = (function sketches$generative_desgin$P_01$P_1_1_2_01$key_pressed(state,p__17763){
var map__17764 = p__17763;
var map__17764__$1 = ((((!((map__17764 == null)))?(((((map__17764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17764):map__17764);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17764__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$segment_DASH_count,(function (){var G__17766 = key;
var G__17766__$1 = (((G__17766 instanceof cljs.core.Keyword))?G__17766.fqn:null);
switch (G__17766__$1) {
case "1":
return (360);

break;
case "2":
return (45);

break;
case "3":
return (24);

break;
case "4":
return (12);

break;
case "5":
return (6);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17766__$1)].join('')));

}
})());
});
sketches.generative_desgin.P_01.P_1_1_2_01.run = (function sketches$generative_desgin$P_01$P_1_1_2_01$run(host){
sketches.generative_desgin.P_01.P_1_1_2_01.color_spectrum_in_a_circle = (function sketches$generative_desgin$P_01$P_1_1_2_01$run_$_color_spectrum_in_a_circle(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17768__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17769__i = 0, G__17769__a = new Array(arguments.length -  0);
while (G__17769__i < G__17769__a.length) {G__17769__a[G__17769__i] = arguments[G__17769__i + 0]; ++G__17769__i;}
  args = new cljs.core.IndexedSeq(G__17769__a,0,null);
} 
return G__17768__delegate.call(this,args);};
G__17768.cljs$lang$maxFixedArity = 0;
G__17768.cljs$lang$applyTo = (function (arglist__17770){
var args = cljs.core.seq(arglist__17770);
return G__17768__delegate(args);
});
G__17768.cljs$core$IFn$_invoke$arity$variadic = G__17768__delegate;
return G__17768;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_2_01.update_state))?(function() { 
var G__17771__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_2_01.update_state,args);
};
var G__17771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17772__i = 0, G__17772__a = new Array(arguments.length -  0);
while (G__17772__i < G__17772__a.length) {G__17772__a[G__17772__i] = arguments[G__17772__i + 0]; ++G__17772__i;}
  args = new cljs.core.IndexedSeq(G__17772__a,0,null);
} 
return G__17771__delegate.call(this,args);};
G__17771.cljs$lang$maxFixedArity = 0;
G__17771.cljs$lang$applyTo = (function (arglist__17773){
var args = cljs.core.seq(arglist__17773);
return G__17771__delegate(args);
});
G__17771.cljs$core$IFn$_invoke$arity$variadic = G__17771__delegate;
return G__17771;
})()
:sketches.generative_desgin.P_01.P_1_1_2_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_2_01.setup))?(function() { 
var G__17774__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_2_01.setup,args);
};
var G__17774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17775__i = 0, G__17775__a = new Array(arguments.length -  0);
while (G__17775__i < G__17775__a.length) {G__17775__a[G__17775__i] = arguments[G__17775__i + 0]; ++G__17775__i;}
  args = new cljs.core.IndexedSeq(G__17775__a,0,null);
} 
return G__17774__delegate.call(this,args);};
G__17774.cljs$lang$maxFixedArity = 0;
G__17774.cljs$lang$applyTo = (function (arglist__17776){
var args = cljs.core.seq(arglist__17776);
return G__17774__delegate(args);
});
G__17774.cljs$core$IFn$_invoke$arity$variadic = G__17774__delegate;
return G__17774;
})()
:sketches.generative_desgin.P_01.P_1_1_2_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_2_01.key_pressed))?(function() { 
var G__17777__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_2_01.key_pressed,args);
};
var G__17777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17778__i = 0, G__17778__a = new Array(arguments.length -  0);
while (G__17778__i < G__17778__a.length) {G__17778__a[G__17778__i] = arguments[G__17778__i + 0]; ++G__17778__i;}
  args = new cljs.core.IndexedSeq(G__17778__a,0,null);
} 
return G__17777__delegate.call(this,args);};
G__17777.cljs$lang$maxFixedArity = 0;
G__17777.cljs$lang$applyTo = (function (arglist__17779){
var args = cljs.core.seq(arglist__17779);
return G__17777__delegate(args);
});
G__17777.cljs$core$IFn$_invoke$arity$variadic = G__17777__delegate;
return G__17777;
})()
:sketches.generative_desgin.P_01.P_1_1_2_01.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_1_2_01.draw))?(function() { 
var G__17780__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_1_2_01.draw,args);
};
var G__17780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17781__i = 0, G__17781__a = new Array(arguments.length -  0);
while (G__17781__i < G__17781__a.length) {G__17781__a[G__17781__i] = arguments[G__17781__i + 0]; ++G__17781__i;}
  args = new cljs.core.IndexedSeq(G__17781__a,0,null);
} 
return G__17780__delegate.call(this,args);};
G__17780.cljs$lang$maxFixedArity = 0;
G__17780.cljs$lang$applyTo = (function (arglist__17782){
var args = cljs.core.seq(arglist__17782);
return G__17780__delegate(args);
});
G__17780.cljs$core$IFn$_invoke$arity$variadic = G__17780__delegate;
return G__17780;
})()
:sketches.generative_desgin.P_01.P_1_1_2_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_01.P_1_1_2_01.color_spectrum_in_a_circle', sketches.generative_desgin.P_01.P_1_1_2_01.color_spectrum_in_a_circle);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_01.P_1_1_2_01.color_spectrum_in_a_circle,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17783__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17784__i = 0, G__17784__a = new Array(arguments.length -  0);
while (G__17784__i < G__17784__a.length) {G__17784__a[G__17784__i] = arguments[G__17784__i + 0]; ++G__17784__i;}
  args = new cljs.core.IndexedSeq(G__17784__a,0,null);
} 
return G__17783__delegate.call(this,args);};
G__17783.cljs$lang$maxFixedArity = 0;
G__17783.cljs$lang$applyTo = (function (arglist__17785){
var args = cljs.core.seq(arglist__17785);
return G__17783__delegate(args);
});
G__17783.cljs$core$IFn$_invoke$arity$variadic = G__17783__delegate;
return G__17783;
})()
:host)], null));
}
});
