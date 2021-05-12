// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.physics_library.circular_shapes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('oops.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.nature_of_code.physics_library.matter');
sketches.nature_of_code.physics_library.circular_shapes.global$module$matter = goog.global["matter"];
sketches.nature_of_code.physics_library.circular_shapes.setup = (function sketches$nature_of_code$physics_library$circular_shapes$setup(){
quil.core.frame_rate((30));

var engine = (function (){var target_obj_24143 = (function (){var target_obj_24147 = sketches.nature_of_code.physics_library.circular_shapes.global$module$matter;
var next_obj_24148 = (target_obj_24147["Engine"]);
return next_obj_24148;
})();
var call_info_24145 = [target_obj_24143,(function (){var next_obj_24146 = (target_obj_24143["create"]);
return next_obj_24146;
})()];
var fn_24144 = (call_info_24145[(1)]);
if(!((fn_24144 == null))){
return fn_24144.call((call_info_24145[(0)]));
} else {
return null;
}
})();
var ground = sketches.nature_of_code.physics_library.matter.rect.cljs$core$IFn$_invoke$arity$5((150),(300),(300),(60),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$isStatic,true], null));
return sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic(engine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ground], 0));
});
sketches.nature_of_code.physics_library.circular_shapes.update_state = (function sketches$nature_of_code$physics_library$circular_shapes$update_state(engine){
return sketches.nature_of_code.physics_library.matter.update_engine(engine);
});
sketches.nature_of_code.physics_library.circular_shapes.draw = (function sketches$nature_of_code$physics_library$circular_shapes$draw(engine){
return sketches.nature_of_code.physics_library.matter.render(engine);
});
sketches.nature_of_code.physics_library.circular_shapes.mouse_pressed = (function sketches$nature_of_code$physics_library$circular_shapes$mouse_pressed(engine,p__24149){
var map__24150 = p__24149;
var map__24150__$1 = ((((!((map__24150 == null)))?(((((map__24150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24150):map__24150);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24150__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24150__$1,cljs.core.cst$kw$y);
return sketches.nature_of_code.physics_library.matter.add.cljs$core$IFn$_invoke$arity$variadic(engine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sketches.nature_of_code.physics_library.matter.circle.cljs$core$IFn$_invoke$arity$4(x,y,(20),(20))], 0));
});
sketches.nature_of_code.physics_library.circular_shapes.run = (function sketches$nature_of_code$physics_library$circular_shapes$run(host){
sketches.nature_of_code.physics_library.circular_shapes.circular_shapes = (function sketches$nature_of_code$physics_library$circular_shapes$run_$_circular_shapes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24152__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24153__i = 0, G__24153__a = new Array(arguments.length -  0);
while (G__24153__i < G__24153__a.length) {G__24153__a[G__24153__i] = arguments[G__24153__i + 0]; ++G__24153__i;}
  args = new cljs.core.IndexedSeq(G__24153__a,0,null);
} 
return G__24152__delegate.call(this,args);};
G__24152.cljs$lang$maxFixedArity = 0;
G__24152.cljs$lang$applyTo = (function (arglist__24154){
var args = cljs.core.seq(arglist__24154);
return G__24152__delegate(args);
});
G__24152.cljs$core$IFn$_invoke$arity$variadic = G__24152__delegate;
return G__24152;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.circular_shapes.update_state))?(function() { 
var G__24155__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.circular_shapes.update_state,args);
};
var G__24155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24156__i = 0, G__24156__a = new Array(arguments.length -  0);
while (G__24156__i < G__24156__a.length) {G__24156__a[G__24156__i] = arguments[G__24156__i + 0]; ++G__24156__i;}
  args = new cljs.core.IndexedSeq(G__24156__a,0,null);
} 
return G__24155__delegate.call(this,args);};
G__24155.cljs$lang$maxFixedArity = 0;
G__24155.cljs$lang$applyTo = (function (arglist__24157){
var args = cljs.core.seq(arglist__24157);
return G__24155__delegate(args);
});
G__24155.cljs$core$IFn$_invoke$arity$variadic = G__24155__delegate;
return G__24155;
})()
:sketches.nature_of_code.physics_library.circular_shapes.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.circular_shapes.setup))?(function() { 
var G__24158__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.circular_shapes.setup,args);
};
var G__24158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24159__i = 0, G__24159__a = new Array(arguments.length -  0);
while (G__24159__i < G__24159__a.length) {G__24159__a[G__24159__i] = arguments[G__24159__i + 0]; ++G__24159__i;}
  args = new cljs.core.IndexedSeq(G__24159__a,0,null);
} 
return G__24158__delegate.call(this,args);};
G__24158.cljs$lang$maxFixedArity = 0;
G__24158.cljs$lang$applyTo = (function (arglist__24160){
var args = cljs.core.seq(arglist__24160);
return G__24158__delegate(args);
});
G__24158.cljs$core$IFn$_invoke$arity$variadic = G__24158__delegate;
return G__24158;
})()
:sketches.nature_of_code.physics_library.circular_shapes.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.circular_shapes.mouse_pressed))?(function() { 
var G__24161__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.circular_shapes.mouse_pressed,args);
};
var G__24161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24162__i = 0, G__24162__a = new Array(arguments.length -  0);
while (G__24162__i < G__24162__a.length) {G__24162__a[G__24162__i] = arguments[G__24162__i + 0]; ++G__24162__i;}
  args = new cljs.core.IndexedSeq(G__24162__a,0,null);
} 
return G__24161__delegate.call(this,args);};
G__24161.cljs$lang$maxFixedArity = 0;
G__24161.cljs$lang$applyTo = (function (arglist__24163){
var args = cljs.core.seq(arglist__24163);
return G__24161__delegate(args);
});
G__24161.cljs$core$IFn$_invoke$arity$variadic = G__24161__delegate;
return G__24161;
})()
:sketches.nature_of_code.physics_library.circular_shapes.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.physics_library.circular_shapes.draw))?(function() { 
var G__24164__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.physics_library.circular_shapes.draw,args);
};
var G__24164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24165__i = 0, G__24165__a = new Array(arguments.length -  0);
while (G__24165__i < G__24165__a.length) {G__24165__a[G__24165__i] = arguments[G__24165__i + 0]; ++G__24165__i;}
  args = new cljs.core.IndexedSeq(G__24165__a,0,null);
} 
return G__24164__delegate.call(this,args);};
G__24164.cljs$lang$maxFixedArity = 0;
G__24164.cljs$lang$applyTo = (function (arglist__24166){
var args = cljs.core.seq(arglist__24166);
return G__24164__delegate(args);
});
G__24164.cljs$core$IFn$_invoke$arity$variadic = G__24164__delegate;
return G__24164;
})()
:sketches.nature_of_code.physics_library.circular_shapes.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.physics_library.circular_shapes.circular_shapes', sketches.nature_of_code.physics_library.circular_shapes.circular_shapes);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.physics_library.circular_shapes.circular_shapes,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24167__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24168__i = 0, G__24168__a = new Array(arguments.length -  0);
while (G__24168__i < G__24168__a.length) {G__24168__a[G__24168__i] = arguments[G__24168__i + 0]; ++G__24168__i;}
  args = new cljs.core.IndexedSeq(G__24168__a,0,null);
} 
return G__24167__delegate.call(this,args);};
G__24167.cljs$lang$maxFixedArity = 0;
G__24167.cljs$lang$applyTo = (function (arglist__24169){
var args = cljs.core.seq(arglist__24169);
return G__24167__delegate(args);
});
G__24167.cljs$core$IFn$_invoke$arity$variadic = G__24167__delegate;
return G__24167;
})()
:host)], null));
}
});
