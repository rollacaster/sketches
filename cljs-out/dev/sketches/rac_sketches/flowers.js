// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.rac_sketches.flowers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.rac_sketches.flowers.setup = (function sketches$rac_sketches$flowers$setup(){
quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.frame_rate((2));

return (1);
});
sketches.rac_sketches.flowers.constrain_petal_counts = (function sketches$rac_sketches$flowers$constrain_petal_counts(petal_count){
if((petal_count < (20))){
return petal_count;
} else {
return (0);
}
});
sketches.rac_sketches.flowers.update_state = (function sketches$rac_sketches$flowers$update_state(petal_count){
return sketches.rac_sketches.flowers.constrain_petal_counts((petal_count + (1)));
});
sketches.rac_sketches.flowers.draw = (function sketches$rac_sketches$flowers$draw(petal_count){
quil.core.clear();

quil.core.translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(255)),(100),(255));

var seq__24176_24184 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.TWO_PI,(quil.core.TWO_PI / petal_count)));
var chunk__24177_24185 = null;
var count__24178_24186 = (0);
var i__24179_24187 = (0);
while(true){
if((i__24179_24187 < count__24178_24186)){
var angle_24188 = chunk__24177_24185.cljs$core$IIndexed$_nth$arity$2(null,i__24179_24187);
var tr__14580__auto___24189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle_24188], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto___24189);

quil.core.bezier.cljs$core$IFn$_invoke$arity$8((0),(0),(-50),(-100),(50),(-100),(0),(0));
}finally {quil.core.pop_matrix();
}

var G__24190 = seq__24176_24184;
var G__24191 = chunk__24177_24185;
var G__24192 = count__24178_24186;
var G__24193 = (i__24179_24187 + (1));
seq__24176_24184 = G__24190;
chunk__24177_24185 = G__24191;
count__24178_24186 = G__24192;
i__24179_24187 = G__24193;
continue;
} else {
var temp__5735__auto___24194 = cljs.core.seq(seq__24176_24184);
if(temp__5735__auto___24194){
var seq__24176_24195__$1 = temp__5735__auto___24194;
if(cljs.core.chunked_seq_QMARK_(seq__24176_24195__$1)){
var c__4351__auto___24196 = cljs.core.chunk_first(seq__24176_24195__$1);
var G__24197 = cljs.core.chunk_rest(seq__24176_24195__$1);
var G__24198 = c__4351__auto___24196;
var G__24199 = cljs.core.count(c__4351__auto___24196);
var G__24200 = (0);
seq__24176_24184 = G__24197;
chunk__24177_24185 = G__24198;
count__24178_24186 = G__24199;
i__24179_24187 = G__24200;
continue;
} else {
var angle_24201 = cljs.core.first(seq__24176_24195__$1);
var tr__14580__auto___24202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle_24201], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto___24202);

quil.core.bezier.cljs$core$IFn$_invoke$arity$8((0),(0),(-50),(-100),(50),(-100),(0),(0));
}finally {quil.core.pop_matrix();
}

var G__24203 = cljs.core.next(seq__24176_24195__$1);
var G__24204 = null;
var G__24205 = (0);
var G__24206 = (0);
seq__24176_24184 = G__24203;
chunk__24177_24185 = G__24204;
count__24178_24186 = G__24205;
i__24179_24187 = G__24206;
continue;
}
} else {
}
}
break;
}

quil.core.fill.cljs$core$IFn$_invoke$arity$3(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(255)),(100),(255));

var seq__24180_24207 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),quil.core.TWO_PI,(quil.core.TWO_PI / petal_count)));
var chunk__24181_24208 = null;
var count__24182_24209 = (0);
var i__24183_24210 = (0);
while(true){
if((i__24183_24210 < count__24182_24209)){
var angle_24211 = chunk__24181_24208.cljs$core$IIndexed$_nth$arity$2(null,i__24183_24210);
var tr__14580__auto___24212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle_24211], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto___24212);

quil.core.bezier.cljs$core$IFn$_invoke$arity$8((0),(0),(-25),(-50),(25),(-50),(0),(0));
}finally {quil.core.pop_matrix();
}

var G__24213 = seq__24180_24207;
var G__24214 = chunk__24181_24208;
var G__24215 = count__24182_24209;
var G__24216 = (i__24183_24210 + (1));
seq__24180_24207 = G__24213;
chunk__24181_24208 = G__24214;
count__24182_24209 = G__24215;
i__24183_24210 = G__24216;
continue;
} else {
var temp__5735__auto___24217 = cljs.core.seq(seq__24180_24207);
if(temp__5735__auto___24217){
var seq__24180_24218__$1 = temp__5735__auto___24217;
if(cljs.core.chunked_seq_QMARK_(seq__24180_24218__$1)){
var c__4351__auto___24219 = cljs.core.chunk_first(seq__24180_24218__$1);
var G__24220 = cljs.core.chunk_rest(seq__24180_24218__$1);
var G__24221 = c__4351__auto___24219;
var G__24222 = cljs.core.count(c__4351__auto___24219);
var G__24223 = (0);
seq__24180_24207 = G__24220;
chunk__24181_24208 = G__24221;
count__24182_24209 = G__24222;
i__24183_24210 = G__24223;
continue;
} else {
var angle_24224 = cljs.core.first(seq__24180_24218__$1);
var tr__14580__auto___24225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle_24224], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__14580__auto___24225);

quil.core.bezier.cljs$core$IFn$_invoke$arity$8((0),(0),(-25),(-50),(25),(-50),(0),(0));
}finally {quil.core.pop_matrix();
}

var G__24226 = cljs.core.next(seq__24180_24218__$1);
var G__24227 = null;
var G__24228 = (0);
var G__24229 = (0);
seq__24180_24207 = G__24226;
chunk__24181_24208 = G__24227;
count__24182_24209 = G__24228;
i__24183_24210 = G__24229;
continue;
}
} else {
}
}
break;
}

quil.core.fill.cljs$core$IFn$_invoke$arity$3((200),(100),(100));

return quil.core.ellipse((0),(0),(20),(20));
});
sketches.rac_sketches.flowers.run = (function sketches$rac_sketches$flowers$run(host){
sketches.rac_sketches.flowers.flowers = (function sketches$rac_sketches$flowers$run_$_flowers(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24230__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24231__i = 0, G__24231__a = new Array(arguments.length -  0);
while (G__24231__i < G__24231__a.length) {G__24231__a[G__24231__i] = arguments[G__24231__i + 0]; ++G__24231__i;}
  args = new cljs.core.IndexedSeq(G__24231__a,0,null);
} 
return G__24230__delegate.call(this,args);};
G__24230.cljs$lang$maxFixedArity = 0;
G__24230.cljs$lang$applyTo = (function (arglist__24232){
var args = cljs.core.seq(arglist__24232);
return G__24230__delegate(args);
});
G__24230.cljs$core$IFn$_invoke$arity$variadic = G__24230__delegate;
return G__24230;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.rac_sketches.flowers.update_state))?(function() { 
var G__24233__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.flowers.update_state,args);
};
var G__24233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24234__i = 0, G__24234__a = new Array(arguments.length -  0);
while (G__24234__i < G__24234__a.length) {G__24234__a[G__24234__i] = arguments[G__24234__i + 0]; ++G__24234__i;}
  args = new cljs.core.IndexedSeq(G__24234__a,0,null);
} 
return G__24233__delegate.call(this,args);};
G__24233.cljs$lang$maxFixedArity = 0;
G__24233.cljs$lang$applyTo = (function (arglist__24235){
var args = cljs.core.seq(arglist__24235);
return G__24233__delegate(args);
});
G__24233.cljs$core$IFn$_invoke$arity$variadic = G__24233__delegate;
return G__24233;
})()
:sketches.rac_sketches.flowers.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.rac_sketches.flowers.setup))?(function() { 
var G__24236__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.flowers.setup,args);
};
var G__24236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24237__i = 0, G__24237__a = new Array(arguments.length -  0);
while (G__24237__i < G__24237__a.length) {G__24237__a[G__24237__i] = arguments[G__24237__i + 0]; ++G__24237__i;}
  args = new cljs.core.IndexedSeq(G__24237__a,0,null);
} 
return G__24236__delegate.call(this,args);};
G__24236.cljs$lang$maxFixedArity = 0;
G__24236.cljs$lang$applyTo = (function (arglist__24238){
var args = cljs.core.seq(arglist__24238);
return G__24236__delegate(args);
});
G__24236.cljs$core$IFn$_invoke$arity$variadic = G__24236__delegate;
return G__24236;
})()
:sketches.rac_sketches.flowers.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.rac_sketches.flowers.draw))?(function() { 
var G__24239__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.rac_sketches.flowers.draw,args);
};
var G__24239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24240__i = 0, G__24240__a = new Array(arguments.length -  0);
while (G__24240__i < G__24240__a.length) {G__24240__a[G__24240__i] = arguments[G__24240__i + 0]; ++G__24240__i;}
  args = new cljs.core.IndexedSeq(G__24240__a,0,null);
} 
return G__24239__delegate.call(this,args);};
G__24239.cljs$lang$maxFixedArity = 0;
G__24239.cljs$lang$applyTo = (function (arglist__24241){
var args = cljs.core.seq(arglist__24241);
return G__24239__delegate(args);
});
G__24239.cljs$core$IFn$_invoke$arity$variadic = G__24239__delegate;
return G__24239;
})()
:sketches.rac_sketches.flowers.draw)], 0));
});
goog.exportSymbol('sketches.rac_sketches.flowers.flowers', sketches.rac_sketches.flowers.flowers);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.rac_sketches.flowers.flowers,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__24242__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__24242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24243__i = 0, G__24243__a = new Array(arguments.length -  0);
while (G__24243__i < G__24243__a.length) {G__24243__a[G__24243__i] = arguments[G__24243__i + 0]; ++G__24243__i;}
  args = new cljs.core.IndexedSeq(G__24243__a,0,null);
} 
return G__24242__delegate.call(this,args);};
G__24242.cljs$lang$maxFixedArity = 0;
G__24242.cljs$lang$applyTo = (function (arglist__24244){
var args = cljs.core.seq(arglist__24244);
return G__24242__delegate(args);
});
G__24242.cljs$core$IFn$_invoke$arity$variadic = G__24242__delegate;
return G__24242;
})()
:host)], null));
}
});
