// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.particles_with_images');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
sketches.nature_of_code.particle_systems.particles_with_images.create_particle = (function sketches$nature_of_code$particle_systems$particles_with_images$create_particle(location,images){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((10),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random_gaussian(),(quil.core.random_gaussian() - 1.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$mass,(10),cljs.core.cst$kw$image,cljs.core.rand_nth(images)], 0));
});
sketches.nature_of_code.particle_systems.particles_with_images.setup = (function sketches$nature_of_code$particle_systems$particles_with_images$setup(){
quil.core.frame_rate((30));

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$images,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.load_image("images/sojka.jpg"),quil.core.load_image("images/fcb.jpg"),quil.core.load_image("images/emacs.png")], null),cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null)], null);
});
sketches.nature_of_code.particle_systems.particles_with_images.draw_particle = (function sketches$nature_of_code$particle_systems$particles_with_images$draw_particle(p__23357){
var map__23358 = p__23357;
var map__23358__$1 = ((((!((map__23358 == null)))?(((((map__23358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23358):map__23358);
var vec__23359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.cst$kw$lifespan);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.cst$kw$image);
quil.core.image_mode(cljs.core.cst$kw$center);

quil.core.tint.cljs$core$IFn$_invoke$arity$2((255),lifespan);

return quil.core.image.cljs$core$IFn$_invoke$arity$5(image,x,y,(80),(80));
});
sketches.nature_of_code.particle_systems.particles_with_images.is_dead = (function sketches$nature_of_code$particle_systems$particles_with_images$is_dead(p__23363){
var map__23364 = p__23363;
var map__23364__$1 = ((((!((map__23364 == null)))?(((((map__23364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23364):map__23364);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.particles_with_images.dec_lifespan = (function sketches$nature_of_code$particle_systems$particles_with_images$dec_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dec,cljs.core.dec,cljs.core.dec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dec,cljs.core.dec], 0)));
});
sketches.nature_of_code.particle_systems.particles_with_images.update_state = (function sketches$nature_of_code$particle_systems$particles_with_images$update_state(p__23369){
var map__23370 = p__23369;
var map__23370__$1 = ((((!((map__23370 == null)))?(((((map__23370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23370):map__23370);
var ps = map__23370__$1;
var images = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370__$1,cljs.core.cst$kw$images);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ps,cljs.core.cst$kw$particles,((function (map__23370,map__23370__$1,ps,images){
return (function (p1__23366_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23366_SHARP_,sketches.nature_of_code.particle_systems.particles_with_images.create_particle(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps),images));
});})(map__23370,map__23370__$1,ps,images))
),cljs.core.cst$kw$particles,((function (map__23370,map__23370__$1,ps,images){
return (function (p1__23367_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.mover.compute_position,sketches.nature_of_code.particle_systems.particles_with_images.dec_lifespan),p1__23367_SHARP_);
});})(map__23370,map__23370__$1,ps,images))
),cljs.core.cst$kw$particles,((function (map__23370,map__23370__$1,ps,images){
return (function (p1__23368_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_images.is_dead,p1__23368_SHARP_);
});})(map__23370,map__23370__$1,ps,images))
);
});
sketches.nature_of_code.particle_systems.particles_with_images.draw = (function sketches$nature_of_code$particle_systems$particles_with_images$draw(p__23372){
var map__23373 = p__23372;
var map__23373__$1 = ((((!((map__23373 == null)))?(((((map__23373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23373):map__23373);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23373__$1,cljs.core.cst$kw$particles);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__23375 = cljs.core.seq(particles);
var chunk__23376 = null;
var count__23377 = (0);
var i__23378 = (0);
while(true){
if((i__23378 < count__23377)){
var particle = chunk__23376.cljs$core$IIndexed$_nth$arity$2(null,i__23378);
sketches.nature_of_code.particle_systems.particles_with_images.draw_particle(particle);


var G__23379 = seq__23375;
var G__23380 = chunk__23376;
var G__23381 = count__23377;
var G__23382 = (i__23378 + (1));
seq__23375 = G__23379;
chunk__23376 = G__23380;
count__23377 = G__23381;
i__23378 = G__23382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23375);
if(temp__5735__auto__){
var seq__23375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23375__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23375__$1);
var G__23383 = cljs.core.chunk_rest(seq__23375__$1);
var G__23384 = c__4351__auto__;
var G__23385 = cljs.core.count(c__4351__auto__);
var G__23386 = (0);
seq__23375 = G__23383;
chunk__23376 = G__23384;
count__23377 = G__23385;
i__23378 = G__23386;
continue;
} else {
var particle = cljs.core.first(seq__23375__$1);
sketches.nature_of_code.particle_systems.particles_with_images.draw_particle(particle);


var G__23387 = cljs.core.next(seq__23375__$1);
var G__23388 = null;
var G__23389 = (0);
var G__23390 = (0);
seq__23375 = G__23387;
chunk__23376 = G__23388;
count__23377 = G__23389;
i__23378 = G__23390;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.particles_with_images.run = (function sketches$nature_of_code$particle_systems$particles_with_images$run(host){
sketches.nature_of_code.particle_systems.particles_with_images.particles_with_images = (function sketches$nature_of_code$particle_systems$particles_with_images$run_$_particles_with_images(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23391__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23392__i = 0, G__23392__a = new Array(arguments.length -  0);
while (G__23392__i < G__23392__a.length) {G__23392__a[G__23392__i] = arguments[G__23392__i + 0]; ++G__23392__i;}
  args = new cljs.core.IndexedSeq(G__23392__a,0,null);
} 
return G__23391__delegate.call(this,args);};
G__23391.cljs$lang$maxFixedArity = 0;
G__23391.cljs$lang$applyTo = (function (arglist__23393){
var args = cljs.core.seq(arglist__23393);
return G__23391__delegate(args);
});
G__23391.cljs$core$IFn$_invoke$arity$variadic = G__23391__delegate;
return G__23391;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_images.update_state))?(function() { 
var G__23394__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_images.update_state,args);
};
var G__23394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23395__i = 0, G__23395__a = new Array(arguments.length -  0);
while (G__23395__i < G__23395__a.length) {G__23395__a[G__23395__i] = arguments[G__23395__i + 0]; ++G__23395__i;}
  args = new cljs.core.IndexedSeq(G__23395__a,0,null);
} 
return G__23394__delegate.call(this,args);};
G__23394.cljs$lang$maxFixedArity = 0;
G__23394.cljs$lang$applyTo = (function (arglist__23396){
var args = cljs.core.seq(arglist__23396);
return G__23394__delegate(args);
});
G__23394.cljs$core$IFn$_invoke$arity$variadic = G__23394__delegate;
return G__23394;
})()
:sketches.nature_of_code.particle_systems.particles_with_images.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_images.setup))?(function() { 
var G__23397__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_images.setup,args);
};
var G__23397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23398__i = 0, G__23398__a = new Array(arguments.length -  0);
while (G__23398__i < G__23398__a.length) {G__23398__a[G__23398__i] = arguments[G__23398__i + 0]; ++G__23398__i;}
  args = new cljs.core.IndexedSeq(G__23398__a,0,null);
} 
return G__23397__delegate.call(this,args);};
G__23397.cljs$lang$maxFixedArity = 0;
G__23397.cljs$lang$applyTo = (function (arglist__23399){
var args = cljs.core.seq(arglist__23399);
return G__23397__delegate(args);
});
G__23397.cljs$core$IFn$_invoke$arity$variadic = G__23397__delegate;
return G__23397;
})()
:sketches.nature_of_code.particle_systems.particles_with_images.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_images.draw))?(function() { 
var G__23400__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_images.draw,args);
};
var G__23400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23401__i = 0, G__23401__a = new Array(arguments.length -  0);
while (G__23401__i < G__23401__a.length) {G__23401__a[G__23401__i] = arguments[G__23401__i + 0]; ++G__23401__i;}
  args = new cljs.core.IndexedSeq(G__23401__a,0,null);
} 
return G__23400__delegate.call(this,args);};
G__23400.cljs$lang$maxFixedArity = 0;
G__23400.cljs$lang$applyTo = (function (arglist__23402){
var args = cljs.core.seq(arglist__23402);
return G__23400__delegate(args);
});
G__23400.cljs$core$IFn$_invoke$arity$variadic = G__23400__delegate;
return G__23400;
})()
:sketches.nature_of_code.particle_systems.particles_with_images.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.particles_with_images.particles_with_images', sketches.nature_of_code.particle_systems.particles_with_images.particles_with_images);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.particles_with_images.particles_with_images,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23403__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23404__i = 0, G__23404__a = new Array(arguments.length -  0);
while (G__23404__i < G__23404__a.length) {G__23404__a[G__23404__i] = arguments[G__23404__i + 0]; ++G__23404__i;}
  args = new cljs.core.IndexedSeq(G__23404__a,0,null);
} 
return G__23403__delegate.call(this,args);};
G__23403.cljs$lang$maxFixedArity = 0;
G__23403.cljs$lang$applyTo = (function (arglist__23405){
var args = cljs.core.seq(arglist__23405);
return G__23403__delegate(args);
});
G__23403.cljs$core$IFn$_invoke$arity$variadic = G__23403__delegate;
return G__23403;
})()
:host)], null));
}
});
