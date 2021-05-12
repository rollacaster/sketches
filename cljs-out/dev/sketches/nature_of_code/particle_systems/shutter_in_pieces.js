// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.particle_systems.shutter_in_pieces');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
goog.require('sketches.mover');
sketches.nature_of_code.particle_systems.shutter_in_pieces.setup = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$setup(){
quil.core.no_stroke();

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19685){
var vec__19686 = p__19685;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$particles,(function (){var iter__4324__auto__ = ((function (vec__19686,x0,y0){
return (function sketches$nature_of_code$particle_systems$shutter_in_pieces$setup_$_iter__19689(s__19690){
return (new cljs.core.LazySeq(null,((function (vec__19686,x0,y0){
return (function (){
var s__19690__$1 = s__19690;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__19690__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__19690__$1,x,xs__6292__auto__,temp__5735__auto__,vec__19686,x0,y0){
return (function sketches$nature_of_code$particle_systems$shutter_in_pieces$setup_$_iter__19689_$_iter__19691(s__19692){
return (new cljs.core.LazySeq(null,((function (s__19690__$1,x,xs__6292__auto__,temp__5735__auto__,vec__19686,x0,y0){
return (function (){
var s__19692__$1 = s__19692;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__19692__$1);
if(temp__5735__auto____$1){
var s__19692__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19692__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19692__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19694 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19693 = (0);
while(true){
if((i__19693 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19693);
cljs.core.chunk_append(b__19694,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sketches.mover.create_mover((10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + x),(y0 + y)], null)),cljs.core.cst$kw$lifespan,(255)));

var G__19695 = (i__19693 + (1));
i__19693 = G__19695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19694),sketches$nature_of_code$particle_systems$shutter_in_pieces$setup_$_iter__19689_$_iter__19691(cljs.core.chunk_rest(s__19692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19694),null);
}
} else {
var y = cljs.core.first(s__19692__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sketches.mover.create_mover((10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x0 + x),(y0 + y)], null)),cljs.core.cst$kw$lifespan,(255)),sketches$nature_of_code$particle_systems$shutter_in_pieces$setup_$_iter__19689_$_iter__19691(cljs.core.rest(s__19692__$2)));
}
} else {
return null;
}
break;
}
});})(s__19690__$1,x,xs__6292__auto__,temp__5735__auto__,vec__19686,x0,y0))
,null,null));
});})(s__19690__$1,x,xs__6292__auto__,temp__5735__auto__,vec__19686,x0,y0))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(100),(10))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$nature_of_code$particle_systems$shutter_in_pieces$setup_$_iter__19689(cljs.core.rest(s__19690__$1)));
} else {
var G__19696 = cljs.core.rest(s__19690__$1);
s__19690__$1 = G__19696;
continue;
}
} else {
return null;
}
break;
}
});})(vec__19686,x0,y0))
,null,null));
});})(vec__19686,x0,y0))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(100),(10)));
})(),cljs.core.cst$kw$exploding,false], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(quil.core.width() - (50)),((quil.core.width() - (50)) / (2))),cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(quil.core.height() - (50)),((quil.core.height() - (50)) / (2)))));
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.is_dead = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$is_dead(p__19697){
var map__19698 = p__19697;
var map__19698__$1 = ((((!((map__19698 == null)))?(((((map__19698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19698):map__19698);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698__$1,cljs.core.cst$kw$lifespan);
return (lifespan < 0.0);
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.compute_explosion_force = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$compute_explosion_force(particle,particles){
var vec__19700 = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.first(particles));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(1),null);
var vec__19703 = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.last(particles));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
var mid = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + ((x2 - x1) / (2))),(y1 + ((y2 - y1) / (2)))], null);
var vec__19706 = sketches.vector.mult(sketches.vector.normalize(sketches.vector.sub(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(particle),mid)),(50));
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d1,d2], null);
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.update_particle_system = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$update_particle_system(p__19709){
var map__19710 = p__19709;
var map__19710__$1 = ((((!((map__19710 == null)))?(((((map__19710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19710):map__19710);
var particle_system = map__19710__$1;
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19710__$1,cljs.core.cst$kw$particles);
var exploding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19710__$1,cljs.core.cst$kw$exploding);
if(cljs.core.truth_(exploding)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(particle_system,cljs.core.cst$kw$particles,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.is_dead,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19710,map__19710__$1,particle_system,particles,exploding){
return (function (particle){
return sketches.mover.compute_position(cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle,cljs.core.cst$kw$lifespan,cljs.core.dec));
});})(map__19710,map__19710__$1,particle_system,particles,exploding))
,particles)));
} else {
return particle_system;
}
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.update_state = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$update_state(particle_systems){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.update_particle_system,particle_systems);
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw_particle = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$draw_particle(p__19712){
var map__19713 = p__19712;
var map__19713__$1 = ((((!((map__19713 == null)))?(((((map__19713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19713):map__19713);
var particle = map__19713__$1;
var vec__19714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(1),null);
var lifespan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$lifespan);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$angle);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,cljs.core.cst$kw$mass);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$center);

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.fill.cljs$core$IFn$_invoke$arity$4((127),(0),(0),lifespan);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),mass,mass);

quil.core.pop_matrix();

return particle;
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$draw(particle_systems){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__19718 = cljs.core.seq(particle_systems);
var chunk__19719 = null;
var count__19720 = (0);
var i__19721 = (0);
while(true){
if((i__19721 < count__19720)){
var particle_system = chunk__19719.cljs$core$IIndexed$_nth$arity$2(null,i__19721);
var seq__19722_19730 = cljs.core.seq(cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(particle_system));
var chunk__19723_19731 = null;
var count__19724_19732 = (0);
var i__19725_19733 = (0);
while(true){
if((i__19725_19733 < count__19724_19732)){
var particle_19734 = chunk__19723_19731.cljs$core$IIndexed$_nth$arity$2(null,i__19725_19733);
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw_particle(particle_19734);


var G__19735 = seq__19722_19730;
var G__19736 = chunk__19723_19731;
var G__19737 = count__19724_19732;
var G__19738 = (i__19725_19733 + (1));
seq__19722_19730 = G__19735;
chunk__19723_19731 = G__19736;
count__19724_19732 = G__19737;
i__19725_19733 = G__19738;
continue;
} else {
var temp__5735__auto___19739 = cljs.core.seq(seq__19722_19730);
if(temp__5735__auto___19739){
var seq__19722_19740__$1 = temp__5735__auto___19739;
if(cljs.core.chunked_seq_QMARK_(seq__19722_19740__$1)){
var c__4351__auto___19741 = cljs.core.chunk_first(seq__19722_19740__$1);
var G__19742 = cljs.core.chunk_rest(seq__19722_19740__$1);
var G__19743 = c__4351__auto___19741;
var G__19744 = cljs.core.count(c__4351__auto___19741);
var G__19745 = (0);
seq__19722_19730 = G__19742;
chunk__19723_19731 = G__19743;
count__19724_19732 = G__19744;
i__19725_19733 = G__19745;
continue;
} else {
var particle_19746 = cljs.core.first(seq__19722_19740__$1);
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw_particle(particle_19746);


var G__19747 = cljs.core.next(seq__19722_19740__$1);
var G__19748 = null;
var G__19749 = (0);
var G__19750 = (0);
seq__19722_19730 = G__19747;
chunk__19723_19731 = G__19748;
count__19724_19732 = G__19749;
i__19725_19733 = G__19750;
continue;
}
} else {
}
}
break;
}


var G__19751 = seq__19718;
var G__19752 = chunk__19719;
var G__19753 = count__19720;
var G__19754 = (i__19721 + (1));
seq__19718 = G__19751;
chunk__19719 = G__19752;
count__19720 = G__19753;
i__19721 = G__19754;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__19718);
if(temp__5735__auto__){
var seq__19718__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19718__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19718__$1);
var G__19755 = cljs.core.chunk_rest(seq__19718__$1);
var G__19756 = c__4351__auto__;
var G__19757 = cljs.core.count(c__4351__auto__);
var G__19758 = (0);
seq__19718 = G__19755;
chunk__19719 = G__19756;
count__19720 = G__19757;
i__19721 = G__19758;
continue;
} else {
var particle_system = cljs.core.first(seq__19718__$1);
var seq__19726_19759 = cljs.core.seq(cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(particle_system));
var chunk__19727_19760 = null;
var count__19728_19761 = (0);
var i__19729_19762 = (0);
while(true){
if((i__19729_19762 < count__19728_19761)){
var particle_19763 = chunk__19727_19760.cljs$core$IIndexed$_nth$arity$2(null,i__19729_19762);
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw_particle(particle_19763);


var G__19764 = seq__19726_19759;
var G__19765 = chunk__19727_19760;
var G__19766 = count__19728_19761;
var G__19767 = (i__19729_19762 + (1));
seq__19726_19759 = G__19764;
chunk__19727_19760 = G__19765;
count__19728_19761 = G__19766;
i__19729_19762 = G__19767;
continue;
} else {
var temp__5735__auto___19768__$1 = cljs.core.seq(seq__19726_19759);
if(temp__5735__auto___19768__$1){
var seq__19726_19769__$1 = temp__5735__auto___19768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19726_19769__$1)){
var c__4351__auto___19770 = cljs.core.chunk_first(seq__19726_19769__$1);
var G__19771 = cljs.core.chunk_rest(seq__19726_19769__$1);
var G__19772 = c__4351__auto___19770;
var G__19773 = cljs.core.count(c__4351__auto___19770);
var G__19774 = (0);
seq__19726_19759 = G__19771;
chunk__19727_19760 = G__19772;
count__19728_19761 = G__19773;
i__19729_19762 = G__19774;
continue;
} else {
var particle_19775 = cljs.core.first(seq__19726_19769__$1);
sketches.nature_of_code.particle_systems.shutter_in_pieces.draw_particle(particle_19775);


var G__19776 = cljs.core.next(seq__19726_19769__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19726_19759 = G__19776;
chunk__19727_19760 = G__19777;
count__19728_19761 = G__19778;
i__19729_19762 = G__19779;
continue;
}
} else {
}
}
break;
}


var G__19780 = cljs.core.next(seq__19718__$1);
var G__19781 = null;
var G__19782 = (0);
var G__19783 = (0);
seq__19718 = G__19780;
chunk__19719 = G__19781;
count__19720 = G__19782;
i__19721 = G__19783;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.is_particle_system_clicked = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$is_particle_system_clicked(p__19784,x,y){
var map__19785 = p__19784;
var map__19785__$1 = ((((!((map__19785 == null)))?(((((map__19785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19785):map__19785);
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19785__$1,cljs.core.cst$kw$particles);
var vec__19787 = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.first(particles));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19787,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19787,(1),null);
var vec__19790 = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.last(particles));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(1),null);
return (((x > x1)) && ((y > y1)) && ((x < x2)) && ((y < y2)));
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.mouse_pressed = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$mouse_pressed(particle_systems,p__19794){
var map__19795 = p__19794;
var map__19795__$1 = ((((!((map__19795 == null)))?(((((map__19795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19795):map__19795);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,cljs.core.cst$kw$y);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19795,map__19795__$1,x,y){
return (function (particle_system){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(particle_system,cljs.core.cst$kw$particles,((function (map__19795,map__19795__$1,x,y){
return (function (p1__19793_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19795,map__19795__$1,x,y){
return (function (particle){
return sketches.mover.apply_force(particle,sketches.nature_of_code.particle_systems.shutter_in_pieces.compute_explosion_force(particle,p1__19793_SHARP_));
});})(map__19795,map__19795__$1,x,y))
,p1__19793_SHARP_);
});})(map__19795,map__19795__$1,x,y))
),cljs.core.cst$kw$exploding,(function (){var or__3949__auto__ = cljs.core.cst$kw$exploding.cljs$core$IFn$_invoke$arity$1(particle_system);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return sketches.nature_of_code.particle_systems.shutter_in_pieces.is_particle_system_clicked(particle_system,x,y);
}
})());
});})(map__19795,map__19795__$1,x,y))
,particle_systems);
});
sketches.nature_of_code.particle_systems.shutter_in_pieces.run = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$run(host){
sketches.nature_of_code.particle_systems.shutter_in_pieces.shutter_in_pieces = (function sketches$nature_of_code$particle_systems$shutter_in_pieces$run_$_shutter_in_pieces(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19797__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19798__i = 0, G__19798__a = new Array(arguments.length -  0);
while (G__19798__i < G__19798__a.length) {G__19798__a[G__19798__i] = arguments[G__19798__i + 0]; ++G__19798__i;}
  args = new cljs.core.IndexedSeq(G__19798__a,0,null);
} 
return G__19797__delegate.call(this,args);};
G__19797.cljs$lang$maxFixedArity = 0;
G__19797.cljs$lang$applyTo = (function (arglist__19799){
var args = cljs.core.seq(arglist__19799);
return G__19797__delegate(args);
});
G__19797.cljs$core$IFn$_invoke$arity$variadic = G__19797__delegate;
return G__19797;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.shutter_in_pieces.update_state))?(function() { 
var G__19800__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.update_state,args);
};
var G__19800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19801__i = 0, G__19801__a = new Array(arguments.length -  0);
while (G__19801__i < G__19801__a.length) {G__19801__a[G__19801__i] = arguments[G__19801__i + 0]; ++G__19801__i;}
  args = new cljs.core.IndexedSeq(G__19801__a,0,null);
} 
return G__19800__delegate.call(this,args);};
G__19800.cljs$lang$maxFixedArity = 0;
G__19800.cljs$lang$applyTo = (function (arglist__19802){
var args = cljs.core.seq(arglist__19802);
return G__19800__delegate(args);
});
G__19800.cljs$core$IFn$_invoke$arity$variadic = G__19800__delegate;
return G__19800;
})()
:sketches.nature_of_code.particle_systems.shutter_in_pieces.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.shutter_in_pieces.setup))?(function() { 
var G__19803__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.setup,args);
};
var G__19803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19804__i = 0, G__19804__a = new Array(arguments.length -  0);
while (G__19804__i < G__19804__a.length) {G__19804__a[G__19804__i] = arguments[G__19804__i + 0]; ++G__19804__i;}
  args = new cljs.core.IndexedSeq(G__19804__a,0,null);
} 
return G__19803__delegate.call(this,args);};
G__19803.cljs$lang$maxFixedArity = 0;
G__19803.cljs$lang$applyTo = (function (arglist__19805){
var args = cljs.core.seq(arglist__19805);
return G__19803__delegate(args);
});
G__19803.cljs$core$IFn$_invoke$arity$variadic = G__19803__delegate;
return G__19803;
})()
:sketches.nature_of_code.particle_systems.shutter_in_pieces.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.shutter_in_pieces.mouse_pressed))?(function() { 
var G__19806__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.mouse_pressed,args);
};
var G__19806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19807__i = 0, G__19807__a = new Array(arguments.length -  0);
while (G__19807__i < G__19807__a.length) {G__19807__a[G__19807__i] = arguments[G__19807__i + 0]; ++G__19807__i;}
  args = new cljs.core.IndexedSeq(G__19807__a,0,null);
} 
return G__19806__delegate.call(this,args);};
G__19806.cljs$lang$maxFixedArity = 0;
G__19806.cljs$lang$applyTo = (function (arglist__19808){
var args = cljs.core.seq(arglist__19808);
return G__19806__delegate(args);
});
G__19806.cljs$core$IFn$_invoke$arity$variadic = G__19806__delegate;
return G__19806;
})()
:sketches.nature_of_code.particle_systems.shutter_in_pieces.mouse_pressed),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.particle_systems.shutter_in_pieces.draw))?(function() { 
var G__19809__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.particle_systems.shutter_in_pieces.draw,args);
};
var G__19809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19810__i = 0, G__19810__a = new Array(arguments.length -  0);
while (G__19810__i < G__19810__a.length) {G__19810__a[G__19810__i] = arguments[G__19810__i + 0]; ++G__19810__i;}
  args = new cljs.core.IndexedSeq(G__19810__a,0,null);
} 
return G__19809__delegate.call(this,args);};
G__19809.cljs$lang$maxFixedArity = 0;
G__19809.cljs$lang$applyTo = (function (arglist__19811){
var args = cljs.core.seq(arglist__19811);
return G__19809__delegate(args);
});
G__19809.cljs$core$IFn$_invoke$arity$variadic = G__19809__delegate;
return G__19809;
})()
:sketches.nature_of_code.particle_systems.shutter_in_pieces.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.particle_systems.shutter_in_pieces.shutter_in_pieces', sketches.nature_of_code.particle_systems.shutter_in_pieces.shutter_in_pieces);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.particle_systems.shutter_in_pieces.shutter_in_pieces,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19812__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19813__i = 0, G__19813__a = new Array(arguments.length -  0);
while (G__19813__i < G__19813__a.length) {G__19813__a[G__19813__i] = arguments[G__19813__i + 0]; ++G__19813__i;}
  args = new cljs.core.IndexedSeq(G__19813__a,0,null);
} 
return G__19812__delegate.call(this,args);};
G__19812.cljs$lang$maxFixedArity = 0;
G__19812.cljs$lang$applyTo = (function (arglist__19814){
var args = cljs.core.seq(arglist__19814);
return G__19812__delegate(args);
});
G__19812.cljs$core$IFn$_invoke$arity$variadic = G__19812__delegate;
return G__19812;
})()
:host)], null));
}
});
