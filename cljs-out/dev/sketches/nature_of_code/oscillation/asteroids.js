// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.oscillation.asteroids');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.mover');
goog.require('sketches.vector');
sketches.nature_of_code.oscillation.asteroids.setup = (function sketches$nature_of_code$oscillation$asteroids$setup(){
return sketches.mover.create_mover((50),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));
});
sketches.nature_of_code.oscillation.asteroids.draw = (function sketches$nature_of_code$oscillation$asteroids$draw(spaceship){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((126));

quil.core.stroke_weight((2));

var map__24038 = spaceship;
var map__24038__$1 = ((((!((map__24038 == null)))?(((((map__24038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24038):map__24038);
var vec__24039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24038__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24039,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24039,(1),null);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24038__$1,cljs.core.cst$kw$mass);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24038__$1,cljs.core.cst$kw$angle);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(angle);

quil.core.triangle((mass / (2)),(0),(- (mass / (2))),(- (mass / (2))),(- (mass / (2))),(mass / (2)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(((- (mass / (2))) - (5)),(5),(5),(5));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(((- (mass / (2))) - (5)),(-5),(5),(5));

return quil.core.pop_matrix();
});
sketches.nature_of_code.oscillation.asteroids.update_state = (function sketches$nature_of_code$oscillation$asteroids$update_state(p__24043){
var map__24044 = p__24043;
var map__24044__$1 = ((((!((map__24044 == null)))?(((((map__24044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24044):map__24044);
var spaceship = map__24044__$1;
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24044__$1,cljs.core.cst$kw$velocity);
return sketches.mover.compute_position(sketches.mover.move_through(sketches.mover.apply_force(spaceship,sketches.vector.mult(velocity,-0.2))));
});
sketches.nature_of_code.oscillation.asteroids.key_pressed = (function sketches$nature_of_code$oscillation$asteroids$key_pressed(p__24046,p__24047){
var map__24048 = p__24046;
var map__24048__$1 = ((((!((map__24048 == null)))?(((((map__24048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24048):map__24048);
var spaceship = map__24048__$1;
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24048__$1,cljs.core.cst$kw$angle);
var map__24049 = p__24047;
var map__24049__$1 = ((((!((map__24049 == null)))?(((((map__24049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24049):map__24049);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24049__$1,cljs.core.cst$kw$key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$a)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(spaceship,cljs.core.cst$kw$angle,cljs.core._PLUS_,0.2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$d)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(spaceship,cljs.core.cst$kw$angle,cljs.core._,0.2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$w)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spaceship,cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.cos(angle),quil.core.sin(angle)], null));
} else {
return spaceship;

}
}
}
});
sketches.nature_of_code.oscillation.asteroids.run = (function sketches$nature_of_code$oscillation$asteroids$run(host){
sketches.nature_of_code.oscillation.asteroids.asteroids = (function sketches$nature_of_code$oscillation$asteroids$run_$_asteroids(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24052__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24053__i = 0, G__24053__a = new Array(arguments.length -  0);
while (G__24053__i < G__24053__a.length) {G__24053__a[G__24053__i] = arguments[G__24053__i + 0]; ++G__24053__i;}
  args = new cljs.core.IndexedSeq(G__24053__a,0,null);
} 
return G__24052__delegate.call(this,args);};
G__24052.cljs$lang$maxFixedArity = 0;
G__24052.cljs$lang$applyTo = (function (arglist__24054){
var args = cljs.core.seq(arglist__24054);
return G__24052__delegate(args);
});
G__24052.cljs$core$IFn$_invoke$arity$variadic = G__24052__delegate;
return G__24052;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.asteroids.update_state))?(function() { 
var G__24055__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.asteroids.update_state,args);
};
var G__24055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24056__i = 0, G__24056__a = new Array(arguments.length -  0);
while (G__24056__i < G__24056__a.length) {G__24056__a[G__24056__i] = arguments[G__24056__i + 0]; ++G__24056__i;}
  args = new cljs.core.IndexedSeq(G__24056__a,0,null);
} 
return G__24055__delegate.call(this,args);};
G__24055.cljs$lang$maxFixedArity = 0;
G__24055.cljs$lang$applyTo = (function (arglist__24057){
var args = cljs.core.seq(arglist__24057);
return G__24055__delegate(args);
});
G__24055.cljs$core$IFn$_invoke$arity$variadic = G__24055__delegate;
return G__24055;
})()
:sketches.nature_of_code.oscillation.asteroids.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.asteroids.setup))?(function() { 
var G__24058__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.asteroids.setup,args);
};
var G__24058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24059__i = 0, G__24059__a = new Array(arguments.length -  0);
while (G__24059__i < G__24059__a.length) {G__24059__a[G__24059__i] = arguments[G__24059__i + 0]; ++G__24059__i;}
  args = new cljs.core.IndexedSeq(G__24059__a,0,null);
} 
return G__24058__delegate.call(this,args);};
G__24058.cljs$lang$maxFixedArity = 0;
G__24058.cljs$lang$applyTo = (function (arglist__24060){
var args = cljs.core.seq(arglist__24060);
return G__24058__delegate(args);
});
G__24058.cljs$core$IFn$_invoke$arity$variadic = G__24058__delegate;
return G__24058;
})()
:sketches.nature_of_code.oscillation.asteroids.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.asteroids.key_pressed))?(function() { 
var G__24061__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.asteroids.key_pressed,args);
};
var G__24061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24062__i = 0, G__24062__a = new Array(arguments.length -  0);
while (G__24062__i < G__24062__a.length) {G__24062__a[G__24062__i] = arguments[G__24062__i + 0]; ++G__24062__i;}
  args = new cljs.core.IndexedSeq(G__24062__a,0,null);
} 
return G__24061__delegate.call(this,args);};
G__24061.cljs$lang$maxFixedArity = 0;
G__24061.cljs$lang$applyTo = (function (arglist__24063){
var args = cljs.core.seq(arglist__24063);
return G__24061__delegate(args);
});
G__24061.cljs$core$IFn$_invoke$arity$variadic = G__24061__delegate;
return G__24061;
})()
:sketches.nature_of_code.oscillation.asteroids.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.oscillation.asteroids.draw))?(function() { 
var G__24064__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.oscillation.asteroids.draw,args);
};
var G__24064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24065__i = 0, G__24065__a = new Array(arguments.length -  0);
while (G__24065__i < G__24065__a.length) {G__24065__a[G__24065__i] = arguments[G__24065__i + 0]; ++G__24065__i;}
  args = new cljs.core.IndexedSeq(G__24065__a,0,null);
} 
return G__24064__delegate.call(this,args);};
G__24064.cljs$lang$maxFixedArity = 0;
G__24064.cljs$lang$applyTo = (function (arglist__24066){
var args = cljs.core.seq(arglist__24066);
return G__24064__delegate(args);
});
G__24064.cljs$core$IFn$_invoke$arity$variadic = G__24064__delegate;
return G__24064;
})()
:sketches.nature_of_code.oscillation.asteroids.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.oscillation.asteroids.asteroids', sketches.nature_of_code.oscillation.asteroids.asteroids);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.oscillation.asteroids.asteroids,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24067__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24068__i = 0, G__24068__a = new Array(arguments.length -  0);
while (G__24068__i < G__24068__a.length) {G__24068__a[G__24068__i] = arguments[G__24068__i + 0]; ++G__24068__i;}
  args = new cljs.core.IndexedSeq(G__24068__a,0,null);
} 
return G__24067__delegate.call(this,args);};
G__24067.cljs$lang$maxFixedArity = 0;
G__24067.cljs$lang$applyTo = (function (arglist__24069){
var args = cljs.core.seq(arglist__24069);
return G__24067__delegate(args);
});
G__24067.cljs$core$IFn$_invoke$arity$variadic = G__24067__delegate;
return G__24067;
})()
:host)], null));
}
});
