// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.vectors.bouncing_ball');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.vectors.bouncing_ball.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$z],[(0),(0),(0)]));
sketches.nature_of_code.vectors.bouncing_ball.velocity = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$z],[1.5,1.5,3.5]));
sketches.nature_of_code.vectors.bouncing_ball.add = (function sketches$nature_of_code$vectors$bouncing_ball$add(v1,v2){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$z],[(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v1) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v2)),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v1) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v2)),(cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(v1) + cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(v2))]);
});
sketches.nature_of_code.vectors.bouncing_ball.setup = (function sketches$nature_of_code$vectors$bouncing_ball$setup(){
return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
});
sketches.nature_of_code.vectors.bouncing_ball.draw = (function sketches$nature_of_code$vectors$bouncing_ball$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((127));

quil.core.no_fill();

quil.core.rotate_x(quil.core.THIRD_PI);

quil.core.rotate_z(0.1);

var location = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.bouncing_ball.location,(function (p1__18159_SHARP_){
return sketches.nature_of_code.vectors.bouncing_ball.add(p1__18159_SHARP_,cljs.core.deref(sketches.nature_of_code.vectors.bouncing_ball.velocity));
}));
var velocity = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.bouncing_ball.velocity,((function (location){
return (function (p__18160){
var map__18161 = p__18160;
var map__18161__$1 = ((((!((map__18161 == null)))?(((((map__18161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18161):map__18161);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$y);
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$z);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$z],[(((((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(location) > (125))) || ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(location) < (-125)))))?(x * (-1)):x),(((((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(location) > (90))) || ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(location) < (-125)))))?(y * (-1)):y),(((((cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(location) > (90))) || ((cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(location) < (-125)))))?(z * (-1)):z)]);
});})(location))
);
quil.core.box.cljs$core$IFn$_invoke$arity$1((250));

quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(location),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(location),cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(location));

quil.core.sphere((40));

return quil.core.pop_matrix();
});
sketches.nature_of_code.vectors.bouncing_ball.run = (function sketches$nature_of_code$vectors$bouncing_ball$run(host){
sketches.nature_of_code.vectors.bouncing_ball.bouncing_ball = (function sketches$nature_of_code$vectors$bouncing_ball$run_$_bouncing_ball(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18163__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18164__i = 0, G__18164__a = new Array(arguments.length -  0);
while (G__18164__i < G__18164__a.length) {G__18164__a[G__18164__i] = arguments[G__18164__i + 0]; ++G__18164__i;}
  args = new cljs.core.IndexedSeq(G__18164__a,0,null);
} 
return G__18163__delegate.call(this,args);};
G__18163.cljs$lang$maxFixedArity = 0;
G__18163.cljs$lang$applyTo = (function (arglist__18165){
var args = cljs.core.seq(arglist__18165);
return G__18163__delegate(args);
});
G__18163.cljs$core$IFn$_invoke$arity$variadic = G__18163__delegate;
return G__18163;
})()
:host),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p3d,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.bouncing_ball.setup))?(function() { 
var G__18166__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.bouncing_ball.setup,args);
};
var G__18166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18167__i = 0, G__18167__a = new Array(arguments.length -  0);
while (G__18167__i < G__18167__a.length) {G__18167__a[G__18167__i] = arguments[G__18167__i + 0]; ++G__18167__i;}
  args = new cljs.core.IndexedSeq(G__18167__a,0,null);
} 
return G__18166__delegate.call(this,args);};
G__18166.cljs$lang$maxFixedArity = 0;
G__18166.cljs$lang$applyTo = (function (arglist__18168){
var args = cljs.core.seq(arglist__18168);
return G__18166__delegate(args);
});
G__18166.cljs$core$IFn$_invoke$arity$variadic = G__18166__delegate;
return G__18166;
})()
:sketches.nature_of_code.vectors.bouncing_ball.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.vectors.bouncing_ball.draw))?(function() { 
var G__18169__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.vectors.bouncing_ball.draw,args);
};
var G__18169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18170__i = 0, G__18170__a = new Array(arguments.length -  0);
while (G__18170__i < G__18170__a.length) {G__18170__a[G__18170__i] = arguments[G__18170__i + 0]; ++G__18170__i;}
  args = new cljs.core.IndexedSeq(G__18170__a,0,null);
} 
return G__18169__delegate.call(this,args);};
G__18169.cljs$lang$maxFixedArity = 0;
G__18169.cljs$lang$applyTo = (function (arglist__18171){
var args = cljs.core.seq(arglist__18171);
return G__18169__delegate(args);
});
G__18169.cljs$core$IFn$_invoke$arity$variadic = G__18169__delegate;
return G__18169;
})()
:sketches.nature_of_code.vectors.bouncing_ball.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.vectors.bouncing_ball.bouncing_ball', sketches.nature_of_code.vectors.bouncing_ball.bouncing_ball);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.vectors.bouncing_ball.bouncing_ball,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__18172__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__18172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18173__i = 0, G__18173__a = new Array(arguments.length -  0);
while (G__18173__i < G__18173__a.length) {G__18173__a[G__18173__i] = arguments[G__18173__i + 0]; ++G__18173__i;}
  args = new cljs.core.IndexedSeq(G__18173__a,0,null);
} 
return G__18172__delegate.call(this,args);};
G__18172.cljs$lang$maxFixedArity = 0;
G__18172.cljs$lang$applyTo = (function (arglist__18174){
var args = cljs.core.seq(arglist__18174);
return G__18172__delegate(args);
});
G__18172.cljs$core$IFn$_invoke$arity$variadic = G__18172__delegate;
return G__18172;
})()
:host)], null));
}
});
