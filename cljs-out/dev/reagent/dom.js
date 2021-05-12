// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1(container) : reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container));
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13589 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var G__13590 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__13591 = container;
var G__13592 = ((function (G__13590,G__13591,_STAR_always_update_STAR_13589){
return (function (){
var _STAR_always_update_STAR_13593 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13593;
}});})(G__13590,G__13591,_STAR_always_update_STAR_13589))
;
return (reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3 ? reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3(G__13590,G__13591,G__13592) : reagent.dom.global$module$react_dom.render.call(null,G__13590,G__13591,G__13592));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13589;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__13595 = arguments.length;
switch (G__13595) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1(this$) : reagent.dom.global$module$react_dom.findDOMNode.call(null,this$));
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__13597_13601 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__13598_13602 = null;
var count__13599_13603 = (0);
var i__13600_13604 = (0);
while(true){
if((i__13600_13604 < count__13599_13603)){
var v_13605 = chunk__13598_13602.cljs$core$IIndexed$_nth$arity$2(null,i__13600_13604);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13605);


var G__13606 = seq__13597_13601;
var G__13607 = chunk__13598_13602;
var G__13608 = count__13599_13603;
var G__13609 = (i__13600_13604 + (1));
seq__13597_13601 = G__13606;
chunk__13598_13602 = G__13607;
count__13599_13603 = G__13608;
i__13600_13604 = G__13609;
continue;
} else {
var temp__5735__auto___13610 = cljs.core.seq(seq__13597_13601);
if(temp__5735__auto___13610){
var seq__13597_13611__$1 = temp__5735__auto___13610;
if(cljs.core.chunked_seq_QMARK_(seq__13597_13611__$1)){
var c__4351__auto___13612 = cljs.core.chunk_first(seq__13597_13611__$1);
var G__13613 = cljs.core.chunk_rest(seq__13597_13611__$1);
var G__13614 = c__4351__auto___13612;
var G__13615 = cljs.core.count(c__4351__auto___13612);
var G__13616 = (0);
seq__13597_13601 = G__13613;
chunk__13598_13602 = G__13614;
count__13599_13603 = G__13615;
i__13600_13604 = G__13616;
continue;
} else {
var v_13617 = cljs.core.first(seq__13597_13611__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13617);


var G__13618 = cljs.core.next(seq__13597_13611__$1);
var G__13619 = null;
var G__13620 = (0);
var G__13621 = (0);
seq__13597_13601 = G__13618;
chunk__13598_13602 = G__13619;
count__13599_13603 = G__13620;
i__13600_13604 = G__13621;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
