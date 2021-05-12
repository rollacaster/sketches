// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.noise_animate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.introduction.noise_animate.setup = (function sketches$nature_of_code$introduction$noise_animate$setup(){
quil.core.frame_rate((3));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.introduction.noise_animate.zoff = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sketches.nature_of_code.introduction.noise_animate.draw = (function sketches$nature_of_code$introduction$noise_animate$draw(host){
quil.core.clear();

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var xoff_21039 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__21027_21040 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.width()));
var chunk__21028_21041 = null;
var count__21029_21042 = (0);
var i__21030_21043 = (0);
while(true){
if((i__21030_21043 < count__21029_21042)){
var x_21044 = chunk__21028_21041.cljs$core$IIndexed$_nth$arity$2(null,i__21030_21043);
var yoff_21045 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__21031_21046 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()));
var chunk__21032_21047 = null;
var count__21033_21048 = (0);
var i__21034_21049 = (0);
while(true){
if((i__21034_21049 < count__21033_21048)){
var y_21050 = chunk__21032_21047.cljs$core$IIndexed$_nth$arity$2(null,i__21034_21049);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(xoff_21039),cljs.core.deref(yoff_21045),cljs.core.deref(sketches.nature_of_code.introduction.noise_animate.zoff)),(0),(1),(0),(255)));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x_21044,y_21050);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_21045,((function (seq__21031_21046,chunk__21032_21047,count__21033_21048,i__21034_21049,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21050,yoff_21045,x_21044,xoff_21039){
return (function (p1__21024_SHARP_){
return (0.05 + p1__21024_SHARP_);
});})(seq__21031_21046,chunk__21032_21047,count__21033_21048,i__21034_21049,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21050,yoff_21045,x_21044,xoff_21039))
);


var G__21051 = seq__21031_21046;
var G__21052 = chunk__21032_21047;
var G__21053 = count__21033_21048;
var G__21054 = (i__21034_21049 + (1));
seq__21031_21046 = G__21051;
chunk__21032_21047 = G__21052;
count__21033_21048 = G__21053;
i__21034_21049 = G__21054;
continue;
} else {
var temp__5735__auto___21055 = cljs.core.seq(seq__21031_21046);
if(temp__5735__auto___21055){
var seq__21031_21056__$1 = temp__5735__auto___21055;
if(cljs.core.chunked_seq_QMARK_(seq__21031_21056__$1)){
var c__4351__auto___21057 = cljs.core.chunk_first(seq__21031_21056__$1);
var G__21058 = cljs.core.chunk_rest(seq__21031_21056__$1);
var G__21059 = c__4351__auto___21057;
var G__21060 = cljs.core.count(c__4351__auto___21057);
var G__21061 = (0);
seq__21031_21046 = G__21058;
chunk__21032_21047 = G__21059;
count__21033_21048 = G__21060;
i__21034_21049 = G__21061;
continue;
} else {
var y_21062 = cljs.core.first(seq__21031_21056__$1);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(xoff_21039),cljs.core.deref(yoff_21045),cljs.core.deref(sketches.nature_of_code.introduction.noise_animate.zoff)),(0),(1),(0),(255)));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x_21044,y_21062);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_21045,((function (seq__21031_21046,chunk__21032_21047,count__21033_21048,i__21034_21049,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21062,seq__21031_21056__$1,temp__5735__auto___21055,yoff_21045,x_21044,xoff_21039){
return (function (p1__21024_SHARP_){
return (0.05 + p1__21024_SHARP_);
});})(seq__21031_21046,chunk__21032_21047,count__21033_21048,i__21034_21049,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21062,seq__21031_21056__$1,temp__5735__auto___21055,yoff_21045,x_21044,xoff_21039))
);


var G__21063 = cljs.core.next(seq__21031_21056__$1);
var G__21064 = null;
var G__21065 = (0);
var G__21066 = (0);
seq__21031_21046 = G__21063;
chunk__21032_21047 = G__21064;
count__21033_21048 = G__21065;
i__21034_21049 = G__21066;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(xoff_21039,((function (seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,yoff_21045,x_21044,xoff_21039){
return (function (p1__21025_SHARP_){
return (0.05 + p1__21025_SHARP_);
});})(seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,yoff_21045,x_21044,xoff_21039))
);


var G__21067 = seq__21027_21040;
var G__21068 = chunk__21028_21041;
var G__21069 = count__21029_21042;
var G__21070 = (i__21030_21043 + (1));
seq__21027_21040 = G__21067;
chunk__21028_21041 = G__21068;
count__21029_21042 = G__21069;
i__21030_21043 = G__21070;
continue;
} else {
var temp__5735__auto___21071 = cljs.core.seq(seq__21027_21040);
if(temp__5735__auto___21071){
var seq__21027_21072__$1 = temp__5735__auto___21071;
if(cljs.core.chunked_seq_QMARK_(seq__21027_21072__$1)){
var c__4351__auto___21073 = cljs.core.chunk_first(seq__21027_21072__$1);
var G__21074 = cljs.core.chunk_rest(seq__21027_21072__$1);
var G__21075 = c__4351__auto___21073;
var G__21076 = cljs.core.count(c__4351__auto___21073);
var G__21077 = (0);
seq__21027_21040 = G__21074;
chunk__21028_21041 = G__21075;
count__21029_21042 = G__21076;
i__21030_21043 = G__21077;
continue;
} else {
var x_21078 = cljs.core.first(seq__21027_21072__$1);
var yoff_21079 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var seq__21035_21080 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()));
var chunk__21036_21081 = null;
var count__21037_21082 = (0);
var i__21038_21083 = (0);
while(true){
if((i__21038_21083 < count__21037_21082)){
var y_21084 = chunk__21036_21081.cljs$core$IIndexed$_nth$arity$2(null,i__21038_21083);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(xoff_21039),cljs.core.deref(yoff_21079),cljs.core.deref(sketches.nature_of_code.introduction.noise_animate.zoff)),(0),(1),(0),(255)));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x_21078,y_21084);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_21079,((function (seq__21035_21080,chunk__21036_21081,count__21037_21082,i__21038_21083,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21084,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039){
return (function (p1__21024_SHARP_){
return (0.05 + p1__21024_SHARP_);
});})(seq__21035_21080,chunk__21036_21081,count__21037_21082,i__21038_21083,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21084,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039))
);


var G__21085 = seq__21035_21080;
var G__21086 = chunk__21036_21081;
var G__21087 = count__21037_21082;
var G__21088 = (i__21038_21083 + (1));
seq__21035_21080 = G__21085;
chunk__21036_21081 = G__21086;
count__21037_21082 = G__21087;
i__21038_21083 = G__21088;
continue;
} else {
var temp__5735__auto___21089__$1 = cljs.core.seq(seq__21035_21080);
if(temp__5735__auto___21089__$1){
var seq__21035_21090__$1 = temp__5735__auto___21089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21035_21090__$1)){
var c__4351__auto___21091 = cljs.core.chunk_first(seq__21035_21090__$1);
var G__21092 = cljs.core.chunk_rest(seq__21035_21090__$1);
var G__21093 = c__4351__auto___21091;
var G__21094 = cljs.core.count(c__4351__auto___21091);
var G__21095 = (0);
seq__21035_21080 = G__21092;
chunk__21036_21081 = G__21093;
count__21037_21082 = G__21094;
i__21038_21083 = G__21095;
continue;
} else {
var y_21096 = cljs.core.first(seq__21035_21090__$1);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(xoff_21039),cljs.core.deref(yoff_21079),cljs.core.deref(sketches.nature_of_code.introduction.noise_animate.zoff)),(0),(1),(0),(255)));

quil.core.point.cljs$core$IFn$_invoke$arity$2(x_21078,y_21096);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(yoff_21079,((function (seq__21035_21080,chunk__21036_21081,count__21037_21082,i__21038_21083,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21096,seq__21035_21090__$1,temp__5735__auto___21089__$1,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039){
return (function (p1__21024_SHARP_){
return (0.05 + p1__21024_SHARP_);
});})(seq__21035_21080,chunk__21036_21081,count__21037_21082,i__21038_21083,seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,y_21096,seq__21035_21090__$1,temp__5735__auto___21089__$1,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039))
);


var G__21097 = cljs.core.next(seq__21035_21090__$1);
var G__21098 = null;
var G__21099 = (0);
var G__21100 = (0);
seq__21035_21080 = G__21097;
chunk__21036_21081 = G__21098;
count__21037_21082 = G__21099;
i__21038_21083 = G__21100;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(xoff_21039,((function (seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039){
return (function (p1__21025_SHARP_){
return (0.05 + p1__21025_SHARP_);
});})(seq__21027_21040,chunk__21028_21041,count__21029_21042,i__21030_21043,yoff_21079,x_21078,seq__21027_21072__$1,temp__5735__auto___21071,xoff_21039))
);


var G__21101 = cljs.core.next(seq__21027_21072__$1);
var G__21102 = null;
var G__21103 = (0);
var G__21104 = (0);
seq__21027_21040 = G__21101;
chunk__21028_21041 = G__21102;
count__21029_21042 = G__21103;
i__21030_21043 = G__21104;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_animate.zoff,(function (p1__21026_SHARP_){
return (0.05 + p1__21026_SHARP_);
}));
});
sketches.nature_of_code.introduction.noise_animate.run = (function sketches$nature_of_code$introduction$noise_animate$run(host){
sketches.nature_of_code.introduction.noise_animate.noise = (function sketches$nature_of_code$introduction$noise_animate$run_$_noise(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21105__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21106__i = 0, G__21106__a = new Array(arguments.length -  0);
while (G__21106__i < G__21106__a.length) {G__21106__a[G__21106__i] = arguments[G__21106__i + 0]; ++G__21106__i;}
  args = new cljs.core.IndexedSeq(G__21106__a,0,null);
} 
return G__21105__delegate.call(this,args);};
G__21105.cljs$lang$maxFixedArity = 0;
G__21105.cljs$lang$applyTo = (function (arglist__21107){
var args = cljs.core.seq(arglist__21107);
return G__21105__delegate(args);
});
G__21105.cljs$core$IFn$_invoke$arity$variadic = G__21105__delegate;
return G__21105;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.noise_animate.setup))?(function() { 
var G__21108__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_animate.setup,args);
};
var G__21108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21109__i = 0, G__21109__a = new Array(arguments.length -  0);
while (G__21109__i < G__21109__a.length) {G__21109__a[G__21109__i] = arguments[G__21109__i + 0]; ++G__21109__i;}
  args = new cljs.core.IndexedSeq(G__21109__a,0,null);
} 
return G__21108__delegate.call(this,args);};
G__21108.cljs$lang$maxFixedArity = 0;
G__21108.cljs$lang$applyTo = (function (arglist__21110){
var args = cljs.core.seq(arglist__21110);
return G__21108__delegate(args);
});
G__21108.cljs$core$IFn$_invoke$arity$variadic = G__21108__delegate;
return G__21108;
})()
:sketches.nature_of_code.introduction.noise_animate.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.noise_animate.draw))?(function() { 
var G__21111__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_animate.draw,args);
};
var G__21111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21112__i = 0, G__21112__a = new Array(arguments.length -  0);
while (G__21112__i < G__21112__a.length) {G__21112__a[G__21112__i] = arguments[G__21112__i + 0]; ++G__21112__i;}
  args = new cljs.core.IndexedSeq(G__21112__a,0,null);
} 
return G__21111__delegate.call(this,args);};
G__21111.cljs$lang$maxFixedArity = 0;
G__21111.cljs$lang$applyTo = (function (arglist__21113){
var args = cljs.core.seq(arglist__21113);
return G__21111__delegate(args);
});
G__21111.cljs$core$IFn$_invoke$arity$variadic = G__21111__delegate;
return G__21111;
})()
:sketches.nature_of_code.introduction.noise_animate.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.noise_animate.noise', sketches.nature_of_code.introduction.noise_animate.noise);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.noise_animate.noise,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21114__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21115__i = 0, G__21115__a = new Array(arguments.length -  0);
while (G__21115__i < G__21115__a.length) {G__21115__a[G__21115__i] = arguments[G__21115__i + 0]; ++G__21115__i;}
  args = new cljs.core.IndexedSeq(G__21115__a,0,null);
} 
return G__21114__delegate.call(this,args);};
G__21114.cljs$lang$maxFixedArity = 0;
G__21114.cljs$lang$applyTo = (function (arglist__21116){
var args = cljs.core.seq(arglist__21116);
return G__21114__delegate(args);
});
G__21114.cljs$core$IFn$_invoke$arity$variadic = G__21114__delegate;
return G__21114;
})()
:host)], null));
}
});
