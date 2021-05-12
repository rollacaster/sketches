// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.insect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.oscillation.insect.setup = (function sketches$nature_of_code$oscillation$insect$setup(){
return cljs.core.list(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-25),(-25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-30),(-30)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(-30)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-80),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-25),(-25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-30),(30)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$angle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.08], null),cljs.core.cst$kw$amplitude,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null)], null));
});
sketches.nature_of_code.oscillation.insect.draw_foot = (function sketches$nature_of_code$oscillation$insect$draw_foot(p__22137){
var map__22138 = p__22137;
var map__22138__$1 = ((((!((map__22138 == null)))?(((((map__22138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22138):map__22138);
var vec__22139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,cljs.core.cst$kw$angle);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22139,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22139,(1),null);
var vec__22142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,cljs.core.cst$kw$amplitude);
var am1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(0),null);
var am2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(1),null);
var vec__22145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22138__$1,cljs.core.cst$kw$location);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22145,(0),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22145,(1),null);
var x = (l1 + (am1 * quil.core.cos(a1)));
var y = (l2 + (am2 * quil.core.cos(a2)));
quil.core.push_matrix();

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((175));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((175));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

quil.core.stroke_weight((4));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(0),x,y);

quil.core.ellipse(x,y,(20),(20));

return quil.core.pop_matrix();
});
sketches.nature_of_code.oscillation.insect.draw = (function sketches$nature_of_code$oscillation$insect$draw(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__22149_22153 = cljs.core.seq(state);
var chunk__22150_22154 = null;
var count__22151_22155 = (0);
var i__22152_22156 = (0);
while(true){
if((i__22152_22156 < count__22151_22155)){
var foot_22157 = chunk__22150_22154.cljs$core$IIndexed$_nth$arity$2(null,i__22152_22156);
sketches.nature_of_code.oscillation.insect.draw_foot(foot_22157);


var G__22158 = seq__22149_22153;
var G__22159 = chunk__22150_22154;
var G__22160 = count__22151_22155;
var G__22161 = (i__22152_22156 + (1));
seq__22149_22153 = G__22158;
chunk__22150_22154 = G__22159;
count__22151_22155 = G__22160;
i__22152_22156 = G__22161;
continue;
} else {
var temp__5735__auto___22162 = cljs.core.seq(seq__22149_22153);
if(temp__5735__auto___22162){
var seq__22149_22163__$1 = temp__5735__auto___22162;
if(cljs.core.chunked_seq_QMARK_(seq__22149_22163__$1)){
var c__4351__auto___22164 = cljs.core.chunk_first(seq__22149_22163__$1);
var G__22165 = cljs.core.chunk_rest(seq__22149_22163__$1);
var G__22166 = c__4351__auto___22164;
var G__22167 = cljs.core.count(c__4351__auto___22164);
var G__22168 = (0);
seq__22149_22153 = G__22165;
chunk__22150_22154 = G__22166;
count__22151_22155 = G__22167;
i__22152_22156 = G__22168;
continue;
} else {
var foot_22169 = cljs.core.first(seq__22149_22163__$1);
sketches.nature_of_code.oscillation.insect.draw_foot(foot_22169);


var G__22170 = cljs.core.next(seq__22149_22163__$1);
var G__22171 = null;
var G__22172 = (0);
var G__22173 = (0);
seq__22149_22153 = G__22170;
chunk__22150_22154 = G__22171;
count__22151_22155 = G__22172;
i__22152_22156 = G__22173;
continue;
}
} else {
}
}
break;
}

quil.core.fill.cljs$core$IFn$_invoke$arity$1((175));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((175));

quil.core.ellipse((quil.core.width() / (2)),(quil.core.height() / (2)),(80),(120));

quil.core.ellipse((quil.core.width() / (2)),((quil.core.height() / (2)) - (60)),(50),(50));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.ellipse(((quil.core.width() / (2)) - (10)),((quil.core.height() / (2)) - (70)),(10),(10));

return quil.core.ellipse(((quil.core.width() / (2)) + (10)),((quil.core.height() / (2)) - (70)),(10),(10));
});
sketches.nature_of_code.oscillation.insect.update_foot = (function sketches$nature_of_code$oscillation$insect$update_foot(p__22174){
var map__22175 = p__22174;
var map__22175__$1 = ((((!((map__22175 == null)))?(((((map__22175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22175):map__22175);
var foot = map__22175__$1;
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22175__$1,cljs.core.cst$kw$velocity);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(foot,cljs.core.cst$kw$angle,sketches.vector.add,velocity);
});
sketches.nature_of_code.oscillation.insect.update_state = (function sketches$nature_of_code$oscillation$insect$update_state(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.insect.update_foot,state);
});
sketches.nature_of_code.oscillation.insect.run = (function sketches$nature_of_code$oscillation$insect$run(host){
sketches.nature_of_code.oscillation.insect.insect = (function sketches$nature_of_code$oscillation$insect$run_$_insect(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22177__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22178__i = 0, G__22178__a = new Array(arguments.length -  0);
while (G__22178__i < G__22178__a.length) {G__22178__a[G__22178__i] = arguments[G__22178__i + 0]; ++G__22178__i;}
  args = new cljs.core.IndexedSeq(G__22178__a,0,null);
} 
return G__22177__delegate.call(this,args);};
G__22177.cljs$lang$maxFixedArity = 0;
G__22177.cljs$lang$applyTo = (function (arglist__22179){
var args = cljs.core.seq(arglist__22179);
return G__22177__delegate(args);
});
G__22177.cljs$core$IFn$_invoke$arity$variadic = G__22177__delegate;
return G__22177;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.insect.update_state))?(function() { 
var G__22180__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.insect.update_state,args);
};
var G__22180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22181__i = 0, G__22181__a = new Array(arguments.length -  0);
while (G__22181__i < G__22181__a.length) {G__22181__a[G__22181__i] = arguments[G__22181__i + 0]; ++G__22181__i;}
  args = new cljs.core.IndexedSeq(G__22181__a,0,null);
} 
return G__22180__delegate.call(this,args);};
G__22180.cljs$lang$maxFixedArity = 0;
G__22180.cljs$lang$applyTo = (function (arglist__22182){
var args = cljs.core.seq(arglist__22182);
return G__22180__delegate(args);
});
G__22180.cljs$core$IFn$_invoke$arity$variadic = G__22180__delegate;
return G__22180;
})()
:sketches.nature_of_code.oscillation.insect.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.insect.setup))?(function() { 
var G__22183__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.insect.setup,args);
};
var G__22183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22184__i = 0, G__22184__a = new Array(arguments.length -  0);
while (G__22184__i < G__22184__a.length) {G__22184__a[G__22184__i] = arguments[G__22184__i + 0]; ++G__22184__i;}
  args = new cljs.core.IndexedSeq(G__22184__a,0,null);
} 
return G__22183__delegate.call(this,args);};
G__22183.cljs$lang$maxFixedArity = 0;
G__22183.cljs$lang$applyTo = (function (arglist__22185){
var args = cljs.core.seq(arglist__22185);
return G__22183__delegate(args);
});
G__22183.cljs$core$IFn$_invoke$arity$variadic = G__22183__delegate;
return G__22183;
})()
:sketches.nature_of_code.oscillation.insect.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.insect.draw))?(function() { 
var G__22186__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.insect.draw,args);
};
var G__22186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22187__i = 0, G__22187__a = new Array(arguments.length -  0);
while (G__22187__i < G__22187__a.length) {G__22187__a[G__22187__i] = arguments[G__22187__i + 0]; ++G__22187__i;}
  args = new cljs.core.IndexedSeq(G__22187__a,0,null);
} 
return G__22186__delegate.call(this,args);};
G__22186.cljs$lang$maxFixedArity = 0;
G__22186.cljs$lang$applyTo = (function (arglist__22188){
var args = cljs.core.seq(arglist__22188);
return G__22186__delegate(args);
});
G__22186.cljs$core$IFn$_invoke$arity$variadic = G__22186__delegate;
return G__22186;
})()
:sketches.nature_of_code.oscillation.insect.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.insect.insect', sketches.nature_of_code.oscillation.insect.insect);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.insect.insect,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22189__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22190__i = 0, G__22190__a = new Array(arguments.length -  0);
while (G__22190__i < G__22190__a.length) {G__22190__a[G__22190__i] = arguments[G__22190__i + 0]; ++G__22190__i;}
  args = new cljs.core.IndexedSeq(G__22190__a,0,null);
} 
return G__22189__delegate.call(this,args);};
G__22189.cljs$lang$maxFixedArity = 0;
G__22189.cljs$lang$applyTo = (function (arglist__22191){
var args = cljs.core.seq(arglist__22191);
return G__22189__delegate(args);
});
G__22189.cljs$core$IFn$_invoke$arity$variadic = G__22189__delegate;
return G__22189;
})()
:host)], null));
}
});
