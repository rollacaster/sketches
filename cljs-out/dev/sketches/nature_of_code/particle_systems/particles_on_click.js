// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.particles_on_click');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.nature_of_code.particle_systems.particles_on_click.create_particle = (function sketches$nature_of_code$particle_systems$particles_on_click$create_particle(location){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1))], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$lifespan,255.0,cljs.core.cst$kw$aAcceleration,0.0,cljs.core.cst$kw$aVelocity,0.1,cljs.core.cst$kw$angle,0.0], null);
});
sketches.nature_of_code.particle_systems.particles_on_click.setup = (function sketches$nature_of_code$particle_systems$particles_on_click$setup(){
return cljs.core.List.EMPTY;
});
sketches.nature_of_code.particle_systems.particles_on_click.update_particle = (function sketches$nature_of_code$particle_systems$particles_on_click$update_particle(p__15481){
var map__15482 = p__15481;
var map__15482__$1 = ((((!((map__15482 == null)))?(((((map__15482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15482):map__15482);
var particle = map__15482__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$location);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$lifespan);
var aVelocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$aVelocity);
var aAcceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$aAcceleration);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$angle);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity__$1,location);
var lifespan__$1 = (lifespan - 2.0);
var aVelocity__$1 = (aVelocity + aAcceleration);
var angle__$1 = (aVelocity__$1 + angle);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.cst$kw$lifespan,lifespan__$1),cljs.core.cst$kw$aVelocity,aVelocity__$1),cljs.core.cst$kw$angle,(aVelocity__$1 + angle__$1)),cljs.core.cst$kw$aAcceleration,(0));
});
sketches.nature_of_code.particle_systems.particles_on_click.is_dead = (function sketches$nature_of_code$particle_systems$particles_on_click$is_dead(p__15484){
var map__15485 = p__15484;
var map__15485__$1 = ((((!((map__15485 == null)))?(((((map__15485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15485):map__15485);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.particles_on_click.update_particle_system = (function sketches$nature_of_code$particle_systems$particles_on_click$update_particle_system(p__15487){
var map__15488 = p__15487;
var map__15488__$1 = ((((!((map__15488 == null)))?(((((map__15488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15488):map__15488);
var particle_system = map__15488__$1;
var vec__15489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(1),null);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$particles);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15488__$1,cljs.core.cst$kw$count);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(particle_system,cljs.core.cst$kw$count,(count - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$particles,(function (){var particles__$1 = (((count > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(particles,sketches.nature_of_code.particle_systems.particles_on_click.create_particle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))):particles);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.update_particle,particles__$1));
})()], 0));
});
sketches.nature_of_code.particle_systems.particles_on_click.create_particle_system = (function sketches$nature_of_code$particle_systems$particles_on_click$create_particle_system(x,y,count){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$count,count,cljs.core.cst$kw$particles,cljs.core.PersistentVector.EMPTY], null);
});
sketches.nature_of_code.particle_systems.particles_on_click.update_state = (function sketches$nature_of_code$particle_systems$particles_on_click$update_state(particle_systems){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.update_particle_system,particle_systems);
});
sketches.nature_of_code.particle_systems.particles_on_click.draw_particle = (function sketches$nature_of_code$particle_systems$particles_on_click$draw_particle(p__15493){
var map__15494 = p__15493;
var map__15494__$1 = ((((!((map__15494 == null)))?(((((map__15494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15494):map__15494);
var vec__15495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15494__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15495,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15495,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15494__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15494__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),lifespan);

quil.core.fill.cljs$core$IFn$_invoke$arity$4((127),(0),(0),lifespan);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(8),(8));

return quil.core.pop_matrix();
});
sketches.nature_of_code.particle_systems.particles_on_click.draw = (function sketches$nature_of_code$particle_systems$particles_on_click$draw(particle_systems){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__15499 = cljs.core.seq(particle_systems);
var chunk__15500 = null;
var count__15501 = (0);
var i__15502 = (0);
while(true){
if((i__15502 < count__15501)){
var particle_system = chunk__15500.cljs$core$IIndexed$_nth$arity$2(null,i__15502);
var seq__15503_15511 = cljs.core.seq(cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(particle_system));
var chunk__15504_15512 = null;
var count__15505_15513 = (0);
var i__15506_15514 = (0);
while(true){
if((i__15506_15514 < count__15505_15513)){
var particle_15515 = chunk__15504_15512.cljs$core$IIndexed$_nth$arity$2(null,i__15506_15514);
sketches.nature_of_code.particle_systems.particles_on_click.draw_particle(particle_15515);


var G__15516 = seq__15503_15511;
var G__15517 = chunk__15504_15512;
var G__15518 = count__15505_15513;
var G__15519 = (i__15506_15514 + (1));
seq__15503_15511 = G__15516;
chunk__15504_15512 = G__15517;
count__15505_15513 = G__15518;
i__15506_15514 = G__15519;
continue;
} else {
var temp__5735__auto___15520 = cljs.core.seq(seq__15503_15511);
if(temp__5735__auto___15520){
var seq__15503_15521__$1 = temp__5735__auto___15520;
if(cljs.core.chunked_seq_QMARK_(seq__15503_15521__$1)){
var c__4351__auto___15522 = cljs.core.chunk_first(seq__15503_15521__$1);
var G__15523 = cljs.core.chunk_rest(seq__15503_15521__$1);
var G__15524 = c__4351__auto___15522;
var G__15525 = cljs.core.count(c__4351__auto___15522);
var G__15526 = (0);
seq__15503_15511 = G__15523;
chunk__15504_15512 = G__15524;
count__15505_15513 = G__15525;
i__15506_15514 = G__15526;
continue;
} else {
var particle_15527 = cljs.core.first(seq__15503_15521__$1);
sketches.nature_of_code.particle_systems.particles_on_click.draw_particle(particle_15527);


var G__15528 = cljs.core.next(seq__15503_15521__$1);
var G__15529 = null;
var G__15530 = (0);
var G__15531 = (0);
seq__15503_15511 = G__15528;
chunk__15504_15512 = G__15529;
count__15505_15513 = G__15530;
i__15506_15514 = G__15531;
continue;
}
} else {
}
}
break;
}


var G__15532 = seq__15499;
var G__15533 = chunk__15500;
var G__15534 = count__15501;
var G__15535 = (i__15502 + (1));
seq__15499 = G__15532;
chunk__15500 = G__15533;
count__15501 = G__15534;
i__15502 = G__15535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15499);
if(temp__5735__auto__){
var seq__15499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15499__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15499__$1);
var G__15536 = cljs.core.chunk_rest(seq__15499__$1);
var G__15537 = c__4351__auto__;
var G__15538 = cljs.core.count(c__4351__auto__);
var G__15539 = (0);
seq__15499 = G__15536;
chunk__15500 = G__15537;
count__15501 = G__15538;
i__15502 = G__15539;
continue;
} else {
var particle_system = cljs.core.first(seq__15499__$1);
var seq__15507_15540 = cljs.core.seq(cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(particle_system));
var chunk__15508_15541 = null;
var count__15509_15542 = (0);
var i__15510_15543 = (0);
while(true){
if((i__15510_15543 < count__15509_15542)){
var particle_15544 = chunk__15508_15541.cljs$core$IIndexed$_nth$arity$2(null,i__15510_15543);
sketches.nature_of_code.particle_systems.particles_on_click.draw_particle(particle_15544);


var G__15545 = seq__15507_15540;
var G__15546 = chunk__15508_15541;
var G__15547 = count__15509_15542;
var G__15548 = (i__15510_15543 + (1));
seq__15507_15540 = G__15545;
chunk__15508_15541 = G__15546;
count__15509_15542 = G__15547;
i__15510_15543 = G__15548;
continue;
} else {
var temp__5735__auto___15549__$1 = cljs.core.seq(seq__15507_15540);
if(temp__5735__auto___15549__$1){
var seq__15507_15550__$1 = temp__5735__auto___15549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15507_15550__$1)){
var c__4351__auto___15551 = cljs.core.chunk_first(seq__15507_15550__$1);
var G__15552 = cljs.core.chunk_rest(seq__15507_15550__$1);
var G__15553 = c__4351__auto___15551;
var G__15554 = cljs.core.count(c__4351__auto___15551);
var G__15555 = (0);
seq__15507_15540 = G__15552;
chunk__15508_15541 = G__15553;
count__15509_15542 = G__15554;
i__15510_15543 = G__15555;
continue;
} else {
var particle_15556 = cljs.core.first(seq__15507_15550__$1);
sketches.nature_of_code.particle_systems.particles_on_click.draw_particle(particle_15556);


var G__15557 = cljs.core.next(seq__15507_15550__$1);
var G__15558 = null;
var G__15559 = (0);
var G__15560 = (0);
seq__15507_15540 = G__15557;
chunk__15508_15541 = G__15558;
count__15509_15542 = G__15559;
i__15510_15543 = G__15560;
continue;
}
} else {
}
}
break;
}


var G__15561 = cljs.core.next(seq__15499__$1);
var G__15562 = null;
var G__15563 = (0);
var G__15564 = (0);
seq__15499 = G__15561;
chunk__15500 = G__15562;
count__15501 = G__15563;
i__15502 = G__15564;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.particles_on_click.mouse_pressed = (function sketches$nature_of_code$particle_systems$particles_on_click$mouse_pressed(state,p__15565){
var map__15566 = p__15565;
var map__15566__$1 = ((((!((map__15566 == null)))?(((((map__15566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15566):map__15566);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15566__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15566__$1,cljs.core.cst$kw$y);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,sketches.nature_of_code.particle_systems.particles_on_click.create_particle_system(x,y,(50)));
});
sketches.nature_of_code.particle_systems.particles_on_click.run = (function sketches$nature_of_code$particle_systems$particles_on_click$run(host){
sketches.nature_of_code.particle_systems.particles_on_click.particles_on_click = (function sketches$nature_of_code$particle_systems$particles_on_click$run_$_particles_on_click(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__15568__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__15568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15569__i = 0, G__15569__a = new Array(arguments.length -  0);
while (G__15569__i < G__15569__a.length) {G__15569__a[G__15569__i] = arguments[G__15569__i + 0]; ++G__15569__i;}
  args = new cljs.core.IndexedSeq(G__15569__a,0,null);
} 
return G__15568__delegate.call(this,args);};
G__15568.cljs$lang$maxFixedArity = 0;
G__15568.cljs$lang$applyTo = (function (arglist__15570){
var args = cljs.core.seq(arglist__15570);
return G__15568__delegate(args);
});
G__15568.cljs$core$IFn$_invoke$arity$variadic = G__15568__delegate;
return G__15568;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_on_click.update_state))?(function() { 
var G__15571__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.update_state,args);
};
var G__15571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15572__i = 0, G__15572__a = new Array(arguments.length -  0);
while (G__15572__i < G__15572__a.length) {G__15572__a[G__15572__i] = arguments[G__15572__i + 0]; ++G__15572__i;}
  args = new cljs.core.IndexedSeq(G__15572__a,0,null);
} 
return G__15571__delegate.call(this,args);};
G__15571.cljs$lang$maxFixedArity = 0;
G__15571.cljs$lang$applyTo = (function (arglist__15573){
var args = cljs.core.seq(arglist__15573);
return G__15571__delegate(args);
});
G__15571.cljs$core$IFn$_invoke$arity$variadic = G__15571__delegate;
return G__15571;
})()
:sketches.nature_of_code.particle_systems.particles_on_click.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_on_click.setup))?(function() { 
var G__15574__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.setup,args);
};
var G__15574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15575__i = 0, G__15575__a = new Array(arguments.length -  0);
while (G__15575__i < G__15575__a.length) {G__15575__a[G__15575__i] = arguments[G__15575__i + 0]; ++G__15575__i;}
  args = new cljs.core.IndexedSeq(G__15575__a,0,null);
} 
return G__15574__delegate.call(this,args);};
G__15574.cljs$lang$maxFixedArity = 0;
G__15574.cljs$lang$applyTo = (function (arglist__15576){
var args = cljs.core.seq(arglist__15576);
return G__15574__delegate(args);
});
G__15574.cljs$core$IFn$_invoke$arity$variadic = G__15574__delegate;
return G__15574;
})()
:sketches.nature_of_code.particle_systems.particles_on_click.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_on_click.mouse_pressed))?(function() { 
var G__15577__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.mouse_pressed,args);
};
var G__15577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15578__i = 0, G__15578__a = new Array(arguments.length -  0);
while (G__15578__i < G__15578__a.length) {G__15578__a[G__15578__i] = arguments[G__15578__i + 0]; ++G__15578__i;}
  args = new cljs.core.IndexedSeq(G__15578__a,0,null);
} 
return G__15577__delegate.call(this,args);};
G__15577.cljs$lang$maxFixedArity = 0;
G__15577.cljs$lang$applyTo = (function (arglist__15579){
var args = cljs.core.seq(arglist__15579);
return G__15577__delegate(args);
});
G__15577.cljs$core$IFn$_invoke$arity$variadic = G__15577__delegate;
return G__15577;
})()
:sketches.nature_of_code.particle_systems.particles_on_click.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.particles_on_click.draw))?(function() { 
var G__15580__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.particles_on_click.draw,args);
};
var G__15580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15581__i = 0, G__15581__a = new Array(arguments.length -  0);
while (G__15581__i < G__15581__a.length) {G__15581__a[G__15581__i] = arguments[G__15581__i + 0]; ++G__15581__i;}
  args = new cljs.core.IndexedSeq(G__15581__a,0,null);
} 
return G__15580__delegate.call(this,args);};
G__15580.cljs$lang$maxFixedArity = 0;
G__15580.cljs$lang$applyTo = (function (arglist__15582){
var args = cljs.core.seq(arglist__15582);
return G__15580__delegate(args);
});
G__15580.cljs$core$IFn$_invoke$arity$variadic = G__15580__delegate;
return G__15580;
})()
:sketches.nature_of_code.particle_systems.particles_on_click.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.particles_on_click.particles_on_click', sketches.nature_of_code.particle_systems.particles_on_click.particles_on_click);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.particles_on_click.particles_on_click,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__15583__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__15583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15584__i = 0, G__15584__a = new Array(arguments.length -  0);
while (G__15584__i < G__15584__a.length) {G__15584__a[G__15584__i] = arguments[G__15584__i + 0]; ++G__15584__i;}
  args = new cljs.core.IndexedSeq(G__15584__a,0,null);
} 
return G__15583__delegate.call(this,args);};
G__15583.cljs$lang$maxFixedArity = 0;
G__15583.cljs$lang$applyTo = (function (arglist__15585){
var args = cljs.core.seq(arglist__15585);
return G__15583__delegate(args);
});
G__15583.cljs$core$IFn$_invoke$arity$variadic = G__15583__delegate;
return G__15583;
})()
:host)], null));
}
});
