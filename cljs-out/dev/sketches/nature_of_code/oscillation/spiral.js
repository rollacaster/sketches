// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.spiral');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.oscillation.spiral.setup = (function sketches$nature_of_code$oscillation$spiral$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$radius,(0),cljs.core.cst$kw$theta,(0)], null);
});
sketches.nature_of_code.oscillation.spiral.draw = (function sketches$nature_of_code$oscillation$spiral$draw(p__19849){
var map__19850 = p__19849;
var map__19850__$1 = ((((!((map__19850 == null)))?(((((map__19850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19850):map__19850);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,cljs.core.cst$kw$radius);
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,cljs.core.cst$kw$theta);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

var x = (radius * quil.core.cos(theta));
var y = (radius * quil.core.sin(theta));
return quil.core.ellipse((x + (quil.core.width() / (2))),(y + (quil.core.height() / (2))),(16),(16));
});
sketches.nature_of_code.oscillation.spiral.update_state = (function sketches$nature_of_code$oscillation$spiral$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$theta,cljs.core._PLUS_,0.05),cljs.core.cst$kw$radius,cljs.core._PLUS_,0.2);
});
sketches.nature_of_code.oscillation.spiral.run = (function sketches$nature_of_code$oscillation$spiral$run(host){
sketches.nature_of_code.oscillation.spiral.spiral = (function sketches$nature_of_code$oscillation$spiral$run_$_spiral(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19852__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19853__i = 0, G__19853__a = new Array(arguments.length -  0);
while (G__19853__i < G__19853__a.length) {G__19853__a[G__19853__i] = arguments[G__19853__i + 0]; ++G__19853__i;}
  args = new cljs.core.IndexedSeq(G__19853__a,0,null);
} 
return G__19852__delegate.call(this,args);};
G__19852.cljs$lang$maxFixedArity = 0;
G__19852.cljs$lang$applyTo = (function (arglist__19854){
var args = cljs.core.seq(arglist__19854);
return G__19852__delegate(args);
});
G__19852.cljs$core$IFn$_invoke$arity$variadic = G__19852__delegate;
return G__19852;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.spiral.update_state))?(function() { 
var G__19855__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.spiral.update_state,args);
};
var G__19855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19856__i = 0, G__19856__a = new Array(arguments.length -  0);
while (G__19856__i < G__19856__a.length) {G__19856__a[G__19856__i] = arguments[G__19856__i + 0]; ++G__19856__i;}
  args = new cljs.core.IndexedSeq(G__19856__a,0,null);
} 
return G__19855__delegate.call(this,args);};
G__19855.cljs$lang$maxFixedArity = 0;
G__19855.cljs$lang$applyTo = (function (arglist__19857){
var args = cljs.core.seq(arglist__19857);
return G__19855__delegate(args);
});
G__19855.cljs$core$IFn$_invoke$arity$variadic = G__19855__delegate;
return G__19855;
})()
:sketches.nature_of_code.oscillation.spiral.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.spiral.setup))?(function() { 
var G__19858__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.spiral.setup,args);
};
var G__19858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19859__i = 0, G__19859__a = new Array(arguments.length -  0);
while (G__19859__i < G__19859__a.length) {G__19859__a[G__19859__i] = arguments[G__19859__i + 0]; ++G__19859__i;}
  args = new cljs.core.IndexedSeq(G__19859__a,0,null);
} 
return G__19858__delegate.call(this,args);};
G__19858.cljs$lang$maxFixedArity = 0;
G__19858.cljs$lang$applyTo = (function (arglist__19860){
var args = cljs.core.seq(arglist__19860);
return G__19858__delegate(args);
});
G__19858.cljs$core$IFn$_invoke$arity$variadic = G__19858__delegate;
return G__19858;
})()
:sketches.nature_of_code.oscillation.spiral.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.spiral.draw))?(function() { 
var G__19861__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.spiral.draw,args);
};
var G__19861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19862__i = 0, G__19862__a = new Array(arguments.length -  0);
while (G__19862__i < G__19862__a.length) {G__19862__a[G__19862__i] = arguments[G__19862__i + 0]; ++G__19862__i;}
  args = new cljs.core.IndexedSeq(G__19862__a,0,null);
} 
return G__19861__delegate.call(this,args);};
G__19861.cljs$lang$maxFixedArity = 0;
G__19861.cljs$lang$applyTo = (function (arglist__19863){
var args = cljs.core.seq(arglist__19863);
return G__19861__delegate(args);
});
G__19861.cljs$core$IFn$_invoke$arity$variadic = G__19861__delegate;
return G__19861;
})()
:sketches.nature_of_code.oscillation.spiral.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.spiral.spiral', sketches.nature_of_code.oscillation.spiral.spiral);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.spiral.spiral,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19864__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19865__i = 0, G__19865__a = new Array(arguments.length -  0);
while (G__19865__i < G__19865__a.length) {G__19865__a[G__19865__i] = arguments[G__19865__i + 0]; ++G__19865__i;}
  args = new cljs.core.IndexedSeq(G__19865__a,0,null);
} 
return G__19864__delegate.call(this,args);};
G__19864.cljs$lang$maxFixedArity = 0;
G__19864.cljs$lang$applyTo = (function (arglist__19866){
var args = cljs.core.seq(arglist__19866);
return G__19864__delegate(args);
});
G__19864.cljs$core$IFn$_invoke$arity$variadic = G__19864__delegate;
return G__19864;
})()
:host)], null));
}
});
