// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_3_7_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_3_7_01.setup = (function sketches$generative_desgin$P_02$P_2_3_7_01$setup(){
quil.core.no_fill();

var img = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(quil.core.width(),quil.core.height());
img.pixelDensity((1));

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line_DASH_color,quil.core.color.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$img,img,cljs.core.cst$kw$pen_DASH_count,(1)], null);
});
sketches.generative_desgin.P_02.P_2_3_7_01.update_state = (function sketches$generative_desgin$P_02$P_2_3_7_01$update_state(state){
return state;
});
sketches.generative_desgin.P_02.P_2_3_7_01.draw = (function sketches$generative_desgin$P_02$P_2_3_7_01$draw(p__17788){
var map__17789 = p__17788;
var map__17789__$1 = ((((!((map__17789 == null)))?(((((map__17789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17789):map__17789);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,cljs.core.cst$kw$img);
var line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,cljs.core.cst$kw$line_DASH_color);
var pen_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,cljs.core.cst$kw$pen_DASH_count);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var gr__14588__auto___17792 = img;
var _STAR_graphics_STAR_17791_17793 = quil.core._STAR_graphics_STAR_;
quil.core._STAR_graphics_STAR_ = gr__14588__auto___17792;

try{quil.core.begin_draw(gr__14588__auto___17792);

quil.core.stroke_weight((3));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1(line_color);

if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
var w_17794 = quil.core.width();
var h_17795 = quil.core.height();
var x_17796 = quil.core.mouse_x();
var y_17797 = quil.core.mouse_y();
var px_17798 = (x_17796 - (quil.core.mouse_x() - quil.core.pmouse_x()));
var py_17799 = (y_17797 - (quil.core.mouse_y() - quil.core.pmouse_y()));
quil.core.line.cljs$core$IFn$_invoke$arity$4(x_17796,y_17797,px_17798,py_17799);

quil.core.line.cljs$core$IFn$_invoke$arity$4((w_17794 - x_17796),y_17797,(w_17794 - px_17798),py_17799);

quil.core.line.cljs$core$IFn$_invoke$arity$4(x_17796,(h_17795 - y_17797),px_17798,(h_17795 - py_17799));

quil.core.line.cljs$core$IFn$_invoke$arity$4((w_17794 - x_17796),(h_17795 - y_17797),(w_17794 - px_17798),(h_17795 - py_17799));

quil.core.line.cljs$core$IFn$_invoke$arity$4(y_17797,x_17796,py_17799,px_17798);

quil.core.line.cljs$core$IFn$_invoke$arity$4(y_17797,(w_17794 - x_17796),py_17799,(w_17794 - px_17798));

quil.core.line.cljs$core$IFn$_invoke$arity$4((h_17795 - y_17797),x_17796,(h_17795 - py_17799),px_17798);

quil.core.line.cljs$core$IFn$_invoke$arity$4((h_17795 - y_17797),(w_17794 - x_17796),(h_17795 - py_17799),(w_17794 - px_17798));
} else {
}

quil.core.end_draw(gr__14588__auto___17792);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR_17791_17793;
}
return quil.core.image.cljs$core$IFn$_invoke$arity$3(img,(0),(0));
});
sketches.generative_desgin.P_02.P_2_3_7_01.run = (function sketches$generative_desgin$P_02$P_2_3_7_01$run(host){
sketches.generative_desgin.P_02.P_2_3_7_01.multiple_brushes = (function sketches$generative_desgin$P_02$P_2_3_7_01$run_$_multiple_brushes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17800__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17801__i = 0, G__17801__a = new Array(arguments.length -  0);
while (G__17801__i < G__17801__a.length) {G__17801__a[G__17801__i] = arguments[G__17801__i + 0]; ++G__17801__i;}
  args = new cljs.core.IndexedSeq(G__17801__a,0,null);
} 
return G__17800__delegate.call(this,args);};
G__17800.cljs$lang$maxFixedArity = 0;
G__17800.cljs$lang$applyTo = (function (arglist__17802){
var args = cljs.core.seq(arglist__17802);
return G__17800__delegate(args);
});
G__17800.cljs$core$IFn$_invoke$arity$variadic = G__17800__delegate;
return G__17800;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_7_01.update_state))?(function() { 
var G__17803__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_7_01.update_state,args);
};
var G__17803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17804__i = 0, G__17804__a = new Array(arguments.length -  0);
while (G__17804__i < G__17804__a.length) {G__17804__a[G__17804__i] = arguments[G__17804__i + 0]; ++G__17804__i;}
  args = new cljs.core.IndexedSeq(G__17804__a,0,null);
} 
return G__17803__delegate.call(this,args);};
G__17803.cljs$lang$maxFixedArity = 0;
G__17803.cljs$lang$applyTo = (function (arglist__17805){
var args = cljs.core.seq(arglist__17805);
return G__17803__delegate(args);
});
G__17803.cljs$core$IFn$_invoke$arity$variadic = G__17803__delegate;
return G__17803;
})()
:sketches.generative_desgin.P_02.P_2_3_7_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_7_01.setup))?(function() { 
var G__17806__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_7_01.setup,args);
};
var G__17806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17807__i = 0, G__17807__a = new Array(arguments.length -  0);
while (G__17807__i < G__17807__a.length) {G__17807__a[G__17807__i] = arguments[G__17807__i + 0]; ++G__17807__i;}
  args = new cljs.core.IndexedSeq(G__17807__a,0,null);
} 
return G__17806__delegate.call(this,args);};
G__17806.cljs$lang$maxFixedArity = 0;
G__17806.cljs$lang$applyTo = (function (arglist__17808){
var args = cljs.core.seq(arglist__17808);
return G__17806__delegate(args);
});
G__17806.cljs$core$IFn$_invoke$arity$variadic = G__17806__delegate;
return G__17806;
})()
:sketches.generative_desgin.P_02.P_2_3_7_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_7_01.draw))?(function() { 
var G__17809__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_7_01.draw,args);
};
var G__17809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17810__i = 0, G__17810__a = new Array(arguments.length -  0);
while (G__17810__i < G__17810__a.length) {G__17810__a[G__17810__i] = arguments[G__17810__i + 0]; ++G__17810__i;}
  args = new cljs.core.IndexedSeq(G__17810__a,0,null);
} 
return G__17809__delegate.call(this,args);};
G__17809.cljs$lang$maxFixedArity = 0;
G__17809.cljs$lang$applyTo = (function (arglist__17811){
var args = cljs.core.seq(arglist__17811);
return G__17809__delegate(args);
});
G__17809.cljs$core$IFn$_invoke$arity$variadic = G__17809__delegate;
return G__17809;
})()
:sketches.generative_desgin.P_02.P_2_3_7_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_3_7_01.multiple_brushes', sketches.generative_desgin.P_02.P_2_3_7_01.multiple_brushes);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_3_7_01.multiple_brushes,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17812__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17813__i = 0, G__17813__a = new Array(arguments.length -  0);
while (G__17813__i < G__17813__a.length) {G__17813__a[G__17813__i] = arguments[G__17813__i + 0]; ++G__17813__i;}
  args = new cljs.core.IndexedSeq(G__17813__a,0,null);
} 
return G__17812__delegate.call(this,args);};
G__17812.cljs$lang$maxFixedArity = 0;
G__17812.cljs$lang$applyTo = (function (arglist__17814){
var args = cljs.core.seq(arglist__17814);
return G__17812__delegate(args);
});
G__17812.cljs$core$IFn$_invoke$arity$variadic = G__17812__delegate;
return G__17812;
})()
:host)], null));
}
});
