// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.cellular_automata.random_cellular_automaton');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup_cells = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$setup_cells(){
var w = (5);
var cell_count = (quil.core.width() / w);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (w,cell_count){
return (function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,quil.core.ceil((cell_count / (2))))){
return (1);
} else {
return (0);
}
});})(w,cell_count))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cell_count));
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$setup(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cells,sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup_cells(),cljs.core.cst$kw$ruleset,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(1),(1),(0),(1),(0)], null),cljs.core.cst$kw$generation,(0)], null);
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.rules = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$rules(ruleset,a,b,c){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ruleset,quil.core.unbinary([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')));
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.reset_state = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$reset_state(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$generation,(0)),cljs.core.cst$kw$cells,sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup_cells()),cljs.core.cst$kw$ruleset,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return quil.core.round(quil.core.random.cljs$core$IFn$_invoke$arity$1((1)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)))));
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_automata = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$update_automata(p__20996){
var map__20997 = p__20996;
var map__20997__$1 = ((((!((map__20997 == null)))?(((((map__20997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20997):map__20997);
var state = map__20997__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.cst$kw$cells);
var ruleset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.cst$kw$ruleset);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cells,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__20997,map__20997__$1,state,cells,ruleset){
return (function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0))){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(cljs.core.count(cells) - (1)))){
return (0);
} else {
return sketches.nature_of_code.cellular_automata.random_cellular_automaton.rules(ruleset,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,(idx - (1))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,idx),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,(idx + (1))));

}
}
});})(map__20997,map__20997__$1,state,cells,ruleset))
,cells)),cljs.core.cst$kw$generation,cljs.core.inc);
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_state = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$update_state(p__20999){
var map__21000 = p__20999;
var map__21000__$1 = ((((!((map__21000 == null)))?(((((map__21000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21000):map__21000);
var state = map__21000__$1;
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21000__$1,cljs.core.cst$kw$generation);
if((generation > (quil.core.height() / (5)))){
return sketches.nature_of_code.cellular_automata.random_cellular_automaton.reset_state(state);
} else {
return sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_automata(state);
}
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.draw = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$draw(p__21002){
var map__21003 = p__21002;
var map__21003__$1 = ((((!((map__21003 == null)))?(((((map__21003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21003):map__21003);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003__$1,cljs.core.cst$kw$cells);
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003__$1,cljs.core.cst$kw$generation);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__21003,map__21003__$1,cells,generation){
return (function (idx,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,(1))){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));
}

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((idx * (5)),((5) * generation),(5),(5));
});})(map__21003,map__21003__$1,cells,generation))
,cells));
});
sketches.nature_of_code.cellular_automata.random_cellular_automaton.run = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$run(host){
sketches.nature_of_code.cellular_automata.random_cellular_automaton.random_ca = (function sketches$nature_of_code$cellular_automata$random_cellular_automaton$run_$_random_ca(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21005__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21006__i = 0, G__21006__a = new Array(arguments.length -  0);
while (G__21006__i < G__21006__a.length) {G__21006__a[G__21006__i] = arguments[G__21006__i + 0]; ++G__21006__i;}
  args = new cljs.core.IndexedSeq(G__21006__a,0,null);
} 
return G__21005__delegate.call(this,args);};
G__21005.cljs$lang$maxFixedArity = 0;
G__21005.cljs$lang$applyTo = (function (arglist__21007){
var args = cljs.core.seq(arglist__21007);
return G__21005__delegate(args);
});
G__21005.cljs$core$IFn$_invoke$arity$variadic = G__21005__delegate;
return G__21005;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_state))?(function() { 
var G__21008__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_state,args);
};
var G__21008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21009__i = 0, G__21009__a = new Array(arguments.length -  0);
while (G__21009__i < G__21009__a.length) {G__21009__a[G__21009__i] = arguments[G__21009__i + 0]; ++G__21009__i;}
  args = new cljs.core.IndexedSeq(G__21009__a,0,null);
} 
return G__21008__delegate.call(this,args);};
G__21008.cljs$lang$maxFixedArity = 0;
G__21008.cljs$lang$applyTo = (function (arglist__21010){
var args = cljs.core.seq(arglist__21010);
return G__21008__delegate(args);
});
G__21008.cljs$core$IFn$_invoke$arity$variadic = G__21008__delegate;
return G__21008;
})()
:sketches.nature_of_code.cellular_automata.random_cellular_automaton.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup))?(function() { 
var G__21011__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup,args);
};
var G__21011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21012__i = 0, G__21012__a = new Array(arguments.length -  0);
while (G__21012__i < G__21012__a.length) {G__21012__a[G__21012__i] = arguments[G__21012__i + 0]; ++G__21012__i;}
  args = new cljs.core.IndexedSeq(G__21012__a,0,null);
} 
return G__21011__delegate.call(this,args);};
G__21011.cljs$lang$maxFixedArity = 0;
G__21011.cljs$lang$applyTo = (function (arglist__21013){
var args = cljs.core.seq(arglist__21013);
return G__21011__delegate(args);
});
G__21011.cljs$core$IFn$_invoke$arity$variadic = G__21011__delegate;
return G__21011;
})()
:sketches.nature_of_code.cellular_automata.random_cellular_automaton.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.random_cellular_automaton.draw))?(function() { 
var G__21014__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.random_cellular_automaton.draw,args);
};
var G__21014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21015__i = 0, G__21015__a = new Array(arguments.length -  0);
while (G__21015__i < G__21015__a.length) {G__21015__a[G__21015__i] = arguments[G__21015__i + 0]; ++G__21015__i;}
  args = new cljs.core.IndexedSeq(G__21015__a,0,null);
} 
return G__21014__delegate.call(this,args);};
G__21014.cljs$lang$maxFixedArity = 0;
G__21014.cljs$lang$applyTo = (function (arglist__21016){
var args = cljs.core.seq(arglist__21016);
return G__21014__delegate(args);
});
G__21014.cljs$core$IFn$_invoke$arity$variadic = G__21014__delegate;
return G__21014;
})()
:sketches.nature_of_code.cellular_automata.random_cellular_automaton.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.cellular_automata.random_cellular_automaton.random_ca', sketches.nature_of_code.cellular_automata.random_cellular_automaton.random_ca);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.cellular_automata.random_cellular_automaton.random_ca,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__21017__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__21017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21018__i = 0, G__21018__a = new Array(arguments.length -  0);
while (G__21018__i < G__21018__a.length) {G__21018__a[G__21018__i] = arguments[G__21018__i + 0]; ++G__21018__i;}
  args = new cljs.core.IndexedSeq(G__21018__a,0,null);
} 
return G__21017__delegate.call(this,args);};
G__21017.cljs$lang$maxFixedArity = 0;
G__21017.cljs$lang$applyTo = (function (arglist__21019){
var args = cljs.core.seq(arglist__21019);
return G__21017__delegate(args);
});
G__21017.cljs$core$IFn$_invoke$arity$variadic = G__21017__delegate;
return G__21017;
})()
:host)], null));
}
});
