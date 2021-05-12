// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_3_4_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_3_4_01.setup = (function sketches$generative_desgin$P_02$P_2_3_4_01$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y(),cljs.core.cst$kw$step_DASH_size,(5),cljs.core.cst$kw$module_DASH_size,(25),cljs.core.cst$kw$angle,(0),cljs.core.cst$kw$d,(0),cljs.core.cst$kw$line_DASH_module,quil.core.load_image("images/dynamic-brush.svg")], null);
});
sketches.generative_desgin.P_02.P_2_3_4_01.update_state = (function sketches$generative_desgin$P_02$P_2_3_4_01$update_state(p__21339){
var map__21340 = p__21339;
var map__21340__$1 = ((((!((map__21340 == null)))?(((((map__21340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21340):map__21340);
var state = map__21340__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,cljs.core.cst$kw$y);
var step_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,cljs.core.cst$kw$step_DASH_size);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
var d = quil.core.dist.cljs$core$IFn$_invoke$arity$4(x,y,quil.core.mouse_x(),quil.core.mouse_y());
if((d > step_size)){
var angle = quil.core.atan2((quil.core.mouse_y() - y),(quil.core.mouse_x() - x));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$d,d),cljs.core.cst$kw$angle,angle),cljs.core.cst$kw$x,cljs.core._PLUS_,(quil.core.cos(angle) * step_size));
} else {
return state;
}
} else {
return state;
}
});
sketches.generative_desgin.P_02.P_2_3_4_01.draw = (function sketches$generative_desgin$P_02$P_2_3_4_01$draw(p__21342){
var map__21343 = p__21342;
var map__21343__$1 = ((((!((map__21343 == null)))?(((((map__21343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21343):map__21343);
var state = map__21343__$1;
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343__$1,cljs.core.cst$kw$angle);
var line_module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343__$1,cljs.core.cst$kw$line_DASH_module);
var module_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343__$1,cljs.core.cst$kw$module_DASH_size);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343__$1,cljs.core.cst$kw$d);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_x(),quil.core.mouse_y());

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((angle + quil.core.PI));

if(cljs.core.truth_(quil.core.loaded_QMARK_(line_module))){
quil.core.image.cljs$core$IFn$_invoke$arity$5(line_module,(0),(0),d,module_size);
} else {
}

return quil.core.pop_matrix();
} else {
return null;
}
});
sketches.generative_desgin.P_02.P_2_3_4_01.mouse_pressed = (function sketches$generative_desgin$P_02$P_2_3_4_01$mouse_pressed(state,p__21345){
var map__21346 = p__21345;
var map__21346__$1 = ((((!((map__21346 == null)))?(((((map__21346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21346):map__21346);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21346__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21346__$1,cljs.core.cst$kw$y);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$x,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,y], 0));
});
sketches.generative_desgin.P_02.P_2_3_4_01.run = (function sketches$generative_desgin$P_02$P_2_3_4_01$run(host){
sketches.generative_desgin.P_02.P_2_3_4_01.dynamic_brushes = (function sketches$generative_desgin$P_02$P_2_3_4_01$run_$_dynamic_brushes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21348__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21349__i = 0, G__21349__a = new Array(arguments.length -  0);
while (G__21349__i < G__21349__a.length) {G__21349__a[G__21349__i] = arguments[G__21349__i + 0]; ++G__21349__i;}
  args = new cljs.core.IndexedSeq(G__21349__a,0,null);
} 
return G__21348__delegate.call(this,args);};
G__21348.cljs$lang$maxFixedArity = 0;
G__21348.cljs$lang$applyTo = (function (arglist__21350){
var args = cljs.core.seq(arglist__21350);
return G__21348__delegate(args);
});
G__21348.cljs$core$IFn$_invoke$arity$variadic = G__21348__delegate;
return G__21348;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_4_01.update_state))?(function() { 
var G__21351__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_4_01.update_state,args);
};
var G__21351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21352__i = 0, G__21352__a = new Array(arguments.length -  0);
while (G__21352__i < G__21352__a.length) {G__21352__a[G__21352__i] = arguments[G__21352__i + 0]; ++G__21352__i;}
  args = new cljs.core.IndexedSeq(G__21352__a,0,null);
} 
return G__21351__delegate.call(this,args);};
G__21351.cljs$lang$maxFixedArity = 0;
G__21351.cljs$lang$applyTo = (function (arglist__21353){
var args = cljs.core.seq(arglist__21353);
return G__21351__delegate(args);
});
G__21351.cljs$core$IFn$_invoke$arity$variadic = G__21351__delegate;
return G__21351;
})()
:sketches.generative_desgin.P_02.P_2_3_4_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_4_01.setup))?(function() { 
var G__21354__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_4_01.setup,args);
};
var G__21354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21355__i = 0, G__21355__a = new Array(arguments.length -  0);
while (G__21355__i < G__21355__a.length) {G__21355__a[G__21355__i] = arguments[G__21355__i + 0]; ++G__21355__i;}
  args = new cljs.core.IndexedSeq(G__21355__a,0,null);
} 
return G__21354__delegate.call(this,args);};
G__21354.cljs$lang$maxFixedArity = 0;
G__21354.cljs$lang$applyTo = (function (arglist__21356){
var args = cljs.core.seq(arglist__21356);
return G__21354__delegate(args);
});
G__21354.cljs$core$IFn$_invoke$arity$variadic = G__21354__delegate;
return G__21354;
})()
:sketches.generative_desgin.P_02.P_2_3_4_01.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_4_01.mouse_pressed))?(function() { 
var G__21357__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_4_01.mouse_pressed,args);
};
var G__21357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21358__i = 0, G__21358__a = new Array(arguments.length -  0);
while (G__21358__i < G__21358__a.length) {G__21358__a[G__21358__i] = arguments[G__21358__i + 0]; ++G__21358__i;}
  args = new cljs.core.IndexedSeq(G__21358__a,0,null);
} 
return G__21357__delegate.call(this,args);};
G__21357.cljs$lang$maxFixedArity = 0;
G__21357.cljs$lang$applyTo = (function (arglist__21359){
var args = cljs.core.seq(arglist__21359);
return G__21357__delegate(args);
});
G__21357.cljs$core$IFn$_invoke$arity$variadic = G__21357__delegate;
return G__21357;
})()
:sketches.generative_desgin.P_02.P_2_3_4_01.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_4_01.draw))?(function() { 
var G__21360__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_4_01.draw,args);
};
var G__21360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21361__i = 0, G__21361__a = new Array(arguments.length -  0);
while (G__21361__i < G__21361__a.length) {G__21361__a[G__21361__i] = arguments[G__21361__i + 0]; ++G__21361__i;}
  args = new cljs.core.IndexedSeq(G__21361__a,0,null);
} 
return G__21360__delegate.call(this,args);};
G__21360.cljs$lang$maxFixedArity = 0;
G__21360.cljs$lang$applyTo = (function (arglist__21362){
var args = cljs.core.seq(arglist__21362);
return G__21360__delegate(args);
});
G__21360.cljs$core$IFn$_invoke$arity$variadic = G__21360__delegate;
return G__21360;
})()
:sketches.generative_desgin.P_02.P_2_3_4_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_3_4_01.dynamic_brushes', sketches.generative_desgin.P_02.P_2_3_4_01.dynamic_brushes);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_3_4_01.dynamic_brushes,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21363__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21364__i = 0, G__21364__a = new Array(arguments.length -  0);
while (G__21364__i < G__21364__a.length) {G__21364__a[G__21364__i] = arguments[G__21364__i + 0]; ++G__21364__i;}
  args = new cljs.core.IndexedSeq(G__21364__a,0,null);
} 
return G__21363__delegate.call(this,args);};
G__21363.cljs$lang$maxFixedArity = 0;
G__21363.cljs$lang$applyTo = (function (arglist__21365){
var args = cljs.core.seq(arglist__21365);
return G__21363__delegate(args);
});
G__21363.cljs$core$IFn$_invoke$arity$variadic = G__21363__delegate;
return G__21363;
})()
:host)], null));
}
});
