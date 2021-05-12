// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_01.P_1_2_1_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_01.P_1_2_1_01.shake_colors = (function sketches$generative_desgin$P_01$P_1_2_1_01$shake_colors(p__22677){
var map__22678 = p__22677;
var map__22678__$1 = ((((!((map__22678 == null)))?(((((map__22678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22678):map__22678);
var state = map__22678__$1;
var tile_count_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,cljs.core.cst$kw$tile_DASH_count_DASH_y);
var i = (0);
var state__$1 = state;
while(true){
var colors_added = cljs.core.assoc_in(cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colors_DASH_left,i], null),quil.core.color.cljs$core$IFn$_invoke$arity$3(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(60)),quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(100)),(100))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colors_DASH_right,i], null),quil.core.color.cljs$core$IFn$_invoke$arity$3(quil.core.random.cljs$core$IFn$_invoke$arity$2((160),(190)),(100),quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(100))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,tile_count_y)){
return colors_added;
} else {
var G__22680 = (i + (1));
var G__22681 = colors_added;
i = G__22680;
state__$1 = G__22681;
continue;
}
break;
}
});
sketches.generative_desgin.P_01.P_1_2_1_01.setup = (function sketches$generative_desgin$P_01$P_1_2_1_01$setup(){
quil.core.no_stroke();

return sketches.generative_desgin.P_01.P_1_2_1_01.shake_colors(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tile_DASH_count_DASH_x,(2),cljs.core.cst$kw$tile_DASH_count_DASH_y,(10),cljs.core.cst$kw$colors_DASH_left,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$colors_DASH_right,cljs.core.PersistentVector.EMPTY], null));
});
sketches.generative_desgin.P_01.P_1_2_1_01.update_state = (function sketches$generative_desgin$P_01$P_1_2_1_01$update_state(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tile_DASH_count_DASH_x,(quil.core.map_range(quil.core.mouse_x(),(0),quil.core.width(),(2),(100)) | (0))),cljs.core.cst$kw$tile_DASH_count_DASH_y,(quil.core.map_range(quil.core.mouse_y(),(0),quil.core.height(),(2),(10)) | (0)));
});
sketches.generative_desgin.P_01.P_1_2_1_01.draw = (function sketches$generative_desgin$P_01$P_1_2_1_01$draw(p__22682){
var map__22683 = p__22682;
var map__22683__$1 = ((((!((map__22683 == null)))?(((((map__22683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22683):map__22683);
var tile_count_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.cst$kw$tile_DASH_count_DASH_x);
var tile_count_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.cst$kw$tile_DASH_count_DASH_y);
var colors_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.cst$kw$colors_DASH_left);
var colors_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.cst$kw$colors_DASH_right);
var tile_width = (quil.core.width() / tile_count_x);
var tile_height = (quil.core.height() / tile_count_y);
var seq__22685 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),tile_count_y));
var chunk__22686 = null;
var count__22687 = (0);
var i__22688 = (0);
while(true){
if((i__22688 < count__22687)){
var grid_y = chunk__22686.cljs$core$IIndexed$_nth$arity$2(null,i__22688);
var col1_22697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors_left,grid_y);
var col2_22698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors_right,grid_y);
var seq__22689_22699 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),tile_count_x));
var chunk__22690_22700 = null;
var count__22691_22701 = (0);
var i__22692_22702 = (0);
while(true){
if((i__22692_22702 < count__22691_22701)){
var grid_x_22703 = chunk__22690_22700.cljs$core$IIndexed$_nth$arity$2(null,i__22692_22702);
var amount_22704 = quil.core.map_range(grid_x_22703,(0),(tile_count_x - (1)),(0),(1));
var intercol_22705 = quil.core.lerp_color(col1_22697,col2_22698,amount_22704);
var pos_x_22706 = (tile_width * grid_x_22703);
var pos_y_22707 = (tile_height * grid_y);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(intercol_22705);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_22706,pos_y_22707,tile_width,tile_height);


var G__22708 = seq__22689_22699;
var G__22709 = chunk__22690_22700;
var G__22710 = count__22691_22701;
var G__22711 = (i__22692_22702 + (1));
seq__22689_22699 = G__22708;
chunk__22690_22700 = G__22709;
count__22691_22701 = G__22710;
i__22692_22702 = G__22711;
continue;
} else {
var temp__5735__auto___22712 = cljs.core.seq(seq__22689_22699);
if(temp__5735__auto___22712){
var seq__22689_22713__$1 = temp__5735__auto___22712;
if(cljs.core.chunked_seq_QMARK_(seq__22689_22713__$1)){
var c__4351__auto___22714 = cljs.core.chunk_first(seq__22689_22713__$1);
var G__22715 = cljs.core.chunk_rest(seq__22689_22713__$1);
var G__22716 = c__4351__auto___22714;
var G__22717 = cljs.core.count(c__4351__auto___22714);
var G__22718 = (0);
seq__22689_22699 = G__22715;
chunk__22690_22700 = G__22716;
count__22691_22701 = G__22717;
i__22692_22702 = G__22718;
continue;
} else {
var grid_x_22719 = cljs.core.first(seq__22689_22713__$1);
var amount_22720 = quil.core.map_range(grid_x_22719,(0),(tile_count_x - (1)),(0),(1));
var intercol_22721 = quil.core.lerp_color(col1_22697,col2_22698,amount_22720);
var pos_x_22722 = (tile_width * grid_x_22719);
var pos_y_22723 = (tile_height * grid_y);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(intercol_22721);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_22722,pos_y_22723,tile_width,tile_height);


var G__22724 = cljs.core.next(seq__22689_22713__$1);
var G__22725 = null;
var G__22726 = (0);
var G__22727 = (0);
seq__22689_22699 = G__22724;
chunk__22690_22700 = G__22725;
count__22691_22701 = G__22726;
i__22692_22702 = G__22727;
continue;
}
} else {
}
}
break;
}


var G__22728 = seq__22685;
var G__22729 = chunk__22686;
var G__22730 = count__22687;
var G__22731 = (i__22688 + (1));
seq__22685 = G__22728;
chunk__22686 = G__22729;
count__22687 = G__22730;
i__22688 = G__22731;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22685);
if(temp__5735__auto__){
var seq__22685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22685__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22685__$1);
var G__22732 = cljs.core.chunk_rest(seq__22685__$1);
var G__22733 = c__4351__auto__;
var G__22734 = cljs.core.count(c__4351__auto__);
var G__22735 = (0);
seq__22685 = G__22732;
chunk__22686 = G__22733;
count__22687 = G__22734;
i__22688 = G__22735;
continue;
} else {
var grid_y = cljs.core.first(seq__22685__$1);
var col1_22736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors_left,grid_y);
var col2_22737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors_right,grid_y);
var seq__22693_22738 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),tile_count_x));
var chunk__22694_22739 = null;
var count__22695_22740 = (0);
var i__22696_22741 = (0);
while(true){
if((i__22696_22741 < count__22695_22740)){
var grid_x_22742 = chunk__22694_22739.cljs$core$IIndexed$_nth$arity$2(null,i__22696_22741);
var amount_22743 = quil.core.map_range(grid_x_22742,(0),(tile_count_x - (1)),(0),(1));
var intercol_22744 = quil.core.lerp_color(col1_22736,col2_22737,amount_22743);
var pos_x_22745 = (tile_width * grid_x_22742);
var pos_y_22746 = (tile_height * grid_y);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(intercol_22744);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_22745,pos_y_22746,tile_width,tile_height);


var G__22747 = seq__22693_22738;
var G__22748 = chunk__22694_22739;
var G__22749 = count__22695_22740;
var G__22750 = (i__22696_22741 + (1));
seq__22693_22738 = G__22747;
chunk__22694_22739 = G__22748;
count__22695_22740 = G__22749;
i__22696_22741 = G__22750;
continue;
} else {
var temp__5735__auto___22751__$1 = cljs.core.seq(seq__22693_22738);
if(temp__5735__auto___22751__$1){
var seq__22693_22752__$1 = temp__5735__auto___22751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22693_22752__$1)){
var c__4351__auto___22753 = cljs.core.chunk_first(seq__22693_22752__$1);
var G__22754 = cljs.core.chunk_rest(seq__22693_22752__$1);
var G__22755 = c__4351__auto___22753;
var G__22756 = cljs.core.count(c__4351__auto___22753);
var G__22757 = (0);
seq__22693_22738 = G__22754;
chunk__22694_22739 = G__22755;
count__22695_22740 = G__22756;
i__22696_22741 = G__22757;
continue;
} else {
var grid_x_22758 = cljs.core.first(seq__22693_22752__$1);
var amount_22759 = quil.core.map_range(grid_x_22758,(0),(tile_count_x - (1)),(0),(1));
var intercol_22760 = quil.core.lerp_color(col1_22736,col2_22737,amount_22759);
var pos_x_22761 = (tile_width * grid_x_22758);
var pos_y_22762 = (tile_height * grid_y);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(intercol_22760);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_22761,pos_y_22762,tile_width,tile_height);


var G__22763 = cljs.core.next(seq__22693_22752__$1);
var G__22764 = null;
var G__22765 = (0);
var G__22766 = (0);
seq__22693_22738 = G__22763;
chunk__22694_22739 = G__22764;
count__22695_22740 = G__22765;
i__22696_22741 = G__22766;
continue;
}
} else {
}
}
break;
}


var G__22767 = cljs.core.next(seq__22685__$1);
var G__22768 = null;
var G__22769 = (0);
var G__22770 = (0);
seq__22685 = G__22767;
chunk__22686 = G__22768;
count__22687 = G__22769;
i__22688 = G__22770;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_01.P_1_2_1_01.run = (function sketches$generative_desgin$P_01$P_1_2_1_01$run(host){
sketches.generative_desgin.P_01.P_1_2_1_01.palettes_interpolation = (function sketches$generative_desgin$P_01$P_1_2_1_01$run_$_palettes_interpolation(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22771__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22772__i = 0, G__22772__a = new Array(arguments.length -  0);
while (G__22772__i < G__22772__a.length) {G__22772__a[G__22772__i] = arguments[G__22772__i + 0]; ++G__22772__i;}
  args = new cljs.core.IndexedSeq(G__22772__a,0,null);
} 
return G__22771__delegate.call(this,args);};
G__22771.cljs$lang$maxFixedArity = 0;
G__22771.cljs$lang$applyTo = (function (arglist__22773){
var args = cljs.core.seq(arglist__22773);
return G__22771__delegate(args);
});
G__22771.cljs$core$IFn$_invoke$arity$variadic = G__22771__delegate;
return G__22771;
})()
:host),cljs.core.cst$kw$mouse_DASH_released,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_1_01.shake_colors))?(function() { 
var G__22774__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_1_01.shake_colors,args);
};
var G__22774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22775__i = 0, G__22775__a = new Array(arguments.length -  0);
while (G__22775__i < G__22775__a.length) {G__22775__a[G__22775__i] = arguments[G__22775__i + 0]; ++G__22775__i;}
  args = new cljs.core.IndexedSeq(G__22775__a,0,null);
} 
return G__22774__delegate.call(this,args);};
G__22774.cljs$lang$maxFixedArity = 0;
G__22774.cljs$lang$applyTo = (function (arglist__22776){
var args = cljs.core.seq(arglist__22776);
return G__22774__delegate(args);
});
G__22774.cljs$core$IFn$_invoke$arity$variadic = G__22774__delegate;
return G__22774;
})()
:sketches.generative_desgin.P_01.P_1_2_1_01.shake_colors),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_1_01.update_state))?(function() { 
var G__22777__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_1_01.update_state,args);
};
var G__22777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22778__i = 0, G__22778__a = new Array(arguments.length -  0);
while (G__22778__i < G__22778__a.length) {G__22778__a[G__22778__i] = arguments[G__22778__i + 0]; ++G__22778__i;}
  args = new cljs.core.IndexedSeq(G__22778__a,0,null);
} 
return G__22777__delegate.call(this,args);};
G__22777.cljs$lang$maxFixedArity = 0;
G__22777.cljs$lang$applyTo = (function (arglist__22779){
var args = cljs.core.seq(arglist__22779);
return G__22777__delegate(args);
});
G__22777.cljs$core$IFn$_invoke$arity$variadic = G__22777__delegate;
return G__22777;
})()
:sketches.generative_desgin.P_01.P_1_2_1_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_1_01.setup))?(function() { 
var G__22780__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_1_01.setup,args);
};
var G__22780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22781__i = 0, G__22781__a = new Array(arguments.length -  0);
while (G__22781__i < G__22781__a.length) {G__22781__a[G__22781__i] = arguments[G__22781__i + 0]; ++G__22781__i;}
  args = new cljs.core.IndexedSeq(G__22781__a,0,null);
} 
return G__22780__delegate.call(this,args);};
G__22780.cljs$lang$maxFixedArity = 0;
G__22780.cljs$lang$applyTo = (function (arglist__22782){
var args = cljs.core.seq(arglist__22782);
return G__22780__delegate(args);
});
G__22780.cljs$core$IFn$_invoke$arity$variadic = G__22780__delegate;
return G__22780;
})()
:sketches.generative_desgin.P_01.P_1_2_1_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_1_01.draw))?(function() { 
var G__22783__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_1_01.draw,args);
};
var G__22783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22784__i = 0, G__22784__a = new Array(arguments.length -  0);
while (G__22784__i < G__22784__a.length) {G__22784__a[G__22784__i] = arguments[G__22784__i + 0]; ++G__22784__i;}
  args = new cljs.core.IndexedSeq(G__22784__a,0,null);
} 
return G__22783__delegate.call(this,args);};
G__22783.cljs$lang$maxFixedArity = 0;
G__22783.cljs$lang$applyTo = (function (arglist__22785){
var args = cljs.core.seq(arglist__22785);
return G__22783__delegate(args);
});
G__22783.cljs$core$IFn$_invoke$arity$variadic = G__22783__delegate;
return G__22783;
})()
:sketches.generative_desgin.P_01.P_1_2_1_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_01.P_1_2_1_01.palettes_interpolation', sketches.generative_desgin.P_01.P_1_2_1_01.palettes_interpolation);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_01.P_1_2_1_01.palettes_interpolation,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22786__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22787__i = 0, G__22787__a = new Array(arguments.length -  0);
while (G__22787__i < G__22787__a.length) {G__22787__a[G__22787__i] = arguments[G__22787__i + 0]; ++G__22787__i;}
  args = new cljs.core.IndexedSeq(G__22787__a,0,null);
} 
return G__22786__delegate.call(this,args);};
G__22786.cljs$lang$maxFixedArity = 0;
G__22786.cljs$lang$applyTo = (function (arglist__22788){
var args = cljs.core.seq(arglist__22788);
return G__22786__delegate(args);
});
G__22786.cljs$core$IFn$_invoke$arity$variadic = G__22786__delegate;
return G__22786;
})()
:host)], null));
}
});
