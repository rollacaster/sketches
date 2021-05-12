// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_2_3_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution = (15);
sketches.generative_desgin.P_02.P_2_2_3_01.step_size = (2);
sketches.generative_desgin.P_02.P_2_2_3_01.distortion_factor = (1);
sketches.generative_desgin.P_02.P_2_2_3_01.init_radius = (15);
sketches.generative_desgin.P_02.P_2_2_3_01.setup = (function sketches$generative_desgin$P_02$P_2_2_3_01$setup(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),(50));

quil.core.stroke_weight(0.75);

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var angle = quil.core.radians(((360) / sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$center_DASH_x,(quil.core.width() / (2)),cljs.core.cst$kw$center_DASH_y,(quil.core.height() / (2)),cljs.core.cst$kw$x,(function (){var iter__4324__auto__ = ((function (angle){
return (function sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22595(s__22596){
return (new cljs.core.LazySeq(null,((function (angle){
return (function (){
var s__22596__$1 = s__22596;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22596__$1);
if(temp__5735__auto__){
var s__22596__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22596__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22596__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22598 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22597 = (0);
while(true){
if((i__22597 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22597);
cljs.core.chunk_append(b__22598,(quil.core.cos((angle * i)) * sketches.generative_desgin.P_02.P_2_2_3_01.init_radius));

var G__22603 = (i__22597 + (1));
i__22597 = G__22603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22598),sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22595(cljs.core.chunk_rest(s__22596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22598),null);
}
} else {
var i = cljs.core.first(s__22596__$2);
return cljs.core.cons((quil.core.cos((angle * i)) * sketches.generative_desgin.P_02.P_2_2_3_01.init_radius),sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22595(cljs.core.rest(s__22596__$2)));
}
} else {
return null;
}
break;
}
});})(angle))
,null,null));
});})(angle))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
})(),cljs.core.cst$kw$y,(function (){var iter__4324__auto__ = ((function (angle){
return (function sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22599(s__22600){
return (new cljs.core.LazySeq(null,((function (angle){
return (function (){
var s__22600__$1 = s__22600;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22600__$1);
if(temp__5735__auto__){
var s__22600__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22600__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22600__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22602 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22601 = (0);
while(true){
if((i__22601 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22601);
cljs.core.chunk_append(b__22602,(quil.core.sin((angle * i)) * sketches.generative_desgin.P_02.P_2_2_3_01.init_radius));

var G__22604 = (i__22601 + (1));
i__22601 = G__22604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22602),sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22599(cljs.core.chunk_rest(s__22600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22602),null);
}
} else {
var i = cljs.core.first(s__22600__$2);
return cljs.core.cons((quil.core.sin((angle * i)) * sketches.generative_desgin.P_02.P_2_2_3_01.init_radius),sketches$generative_desgin$P_02$P_2_2_3_01$setup_$_iter__22599(cljs.core.rest(s__22600__$2)));
}
} else {
return null;
}
break;
}
});})(angle))
,null,null));
});})(angle))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
})()], null);
});
sketches.generative_desgin.P_02.P_2_2_3_01.update_state = (function sketches$generative_desgin$P_02$P_2_2_3_01$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$center_DASH_x,(function (p1__22605_SHARP_){
return (p1__22605_SHARP_ + ((quil.core.mouse_x() - p1__22605_SHARP_) * 0.01));
})),cljs.core.cst$kw$center_DASH_y,(function (p1__22606_SHARP_){
return (p1__22606_SHARP_ + ((quil.core.mouse_y() - p1__22606_SHARP_) * 0.01));
})),cljs.core.cst$kw$x,(function (p1__22607_SHARP_){
var iter__4324__auto__ = (function sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22609(s__22610){
return (new cljs.core.LazySeq(null,(function (){
var s__22610__$1 = s__22610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22610__$1);
if(temp__5735__auto__){
var s__22610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22610__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22610__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22612 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22611 = (0);
while(true){
if((i__22611 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22611);
cljs.core.chunk_append(b__22612,(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22607_SHARP_,i) + quil.core.random.cljs$core$IFn$_invoke$arity$2((- sketches.generative_desgin.P_02.P_2_2_3_01.step_size),sketches.generative_desgin.P_02.P_2_2_3_01.step_size)));

var G__22617 = (i__22611 + (1));
i__22611 = G__22617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22612),sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22609(cljs.core.chunk_rest(s__22610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22612),null);
}
} else {
var i = cljs.core.first(s__22610__$2);
return cljs.core.cons((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22607_SHARP_,i) + quil.core.random.cljs$core$IFn$_invoke$arity$2((- sketches.generative_desgin.P_02.P_2_2_3_01.step_size),sketches.generative_desgin.P_02.P_2_2_3_01.step_size)),sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22609(cljs.core.rest(s__22610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
})),cljs.core.cst$kw$y,(function (p1__22608_SHARP_){
var iter__4324__auto__ = (function sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22613(s__22614){
return (new cljs.core.LazySeq(null,(function (){
var s__22614__$1 = s__22614;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22614__$1);
if(temp__5735__auto__){
var s__22614__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22614__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22614__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22616 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22615 = (0);
while(true){
if((i__22615 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22615);
cljs.core.chunk_append(b__22616,(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22608_SHARP_,i) + quil.core.random.cljs$core$IFn$_invoke$arity$2((- sketches.generative_desgin.P_02.P_2_2_3_01.step_size),sketches.generative_desgin.P_02.P_2_2_3_01.step_size)));

var G__22618 = (i__22615 + (1));
i__22615 = G__22618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22616),sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22613(cljs.core.chunk_rest(s__22614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22616),null);
}
} else {
var i = cljs.core.first(s__22614__$2);
return cljs.core.cons((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22608_SHARP_,i) + quil.core.random.cljs$core$IFn$_invoke$arity$2((- sketches.generative_desgin.P_02.P_2_2_3_01.step_size),sketches.generative_desgin.P_02.P_2_2_3_01.step_size)),sketches$generative_desgin$P_02$P_2_2_3_01$update_state_$_iter__22613(cljs.core.rest(s__22614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
}));
});
sketches.generative_desgin.P_02.P_2_2_3_01.draw = (function sketches$generative_desgin$P_02$P_2_2_3_01$draw(p__22619){
var map__22620 = p__22619;
var map__22620__$1 = ((((!((map__22620 == null)))?(((((map__22620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22620):map__22620);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$y);
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$center_DASH_x);
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$center_DASH_y);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution - (1))) + center_x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,(sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution - (1))) + center_y));

var seq__22622_22626 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
var chunk__22623_22627 = null;
var count__22624_22628 = (0);
var i__22625_22629 = (0);
while(true){
if((i__22625_22629 < count__22624_22628)){
var i_22630 = chunk__22623_22627.cljs$core$IIndexed$_nth$arity$2(null,i__22625_22629);
quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i_22630) + center_x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,i_22630) + center_y));


var G__22631 = seq__22622_22626;
var G__22632 = chunk__22623_22627;
var G__22633 = count__22624_22628;
var G__22634 = (i__22625_22629 + (1));
seq__22622_22626 = G__22631;
chunk__22623_22627 = G__22632;
count__22624_22628 = G__22633;
i__22625_22629 = G__22634;
continue;
} else {
var temp__5735__auto___22635 = cljs.core.seq(seq__22622_22626);
if(temp__5735__auto___22635){
var seq__22622_22636__$1 = temp__5735__auto___22635;
if(cljs.core.chunked_seq_QMARK_(seq__22622_22636__$1)){
var c__4351__auto___22637 = cljs.core.chunk_first(seq__22622_22636__$1);
var G__22638 = cljs.core.chunk_rest(seq__22622_22636__$1);
var G__22639 = c__4351__auto___22637;
var G__22640 = cljs.core.count(c__4351__auto___22637);
var G__22641 = (0);
seq__22622_22626 = G__22638;
chunk__22623_22627 = G__22639;
count__22624_22628 = G__22640;
i__22625_22629 = G__22641;
continue;
} else {
var i_22642 = cljs.core.first(seq__22622_22636__$1);
quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i_22642) + center_x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,i_22642) + center_y));


var G__22643 = cljs.core.next(seq__22622_22636__$1);
var G__22644 = null;
var G__22645 = (0);
var G__22646 = (0);
seq__22622_22626 = G__22643;
chunk__22623_22627 = G__22644;
count__22624_22628 = G__22645;
i__22625_22629 = G__22646;
continue;
}
} else {
}
}
break;
}

quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) + center_x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,(0)) + center_y));

quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1)) + center_x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y,(1)) + center_y));

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();
});
sketches.generative_desgin.P_02.P_2_2_3_01.mouse_pressed = (function sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed(){
var angle = quil.core.radians(((360) / sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
var radius = (sketches.generative_desgin.P_02.P_2_2_3_01.init_radius * quil.core.random.cljs$core$IFn$_invoke$arity$2(0.5,(1)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$center_DASH_x,quil.core.mouse_x(),cljs.core.cst$kw$center_DASH_y,quil.core.mouse_y(),cljs.core.cst$kw$x,(function (){var iter__4324__auto__ = ((function (angle,radius){
return (function sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22647(s__22648){
return (new cljs.core.LazySeq(null,((function (angle,radius){
return (function (){
var s__22648__$1 = s__22648;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22648__$1);
if(temp__5735__auto__){
var s__22648__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22648__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22648__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22650 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22649 = (0);
while(true){
if((i__22649 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22649);
cljs.core.chunk_append(b__22650,(quil.core.cos((angle * i)) * radius));

var G__22655 = (i__22649 + (1));
i__22649 = G__22655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22650),sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22647(cljs.core.chunk_rest(s__22648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22650),null);
}
} else {
var i = cljs.core.first(s__22648__$2);
return cljs.core.cons((quil.core.cos((angle * i)) * radius),sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22647(cljs.core.rest(s__22648__$2)));
}
} else {
return null;
}
break;
}
});})(angle,radius))
,null,null));
});})(angle,radius))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
})(),cljs.core.cst$kw$y,(function (){var iter__4324__auto__ = ((function (angle,radius){
return (function sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22651(s__22652){
return (new cljs.core.LazySeq(null,((function (angle,radius){
return (function (){
var s__22652__$1 = s__22652;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22652__$1);
if(temp__5735__auto__){
var s__22652__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22652__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22652__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22654 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22653 = (0);
while(true){
if((i__22653 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22653);
cljs.core.chunk_append(b__22654,(quil.core.sin((angle * i)) * radius));

var G__22656 = (i__22653 + (1));
i__22653 = G__22656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22651(cljs.core.chunk_rest(s__22652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),null);
}
} else {
var i = cljs.core.first(s__22652__$2);
return cljs.core.cons((quil.core.sin((angle * i)) * radius),sketches$generative_desgin$P_02$P_2_2_3_01$mouse_pressed_$_iter__22651(cljs.core.rest(s__22652__$2)));
}
} else {
return null;
}
break;
}
});})(angle,radius))
,null,null));
});})(angle,radius))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_2_3_01.form_resolution));
})()], null);
});
sketches.generative_desgin.P_02.P_2_2_3_01.run = (function sketches$generative_desgin$P_02$P_2_2_3_01$run(host){
sketches.generative_desgin.P_02.P_2_2_3_01.shapes_from_agent = (function sketches$generative_desgin$P_02$P_2_2_3_01$run_$_shapes_from_agent(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22657__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22658__i = 0, G__22658__a = new Array(arguments.length -  0);
while (G__22658__i < G__22658__a.length) {G__22658__a[G__22658__i] = arguments[G__22658__i + 0]; ++G__22658__i;}
  args = new cljs.core.IndexedSeq(G__22658__a,0,null);
} 
return G__22657__delegate.call(this,args);};
G__22657.cljs$lang$maxFixedArity = 0;
G__22657.cljs$lang$applyTo = (function (arglist__22659){
var args = cljs.core.seq(arglist__22659);
return G__22657__delegate(args);
});
G__22657.cljs$core$IFn$_invoke$arity$variadic = G__22657__delegate;
return G__22657;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_3_01.update_state))?(function() { 
var G__22660__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_3_01.update_state,args);
};
var G__22660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22661__i = 0, G__22661__a = new Array(arguments.length -  0);
while (G__22661__i < G__22661__a.length) {G__22661__a[G__22661__i] = arguments[G__22661__i + 0]; ++G__22661__i;}
  args = new cljs.core.IndexedSeq(G__22661__a,0,null);
} 
return G__22660__delegate.call(this,args);};
G__22660.cljs$lang$maxFixedArity = 0;
G__22660.cljs$lang$applyTo = (function (arglist__22662){
var args = cljs.core.seq(arglist__22662);
return G__22660__delegate(args);
});
G__22660.cljs$core$IFn$_invoke$arity$variadic = G__22660__delegate;
return G__22660;
})()
:sketches.generative_desgin.P_02.P_2_2_3_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_3_01.setup))?(function() { 
var G__22663__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_3_01.setup,args);
};
var G__22663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22664__i = 0, G__22664__a = new Array(arguments.length -  0);
while (G__22664__i < G__22664__a.length) {G__22664__a[G__22664__i] = arguments[G__22664__i + 0]; ++G__22664__i;}
  args = new cljs.core.IndexedSeq(G__22664__a,0,null);
} 
return G__22663__delegate.call(this,args);};
G__22663.cljs$lang$maxFixedArity = 0;
G__22663.cljs$lang$applyTo = (function (arglist__22665){
var args = cljs.core.seq(arglist__22665);
return G__22663__delegate(args);
});
G__22663.cljs$core$IFn$_invoke$arity$variadic = G__22663__delegate;
return G__22663;
})()
:sketches.generative_desgin.P_02.P_2_2_3_01.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_3_01.mouse_pressed))?(function() { 
var G__22666__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_3_01.mouse_pressed,args);
};
var G__22666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22667__i = 0, G__22667__a = new Array(arguments.length -  0);
while (G__22667__i < G__22667__a.length) {G__22667__a[G__22667__i] = arguments[G__22667__i + 0]; ++G__22667__i;}
  args = new cljs.core.IndexedSeq(G__22667__a,0,null);
} 
return G__22666__delegate.call(this,args);};
G__22666.cljs$lang$maxFixedArity = 0;
G__22666.cljs$lang$applyTo = (function (arglist__22668){
var args = cljs.core.seq(arglist__22668);
return G__22666__delegate(args);
});
G__22666.cljs$core$IFn$_invoke$arity$variadic = G__22666__delegate;
return G__22666;
})()
:sketches.generative_desgin.P_02.P_2_2_3_01.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_3_01.draw))?(function() { 
var G__22669__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_3_01.draw,args);
};
var G__22669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22670__i = 0, G__22670__a = new Array(arguments.length -  0);
while (G__22670__i < G__22670__a.length) {G__22670__a[G__22670__i] = arguments[G__22670__i + 0]; ++G__22670__i;}
  args = new cljs.core.IndexedSeq(G__22670__a,0,null);
} 
return G__22669__delegate.call(this,args);};
G__22669.cljs$lang$maxFixedArity = 0;
G__22669.cljs$lang$applyTo = (function (arglist__22671){
var args = cljs.core.seq(arglist__22671);
return G__22669__delegate(args);
});
G__22669.cljs$core$IFn$_invoke$arity$variadic = G__22669__delegate;
return G__22669;
})()
:sketches.generative_desgin.P_02.P_2_2_3_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_2_3_01.shapes_from_agent', sketches.generative_desgin.P_02.P_2_2_3_01.shapes_from_agent);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_2_3_01.shapes_from_agent,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22672__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22673__i = 0, G__22673__a = new Array(arguments.length -  0);
while (G__22673__i < G__22673__a.length) {G__22673__a[G__22673__i] = arguments[G__22673__i + 0]; ++G__22673__i;}
  args = new cljs.core.IndexedSeq(G__22673__a,0,null);
} 
return G__22672__delegate.call(this,args);};
G__22672.cljs$lang$maxFixedArity = 0;
G__22672.cljs$lang$applyTo = (function (arglist__22674){
var args = cljs.core.seq(arglist__22674);
return G__22672__delegate(args);
});
G__22672.cljs$core$IFn$_invoke$arity$variadic = G__22672__delegate;
return G__22672;
})()
:host)], null));
}
});
