// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.un_deux_trois');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.pprint');
sketches.generative_artistry.un_deux_trois.draw_line = (function sketches$generative_artistry$un_deux_trois$draw_line(x,y,width,height,positions){
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((x + (width / (2))),(y + (height / (2))));

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.random.cljs$core$IFn$_invoke$arity$1((5)));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((- (width / (2))),(- (height / (2))));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function sketches$generative_artistry$un_deux_trois$draw_line_$_iter__21426(s__21427){
return (new cljs.core.LazySeq(null,(function (){
var s__21427__$1 = s__21427;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21427__$1);
if(temp__5735__auto__){
var s__21427__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21427__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21427__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21429 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21428 = (0);
while(true){
if((i__21428 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21428);
cljs.core.chunk_append(b__21429,quil.core.line.cljs$core$IFn$_invoke$arity$4((i * width),(0),(i * width),height));

var G__21430 = (i__21428 + (1));
i__21428 = G__21430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21429),sketches$generative_artistry$un_deux_trois$draw_line_$_iter__21426(cljs.core.chunk_rest(s__21427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21429),null);
}
} else {
var i = cljs.core.first(s__21427__$2);
return cljs.core.cons(quil.core.line.cljs$core$IFn$_invoke$arity$4((i * width),(0),(i * width),height),sketches$generative_artistry$un_deux_trois$draw_line_$_iter__21426(cljs.core.rest(s__21427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(positions);
})());

return quil.core.pop_matrix();
});
sketches.generative_artistry.un_deux_trois.setup = (function sketches$generative_artistry$un_deux_trois$setup(){
var step = (20);
var third_of_height = (quil.core.height() / (3));
quil.core.stroke_weight((4));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (step,third_of_height){
return (function sketches$generative_artistry$un_deux_trois$setup_$_iter__21431(s__21432){
return (new cljs.core.LazySeq(null,((function (step,third_of_height){
return (function (){
var s__21432__$1 = s__21432;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21432__$1);
if(temp__5735__auto__){
var s__21432__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21432__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21432__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21434 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21433 = (0);
while(true){
if((i__21433 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21433);
cljs.core.chunk_append(b__21434,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (i__21433,y,c__4322__auto__,size__4323__auto__,b__21434,s__21432__$2,temp__5735__auto__,step,third_of_height){
return (function sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21435(s__21436){
return (new cljs.core.LazySeq(null,((function (i__21433,y,c__4322__auto__,size__4323__auto__,b__21434,s__21432__$2,temp__5735__auto__,step,third_of_height){
return (function (){
var s__21436__$1 = s__21436;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21436__$1);
if(temp__5735__auto____$1){
var s__21436__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21436__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__21436__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__21438 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__21437 = (0);
while(true){
if((i__21437 < size__4323__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__21437);
cljs.core.chunk_append(b__21438,(((y < third_of_height))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)):(((y < (third_of_height * (2))))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.8], null)):sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5,0.9], null))
)));

var G__21443 = (i__21437 + (1));
i__21437 = G__21443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21438),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21435(cljs.core.chunk_rest(s__21436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21438),null);
}
} else {
var x = cljs.core.first(s__21436__$2);
return cljs.core.cons((((y < third_of_height))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)):(((y < (third_of_height * (2))))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.8], null)):sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5,0.9], null))
)),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21435(cljs.core.rest(s__21436__$2)));
}
} else {
return null;
}
break;
}
});})(i__21433,y,c__4322__auto__,size__4323__auto__,b__21434,s__21432__$2,temp__5735__auto__,step,third_of_height))
,null,null));
});})(i__21433,y,c__4322__auto__,size__4323__auto__,b__21434,s__21432__$2,temp__5735__auto__,step,third_of_height))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(step,(quil.core.width() - step),step));
})()));

var G__21444 = (i__21433 + (1));
i__21433 = G__21444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21434),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431(cljs.core.chunk_rest(s__21432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21434),null);
}
} else {
var y = cljs.core.first(s__21432__$2);
return cljs.core.cons(cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (y,s__21432__$2,temp__5735__auto__,step,third_of_height){
return (function sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21439(s__21440){
return (new cljs.core.LazySeq(null,((function (y,s__21432__$2,temp__5735__auto__,step,third_of_height){
return (function (){
var s__21440__$1 = s__21440;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__21440__$1);
if(temp__5735__auto____$1){
var s__21440__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21440__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21440__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21442 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21441 = (0);
while(true){
if((i__21441 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21441);
cljs.core.chunk_append(b__21442,(((y < third_of_height))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)):(((y < (third_of_height * (2))))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.8], null)):sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5,0.9], null))
)));

var G__21445 = (i__21441 + (1));
i__21441 = G__21445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21442),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21439(cljs.core.chunk_rest(s__21440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21442),null);
}
} else {
var x = cljs.core.first(s__21440__$2);
return cljs.core.cons((((y < third_of_height))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null)):(((y < (third_of_height * (2))))?sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.8], null)):sketches.generative_artistry.un_deux_trois.draw_line(x,y,step,step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5,0.9], null))
)),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431_$_iter__21439(cljs.core.rest(s__21440__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__21432__$2,temp__5735__auto__,step,third_of_height))
,null,null));
});})(y,s__21432__$2,temp__5735__auto__,step,third_of_height))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(step,(quil.core.width() - step),step));
})()),sketches$generative_artistry$un_deux_trois$setup_$_iter__21431(cljs.core.rest(s__21432__$2)));
}
} else {
return null;
}
break;
}
});})(step,third_of_height))
,null,null));
});})(step,third_of_height))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(step,(quil.core.height() - step),step));
})());
});
sketches.generative_artistry.un_deux_trois.run = (function sketches$generative_artistry$un_deux_trois$run(host){
sketches.generative_artistry.un_deux_trois.un_deux_trois = (function sketches$generative_artistry$un_deux_trois$run_$_un_deux_trois(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21446__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21447__i = 0, G__21447__a = new Array(arguments.length -  0);
while (G__21447__i < G__21447__a.length) {G__21447__a[G__21447__i] = arguments[G__21447__i + 0]; ++G__21447__i;}
  args = new cljs.core.IndexedSeq(G__21447__a,0,null);
} 
return G__21446__delegate.call(this,args);};
G__21446.cljs$lang$maxFixedArity = 0;
G__21446.cljs$lang$applyTo = (function (arglist__21448){
var args = cljs.core.seq(arglist__21448);
return G__21446__delegate(args);
});
G__21446.cljs$core$IFn$_invoke$arity$variadic = G__21446__delegate;
return G__21446;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.un_deux_trois.setup))?(function() { 
var G__21449__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.un_deux_trois.setup,args);
};
var G__21449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21450__i = 0, G__21450__a = new Array(arguments.length -  0);
while (G__21450__i < G__21450__a.length) {G__21450__a[G__21450__i] = arguments[G__21450__i + 0]; ++G__21450__i;}
  args = new cljs.core.IndexedSeq(G__21450__a,0,null);
} 
return G__21449__delegate.call(this,args);};
G__21449.cljs$lang$maxFixedArity = 0;
G__21449.cljs$lang$applyTo = (function (arglist__21451){
var args = cljs.core.seq(arglist__21451);
return G__21449__delegate(args);
});
G__21449.cljs$core$IFn$_invoke$arity$variadic = G__21449__delegate;
return G__21449;
})()
:sketches.generative_artistry.un_deux_trois.setup)], 0));
});
goog.exportSymbol('sketches.generative_artistry.un_deux_trois.un_deux_trois', sketches.generative_artistry.un_deux_trois.un_deux_trois);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.un_deux_trois.un_deux_trois,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21452__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21453__i = 0, G__21453__a = new Array(arguments.length -  0);
while (G__21453__i < G__21453__a.length) {G__21453__a[G__21453__i] = arguments[G__21453__i + 0]; ++G__21453__i;}
  args = new cljs.core.IndexedSeq(G__21453__a,0,null);
} 
return G__21452__delegate.call(this,args);};
G__21452.cljs$lang$maxFixedArity = 0;
G__21452.cljs$lang$applyTo = (function (arglist__21454){
var args = cljs.core.seq(arglist__21454);
return G__21452__delegate(args);
});
G__21452.cljs$core$IFn$_invoke$arity$variadic = G__21452__delegate;
return G__21452;
})()
:host)], null));
}
});
