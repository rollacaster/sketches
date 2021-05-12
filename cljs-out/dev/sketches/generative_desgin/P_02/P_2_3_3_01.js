// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_3_3_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_3_3_01.setup = (function sketches$generative_desgin$P_02$P_2_3_3_01$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var font = "Georgia";
quil.core.text_font.cljs$core$IFn$_invoke$arity$1(font);

quil.core.text_align.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$left);

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

var letters = "All the worlds a stage, and all the men and women merely players. They have their exits and their entrances.";
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$step_DASH_size,cljs.core.cst$kw$font_DASH_size_DASH_min,cljs.core.cst$kw$angle_DASH_distortion,cljs.core.cst$kw$new_DASH_letter,cljs.core.cst$kw$angle,cljs.core.cst$kw$font,cljs.core.cst$kw$counter,cljs.core.cst$kw$letters,cljs.core.cst$kw$x],[quil.core.mouse_y(),5.0,(3),0.0,cljs.core.first(letters),(0),font,(0),letters,quil.core.mouse_x()]);
});
sketches.generative_desgin.P_02.P_2_3_3_01.update_state = (function sketches$generative_desgin$P_02$P_2_3_3_01$update_state(p__23000){
var map__23001 = p__23000;
var map__23001__$1 = ((((!((map__23001 == null)))?(((((map__23001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23001):map__23001);
var state = map__23001__$1;
var letters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$letters);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$y);
var step_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$step_DASH_size);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$counter);
var font_size_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.cst$kw$font_DASH_size_DASH_min);
var d = quil.core.dist.cljs$core$IFn$_invoke$arity$4(x,y,quil.core.mouse_x(),quil.core.mouse_y());
quil.core.text_size((font_size_min + (d / (2))));

if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left)) && ((d > step_size)));
} else {
return and__3938__auto__;
}
})())){
var angle = quil.core.atan2((quil.core.mouse_y() - y),(quil.core.mouse_x() - x));
var counter__$1 = (((counter >= (cljs.core.count(letters) - (1))))?(0):(counter + (1)));
var new_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(letters,counter__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_letter], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$counter,counter__$1),cljs.core.cst$kw$angle,angle),cljs.core.cst$kw$x,((function (angle,counter__$1,new_letter,d,map__23001,map__23001__$1,state,letters,x,y,step_size,counter,font_size_min){
return (function (x__$1){
return (x__$1 + (quil.core.cos(angle) * step_size));
});})(angle,counter__$1,new_letter,d,map__23001,map__23001__$1,state,letters,x,y,step_size,counter,font_size_min))
),cljs.core.cst$kw$y,((function (angle,counter__$1,new_letter,d,map__23001,map__23001__$1,state,letters,x,y,step_size,counter,font_size_min){
return (function (y__$1){
return (y__$1 + (quil.core.sin(angle) * step_size));
});})(angle,counter__$1,new_letter,d,map__23001,map__23001__$1,state,letters,x,y,step_size,counter,font_size_min))
),cljs.core.cst$kw$step_DASH_size,quil.core.text_width(new_letter)),cljs.core.cst$kw$new_DASH_letter,new_letter);
} else {
return state;
}
});
sketches.generative_desgin.P_02.P_2_3_3_01.draw = (function sketches$generative_desgin$P_02$P_2_3_3_01$draw(p__23003){
var map__23004 = p__23003;
var map__23004__$1 = ((((!((map__23004 == null)))?(((((map__23004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23004):map__23004);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$y);
var font_size_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$font_DASH_size_DASH_min);
var angle_distortion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$angle_DASH_distortion);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$angle);
var new_letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$new_DASH_letter);
var step_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23004__$1,cljs.core.cst$kw$step_DASH_size);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
var d = quil.core.dist.cljs$core$IFn$_invoke$arity$4(x,y,quil.core.mouse_x(),quil.core.mouse_y());
quil.core.text_size((font_size_min + (d / (2))));

if((d > step_size)){
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((angle + quil.core.random.cljs$core$IFn$_invoke$arity$1(angle_distortion)));

quil.core.text.cljs$core$IFn$_invoke$arity$3(new_letter,(0),(0));

return quil.core.pop_matrix();
} else {
return null;
}
} else {
return null;
}
});
sketches.generative_desgin.P_02.P_2_3_3_01.mouse_pressed = (function sketches$generative_desgin$P_02$P_2_3_3_01$mouse_pressed(state,p__23006){
var map__23007 = p__23006;
var map__23007__$1 = ((((!((map__23007 == null)))?(((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23007):map__23007);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,cljs.core.cst$kw$y);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$x,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,y], 0));
});
sketches.generative_desgin.P_02.P_2_3_3_01.run = (function sketches$generative_desgin$P_02$P_2_3_3_01$run(host){
sketches.generative_desgin.P_02.P_2_3_3_01.type_drawing = (function sketches$generative_desgin$P_02$P_2_3_3_01$run_$_type_drawing(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23009__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23010__i = 0, G__23010__a = new Array(arguments.length -  0);
while (G__23010__i < G__23010__a.length) {G__23010__a[G__23010__i] = arguments[G__23010__i + 0]; ++G__23010__i;}
  args = new cljs.core.IndexedSeq(G__23010__a,0,null);
} 
return G__23009__delegate.call(this,args);};
G__23009.cljs$lang$maxFixedArity = 0;
G__23009.cljs$lang$applyTo = (function (arglist__23011){
var args = cljs.core.seq(arglist__23011);
return G__23009__delegate(args);
});
G__23009.cljs$core$IFn$_invoke$arity$variadic = G__23009__delegate;
return G__23009;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_3_01.update_state))?(function() { 
var G__23012__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_3_01.update_state,args);
};
var G__23012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23013__i = 0, G__23013__a = new Array(arguments.length -  0);
while (G__23013__i < G__23013__a.length) {G__23013__a[G__23013__i] = arguments[G__23013__i + 0]; ++G__23013__i;}
  args = new cljs.core.IndexedSeq(G__23013__a,0,null);
} 
return G__23012__delegate.call(this,args);};
G__23012.cljs$lang$maxFixedArity = 0;
G__23012.cljs$lang$applyTo = (function (arglist__23014){
var args = cljs.core.seq(arglist__23014);
return G__23012__delegate(args);
});
G__23012.cljs$core$IFn$_invoke$arity$variadic = G__23012__delegate;
return G__23012;
})()
:sketches.generative_desgin.P_02.P_2_3_3_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_3_01.setup))?(function() { 
var G__23015__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_3_01.setup,args);
};
var G__23015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23016__i = 0, G__23016__a = new Array(arguments.length -  0);
while (G__23016__i < G__23016__a.length) {G__23016__a[G__23016__i] = arguments[G__23016__i + 0]; ++G__23016__i;}
  args = new cljs.core.IndexedSeq(G__23016__a,0,null);
} 
return G__23015__delegate.call(this,args);};
G__23015.cljs$lang$maxFixedArity = 0;
G__23015.cljs$lang$applyTo = (function (arglist__23017){
var args = cljs.core.seq(arglist__23017);
return G__23015__delegate(args);
});
G__23015.cljs$core$IFn$_invoke$arity$variadic = G__23015__delegate;
return G__23015;
})()
:sketches.generative_desgin.P_02.P_2_3_3_01.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_3_01.mouse_pressed))?(function() { 
var G__23018__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_3_01.mouse_pressed,args);
};
var G__23018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23019__i = 0, G__23019__a = new Array(arguments.length -  0);
while (G__23019__i < G__23019__a.length) {G__23019__a[G__23019__i] = arguments[G__23019__i + 0]; ++G__23019__i;}
  args = new cljs.core.IndexedSeq(G__23019__a,0,null);
} 
return G__23018__delegate.call(this,args);};
G__23018.cljs$lang$maxFixedArity = 0;
G__23018.cljs$lang$applyTo = (function (arglist__23020){
var args = cljs.core.seq(arglist__23020);
return G__23018__delegate(args);
});
G__23018.cljs$core$IFn$_invoke$arity$variadic = G__23018__delegate;
return G__23018;
})()
:sketches.generative_desgin.P_02.P_2_3_3_01.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_3_01.draw))?(function() { 
var G__23021__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_3_01.draw,args);
};
var G__23021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23022__i = 0, G__23022__a = new Array(arguments.length -  0);
while (G__23022__i < G__23022__a.length) {G__23022__a[G__23022__i] = arguments[G__23022__i + 0]; ++G__23022__i;}
  args = new cljs.core.IndexedSeq(G__23022__a,0,null);
} 
return G__23021__delegate.call(this,args);};
G__23021.cljs$lang$maxFixedArity = 0;
G__23021.cljs$lang$applyTo = (function (arglist__23023){
var args = cljs.core.seq(arglist__23023);
return G__23021__delegate(args);
});
G__23021.cljs$core$IFn$_invoke$arity$variadic = G__23021__delegate;
return G__23021;
})()
:sketches.generative_desgin.P_02.P_2_3_3_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_3_3_01.type_drawing', sketches.generative_desgin.P_02.P_2_3_3_01.type_drawing);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_3_3_01.type_drawing,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23024__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23025__i = 0, G__23025__a = new Array(arguments.length -  0);
while (G__23025__i < G__23025__a.length) {G__23025__a[G__23025__i] = arguments[G__23025__i + 0]; ++G__23025__i;}
  args = new cljs.core.IndexedSeq(G__23025__a,0,null);
} 
return G__23024__delegate.call(this,args);};
G__23024.cljs$lang$maxFixedArity = 0;
G__23024.cljs$lang$applyTo = (function (arglist__23026){
var args = cljs.core.seq(arglist__23026);
return G__23024__delegate(args);
});
G__23024.cljs$core$IFn$_invoke$arity$variadic = G__23024__delegate;
return G__23024;
})()
:host)], null));
}
});
