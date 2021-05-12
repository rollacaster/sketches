// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.reverse_roots');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.rac_sketches.reverse_roots.create_particle = (function sketches$rac_sketches$reverse_roots$create_particle(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),quil.core.height()], null),cljs.core.cst$kw$lifespan,(255)], null);
});
sketches.rac_sketches.reverse_roots.setup = (function sketches$rac_sketches$reverse_roots$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY], null);
});
sketches.rac_sketches.reverse_roots.update_particle = (function sketches$rac_sketches$reverse_roots$update_particle(particle){
var levity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.01], null);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(-0.1,0.1),(0)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sketches.mover.update_mover(particle,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(levity,wind)),cljs.core.cst$kw$lifespan,cljs.core.dec);
});
sketches.rac_sketches.reverse_roots.update_state = (function sketches$rac_sketches$reverse_roots$update_state(p__21870){
var map__21871 = p__21870;
var map__21871__$1 = ((((!((map__21871 == null)))?(((((map__21871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21871):map__21871);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871__$1,cljs.core.cst$kw$particles);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(quil.core.frame_count(),(500)),(0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$particles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.reverse_roots.update_particle,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21871,map__21871__$1,particles){
return (function (p__21873){
var map__21874 = p__21873;
var map__21874__$1 = ((((!((map__21874 == null)))?(((((map__21874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21874):map__21874);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,cljs.core.cst$kw$lifespan);
return (lifespan >= (0));
});})(map__21871,map__21871__$1,particles))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.rac_sketches.reverse_roots.create_particle())))], null);
}
});
sketches.rac_sketches.reverse_roots.draw_particle = (function sketches$rac_sketches$reverse_roots$draw_particle(p__21876){
var map__21877 = p__21876;
var map__21877__$1 = ((((!((map__21877 == null)))?(((((map__21877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21877):map__21877);
var vec__21878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21877__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21877__$1,cljs.core.cst$kw$lifespan);
quil.core.fill.cljs$core$IFn$_invoke$arity$2((255),lifespan);

return quil.core.ellipse(x,y,quil.core.map_range(lifespan,(0),(255),(0),(32)),quil.core.map_range(lifespan,(0),(255),(0),(32)));
});
sketches.rac_sketches.reverse_roots.draw = (function sketches$rac_sketches$reverse_roots$draw(p__21882){
var map__21883 = p__21882;
var map__21883__$1 = ((((!((map__21883 == null)))?(((((map__21883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21883):map__21883);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21883__$1,cljs.core.cst$kw$particles);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(quil.core.frame_count(),(500)),(0))){
quil.core.clear();
} else {
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.reverse_roots.draw_particle,particles));
});
sketches.rac_sketches.reverse_roots.run = (function sketches$rac_sketches$reverse_roots$run(host){
sketches.rac_sketches.reverse_roots.reverse_roots = (function sketches$rac_sketches$reverse_roots$run_$_reverse_roots(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21885__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21886__i = 0, G__21886__a = new Array(arguments.length -  0);
while (G__21886__i < G__21886__a.length) {G__21886__a[G__21886__i] = arguments[G__21886__i + 0]; ++G__21886__i;}
  args = new cljs.core.IndexedSeq(G__21886__a,0,null);
} 
return G__21885__delegate.call(this,args);};
G__21885.cljs$lang$maxFixedArity = 0;
G__21885.cljs$lang$applyTo = (function (arglist__21887){
var args = cljs.core.seq(arglist__21887);
return G__21885__delegate(args);
});
G__21885.cljs$core$IFn$_invoke$arity$variadic = G__21885__delegate;
return G__21885;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.reverse_roots.update_state))?(function() { 
var G__21888__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.reverse_roots.update_state,args);
};
var G__21888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21889__i = 0, G__21889__a = new Array(arguments.length -  0);
while (G__21889__i < G__21889__a.length) {G__21889__a[G__21889__i] = arguments[G__21889__i + 0]; ++G__21889__i;}
  args = new cljs.core.IndexedSeq(G__21889__a,0,null);
} 
return G__21888__delegate.call(this,args);};
G__21888.cljs$lang$maxFixedArity = 0;
G__21888.cljs$lang$applyTo = (function (arglist__21890){
var args = cljs.core.seq(arglist__21890);
return G__21888__delegate(args);
});
G__21888.cljs$core$IFn$_invoke$arity$variadic = G__21888__delegate;
return G__21888;
})()
:sketches.rac_sketches.reverse_roots.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.reverse_roots.setup))?(function() { 
var G__21891__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.reverse_roots.setup,args);
};
var G__21891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21892__i = 0, G__21892__a = new Array(arguments.length -  0);
while (G__21892__i < G__21892__a.length) {G__21892__a[G__21892__i] = arguments[G__21892__i + 0]; ++G__21892__i;}
  args = new cljs.core.IndexedSeq(G__21892__a,0,null);
} 
return G__21891__delegate.call(this,args);};
G__21891.cljs$lang$maxFixedArity = 0;
G__21891.cljs$lang$applyTo = (function (arglist__21893){
var args = cljs.core.seq(arglist__21893);
return G__21891__delegate(args);
});
G__21891.cljs$core$IFn$_invoke$arity$variadic = G__21891__delegate;
return G__21891;
})()
:sketches.rac_sketches.reverse_roots.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.reverse_roots.draw))?(function() { 
var G__21894__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.reverse_roots.draw,args);
};
var G__21894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21895__i = 0, G__21895__a = new Array(arguments.length -  0);
while (G__21895__i < G__21895__a.length) {G__21895__a[G__21895__i] = arguments[G__21895__i + 0]; ++G__21895__i;}
  args = new cljs.core.IndexedSeq(G__21895__a,0,null);
} 
return G__21894__delegate.call(this,args);};
G__21894.cljs$lang$maxFixedArity = 0;
G__21894.cljs$lang$applyTo = (function (arglist__21896){
var args = cljs.core.seq(arglist__21896);
return G__21894__delegate(args);
});
G__21894.cljs$core$IFn$_invoke$arity$variadic = G__21894__delegate;
return G__21894;
})()
:sketches.rac_sketches.reverse_roots.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.reverse_roots.reverse_roots', sketches.rac_sketches.reverse_roots.reverse_roots);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.reverse_roots.reverse_roots,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21897__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21898__i = 0, G__21898__a = new Array(arguments.length -  0);
while (G__21898__i < G__21898__a.length) {G__21898__a[G__21898__i] = arguments[G__21898__i + 0]; ++G__21898__i;}
  args = new cljs.core.IndexedSeq(G__21898__a,0,null);
} 
return G__21897__delegate.call(this,args);};
G__21897.cljs$lang$maxFixedArity = 0;
G__21897.cljs$lang$applyTo = (function (arglist__21899){
var args = cljs.core.seq(arglist__21899);
return G__21897__delegate(args);
});
G__21897.cljs$core$IFn$_invoke$arity$variadic = G__21897__delegate;
return G__21897;
})()
:host)], null));
}
});
