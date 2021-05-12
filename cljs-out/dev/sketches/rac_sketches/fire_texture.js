// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.fire_texture');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.rac_sketches.fire_texture.setup = (function sketches$rac_sketches$fire_texture$setup(){
quil.core.no_stroke();

quil.core.blend_mode(cljs.core.cst$kw$add);

quil.core.image_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() * 0.6)], null),cljs.core.cst$kw$image,quil.core.load_image("images/texture.png")], null);
});
sketches.rac_sketches.fire_texture.create_particle = (function sketches$rac_sketches$fire_texture$create_particle(location){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.3),((quil.core.random_gaussian() * 0.4) - 1.0)], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$mass,(10)], null);
});
sketches.rac_sketches.fire_texture.is_dead = (function sketches$rac_sketches$fire_texture$is_dead(p__21368){
var map__21369 = p__21368;
var map__21369__$1 = ((((!((map__21369 == null)))?(((((map__21369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21369):map__21369);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.rac_sketches.fire_texture.apply_force = (function sketches$rac_sketches$fire_texture$apply_force(force,p__21371){
var map__21372 = p__21371;
var map__21372__$1 = ((((!((map__21372 == null)))?(((((map__21372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21372):map__21372);
var particle = map__21372__$1;
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372__$1,cljs.core.cst$kw$mass);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372__$1,cljs.core.cst$kw$acceleration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,sketches.vector.div(force,mass)));
});
sketches.rac_sketches.fire_texture.update_particle = (function sketches$rac_sketches$fire_texture$update_particle(p__21374){
var map__21375 = p__21374;
var map__21375__$1 = ((((!((map__21375 == null)))?(((((map__21375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21375):map__21375);
var particle = map__21375__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$lifespan);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$lifespan,(lifespan - 2.0)),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
sketches.rac_sketches.fire_texture.update_state = (function sketches$rac_sketches$fire_texture$update_state(p__21381){
var map__21382 = p__21381;
var map__21382__$1 = ((((!((map__21382 == null)))?(((((map__21382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21382):map__21382);
var state = map__21382__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$origin);
var wind = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.map_range(quil.core.mouse_x(),0.0,quil.core.width(),-0.3,0.3),quil.core.map_range(quil.core.mouse_y(),0.0,quil.core.height(),-0.3,0.3)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particles,((function (wind,map__21382,map__21382__$1,state,origin){
return (function (p1__21377_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21377_SHARP_,sketches.rac_sketches.fire_texture.create_particle(origin));
});})(wind,map__21382,map__21382__$1,state,origin))
),cljs.core.cst$kw$particles,((function (wind,map__21382,map__21382__$1,state,origin){
return (function (p1__21378_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.apply_force,wind),p1__21378_SHARP_);
});})(wind,map__21382,map__21382__$1,state,origin))
),cljs.core.cst$kw$particles,((function (wind,map__21382,map__21382__$1,state,origin){
return (function (p1__21379_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.update_particle,p1__21379_SHARP_);
});})(wind,map__21382,map__21382__$1,state,origin))
),cljs.core.cst$kw$particles,((function (wind,map__21382,map__21382__$1,state,origin){
return (function (p1__21380_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.is_dead,p1__21380_SHARP_);
});})(wind,map__21382,map__21382__$1,state,origin))
);
});
sketches.rac_sketches.fire_texture.draw_particle = (function sketches$rac_sketches$fire_texture$draw_particle(p__21384,image){
var map__21385 = p__21384;
var map__21385__$1 = ((((!((map__21385 == null)))?(((((map__21385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);
var particle = map__21385__$1;
var vec__21386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21386,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21386,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$lifespan);
quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.tint.cljs$core$IFn$_invoke$arity$4((255),(127),(64),lifespan);

if(cljs.core.truth_(quil.core.loaded_QMARK_(image))){
return quil.core.image.cljs$core$IFn$_invoke$arity$3(image,x,y);
} else {
return null;
}
});
sketches.rac_sketches.fire_texture.draw = (function sketches$rac_sketches$fire_texture$draw(p__21390){
var map__21391 = p__21390;
var map__21391__$1 = ((((!((map__21391 == null)))?(((((map__21391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21391):map__21391);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.cst$kw$particles);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.cst$kw$image);
quil.core.clear();

var seq__21393 = cljs.core.seq(particles);
var chunk__21394 = null;
var count__21395 = (0);
var i__21396 = (0);
while(true){
if((i__21396 < count__21395)){
var particle = chunk__21394.cljs$core$IIndexed$_nth$arity$2(null,i__21396);
sketches.rac_sketches.fire_texture.draw_particle(particle,image);


var G__21397 = seq__21393;
var G__21398 = chunk__21394;
var G__21399 = count__21395;
var G__21400 = (i__21396 + (1));
seq__21393 = G__21397;
chunk__21394 = G__21398;
count__21395 = G__21399;
i__21396 = G__21400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21393);
if(temp__5735__auto__){
var seq__21393__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21393__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21393__$1);
var G__21401 = cljs.core.chunk_rest(seq__21393__$1);
var G__21402 = c__4351__auto__;
var G__21403 = cljs.core.count(c__4351__auto__);
var G__21404 = (0);
seq__21393 = G__21401;
chunk__21394 = G__21402;
count__21395 = G__21403;
i__21396 = G__21404;
continue;
} else {
var particle = cljs.core.first(seq__21393__$1);
sketches.rac_sketches.fire_texture.draw_particle(particle,image);


var G__21405 = cljs.core.next(seq__21393__$1);
var G__21406 = null;
var G__21407 = (0);
var G__21408 = (0);
seq__21393 = G__21405;
chunk__21394 = G__21406;
count__21395 = G__21407;
i__21396 = G__21408;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.rac_sketches.fire_texture.run = (function sketches$rac_sketches$fire_texture$run(host){
sketches.rac_sketches.fire_texture.fire_texture = (function sketches$rac_sketches$fire_texture$run_$_fire_texture(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21409__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21410__i = 0, G__21410__a = new Array(arguments.length -  0);
while (G__21410__i < G__21410__a.length) {G__21410__a[G__21410__i] = arguments[G__21410__i + 0]; ++G__21410__i;}
  args = new cljs.core.IndexedSeq(G__21410__a,0,null);
} 
return G__21409__delegate.call(this,args);};
G__21409.cljs$lang$maxFixedArity = 0;
G__21409.cljs$lang$applyTo = (function (arglist__21411){
var args = cljs.core.seq(arglist__21411);
return G__21409__delegate(args);
});
G__21409.cljs$core$IFn$_invoke$arity$variadic = G__21409__delegate;
return G__21409;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_texture.update_state))?(function() { 
var G__21412__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.update_state,args);
};
var G__21412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21413__i = 0, G__21413__a = new Array(arguments.length -  0);
while (G__21413__i < G__21413__a.length) {G__21413__a[G__21413__i] = arguments[G__21413__i + 0]; ++G__21413__i;}
  args = new cljs.core.IndexedSeq(G__21413__a,0,null);
} 
return G__21412__delegate.call(this,args);};
G__21412.cljs$lang$maxFixedArity = 0;
G__21412.cljs$lang$applyTo = (function (arglist__21414){
var args = cljs.core.seq(arglist__21414);
return G__21412__delegate(args);
});
G__21412.cljs$core$IFn$_invoke$arity$variadic = G__21412__delegate;
return G__21412;
})()
:sketches.rac_sketches.fire_texture.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_texture.setup))?(function() { 
var G__21415__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.setup,args);
};
var G__21415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21416__i = 0, G__21416__a = new Array(arguments.length -  0);
while (G__21416__i < G__21416__a.length) {G__21416__a[G__21416__i] = arguments[G__21416__i + 0]; ++G__21416__i;}
  args = new cljs.core.IndexedSeq(G__21416__a,0,null);
} 
return G__21415__delegate.call(this,args);};
G__21415.cljs$lang$maxFixedArity = 0;
G__21415.cljs$lang$applyTo = (function (arglist__21417){
var args = cljs.core.seq(arglist__21417);
return G__21415__delegate(args);
});
G__21415.cljs$core$IFn$_invoke$arity$variadic = G__21415__delegate;
return G__21415;
})()
:sketches.rac_sketches.fire_texture.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.fire_texture.draw))?(function() { 
var G__21418__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.fire_texture.draw,args);
};
var G__21418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21419__i = 0, G__21419__a = new Array(arguments.length -  0);
while (G__21419__i < G__21419__a.length) {G__21419__a[G__21419__i] = arguments[G__21419__i + 0]; ++G__21419__i;}
  args = new cljs.core.IndexedSeq(G__21419__a,0,null);
} 
return G__21418__delegate.call(this,args);};
G__21418.cljs$lang$maxFixedArity = 0;
G__21418.cljs$lang$applyTo = (function (arglist__21420){
var args = cljs.core.seq(arglist__21420);
return G__21418__delegate(args);
});
G__21418.cljs$core$IFn$_invoke$arity$variadic = G__21418__delegate;
return G__21418;
})()
:sketches.rac_sketches.fire_texture.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.fire_texture.fire_texture', sketches.rac_sketches.fire_texture.fire_texture);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.fire_texture.fire_texture,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21421__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21422__i = 0, G__21422__a = new Array(arguments.length -  0);
while (G__21422__i < G__21422__a.length) {G__21422__a[G__21422__i] = arguments[G__21422__i + 0]; ++G__21422__i;}
  args = new cljs.core.IndexedSeq(G__21422__a,0,null);
} 
return G__21421__delegate.call(this,args);};
G__21421.cljs$lang$maxFixedArity = 0;
G__21421.cljs$lang$applyTo = (function (arglist__21423){
var args = cljs.core.seq(arglist__21423);
return G__21421__delegate(args);
});
G__21421.cljs$core$IFn$_invoke$arity$variadic = G__21421__delegate;
return G__21421;
})()
:host)], null));
}
});
