// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$object_DASH_is_DASH_frozen,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$object_DASH_is_DASH_sealed,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15370 = arguments.length;
var i__4532__auto___15371 = (0);
while(true){
if((i__4532__auto___15371 < len__4531__auto___15370)){
args__4534__auto__.push((arguments[i__4532__auto___15371]));

var G__15372 = (i__4532__auto___15371 + (1));
i__4532__auto___15371 = G__15372;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq15368){
var G__15369 = cljs.core.first(seq15368);
var seq15368__$1 = cljs.core.next(seq15368);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15369,seq15368__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15380 = arguments.length;
var i__4532__auto___15381 = (0);
while(true){
if((i__4532__auto___15381 < len__4531__auto___15380)){
args__4534__auto__.push((arguments[i__4532__auto___15381]));

var G__15382 = (i__4532__auto___15381 + (1));
i__4532__auto___15381 = G__15382;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__15375){
var vec__15376 = p__15375;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15376,(0),null);
var G__15379 = (function (){var or__3949__auto__ = config;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__15379) : key.call(null,G__15379));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.get_config_key.cljs$lang$applyTo = (function (seq15373){
var G__15374 = cljs.core.first(seq15373);
var seq15373__$1 = cljs.core.next(seq15373);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15374,seq15373__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15389 = arguments.length;
var i__4532__auto___15390 = (0);
while(true){
if((i__4532__auto___15390 < len__4531__auto___15389)){
args__4534__auto__.push((arguments[i__4532__auto___15390]));

var G__15391 = (i__4532__auto___15390 + (1));
i__4532__auto___15390 = G__15391;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__15385){
var vec__15386 = p__15385;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__3949__auto__ = config;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq15383){
var G__15384 = cljs.core.first(seq15383);
var seq15383__$1 = cljs.core.next(seq15383);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15384,seq15383__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15397 = arguments.length;
var i__4532__auto___15398 = (0);
while(true){
if((i__4532__auto___15398 < len__4531__auto___15397)){
args__4534__auto__.push((arguments[i__4532__auto___15398]));

var G__15399 = (i__4532__auto___15398 + (1));
i__4532__auto___15398 = G__15399;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15393){
var vec__15394 = p__15393;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq15392){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15392));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15405 = arguments.length;
var i__4532__auto___15406 = (0);
while(true){
if((i__4532__auto___15406 < len__4531__auto___15405)){
args__4534__auto__.push((arguments[i__4532__auto___15406]));

var G__15407 = (i__4532__auto___15406 + (1));
i__4532__auto___15406 = G__15407;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15401){
var vec__15402 = p__15401;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15402,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq15400){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15400));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15413 = arguments.length;
var i__4532__auto___15414 = (0);
while(true){
if((i__4532__auto___15414 < len__4531__auto___15413)){
args__4534__auto__.push((arguments[i__4532__auto___15414]));

var G__15415 = (i__4532__auto___15414 + (1));
i__4532__auto___15414 = G__15415;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15409){
var vec__15410 = p__15409;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq15408){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15408));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15421 = arguments.length;
var i__4532__auto___15422 = (0);
while(true){
if((i__4532__auto___15422 < len__4531__auto___15421)){
args__4534__auto__.push((arguments[i__4532__auto___15422]));

var G__15423 = (i__4532__auto___15422 + (1));
i__4532__auto___15422 = G__15423;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__15417){
var vec__15418 = p__15417;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_child_factory.cljs$lang$applyTo = (function (seq15416){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15416));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15429 = arguments.length;
var i__4532__auto___15430 = (0);
while(true){
if((i__4532__auto___15430 < len__4531__auto___15429)){
args__4534__auto__.push((arguments[i__4532__auto___15430]));

var G__15431 = (i__4532__auto___15430 + (1));
i__4532__auto___15430 = G__15431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15425){
var vec__15426 = p__15425;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15426,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq15424){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15424));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15437 = arguments.length;
var i__4532__auto___15438 = (0);
while(true){
if((i__4532__auto___15438 < len__4531__auto___15437)){
args__4534__auto__.push((arguments[i__4532__auto___15438]));

var G__15439 = (i__4532__auto___15438 + (1));
i__4532__auto___15438 = G__15439;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15433){
var vec__15434 = p__15433;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15434,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq15432){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15432));
});

