// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.physics_library.box_shapes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('oops.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.nature_of_code.physics_library.matter');
sketches.nature_of_code.physics_library.box_shapes.global$module$matter = goog.global["matter"];
sketches.nature_of_code.physics_library.box_shapes.setup = (function sketches$nature_of_code$physics_library$box_shapes$setup(){
quil.core.frame_rate((30));

var engine = (function (){var target_obj_17700 = (function (){var target_obj_17704 = sketches.nature_of_code.physics_library.box_shapes.global$module$matter;
var next_obj_17705 = (target_obj_17704["Engine"]);
return next_obj_17705;
})();
var call_info_17702 = [target_obj_17700,(function (){var next_obj_17703 = (target_obj_17700["create"]);
return next_obj_17703;
})()];
var fn_17701 = (call_info_17702[(1)]);
if(!((fn_17701 == null))){
return fn_17701.call((call_info_17702[(0)]));
} else {
return null;
}
})();
var ground = sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$5((150),(300),(300),(60),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$isStatic,true], null));
return sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic(engine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ground], 0));
});
sketches.nature_of_code.physics_library.box_shapes.update_state = (function sketches$nature_of_code$physics_library$box_shapes$update_state(engine){
return sketches.nature_of_code.physics_library.matter.update_engine(engine);
});
sketches.nature_of_code.physics_library.box_shapes.draw = (function sketches$nature_of_code$physics_library$box_shapes$draw(engine){
return sketches.nature_of_code.physics_library.matter.render(engine);
});
sketches.nature_of_code.physics_library.box_shapes.mouse_pressed = (function sketches$nature_of_code$physics_library$box_shapes$mouse_pressed(engine,p__17706){
var map__17707 = p__17706;
var map__17707__$1 = ((((!((map__17707 == null)))?(((((map__17707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17707):map__17707);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,cljs.core.cst$kw$y);
return sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic(engine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$4(x,y,(20),(20))], 0));
});
sketches.nature_of_code.physics_library.box_shapes.run = (function sketches$nature_of_code$physics_library$box_shapes$run(host){
sketches.nature_of_code.physics_library.box_shapes.box_shapes = (function sketches$nature_of_code$physics_library$box_shapes$run_$_box_shapes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17709__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17710__i = 0, G__17710__a = new Array(arguments.length -  0);
while (G__17710__i < G__17710__a.length) {G__17710__a[G__17710__i] = arguments[G__17710__i + 0]; ++G__17710__i;}
  args = new cljs.core.IndexedSeq(G__17710__a,0,null);
} 
return G__17709__delegate.call(this,args);};
G__17709.cljs$lang$maxFixedArity = 0;
G__17709.cljs$lang$applyTo = (function (arglist__17711){
var args = cljs.core.seq(arglist__17711);
return G__17709__delegate(args);
});
G__17709.cljs$core$IFn$_invoke$arity$variadic = G__17709__delegate;
return G__17709;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.box_shapes.update_state))?(function() { 
var G__17712__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.box_shapes.update_state,args);
};
var G__17712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17713__i = 0, G__17713__a = new Array(arguments.length -  0);
while (G__17713__i < G__17713__a.length) {G__17713__a[G__17713__i] = arguments[G__17713__i + 0]; ++G__17713__i;}
  args = new cljs.core.IndexedSeq(G__17713__a,0,null);
} 
return G__17712__delegate.call(this,args);};
G__17712.cljs$lang$maxFixedArity = 0;
G__17712.cljs$lang$applyTo = (function (arglist__17714){
var args = cljs.core.seq(arglist__17714);
return G__17712__delegate(args);
});
G__17712.cljs$core$IFn$_invoke$arity$variadic = G__17712__delegate;
return G__17712;
})()
:sketches.nature_of_code.physics_library.box_shapes.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.box_shapes.setup))?(function() { 
var G__17715__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.box_shapes.setup,args);
};
var G__17715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17716__i = 0, G__17716__a = new Array(arguments.length -  0);
while (G__17716__i < G__17716__a.length) {G__17716__a[G__17716__i] = arguments[G__17716__i + 0]; ++G__17716__i;}
  args = new cljs.core.IndexedSeq(G__17716__a,0,null);
} 
return G__17715__delegate.call(this,args);};
G__17715.cljs$lang$maxFixedArity = 0;
G__17715.cljs$lang$applyTo = (function (arglist__17717){
var args = cljs.core.seq(arglist__17717);
return G__17715__delegate(args);
});
G__17715.cljs$core$IFn$_invoke$arity$variadic = G__17715__delegate;
return G__17715;
})()
:sketches.nature_of_code.physics_library.box_shapes.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.box_shapes.mouse_pressed))?(function() { 
var G__17718__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.box_shapes.mouse_pressed,args);
};
var G__17718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17719__i = 0, G__17719__a = new Array(arguments.length -  0);
while (G__17719__i < G__17719__a.length) {G__17719__a[G__17719__i] = arguments[G__17719__i + 0]; ++G__17719__i;}
  args = new cljs.core.IndexedSeq(G__17719__a,0,null);
} 
return G__17718__delegate.call(this,args);};
G__17718.cljs$lang$maxFixedArity = 0;
G__17718.cljs$lang$applyTo = (function (arglist__17720){
var args = cljs.core.seq(arglist__17720);
return G__17718__delegate(args);
});
G__17718.cljs$core$IFn$_invoke$arity$variadic = G__17718__delegate;
return G__17718;
})()
:sketches.nature_of_code.physics_library.box_shapes.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.box_shapes.draw))?(function() { 
var G__17721__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.box_shapes.draw,args);
};
var G__17721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17722__i = 0, G__17722__a = new Array(arguments.length -  0);
while (G__17722__i < G__17722__a.length) {G__17722__a[G__17722__i] = arguments[G__17722__i + 0]; ++G__17722__i;}
  args = new cljs.core.IndexedSeq(G__17722__a,0,null);
} 
return G__17721__delegate.call(this,args);};
G__17721.cljs$lang$maxFixedArity = 0;
G__17721.cljs$lang$applyTo = (function (arglist__17723){
var args = cljs.core.seq(arglist__17723);
return G__17721__delegate(args);
});
G__17721.cljs$core$IFn$_invoke$arity$variadic = G__17721__delegate;
return G__17721;
})()
:sketches.nature_of_code.physics_library.box_shapes.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.physics_library.box_shapes.box_shapes', sketches.nature_of_code.physics_library.box_shapes.box_shapes);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.physics_library.box_shapes.box_shapes,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__17724__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__17724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17725__i = 0, G__17725__a = new Array(arguments.length -  0);
while (G__17725__i < G__17725__a.length) {G__17725__a[G__17725__i] = arguments[G__17725__i + 0]; ++G__17725__i;}
  args = new cljs.core.IndexedSeq(G__17725__a,0,null);
} 
return G__17724__delegate.call(this,args);};
G__17724.cljs$lang$maxFixedArity = 0;
G__17724.cljs$lang$applyTo = (function (arglist__17726){
var args = cljs.core.seq(arglist__17726);
return G__17724__delegate(args);
});
G__17724.cljs$core$IFn$_invoke$arity$variadic = G__17724__delegate;
return G__17724;
})()
:host)], null));
}
});
