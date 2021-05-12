// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_01.P_1_2_3_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x = (50);
sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_y = (10);
sketches.generative_desgin.P_01.P_1_2_3_01.color_parts = (function sketches$generative_desgin$P_01$P_1_2_3_01$color_parts(h,s,b){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hueValues,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23151(s__23152){
return (new cljs.core.LazySeq(null,(function (){
var s__23152__$1 = s__23152;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23152__$1);
if(temp__5735__auto__){
var s__23152__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23152__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__23152__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__23154 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__23153 = (0);
while(true){
if((i__23153 < size__4323__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__23153);
cljs.core.chunk_append(b__23154,(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)));

var G__23163 = (i__23153 + (1));
i__23153 = G__23163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23154),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23151(cljs.core.chunk_rest(s__23152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23154),null);
}
} else {
var _ = cljs.core.first(s__23152__$2);
return cljs.core.cons((h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23151(cljs.core.rest(s__23152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x));
})()),cljs.core.cst$kw$saturationValues,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23155(s__23156){
return (new cljs.core.LazySeq(null,(function (){
var s__23156__$1 = s__23156;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23156__$1);
if(temp__5735__auto__){
var s__23156__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23156__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__23156__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__23158 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__23157 = (0);
while(true){
if((i__23157 < size__4323__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__23157);
cljs.core.chunk_append(b__23158,(s.cljs$core$IFn$_invoke$arity$0 ? s.cljs$core$IFn$_invoke$arity$0() : s.call(null)));

var G__23164 = (i__23157 + (1));
i__23157 = G__23164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23158),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23155(cljs.core.chunk_rest(s__23156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23158),null);
}
} else {
var _ = cljs.core.first(s__23156__$2);
return cljs.core.cons((s.cljs$core$IFn$_invoke$arity$0 ? s.cljs$core$IFn$_invoke$arity$0() : s.call(null)),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23155(cljs.core.rest(s__23156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x));
})()),cljs.core.cst$kw$brightnessValues,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = (function sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23159(s__23160){
return (new cljs.core.LazySeq(null,(function (){
var s__23160__$1 = s__23160;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23160__$1);
if(temp__5735__auto__){
var s__23160__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23160__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__23160__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__23162 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__23161 = (0);
while(true){
if((i__23161 < size__4323__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__23161);
cljs.core.chunk_append(b__23162,(b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null)));

var G__23165 = (i__23161 + (1));
i__23161 = G__23165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23162),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23159(cljs.core.chunk_rest(s__23160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23162),null);
}
} else {
var _ = cljs.core.first(s__23160__$2);
return cljs.core.cons((b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null)),sketches$generative_desgin$P_01$P_1_2_3_01$color_parts_$_iter__23159(cljs.core.rest(s__23160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x));
})())], null);
});
sketches.generative_desgin.P_01.P_1_2_3_01.setup = (function sketches$generative_desgin$P_01$P_1_2_3_01$setup(){
quil.core.color_mode.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$hsb,(360),(100),(100),(100));

quil.core.no_stroke();

return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts((function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((360));
}),(function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
}),(function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
}));
});
sketches.generative_desgin.P_01.P_1_2_3_01.update_state = (function sketches$generative_desgin$P_01$P_1_2_3_01$update_state(state){
return state;
});
sketches.generative_desgin.P_01.P_1_2_3_01.draw = (function sketches$generative_desgin$P_01$P_1_2_3_01$draw(p__23166){
var map__23167 = p__23166;
var map__23167__$1 = ((((!((map__23167 == null)))?(((((map__23167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23167):map__23167);
var hueValues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167__$1,cljs.core.cst$kw$hueValues);
var saturationValues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167__$1,cljs.core.cst$kw$saturationValues);
var brightnessValues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167__$1,cljs.core.cst$kw$brightnessValues);
quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(100));

var mx = quil.core.constrain(quil.core.mouse_x(),(0),quil.core.width());
var my = quil.core.constrain(quil.core.mouse_y(),(0),quil.core.height());
var current_tile_count_x = (quil.core.map_range(mx,(0),quil.core.width(),(1),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x) | (0));
var current_tile_count_y = (quil.core.map_range(my,(0),quil.core.width(),(1),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_y) | (0));
var tile_width = (quil.core.width() / current_tile_count_x);
var tile_height = (quil.core.height() / current_tile_count_y);
var seq__23169 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_y));
var chunk__23174 = null;
var count__23175 = (0);
var i__23176 = (0);
while(true){
if((i__23176 < count__23175)){
var grid_y = chunk__23174.cljs$core$IIndexed$_nth$arity$2(null,i__23176);
var seq__23177_23181 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x));
var chunk__23178_23182 = null;
var count__23179_23183 = (0);
var i__23180_23184 = (0);
while(true){
if((i__23180_23184 < count__23179_23183)){
var grid_x_23185 = chunk__23178_23182.cljs$core$IIndexed$_nth$arity$2(null,i__23180_23184);
var pos_x_23186 = (tile_width * grid_x_23185);
var pos_y_23187 = (tile_height * grid_y);
var index_23188 = cljs.core.mod((grid_x_23185 + (sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x * grid_y)),current_tile_count_x);
quil.core.fill.cljs$core$IFn$_invoke$arity$3((hueValues.cljs$core$IFn$_invoke$arity$1 ? hueValues.cljs$core$IFn$_invoke$arity$1(index_23188) : hueValues.call(null,index_23188)),(saturationValues.cljs$core$IFn$_invoke$arity$1 ? saturationValues.cljs$core$IFn$_invoke$arity$1(index_23188) : saturationValues.call(null,index_23188)),(brightnessValues.cljs$core$IFn$_invoke$arity$1 ? brightnessValues.cljs$core$IFn$_invoke$arity$1(index_23188) : brightnessValues.call(null,index_23188)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_23186,pos_y_23187,tile_width,tile_height);


var G__23189 = seq__23177_23181;
var G__23190 = chunk__23178_23182;
var G__23191 = count__23179_23183;
var G__23192 = (i__23180_23184 + (1));
seq__23177_23181 = G__23189;
chunk__23178_23182 = G__23190;
count__23179_23183 = G__23191;
i__23180_23184 = G__23192;
continue;
} else {
var temp__5735__auto___23193 = cljs.core.seq(seq__23177_23181);
if(temp__5735__auto___23193){
var seq__23177_23194__$1 = temp__5735__auto___23193;
if(cljs.core.chunked_seq_QMARK_(seq__23177_23194__$1)){
var c__4351__auto___23195 = cljs.core.chunk_first(seq__23177_23194__$1);
var G__23196 = cljs.core.chunk_rest(seq__23177_23194__$1);
var G__23197 = c__4351__auto___23195;
var G__23198 = cljs.core.count(c__4351__auto___23195);
var G__23199 = (0);
seq__23177_23181 = G__23196;
chunk__23178_23182 = G__23197;
count__23179_23183 = G__23198;
i__23180_23184 = G__23199;
continue;
} else {
var grid_x_23200 = cljs.core.first(seq__23177_23194__$1);
var pos_x_23201 = (tile_width * grid_x_23200);
var pos_y_23202 = (tile_height * grid_y);
var index_23203 = cljs.core.mod((grid_x_23200 + (sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x * grid_y)),current_tile_count_x);
quil.core.fill.cljs$core$IFn$_invoke$arity$3((hueValues.cljs$core$IFn$_invoke$arity$1 ? hueValues.cljs$core$IFn$_invoke$arity$1(index_23203) : hueValues.call(null,index_23203)),(saturationValues.cljs$core$IFn$_invoke$arity$1 ? saturationValues.cljs$core$IFn$_invoke$arity$1(index_23203) : saturationValues.call(null,index_23203)),(brightnessValues.cljs$core$IFn$_invoke$arity$1 ? brightnessValues.cljs$core$IFn$_invoke$arity$1(index_23203) : brightnessValues.call(null,index_23203)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_23201,pos_y_23202,tile_width,tile_height);


var G__23204 = cljs.core.next(seq__23177_23194__$1);
var G__23205 = null;
var G__23206 = (0);
var G__23207 = (0);
seq__23177_23181 = G__23204;
chunk__23178_23182 = G__23205;
count__23179_23183 = G__23206;
i__23180_23184 = G__23207;
continue;
}
} else {
}
}
break;
}

var G__23208 = seq__23169;
var G__23209 = chunk__23174;
var G__23210 = count__23175;
var G__23211 = (i__23176 + (1));
seq__23169 = G__23208;
chunk__23174 = G__23209;
count__23175 = G__23210;
i__23176 = G__23211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23169);
if(temp__5735__auto__){
var seq__23169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23169__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23169__$1);
var G__23212 = cljs.core.chunk_rest(seq__23169__$1);
var G__23213 = c__4351__auto__;
var G__23214 = cljs.core.count(c__4351__auto__);
var G__23215 = (0);
seq__23169 = G__23212;
chunk__23174 = G__23213;
count__23175 = G__23214;
i__23176 = G__23215;
continue;
} else {
var grid_y = cljs.core.first(seq__23169__$1);
var seq__23170_23216 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x));
var chunk__23171_23217 = null;
var count__23172_23218 = (0);
var i__23173_23219 = (0);
while(true){
if((i__23173_23219 < count__23172_23218)){
var grid_x_23220 = chunk__23171_23217.cljs$core$IIndexed$_nth$arity$2(null,i__23173_23219);
var pos_x_23221 = (tile_width * grid_x_23220);
var pos_y_23222 = (tile_height * grid_y);
var index_23223 = cljs.core.mod((grid_x_23220 + (sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x * grid_y)),current_tile_count_x);
quil.core.fill.cljs$core$IFn$_invoke$arity$3((hueValues.cljs$core$IFn$_invoke$arity$1 ? hueValues.cljs$core$IFn$_invoke$arity$1(index_23223) : hueValues.call(null,index_23223)),(saturationValues.cljs$core$IFn$_invoke$arity$1 ? saturationValues.cljs$core$IFn$_invoke$arity$1(index_23223) : saturationValues.call(null,index_23223)),(brightnessValues.cljs$core$IFn$_invoke$arity$1 ? brightnessValues.cljs$core$IFn$_invoke$arity$1(index_23223) : brightnessValues.call(null,index_23223)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_23221,pos_y_23222,tile_width,tile_height);


var G__23224 = seq__23170_23216;
var G__23225 = chunk__23171_23217;
var G__23226 = count__23172_23218;
var G__23227 = (i__23173_23219 + (1));
seq__23170_23216 = G__23224;
chunk__23171_23217 = G__23225;
count__23172_23218 = G__23226;
i__23173_23219 = G__23227;
continue;
} else {
var temp__5735__auto___23228__$1 = cljs.core.seq(seq__23170_23216);
if(temp__5735__auto___23228__$1){
var seq__23170_23229__$1 = temp__5735__auto___23228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23170_23229__$1)){
var c__4351__auto___23230 = cljs.core.chunk_first(seq__23170_23229__$1);
var G__23231 = cljs.core.chunk_rest(seq__23170_23229__$1);
var G__23232 = c__4351__auto___23230;
var G__23233 = cljs.core.count(c__4351__auto___23230);
var G__23234 = (0);
seq__23170_23216 = G__23231;
chunk__23171_23217 = G__23232;
count__23172_23218 = G__23233;
i__23173_23219 = G__23234;
continue;
} else {
var grid_x_23235 = cljs.core.first(seq__23170_23229__$1);
var pos_x_23236 = (tile_width * grid_x_23235);
var pos_y_23237 = (tile_height * grid_y);
var index_23238 = cljs.core.mod((grid_x_23235 + (sketches.generative_desgin.P_01.P_1_2_3_01.tile_count_x * grid_y)),current_tile_count_x);
quil.core.fill.cljs$core$IFn$_invoke$arity$3((hueValues.cljs$core$IFn$_invoke$arity$1 ? hueValues.cljs$core$IFn$_invoke$arity$1(index_23238) : hueValues.call(null,index_23238)),(saturationValues.cljs$core$IFn$_invoke$arity$1 ? saturationValues.cljs$core$IFn$_invoke$arity$1(index_23238) : saturationValues.call(null,index_23238)),(brightnessValues.cljs$core$IFn$_invoke$arity$1 ? brightnessValues.cljs$core$IFn$_invoke$arity$1(index_23238) : brightnessValues.call(null,index_23238)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(pos_x_23236,pos_y_23237,tile_width,tile_height);


var G__23239 = cljs.core.next(seq__23170_23229__$1);
var G__23240 = null;
var G__23241 = (0);
var G__23242 = (0);
seq__23170_23216 = G__23239;
chunk__23171_23217 = G__23240;
count__23172_23218 = G__23241;
i__23173_23219 = G__23242;
continue;
}
} else {
}
}
break;
}

var G__23243 = cljs.core.next(seq__23169__$1);
var G__23244 = null;
var G__23245 = (0);
var G__23246 = (0);
seq__23169 = G__23243;
chunk__23174 = G__23244;
count__23175 = G__23245;
i__23176 = G__23246;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_01.P_1_2_3_01.key_pressed = (function sketches$generative_desgin$P_01$P_1_2_3_01$key_pressed(state,p__23247){
var map__23248 = p__23247;
var map__23248__$1 = ((((!((map__23248 == null)))?(((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23248):map__23248);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.cst$kw$key);
var G__23250 = key;
var G__23250__$1 = (((G__23250 instanceof cljs.core.Keyword))?G__23250.fqn:null);
switch (G__23250__$1) {
case "1":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((360));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "2":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((360));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "3":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((360));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "4":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((0));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((0));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "5":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((195));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "6":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((195));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return cljs.core.identity((100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "7":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$1((180));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$2((80),(100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$2((50),(90));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
case "8":
return sketches.generative_desgin.P_01.P_1_2_3_01.color_parts(((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$2((180),(360));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$2((80),(100));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
,((function (G__23250,G__23250__$1,map__23248,map__23248__$1,key){
return (function (){
return quil.core.random.cljs$core$IFn$_invoke$arity$2((50),(90));
});})(G__23250,G__23250__$1,map__23248,map__23248__$1,key))
);

break;
default:
return state;

}
});
sketches.generative_desgin.P_01.P_1_2_3_01.run = (function sketches$generative_desgin$P_01$P_1_2_3_01$run(host){
sketches.generative_desgin.P_01.P_1_2_3_01.color_palettes_rules = (function sketches$generative_desgin$P_01$P_1_2_3_01$run_$_color_palettes_rules(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23252__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23253__i = 0, G__23253__a = new Array(arguments.length -  0);
while (G__23253__i < G__23253__a.length) {G__23253__a[G__23253__i] = arguments[G__23253__i + 0]; ++G__23253__i;}
  args = new cljs.core.IndexedSeq(G__23253__a,0,null);
} 
return G__23252__delegate.call(this,args);};
G__23252.cljs$lang$maxFixedArity = 0;
G__23252.cljs$lang$applyTo = (function (arglist__23254){
var args = cljs.core.seq(arglist__23254);
return G__23252__delegate(args);
});
G__23252.cljs$core$IFn$_invoke$arity$variadic = G__23252__delegate;
return G__23252;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_3_01.update_state))?(function() { 
var G__23255__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_3_01.update_state,args);
};
var G__23255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23256__i = 0, G__23256__a = new Array(arguments.length -  0);
while (G__23256__i < G__23256__a.length) {G__23256__a[G__23256__i] = arguments[G__23256__i + 0]; ++G__23256__i;}
  args = new cljs.core.IndexedSeq(G__23256__a,0,null);
} 
return G__23255__delegate.call(this,args);};
G__23255.cljs$lang$maxFixedArity = 0;
G__23255.cljs$lang$applyTo = (function (arglist__23257){
var args = cljs.core.seq(arglist__23257);
return G__23255__delegate(args);
});
G__23255.cljs$core$IFn$_invoke$arity$variadic = G__23255__delegate;
return G__23255;
})()
:sketches.generative_desgin.P_01.P_1_2_3_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_3_01.setup))?(function() { 
var G__23258__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_3_01.setup,args);
};
var G__23258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23259__i = 0, G__23259__a = new Array(arguments.length -  0);
while (G__23259__i < G__23259__a.length) {G__23259__a[G__23259__i] = arguments[G__23259__i + 0]; ++G__23259__i;}
  args = new cljs.core.IndexedSeq(G__23259__a,0,null);
} 
return G__23258__delegate.call(this,args);};
G__23258.cljs$lang$maxFixedArity = 0;
G__23258.cljs$lang$applyTo = (function (arglist__23260){
var args = cljs.core.seq(arglist__23260);
return G__23258__delegate(args);
});
G__23258.cljs$core$IFn$_invoke$arity$variadic = G__23258__delegate;
return G__23258;
})()
:sketches.generative_desgin.P_01.P_1_2_3_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_3_01.key_pressed))?(function() { 
var G__23261__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_3_01.key_pressed,args);
};
var G__23261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23262__i = 0, G__23262__a = new Array(arguments.length -  0);
while (G__23262__i < G__23262__a.length) {G__23262__a[G__23262__i] = arguments[G__23262__i + 0]; ++G__23262__i;}
  args = new cljs.core.IndexedSeq(G__23262__a,0,null);
} 
return G__23261__delegate.call(this,args);};
G__23261.cljs$lang$maxFixedArity = 0;
G__23261.cljs$lang$applyTo = (function (arglist__23263){
var args = cljs.core.seq(arglist__23263);
return G__23261__delegate(args);
});
G__23261.cljs$core$IFn$_invoke$arity$variadic = G__23261__delegate;
return G__23261;
})()
:sketches.generative_desgin.P_01.P_1_2_3_01.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_01.P_1_2_3_01.draw))?(function() { 
var G__23264__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_01.P_1_2_3_01.draw,args);
};
var G__23264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23265__i = 0, G__23265__a = new Array(arguments.length -  0);
while (G__23265__i < G__23265__a.length) {G__23265__a[G__23265__i] = arguments[G__23265__i + 0]; ++G__23265__i;}
  args = new cljs.core.IndexedSeq(G__23265__a,0,null);
} 
return G__23264__delegate.call(this,args);};
G__23264.cljs$lang$maxFixedArity = 0;
G__23264.cljs$lang$applyTo = (function (arglist__23266){
var args = cljs.core.seq(arglist__23266);
return G__23264__delegate(args);
});
G__23264.cljs$core$IFn$_invoke$arity$variadic = G__23264__delegate;
return G__23264;
})()
:sketches.generative_desgin.P_01.P_1_2_3_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_01.P_1_2_3_01.color_palettes_rules', sketches.generative_desgin.P_01.P_1_2_3_01.color_palettes_rules);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_01.P_1_2_3_01.color_palettes_rules,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__23267__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__23267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23268__i = 0, G__23268__a = new Array(arguments.length -  0);
while (G__23268__i < G__23268__a.length) {G__23268__a[G__23268__i] = arguments[G__23268__i + 0]; ++G__23268__i;}
  args = new cljs.core.IndexedSeq(G__23268__a,0,null);
} 
return G__23267__delegate.call(this,args);};
G__23267.cljs$lang$maxFixedArity = 0;
G__23267.cljs$lang$applyTo = (function (arglist__23269){
var args = cljs.core.seq(arglist__23269);
return G__23267__delegate(args);
});
G__23267.cljs$core$IFn$_invoke$arity$variadic = G__23267__delegate;
return G__23267;
})()
:host)], null));
}
});
