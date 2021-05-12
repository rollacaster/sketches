// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.rotating_angles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.rac_sketches.rotating_angles.setup = (function sketches$rac_sketches$rotating_angles$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$angle_DASH_lights_DASH_0,(0),cljs.core.cst$kw$angle,quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.TWO_PI)], null);
});
sketches.rac_sketches.rotating_angles.update_state = (function sketches$rac_sketches$rotating_angles$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$angle_DASH_lights_DASH_0,(function (angle){
return cljs.core.mod((angle + 0.04),(100000));
}));
});
sketches.rac_sketches.rotating_angles.draw_beams = (function sketches$rac_sketches$rotating_angles$draw_beams(p__19913,r,angles,angle){
var vec__19914 = p__19913;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(1),null);
var tr__14574__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14574__auto__);

var tr__14580__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto__);

var seq__19917 = cljs.core.seq(angles);
var chunk__19918 = null;
var count__19919 = (0);
var i__19920 = (0);
while(true){
if((i__19920 < count__19919)){
var angle__$1 = chunk__19918.cljs$core$IIndexed$_nth$arity$2(null,i__19920);
var x1_19921 = (r * Math.cos(angle__$1));
var y1_19922 = (r * Math.sin(angle__$1));
quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x1_19921,y1_19922);


var G__19923 = seq__19917;
var G__19924 = chunk__19918;
var G__19925 = count__19919;
var G__19926 = (i__19920 + (1));
seq__19917 = G__19923;
chunk__19918 = G__19924;
count__19919 = G__19925;
i__19920 = G__19926;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19917);
if(temp__5735__auto__){
var seq__19917__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19917__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19917__$1);
var G__19927 = cljs.core.chunk_rest(seq__19917__$1);
var G__19928 = c__4351__auto__;
var G__19929 = cljs.core.count(c__4351__auto__);
var G__19930 = (0);
seq__19917 = G__19927;
chunk__19918 = G__19928;
count__19919 = G__19929;
i__19920 = G__19930;
continue;
} else {
var angle__$1 = cljs.core.first(seq__19917__$1);
var x1_19931 = (r * Math.cos(angle__$1));
var y1_19932 = (r * Math.sin(angle__$1));
quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x1_19931,y1_19932);


var G__19933 = cljs.core.next(seq__19917__$1);
var G__19934 = null;
var G__19935 = (0);
var G__19936 = (0);
seq__19917 = G__19933;
chunk__19918 = G__19934;
count__19919 = G__19935;
i__19920 = G__19936;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}});
sketches.rac_sketches.rotating_angles.x = (function sketches$rac_sketches$rotating_angles$x(proportion){
return (quil.core.width() * (proportion / (100)));
});
sketches.rac_sketches.rotating_angles.y = (function sketches$rac_sketches$rotating_angles$y(proportion){
return (quil.core.height() * (proportion / (100)));
});
sketches.rac_sketches.rotating_angles.oscillate_value = (function sketches$rac_sketches$rotating_angles$oscillate_value(value,from,to){
return quil.core.map_range(quil.core.sin(value),(-1),(1),from,to);
});
sketches.rac_sketches.rotating_angles.draw = (function sketches$rac_sketches$rotating_angles$draw(p__19937){
var map__19938 = p__19937;
var map__19938__$1 = ((((!((map__19938 == null)))?(((((map__19938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19938):map__19938);
var angle_lights_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,cljs.core.cst$kw$angle_DASH_lights_DASH_0);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,cljs.core.cst$kw$angle);
quil.core.clear();

var seq__19940 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),(20)));
var chunk__19945 = null;
var count__19946 = (0);
var i__19947 = (0);
while(true){
if((i__19947 < count__19946)){
var x0 = chunk__19945.cljs$core$IIndexed$_nth$arity$2(null,i__19947);
var seq__19948_19952 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),(20)));
var chunk__19949_19953 = null;
var count__19950_19954 = (0);
var i__19951_19955 = (0);
while(true){
if((i__19951_19955 < count__19950_19954)){
var y0_19956 = chunk__19949_19953.cljs$core$IIndexed$_nth$arity$2(null,i__19951_19955);
sketches.rac_sketches.rotating_angles.draw_beams(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.rotating_angles.x(x0),sketches.rac_sketches.rotating_angles.y(y0_19956)], null),(quil.core.width() / (5)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),angle,quil.core.QUARTER_PI),sketches.rac_sketches.rotating_angles.oscillate_value(quil.core.sin(angle_lights_0),(0),quil.core.QUARTER_PI));


var G__19957 = seq__19948_19952;
var G__19958 = chunk__19949_19953;
var G__19959 = count__19950_19954;
var G__19960 = (i__19951_19955 + (1));
seq__19948_19952 = G__19957;
chunk__19949_19953 = G__19958;
count__19950_19954 = G__19959;
i__19951_19955 = G__19960;
continue;
} else {
var temp__5735__auto___19961 = cljs.core.seq(seq__19948_19952);
if(temp__5735__auto___19961){
var seq__19948_19962__$1 = temp__5735__auto___19961;
if(cljs.core.chunked_seq_QMARK_(seq__19948_19962__$1)){
var c__4351__auto___19963 = cljs.core.chunk_first(seq__19948_19962__$1);
var G__19964 = cljs.core.chunk_rest(seq__19948_19962__$1);
var G__19965 = c__4351__auto___19963;
var G__19966 = cljs.core.count(c__4351__auto___19963);
var G__19967 = (0);
seq__19948_19952 = G__19964;
chunk__19949_19953 = G__19965;
count__19950_19954 = G__19966;
i__19951_19955 = G__19967;
continue;
} else {
var y0_19968 = cljs.core.first(seq__19948_19962__$1);
sketches.rac_sketches.rotating_angles.draw_beams(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.rotating_angles.x(x0),sketches.rac_sketches.rotating_angles.y(y0_19968)], null),(quil.core.width() / (5)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),angle,quil.core.QUARTER_PI),sketches.rac_sketches.rotating_angles.oscillate_value(quil.core.sin(angle_lights_0),(0),quil.core.QUARTER_PI));


var G__19969 = cljs.core.next(seq__19948_19962__$1);
var G__19970 = null;
var G__19971 = (0);
var G__19972 = (0);
seq__19948_19952 = G__19969;
chunk__19949_19953 = G__19970;
count__19950_19954 = G__19971;
i__19951_19955 = G__19972;
continue;
}
} else {
}
}
break;
}

var G__19973 = seq__19940;
var G__19974 = chunk__19945;
var G__19975 = count__19946;
var G__19976 = (i__19947 + (1));
seq__19940 = G__19973;
chunk__19945 = G__19974;
count__19946 = G__19975;
i__19947 = G__19976;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19940);
if(temp__5735__auto__){
var seq__19940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19940__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19940__$1);
var G__19977 = cljs.core.chunk_rest(seq__19940__$1);
var G__19978 = c__4351__auto__;
var G__19979 = cljs.core.count(c__4351__auto__);
var G__19980 = (0);
seq__19940 = G__19977;
chunk__19945 = G__19978;
count__19946 = G__19979;
i__19947 = G__19980;
continue;
} else {
var x0 = cljs.core.first(seq__19940__$1);
var seq__19941_19981 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.width(),(20)));
var chunk__19942_19982 = null;
var count__19943_19983 = (0);
var i__19944_19984 = (0);
while(true){
if((i__19944_19984 < count__19943_19983)){
var y0_19985 = chunk__19942_19982.cljs$core$IIndexed$_nth$arity$2(null,i__19944_19984);
sketches.rac_sketches.rotating_angles.draw_beams(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.rotating_angles.x(x0),sketches.rac_sketches.rotating_angles.y(y0_19985)], null),(quil.core.width() / (5)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),angle,quil.core.QUARTER_PI),sketches.rac_sketches.rotating_angles.oscillate_value(quil.core.sin(angle_lights_0),(0),quil.core.QUARTER_PI));


var G__19986 = seq__19941_19981;
var G__19987 = chunk__19942_19982;
var G__19988 = count__19943_19983;
var G__19989 = (i__19944_19984 + (1));
seq__19941_19981 = G__19986;
chunk__19942_19982 = G__19987;
count__19943_19983 = G__19988;
i__19944_19984 = G__19989;
continue;
} else {
var temp__5735__auto___19990__$1 = cljs.core.seq(seq__19941_19981);
if(temp__5735__auto___19990__$1){
var seq__19941_19991__$1 = temp__5735__auto___19990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19941_19991__$1)){
var c__4351__auto___19992 = cljs.core.chunk_first(seq__19941_19991__$1);
var G__19993 = cljs.core.chunk_rest(seq__19941_19991__$1);
var G__19994 = c__4351__auto___19992;
var G__19995 = cljs.core.count(c__4351__auto___19992);
var G__19996 = (0);
seq__19941_19981 = G__19993;
chunk__19942_19982 = G__19994;
count__19943_19983 = G__19995;
i__19944_19984 = G__19996;
continue;
} else {
var y0_19997 = cljs.core.first(seq__19941_19991__$1);
sketches.rac_sketches.rotating_angles.draw_beams(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.rac_sketches.rotating_angles.x(x0),sketches.rac_sketches.rotating_angles.y(y0_19997)], null),(quil.core.width() / (5)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),angle,quil.core.QUARTER_PI),sketches.rac_sketches.rotating_angles.oscillate_value(quil.core.sin(angle_lights_0),(0),quil.core.QUARTER_PI));


var G__19998 = cljs.core.next(seq__19941_19991__$1);
var G__19999 = null;
var G__20000 = (0);
var G__20001 = (0);
seq__19941_19981 = G__19998;
chunk__19942_19982 = G__19999;
count__19943_19983 = G__20000;
i__19944_19984 = G__20001;
continue;
}
} else {
}
}
break;
}

var G__20002 = cljs.core.next(seq__19940__$1);
var G__20003 = null;
var G__20004 = (0);
var G__20005 = (0);
seq__19940 = G__20002;
chunk__19945 = G__20003;
count__19946 = G__20004;
i__19947 = G__20005;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.rac_sketches.rotating_angles.run = (function sketches$rac_sketches$rotating_angles$run(host){
sketches.rac_sketches.rotating_angles.lights = (function sketches$rac_sketches$rotating_angles$run_$_lights(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20006__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20007__i = 0, G__20007__a = new Array(arguments.length -  0);
while (G__20007__i < G__20007__a.length) {G__20007__a[G__20007__i] = arguments[G__20007__i + 0]; ++G__20007__i;}
  args = new cljs.core.IndexedSeq(G__20007__a,0,null);
} 
return G__20006__delegate.call(this,args);};
G__20006.cljs$lang$maxFixedArity = 0;
G__20006.cljs$lang$applyTo = (function (arglist__20008){
var args = cljs.core.seq(arglist__20008);
return G__20006__delegate(args);
});
G__20006.cljs$core$IFn$_invoke$arity$variadic = G__20006__delegate;
return G__20006;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.rotating_angles.update_state))?(function() { 
var G__20009__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rotating_angles.update_state,args);
};
var G__20009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20010__i = 0, G__20010__a = new Array(arguments.length -  0);
while (G__20010__i < G__20010__a.length) {G__20010__a[G__20010__i] = arguments[G__20010__i + 0]; ++G__20010__i;}
  args = new cljs.core.IndexedSeq(G__20010__a,0,null);
} 
return G__20009__delegate.call(this,args);};
G__20009.cljs$lang$maxFixedArity = 0;
G__20009.cljs$lang$applyTo = (function (arglist__20011){
var args = cljs.core.seq(arglist__20011);
return G__20009__delegate(args);
});
G__20009.cljs$core$IFn$_invoke$arity$variadic = G__20009__delegate;
return G__20009;
})()
:sketches.rac_sketches.rotating_angles.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.rotating_angles.setup))?(function() { 
var G__20012__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rotating_angles.setup,args);
};
var G__20012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20013__i = 0, G__20013__a = new Array(arguments.length -  0);
while (G__20013__i < G__20013__a.length) {G__20013__a[G__20013__i] = arguments[G__20013__i + 0]; ++G__20013__i;}
  args = new cljs.core.IndexedSeq(G__20013__a,0,null);
} 
return G__20012__delegate.call(this,args);};
G__20012.cljs$lang$maxFixedArity = 0;
G__20012.cljs$lang$applyTo = (function (arglist__20014){
var args = cljs.core.seq(arglist__20014);
return G__20012__delegate(args);
});
G__20012.cljs$core$IFn$_invoke$arity$variadic = G__20012__delegate;
return G__20012;
})()
:sketches.rac_sketches.rotating_angles.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.rotating_angles.draw))?(function() { 
var G__20015__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.rotating_angles.draw,args);
};
var G__20015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20016__i = 0, G__20016__a = new Array(arguments.length -  0);
while (G__20016__i < G__20016__a.length) {G__20016__a[G__20016__i] = arguments[G__20016__i + 0]; ++G__20016__i;}
  args = new cljs.core.IndexedSeq(G__20016__a,0,null);
} 
return G__20015__delegate.call(this,args);};
G__20015.cljs$lang$maxFixedArity = 0;
G__20015.cljs$lang$applyTo = (function (arglist__20017){
var args = cljs.core.seq(arglist__20017);
return G__20015__delegate(args);
});
G__20015.cljs$core$IFn$_invoke$arity$variadic = G__20015__delegate;
return G__20015;
})()
:sketches.rac_sketches.rotating_angles.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.rotating_angles.lights', sketches.rac_sketches.rotating_angles.lights);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.rotating_angles.lights,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20018__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20019__i = 0, G__20019__a = new Array(arguments.length -  0);
while (G__20019__i < G__20019__a.length) {G__20019__a[G__20019__i] = arguments[G__20019__i + 0]; ++G__20019__i;}
  args = new cljs.core.IndexedSeq(G__20019__a,0,null);
} 
return G__20018__delegate.call(this,args);};
G__20018.cljs$lang$maxFixedArity = 0;
G__20018.cljs$lang$applyTo = (function (arglist__20020){
var args = cljs.core.seq(arglist__20020);
return G__20018__delegate(args);
});
G__20018.cljs$core$IFn$_invoke$arity$variadic = G__20018__delegate;
return G__20018;
})()
:host)], null));
}
});
