// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.particles_repel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.particles_repel.gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.3], null);
sketches.nature_of_code.particle_systems.particles_repel.setup = (function sketches$nature_of_code$particle_systems$particles_repel$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null)], null);
});
sketches.nature_of_code.particle_systems.particles_repel.create_particle = (function sketches$nature_of_code$particle_systems$particles_repel$create_particle(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((20),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (2))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0], 0));
});
sketches.nature_of_code.particle_systems.particles_repel.create_confetti = (function sketches$nature_of_code$particle_systems$particles_repel$create_confetti(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.nature_of_code.particle_systems.particles_repel.create_particle(location),cljs.core.cst$kw$type,cljs.core.cst$kw$confetti,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$a_DASH_acceleration,0.1], 0));
});
sketches.nature_of_code.particle_systems.particles_repel.is_dead = (function sketches$nature_of_code$particle_systems$particles_repel$is_dead(p__23842){
var map__23843 = p__23842;
var map__23843__$1 = ((((!((map__23843 == null)))?(((((map__23843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23843):map__23843);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23843__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.particles_repel.decrease_lifespan = (function sketches$nature_of_code$particle_systems$particles_repel$decrease_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.particles_repel.repel = (function sketches$nature_of_code$particle_systems$particles_repel$repel(p__23845,particle){
var map__23846 = p__23845;
var map__23846__$1 = ((((!((map__23846 == null)))?(((((map__23846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23846):map__23846);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,cljs.core.cst$kw$location);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,cljs.core.cst$kw$mass);
var dir = sketches.vector.sub(location,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(particle));
var d = quil.core.constrain(sketches.vector.mag(dir),(5),(100));
var force = (((-1) * mass) / (d * d));
return sketches.vector.mult(sketches.vector.normalize(dir),force);
});
sketches.nature_of_code.particle_systems.particles_repel.update_state = (function sketches$nature_of_code$particle_systems$particles_repel$update_state(ps){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ps,cljs.core.cst$kw$particles,(function (p1__23848_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (particle){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (particle__$1,repeller){
return sketches.mover.apply_force(particle__$1,sketches.nature_of_code.particle_systems.particles_repel.repel(repeller,particle__$1));
}),particle,p1__23848_SHARP_);
}),p1__23848_SHARP_);
})),cljs.core.cst$kw$particles,(function (p1__23849_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23849_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2((((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) > 0.5))?sketches.nature_of_code.particle_systems.particles_repel.create_particle:sketches.nature_of_code.particle_systems.particles_repel.create_confetti),(new cljs.core.List(null,cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps),null,(1),null))));
})),cljs.core.cst$kw$particles,(function (p1__23850_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (particle){
return sketches.mover.apply_force(particle,sketches.nature_of_code.particle_systems.particles_repel.gravity);
}),p1__23850_SHARP_);
})),cljs.core.cst$kw$particles,(function (p1__23851_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_repel.decrease_lifespan,sketches.mover.compute_position),p1__23851_SHARP_);
})),cljs.core.cst$kw$particles,(function (p1__23852_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_repel.is_dead,p1__23852_SHARP_);
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.nature_of_code !== 'undefined') && (typeof sketches.nature_of_code.particle_systems !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.particles_repel !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.particles_repel.draw_particle !== 'undefined')){
} else {
sketches.nature_of_code.particle_systems.particles_repel.draw_particle = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sketches.nature-of-code.particle-systems.particles-repel","draw-particle"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$confetti,(function (p__23853){
var map__23854 = p__23853;
var map__23854__$1 = ((((!((map__23854 == null)))?(((((map__23854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23854):map__23854);
var particle = map__23854__$1;
var vec__23855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23854__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23854__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23854__$1,cljs.core.cst$kw$angle);
quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((175),lifespan);

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));

quil.core.pop_matrix();

return particle;
}));
sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__23859){
var map__23860 = p__23859;
var map__23860__$1 = ((((!((map__23860 == null)))?(((((map__23860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23860):map__23860);
var particle = map__23860__$1;
var vec__23861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23860__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23861,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23861,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23860__$1,cljs.core.cst$kw$lifespan);
quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.ellipse(x,y,(8),(8));

return particle;
}));
sketches.nature_of_code.particle_systems.particles_repel.draw = (function sketches$nature_of_code$particle_systems$particles_repel$draw(p__23865){
var map__23866 = p__23865;
var map__23866__$1 = ((((!((map__23866 == null)))?(((((map__23866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23866):map__23866);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23866__$1,cljs.core.cst$kw$particles);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__23868 = cljs.core.seq(particles);
var chunk__23869 = null;
var count__23870 = (0);
var i__23871 = (0);
while(true){
if((i__23871 < count__23870)){
var particle = chunk__23869.cljs$core$IIndexed$_nth$arity$2(null,i__23871);
(sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.particles_repel.draw_particle.call(null,particle));


var G__23872 = seq__23868;
var G__23873 = chunk__23869;
var G__23874 = count__23870;
var G__23875 = (i__23871 + (1));
seq__23868 = G__23872;
chunk__23869 = G__23873;
count__23870 = G__23874;
i__23871 = G__23875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23868);
if(temp__5735__auto__){
var seq__23868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23868__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23868__$1);
var G__23876 = cljs.core.chunk_rest(seq__23868__$1);
var G__23877 = c__4351__auto__;
var G__23878 = cljs.core.count(c__4351__auto__);
var G__23879 = (0);
seq__23868 = G__23876;
chunk__23869 = G__23877;
count__23870 = G__23878;
i__23871 = G__23879;
continue;
} else {
var particle = cljs.core.first(seq__23868__$1);
(sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.particles_repel.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.particles_repel.draw_particle.call(null,particle));


var G__23880 = cljs.core.next(seq__23868__$1);
var G__23881 = null;
var G__23882 = (0);
var G__23883 = (0);
seq__23868 = G__23880;
chunk__23869 = G__23881;
count__23870 = G__23882;
i__23871 = G__23883;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.particles_repel.run = (function sketches$nature_of_code$particle_systems$particles_repel$run(host){
sketches.nature_of_code.particle_systems.particles_repel.particles_repel = (function sketches$nature_of_code$particle_systems$particles_repel$run_$_particles_repel(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23884__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23885__i = 0, G__23885__a = new Array(arguments.length -  0);
while (G__23885__i < G__23885__a.length) {G__23885__a[G__23885__i] = arguments[G__23885__i + 0]; ++G__23885__i;}
  args = new cljs.core.IndexedSeq(G__23885__a,0,null);
} 
return G__23884__delegate.call(this,args);};
G__23884.cljs$lang$maxFixedArity = 0;
G__23884.cljs$lang$applyTo = (function (arglist__23886){
var args = cljs.core.seq(arglist__23886);
return G__23884__delegate(args);
});
G__23884.cljs$core$IFn$_invoke$arity$variadic = G__23884__delegate;
return G__23884;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_repel.update_state))?(function() { 
var G__23887__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_repel.update_state,args);
};
var G__23887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23888__i = 0, G__23888__a = new Array(arguments.length -  0);
while (G__23888__i < G__23888__a.length) {G__23888__a[G__23888__i] = arguments[G__23888__i + 0]; ++G__23888__i;}
  args = new cljs.core.IndexedSeq(G__23888__a,0,null);
} 
return G__23887__delegate.call(this,args);};
G__23887.cljs$lang$maxFixedArity = 0;
G__23887.cljs$lang$applyTo = (function (arglist__23889){
var args = cljs.core.seq(arglist__23889);
return G__23887__delegate(args);
});
G__23887.cljs$core$IFn$_invoke$arity$variadic = G__23887__delegate;
return G__23887;
})()
:sketches.nature_of_code.particle_systems.particles_repel.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_repel.setup))?(function() { 
var G__23890__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_repel.setup,args);
};
var G__23890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23891__i = 0, G__23891__a = new Array(arguments.length -  0);
while (G__23891__i < G__23891__a.length) {G__23891__a[G__23891__i] = arguments[G__23891__i + 0]; ++G__23891__i;}
  args = new cljs.core.IndexedSeq(G__23891__a,0,null);
} 
return G__23890__delegate.call(this,args);};
G__23890.cljs$lang$maxFixedArity = 0;
G__23890.cljs$lang$applyTo = (function (arglist__23892){
var args = cljs.core.seq(arglist__23892);
return G__23890__delegate(args);
});
G__23890.cljs$core$IFn$_invoke$arity$variadic = G__23890__delegate;
return G__23890;
})()
:sketches.nature_of_code.particle_systems.particles_repel.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_repel.draw))?(function() { 
var G__23893__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_repel.draw,args);
};
var G__23893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23894__i = 0, G__23894__a = new Array(arguments.length -  0);
while (G__23894__i < G__23894__a.length) {G__23894__a[G__23894__i] = arguments[G__23894__i + 0]; ++G__23894__i;}
  args = new cljs.core.IndexedSeq(G__23894__a,0,null);
} 
return G__23893__delegate.call(this,args);};
G__23893.cljs$lang$maxFixedArity = 0;
G__23893.cljs$lang$applyTo = (function (arglist__23895){
var args = cljs.core.seq(arglist__23895);
return G__23893__delegate(args);
});
G__23893.cljs$core$IFn$_invoke$arity$variadic = G__23893__delegate;
return G__23893;
})()
:sketches.nature_of_code.particle_systems.particles_repel.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.particles_repel.particles_repel', sketches.nature_of_code.particle_systems.particles_repel.particles_repel);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.particles_repel.particles_repel,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23896__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23897__i = 0, G__23897__a = new Array(arguments.length -  0);
while (G__23897__i < G__23897__a.length) {G__23897__a[G__23897__i] = arguments[G__23897__i + 0]; ++G__23897__i;}
  args = new cljs.core.IndexedSeq(G__23897__a,0,null);
} 
return G__23896__delegate.call(this,args);};
G__23896.cljs$lang$maxFixedArity = 0;
G__23896.cljs$lang$applyTo = (function (arglist__23898){
var args = cljs.core.seq(arglist__23898);
return G__23896__delegate(args);
});
G__23896.cljs$core$IFn$_invoke$arity$variadic = G__23896__delegate;
return G__23896;
})()
:host)], null));
}
});
