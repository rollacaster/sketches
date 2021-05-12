// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Internal state map used to initiate all sketches.
 */
quil.util.initial_internal_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame_DASH_rate,(60),cljs.core.cst$kw$looping_QMARK_,true], null);
/**
 * Returns the val associated with `key` in `mappings` or `key` directly if it
 *   is one of the vals in `mappings`. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mappings,key))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),cljs.core.vals(mappings)))){
return key;
} else {
throw (new Error(["Expecting a keyword, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Expected one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map `m`. Assumes `m`'s keys are strings
 * and returns 0 if map is empty:
 * 
 * Examples:
 * ```
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 * ```
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__3949__auto__ = cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13644_SHARP_){
return p1__13644_SHARP_.length();
}),cljs.core.keys(m))));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string with `s` concatenated with `len` times `pad`.
 * May be called without starting string `s` in which case it defaults to the
 * empty string and also without `pad` in which case it defaults to a single
 * space.
 * 
 * Examples:
 * ```
 * (gen-padding "asdf" 5 "b") ;=> "asdfbbbbb"
 * (gen-padding 3 "b")          ;=> "bbb"
 * (gen-padding 3)                ;=> "   "
 * ```
 * 
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var G__13646 = arguments.length;
switch (G__13646) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3("",len," ");
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3("",len,pad);
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
});

quil.util.gen_padding.cljs$lang$maxFixedArity = 3;

quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key(definitions);
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (longest_key){
return (function (p__13648){
var vec__13649 = p__13648;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1(diff);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,pad,"- ",v], 0));
});})(longest_key))
,definitions));
});
quil.util.clj_compilation_QMARK_ = (function quil$util$clj_compilation_QMARK_(){
return false;
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace(clojure.string.upper_case(cljs.core.name(const_keyword)),/-/,"_");
});
quil.util.prepare_quil_clj_constants = (function quil$util$prepare_quil_clj_constants(constants){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13652_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13652_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["PConstants/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.util.prepare_quil_name(p1__13652_SHARP_))].join(''))],null));
}),constants));
});
quil.util.prepare_quil_cljs_constants = (function quil$util$prepare_quil_cljs_constants(constants){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13653_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13653_SHARP_,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_aget,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_p5$prototype,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,quil.util.prepare_quil_name(p1__13653_SHARP_),null,(1),null))], 0))))],null));
}),constants));
});
quil.util.make_quil_constant_map = (function quil$util$make_quil_constant_map(target,const_map_name,const_map){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,const_map_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$clj))?quil.util.prepare_quil_clj_constants(const_map):quil.util.prepare_quil_cljs_constants(const_map)),null,(1),null))], 0))));
});
var ret__4565__auto___13659 = (function (){
quil.util.generate_quil_constants = (function quil$util$generate_quil_constants(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13660 = arguments.length;
var i__4532__auto___13661 = (0);
while(true){
if((i__4532__auto___13661 < len__4531__auto___13660)){
args__4534__auto__.push((arguments[i__4532__auto___13661]));

var G__13662 = (i__4532__auto___13661 + (1));
i__4532__auto___13661 = G__13662;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,target,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13654_SHARP_){
return quil.util.make_quil_constant_map(target,cljs.core.first(p1__13654_SHARP_),cljs.core.second(p1__13654_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),opts)))));
});

quil.util.generate_quil_constants.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.util.generate_quil_constants.cljs$lang$applyTo = (function (seq13655){
var G__13656 = cljs.core.first(seq13655);
var seq13655__$1 = cljs.core.next(seq13655);
var G__13657 = cljs.core.first(seq13655__$1);
var seq13655__$2 = cljs.core.next(seq13655__$1);
var G__13658 = cljs.core.first(seq13655__$2);
var seq13655__$3 = cljs.core.next(seq13655__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13656,G__13657,G__13658,seq13655__$3);
});

return null;
})()
;
quil.util.generate_quil_constants.cljs$lang$macro = true;

/**
 * In clojure it does `unchecked-int` and does nothing in cljs.
 *   Needed to handle colors in hex form in clojure.
 */
quil.util.clj_unchecked_int = (function quil$util$clj_unchecked_int(v){
return v;
});
