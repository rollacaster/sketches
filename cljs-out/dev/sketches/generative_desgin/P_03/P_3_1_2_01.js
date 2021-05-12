// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_03.P_3_1_2_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_03.P_3_1_2_01.setup = (function sketches$generative_desgin$P_03$P_3_1_2_01$setup(){
var font = quil.core.load_font("fonts/miso-bold.ttf");
quil.core.text_font.cljs$core$IFn$_invoke$arity$2(font,(25));

quil.core.text_align.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,cljs.core.cst$kw$baseline);

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$shape_DASH_space2,cljs.core.cst$kw$zoom,cljs.core.cst$kw$shape_DASH_exlamationmark,cljs.core.cst$kw$center_DASH_y,cljs.core.cst$kw$shape_DASH_period,cljs.core.cst$kw$offset_DASH_y,cljs.core.cst$kw$shape_DASH_questionmark,cljs.core.cst$kw$shape_DASH_space,cljs.core.cst$kw$act_DASH_random_DASH_seed,cljs.core.cst$kw$font,cljs.core.cst$kw$center_DASH_x,cljs.core.cst$kw$offset_DASH_x,cljs.core.cst$kw$text_DASH_typed,cljs.core.cst$kw$shape_DASH_comma,cljs.core.cst$kw$shape_DASH_return],[quil.core.load_image("images/space2.svg"),0.75,quil.core.load_image("images/exclamationmark.svg"),(quil.core.height() / (2)),quil.core.load_image("images/period.svg"),(0),quil.core.load_image("images/questionmark.svg"),quil.core.load_image("images/space.svg"),(6),font,(quil.core.width() / (2)),(0),["Ich bin der Musikant mit Taschenrechner in der Hand!\n\n","Ich addiere\n","Kontrolliere\nUnd komponiere\nUnd wenn ich diese Taste dr\u00FCck,\nSpielt er ein kleines Musikst\u00FCck?\n\n","Ich bin der Musikant mit Taschenrechner in der Hand!\n\n","Ich addiere\n","Und subtrahiere, \n\n","Kontrolliere\nUnd komponiere\nUnd wenn ich diese Taste dr\u00FCck,\nSpielt er ein kleines Musikst\u00FCck?\n\n"].join(''),quil.core.load_image("images/comma.svg"),quil.core.load_image("images/return.svg")]);
});
sketches.generative_desgin.P_03.P_3_1_2_01.update_state = (function sketches$generative_desgin$P_03$P_3_1_2_01$update_state(p__21552){
var map__21553 = p__21552;
var map__21553__$1 = ((((!((map__21553 == null)))?(((((map__21553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21553):map__21553);
var state = map__21553__$1;
var act_random_seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21553__$1,cljs.core.cst$kw$act_DASH_random_DASH_seed);
quil.core.random_seed(act_random_seed);

return state;
});
sketches.generative_desgin.P_03.P_3_1_2_01.draw = (function sketches$generative_desgin$P_03$P_3_1_2_01$draw(p__21555){
var map__21556 = p__21555;
var map__21556__$1 = ((((!((map__21556 == null)))?(((((map__21556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21556):map__21556);
var shape_return = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_return);
var shape_space2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_space2);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$zoom);
var shape_exlamationmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_exlamationmark);
var shape_period = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_period);
var shape_questionmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_questionmark);
var shape_space = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_space);
var text_typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$text_DASH_typed);
var shape_comma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$shape_DASH_comma);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.scale.cljs$core$IFn$_invoke$arity$1(zoom);

var seq__21558 = cljs.core.seq(text_typed);
var chunk__21559 = null;
var count__21560 = (0);
var i__21561 = (0);
while(true){
if((i__21561 < count__21560)){
var letter = chunk__21559.cljs$core$IIndexed$_nth$arity$2(null,i__21561);
var letter_width_21564 = quil.core.text_width(letter);
var G__21562_21565 = letter;
switch (G__21562_21565) {
case " ":
var dir_21567 = quil.core.floor(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir_21567,(0))){
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_space,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((4),(1));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir_21567,(1))){
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_space2,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((14),(-5));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);
} else {
}
}

break;
case ",":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_comma,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((35),(15));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);

break;
case ".":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_period,(1),(-55));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((56),(-56));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case "!":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_exlamationmark,(1),(-27));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(42.5,-17.5);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.QUARTER_PI));

break;
case "?":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_questionmark,(1),(-27));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(42.5,-17.5);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.QUARTER_PI));

break;
case "\n":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_return,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((1),(10));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
quil.core.text.cljs$core$IFn$_invoke$arity$3(letter,(0),(0));

quil.core.translate.cljs$core$IFn$_invoke$arity$3(letter_width_21564,(0),(0));

}


var G__21568 = seq__21558;
var G__21569 = chunk__21559;
var G__21570 = count__21560;
var G__21571 = (i__21561 + (1));
seq__21558 = G__21568;
chunk__21559 = G__21569;
count__21560 = G__21570;
i__21561 = G__21571;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21558);
if(temp__5735__auto__){
var seq__21558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21558__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21558__$1);
var G__21572 = cljs.core.chunk_rest(seq__21558__$1);
var G__21573 = c__4351__auto__;
var G__21574 = cljs.core.count(c__4351__auto__);
var G__21575 = (0);
seq__21558 = G__21572;
chunk__21559 = G__21573;
count__21560 = G__21574;
i__21561 = G__21575;
continue;
} else {
var letter = cljs.core.first(seq__21558__$1);
var letter_width_21576 = quil.core.text_width(letter);
var G__21563_21577 = letter;
switch (G__21563_21577) {
case " ":
var dir_21579 = quil.core.floor(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir_21579,(0))){
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_space,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((4),(1));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir_21579,(1))){
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_space2,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((14),(-5));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);
} else {
}
}

break;
case ",":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_comma,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((35),(15));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.QUARTER_PI);

break;
case ".":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_period,(1),(-55));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((56),(-56));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case "!":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_exlamationmark,(1),(-27));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(42.5,-17.5);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.QUARTER_PI));

break;
case "?":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_questionmark,(1),(-27));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(42.5,-17.5);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.QUARTER_PI));

break;
case "\n":
quil.core.image.cljs$core$IFn$_invoke$arity$3(shape_return,(1),(-15));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((1),(10));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
quil.core.text.cljs$core$IFn$_invoke$arity$3(letter,(0),(0));

quil.core.translate.cljs$core$IFn$_invoke$arity$3(letter_width_21576,(0),(0));

}


var G__21580 = cljs.core.next(seq__21558__$1);
var G__21581 = null;
var G__21582 = (0);
var G__21583 = (0);
seq__21558 = G__21580;
chunk__21559 = G__21581;
count__21560 = G__21582;
i__21561 = G__21583;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_03.P_3_1_2_01.run = (function sketches$generative_desgin$P_03$P_3_1_2_01$run(host){
sketches.generative_desgin.P_03.P_3_1_2_01.blueprint = (function sketches$generative_desgin$P_03$P_3_1_2_01$run_$_blueprint(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21584__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21585__i = 0, G__21585__a = new Array(arguments.length -  0);
while (G__21585__i < G__21585__a.length) {G__21585__a[G__21585__i] = arguments[G__21585__i + 0]; ++G__21585__i;}
  args = new cljs.core.IndexedSeq(G__21585__a,0,null);
} 
return G__21584__delegate.call(this,args);};
G__21584.cljs$lang$maxFixedArity = 0;
G__21584.cljs$lang$applyTo = (function (arglist__21586){
var args = cljs.core.seq(arglist__21586);
return G__21584__delegate(args);
});
G__21584.cljs$core$IFn$_invoke$arity$variadic = G__21584__delegate;
return G__21584;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_2_01.update_state))?(function() { 
var G__21587__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_2_01.update_state,args);
};
var G__21587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21588__i = 0, G__21588__a = new Array(arguments.length -  0);
while (G__21588__i < G__21588__a.length) {G__21588__a[G__21588__i] = arguments[G__21588__i + 0]; ++G__21588__i;}
  args = new cljs.core.IndexedSeq(G__21588__a,0,null);
} 
return G__21587__delegate.call(this,args);};
G__21587.cljs$lang$maxFixedArity = 0;
G__21587.cljs$lang$applyTo = (function (arglist__21589){
var args = cljs.core.seq(arglist__21589);
return G__21587__delegate(args);
});
G__21587.cljs$core$IFn$_invoke$arity$variadic = G__21587__delegate;
return G__21587;
})()
:sketches.generative_desgin.P_03.P_3_1_2_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_2_01.setup))?(function() { 
var G__21590__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_2_01.setup,args);
};
var G__21590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21591__i = 0, G__21591__a = new Array(arguments.length -  0);
while (G__21591__i < G__21591__a.length) {G__21591__a[G__21591__i] = arguments[G__21591__i + 0]; ++G__21591__i;}
  args = new cljs.core.IndexedSeq(G__21591__a,0,null);
} 
return G__21590__delegate.call(this,args);};
G__21590.cljs$lang$maxFixedArity = 0;
G__21590.cljs$lang$applyTo = (function (arglist__21592){
var args = cljs.core.seq(arglist__21592);
return G__21590__delegate(args);
});
G__21590.cljs$core$IFn$_invoke$arity$variadic = G__21590__delegate;
return G__21590;
})()
:sketches.generative_desgin.P_03.P_3_1_2_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_2d], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_03.P_3_1_2_01.draw))?(function() { 
var G__21593__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_03.P_3_1_2_01.draw,args);
};
var G__21593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21594__i = 0, G__21594__a = new Array(arguments.length -  0);
while (G__21594__i < G__21594__a.length) {G__21594__a[G__21594__i] = arguments[G__21594__i + 0]; ++G__21594__i;}
  args = new cljs.core.IndexedSeq(G__21594__a,0,null);
} 
return G__21593__delegate.call(this,args);};
G__21593.cljs$lang$maxFixedArity = 0;
G__21593.cljs$lang$applyTo = (function (arglist__21595){
var args = cljs.core.seq(arglist__21595);
return G__21593__delegate(args);
});
G__21593.cljs$core$IFn$_invoke$arity$variadic = G__21593__delegate;
return G__21593;
})()
:sketches.generative_desgin.P_03.P_3_1_2_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_03.P_3_1_2_01.blueprint', sketches.generative_desgin.P_03.P_3_1_2_01.blueprint);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_03.P_3_1_2_01.blueprint,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21596__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21597__i = 0, G__21597__a = new Array(arguments.length -  0);
while (G__21597__i < G__21597__a.length) {G__21597__a[G__21597__i] = arguments[G__21597__i + 0]; ++G__21597__i;}
  args = new cljs.core.IndexedSeq(G__21597__a,0,null);
} 
return G__21596__delegate.call(this,args);};
G__21596.cljs$lang$maxFixedArity = 0;
G__21596.cljs$lang$applyTo = (function (arglist__21598){
var args = cljs.core.seq(arglist__21598);
return G__21596__delegate(args);
});
G__21596.cljs$core$IFn$_invoke$arity$variadic = G__21596__delegate;
return G__21596;
})()
:host)], null));
}
});
