// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.vector');
goog.require('cljs.core');
goog.require('cljs.core.constants');
sketches.vector.add = (function sketches$vector$add(var_args){
var G__15446 = arguments.length;
switch (G__15446) {
case 1:
return sketches.vector.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___15456 = arguments.length;
var i__4532__auto___15457 = (0);
while(true){
if((i__4532__auto___15457 < len__4531__auto___15456)){
args_arr__4546__auto__.push((arguments[i__4532__auto___15457]));

var G__15458 = (i__4532__auto___15457 + (1));
i__4532__auto___15457 = G__15458;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return sketches.vector.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

sketches.vector.add.cljs$core$IFn$_invoke$arity$1 = (function (v){
return v;
});

sketches.vector.add.cljs$core$IFn$_invoke$arity$2 = (function (p__15447,p__15448){
var vec__15449 = p__15447;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15449,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15449,(1),null);
var vec__15452 = p__15448;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15452,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15452,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});

sketches.vector.add.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,vs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sketches.vector.add,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(v1,v2),vs);
});

/** @this {Function} */
sketches.vector.add.cljs$lang$applyTo = (function (seq15443){
var G__15444 = cljs.core.first(seq15443);
var seq15443__$1 = cljs.core.next(seq15443);
var G__15445 = cljs.core.first(seq15443__$1);
var seq15443__$2 = cljs.core.next(seq15443__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15444,G__15445,seq15443__$2);
});

sketches.vector.add.cljs$lang$maxFixedArity = (2);

sketches.vector.sub = (function sketches$vector$sub(v1,v2){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.first(v1) - cljs.core.first(v2)),(cljs.core.second(v1) - cljs.core.second(v2))],null));
});
sketches.vector.mult = (function sketches$vector$mult(v1,n){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.first(v1) * n),(cljs.core.second(v1) * n)],null));
});
sketches.vector.div = (function sketches$vector$div(p__15459,n){
var vec__15460 = p__15459;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,0.0)))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,y],null));
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(x / n),(y / n)],null));
}
});
sketches.vector.mag = (function sketches$vector$mag(p__15463){
var vec__15464 = p__15463;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(1),null);
var G__15467 = ((x * x) + (y * y));
return Math.sqrt(G__15467);
});
sketches.vector.normalize = (function sketches$vector$normalize(v){
var m = sketches.vector.mag(v);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,0.0))){
return sketches.vector.div(v,m);
} else {
return v;
}
});
sketches.vector.limit = (function sketches$vector$limit(p__15468,top){
var vec__15469 = p__15468;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469,(1),null);
if((sketches.vector.mag(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)) > top)){
return sketches.vector.mult(sketches.vector.normalize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),top);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
sketches.vector.rotate = (function sketches$vector$rotate(p__15472,angle){
var vec__15473 = p__15472;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((Math.cos(angle) * x) - (Math.sin(angle) * y)),((Math.sin(angle) * x) + (Math.cos(angle) * y))], null);
});
sketches.vector.from_angle = (function sketches$vector$from_angle(var_args){
var G__15477 = arguments.length;
switch (G__15477) {
case 1:
return sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$1 = (function (angle){
return sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$2(angle,(1));
});

sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$2 = (function (angle,length){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(length * Math.cos(angle)),(length * Math.sin(angle))], null);
});

sketches.vector.from_angle.cljs$lang$maxFixedArity = 2;

