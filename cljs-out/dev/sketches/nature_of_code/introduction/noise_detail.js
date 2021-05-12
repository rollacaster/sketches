// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.noise_detail');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.introduction.noise_detail.setup = (function sketches$nature_of_code$introduction$noise_detail$setup(){
quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.noise_detail.cljs$core$IFn$_invoke$arity$2((4),0.35);

var xoff = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__17819 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.width()));
var chunk__17820 = null;
var count__17821 = (0);
var i__17822 = (0);
while(true){
if((i__17822 < count__17821)){
var x = chunk__17820.cljs$core$IIndexed$_nth$arity$2(null,i__17822);
var yoff_17831 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__17823_17832 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()));
var chunk__17824_17833 = null;
var count__17825_17834 = (0);
var i__17826_17835 = (0);
while(true){
if((i__17826_17835 < count__17825_17834)){
var y_17836 = chunk__17824_17833.cljs$core$IIndexed$_nth$arity$2(null,i__17826_17835);
quil.core.stroke.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff_17831)),(0),(1),(0),(255)),(255),(127));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y_17836);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_17831,((function (seq__17823_17832,chunk__17824_17833,count__17825_17834,i__17826_17835,seq__17819,chunk__17820,count__17821,i__17822,y_17836,yoff_17831,x,xoff){
return (function (p1__17817_SHARP_){
return (0.03 + p1__17817_SHARP_);
});})(seq__17823_17832,chunk__17824_17833,count__17825_17834,i__17826_17835,seq__17819,chunk__17820,count__17821,i__17822,y_17836,yoff_17831,x,xoff))
);


var G__17837 = seq__17823_17832;
var G__17838 = chunk__17824_17833;
var G__17839 = count__17825_17834;
var G__17840 = (i__17826_17835 + (1));
seq__17823_17832 = G__17837;
chunk__17824_17833 = G__17838;
count__17825_17834 = G__17839;
i__17826_17835 = G__17840;
continue;
} else {
var temp__5735__auto___17841 = cljs.core.seq(seq__17823_17832);
if(temp__5735__auto___17841){
var seq__17823_17842__$1 = temp__5735__auto___17841;
if(cljs.core.chunked_seq_QMARK_(seq__17823_17842__$1)){
var c__4351__auto___17843 = cljs.core.chunk_first(seq__17823_17842__$1);
var G__17844 = cljs.core.chunk_rest(seq__17823_17842__$1);
var G__17845 = c__4351__auto___17843;
var G__17846 = cljs.core.count(c__4351__auto___17843);
var G__17847 = (0);
seq__17823_17832 = G__17844;
chunk__17824_17833 = G__17845;
count__17825_17834 = G__17846;
i__17826_17835 = G__17847;
continue;
} else {
var y_17848 = cljs.core.first(seq__17823_17842__$1);
quil.core.stroke.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff_17831)),(0),(1),(0),(255)),(255),(127));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y_17848);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_17831,((function (seq__17823_17832,chunk__17824_17833,count__17825_17834,i__17826_17835,seq__17819,chunk__17820,count__17821,i__17822,y_17848,seq__17823_17842__$1,temp__5735__auto___17841,yoff_17831,x,xoff){
return (function (p1__17817_SHARP_){
return (0.03 + p1__17817_SHARP_);
});})(seq__17823_17832,chunk__17824_17833,count__17825_17834,i__17826_17835,seq__17819,chunk__17820,count__17821,i__17822,y_17848,seq__17823_17842__$1,temp__5735__auto___17841,yoff_17831,x,xoff))
);


var G__17849 = cljs.core.next(seq__17823_17842__$1);
var G__17850 = null;
var G__17851 = (0);
var G__17852 = (0);
seq__17823_17832 = G__17849;
chunk__17824_17833 = G__17850;
count__17825_17834 = G__17851;
i__17826_17835 = G__17852;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(xoff,((function (seq__17819,chunk__17820,count__17821,i__17822,yoff_17831,x,xoff){
return (function (p1__17818_SHARP_){
return (0.03 + p1__17818_SHARP_);
});})(seq__17819,chunk__17820,count__17821,i__17822,yoff_17831,x,xoff))
);


var G__17853 = seq__17819;
var G__17854 = chunk__17820;
var G__17855 = count__17821;
var G__17856 = (i__17822 + (1));
seq__17819 = G__17853;
chunk__17820 = G__17854;
count__17821 = G__17855;
i__17822 = G__17856;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__17819);
if(temp__5735__auto__){
var seq__17819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17819__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__17819__$1);
var G__17857 = cljs.core.chunk_rest(seq__17819__$1);
var G__17858 = c__4351__auto__;
var G__17859 = cljs.core.count(c__4351__auto__);
var G__17860 = (0);
seq__17819 = G__17857;
chunk__17820 = G__17858;
count__17821 = G__17859;
i__17822 = G__17860;
continue;
} else {
var x = cljs.core.first(seq__17819__$1);
var yoff_17861 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__17827_17862 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()));
var chunk__17828_17863 = null;
var count__17829_17864 = (0);
var i__17830_17865 = (0);
while(true){
if((i__17830_17865 < count__17829_17864)){
var y_17866 = chunk__17828_17863.cljs$core$IIndexed$_nth$arity$2(null,i__17830_17865);
quil.core.stroke.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff_17861)),(0),(1),(0),(255)),(255),(127));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y_17866);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_17861,((function (seq__17827_17862,chunk__17828_17863,count__17829_17864,i__17830_17865,seq__17819,chunk__17820,count__17821,i__17822,y_17866,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff){
return (function (p1__17817_SHARP_){
return (0.03 + p1__17817_SHARP_);
});})(seq__17827_17862,chunk__17828_17863,count__17829_17864,i__17830_17865,seq__17819,chunk__17820,count__17821,i__17822,y_17866,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff))
);


var G__17867 = seq__17827_17862;
var G__17868 = chunk__17828_17863;
var G__17869 = count__17829_17864;
var G__17870 = (i__17830_17865 + (1));
seq__17827_17862 = G__17867;
chunk__17828_17863 = G__17868;
count__17829_17864 = G__17869;
i__17830_17865 = G__17870;
continue;
} else {
var temp__5735__auto___17871__$1 = cljs.core.seq(seq__17827_17862);
if(temp__5735__auto___17871__$1){
var seq__17827_17872__$1 = temp__5735__auto___17871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17827_17872__$1)){
var c__4351__auto___17873 = cljs.core.chunk_first(seq__17827_17872__$1);
var G__17874 = cljs.core.chunk_rest(seq__17827_17872__$1);
var G__17875 = c__4351__auto___17873;
var G__17876 = cljs.core.count(c__4351__auto___17873);
var G__17877 = (0);
seq__17827_17862 = G__17874;
chunk__17828_17863 = G__17875;
count__17829_17864 = G__17876;
i__17830_17865 = G__17877;
continue;
} else {
var y_17878 = cljs.core.first(seq__17827_17872__$1);
quil.core.stroke.cljs$core$IFn$_invoke$arity$3(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff_17861)),(0),(1),(0),(255)),(255),(127));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x,y_17878);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_17861,((function (seq__17827_17862,chunk__17828_17863,count__17829_17864,i__17830_17865,seq__17819,chunk__17820,count__17821,i__17822,y_17878,seq__17827_17872__$1,temp__5735__auto___17871__$1,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff){
return (function (p1__17817_SHARP_){
return (0.03 + p1__17817_SHARP_);
});})(seq__17827_17862,chunk__17828_17863,count__17829_17864,i__17830_17865,seq__17819,chunk__17820,count__17821,i__17822,y_17878,seq__17827_17872__$1,temp__5735__auto___17871__$1,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff))
);


var G__17879 = cljs.core.next(seq__17827_17872__$1);
var G__17880 = null;
var G__17881 = (0);
var G__17882 = (0);
seq__17827_17862 = G__17879;
chunk__17828_17863 = G__17880;
count__17829_17864 = G__17881;
i__17830_17865 = G__17882;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(xoff,((function (seq__17819,chunk__17820,count__17821,i__17822,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff){
return (function (p1__17818_SHARP_){
return (0.03 + p1__17818_SHARP_);
});})(seq__17819,chunk__17820,count__17821,i__17822,yoff_17861,x,seq__17819__$1,temp__5735__auto__,xoff))
);


var G__17883 = cljs.core.next(seq__17819__$1);
var G__17884 = null;
var G__17885 = (0);
var G__17886 = (0);
seq__17819 = G__17883;
chunk__17820 = G__17884;
count__17821 = G__17885;
i__17822 = G__17886;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.introduction.noise_detail.draw = (function sketches$nature_of_code$introduction$noise_detail$draw(){
return null;
});
sketches.nature_of_code.introduction.noise_detail.run = (function sketches$nature_of_code$introduction$noise_detail$run(host){
sketches.nature_of_code.introduction.noise_detail.noise_detail = (function sketches$nature_of_code$introduction$noise_detail$run_$_noise_detail(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17887__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17888__i = 0, G__17888__a = new Array(arguments.length -  0);
while (G__17888__i < G__17888__a.length) {G__17888__a[G__17888__i] = arguments[G__17888__i + 0]; ++G__17888__i;}
  args = new cljs.core.IndexedSeq(G__17888__a,0,null);
} 
return G__17887__delegate.call(this,args);};
G__17887.cljs$lang$maxFixedArity = 0;
G__17887.cljs$lang$applyTo = (function (arglist__17889){
var args = cljs.core.seq(arglist__17889);
return G__17887__delegate(args);
});
G__17887.cljs$core$IFn$_invoke$arity$variadic = G__17887__delegate;
return G__17887;
})()
:host),sketches.nature_of_code.introduction.noise_detail.draw,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17890__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17891__i = 0, G__17891__a = new Array(arguments.length -  0);
while (G__17891__i < G__17891__a.length) {G__17891__a[G__17891__i] = arguments[G__17891__i + 0]; ++G__17891__i;}
  args = new cljs.core.IndexedSeq(G__17891__a,0,null);
} 
return G__17890__delegate.call(this,args);};
G__17890.cljs$lang$maxFixedArity = 0;
G__17890.cljs$lang$applyTo = (function (arglist__17892){
var args = cljs.core.seq(arglist__17892);
return G__17890__delegate(args);
});
G__17890.cljs$core$IFn$_invoke$arity$variadic = G__17890__delegate;
return G__17890;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.noise_detail.setup))?(function() { 
var G__17893__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_detail.setup,args);
};
var G__17893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17894__i = 0, G__17894__a = new Array(arguments.length -  0);
while (G__17894__i < G__17894__a.length) {G__17894__a[G__17894__i] = arguments[G__17894__i + 0]; ++G__17894__i;}
  args = new cljs.core.IndexedSeq(G__17894__a,0,null);
} 
return G__17893__delegate.call(this,args);};
G__17893.cljs$lang$maxFixedArity = 0;
G__17893.cljs$lang$applyTo = (function (arglist__17895){
var args = cljs.core.seq(arglist__17895);
return G__17893__delegate(args);
});
G__17893.cljs$core$IFn$_invoke$arity$variadic = G__17893__delegate;
return G__17893;
})()
:sketches.nature_of_code.introduction.noise_detail.setup),host,cljs.core.cst$kw$draw], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.noise_detail.noise_detail', sketches.nature_of_code.introduction.noise_detail.noise_detail);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.noise_detail.noise_detail,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17896__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17897__i = 0, G__17897__a = new Array(arguments.length -  0);
while (G__17897__i < G__17897__a.length) {G__17897__a[G__17897__i] = arguments[G__17897__i + 0]; ++G__17897__i;}
  args = new cljs.core.IndexedSeq(G__17897__a,0,null);
} 
return G__17896__delegate.call(this,args);};
G__17896.cljs$lang$maxFixedArity = 0;
G__17896.cljs$lang$applyTo = (function (arglist__17898){
var args = cljs.core.seq(arglist__17898);
return G__17896__delegate(args);
});
G__17896.cljs$core$IFn$_invoke$arity$variadic = G__17896__delegate;
return G__17896;
})()
:host)], null));
}
});
