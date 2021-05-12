// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.nature_of_code.cellular_automata.game_of_life');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.nature_of_code.cellular_automata.game_of_life.setup_board = (function sketches$nature_of_code$cellular_automata$game_of_life$setup_board(){
var w = (5);
var columns = (quil.core.width() / w);
var rows = (quil.core.height() / w);
var iter__4324__auto__ = ((function (w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820(s__20821){
return (new cljs.core.LazySeq(null,((function (w,columns,rows){
return (function (){
var s__20821__$1 = s__20821;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20821__$1);
if(temp__5735__auto__){
var s__20821__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20821__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20821__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20823 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20822 = (0);
while(true){
if((i__20822 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20822);
cljs.core.chunk_append(b__20823,(function (){var iter__4324__auto__ = ((function (i__20822,x,c__4322__auto__,size__4323__auto__,b__20823,s__20821__$2,temp__5735__auto__,w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20824(s__20825){
return (new cljs.core.LazySeq(null,((function (i__20822,x,c__4322__auto__,size__4323__auto__,b__20823,s__20821__$2,temp__5735__auto__,w,columns,rows){
return (function (){
var s__20825__$1 = s__20825;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20825__$1);
if(temp__5735__auto____$1){
var s__20825__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20825__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20825__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20827 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20826 = (0);
while(true){
if((i__20826 < size__4323__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20826);
cljs.core.chunk_append(b__20827,cljs.core.rand_int((2)));

var G__20832 = (i__20826 + (1));
i__20826 = G__20832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20827),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20824(cljs.core.chunk_rest(s__20825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20827),null);
}
} else {
var y = cljs.core.first(s__20825__$2);
return cljs.core.cons(cljs.core.rand_int((2)),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20824(cljs.core.rest(s__20825__$2)));
}
} else {
return null;
}
break;
}
});})(i__20822,x,c__4322__auto__,size__4323__auto__,b__20823,s__20821__$2,temp__5735__auto__,w,columns,rows))
,null,null));
});})(i__20822,x,c__4322__auto__,size__4323__auto__,b__20823,s__20821__$2,temp__5735__auto__,w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
})());

var G__20833 = (i__20822 + (1));
i__20822 = G__20833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20823),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820(cljs.core.chunk_rest(s__20821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20823),null);
}
} else {
var x = cljs.core.first(s__20821__$2);
return cljs.core.cons((function (){var iter__4324__auto__ = ((function (x,s__20821__$2,temp__5735__auto__,w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20828(s__20829){
return (new cljs.core.LazySeq(null,((function (x,s__20821__$2,temp__5735__auto__,w,columns,rows){
return (function (){
var s__20829__$1 = s__20829;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20829__$1);
if(temp__5735__auto____$1){
var s__20829__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20829__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20829__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20831 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20830 = (0);
while(true){
if((i__20830 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20830);
cljs.core.chunk_append(b__20831,cljs.core.rand_int((2)));

var G__20834 = (i__20830 + (1));
i__20830 = G__20834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20831),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20828(cljs.core.chunk_rest(s__20829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20831),null);
}
} else {
var y = cljs.core.first(s__20829__$2);
return cljs.core.cons(cljs.core.rand_int((2)),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820_$_iter__20828(cljs.core.rest(s__20829__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__20821__$2,temp__5735__auto__,w,columns,rows))
,null,null));
});})(x,s__20821__$2,temp__5735__auto__,w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
})(),sketches$nature_of_code$cellular_automata$game_of_life$setup_board_$_iter__20820(cljs.core.rest(s__20821__$2)));
}
} else {
return null;
}
break;
}
});})(w,columns,rows))
,null,null));
});})(w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),columns));
});
sketches.nature_of_code.cellular_automata.game_of_life.setup = (function sketches$nature_of_code$cellular_automata$game_of_life$setup(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$board,sketches.nature_of_code.cellular_automata.game_of_life.setup_board()], null);
});
sketches.nature_of_code.cellular_automata.game_of_life.board = (function sketches$nature_of_code$cellular_automata$game_of_life$board(){
var w = (5);
var columns = ((50) / w);
var rows = ((50) / w);
var iter__4324__auto__ = ((function (w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835(s__20836){
return (new cljs.core.LazySeq(null,((function (w,columns,rows){
return (function (){
var s__20836__$1 = s__20836;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20836__$1);
if(temp__5735__auto__){
var s__20836__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20836__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20836__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20838 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20837 = (0);
while(true){
if((i__20837 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20837);
cljs.core.chunk_append(b__20838,(function (){var iter__4324__auto__ = ((function (i__20837,x,c__4322__auto__,size__4323__auto__,b__20838,s__20836__$2,temp__5735__auto__,w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20839(s__20840){
return (new cljs.core.LazySeq(null,((function (i__20837,x,c__4322__auto__,size__4323__auto__,b__20838,s__20836__$2,temp__5735__auto__,w,columns,rows){
return (function (){
var s__20840__$1 = s__20840;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20840__$1);
if(temp__5735__auto____$1){
var s__20840__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20840__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20840__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20842 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20841 = (0);
while(true){
if((i__20841 < size__4323__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20841);
cljs.core.chunk_append(b__20842,cljs.core.rand_int((2)));

var G__20847 = (i__20841 + (1));
i__20841 = G__20847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20842),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20839(cljs.core.chunk_rest(s__20840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20842),null);
}
} else {
var y = cljs.core.first(s__20840__$2);
return cljs.core.cons(cljs.core.rand_int((2)),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20839(cljs.core.rest(s__20840__$2)));
}
} else {
return null;
}
break;
}
});})(i__20837,x,c__4322__auto__,size__4323__auto__,b__20838,s__20836__$2,temp__5735__auto__,w,columns,rows))
,null,null));
});})(i__20837,x,c__4322__auto__,size__4323__auto__,b__20838,s__20836__$2,temp__5735__auto__,w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
})());

var G__20848 = (i__20837 + (1));
i__20837 = G__20848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20838),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835(cljs.core.chunk_rest(s__20836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20838),null);
}
} else {
var x = cljs.core.first(s__20836__$2);
return cljs.core.cons((function (){var iter__4324__auto__ = ((function (x,s__20836__$2,temp__5735__auto__,w,columns,rows){
return (function sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20843(s__20844){
return (new cljs.core.LazySeq(null,((function (x,s__20836__$2,temp__5735__auto__,w,columns,rows){
return (function (){
var s__20844__$1 = s__20844;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20844__$1);
if(temp__5735__auto____$1){
var s__20844__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20844__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20844__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20846 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20845 = (0);
while(true){
if((i__20845 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20845);
cljs.core.chunk_append(b__20846,cljs.core.rand_int((2)));

var G__20849 = (i__20845 + (1));
i__20845 = G__20849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20846),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20843(cljs.core.chunk_rest(s__20844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20846),null);
}
} else {
var y = cljs.core.first(s__20844__$2);
return cljs.core.cons(cljs.core.rand_int((2)),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835_$_iter__20843(cljs.core.rest(s__20844__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__20836__$2,temp__5735__auto__,w,columns,rows))
,null,null));
});})(x,s__20836__$2,temp__5735__auto__,w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
})(),sketches$nature_of_code$cellular_automata$game_of_life$board_$_iter__20835(cljs.core.rest(s__20836__$2)));
}
} else {
return null;
}
break;
}
});})(w,columns,rows))
,null,null));
});})(w,columns,rows))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),columns));
});
sketches.nature_of_code.cellular_automata.game_of_life.update_state = (function sketches$nature_of_code$cellular_automata$game_of_life$update_state(p__20850){
var map__20851 = p__20850;
var map__20851__$1 = ((((!((map__20851 == null)))?(((((map__20851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20851):map__20851);
var state = map__20851__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851__$1,cljs.core.cst$kw$board);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$board,(function (){var iter__4324__auto__ = ((function (map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853(s__20854){
return (new cljs.core.LazySeq(null,((function (map__20851,map__20851__$1,state,board){
return (function (){
var s__20854__$1 = s__20854;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20854__$1);
if(temp__5735__auto__){
var s__20854__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20854__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20854__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20856 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20855 = (0);
while(true){
if((i__20855 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20855);
cljs.core.chunk_append(b__20856,(function (){var iter__4324__auto__ = ((function (i__20855,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857(s__20858){
return (new cljs.core.LazySeq(null,((function (i__20855,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20858__$1 = s__20858;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20858__$1);
if(temp__5735__auto____$1){
var s__20858__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20858__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20858__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20860 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20859 = (0);
while(true){
if((i__20859 < size__4323__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20859);
cljs.core.chunk_append(b__20860,(function (){var neighbour_count = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4324__auto__ = ((function (i__20859,i__20855,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20861(s__20862){
return (new cljs.core.LazySeq(null,((function (i__20859,i__20855,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20862__$1 = s__20862;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__20862__$1);
if(temp__5735__auto____$2){
var xs__6292__auto__ = temp__5735__auto____$2;
var i = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__20862__$1,i__20859,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20861_$_iter__20863(s__20864){
return (new cljs.core.LazySeq(null,((function (s__20862__$1,i__20859,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20864__$1 = s__20864;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__20864__$1);
if(temp__5735__auto____$3){
var s__20864__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__20864__$2)){
var c__4322__auto____$2 = cljs.core.chunk_first(s__20864__$2);
var size__4323__auto____$2 = cljs.core.count(c__4322__auto____$2);
var b__20866 = cljs.core.chunk_buffer(size__4323__auto____$2);
if((function (){var i__20865 = (0);
while(true){
if((i__20865 < size__4323__auto____$2)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$2,i__20865);
cljs.core.chunk_append(b__20866,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)));

var G__20889 = (i__20865 + (1));
i__20865 = G__20889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20866),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20861_$_iter__20863(cljs.core.chunk_rest(s__20864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20866),null);
}
} else {
var j = cljs.core.first(s__20864__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20861_$_iter__20863(cljs.core.rest(s__20864__$2)));
}
} else {
return null;
}
break;
}
});})(s__20862__$1,i__20859,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(s__20862__$1,i__20859,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20861(cljs.core.rest(s__20862__$1)));
} else {
var G__20890 = cljs.core.rest(s__20862__$1);
s__20862__$1 = G__20890;
continue;
}
} else {
return null;
}
break;
}
});})(i__20859,i__20855,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(i__20859,i__20855,y,c__4322__auto____$1,size__4323__auto____$1,b__20860,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2)));
})()) - (1));
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x),y);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count < (2))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count > (3))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbour_count,(3))))){
return (1);
} else {
return current;

}
}
}
})());

var G__20891 = (i__20859 + (1));
i__20859 = G__20891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20860),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857(cljs.core.chunk_rest(s__20858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20860),null);
}
} else {
var y = cljs.core.first(s__20858__$2);
return cljs.core.cons((function (){var neighbour_count = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4324__auto__ = ((function (i__20855,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20867(s__20868){
return (new cljs.core.LazySeq(null,((function (i__20855,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20868__$1 = s__20868;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__20868__$1);
if(temp__5735__auto____$2){
var xs__6292__auto__ = temp__5735__auto____$2;
var i = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__20868__$1,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20867_$_iter__20869(s__20870){
return (new cljs.core.LazySeq(null,((function (s__20868__$1,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20870__$1 = s__20870;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__20870__$1);
if(temp__5735__auto____$3){
var s__20870__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__20870__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20870__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20872 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20871 = (0);
while(true){
if((i__20871 < size__4323__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20871);
cljs.core.chunk_append(b__20872,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)));

var G__20892 = (i__20871 + (1));
i__20871 = G__20892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20872),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20867_$_iter__20869(cljs.core.chunk_rest(s__20870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20872),null);
}
} else {
var j = cljs.core.first(s__20870__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20867_$_iter__20869(cljs.core.rest(s__20870__$2)));
}
} else {
return null;
}
break;
}
});})(s__20868__$1,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(s__20868__$1,i__20855,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857_$_iter__20867(cljs.core.rest(s__20868__$1)));
} else {
var G__20893 = cljs.core.rest(s__20868__$1);
s__20868__$1 = G__20893;
continue;
}
} else {
return null;
}
break;
}
});})(i__20855,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(i__20855,y,s__20858__$2,temp__5735__auto____$1,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2)));
})()) - (1));
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x),y);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count < (2))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count > (3))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbour_count,(3))))){
return (1);
} else {
return current;

}
}
}
})(),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20857(cljs.core.rest(s__20858__$2)));
}
} else {
return null;
}
break;
}
});})(i__20855,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(i__20855,x,c__4322__auto__,size__4323__auto__,b__20856,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x))));
})());

var G__20894 = (i__20855 + (1));
i__20855 = G__20894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20856),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853(cljs.core.chunk_rest(s__20854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20856),null);
}
} else {
var x = cljs.core.first(s__20854__$2);
return cljs.core.cons((function (){var iter__4324__auto__ = ((function (x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873(s__20874){
return (new cljs.core.LazySeq(null,((function (x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20874__$1 = s__20874;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__20874__$1);
if(temp__5735__auto____$1){
var s__20874__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20874__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20874__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20876 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20875 = (0);
while(true){
if((i__20875 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20875);
cljs.core.chunk_append(b__20876,(function (){var neighbour_count = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4324__auto__ = ((function (i__20875,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20877(s__20878){
return (new cljs.core.LazySeq(null,((function (i__20875,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20878__$1 = s__20878;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__20878__$1);
if(temp__5735__auto____$2){
var xs__6292__auto__ = temp__5735__auto____$2;
var i = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__20878__$1,i__20875,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20877_$_iter__20879(s__20880){
return (new cljs.core.LazySeq(null,((function (s__20878__$1,i__20875,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20880__$1 = s__20880;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__20880__$1);
if(temp__5735__auto____$3){
var s__20880__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__20880__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first(s__20880__$2);
var size__4323__auto____$1 = cljs.core.count(c__4322__auto____$1);
var b__20882 = cljs.core.chunk_buffer(size__4323__auto____$1);
if((function (){var i__20881 = (0);
while(true){
if((i__20881 < size__4323__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto____$1,i__20881);
cljs.core.chunk_append(b__20882,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)));

var G__20895 = (i__20881 + (1));
i__20881 = G__20895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20882),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20877_$_iter__20879(cljs.core.chunk_rest(s__20880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20882),null);
}
} else {
var j = cljs.core.first(s__20880__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20877_$_iter__20879(cljs.core.rest(s__20880__$2)));
}
} else {
return null;
}
break;
}
});})(s__20878__$1,i__20875,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(s__20878__$1,i__20875,i,xs__6292__auto__,temp__5735__auto____$2,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20877(cljs.core.rest(s__20878__$1)));
} else {
var G__20896 = cljs.core.rest(s__20878__$1);
s__20878__$1 = G__20896;
continue;
}
} else {
return null;
}
break;
}
});})(i__20875,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(i__20875,y,c__4322__auto__,size__4323__auto__,b__20876,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2)));
})()) - (1));
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x),y);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count < (2))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count > (3))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbour_count,(3))))){
return (1);
} else {
return current;

}
}
}
})());

var G__20897 = (i__20875 + (1));
i__20875 = G__20897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20876),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873(cljs.core.chunk_rest(s__20874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20876),null);
}
} else {
var y = cljs.core.first(s__20874__$2);
return cljs.core.cons((function (){var neighbour_count = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4324__auto__ = ((function (y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20883(s__20884){
return (new cljs.core.LazySeq(null,((function (y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20884__$1 = s__20884;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__20884__$1);
if(temp__5735__auto____$2){
var xs__6292__auto__ = temp__5735__auto____$2;
var i = cljs.core.first(xs__6292__auto__);
var iterys__4320__auto__ = ((function (s__20884__$1,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20883_$_iter__20885(s__20886){
return (new cljs.core.LazySeq(null,((function (s__20884__$1,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board){
return (function (){
var s__20886__$1 = s__20886;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__20886__$1);
if(temp__5735__auto____$3){
var s__20886__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__20886__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20886__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20888 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20887 = (0);
while(true){
if((i__20887 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20887);
cljs.core.chunk_append(b__20888,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)));

var G__20898 = (i__20887 + (1));
i__20887 = G__20898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20888),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20883_$_iter__20885(cljs.core.chunk_rest(s__20886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20888),null);
}
} else {
var j = cljs.core.first(s__20886__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(board,(x + i),cljs.core.List.EMPTY),(y + j),(0)),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20883_$_iter__20885(cljs.core.rest(s__20886__$2)));
}
} else {
return null;
}
break;
}
});})(s__20884__$1,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(s__20884__$1,i,xs__6292__auto__,temp__5735__auto____$2,y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873_$_iter__20883(cljs.core.rest(s__20884__$1)));
} else {
var G__20899 = cljs.core.rest(s__20884__$1);
s__20884__$1 = G__20899;
continue;
}
} else {
return null;
}
break;
}
});})(y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(y,s__20874__$2,temp__5735__auto____$1,x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-1),(2)));
})()) - (1));
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x),y);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count < (2))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(1))) && ((neighbour_count > (3))))){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbour_count,(3))))){
return (1);
} else {
return current;

}
}
}
})(),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853_$_iter__20873(cljs.core.rest(s__20874__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
,null,null));
});})(x,s__20854__$2,temp__5735__auto__,map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,x))));
})(),sketches$nature_of_code$cellular_automata$game_of_life$update_state_$_iter__20853(cljs.core.rest(s__20854__$2)));
}
} else {
return null;
}
break;
}
});})(map__20851,map__20851__$1,state,board))
,null,null));
});})(map__20851,map__20851__$1,state,board))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(board)));
})());
});
sketches.nature_of_code.cellular_automata.game_of_life.update_board = (function sketches$nature_of_code$cellular_automata$game_of_life$update_board(x,y,board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence,cljs.core.assoc_in(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20900_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__20900_SHARP_);
}),board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),(1)));
});
sketches.nature_of_code.cellular_automata.game_of_life.draw = (function sketches$nature_of_code$cellular_automata$game_of_life$draw(p__20901){
var map__20902 = p__20901;
var map__20902__$1 = ((((!((map__20902 == null)))?(((((map__20902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20902):map__20902);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20902__$1,cljs.core.cst$kw$board);
var updated_board = (cljs.core.truth_(quil.core.mouse_pressed_QMARK_())?sketches.nature_of_code.cellular_automata.game_of_life.update_board(quil.core.floor((quil.core.mouse_x() / (5))),quil.core.floor((quil.core.mouse_y() / (5))),board):board);
var seq__20904 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(updated_board)));
var chunk__20909 = null;
var count__20910 = (0);
var i__20911 = (0);
while(true){
if((i__20911 < count__20910)){
var x = chunk__20909.cljs$core$IIndexed$_nth$arity$2(null,i__20911);
var seq__20912_20916 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x))));
var chunk__20913_20917 = null;
var count__20914_20918 = (0);
var i__20915_20919 = (0);
while(true){
if((i__20915_20919 < count__20914_20918)){
var y_20920 = chunk__20913_20917.cljs$core$IIndexed$_nth$arity$2(null,i__20915_20919);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x),y_20920),(1))){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));
}

quil.core.rect.cljs$core$IFn$_invoke$arity$4((x * (5)),(y_20920 * (5)),(5),(5));


var G__20921 = seq__20912_20916;
var G__20922 = chunk__20913_20917;
var G__20923 = count__20914_20918;
var G__20924 = (i__20915_20919 + (1));
seq__20912_20916 = G__20921;
chunk__20913_20917 = G__20922;
count__20914_20918 = G__20923;
i__20915_20919 = G__20924;
continue;
} else {
var temp__5735__auto___20925 = cljs.core.seq(seq__20912_20916);
if(temp__5735__auto___20925){
var seq__20912_20926__$1 = temp__5735__auto___20925;
if(cljs.core.chunked_seq_QMARK_(seq__20912_20926__$1)){
var c__4351__auto___20927 = cljs.core.chunk_first(seq__20912_20926__$1);
var G__20928 = cljs.core.chunk_rest(seq__20912_20926__$1);
var G__20929 = c__4351__auto___20927;
var G__20930 = cljs.core.count(c__4351__auto___20927);
var G__20931 = (0);
seq__20912_20916 = G__20928;
chunk__20913_20917 = G__20929;
count__20914_20918 = G__20930;
i__20915_20919 = G__20931;
continue;
} else {
var y_20932 = cljs.core.first(seq__20912_20926__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x),y_20932),(1))){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));
}

quil.core.rect.cljs$core$IFn$_invoke$arity$4((x * (5)),(y_20932 * (5)),(5),(5));


var G__20933 = cljs.core.next(seq__20912_20926__$1);
var G__20934 = null;
var G__20935 = (0);
var G__20936 = (0);
seq__20912_20916 = G__20933;
chunk__20913_20917 = G__20934;
count__20914_20918 = G__20935;
i__20915_20919 = G__20936;
continue;
}
} else {
}
}
break;
}

var G__20937 = seq__20904;
var G__20938 = chunk__20909;
var G__20939 = count__20910;
var G__20940 = (i__20911 + (1));
seq__20904 = G__20937;
chunk__20909 = G__20938;
count__20910 = G__20939;
i__20911 = G__20940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20904);
if(temp__5735__auto__){
var seq__20904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20904__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20904__$1);
var G__20941 = cljs.core.chunk_rest(seq__20904__$1);
var G__20942 = c__4351__auto__;
var G__20943 = cljs.core.count(c__4351__auto__);
var G__20944 = (0);
seq__20904 = G__20941;
chunk__20909 = G__20942;
count__20910 = G__20943;
i__20911 = G__20944;
continue;
} else {
var x = cljs.core.first(seq__20904__$1);
var seq__20905_20945 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x))));
var chunk__20906_20946 = null;
var count__20907_20947 = (0);
var i__20908_20948 = (0);
while(true){
if((i__20908_20948 < count__20907_20947)){
var y_20949 = chunk__20906_20946.cljs$core$IIndexed$_nth$arity$2(null,i__20908_20948);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x),y_20949),(1))){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));
}

quil.core.rect.cljs$core$IFn$_invoke$arity$4((x * (5)),(y_20949 * (5)),(5),(5));


var G__20950 = seq__20905_20945;
var G__20951 = chunk__20906_20946;
var G__20952 = count__20907_20947;
var G__20953 = (i__20908_20948 + (1));
seq__20905_20945 = G__20950;
chunk__20906_20946 = G__20951;
count__20907_20947 = G__20952;
i__20908_20948 = G__20953;
continue;
} else {
var temp__5735__auto___20954__$1 = cljs.core.seq(seq__20905_20945);
if(temp__5735__auto___20954__$1){
var seq__20905_20955__$1 = temp__5735__auto___20954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20905_20955__$1)){
var c__4351__auto___20956 = cljs.core.chunk_first(seq__20905_20955__$1);
var G__20957 = cljs.core.chunk_rest(seq__20905_20955__$1);
var G__20958 = c__4351__auto___20956;
var G__20959 = cljs.core.count(c__4351__auto___20956);
var G__20960 = (0);
seq__20905_20945 = G__20957;
chunk__20906_20946 = G__20958;
count__20907_20947 = G__20959;
i__20908_20948 = G__20960;
continue;
} else {
var y_20961 = cljs.core.first(seq__20905_20955__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(updated_board,x),y_20961),(1))){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));
}

quil.core.rect.cljs$core$IFn$_invoke$arity$4((x * (5)),(y_20961 * (5)),(5),(5));


var G__20962 = cljs.core.next(seq__20905_20955__$1);
var G__20963 = null;
var G__20964 = (0);
var G__20965 = (0);
seq__20905_20945 = G__20962;
chunk__20906_20946 = G__20963;
count__20907_20947 = G__20964;
i__20908_20948 = G__20965;
continue;
}
} else {
}
}
break;
}

var G__20966 = cljs.core.next(seq__20904__$1);
var G__20967 = null;
var G__20968 = (0);
var G__20969 = (0);
seq__20904 = G__20966;
chunk__20909 = G__20967;
count__20910 = G__20968;
i__20911 = G__20969;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.nature_of_code.cellular_automata.game_of_life.mouse_clicked = (function sketches$nature_of_code$cellular_automata$game_of_life$mouse_clicked(p__20970,p__20971){
var map__20972 = p__20970;
var map__20972__$1 = ((((!((map__20972 == null)))?(((((map__20972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20972):map__20972);
var state = map__20972__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$board);
var map__20973 = p__20971;
var map__20973__$1 = ((((!((map__20973 == null)))?(((((map__20973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20973):map__20973);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$y);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$board,((function (map__20972,map__20972__$1,state,board,map__20973,map__20973__$1,x,y){
return (function (board__$1){
return sketches.nature_of_code.cellular_automata.game_of_life.update_board(quil.core.floor((x / (5))),quil.core.floor((y / (5))),board__$1);
});})(map__20972,map__20972__$1,state,board,map__20973,map__20973__$1,x,y))
);
});
sketches.nature_of_code.cellular_automata.game_of_life.run = (function sketches$nature_of_code$cellular_automata$game_of_life$run(host){
sketches.nature_of_code.cellular_automata.game_of_life.game_of_life = (function sketches$nature_of_code$cellular_automata$game_of_life$run_$_game_of_life(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20976__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20977__i = 0, G__20977__a = new Array(arguments.length -  0);
while (G__20977__i < G__20977__a.length) {G__20977__a[G__20977__i] = arguments[G__20977__i + 0]; ++G__20977__i;}
  args = new cljs.core.IndexedSeq(G__20977__a,0,null);
} 
return G__20976__delegate.call(this,args);};
G__20976.cljs$lang$maxFixedArity = 0;
G__20976.cljs$lang$applyTo = (function (arglist__20978){
var args = cljs.core.seq(arglist__20978);
return G__20976__delegate(args);
});
G__20976.cljs$core$IFn$_invoke$arity$variadic = G__20976__delegate;
return G__20976;
})()
:host),cljs.core.cst$kw$mouse_DASH_clicked,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.game_of_life.mouse_clicked))?(function() { 
var G__20979__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.game_of_life.mouse_clicked,args);
};
var G__20979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20980__i = 0, G__20980__a = new Array(arguments.length -  0);
while (G__20980__i < G__20980__a.length) {G__20980__a[G__20980__i] = arguments[G__20980__i + 0]; ++G__20980__i;}
  args = new cljs.core.IndexedSeq(G__20980__a,0,null);
} 
return G__20979__delegate.call(this,args);};
G__20979.cljs$lang$maxFixedArity = 0;
G__20979.cljs$lang$applyTo = (function (arglist__20981){
var args = cljs.core.seq(arglist__20981);
return G__20979__delegate(args);
});
G__20979.cljs$core$IFn$_invoke$arity$variadic = G__20979__delegate;
return G__20979;
})()
:sketches.nature_of_code.cellular_automata.game_of_life.mouse_clicked),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.game_of_life.update_state))?(function() { 
var G__20982__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.game_of_life.update_state,args);
};
var G__20982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20983__i = 0, G__20983__a = new Array(arguments.length -  0);
while (G__20983__i < G__20983__a.length) {G__20983__a[G__20983__i] = arguments[G__20983__i + 0]; ++G__20983__i;}
  args = new cljs.core.IndexedSeq(G__20983__a,0,null);
} 
return G__20982__delegate.call(this,args);};
G__20982.cljs$lang$maxFixedArity = 0;
G__20982.cljs$lang$applyTo = (function (arglist__20984){
var args = cljs.core.seq(arglist__20984);
return G__20982__delegate(args);
});
G__20982.cljs$core$IFn$_invoke$arity$variadic = G__20982__delegate;
return G__20982;
})()
:sketches.nature_of_code.cellular_automata.game_of_life.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.game_of_life.setup))?(function() { 
var G__20985__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.game_of_life.setup,args);
};
var G__20985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20986__i = 0, G__20986__a = new Array(arguments.length -  0);
while (G__20986__i < G__20986__a.length) {G__20986__a[G__20986__i] = arguments[G__20986__i + 0]; ++G__20986__i;}
  args = new cljs.core.IndexedSeq(G__20986__a,0,null);
} 
return G__20985__delegate.call(this,args);};
G__20985.cljs$lang$maxFixedArity = 0;
G__20985.cljs$lang$applyTo = (function (arglist__20987){
var args = cljs.core.seq(arglist__20987);
return G__20985__delegate(args);
});
G__20985.cljs$core$IFn$_invoke$arity$variadic = G__20985__delegate;
return G__20985;
})()
:sketches.nature_of_code.cellular_automata.game_of_life.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.nature_of_code.cellular_automata.game_of_life.draw))?(function() { 
var G__20988__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.nature_of_code.cellular_automata.game_of_life.draw,args);
};
var G__20988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20989__i = 0, G__20989__a = new Array(arguments.length -  0);
while (G__20989__i < G__20989__a.length) {G__20989__a[G__20989__i] = arguments[G__20989__i + 0]; ++G__20989__i;}
  args = new cljs.core.IndexedSeq(G__20989__a,0,null);
} 
return G__20988__delegate.call(this,args);};
G__20988.cljs$lang$maxFixedArity = 0;
G__20988.cljs$lang$applyTo = (function (arglist__20990){
var args = cljs.core.seq(arglist__20990);
return G__20988__delegate(args);
});
G__20988.cljs$core$IFn$_invoke$arity$variadic = G__20988__delegate;
return G__20988;
})()
:sketches.nature_of_code.cellular_automata.game_of_life.draw)], 0));
});
goog.exportSymbol('sketches.nature_of_code.cellular_automata.game_of_life.game_of_life', sketches.nature_of_code.cellular_automata.game_of_life.game_of_life);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.nature_of_code.cellular_automata.game_of_life.game_of_life,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__20991__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__20991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20992__i = 0, G__20992__a = new Array(arguments.length -  0);
while (G__20992__i < G__20992__a.length) {G__20992__a[G__20992__i] = arguments[G__20992__i + 0]; ++G__20992__i;}
  args = new cljs.core.IndexedSeq(G__20992__a,0,null);
} 
return G__20991__delegate.call(this,args);};
G__20991.cljs$lang$maxFixedArity = 0;
G__20991.cljs$lang$applyTo = (function (arglist__20993){
var args = cljs.core.seq(arglist__20993);
return G__20991__delegate(args);
});
G__20991.cljs$core$IFn$_invoke$arity$variadic = G__20991__delegate;
return G__20991;
})()
:host)], null));
}
});
