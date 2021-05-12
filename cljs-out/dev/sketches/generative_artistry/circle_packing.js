// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.circle_packing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.pprint');
sketches.generative_artistry.circle_packing.does_circle_have_a_collision = (function sketches$generative_artistry$circle_packing$does_circle_have_a_collision(circles,p__19501){
var map__19502 = p__19501;
var map__19502__$1 = ((((!((map__19502 == null)))?(((((map__19502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19502):map__19502);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$y);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$radius);
return cljs.core.some(((function (map__19502,map__19502__$1,x,y,radius){
return (function (other_circle){
var a = ((radius / (2)) + (cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(other_circle) / (2)));
var x__$1 = (x - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(other_circle));
var y__$1 = (y - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(other_circle));
return (a >= (function (){var G__19504 = ((x__$1 * x__$1) + (y__$1 * y__$1));
return Math.sqrt(G__19504);
})());
});})(map__19502,map__19502__$1,x,y,radius))
,circles);
});
sketches.generative_artistry.circle_packing.create_circle = (function sketches$generative_artistry$circle_packing$create_circle(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.width()),cljs.core.cst$kw$y,quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.height()),cljs.core.cst$kw$radius,(2)], null);
});
sketches.generative_artistry.circle_packing.draw_circle = (function sketches$generative_artistry$circle_packing$draw_circle(p__19505){
var map__19506 = p__19505;
var map__19506__$1 = ((((!((map__19506 == null)))?(((((map__19506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19506):map__19506);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19506__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19506__$1,cljs.core.cst$kw$y);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19506__$1,cljs.core.cst$kw$radius);
return quil.core.ellipse(x,y,radius,radius);
});
sketches.generative_artistry.circle_packing.setup = (function sketches$generative_artistry$circle_packing$setup(){
quil.core.no_fill();

var total_circles = (500);
var max_radius = (100);
var circles = (function (){var i = (0);
var G__19509 = sketches.generative_artistry.circle_packing.create_circle();
var map__19510 = G__19509;
var map__19510__$1 = ((((!((map__19510 == null)))?(((((map__19510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19510):map__19510);
var circle = map__19510__$1;
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19510__$1,cljs.core.cst$kw$radius);
var circles = cljs.core.List.EMPTY;
var i__$1 = i;
var G__19509__$1 = G__19509;
var circles__$1 = circles;
while(true){
var i__$2 = i__$1;
var map__19512 = G__19509__$1;
var map__19512__$1 = ((((!((map__19512 == null)))?(((((map__19512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19512):map__19512);
var circle__$1 = map__19512__$1;
var radius__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19512__$1,cljs.core.cst$kw$radius);
var circles__$2 = circles__$1;
if((i__$2 >= total_circles)){
return circles__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(radius__$1,max_radius)){
var G__19514 = (i__$2 + (1));
var G__19515 = sketches.generative_artistry.circle_packing.create_circle();
var G__19516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(circles__$2,circle__$1);
i__$1 = G__19514;
G__19509__$1 = G__19515;
circles__$1 = G__19516;
continue;
} else {
if(cljs.core.truth_(sketches.generative_artistry.circle_packing.does_circle_have_a_collision(circles__$2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(circle__$1,cljs.core.cst$kw$radius,cljs.core.inc)))){
if(cljs.core.not(sketches.generative_artistry.circle_packing.does_circle_have_a_collision(circles__$2,circle__$1))){
var G__19517 = (i__$2 + (1));
var G__19518 = sketches.generative_artistry.circle_packing.create_circle();
var G__19519 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(circles__$2,circle__$1);
i__$1 = G__19517;
G__19509__$1 = G__19518;
circles__$1 = G__19519;
continue;
} else {
var G__19520 = i__$2;
var G__19521 = sketches.generative_artistry.circle_packing.create_circle();
var G__19522 = circles__$2;
i__$1 = G__19520;
G__19509__$1 = G__19521;
circles__$1 = G__19522;
continue;
}
} else {
if((radius__$1 < max_radius)){
var G__19523 = i__$2;
var G__19524 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(circle__$1,cljs.core.cst$kw$radius,cljs.core.inc);
var G__19525 = circles__$2;
i__$1 = G__19523;
G__19509__$1 = G__19524;
circles__$1 = G__19525;
continue;
} else {
var G__19526 = (i__$2 + (1));
var G__19527 = sketches.generative_artistry.circle_packing.create_circle();
var G__19528 = circles__$2;
i__$1 = G__19526;
G__19509__$1 = G__19527;
circles__$1 = G__19528;
continue;

}
}
}
}
break;
}
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.circle_packing.draw_circle,circles));
});
sketches.generative_artistry.circle_packing.run = (function sketches$generative_artistry$circle_packing$run(host){
sketches.generative_artistry.circle_packing.circle_packing = (function sketches$generative_artistry$circle_packing$run_$_circle_packing(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19529__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19530__i = 0, G__19530__a = new Array(arguments.length -  0);
while (G__19530__i < G__19530__a.length) {G__19530__a[G__19530__i] = arguments[G__19530__i + 0]; ++G__19530__i;}
  args = new cljs.core.IndexedSeq(G__19530__a,0,null);
} 
return G__19529__delegate.call(this,args);};
G__19529.cljs$lang$maxFixedArity = 0;
G__19529.cljs$lang$applyTo = (function (arglist__19531){
var args = cljs.core.seq(arglist__19531);
return G__19529__delegate(args);
});
G__19529.cljs$core$IFn$_invoke$arity$variadic = G__19529__delegate;
return G__19529;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.circle_packing.setup))?(function() { 
var G__19532__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.circle_packing.setup,args);
};
var G__19532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19533__i = 0, G__19533__a = new Array(arguments.length -  0);
while (G__19533__i < G__19533__a.length) {G__19533__a[G__19533__i] = arguments[G__19533__i + 0]; ++G__19533__i;}
  args = new cljs.core.IndexedSeq(G__19533__a,0,null);
} 
return G__19532__delegate.call(this,args);};
G__19532.cljs$lang$maxFixedArity = 0;
G__19532.cljs$lang$applyTo = (function (arglist__19534){
var args = cljs.core.seq(arglist__19534);
return G__19532__delegate(args);
});
G__19532.cljs$core$IFn$_invoke$arity$variadic = G__19532__delegate;
return G__19532;
})()
:sketches.generative_artistry.circle_packing.setup)], 0));
});
goog.exportSymbol('sketches.generative_artistry.circle_packing.circle_packing', sketches.generative_artistry.circle_packing.circle_packing);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.circle_packing.circle_packing,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19535__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19536__i = 0, G__19536__a = new Array(arguments.length -  0);
while (G__19536__i < G__19536__a.length) {G__19536__a[G__19536__i] = arguments[G__19536__i + 0]; ++G__19536__i;}
  args = new cljs.core.IndexedSeq(G__19536__a,0,null);
} 
return G__19535__delegate.call(this,args);};
G__19535.cljs$lang$maxFixedArity = 0;
G__19535.cljs$lang$applyTo = (function (arglist__19537){
var args = cljs.core.seq(arglist__19537);
return G__19535__delegate(args);
});
G__19535.cljs$core$IFn$_invoke$arity$variadic = G__19535__delegate;
return G__19535;
})()
:host)], null));
}
});
