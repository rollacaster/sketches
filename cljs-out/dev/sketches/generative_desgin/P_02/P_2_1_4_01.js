// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_1_4_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_1_4_01.cols = (18);
sketches.generative_desgin.P_02.P_2_1_4_01.rows = (9);
sketches.generative_desgin.P_02.P_2_1_4_01.setup = (function sketches$generative_desgin$P_02$P_2_1_4_01$setup(host){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$image,quil.core.load_image("images/shape.jpg"),cljs.core.cst$kw$check_DASH_boxes,(function (){var host_element = document.getElementById(host);
var div = document.createElement("div");
host_element.firstElementChild.remove();

div.id = "mirror";

host_element.appendChild(div);

return cljs.core.flatten((function (){var iter__4324__auto__ = ((function (host_element,div){
return (function sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601(s__21602){
return (new cljs.core.LazySeq(null,((function (host_element,div){
return (function (){
var s__21602__$1 = s__21602;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21602__$1);
if(temp__5735__auto__){
var s__21602__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21602__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21602__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21604 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21603 = (0);
while(true){
if((i__21603 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21603);
cljs.core.chunk_append(b__21604,(function (){var checkboxes = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (i__21603,y,c__4322__auto__,size__4323__auto__,b__21604,s__21602__$2,temp__5735__auto__,host_element,div){
return (function sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21605(s__21606){
return (new cljs.core.LazySeq(null,((function (i__21603,y,c__4322__auto__,size__4323__auto__,b__21604,s__21602__$2,temp__5735__auto__,host_element,div){
return (function (){
var s__21606__$1 = s__21606;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21606__$1);
if(temp__5735__auto____$1){
var s__21606__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21606__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__21606__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__21608 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__21607 = (0);
while(true){
if((i__21607 < size__4323__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__21607);
cljs.core.chunk_append(b__21608,(function (){var check_box = document.createElement("input");
check_box.type = "checkbox";

check_box.style.display = "inline";

div.appendChild(check_box);

return check_box;
})());

var G__21613 = (i__21607 + (1));
i__21607 = G__21613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21608),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21605(cljs.core.chunk_rest(s__21606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21608),null);
}
} else {
var x = cljs.core.first(s__21606__$2);
return cljs.core.cons((function (){var check_box = document.createElement("input");
check_box.type = "checkbox";

check_box.style.display = "inline";

div.appendChild(check_box);

return check_box;
})(),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21605(cljs.core.rest(s__21606__$2)));
}
} else {
return null;
}
break;
}
});})(i__21603,y,c__4322__auto__,size__4323__auto__,b__21604,s__21602__$2,temp__5735__auto__,host_element,div))
,null,null));
});})(i__21603,y,c__4322__auto__,size__4323__auto__,b__21604,s__21602__$2,temp__5735__auto__,host_element,div))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_4_01.cols));
})());
var span_21614 = document.createElement("span");
span_21614.innerHTML = "<br/>";

div.appendChild(span_21614);

return checkboxes;
})());

var G__21615 = (i__21603 + (1));
i__21603 = G__21615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21604),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601(cljs.core.chunk_rest(s__21602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21604),null);
}
} else {
var y = cljs.core.first(s__21602__$2);
return cljs.core.cons((function (){var checkboxes = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (y,s__21602__$2,temp__5735__auto__,host_element,div){
return (function sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21609(s__21610){
return (new cljs.core.LazySeq(null,((function (y,s__21602__$2,temp__5735__auto__,host_element,div){
return (function (){
var s__21610__$1 = s__21610;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21610__$1);
if(temp__5735__auto____$1){
var s__21610__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21610__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21610__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21612 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21611 = (0);
while(true){
if((i__21611 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21611);
cljs.core.chunk_append(b__21612,(function (){var check_box = document.createElement("input");
check_box.type = "checkbox";

check_box.style.display = "inline";

div.appendChild(check_box);

return check_box;
})());

var G__21616 = (i__21611 + (1));
i__21611 = G__21616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21612),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21609(cljs.core.chunk_rest(s__21610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21612),null);
}
} else {
var x = cljs.core.first(s__21610__$2);
return cljs.core.cons((function (){var check_box = document.createElement("input");
check_box.type = "checkbox";

check_box.style.display = "inline";

div.appendChild(check_box);

return check_box;
})(),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601_$_iter__21609(cljs.core.rest(s__21610__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__21602__$2,temp__5735__auto__,host_element,div))
,null,null));
});})(y,s__21602__$2,temp__5735__auto__,host_element,div))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_4_01.cols));
})());
var span_21617 = document.createElement("span");
span_21617.innerHTML = "<br/>";

div.appendChild(span_21617);

return checkboxes;
})(),sketches$generative_desgin$P_02$P_2_1_4_01$setup_$_iter__21601(cljs.core.rest(s__21602__$2)));
}
} else {
return null;
}
break;
}
});})(host_element,div))
,null,null));
});})(host_element,div))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_4_01.rows));
})());
})()], null);
});
sketches.generative_desgin.P_02.P_2_1_4_01.update_state = (function sketches$generative_desgin$P_02$P_2_1_4_01$update_state(state){
return state;
});
sketches.generative_desgin.P_02.P_2_1_4_01.draw = (function sketches$generative_desgin$P_02$P_2_1_4_01$draw(p__21618){
var map__21619 = p__21618;
var map__21619__$1 = ((((!((map__21619 == null)))?(((((map__21619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21619):map__21619);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21619__$1,cljs.core.cst$kw$image);
var check_boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21619__$1,cljs.core.cst$kw$check_DASH_boxes);
if(cljs.core.truth_(quil.core.loaded_QMARK_(image))){
var seq__21621 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),image.height));
var chunk__21626 = null;
var count__21627 = (0);
var i__21628 = (0);
while(true){
if((i__21628 < count__21627)){
var y = chunk__21626.cljs$core$IIndexed$_nth$arity$2(null,i__21628);
var seq__21629_21633 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),image.width));
var chunk__21630_21634 = null;
var count__21631_21635 = (0);
var i__21632_21636 = (0);
while(true){
if((i__21632_21636 < count__21631_21635)){
var x_21637 = chunk__21630_21634.cljs$core$IIndexed$_nth$arity$2(null,i__21632_21636);
var c_21638 = quil.core.color.cljs$core$IFn$_invoke$arity$1(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(image,x_21637,y));
var bright_21639 = (((quil.core.red(c_21638) + quil.core.green(c_21638)) + quil.core.blue(c_21638)) / (3));
var threshold_21640 = (100);
var check_index_21641 = (x_21637 + (y * sketches.generative_desgin.P_02.P_2_1_4_01.cols));
cljs.core.nth.cljs$core$IFn$_invoke$arity$2(check_boxes,check_index_21641).checked = (bright_21639 > threshold_21640);


var G__21642 = seq__21629_21633;
var G__21643 = chunk__21630_21634;
var G__21644 = count__21631_21635;
var G__21645 = (i__21632_21636 + (1));
seq__21629_21633 = G__21642;
chunk__21630_21634 = G__21643;
count__21631_21635 = G__21644;
i__21632_21636 = G__21645;
continue;
} else {
var temp__5735__auto___21646 = cljs.core.seq(seq__21629_21633);
if(temp__5735__auto___21646){
var seq__21629_21647__$1 = temp__5735__auto___21646;
if(cljs.core.chunked_seq_QMARK_(seq__21629_21647__$1)){
var c__4351__auto___21648 = cljs.core.chunk_first(seq__21629_21647__$1);
var G__21649 = cljs.core.chunk_rest(seq__21629_21647__$1);
var G__21650 = c__4351__auto___21648;
var G__21651 = cljs.core.count(c__4351__auto___21648);
var G__21652 = (0);
seq__21629_21633 = G__21649;
chunk__21630_21634 = G__21650;
count__21631_21635 = G__21651;
i__21632_21636 = G__21652;
continue;
} else {
var x_21653 = cljs.core.first(seq__21629_21647__$1);
var c_21654 = quil.core.color.cljs$core$IFn$_invoke$arity$1(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(image,x_21653,y));
var bright_21655 = (((quil.core.red(c_21654) + quil.core.green(c_21654)) + quil.core.blue(c_21654)) / (3));
var threshold_21656 = (100);
var check_index_21657 = (x_21653 + (y * sketches.generative_desgin.P_02.P_2_1_4_01.cols));
cljs.core.nth.cljs$core$IFn$_invoke$arity$2(check_boxes,check_index_21657).checked = (bright_21655 > threshold_21656);


var G__21658 = cljs.core.next(seq__21629_21647__$1);
var G__21659 = null;
var G__21660 = (0);
var G__21661 = (0);
seq__21629_21633 = G__21658;
chunk__21630_21634 = G__21659;
count__21631_21635 = G__21660;
i__21632_21636 = G__21661;
continue;
}
} else {
}
}
break;
}

var G__21662 = seq__21621;
var G__21663 = chunk__21626;
var G__21664 = count__21627;
var G__21665 = (i__21628 + (1));
seq__21621 = G__21662;
chunk__21626 = G__21663;
count__21627 = G__21664;
i__21628 = G__21665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21621);
if(temp__5735__auto__){
var seq__21621__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21621__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21621__$1);
var G__21666 = cljs.core.chunk_rest(seq__21621__$1);
var G__21667 = c__4351__auto__;
var G__21668 = cljs.core.count(c__4351__auto__);
var G__21669 = (0);
seq__21621 = G__21666;
chunk__21626 = G__21667;
count__21627 = G__21668;
i__21628 = G__21669;
continue;
} else {
var y = cljs.core.first(seq__21621__$1);
var seq__21622_21670 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),image.width));
var chunk__21623_21671 = null;
var count__21624_21672 = (0);
var i__21625_21673 = (0);
while(true){
if((i__21625_21673 < count__21624_21672)){
var x_21674 = chunk__21623_21671.cljs$core$IIndexed$_nth$arity$2(null,i__21625_21673);
var c_21675 = quil.core.color.cljs$core$IFn$_invoke$arity$1(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(image,x_21674,y));
var bright_21676 = (((quil.core.red(c_21675) + quil.core.green(c_21675)) + quil.core.blue(c_21675)) / (3));
var threshold_21677 = (100);
var check_index_21678 = (x_21674 + (y * sketches.generative_desgin.P_02.P_2_1_4_01.cols));
cljs.core.nth.cljs$core$IFn$_invoke$arity$2(check_boxes,check_index_21678).checked = (bright_21676 > threshold_21677);


var G__21679 = seq__21622_21670;
var G__21680 = chunk__21623_21671;
var G__21681 = count__21624_21672;
var G__21682 = (i__21625_21673 + (1));
seq__21622_21670 = G__21679;
chunk__21623_21671 = G__21680;
count__21624_21672 = G__21681;
i__21625_21673 = G__21682;
continue;
} else {
var temp__5735__auto___21683__$1 = cljs.core.seq(seq__21622_21670);
if(temp__5735__auto___21683__$1){
var seq__21622_21684__$1 = temp__5735__auto___21683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21622_21684__$1)){
var c__4351__auto___21685 = cljs.core.chunk_first(seq__21622_21684__$1);
var G__21686 = cljs.core.chunk_rest(seq__21622_21684__$1);
var G__21687 = c__4351__auto___21685;
var G__21688 = cljs.core.count(c__4351__auto___21685);
var G__21689 = (0);
seq__21622_21670 = G__21686;
chunk__21623_21671 = G__21687;
count__21624_21672 = G__21688;
i__21625_21673 = G__21689;
continue;
} else {
var x_21690 = cljs.core.first(seq__21622_21684__$1);
var c_21691 = quil.core.color.cljs$core$IFn$_invoke$arity$1(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(image,x_21690,y));
var bright_21692 = (((quil.core.red(c_21691) + quil.core.green(c_21691)) + quil.core.blue(c_21691)) / (3));
var threshold_21693 = (100);
var check_index_21694 = (x_21690 + (y * sketches.generative_desgin.P_02.P_2_1_4_01.cols));
cljs.core.nth.cljs$core$IFn$_invoke$arity$2(check_boxes,check_index_21694).checked = (bright_21692 > threshold_21693);


var G__21695 = cljs.core.next(seq__21622_21684__$1);
var G__21696 = null;
var G__21697 = (0);
var G__21698 = (0);
seq__21622_21670 = G__21695;
chunk__21623_21671 = G__21696;
count__21624_21672 = G__21697;
i__21625_21673 = G__21698;
continue;
}
} else {
}
}
break;
}

var G__21699 = cljs.core.next(seq__21621__$1);
var G__21700 = null;
var G__21701 = (0);
var G__21702 = (0);
seq__21621 = G__21699;
chunk__21626 = G__21700;
count__21627 = G__21701;
i__21628 = G__21702;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
sketches.generative_desgin.P_02.P_2_1_4_01.run = (function sketches$generative_desgin$P_02$P_2_1_4_01$run(host){
sketches.generative_desgin.P_02.P_2_1_4_01.checkboxes_grid = (function sketches$generative_desgin$P_02$P_2_1_4_01$run_$_checkboxes_grid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21703__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21704__i = 0, G__21704__a = new Array(arguments.length -  0);
while (G__21704__i < G__21704__a.length) {G__21704__a[G__21704__i] = arguments[G__21704__i + 0]; ++G__21704__i;}
  args = new cljs.core.IndexedSeq(G__21704__a,0,null);
} 
return G__21703__delegate.call(this,args);};
G__21703.cljs$lang$maxFixedArity = 0;
G__21703.cljs$lang$applyTo = (function (arglist__21705){
var args = cljs.core.seq(arglist__21705);
return G__21703__delegate(args);
});
G__21703.cljs$core$IFn$_invoke$arity$variadic = G__21703__delegate;
return G__21703;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_4_01.update_state))?(function() { 
var G__21706__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_4_01.update_state,args);
};
var G__21706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21707__i = 0, G__21707__a = new Array(arguments.length -  0);
while (G__21707__i < G__21707__a.length) {G__21707__a[G__21707__i] = arguments[G__21707__i + 0]; ++G__21707__i;}
  args = new cljs.core.IndexedSeq(G__21707__a,0,null);
} 
return G__21706__delegate.call(this,args);};
G__21706.cljs$lang$maxFixedArity = 0;
G__21706.cljs$lang$applyTo = (function (arglist__21708){
var args = cljs.core.seq(arglist__21708);
return G__21706__delegate(args);
});
G__21706.cljs$core$IFn$_invoke$arity$variadic = G__21706__delegate;
return G__21706;
})()
:sketches.generative_desgin.P_02.P_2_1_4_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,(function (){
return sketches.generative_desgin.P_02.P_2_1_4_01.setup(host);
}),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_4_01.draw))?(function() { 
var G__21709__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_4_01.draw,args);
};
var G__21709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21710__i = 0, G__21710__a = new Array(arguments.length -  0);
while (G__21710__i < G__21710__a.length) {G__21710__a[G__21710__i] = arguments[G__21710__i + 0]; ++G__21710__i;}
  args = new cljs.core.IndexedSeq(G__21710__a,0,null);
} 
return G__21709__delegate.call(this,args);};
G__21709.cljs$lang$maxFixedArity = 0;
G__21709.cljs$lang$applyTo = (function (arglist__21711){
var args = cljs.core.seq(arglist__21711);
return G__21709__delegate(args);
});
G__21709.cljs$core$IFn$_invoke$arity$variadic = G__21709__delegate;
return G__21709;
})()
:sketches.generative_desgin.P_02.P_2_1_4_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_1_4_01.checkboxes_grid', sketches.generative_desgin.P_02.P_2_1_4_01.checkboxes_grid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_1_4_01.checkboxes_grid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21712__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21713__i = 0, G__21713__a = new Array(arguments.length -  0);
while (G__21713__i < G__21713__a.length) {G__21713__a[G__21713__i] = arguments[G__21713__i + 0]; ++G__21713__i;}
  args = new cljs.core.IndexedSeq(G__21713__a,0,null);
} 
return G__21712__delegate.call(this,args);};
G__21712.cljs$lang$maxFixedArity = 0;
G__21712.cljs$lang$applyTo = (function (arglist__21714){
var args = cljs.core.seq(arglist__21714);
return G__21712__delegate(args);
});
G__21712.cljs$core$IFn$_invoke$arity$variadic = G__21712__delegate;
return G__21712;
})()
:host)], null));
}
});
