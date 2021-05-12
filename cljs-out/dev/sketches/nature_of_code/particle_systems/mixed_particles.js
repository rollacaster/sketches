// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.mixed_particles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
sketches.nature_of_code.particle_systems.mixed_particles.setup = (function sketches$nature_of_code$particle_systems$mixed_particles$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null)], null);
});
sketches.nature_of_code.particle_systems.mixed_particles.create_particle = (function sketches$nature_of_code$particle_systems$mixed_particles$create_particle(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sketches.mover.create_mover((100),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (2))], null)),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.05], null)),cljs.core.cst$kw$a_DASH_acceleration,0.1),cljs.core.cst$kw$lifespan,(255));
});
sketches.nature_of_code.particle_systems.mixed_particles.create_confetti = (function sketches$nature_of_code$particle_systems$mixed_particles$create_confetti(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sketches.nature_of_code.particle_systems.mixed_particles.create_particle(location),cljs.core.cst$kw$type,cljs.core.cst$kw$confetti);
});
if((typeof sketches !== 'undefined') && (typeof sketches.nature_of_code !== 'undefined') && (typeof sketches.nature_of_code.particle_systems !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.mixed_particles !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.mixed_particles.draw_particle !== 'undefined')){
} else {
sketches.nature_of_code.particle_systems.mixed_particles.draw_particle = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sketches.nature-of-code.particle-systems.mixed-particles","draw-particle"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$confetti,(function (p__23622){
var map__23623 = p__23622;
var map__23623__$1 = ((((!((map__23623 == null)))?(((((map__23623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23623):map__23623);
var particle = map__23623__$1;
var vec__23624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23624,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23624,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623__$1,cljs.core.cst$kw$angle);
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
sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__23628){
var map__23629 = p__23628;
var map__23629__$1 = ((((!((map__23629 == null)))?(((((map__23629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23629):map__23629);
var particle = map__23629__$1;
var vec__23630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23629__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23629__$1,cljs.core.cst$kw$lifespan);
quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.ellipse(x,y,(8),(8));

return particle;
}));
sketches.nature_of_code.particle_systems.mixed_particles.is_dead = (function sketches$nature_of_code$particle_systems$mixed_particles$is_dead(p__23634){
var map__23635 = p__23634;
var map__23635__$1 = ((((!((map__23635 == null)))?(((((map__23635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23635):map__23635);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.mixed_particles.decrease_lifespan = (function sketches$nature_of_code$particle_systems$mixed_particles$decrease_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.mixed_particles.update_state = (function sketches$nature_of_code$particle_systems$mixed_particles$update_state(p__23640){
var map__23641 = p__23640;
var map__23641__$1 = ((((!((map__23641 == null)))?(((((map__23641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23641):map__23641);
var ps = map__23641__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23641__$1,cljs.core.cst$kw$origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ps,cljs.core.cst$kw$particles,((function (map__23641,map__23641__$1,ps,origin){
return (function (p1__23637_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23637_SHARP_,(((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) > 0.5))?sketches.nature_of_code.particle_systems.mixed_particles.create_particle(origin):sketches.nature_of_code.particle_systems.mixed_particles.create_confetti(origin)));
});})(map__23641,map__23641__$1,ps,origin))
),cljs.core.cst$kw$particles,((function (map__23641,map__23641__$1,ps,origin){
return (function (p1__23638_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.mover.compute_position,sketches.nature_of_code.particle_systems.mixed_particles.decrease_lifespan),p1__23638_SHARP_);
});})(map__23641,map__23641__$1,ps,origin))
),cljs.core.cst$kw$particles,((function (map__23641,map__23641__$1,ps,origin){
return (function (p1__23639_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.mixed_particles.is_dead,p1__23639_SHARP_);
});})(map__23641,map__23641__$1,ps,origin))
);
});
sketches.nature_of_code.particle_systems.mixed_particles.draw = (function sketches$nature_of_code$particle_systems$mixed_particles$draw(p__23643){
var map__23644 = p__23643;
var map__23644__$1 = ((((!((map__23644 == null)))?(((((map__23644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23644):map__23644);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23644__$1,cljs.core.cst$kw$particles);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__23646 = cljs.core.seq(particles);
var chunk__23647 = null;
var count__23648 = (0);
var i__23649 = (0);
while(true){
if((i__23649 < count__23648)){
var particle = chunk__23647.cljs$core$IIndexed$_nth$arity$2(null,i__23649);
(sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.call(null,particle));


var G__23650 = seq__23646;
var G__23651 = chunk__23647;
var G__23652 = count__23648;
var G__23653 = (i__23649 + (1));
seq__23646 = G__23650;
chunk__23647 = G__23651;
count__23648 = G__23652;
i__23649 = G__23653;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23646);
if(temp__5735__auto__){
var seq__23646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23646__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23646__$1);
var G__23654 = cljs.core.chunk_rest(seq__23646__$1);
var G__23655 = c__4351__auto__;
var G__23656 = cljs.core.count(c__4351__auto__);
var G__23657 = (0);
seq__23646 = G__23654;
chunk__23647 = G__23655;
count__23648 = G__23656;
i__23649 = G__23657;
continue;
} else {
var particle = cljs.core.first(seq__23646__$1);
(sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.mixed_particles.draw_particle.call(null,particle));


var G__23658 = cljs.core.next(seq__23646__$1);
var G__23659 = null;
var G__23660 = (0);
var G__23661 = (0);
seq__23646 = G__23658;
chunk__23647 = G__23659;
count__23648 = G__23660;
i__23649 = G__23661;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.mixed_particles.run = (function sketches$nature_of_code$particle_systems$mixed_particles$run(host){
sketches.nature_of_code.particle_systems.mixed_particles.mixed_particles = (function sketches$nature_of_code$particle_systems$mixed_particles$run_$_mixed_particles(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23662__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23663__i = 0, G__23663__a = new Array(arguments.length -  0);
while (G__23663__i < G__23663__a.length) {G__23663__a[G__23663__i] = arguments[G__23663__i + 0]; ++G__23663__i;}
  args = new cljs.core.IndexedSeq(G__23663__a,0,null);
} 
return G__23662__delegate.call(this,args);};
G__23662.cljs$lang$maxFixedArity = 0;
G__23662.cljs$lang$applyTo = (function (arglist__23664){
var args = cljs.core.seq(arglist__23664);
return G__23662__delegate(args);
});
G__23662.cljs$core$IFn$_invoke$arity$variadic = G__23662__delegate;
return G__23662;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.mixed_particles.update_state))?(function() { 
var G__23665__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.mixed_particles.update_state,args);
};
var G__23665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23666__i = 0, G__23666__a = new Array(arguments.length -  0);
while (G__23666__i < G__23666__a.length) {G__23666__a[G__23666__i] = arguments[G__23666__i + 0]; ++G__23666__i;}
  args = new cljs.core.IndexedSeq(G__23666__a,0,null);
} 
return G__23665__delegate.call(this,args);};
G__23665.cljs$lang$maxFixedArity = 0;
G__23665.cljs$lang$applyTo = (function (arglist__23667){
var args = cljs.core.seq(arglist__23667);
return G__23665__delegate(args);
});
G__23665.cljs$core$IFn$_invoke$arity$variadic = G__23665__delegate;
return G__23665;
})()
:sketches.nature_of_code.particle_systems.mixed_particles.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.mixed_particles.setup))?(function() { 
var G__23668__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.mixed_particles.setup,args);
};
var G__23668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23669__i = 0, G__23669__a = new Array(arguments.length -  0);
while (G__23669__i < G__23669__a.length) {G__23669__a[G__23669__i] = arguments[G__23669__i + 0]; ++G__23669__i;}
  args = new cljs.core.IndexedSeq(G__23669__a,0,null);
} 
return G__23668__delegate.call(this,args);};
G__23668.cljs$lang$maxFixedArity = 0;
G__23668.cljs$lang$applyTo = (function (arglist__23670){
var args = cljs.core.seq(arglist__23670);
return G__23668__delegate(args);
});
G__23668.cljs$core$IFn$_invoke$arity$variadic = G__23668__delegate;
return G__23668;
})()
:sketches.nature_of_code.particle_systems.mixed_particles.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.mixed_particles.draw))?(function() { 
var G__23671__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.mixed_particles.draw,args);
};
var G__23671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23672__i = 0, G__23672__a = new Array(arguments.length -  0);
while (G__23672__i < G__23672__a.length) {G__23672__a[G__23672__i] = arguments[G__23672__i + 0]; ++G__23672__i;}
  args = new cljs.core.IndexedSeq(G__23672__a,0,null);
} 
return G__23671__delegate.call(this,args);};
G__23671.cljs$lang$maxFixedArity = 0;
G__23671.cljs$lang$applyTo = (function (arglist__23673){
var args = cljs.core.seq(arglist__23673);
return G__23671__delegate(args);
});
G__23671.cljs$core$IFn$_invoke$arity$variadic = G__23671__delegate;
return G__23671;
})()
:sketches.nature_of_code.particle_systems.mixed_particles.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.mixed_particles.mixed_particles', sketches.nature_of_code.particle_systems.mixed_particles.mixed_particles);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.mixed_particles.mixed_particles,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23674__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23675__i = 0, G__23675__a = new Array(arguments.length -  0);
while (G__23675__i < G__23675__a.length) {G__23675__a[G__23675__i] = arguments[G__23675__i + 0]; ++G__23675__i;}
  args = new cljs.core.IndexedSeq(G__23675__a,0,null);
} 
return G__23674__delegate.call(this,args);};
G__23674.cljs$lang$maxFixedArity = 0;
G__23674.cljs$lang$applyTo = (function (arglist__23676){
var args = cljs.core.seq(arglist__23676);
return G__23674__delegate(args);
});
G__23674.cljs$core$IFn$_invoke$arity$variadic = G__23674__delegate;
return G__23674;
})()
:host)], null));
}
});
