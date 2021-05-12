// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_artistry.piet_mondarin');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quil.sketch');
sketches.generative_artistry.piet_mondarin.split_on_x = (function sketches$generative_artistry$piet_mondarin$split_on_x(square,split_at){
var square_a = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square) - ((cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square) - split_at) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square))),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square)], null);
var square_b = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,split_at,cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$width,((cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square) - split_at) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square)),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [square_a,square_b], null);
});
sketches.generative_artistry.piet_mondarin.split_on_y = (function sketches$generative_artistry$piet_mondarin$split_on_y(square,split_at){
var square_a = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$height,(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square) - ((cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square) - split_at) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square)))], null);
var square_b = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$y,split_at,cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square),cljs.core.cst$kw$height,((cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square) - split_at) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square))], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [square_a,square_b], null);
});
sketches.generative_artistry.piet_mondarin.split_squares_with = (function sketches$generative_artistry$piet_mondarin$split_squares_with(squares,p__24391){
var map__24392 = p__24391;
var map__24392__$1 = ((((!((map__24392 == null)))?(((((map__24392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24392):map__24392);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24392__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24392__$1,cljs.core.cst$kw$y);
if((quil.core.random.cljs$core$IFn$_invoke$arity$1((1)) > 0.5)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__24392,map__24392__$1,x,y){
return (function (squares__$1,square){
if((((x > cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square))) && ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square) < (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(square) + cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(square)))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(squares__$1,sketches.generative_artistry.piet_mondarin.split_on_x(square,x));
} else {
if((((y > cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square))) && ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square) < (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(square) + cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(square)))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(squares__$1,sketches.generative_artistry.piet_mondarin.split_on_y(square,y));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(squares__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [square], null));

}
}
});})(map__24392,map__24392__$1,x,y))
,cljs.core.PersistentVector.EMPTY,squares);
} else {
return squares;
}
});
sketches.generative_artistry.piet_mondarin.draw_square = (function sketches$generative_artistry$piet_mondarin$draw_square(p__24394){
var map__24395 = p__24394;
var map__24395__$1 = ((((!((map__24395 == null)))?(((((map__24395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24395):map__24395);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395__$1,cljs.core.cst$kw$height);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395__$1,cljs.core.cst$kw$color);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(color)?color:"#F2F5F1"));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height);
});
sketches.generative_artistry.piet_mondarin.draw = (function sketches$generative_artistry$piet_mondarin$draw(squares){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.piet_mondarin.draw_square,squares));
});
sketches.generative_artistry.piet_mondarin.add_colors = (function sketches$generative_artistry$piet_mondarin$add_colors(squares){
var i1 = (function (){var G__24397 = quil.core.random.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(squares));
return Math.floor(G__24397);
})();
var i2 = (function (){var G__24398 = quil.core.random.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(squares));
return Math.floor(G__24398);
})();
var i3 = (function (){var G__24399 = quil.core.random.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(squares));
return Math.floor(G__24399);
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,squares),i1,((function (i1,i2,i3){
return (function (square){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(square,cljs.core.cst$kw$color,"#D40920");
});})(i1,i2,i3))
),i2,((function (i1,i2,i3){
return (function (square){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(square,cljs.core.cst$kw$color,"#1356A2");
});})(i1,i2,i3))
),i3,((function (i1,i2,i3){
return (function (square){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(square,cljs.core.cst$kw$color,"#F7D842");
});})(i1,i2,i3))
);
});
sketches.generative_artistry.piet_mondarin.setup = (function sketches$generative_artistry$piet_mondarin$setup(){
quil.core.stroke_weight((8));

var squares = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,quil.core.width(),cljs.core.cst$kw$height,quil.core.height()], null)], null);
var step = (quil.core.width() / (6));
return sketches.generative_artistry.piet_mondarin.draw(sketches.generative_artistry.piet_mondarin.add_colors(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (squares,step){
return (function (squares__$1,i){
return sketches.generative_artistry.piet_mondarin.split_squares_with(sketches.generative_artistry.piet_mondarin.split_squares_with(squares__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,i], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,i], null));
});})(squares,step))
,squares,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(step * (6)),step)))));
});
sketches.generative_artistry.piet_mondarin.run = (function sketches$generative_artistry$piet_mondarin$run(host){
sketches.generative_artistry.piet_mondarin.pient_mondrain = (function sketches$generative_artistry$piet_mondarin$run_$_pient_mondrain(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24400__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24401__i = 0, G__24401__a = new Array(arguments.length -  0);
while (G__24401__i < G__24401__a.length) {G__24401__a[G__24401__i] = arguments[G__24401__i + 0]; ++G__24401__i;}
  args = new cljs.core.IndexedSeq(G__24401__a,0,null);
} 
return G__24400__delegate.call(this,args);};
G__24400.cljs$lang$maxFixedArity = 0;
G__24400.cljs$lang$applyTo = (function (arglist__24402){
var args = cljs.core.seq(arglist__24402);
return G__24400__delegate(args);
});
G__24400.cljs$core$IFn$_invoke$arity$variadic = G__24400__delegate;
return G__24400;
})()
:host),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_artistry.piet_mondarin.setup))?(function() { 
var G__24403__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_artistry.piet_mondarin.setup,args);
};
var G__24403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24404__i = 0, G__24404__a = new Array(arguments.length -  0);
while (G__24404__i < G__24404__a.length) {G__24404__a[G__24404__i] = arguments[G__24404__i + 0]; ++G__24404__i;}
  args = new cljs.core.IndexedSeq(G__24404__a,0,null);
} 
return G__24403__delegate.call(this,args);};
G__24403.cljs$lang$maxFixedArity = 0;
G__24403.cljs$lang$applyTo = (function (arglist__24405){
var args = cljs.core.seq(arglist__24405);
return G__24403__delegate(args);
});
G__24403.cljs$core$IFn$_invoke$arity$variadic = G__24403__delegate;
return G__24403;
})()
:sketches.generative_artistry.piet_mondarin.setup)], 0));
});
goog.exportSymbol('sketches.generative_artistry.piet_mondarin.pient_mondrain', sketches.generative_artistry.piet_mondarin.pient_mondrain);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_artistry.piet_mondarin.pient_mondrain,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24406__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24407__i = 0, G__24407__a = new Array(arguments.length -  0);
while (G__24407__i < G__24407__a.length) {G__24407__a[G__24407__i] = arguments[G__24407__i + 0]; ++G__24407__i;}
  args = new cljs.core.IndexedSeq(G__24407__a,0,null);
} 
return G__24406__delegate.call(this,args);};
G__24406.cljs$lang$maxFixedArity = 0;
G__24406.cljs$lang$applyTo = (function (arglist__24408){
var args = cljs.core.seq(arglist__24408);
return G__24406__delegate(args);
});
G__24406.cljs$core$IFn$_invoke$arity$variadic = G__24406__delegate;
return G__24406;
})()
:host)], null));
}
});
