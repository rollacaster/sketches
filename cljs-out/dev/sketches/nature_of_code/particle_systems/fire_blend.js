// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.fire_blend');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.fire_blend.setup = (function sketches$nature_of_code$particle_systems$fire_blend$setup(){
quil.core.image_mode(cljs.core.cst$kw$center);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$image,quil.core.load_image("images/texture-white.png")], null);
});
sketches.nature_of_code.particle_systems.fire_blend.create_texture = (function sketches$nature_of_code$particle_systems$fire_blend$create_texture(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((10),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.8),(quil.core.random_gaussian() - 1.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0], 0));
});
sketches.nature_of_code.particle_systems.fire_blend.is_dead = (function sketches$nature_of_code$particle_systems$fire_blend$is_dead(p__22240){
var map__22241 = p__22240;
var map__22241__$1 = ((((!((map__22241 == null)))?(((((map__22241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22241):map__22241);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.fire_blend.apply_force = (function sketches$nature_of_code$particle_systems$fire_blend$apply_force(force,p__22243){
var map__22244 = p__22243;
var map__22244__$1 = ((((!((map__22244 == null)))?(((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22244):map__22244);
var particle = map__22244__$1;
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,cljs.core.cst$kw$mass);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,cljs.core.cst$kw$acceleration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,sketches.vector.div(force,mass)));
});
sketches.nature_of_code.particle_systems.fire_blend.dec_lifespan = (function sketches$nature_of_code$particle_systems$fire_blend$dec_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.fire_blend.update_state = (function sketches$nature_of_code$particle_systems$fire_blend$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particles,(function (p1__22246_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_blend.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.mover.compute_position,sketches.nature_of_code.particle_systems.fire_blend.dec_lifespan),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22246_SHARP_,sketches.nature_of_code.particle_systems.fire_blend.create_texture(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null)))));
}));
});
sketches.nature_of_code.particle_systems.fire_blend.draw_particle = (function sketches$nature_of_code$particle_systems$fire_blend$draw_particle(p__22247,image){
var map__22248 = p__22247;
var map__22248__$1 = ((((!((map__22248 == null)))?(((((map__22248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22248):map__22248);
var vec__22249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22249,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22249,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248__$1,cljs.core.cst$kw$lifespan);
quil.core.tint.cljs$core$IFn$_invoke$arity$3(lifespan,(255),(255));

return quil.core.image.cljs$core$IFn$_invoke$arity$5(image,x,y,quil.core.map_range(lifespan,(255),(0),(100),(0)),quil.core.map_range(lifespan,(255),(0),(100),(0)));
});
sketches.nature_of_code.particle_systems.fire_blend.draw = (function sketches$nature_of_code$particle_systems$fire_blend$draw(p__22253){
var map__22254 = p__22253;
var map__22254__$1 = ((((!((map__22254 == null)))?(((((map__22254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22254):map__22254);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22254__$1,cljs.core.cst$kw$particles);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22254__$1,cljs.core.cst$kw$image);
quil.core.blend_mode(cljs.core.cst$kw$exclusion);

quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

var seq__22256 = cljs.core.seq(particles);
var chunk__22257 = null;
var count__22258 = (0);
var i__22259 = (0);
while(true){
if((i__22259 < count__22258)){
var particle = chunk__22257.cljs$core$IIndexed$_nth$arity$2(null,i__22259);
sketches.nature_of_code.particle_systems.fire_blend.draw_particle(particle,image);


var G__22260 = seq__22256;
var G__22261 = chunk__22257;
var G__22262 = count__22258;
var G__22263 = (i__22259 + (1));
seq__22256 = G__22260;
chunk__22257 = G__22261;
count__22258 = G__22262;
i__22259 = G__22263;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22256);
if(temp__5735__auto__){
var seq__22256__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22256__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22256__$1);
var G__22264 = cljs.core.chunk_rest(seq__22256__$1);
var G__22265 = c__4351__auto__;
var G__22266 = cljs.core.count(c__4351__auto__);
var G__22267 = (0);
seq__22256 = G__22264;
chunk__22257 = G__22265;
count__22258 = G__22266;
i__22259 = G__22267;
continue;
} else {
var particle = cljs.core.first(seq__22256__$1);
sketches.nature_of_code.particle_systems.fire_blend.draw_particle(particle,image);


var G__22268 = cljs.core.next(seq__22256__$1);
var G__22269 = null;
var G__22270 = (0);
var G__22271 = (0);
seq__22256 = G__22268;
chunk__22257 = G__22269;
count__22258 = G__22270;
i__22259 = G__22271;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.fire_blend.run = (function sketches$nature_of_code$particle_systems$fire_blend$run(host){
sketches.nature_of_code.particle_systems.fire_blend.fire_blend = (function sketches$nature_of_code$particle_systems$fire_blend$run_$_fire_blend(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22272__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22273__i = 0, G__22273__a = new Array(arguments.length -  0);
while (G__22273__i < G__22273__a.length) {G__22273__a[G__22273__i] = arguments[G__22273__i + 0]; ++G__22273__i;}
  args = new cljs.core.IndexedSeq(G__22273__a,0,null);
} 
return G__22272__delegate.call(this,args);};
G__22272.cljs$lang$maxFixedArity = 0;
G__22272.cljs$lang$applyTo = (function (arglist__22274){
var args = cljs.core.seq(arglist__22274);
return G__22272__delegate(args);
});
G__22272.cljs$core$IFn$_invoke$arity$variadic = G__22272__delegate;
return G__22272;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_blend.update_state))?(function() { 
var G__22275__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_blend.update_state,args);
};
var G__22275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22276__i = 0, G__22276__a = new Array(arguments.length -  0);
while (G__22276__i < G__22276__a.length) {G__22276__a[G__22276__i] = arguments[G__22276__i + 0]; ++G__22276__i;}
  args = new cljs.core.IndexedSeq(G__22276__a,0,null);
} 
return G__22275__delegate.call(this,args);};
G__22275.cljs$lang$maxFixedArity = 0;
G__22275.cljs$lang$applyTo = (function (arglist__22277){
var args = cljs.core.seq(arglist__22277);
return G__22275__delegate(args);
});
G__22275.cljs$core$IFn$_invoke$arity$variadic = G__22275__delegate;
return G__22275;
})()
:sketches.nature_of_code.particle_systems.fire_blend.update_state),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p3d,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_blend.setup))?(function() { 
var G__22278__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_blend.setup,args);
};
var G__22278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22279__i = 0, G__22279__a = new Array(arguments.length -  0);
while (G__22279__i < G__22279__a.length) {G__22279__a[G__22279__i] = arguments[G__22279__i + 0]; ++G__22279__i;}
  args = new cljs.core.IndexedSeq(G__22279__a,0,null);
} 
return G__22278__delegate.call(this,args);};
G__22278.cljs$lang$maxFixedArity = 0;
G__22278.cljs$lang$applyTo = (function (arglist__22280){
var args = cljs.core.seq(arglist__22280);
return G__22278__delegate(args);
});
G__22278.cljs$core$IFn$_invoke$arity$variadic = G__22278__delegate;
return G__22278;
})()
:sketches.nature_of_code.particle_systems.fire_blend.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_blend.draw))?(function() { 
var G__22281__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_blend.draw,args);
};
var G__22281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22282__i = 0, G__22282__a = new Array(arguments.length -  0);
while (G__22282__i < G__22282__a.length) {G__22282__a[G__22282__i] = arguments[G__22282__i + 0]; ++G__22282__i;}
  args = new cljs.core.IndexedSeq(G__22282__a,0,null);
} 
return G__22281__delegate.call(this,args);};
G__22281.cljs$lang$maxFixedArity = 0;
G__22281.cljs$lang$applyTo = (function (arglist__22283){
var args = cljs.core.seq(arglist__22283);
return G__22281__delegate(args);
});
G__22281.cljs$core$IFn$_invoke$arity$variadic = G__22281__delegate;
return G__22281;
})()
:sketches.nature_of_code.particle_systems.fire_blend.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.fire_blend.fire_blend', sketches.nature_of_code.particle_systems.fire_blend.fire_blend);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.fire_blend.fire_blend,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22284__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22285__i = 0, G__22285__a = new Array(arguments.length -  0);
while (G__22285__i < G__22285__a.length) {G__22285__a[G__22285__i] = arguments[G__22285__i + 0]; ++G__22285__i;}
  args = new cljs.core.IndexedSeq(G__22285__a,0,null);
} 
return G__22284__delegate.call(this,args);};
G__22284.cljs$lang$maxFixedArity = 0;
G__22284.cljs$lang$applyTo = (function (arglist__22286){
var args = cljs.core.seq(arglist__22286);
return G__22284__delegate(args);
});
G__22284.cljs$core$IFn$_invoke$arity$variadic = G__22284__delegate;
return G__22284;
})()
:host)], null));
}
});
