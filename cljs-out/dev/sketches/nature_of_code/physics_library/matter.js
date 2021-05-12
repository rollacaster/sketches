// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.physics_library.matter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('oops.core');
goog.require('quil.core');
sketches.nature_of_code.physics_library.matter.global$module$matter = goog.global["matter"];
sketches.nature_of_code.physics_library.matter.bodies = (function (){var target_obj_17566 = sketches.nature_of_code.physics_library.matter.global$module$matter;
var next_obj_17567 = (target_obj_17566["Bodies"]);
return next_obj_17567;
})();
sketches.nature_of_code.physics_library.matter.world = (function (){var target_obj_17568 = sketches.nature_of_code.physics_library.matter.global$module$matter;
var next_obj_17569 = (target_obj_17568["World"]);
return next_obj_17569;
})();
sketches.nature_of_code.physics_library.matter.rect = (function sketches$nature_of_code$physics_library$matter$rect(var_args){
var G__17571 = arguments.length;
switch (G__17571) {
case 4:
return sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
return sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$5(x,y,width,height,null);
});

sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$5 = (function (x,y,width,height,params){
var target_obj_17572 = sketches.nature_of_code.physics_library.matter.bodies;
var call_info_17574 = [target_obj_17572,(function (){var next_obj_17575 = (target_obj_17572["rectangle"]);
return next_obj_17575;
})()];
var fn_17573 = (call_info_17574[(1)]);
if(!((fn_17573 == null))){
return fn_17573.call((call_info_17574[(0)]),x,y,width,height,cljs.core.clj__GT_js(params));
} else {
return null;
}
});

sketches.nature_of_code.physics_library.matter.rect.cljs$lang$maxFixedArity = 5;

sketches.nature_of_code.physics_library.matter.circle = (function sketches$nature_of_code$physics_library$matter$circle(var_args){
var G__17578 = arguments.length;
switch (G__17578) {
case 4:
return sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
return sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$5(x,y,width,height,null);
});

sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$5 = (function (x,y,width,height,params){
var target_obj_17579 = sketches.nature_of_code.physics_library.matter.bodies;
var call_info_17581 = [target_obj_17579,(function (){var next_obj_17582 = (target_obj_17579["circle"]);
return next_obj_17582;
})()];
var fn_17580 = (call_info_17581[(1)]);
if(!((fn_17580 == null))){
return fn_17580.call((call_info_17581[(0)]),x,y,width,height,cljs.core.clj__GT_js(params));
} else {
return null;
}
});

sketches.nature_of_code.physics_library.matter.circle.cljs$lang$maxFixedArity = 5;

sketches.nature_of_code.physics_library.matter.add = (function sketches$nature_of_code$physics_library$matter$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17592 = arguments.length;
var i__4532__auto___17593 = (0);
while(true){
if((i__4532__auto___17593 < len__4531__auto___17592)){
args__4534__auto__.push((arguments[i__4532__auto___17593]));

var G__17594 = (i__4532__auto___17593 + (1));
i__4532__auto___17593 = G__17594;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic = (function (engine,composites){
var target_obj_17586_17595 = sketches.nature_of_code.physics_library.matter.world;
var call_info_17588_17596 = [target_obj_17586_17595,(function (){var next_obj_17589 = (target_obj_17586_17595["add"]);
return next_obj_17589;
})()];
var fn_17587_17597 = (call_info_17588_17596[(1)]);
if(!((fn_17587_17597 == null))){
fn_17587_17597.call((call_info_17588_17596[(0)]),(function (){var target_obj_17590 = engine;
var next_obj_17591 = (target_obj_17590["world"]);
return next_obj_17591;
})(),cljs.core.clj__GT_js(composites));
} else {
}

return engine;
});

sketches.nature_of_code.physics_library.matter.add.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sketches.nature_of_code.physics_library.matter.add.cljs$lang$applyTo = (function (seq17584){
var G__17585 = cljs.core.first(seq17584);
var seq17584__$1 = cljs.core.next(seq17584);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17585,seq17584__$1);
});

sketches.nature_of_code.physics_library.matter.update_engine = (function sketches$nature_of_code$physics_library$matter$update_engine(engine){
var target_obj_17598 = (function (){var target_obj_17602 = sketches.nature_of_code.physics_library.matter.global$module$matter;
var next_obj_17603 = (target_obj_17602["Engine"]);
return next_obj_17603;
})();
var call_info_17600 = [target_obj_17598,(function (){var next_obj_17601 = (target_obj_17598["update"]);
return next_obj_17601;
})()];
var fn_17599 = (call_info_17600[(1)]);
if(!((fn_17599 == null))){
return fn_17599.call((call_info_17600[(0)]),engine,((1000) / (30)));
} else {
return null;
}
});
sketches.nature_of_code.physics_library.matter.render = (function sketches$nature_of_code$physics_library$matter$render(engine){
quil.core.clear();

var seq__17604 = cljs.core.seq((function (){var target_obj_17608 = (function (){var target_obj_17612 = sketches.nature_of_code.physics_library.matter.global$module$matter;
var next_obj_17613 = (target_obj_17612["Composite"]);
return next_obj_17613;
})();
var call_info_17610 = [target_obj_17608,(function (){var next_obj_17611 = (target_obj_17608["allBodies"]);
return next_obj_17611;
})()];
var fn_17609 = (call_info_17610[(1)]);
if(!((fn_17609 == null))){
return fn_17609.call((call_info_17610[(0)]),(function (){var target_obj_17614 = engine;
var next_obj_17615 = (target_obj_17614["world"]);
return next_obj_17615;
})());
} else {
return null;
}
})());
var chunk__17605 = null;
var count__17606 = (0);
var i__17607 = (0);
while(true){
if((i__17607 < count__17606)){
var body = chunk__17605.cljs$core$IIndexed$_nth$arity$2(null,i__17607);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var seq__17616_17644 = cljs.core.seq((function (){var target_obj_17620 = body;
var next_obj_17621 = (target_obj_17620["vertices"]);
return next_obj_17621;
})());
var chunk__17617_17645 = null;
var count__17618_17646 = (0);
var i__17619_17647 = (0);
while(true){
if((i__17619_17647 < count__17618_17646)){
var vert_17648 = chunk__17617_17645.cljs$core$IIndexed$_nth$arity$2(null,i__17619_17647);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2((function (){var target_obj_17622 = vert_17648;
var next_obj_17623 = (target_obj_17622["x"]);
return next_obj_17623;
})(),(function (){var target_obj_17624 = vert_17648;
var next_obj_17625 = (target_obj_17624["y"]);
return next_obj_17625;
})());


var G__17649 = seq__17616_17644;
var G__17650 = chunk__17617_17645;
var G__17651 = count__17618_17646;
var G__17652 = (i__17619_17647 + (1));
seq__17616_17644 = G__17649;
chunk__17617_17645 = G__17650;
count__17618_17646 = G__17651;
i__17619_17647 = G__17652;
continue;
} else {
var temp__5735__auto___17653 = cljs.core.seq(seq__17616_17644);
if(temp__5735__auto___17653){
var seq__17616_17654__$1 = temp__5735__auto___17653;
if(cljs.core.chunked_seq_QMARK_(seq__17616_17654__$1)){
var c__4351__auto___17655 = cljs.core.chunk_first(seq__17616_17654__$1);
var G__17656 = cljs.core.chunk_rest(seq__17616_17654__$1);
var G__17657 = c__4351__auto___17655;
var G__17658 = cljs.core.count(c__4351__auto___17655);
var G__17659 = (0);
seq__17616_17644 = G__17656;
chunk__17617_17645 = G__17657;
count__17618_17646 = G__17658;
i__17619_17647 = G__17659;
continue;
} else {
var vert_17660 = cljs.core.first(seq__17616_17654__$1);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2((function (){var target_obj_17626 = vert_17660;
var next_obj_17627 = (target_obj_17626["x"]);
return next_obj_17627;
})(),(function (){var target_obj_17628 = vert_17660;
var next_obj_17629 = (target_obj_17628["y"]);
return next_obj_17629;
})());


var G__17661 = cljs.core.next(seq__17616_17654__$1);
var G__17662 = null;
var G__17663 = (0);
var G__17664 = (0);
seq__17616_17644 = G__17661;
chunk__17617_17645 = G__17662;
count__17618_17646 = G__17663;
i__17619_17647 = G__17664;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$close);


var G__17665 = seq__17604;
var G__17666 = chunk__17605;
var G__17667 = count__17606;
var G__17668 = (i__17607 + (1));
seq__17604 = G__17665;
chunk__17605 = G__17666;
count__17606 = G__17667;
i__17607 = G__17668;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__17604);
if(temp__5735__auto__){
var seq__17604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17604__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__17604__$1);
var G__17669 = cljs.core.chunk_rest(seq__17604__$1);
var G__17670 = c__4351__auto__;
var G__17671 = cljs.core.count(c__4351__auto__);
var G__17672 = (0);
seq__17604 = G__17669;
chunk__17605 = G__17670;
count__17606 = G__17671;
i__17607 = G__17672;
continue;
} else {
var body = cljs.core.first(seq__17604__$1);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var seq__17630_17673 = cljs.core.seq((function (){var target_obj_17634 = body;
var next_obj_17635 = (target_obj_17634["vertices"]);
return next_obj_17635;
})());
var chunk__17631_17674 = null;
var count__17632_17675 = (0);
var i__17633_17676 = (0);
while(true){
if((i__17633_17676 < count__17632_17675)){
var vert_17677 = chunk__17631_17674.cljs$core$IIndexed$_nth$arity$2(null,i__17633_17676);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2((function (){var target_obj_17636 = vert_17677;
var next_obj_17637 = (target_obj_17636["x"]);
return next_obj_17637;
})(),(function (){var target_obj_17638 = vert_17677;
var next_obj_17639 = (target_obj_17638["y"]);
return next_obj_17639;
})());


var G__17678 = seq__17630_17673;
var G__17679 = chunk__17631_17674;
var G__17680 = count__17632_17675;
var G__17681 = (i__17633_17676 + (1));
seq__17630_17673 = G__17678;
chunk__17631_17674 = G__17679;
count__17632_17675 = G__17680;
i__17633_17676 = G__17681;
continue;
} else {
var temp__5735__auto___17682__$1 = cljs.core.seq(seq__17630_17673);
if(temp__5735__auto___17682__$1){
var seq__17630_17683__$1 = temp__5735__auto___17682__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17630_17683__$1)){
var c__4351__auto___17684 = cljs.core.chunk_first(seq__17630_17683__$1);
var G__17685 = cljs.core.chunk_rest(seq__17630_17683__$1);
var G__17686 = c__4351__auto___17684;
var G__17687 = cljs.core.count(c__4351__auto___17684);
var G__17688 = (0);
seq__17630_17673 = G__17685;
chunk__17631_17674 = G__17686;
count__17632_17675 = G__17687;
i__17633_17676 = G__17688;
continue;
} else {
var vert_17689 = cljs.core.first(seq__17630_17683__$1);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2((function (){var target_obj_17640 = vert_17689;
var next_obj_17641 = (target_obj_17640["x"]);
return next_obj_17641;
})(),(function (){var target_obj_17642 = vert_17689;
var next_obj_17643 = (target_obj_17642["y"]);
return next_obj_17643;
})());


var G__17690 = cljs.core.next(seq__17630_17683__$1);
var G__17691 = null;
var G__17692 = (0);
var G__17693 = (0);
seq__17630_17673 = G__17690;
chunk__17631_17674 = G__17691;
count__17632_17675 = G__17692;
i__17633_17676 = G__17693;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$close);


var G__17694 = cljs.core.next(seq__17604__$1);
var G__17695 = null;
var G__17696 = (0);
var G__17697 = (0);
seq__17604 = G__17694;
chunk__17605 = G__17695;
count__17606 = G__17696;
i__17607 = G__17697;
continue;
}
} else {
return null;
}
}
break;
}
});
