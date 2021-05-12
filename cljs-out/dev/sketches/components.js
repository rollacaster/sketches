// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sketches.icons');
goog.require('quil.core');
goog.require('reagent.core');
sketches.components.section = (function sketches$components$section(title,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mb4$tc$tl_DASH_ns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$link$white,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null)], null);
});
sketches.components.cards_container = (function sketches$components$cards_container(children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_wrap$justify_DASH_center$justify_DASH_start_DASH_ns,children], null);
});
sketches.components.card = (function sketches$components$card(title,sub_title,children){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_white$br2$flex$flex_DASH_column$justify_DASH_between$items_DASH_center$f3$black$mb3$mr3_DASH_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$justify_DASH_center$items_DASH_center,children], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mt3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$ma0,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mb3$f4,sub_title], null)], null);
});
sketches.components.stop_sketch = (function sketches$components$stop_sketch(id){
var _STAR_applet_STAR_20263 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id(id);

try{return quil.core.no_loop();
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_20263;
}});
sketches.components.sketch = (function sketches$components$sketch(title,run_sketch,run_immediately){
var is_started = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (is_started){
return (function (){
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.deref(is_started);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return run_immediately;
}
})())){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(((function (id,is_started){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$flex_DASH_column$items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w5$h5$mt4$mh4$mb3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex$h1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pointer$bn$bg_DASH_transparent,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (id,is_started){
return (function (){
sketches.components.stop_sketch(id);

return (run_sketch.cljs$core$IFn$_invoke$arity$1 ? run_sketch.cljs$core$IFn$_invoke$arity$1(id) : run_sketch.call(null,id));
});})(id,is_started))
], null),sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pointer$bn$bg_DASH_transparent,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (id,is_started){
return (function (){
sketches.components.stop_sketch(id);

return cljs.core.reset_BANG_(is_started,false);
});})(id,is_started))
], null),sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$0()], null)], null)], null);
});})(id,is_started))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (id,is_started){
return (function (){
return (run_sketch.cljs$core$IFn$_invoke$arity$1 ? run_sketch.cljs$core$IFn$_invoke$arity$1(id) : run_sketch.call(null,id));
});})(id,is_started))
], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w5$h5$ma4$flex$justify_DASH_center$items_DASH_center$bg_DASH_gray,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$bg_DASH_transparent$bn$white$pointer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (is_started){
return (function (){
return cljs.core.reset_BANG_(is_started,true);
});})(is_started))
,cljs.core.cst$kw$aria_DASH_label,["Run ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," Sketch"].join('')], null),sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$medium,"white")], null)], null)], null);
}
});
;})(is_started))
});
sketches.components.exercise_card = (function sketches$components$exercise_card(title,exercise_title,exercise_link,run_sketch,run_immediately){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.components.card,title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$link$bb,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,exercise_link,cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$rel,"noreferrer"], null),exercise_title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.components.sketch,title,run_sketch,run_immediately], null)], null);
});
});
