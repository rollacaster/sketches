// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_3_6_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_3_6_01.tile_size = (30);
sketches.generative_desgin.P_02.P_2_3_6_01.setup = (function sketches$generative_desgin$P_02$P_2_3_6_01$setup(){
quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.image_mode(cljs.core.cst$kw$center);

quil.core.stroke_weight(0.15);

quil.core.text_size((8));

quil.core.text_align.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$center,cljs.core.cst$kw$center);

var grid_resolution_x = ((function (){var G__14695 = (quil.core.width() / sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
return Math.round(G__14695);
})() + (2));
var grid_resolution_y = ((function (){var G__14696 = (quil.core.height() / sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
return Math.round(G__14696);
})() + (2));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$grid_DASH_resolution_DASH_x,grid_resolution_x,cljs.core.cst$kw$grid_DASH_resolution_DASH_y,grid_resolution_y,cljs.core.cst$kw$tiles,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(grid_resolution_y,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(grid_resolution_x,(0))))),cljs.core.cst$kw$modules,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (grid_resolution_x,grid_resolution_y){
return (function (p1__14694_SHARP_){
return quil.core.load_image(["images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14694_SHARP_)].join('').padStart((2),"0")),".svg"].join(''));
});})(grid_resolution_x,grid_resolution_y))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))], null);
});
sketches.generative_desgin.P_02.P_2_3_6_01.update_state = (function sketches$generative_desgin$P_02$P_2_3_6_01$update_state(p__14697){
var map__14698 = p__14697;
var map__14698__$1 = ((((!((map__14698 == null)))?(((((map__14698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14698):map__14698);
var state = map__14698__$1;
var grid_resolution_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,cljs.core.cst$kw$grid_DASH_resolution_DASH_x);
var grid_resolution_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,cljs.core.cst$kw$grid_DASH_resolution_DASH_y);
if(cljs.core.truth_((function (){var and__3938__auto__ = quil.core.mouse_pressed_QMARK_();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.mouse_button(),cljs.core.cst$kw$left);
} else {
return and__3938__auto__;
}
})())){
var x = (quil.core.floor((quil.core.mouse_x() / sketches.generative_desgin.P_02.P_2_3_6_01.tile_size)) + (1));
var grid_x = quil.core.constrain(x,(1),(grid_resolution_x - (2)));
var y = (quil.core.floor((quil.core.mouse_y() / sketches.generative_desgin.P_02.P_2_3_6_01.tile_size)) + (1));
var grid_y = quil.core.constrain(y,(1),(grid_resolution_y - (2)));
var G__14700 = quil.core.mouse_button();
var G__14700__$1 = (((G__14700 instanceof cljs.core.Keyword))?G__14700.fqn:null);
switch (G__14700__$1) {
case "left":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,cljs.core.cst$kw$tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_x,grid_y], null),(1));

break;
case "right":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,cljs.core.cst$kw$tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_x,grid_y], null),(0));

break;
default:
return state;

}
} else {
return state;
}
});
sketches.generative_desgin.P_02.P_2_3_6_01.draw = (function sketches$generative_desgin$P_02$P_2_3_6_01$draw(p__14702){
var map__14703 = p__14702;
var map__14703__$1 = ((((!((map__14703 == null)))?(((((map__14703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14703):map__14703);
var grid_resolution_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,cljs.core.cst$kw$grid_DASH_resolution_DASH_x);
var grid_resolution_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,cljs.core.cst$kw$grid_DASH_resolution_DASH_y);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,cljs.core.cst$kw$tiles);
var modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,cljs.core.cst$kw$modules);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__14705 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_resolution_x));
var chunk__14710 = null;
var count__14711 = (0);
var i__14712 = (0);
while(true){
if((i__14712 < count__14711)){
var grid_x = chunk__14710.cljs$core$IIndexed$_nth$arity$2(null,i__14712);
var seq__14713_14717 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_resolution_y));
var chunk__14714_14718 = null;
var count__14715_14719 = (0);
var i__14716_14720 = (0);
while(true){
if((i__14716_14720 < count__14715_14719)){
var grid_y_14721 = chunk__14714_14718.cljs$core$IIndexed$_nth$arity$2(null,i__14716_14720);
var pos_x_14722 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_x) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
var pos_y_14723 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_y_14721) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),grid_y_14721),(1))){
var north_14724 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14721 - (1))))].join('');
var west_14725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x - (1))),grid_y_14721);
var south_14726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14721 + (1)));
var east_14727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x + (1))),grid_y_14721);
var binary_result_14728 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(north_14724),cljs.core.str.cljs$core$IFn$_invoke$arity$1(west_14725),cljs.core.str.cljs$core$IFn$_invoke$arity$1(south_14726),cljs.core.str.cljs$core$IFn$_invoke$arity$1(east_14727)].join('');
var decimal_result_14729 = window.parseInt(binary_result_14728,(2));
quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(modules,decimal_result_14729),pos_x_14722,pos_y_14723,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
} else {
}


var G__14730 = seq__14713_14717;
var G__14731 = chunk__14714_14718;
var G__14732 = count__14715_14719;
var G__14733 = (i__14716_14720 + (1));
seq__14713_14717 = G__14730;
chunk__14714_14718 = G__14731;
count__14715_14719 = G__14732;
i__14716_14720 = G__14733;
continue;
} else {
var temp__5735__auto___14734 = cljs.core.seq(seq__14713_14717);
if(temp__5735__auto___14734){
var seq__14713_14735__$1 = temp__5735__auto___14734;
if(cljs.core.chunked_seq_QMARK_(seq__14713_14735__$1)){
var c__4351__auto___14736 = cljs.core.chunk_first(seq__14713_14735__$1);
var G__14737 = cljs.core.chunk_rest(seq__14713_14735__$1);
var G__14738 = c__4351__auto___14736;
var G__14739 = cljs.core.count(c__4351__auto___14736);
var G__14740 = (0);
seq__14713_14717 = G__14737;
chunk__14714_14718 = G__14738;
count__14715_14719 = G__14739;
i__14716_14720 = G__14740;
continue;
} else {
var grid_y_14741 = cljs.core.first(seq__14713_14735__$1);
var pos_x_14742 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_x) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
var pos_y_14743 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_y_14741) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),grid_y_14741),(1))){
var north_14744 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14741 - (1))))].join('');
var west_14745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x - (1))),grid_y_14741);
var south_14746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14741 + (1)));
var east_14747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x + (1))),grid_y_14741);
var binary_result_14748 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(north_14744),cljs.core.str.cljs$core$IFn$_invoke$arity$1(west_14745),cljs.core.str.cljs$core$IFn$_invoke$arity$1(south_14746),cljs.core.str.cljs$core$IFn$_invoke$arity$1(east_14747)].join('');
var decimal_result_14749 = window.parseInt(binary_result_14748,(2));
quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(modules,decimal_result_14749),pos_x_14742,pos_y_14743,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
} else {
}


var G__14750 = cljs.core.next(seq__14713_14735__$1);
var G__14751 = null;
var G__14752 = (0);
var G__14753 = (0);
seq__14713_14717 = G__14750;
chunk__14714_14718 = G__14751;
count__14715_14719 = G__14752;
i__14716_14720 = G__14753;
continue;
}
} else {
}
}
break;
}

var G__14754 = seq__14705;
var G__14755 = chunk__14710;
var G__14756 = count__14711;
var G__14757 = (i__14712 + (1));
seq__14705 = G__14754;
chunk__14710 = G__14755;
count__14711 = G__14756;
i__14712 = G__14757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14705);
if(temp__5735__auto__){
var seq__14705__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14705__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14705__$1);
var G__14758 = cljs.core.chunk_rest(seq__14705__$1);
var G__14759 = c__4351__auto__;
var G__14760 = cljs.core.count(c__4351__auto__);
var G__14761 = (0);
seq__14705 = G__14758;
chunk__14710 = G__14759;
count__14711 = G__14760;
i__14712 = G__14761;
continue;
} else {
var grid_x = cljs.core.first(seq__14705__$1);
var seq__14706_14762 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_resolution_y));
var chunk__14707_14763 = null;
var count__14708_14764 = (0);
var i__14709_14765 = (0);
while(true){
if((i__14709_14765 < count__14708_14764)){
var grid_y_14766 = chunk__14707_14763.cljs$core$IIndexed$_nth$arity$2(null,i__14709_14765);
var pos_x_14767 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_x) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
var pos_y_14768 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_y_14766) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),grid_y_14766),(1))){
var north_14769 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14766 - (1))))].join('');
var west_14770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x - (1))),grid_y_14766);
var south_14771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14766 + (1)));
var east_14772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x + (1))),grid_y_14766);
var binary_result_14773 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(north_14769),cljs.core.str.cljs$core$IFn$_invoke$arity$1(west_14770),cljs.core.str.cljs$core$IFn$_invoke$arity$1(south_14771),cljs.core.str.cljs$core$IFn$_invoke$arity$1(east_14772)].join('');
var decimal_result_14774 = window.parseInt(binary_result_14773,(2));
quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(modules,decimal_result_14774),pos_x_14767,pos_y_14768,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
} else {
}


var G__14775 = seq__14706_14762;
var G__14776 = chunk__14707_14763;
var G__14777 = count__14708_14764;
var G__14778 = (i__14709_14765 + (1));
seq__14706_14762 = G__14775;
chunk__14707_14763 = G__14776;
count__14708_14764 = G__14777;
i__14709_14765 = G__14778;
continue;
} else {
var temp__5735__auto___14779__$1 = cljs.core.seq(seq__14706_14762);
if(temp__5735__auto___14779__$1){
var seq__14706_14780__$1 = temp__5735__auto___14779__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14706_14780__$1)){
var c__4351__auto___14781 = cljs.core.chunk_first(seq__14706_14780__$1);
var G__14782 = cljs.core.chunk_rest(seq__14706_14780__$1);
var G__14783 = c__4351__auto___14781;
var G__14784 = cljs.core.count(c__4351__auto___14781);
var G__14785 = (0);
seq__14706_14762 = G__14782;
chunk__14707_14763 = G__14783;
count__14708_14764 = G__14784;
i__14709_14765 = G__14785;
continue;
} else {
var grid_y_14786 = cljs.core.first(seq__14706_14780__$1);
var pos_x_14787 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_x) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
var pos_y_14788 = ((sketches.generative_desgin.P_02.P_2_3_6_01.tile_size * grid_y_14786) - (sketches.generative_desgin.P_02.P_2_3_6_01.tile_size / (2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),grid_y_14786),(1))){
var north_14789 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14786 - (1))))].join('');
var west_14790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x - (1))),grid_y_14786);
var south_14791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,grid_x),(grid_y_14786 + (1)));
var east_14792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,(grid_x + (1))),grid_y_14786);
var binary_result_14793 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(north_14789),cljs.core.str.cljs$core$IFn$_invoke$arity$1(west_14790),cljs.core.str.cljs$core$IFn$_invoke$arity$1(south_14791),cljs.core.str.cljs$core$IFn$_invoke$arity$1(east_14792)].join('');
var decimal_result_14794 = window.parseInt(binary_result_14793,(2));
quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(modules,decimal_result_14794),pos_x_14787,pos_y_14788,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size,sketches.generative_desgin.P_02.P_2_3_6_01.tile_size);
} else {
}


var G__14795 = cljs.core.next(seq__14706_14780__$1);
var G__14796 = null;
var G__14797 = (0);
var G__14798 = (0);
seq__14706_14762 = G__14795;
chunk__14707_14763 = G__14796;
count__14708_14764 = G__14797;
i__14709_14765 = G__14798;
continue;
}
} else {
}
}
break;
}

var G__14799 = cljs.core.next(seq__14705__$1);
var G__14800 = null;
var G__14801 = (0);
var G__14802 = (0);
seq__14705 = G__14799;
chunk__14710 = G__14800;
count__14711 = G__14801;
i__14712 = G__14802;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_3_6_01.run = (function sketches$generative_desgin$P_02$P_2_3_6_01$run(host){
sketches.generative_desgin.P_02.P_2_3_6_01.complex_modules = (function sketches$generative_desgin$P_02$P_2_3_6_01$run_$_complex_modules(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__14803__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__14803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14804__i = 0, G__14804__a = new Array(arguments.length -  0);
while (G__14804__i < G__14804__a.length) {G__14804__a[G__14804__i] = arguments[G__14804__i + 0]; ++G__14804__i;}
  args = new cljs.core.IndexedSeq(G__14804__a,0,null);
} 
return G__14803__delegate.call(this,args);};
G__14803.cljs$lang$maxFixedArity = 0;
G__14803.cljs$lang$applyTo = (function (arglist__14805){
var args = cljs.core.seq(arglist__14805);
return G__14803__delegate(args);
});
G__14803.cljs$core$IFn$_invoke$arity$variadic = G__14803__delegate;
return G__14803;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_6_01.update_state))?(function() { 
var G__14806__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_6_01.update_state,args);
};
var G__14806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14807__i = 0, G__14807__a = new Array(arguments.length -  0);
while (G__14807__i < G__14807__a.length) {G__14807__a[G__14807__i] = arguments[G__14807__i + 0]; ++G__14807__i;}
  args = new cljs.core.IndexedSeq(G__14807__a,0,null);
} 
return G__14806__delegate.call(this,args);};
G__14806.cljs$lang$maxFixedArity = 0;
G__14806.cljs$lang$applyTo = (function (arglist__14808){
var args = cljs.core.seq(arglist__14808);
return G__14806__delegate(args);
});
G__14806.cljs$core$IFn$_invoke$arity$variadic = G__14806__delegate;
return G__14806;
})()
:sketches.generative_desgin.P_02.P_2_3_6_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_6_01.setup))?(function() { 
var G__14809__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_6_01.setup,args);
};
var G__14809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14810__i = 0, G__14810__a = new Array(arguments.length -  0);
while (G__14810__i < G__14810__a.length) {G__14810__a[G__14810__i] = arguments[G__14810__i + 0]; ++G__14810__i;}
  args = new cljs.core.IndexedSeq(G__14810__a,0,null);
} 
return G__14809__delegate.call(this,args);};
G__14809.cljs$lang$maxFixedArity = 0;
G__14809.cljs$lang$applyTo = (function (arglist__14811){
var args = cljs.core.seq(arglist__14811);
return G__14809__delegate(args);
});
G__14809.cljs$core$IFn$_invoke$arity$variadic = G__14809__delegate;
return G__14809;
})()
:sketches.generative_desgin.P_02.P_2_3_6_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_3_6_01.draw))?(function() { 
var G__14812__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_3_6_01.draw,args);
};
var G__14812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14813__i = 0, G__14813__a = new Array(arguments.length -  0);
while (G__14813__i < G__14813__a.length) {G__14813__a[G__14813__i] = arguments[G__14813__i + 0]; ++G__14813__i;}
  args = new cljs.core.IndexedSeq(G__14813__a,0,null);
} 
return G__14812__delegate.call(this,args);};
G__14812.cljs$lang$maxFixedArity = 0;
G__14812.cljs$lang$applyTo = (function (arglist__14814){
var args = cljs.core.seq(arglist__14814);
return G__14812__delegate(args);
});
G__14812.cljs$core$IFn$_invoke$arity$variadic = G__14812__delegate;
return G__14812;
})()
:sketches.generative_desgin.P_02.P_2_3_6_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_3_6_01.complex_modules', sketches.generative_desgin.P_02.P_2_3_6_01.complex_modules);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_3_6_01.complex_modules,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__14815__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__14815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14816__i = 0, G__14816__a = new Array(arguments.length -  0);
while (G__14816__i < G__14816__a.length) {G__14816__a[G__14816__i] = arguments[G__14816__i + 0]; ++G__14816__i;}
  args = new cljs.core.IndexedSeq(G__14816__a,0,null);
} 
return G__14815__delegate.call(this,args);};
G__14815.cljs$lang$maxFixedArity = 0;
G__14815.cljs$lang$applyTo = (function (arglist__14817){
var args = cljs.core.seq(arglist__14817);
return G__14815__delegate(args);
});
G__14815.cljs$core$IFn$_invoke$arity$variadic = G__14815__delegate;
return G__14815;
})()
:host)], null));
}
});
