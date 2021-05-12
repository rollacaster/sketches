// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.fire_rainbow');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.fire_rainbow.setup = (function sketches$nature_of_code$particle_systems$fire_rainbow$setup(){
quil.core.image_mode(cljs.core.cst$kw$center);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$image,quil.core.load_image("images/texture-white.png")], null);
});
sketches.nature_of_code.particle_systems.fire_rainbow.create_texture = (function sketches$nature_of_code$particle_systems$fire_rainbow$create_texture(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((10),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random_gaussian() * 0.8),(quil.core.random_gaussian() - 1.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0], 0));
});
sketches.nature_of_code.particle_systems.fire_rainbow.is_dead = (function sketches$nature_of_code$particle_systems$fire_rainbow$is_dead(p__23793){
var map__23794 = p__23793;
var map__23794__$1 = ((((!((map__23794 == null)))?(((((map__23794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23794):map__23794);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23794__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.fire_rainbow.apply_force = (function sketches$nature_of_code$particle_systems$fire_rainbow$apply_force(force,p__23796){
var map__23797 = p__23796;
var map__23797__$1 = ((((!((map__23797 == null)))?(((((map__23797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23797):map__23797);
var particle = map__23797__$1;
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797__$1,cljs.core.cst$kw$mass);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797__$1,cljs.core.cst$kw$acceleration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$acceleration,sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,sketches.vector.div(force,mass)));
});
sketches.nature_of_code.particle_systems.fire_rainbow.dec_lifespan = (function sketches$nature_of_code$particle_systems$fire_rainbow$dec_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.fire_rainbow.update_state = (function sketches$nature_of_code$particle_systems$fire_rainbow$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particles,(function (p1__23799_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_rainbow.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.mover.compute_position,sketches.nature_of_code.particle_systems.fire_rainbow.dec_lifespan),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23799_SHARP_,sketches.nature_of_code.particle_systems.fire_rainbow.create_texture(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null)))));
}));
});
sketches.nature_of_code.particle_systems.fire_rainbow.draw_particle = (function sketches$nature_of_code$particle_systems$fire_rainbow$draw_particle(p__23800,image){
var map__23801 = p__23800;
var map__23801__$1 = ((((!((map__23801 == null)))?(((((map__23801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23801):map__23801);
var vec__23802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23801__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23802,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23802,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23801__$1,cljs.core.cst$kw$lifespan);
quil.core.tint.cljs$core$IFn$_invoke$arity$3(lifespan,(255),(255));

return quil.core.image.cljs$core$IFn$_invoke$arity$5(image,x,y,quil.core.map_range(lifespan,(255),(0),(100),(0)),quil.core.map_range(lifespan,(255),(0),(100),(0)));
});
sketches.nature_of_code.particle_systems.fire_rainbow.draw = (function sketches$nature_of_code$particle_systems$fire_rainbow$draw(p__23806){
var map__23807 = p__23806;
var map__23807__$1 = ((((!((map__23807 == null)))?(((((map__23807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23807):map__23807);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23807__$1,cljs.core.cst$kw$particles);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23807__$1,cljs.core.cst$kw$image);
quil.core.blend_mode(cljs.core.cst$kw$add);

quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

var seq__23809 = cljs.core.seq(particles);
var chunk__23810 = null;
var count__23811 = (0);
var i__23812 = (0);
while(true){
if((i__23812 < count__23811)){
var particle = chunk__23810.cljs$core$IIndexed$_nth$arity$2(null,i__23812);
sketches.nature_of_code.particle_systems.fire_rainbow.draw_particle(particle,image);


var G__23813 = seq__23809;
var G__23814 = chunk__23810;
var G__23815 = count__23811;
var G__23816 = (i__23812 + (1));
seq__23809 = G__23813;
chunk__23810 = G__23814;
count__23811 = G__23815;
i__23812 = G__23816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23809);
if(temp__5735__auto__){
var seq__23809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23809__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23809__$1);
var G__23817 = cljs.core.chunk_rest(seq__23809__$1);
var G__23818 = c__4351__auto__;
var G__23819 = cljs.core.count(c__4351__auto__);
var G__23820 = (0);
seq__23809 = G__23817;
chunk__23810 = G__23818;
count__23811 = G__23819;
i__23812 = G__23820;
continue;
} else {
var particle = cljs.core.first(seq__23809__$1);
sketches.nature_of_code.particle_systems.fire_rainbow.draw_particle(particle,image);


var G__23821 = cljs.core.next(seq__23809__$1);
var G__23822 = null;
var G__23823 = (0);
var G__23824 = (0);
seq__23809 = G__23821;
chunk__23810 = G__23822;
count__23811 = G__23823;
i__23812 = G__23824;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.fire_rainbow.run = (function sketches$nature_of_code$particle_systems$fire_rainbow$run(host){
sketches.nature_of_code.particle_systems.fire_rainbow.rainbow_fire = (function sketches$nature_of_code$particle_systems$fire_rainbow$run_$_rainbow_fire(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23825__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23826__i = 0, G__23826__a = new Array(arguments.length -  0);
while (G__23826__i < G__23826__a.length) {G__23826__a[G__23826__i] = arguments[G__23826__i + 0]; ++G__23826__i;}
  args = new cljs.core.IndexedSeq(G__23826__a,0,null);
} 
return G__23825__delegate.call(this,args);};
G__23825.cljs$lang$maxFixedArity = 0;
G__23825.cljs$lang$applyTo = (function (arglist__23827){
var args = cljs.core.seq(arglist__23827);
return G__23825__delegate(args);
});
G__23825.cljs$core$IFn$_invoke$arity$variadic = G__23825__delegate;
return G__23825;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_rainbow.update_state))?(function() { 
var G__23828__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_rainbow.update_state,args);
};
var G__23828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23829__i = 0, G__23829__a = new Array(arguments.length -  0);
while (G__23829__i < G__23829__a.length) {G__23829__a[G__23829__i] = arguments[G__23829__i + 0]; ++G__23829__i;}
  args = new cljs.core.IndexedSeq(G__23829__a,0,null);
} 
return G__23828__delegate.call(this,args);};
G__23828.cljs$lang$maxFixedArity = 0;
G__23828.cljs$lang$applyTo = (function (arglist__23830){
var args = cljs.core.seq(arglist__23830);
return G__23828__delegate(args);
});
G__23828.cljs$core$IFn$_invoke$arity$variadic = G__23828__delegate;
return G__23828;
})()
:sketches.nature_of_code.particle_systems.fire_rainbow.update_state),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p3d,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_rainbow.setup))?(function() { 
var G__23831__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_rainbow.setup,args);
};
var G__23831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23832__i = 0, G__23832__a = new Array(arguments.length -  0);
while (G__23832__i < G__23832__a.length) {G__23832__a[G__23832__i] = arguments[G__23832__i + 0]; ++G__23832__i;}
  args = new cljs.core.IndexedSeq(G__23832__a,0,null);
} 
return G__23831__delegate.call(this,args);};
G__23831.cljs$lang$maxFixedArity = 0;
G__23831.cljs$lang$applyTo = (function (arglist__23833){
var args = cljs.core.seq(arglist__23833);
return G__23831__delegate(args);
});
G__23831.cljs$core$IFn$_invoke$arity$variadic = G__23831__delegate;
return G__23831;
})()
:sketches.nature_of_code.particle_systems.fire_rainbow.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.fire_rainbow.draw))?(function() { 
var G__23834__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.fire_rainbow.draw,args);
};
var G__23834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23835__i = 0, G__23835__a = new Array(arguments.length -  0);
while (G__23835__i < G__23835__a.length) {G__23835__a[G__23835__i] = arguments[G__23835__i + 0]; ++G__23835__i;}
  args = new cljs.core.IndexedSeq(G__23835__a,0,null);
} 
return G__23834__delegate.call(this,args);};
G__23834.cljs$lang$maxFixedArity = 0;
G__23834.cljs$lang$applyTo = (function (arglist__23836){
var args = cljs.core.seq(arglist__23836);
return G__23834__delegate(args);
});
G__23834.cljs$core$IFn$_invoke$arity$variadic = G__23834__delegate;
return G__23834;
})()
:sketches.nature_of_code.particle_systems.fire_rainbow.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.fire_rainbow.rainbow_fire', sketches.nature_of_code.particle_systems.fire_rainbow.rainbow_fire);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.fire_rainbow.rainbow_fire,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23837__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23838__i = 0, G__23838__a = new Array(arguments.length -  0);
while (G__23838__i < G__23838__a.length) {G__23838__a[G__23838__i] = arguments[G__23838__i + 0]; ++G__23838__i;}
  args = new cljs.core.IndexedSeq(G__23838__a,0,null);
} 
return G__23837__delegate.call(this,args);};
G__23837.cljs$lang$maxFixedArity = 0;
G__23837.cljs$lang$applyTo = (function (arglist__23839){
var args = cljs.core.seq(arglist__23839);
return G__23837__delegate(args);
});
G__23837.cljs$core$IFn$_invoke$arity$variadic = G__23837__delegate;
return G__23837;
})()
:host)], null));
}
});
