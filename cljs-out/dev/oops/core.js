// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__17437 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__17437)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__17437)){
var G__17439 = (console["error"]);
var G__17440 = msg;
var G__17441 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__17438 = oops.state.get_console_reporter();
return (fexpr__17438.cljs$core$IFn$_invoke$arity$3 ? fexpr__17438.cljs$core$IFn$_invoke$arity$3(G__17439,G__17440,G__17441) : fexpr__17438.call(null,G__17439,G__17440,G__17441));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__17437)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17437)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__17442 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__17442)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__17442)){
var G__17444 = (console["warn"]);
var G__17445 = msg;
var G__17446 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__17443 = oops.state.get_console_reporter();
return (fexpr__17443.cljs$core$IFn$_invoke$arity$3 ? fexpr__17443.cljs$core$IFn$_invoke$arity$3(G__17444,G__17445,G__17446) : fexpr__17443.call(null,G__17444,G__17445,G__17446));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__17442)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17442)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17453 = arguments.length;
var i__4532__auto___17454 = (0);
while(true){
if((i__4532__auto___17454 < len__4531__auto___17453)){
args__4534__auto__.push((arguments[i__4532__auto___17454]));

var G__17455 = (i__4532__auto___17454 + (1));
i__4532__auto___17454 = G__17455;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__17449){
var vec__17450 = p__17449;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17450,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq17447){
var G__17448 = cljs.core.first(seq17447);
var seq17447__$1 = cljs.core.next(seq17447);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17448,seq17447__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__3938__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_17456 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_17456);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_17457 = temp__5737__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_17457,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_17457,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_17459 = oops.config.get_child_factory();
var child_factory_17459__$1 = (function (){var G__17460 = child_factory_17459;
var G__17460__$1 = (((G__17460 instanceof cljs.core.Keyword))?G__17460.fqn:null);
switch (G__17460__$1) {
case "js-obj":
return ((function (G__17460,G__17460__$1,child_factory_17459){
return (function (){
return {};
});
;})(G__17460,G__17460__$1,child_factory_17459))

break;
case "js-array":
return ((function (G__17460,G__17460__$1,child_factory_17459){
return (function (){
return [];
});
;})(G__17460,G__17460__$1,child_factory_17459))

break;
default:
return child_factory_17459;

}
})();

var child_obj_17458 = (child_factory_17459__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_17459__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_17459__$1.call(null,obj,key));
(obj[key] = child_obj_17458);

return child_obj_17458;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_17464 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_17464);

return selector_path_17464;
} else {
var selector_path_17465 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_17465);

return selector_path_17465;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_17466 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_17466);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_17468 = (function (){var path_17467 = oops.core.build_path_dynamically(selector);

return path_17467;
})();
var len_17469 = path_17468.length;
var i_17470 = (0);
var obj_17471 = obj;
while(true){
if((i_17470 < len_17469)){
var mode_17472 = (path_17468[i_17470]);
var key_17473 = (path_17468[(i_17470 + (1))]);
var next_obj_17474 = oops.core.get_key_dynamically(obj_17471,key_17473,mode_17472);
var G__17475 = mode_17472;
switch (G__17475) {
case (0):
var G__17477 = (i_17470 + (2));
var G__17478 = next_obj_17474;
i_17470 = G__17477;
obj_17471 = G__17478;
continue;

break;
case (1):
if(!((next_obj_17474 == null))){
var G__17479 = (i_17470 + (2));
var G__17480 = next_obj_17474;
i_17470 = G__17479;
obj_17471 = G__17480;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_17474 == null))){
var G__17481 = (i_17470 + (2));
var G__17482 = next_obj_17474;
i_17470 = G__17481;
obj_17471 = G__17482;
continue;
} else {
var G__17483 = (i_17470 + (2));
var G__17484 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17471,key_17473) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17471,key_17473));
i_17470 = G__17483;
obj_17471 = G__17484;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17475)].join('')));

}
} else {
return obj_17471;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_17486 = (function (){var path_17485 = oops.core.build_path_dynamically(selector);

return path_17485;
})();
var len_17487 = path_17486.length;
if((len_17487 < (4))){
return [obj,(function (){var path_17489 = path_17486;
var len_17490 = path_17489.length;
var i_17491 = (0);
var obj_17492 = obj;
while(true){
if((i_17491 < len_17490)){
var mode_17493 = (path_17489[i_17491]);
var key_17494 = (path_17489[(i_17491 + (1))]);
var next_obj_17495 = oops.core.get_key_dynamically(obj_17492,key_17494,mode_17493);
var G__17510 = mode_17493;
switch (G__17510) {
case (0):
var G__17514 = (i_17491 + (2));
var G__17515 = next_obj_17495;
i_17491 = G__17514;
obj_17492 = G__17515;
continue;

break;
case (1):
if(!((next_obj_17495 == null))){
var G__17516 = (i_17491 + (2));
var G__17517 = next_obj_17495;
i_17491 = G__17516;
obj_17492 = G__17517;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_17495 == null))){
var G__17518 = (i_17491 + (2));
var G__17519 = next_obj_17495;
i_17491 = G__17518;
obj_17492 = G__17519;
continue;
} else {
var G__17520 = (i_17491 + (2));
var G__17521 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17492,key_17494) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17492,key_17494));
i_17491 = G__17520;
obj_17492 = G__17521;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17510)].join('')));

}
} else {
return obj_17492;
}
break;
}
})()];
} else {
var target_obj_17488 = (function (){var path_17496 = path_17486.slice((0),(len_17487 - (2)));
var len_17497 = path_17496.length;
var i_17498 = (0);
var obj_17499 = obj;
while(true){
if((i_17498 < len_17497)){
var mode_17500 = (path_17496[i_17498]);
var key_17501 = (path_17496[(i_17498 + (1))]);
var next_obj_17502 = oops.core.get_key_dynamically(obj_17499,key_17501,mode_17500);
var G__17511 = mode_17500;
switch (G__17511) {
case (0):
var G__17523 = (i_17498 + (2));
var G__17524 = next_obj_17502;
i_17498 = G__17523;
obj_17499 = G__17524;
continue;

break;
case (1):
if(!((next_obj_17502 == null))){
var G__17525 = (i_17498 + (2));
var G__17526 = next_obj_17502;
i_17498 = G__17525;
obj_17499 = G__17526;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_17502 == null))){
var G__17527 = (i_17498 + (2));
var G__17528 = next_obj_17502;
i_17498 = G__17527;
obj_17499 = G__17528;
continue;
} else {
var G__17529 = (i_17498 + (2));
var G__17530 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17499,key_17501) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17499,key_17501));
i_17498 = G__17529;
obj_17499 = G__17530;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17511)].join('')));

}
} else {
return obj_17499;
}
break;
}
})();
return [target_obj_17488,(function (){var path_17503 = [(path_17486[(len_17487 - (2))]),(path_17486[(len_17487 - (1))])];
var len_17504 = path_17503.length;
var i_17505 = (0);
var obj_17506 = target_obj_17488;
while(true){
if((i_17505 < len_17504)){
var mode_17507 = (path_17503[i_17505]);
var key_17508 = (path_17503[(i_17505 + (1))]);
var next_obj_17509 = oops.core.get_key_dynamically(obj_17506,key_17508,mode_17507);
var G__17512 = mode_17507;
switch (G__17512) {
case (0):
var G__17532 = (i_17505 + (2));
var G__17533 = next_obj_17509;
i_17505 = G__17532;
obj_17506 = G__17533;
continue;

break;
case (1):
if(!((next_obj_17509 == null))){
var G__17534 = (i_17505 + (2));
var G__17535 = next_obj_17509;
i_17505 = G__17534;
obj_17506 = G__17535;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_17509 == null))){
var G__17536 = (i_17505 + (2));
var G__17537 = next_obj_17509;
i_17505 = G__17536;
obj_17506 = G__17537;
continue;
} else {
var G__17538 = (i_17505 + (2));
var G__17539 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17506,key_17508) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17506,key_17508));
i_17505 = G__17538;
obj_17506 = G__17539;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17512)].join('')));

}
} else {
return obj_17506;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_17541 = (function (){var path_17540 = oops.core.build_path_dynamically(selector);

return path_17540;
})();
var len_17544 = path_17541.length;
var parent_obj_path_17545 = path_17541.slice((0),(len_17544 - (2)));
var key_17542 = (path_17541[(len_17544 - (1))]);
var mode_17543 = (path_17541[(len_17544 - (2))]);
var parent_obj_17546 = (function (){var path_17547 = parent_obj_path_17545;
var len_17548 = path_17547.length;
var i_17549 = (0);
var obj_17550 = obj;
while(true){
if((i_17549 < len_17548)){
var mode_17551 = (path_17547[i_17549]);
var key_17552 = (path_17547[(i_17549 + (1))]);
var next_obj_17553 = oops.core.get_key_dynamically(obj_17550,key_17552,mode_17551);
var G__17554 = mode_17551;
switch (G__17554) {
case (0):
var G__17556 = (i_17549 + (2));
var G__17557 = next_obj_17553;
i_17549 = G__17556;
obj_17550 = G__17557;
continue;

break;
case (1):
if(!((next_obj_17553 == null))){
var G__17558 = (i_17549 + (2));
var G__17559 = next_obj_17553;
i_17549 = G__17558;
obj_17550 = G__17559;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_17553 == null))){
var G__17560 = (i_17549 + (2));
var G__17561 = next_obj_17553;
i_17549 = G__17560;
obj_17550 = G__17561;
continue;
} else {
var G__17562 = (i_17549 + (2));
var G__17563 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17550,key_17552) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17550,key_17552));
i_17549 = G__17562;
obj_17550 = G__17563;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17554)].join('')));

}
} else {
return obj_17550;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_17546,key_17542,val,mode_17543);
});
