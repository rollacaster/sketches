// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.hypnotic_squares');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_artistry.hypnotic_squares.setup = (function sketches$generative_artistry$hypnotic_squares$setup(){
var final_size = (3);
var offset = (2);
var tile_step = ((quil.core.width() - (offset * (2))) / (7));
var start_size = tile_step;
sketches.generative_artistry.hypnotic_squares.draw = ((function (final_size,offset,tile_step,start_size){
return (function sketches$generative_artistry$hypnotic_squares$setup_$_draw(x,y,width,height,x_movement,y_movement,steps,start_steps){
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height);

if((steps >= (0))){
var new_size = ((start_size * (steps / start_steps)) + final_size);
var new_x = (x + ((width - new_size) / (2)));
var tilted_x = (new_x - (((x - new_x) / (steps + (2))) * x_movement));
var new_y = (y + ((height - new_size) / (2)));
var tilted_y = (new_y - (((y - new_y) / (steps + (2))) * y_movement));
var G__21837 = tilted_x;
var G__21838 = tilted_y;
var G__21839 = new_size;
var G__21840 = new_size;
var G__21841 = x_movement;
var G__21842 = y_movement;
var G__21843 = (steps - (1));
var G__21844 = start_steps;
return (sketches.generative_artistry.hypnotic_squares.draw.cljs$core$IFn$_invoke$arity$8 ? sketches.generative_artistry.hypnotic_squares.draw.cljs$core$IFn$_invoke$arity$8(G__21837,G__21838,G__21839,G__21840,G__21841,G__21842,G__21843,G__21844) : sketches.generative_artistry.hypnotic_squares.draw.call(null,G__21837,G__21838,G__21839,G__21840,G__21841,G__21842,G__21843,G__21844));
} else {
return null;
}
});})(final_size,offset,tile_step,start_size))
;

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (final_size,offset,tile_step,start_size){
return (function sketches$generative_artistry$hypnotic_squares$setup_$_iter__21845(s__21846){
return (new cljs.core.LazySeq(null,((function (final_size,offset,tile_step,start_size){
return (function (){
var s__21846__$1 = s__21846;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21846__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__21846__$1,x,xs__6292__auto__,temp__5735__auto__,final_size,offset,tile_step,start_size){
return (function sketches$generative_artistry$hypnotic_squares$setup_$_iter__21845_$_iter__21847(s__21848){
return (new cljs.core.LazySeq(null,((function (s__21846__$1,x,xs__6292__auto__,temp__5735__auto__,final_size,offset,tile_step,start_size){
return (function (){
var s__21848__$1 = s__21848;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21848__$1);
if(temp__5735__auto____$1){
var s__21848__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21848__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21848__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21850 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21849 = (0);
while(true){
if((i__21849 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21849);
cljs.core.chunk_append(b__21850,(function (){var start_steps = ((2) + (function (){var G__21851 = quil.core.random.cljs$core$IFn$_invoke$arity$1((3));
return Math.ceil(G__21851);
})());
return sketches.generative_artistry.hypnotic_squares.draw(x,y,start_size,start_size,(function (){var G__21852 = quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1));
return Math.floor(G__21852);
})(),(function (){var G__21853 = quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1));
return Math.floor(G__21853);
})(),start_steps,start_steps);
})());

var G__21857 = (i__21849 + (1));
i__21849 = G__21857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),sketches$generative_artistry$hypnotic_squares$setup_$_iter__21845_$_iter__21847(cljs.core.chunk_rest(s__21848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),null);
}
} else {
var y = cljs.core.first(s__21848__$2);
return cljs.core.cons((function (){var start_steps = ((2) + (function (){var G__21854 = quil.core.random.cljs$core$IFn$_invoke$arity$1((3));
return Math.ceil(G__21854);
})());
return sketches.generative_artistry.hypnotic_squares.draw(x,y,start_size,start_size,(function (){var G__21855 = quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1));
return Math.floor(G__21855);
})(),(function (){var G__21856 = quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1));
return Math.floor(G__21856);
})(),start_steps,start_steps);
})(),sketches$generative_artistry$hypnotic_squares$setup_$_iter__21845_$_iter__21847(cljs.core.rest(s__21848__$2)));
}
} else {
return null;
}
break;
}
});})(s__21846__$1,x,xs__6292__auto__,temp__5735__auto__,final_size,offset,tile_step,start_size))
,null,null));
});})(s__21846__$1,x,xs__6292__auto__,temp__5735__auto__,final_size,offset,tile_step,start_size))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(offset,(quil.core.height() - offset),tile_step)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$generative_artistry$hypnotic_squares$setup_$_iter__21845(cljs.core.rest(s__21846__$1)));
} else {
var G__21858 = cljs.core.rest(s__21846__$1);
s__21846__$1 = G__21858;
continue;
}
} else {
return null;
}
break;
}
});})(final_size,offset,tile_step,start_size))
,null,null));
});})(final_size,offset,tile_step,start_size))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(offset,(quil.core.width() - offset),tile_step));
})());
});
sketches.generative_artistry.hypnotic_squares.run = (function sketches$generative_artistry$hypnotic_squares$run(host){
sketches.generative_artistry.hypnotic_squares.hypnotic_squers = (function sketches$generative_artistry$hypnotic_squares$run_$_hypnotic_squers(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21859__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21860__i = 0, G__21860__a = new Array(arguments.length -  0);
while (G__21860__i < G__21860__a.length) {G__21860__a[G__21860__i] = arguments[G__21860__i + 0]; ++G__21860__i;}
  args = new cljs.core.IndexedSeq(G__21860__a,0,null);
} 
return G__21859__delegate.call(this,args);};
G__21859.cljs$lang$maxFixedArity = 0;
G__21859.cljs$lang$applyTo = (function (arglist__21861){
var args = cljs.core.seq(arglist__21861);
return G__21859__delegate(args);
});
G__21859.cljs$core$IFn$_invoke$arity$variadic = G__21859__delegate;
return G__21859;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.hypnotic_squares.setup))?(function() { 
var G__21862__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.hypnotic_squares.setup,args);
};
var G__21862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21863__i = 0, G__21863__a = new Array(arguments.length -  0);
while (G__21863__i < G__21863__a.length) {G__21863__a[G__21863__i] = arguments[G__21863__i + 0]; ++G__21863__i;}
  args = new cljs.core.IndexedSeq(G__21863__a,0,null);
} 
return G__21862__delegate.call(this,args);};
G__21862.cljs$lang$maxFixedArity = 0;
G__21862.cljs$lang$applyTo = (function (arglist__21864){
var args = cljs.core.seq(arglist__21864);
return G__21862__delegate(args);
});
G__21862.cljs$core$IFn$_invoke$arity$variadic = G__21862__delegate;
return G__21862;
})()
:sketches.generative_artistry.hypnotic_squares.setup)], 0));
});
goog.exportSymbol('sketches.generative_artistry.hypnotic_squares.hypnotic_squers', sketches.generative_artistry.hypnotic_squares.hypnotic_squers);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.hypnotic_squares.hypnotic_squers,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21865__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21866__i = 0, G__21866__a = new Array(arguments.length -  0);
while (G__21866__i < G__21866__a.length) {G__21866__a[G__21866__i] = arguments[G__21866__i + 0]; ++G__21866__i;}
  args = new cljs.core.IndexedSeq(G__21866__a,0,null);
} 
return G__21865__delegate.call(this,args);};
G__21865.cljs$lang$maxFixedArity = 0;
G__21865.cljs$lang$applyTo = (function (arglist__21867){
var args = cljs.core.seq(arglist__21867);
return G__21865__delegate(args);
});
G__21865.cljs$core$IFn$_invoke$arity$variadic = G__21865__delegate;
return G__21865;
})()
:host)], null));
}
});
