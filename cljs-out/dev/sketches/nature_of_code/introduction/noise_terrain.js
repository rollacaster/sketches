// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.introduction.noise_terrain');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
sketches.nature_of_code.introduction.noise_terrain.setup = (function sketches$nature_of_code$introduction$noise_terrain$setup(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((127));

quil.core.no_fill();

quil.core.rotate_x((quil.core.PI / (3)));

quil.core.translate.cljs$core$IFn$_invoke$arity$2(((- quil.core.width()) / (2)),((- quil.core.height()) / (2)));

var scale = (10);
var yoff = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var xoff = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var cols = (quil.core.width() / scale);
var rows = (quil.core.height() / scale);
var terrain = (function (){var col = cljs.core.List.EMPTY;
var iter__4324__auto__ = ((function (col,scale,yoff,xoff,cols,rows){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869(s__19870){
return (new cljs.core.LazySeq(null,((function (col,scale,yoff,xoff,cols,rows){
return (function (){
var s__19870__$1 = s__19870;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__19870__$1);
if(temp__5735__auto__){
var s__19870__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19870__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19870__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19872 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19871 = (0);
while(true){
if((i__19871 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19871);
cljs.core.chunk_append(b__19872,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(yoff,cljs.core._PLUS_,0.1);

var row = cljs.core.List.EMPTY;
var iter__4324__auto__ = ((function (i__19871,row,y,c__4322__auto__,size__4323__auto__,b__19872,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19873(s__19874){
return (new cljs.core.LazySeq(null,((function (i__19871,row,y,c__4322__auto__,size__4323__auto__,b__19872,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows){
return (function (){
var s__19874__$1 = s__19874;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__19874__$1);
if(temp__5735__auto____$1){
var s__19874__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19874__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__19874__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__19876 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__19875 = (0);
while(true){
if((i__19875 < size__4323__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__19875);
cljs.core.chunk_append(b__19876,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(xoff,cljs.core._PLUS_,0.1);

return quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff)),(0),(1),(-50),(50));
})()
);

var G__19893 = (i__19875 + (1));
i__19875 = G__19893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19876),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19873(cljs.core.chunk_rest(s__19874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19876),null);
}
} else {
var x = cljs.core.first(s__19874__$2);
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(xoff,cljs.core._PLUS_,0.1);

return quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff)),(0),(1),(-50),(50));
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19873(cljs.core.rest(s__19874__$2)));
}
} else {
return null;
}
break;
}
});})(i__19871,row,y,c__4322__auto__,size__4323__auto__,b__19872,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows))
,null,null));
});})(i__19871,row,y,c__4322__auto__,size__4323__auto__,b__19872,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(30)));
})()
);

var G__19894 = (i__19871 + (1));
i__19871 = G__19894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19872),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869(cljs.core.chunk_rest(s__19870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19872),null);
}
} else {
var y = cljs.core.first(s__19870__$2);
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(yoff,cljs.core._PLUS_,0.1);

var row = cljs.core.List.EMPTY;
var iter__4324__auto__ = ((function (row,y,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19877(s__19878){
return (new cljs.core.LazySeq(null,((function (row,y,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows){
return (function (){
var s__19878__$1 = s__19878;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__19878__$1);
if(temp__5735__auto____$1){
var s__19878__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19878__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19878__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19880 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19879 = (0);
while(true){
if((i__19879 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19879);
cljs.core.chunk_append(b__19880,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(xoff,cljs.core._PLUS_,0.1);

return quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff)),(0),(1),(-50),(50));
})()
);

var G__19895 = (i__19879 + (1));
i__19879 = G__19895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19880),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19877(cljs.core.chunk_rest(s__19878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19880),null);
}
} else {
var x = cljs.core.first(s__19878__$2);
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(xoff,cljs.core._PLUS_,0.1);

return quil.core.map_range(quil.core.noise.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(xoff),cljs.core.deref(yoff)),(0),(1),(-50),(50));
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869_$_iter__19877(cljs.core.rest(s__19878__$2)));
}
} else {
return null;
}
break;
}
});})(row,y,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows))
,null,null));
});})(row,y,s__19870__$2,temp__5735__auto__,col,scale,yoff,xoff,cols,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(30)));
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19869(cljs.core.rest(s__19870__$2)));
}
} else {
return null;
}
break;
}
});})(col,scale,yoff,xoff,cols,rows))
,null,null));
});})(col,scale,yoff,xoff,cols,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(30)));
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (scale,yoff,xoff,cols,rows,terrain){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881(s__19882){
return (new cljs.core.LazySeq(null,((function (scale,yoff,xoff,cols,rows,terrain){
return (function (){
var s__19882__$1 = s__19882;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__19882__$1);
if(temp__5735__auto__){
var s__19882__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19882__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19882__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19884 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19883 = (0);
while(true){
if((i__19883 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19883);
cljs.core.chunk_append(b__19884,(function (){
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$triangle_DASH_strip);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (i__19883,y,c__4322__auto__,size__4323__auto__,b__19884,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19885(s__19886){
return (new cljs.core.LazySeq(null,((function (i__19883,y,c__4322__auto__,size__4323__auto__,b__19884,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain){
return (function (){
var s__19886__$1 = s__19886;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__19886__$1);
if(temp__5735__auto____$1){
var s__19886__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19886__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__19886__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__19888 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__19887 = (0);
while(true){
if((i__19887 < size__4323__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__19887);
cljs.core.chunk_append(b__19888,(function (){
quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),(y * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,y),x));

return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),((y + (1)) * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,(y + (1))),x));
})()
);

var G__19896 = (i__19887 + (1));
i__19887 = G__19896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19888),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19885(cljs.core.chunk_rest(s__19886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19888),null);
}
} else {
var x = cljs.core.first(s__19886__$2);
return cljs.core.cons((function (){
quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),(y * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,y),x));

return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),((y + (1)) * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,(y + (1))),x));
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19885(cljs.core.rest(s__19886__$2)));
}
} else {
return null;
}
break;
}
});})(i__19883,y,c__4322__auto__,size__4323__auto__,b__19884,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain))
,null,null));
});})(i__19883,y,c__4322__auto__,size__4323__auto__,b__19884,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cols));
})());

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();
})()
);

var G__19897 = (i__19883 + (1));
i__19883 = G__19897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19884),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881(cljs.core.chunk_rest(s__19882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19884),null);
}
} else {
var y = cljs.core.first(s__19882__$2);
return cljs.core.cons((function (){
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$triangle_DASH_strip);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (y,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain){
return (function sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19889(s__19890){
return (new cljs.core.LazySeq(null,((function (y,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain){
return (function (){
var s__19890__$1 = s__19890;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__19890__$1);
if(temp__5735__auto____$1){
var s__19890__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19890__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19890__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19892 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19891 = (0);
while(true){
if((i__19891 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19891);
cljs.core.chunk_append(b__19892,(function (){
quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),(y * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,y),x));

return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),((y + (1)) * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,(y + (1))),x));
})()
);

var G__19898 = (i__19891 + (1));
i__19891 = G__19898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19892),sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19889(cljs.core.chunk_rest(s__19890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19892),null);
}
} else {
var x = cljs.core.first(s__19890__$2);
return cljs.core.cons((function (){
quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),(y * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,y),x));

return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((x * scale),((y + (1)) * scale),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terrain,(y + (1))),x));
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881_$_iter__19889(cljs.core.rest(s__19890__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain))
,null,null));
});})(y,s__19882__$2,temp__5735__auto__,scale,yoff,xoff,cols,rows,terrain))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cols));
})());

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();
})()
,sketches$nature_of_code$introduction$noise_terrain$setup_$_iter__19881(cljs.core.rest(s__19882__$2)));
}
} else {
return null;
}
break;
}
});})(scale,yoff,xoff,cols,rows,terrain))
,null,null));
});})(scale,yoff,xoff,cols,rows,terrain))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(rows - (1))));
})());
});
sketches.nature_of_code.introduction.noise_terrain.draw = (function sketches$nature_of_code$introduction$noise_terrain$draw(){
return null;
});
sketches.nature_of_code.introduction.noise_terrain.run = (function sketches$nature_of_code$introduction$noise_terrain$run(host){
sketches.nature_of_code.introduction.noise_terrain.noise_terrain = (function sketches$nature_of_code$introduction$noise_terrain$run_$_noise_terrain(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19899__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19900__i = 0, G__19900__a = new Array(arguments.length -  0);
while (G__19900__i < G__19900__a.length) {G__19900__a[G__19900__i] = arguments[G__19900__i + 0]; ++G__19900__i;}
  args = new cljs.core.IndexedSeq(G__19900__a,0,null);
} 
return G__19899__delegate.call(this,args);};
G__19899.cljs$lang$maxFixedArity = 0;
G__19899.cljs$lang$applyTo = (function (arglist__19901){
var args = cljs.core.seq(arglist__19901);
return G__19899__delegate(args);
});
G__19899.cljs$core$IFn$_invoke$arity$variadic = G__19899__delegate;
return G__19899;
})()
:host),cljs.core.cst$kw$renderer,cljs.core.cst$kw$p3d,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.noise_terrain.setup))?(function() { 
var G__19902__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_terrain.setup,args);
};
var G__19902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19903__i = 0, G__19903__a = new Array(arguments.length -  0);
while (G__19903__i < G__19903__a.length) {G__19903__a[G__19903__i] = arguments[G__19903__i + 0]; ++G__19903__i;}
  args = new cljs.core.IndexedSeq(G__19903__a,0,null);
} 
return G__19902__delegate.call(this,args);};
G__19902.cljs$lang$maxFixedArity = 0;
G__19902.cljs$lang$applyTo = (function (arglist__19904){
var args = cljs.core.seq(arglist__19904);
return G__19902__delegate(args);
});
G__19902.cljs$core$IFn$_invoke$arity$variadic = G__19902__delegate;
return G__19902;
})()
:sketches.nature_of_code.introduction.noise_terrain.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.introduction.noise_terrain.draw))?(function() { 
var G__19905__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.introduction.noise_terrain.draw,args);
};
var G__19905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19906__i = 0, G__19906__a = new Array(arguments.length -  0);
while (G__19906__i < G__19906__a.length) {G__19906__a[G__19906__i] = arguments[G__19906__i + 0]; ++G__19906__i;}
  args = new cljs.core.IndexedSeq(G__19906__a,0,null);
} 
return G__19905__delegate.call(this,args);};
G__19905.cljs$lang$maxFixedArity = 0;
G__19905.cljs$lang$applyTo = (function (arglist__19907){
var args = cljs.core.seq(arglist__19907);
return G__19905__delegate(args);
});
G__19905.cljs$core$IFn$_invoke$arity$variadic = G__19905__delegate;
return G__19905;
})()
:sketches.nature_of_code.introduction.noise_terrain.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.introduction.noise_terrain.noise_terrain', sketches.nature_of_code.introduction.noise_terrain.noise_terrain);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.introduction.noise_terrain.noise_terrain,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__19908__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__19908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19909__i = 0, G__19909__a = new Array(arguments.length -  0);
while (G__19909__i < G__19909__a.length) {G__19909__a[G__19909__i] = arguments[G__19909__i + 0]; ++G__19909__i;}
  args = new cljs.core.IndexedSeq(G__19909__a,0,null);
} 
return G__19908__delegate.call(this,args);};
G__19908.cljs$lang$maxFixedArity = 0;
G__19908.cljs$lang$applyTo = (function (arglist__19910){
var args = cljs.core.seq(arglist__19910);
return G__19908__delegate(args);
});
G__19908.cljs$core$IFn$_invoke$arity$variadic = G__19908__delegate;
return G__19908;
})()
:host)], null));
}
});
