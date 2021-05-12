// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.particles_with_repellers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.particle_systems.particles_with_repellers.gravity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.3], null);
sketches.nature_of_code.particle_systems.particles_with_repellers.setup = (function sketches$nature_of_code$particle_systems$particles_with_repellers$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particle_DASH_system,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,cljs.core.List.EMPTY,cljs.core.cst$kw$origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null)], null),cljs.core.cst$kw$repellers,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width() / (2)) + (50)),((quil.core.height() / (2)) - (20))], null),cljs.core.cst$kw$r,(10),cljs.core.cst$kw$strength,(100)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),((quil.core.height() / (2)) + (100))], null),cljs.core.cst$kw$r,(10),cljs.core.cst$kw$strength,(100)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width() / (2)) - (50)),((quil.core.height() / (2)) + (80))], null),cljs.core.cst$kw$r,(10),cljs.core.cst$kw$strength,(100)], null)], null)], null);
});
sketches.nature_of_code.particle_systems.particles_with_repellers.create_particle = (function sketches$nature_of_code$particle_systems$particles_with_repellers$create_particle(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sketches.mover.create_mover((20),location),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (2))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$a_DASH_acceleration,0.1], 0));
});
sketches.nature_of_code.particle_systems.particles_with_repellers.create_confetti = (function sketches$nature_of_code$particle_systems$particles_with_repellers$create_confetti(location){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sketches.nature_of_code.particle_systems.particles_with_repellers.create_particle(location),cljs.core.cst$kw$type,cljs.core.cst$kw$confetti);
});
sketches.nature_of_code.particle_systems.particles_with_repellers.is_dead = (function sketches$nature_of_code$particle_systems$particles_with_repellers$is_dead(p__19540){
var map__19541 = p__19540;
var map__19541__$1 = ((((!((map__19541 == null)))?(((((map__19541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19541):map__19541);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19541__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.particles_with_repellers.repel = (function sketches$nature_of_code$particle_systems$particles_with_repellers$repel(p__19543,particle){
var map__19544 = p__19543;
var map__19544__$1 = ((((!((map__19544 == null)))?(((((map__19544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19544):map__19544);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,cljs.core.cst$kw$location);
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,cljs.core.cst$kw$strength);
var dir = sketches.vector.sub(location,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(particle));
var d = quil.core.constrain(sketches.vector.mag(dir),(5),(100));
var force = (((-1) * strength) / (d * d));
return sketches.vector.mult(sketches.vector.normalize(dir),force);
});
sketches.nature_of_code.particle_systems.particles_with_repellers.decrease_lifespan = (function sketches$nature_of_code$particle_systems$particles_with_repellers$decrease_lifespan(particle){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.dec));
});
sketches.nature_of_code.particle_systems.particles_with_repellers.update_state = (function sketches$nature_of_code$particle_systems$particles_with_repellers$update_state(p__19551){
var map__19552 = p__19551;
var map__19552__$1 = ((((!((map__19552 == null)))?(((((map__19552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19552):map__19552);
var state = map__19552__$1;
var repellers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19552__$1,cljs.core.cst$kw$repellers);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$particle_DASH_system,((function (map__19552,map__19552__$1,state,repellers){
return (function (ps){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ps,cljs.core.cst$kw$particles,((function (map__19552,map__19552__$1,state,repellers){
return (function (p1__19546_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19546_SHARP_,(((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) > 0.5))?sketches.nature_of_code.particle_systems.particles_with_repellers.create_particle(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps)):sketches.nature_of_code.particle_systems.particles_with_repellers.create_confetti(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1(ps))));
});})(map__19552,map__19552__$1,state,repellers))
),cljs.core.cst$kw$particles,((function (map__19552,map__19552__$1,state,repellers){
return (function (p1__19547_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19552,map__19552__$1,state,repellers){
return (function (particle){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__19552,map__19552__$1,state,repellers){
return (function (particle__$1,repeller){
return sketches.mover.apply_force(particle__$1,sketches.nature_of_code.particle_systems.particles_with_repellers.repel(repeller,particle__$1));
});})(map__19552,map__19552__$1,state,repellers))
,particle,repellers);
});})(map__19552,map__19552__$1,state,repellers))
,p1__19547_SHARP_);
});})(map__19552,map__19552__$1,state,repellers))
),cljs.core.cst$kw$particles,((function (map__19552,map__19552__$1,state,repellers){
return (function (p1__19548_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19552,map__19552__$1,state,repellers){
return (function (particle){
return sketches.mover.apply_force(particle,sketches.nature_of_code.particle_systems.particles_with_repellers.gravity);
});})(map__19552,map__19552__$1,state,repellers))
,p1__19548_SHARP_);
});})(map__19552,map__19552__$1,state,repellers))
),cljs.core.cst$kw$particles,((function (map__19552,map__19552__$1,state,repellers){
return (function (p1__19549_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_repellers.decrease_lifespan,sketches.mover.compute_position),p1__19549_SHARP_);
});})(map__19552,map__19552__$1,state,repellers))
),cljs.core.cst$kw$particles,((function (map__19552,map__19552__$1,state,repellers){
return (function (p1__19550_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_repellers.is_dead,p1__19550_SHARP_);
});})(map__19552,map__19552__$1,state,repellers))
);
});})(map__19552,map__19552__$1,state,repellers))
);
});
if((typeof sketches !== 'undefined') && (typeof sketches.nature_of_code !== 'undefined') && (typeof sketches.nature_of_code.particle_systems !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.particles_with_repellers !== 'undefined') && (typeof sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle !== 'undefined')){
} else {
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sketches.nature-of-code.particle-systems.particles-with-repellers","draw-particle"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$confetti,(function (p__19554){
var map__19555 = p__19554;
var map__19555__$1 = ((((!((map__19555 == null)))?(((((map__19555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19555):map__19555);
var vec__19556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19556,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19556,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,cljs.core.cst$kw$angle);
quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((175),lifespan);

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));

return quil.core.pop_matrix();
}));
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__19560){
var map__19561 = p__19560;
var map__19561__$1 = ((((!((map__19561 == null)))?(((((map__19561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19561):map__19561);
var vec__19562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19561__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19562,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19562,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19561__$1,cljs.core.cst$kw$lifespan);
quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),lifespan);

return quil.core.ellipse(x,y,(8),(8));
}));
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_repeller = (function sketches$nature_of_code$particle_systems$particles_with_repellers$draw_repeller(p__19566){
var map__19567 = p__19566;
var map__19567__$1 = ((((!((map__19567 == null)))?(((((map__19567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19567):map__19567);
var vec__19568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19567__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19568,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19568,(1),null);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19567__$1,cljs.core.cst$kw$r);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((127));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((127));

return quil.core.ellipse(x,y,(r * (2)),(r * (2)));
});
sketches.nature_of_code.particle_systems.particles_with_repellers.draw = (function sketches$nature_of_code$particle_systems$particles_with_repellers$draw(p__19572){
var map__19573 = p__19572;
var map__19573__$1 = ((((!((map__19573 == null)))?(((((map__19573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19573):map__19573);
var repellers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$repellers);
var particle_system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$particle_DASH_system);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__19575_19583 = cljs.core.seq(repellers);
var chunk__19576_19584 = null;
var count__19577_19585 = (0);
var i__19578_19586 = (0);
while(true){
if((i__19578_19586 < count__19577_19585)){
var repeller_19587 = chunk__19576_19584.cljs$core$IIndexed$_nth$arity$2(null,i__19578_19586);
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_repeller(repeller_19587);


var G__19588 = seq__19575_19583;
var G__19589 = chunk__19576_19584;
var G__19590 = count__19577_19585;
var G__19591 = (i__19578_19586 + (1));
seq__19575_19583 = G__19588;
chunk__19576_19584 = G__19589;
count__19577_19585 = G__19590;
i__19578_19586 = G__19591;
continue;
} else {
var temp__5735__auto___19592 = cljs.core.seq(seq__19575_19583);
if(temp__5735__auto___19592){
var seq__19575_19593__$1 = temp__5735__auto___19592;
if(cljs.core.chunked_seq_QMARK_(seq__19575_19593__$1)){
var c__4351__auto___19594 = cljs.core.chunk_first(seq__19575_19593__$1);
var G__19595 = cljs.core.chunk_rest(seq__19575_19593__$1);
var G__19596 = c__4351__auto___19594;
var G__19597 = cljs.core.count(c__4351__auto___19594);
var G__19598 = (0);
seq__19575_19583 = G__19595;
chunk__19576_19584 = G__19596;
count__19577_19585 = G__19597;
i__19578_19586 = G__19598;
continue;
} else {
var repeller_19599 = cljs.core.first(seq__19575_19593__$1);
sketches.nature_of_code.particle_systems.particles_with_repellers.draw_repeller(repeller_19599);


var G__19600 = cljs.core.next(seq__19575_19593__$1);
var G__19601 = null;
var G__19602 = (0);
var G__19603 = (0);
seq__19575_19583 = G__19600;
chunk__19576_19584 = G__19601;
count__19577_19585 = G__19602;
i__19578_19586 = G__19603;
continue;
}
} else {
}
}
break;
}

var seq__19579 = cljs.core.seq(cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(particle_system));
var chunk__19580 = null;
var count__19581 = (0);
var i__19582 = (0);
while(true){
if((i__19582 < count__19581)){
var particle = chunk__19580.cljs$core$IIndexed$_nth$arity$2(null,i__19582);
(sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.call(null,particle));


var G__19604 = seq__19579;
var G__19605 = chunk__19580;
var G__19606 = count__19581;
var G__19607 = (i__19582 + (1));
seq__19579 = G__19604;
chunk__19580 = G__19605;
count__19581 = G__19606;
i__19582 = G__19607;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19579);
if(temp__5735__auto__){
var seq__19579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19579__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19579__$1);
var G__19608 = cljs.core.chunk_rest(seq__19579__$1);
var G__19609 = c__4351__auto__;
var G__19610 = cljs.core.count(c__4351__auto__);
var G__19611 = (0);
seq__19579 = G__19608;
chunk__19580 = G__19609;
count__19581 = G__19610;
i__19582 = G__19611;
continue;
} else {
var particle = cljs.core.first(seq__19579__$1);
(sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IFn$_invoke$arity$1 ? sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.cljs$core$IFn$_invoke$arity$1(particle) : sketches.nature_of_code.particle_systems.particles_with_repellers.draw_particle.call(null,particle));


var G__19612 = cljs.core.next(seq__19579__$1);
var G__19613 = null;
var G__19614 = (0);
var G__19615 = (0);
seq__19579 = G__19612;
chunk__19580 = G__19613;
count__19581 = G__19614;
i__19582 = G__19615;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.particles_with_repellers.run = (function sketches$nature_of_code$particle_systems$particles_with_repellers$run(host){
sketches.nature_of_code.particle_systems.particles_with_repellers.particles_with_repellers = (function sketches$nature_of_code$particle_systems$particles_with_repellers$run_$_particles_with_repellers(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19616__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19617__i = 0, G__19617__a = new Array(arguments.length -  0);
while (G__19617__i < G__19617__a.length) {G__19617__a[G__19617__i] = arguments[G__19617__i + 0]; ++G__19617__i;}
  args = new cljs.core.IndexedSeq(G__19617__a,0,null);
} 
return G__19616__delegate.call(this,args);};
G__19616.cljs$lang$maxFixedArity = 0;
G__19616.cljs$lang$applyTo = (function (arglist__19618){
var args = cljs.core.seq(arglist__19618);
return G__19616__delegate(args);
});
G__19616.cljs$core$IFn$_invoke$arity$variadic = G__19616__delegate;
return G__19616;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_repellers.update_state))?(function() { 
var G__19619__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_repellers.update_state,args);
};
var G__19619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19620__i = 0, G__19620__a = new Array(arguments.length -  0);
while (G__19620__i < G__19620__a.length) {G__19620__a[G__19620__i] = arguments[G__19620__i + 0]; ++G__19620__i;}
  args = new cljs.core.IndexedSeq(G__19620__a,0,null);
} 
return G__19619__delegate.call(this,args);};
G__19619.cljs$lang$maxFixedArity = 0;
G__19619.cljs$lang$applyTo = (function (arglist__19621){
var args = cljs.core.seq(arglist__19621);
return G__19619__delegate(args);
});
G__19619.cljs$core$IFn$_invoke$arity$variadic = G__19619__delegate;
return G__19619;
})()
:sketches.nature_of_code.particle_systems.particles_with_repellers.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_repellers.setup))?(function() { 
var G__19622__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_repellers.setup,args);
};
var G__19622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19623__i = 0, G__19623__a = new Array(arguments.length -  0);
while (G__19623__i < G__19623__a.length) {G__19623__a[G__19623__i] = arguments[G__19623__i + 0]; ++G__19623__i;}
  args = new cljs.core.IndexedSeq(G__19623__a,0,null);
} 
return G__19622__delegate.call(this,args);};
G__19622.cljs$lang$maxFixedArity = 0;
G__19622.cljs$lang$applyTo = (function (arglist__19624){
var args = cljs.core.seq(arglist__19624);
return G__19622__delegate(args);
});
G__19622.cljs$core$IFn$_invoke$arity$variadic = G__19622__delegate;
return G__19622;
})()
:sketches.nature_of_code.particle_systems.particles_with_repellers.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_with_repellers.draw))?(function() { 
var G__19625__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_with_repellers.draw,args);
};
var G__19625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19626__i = 0, G__19626__a = new Array(arguments.length -  0);
while (G__19626__i < G__19626__a.length) {G__19626__a[G__19626__i] = arguments[G__19626__i + 0]; ++G__19626__i;}
  args = new cljs.core.IndexedSeq(G__19626__a,0,null);
} 
return G__19625__delegate.call(this,args);};
G__19625.cljs$lang$maxFixedArity = 0;
G__19625.cljs$lang$applyTo = (function (arglist__19627){
var args = cljs.core.seq(arglist__19627);
return G__19625__delegate(args);
});
G__19625.cljs$core$IFn$_invoke$arity$variadic = G__19625__delegate;
return G__19625;
})()
:sketches.nature_of_code.particle_systems.particles_with_repellers.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.particles_with_repellers.particles_with_repellers', sketches.nature_of_code.particle_systems.particles_with_repellers.particles_with_repellers);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.particles_with_repellers.particles_with_repellers,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19628__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19629__i = 0, G__19629__a = new Array(arguments.length -  0);
while (G__19629__i < G__19629__a.length) {G__19629__a[G__19629__i] = arguments[G__19629__i + 0]; ++G__19629__i;}
  args = new cljs.core.IndexedSeq(G__19629__a,0,null);
} 
return G__19628__delegate.call(this,args);};
G__19628.cljs$lang$maxFixedArity = 0;
G__19628.cljs$lang$applyTo = (function (arglist__19630){
var args = cljs.core.seq(arglist__19630);
return G__19628__delegate(args);
});
G__19628.cljs$core$IFn$_invoke$arity$variadic = G__19628__delegate;
return G__19628;
})()
:host)], null));
}
});
