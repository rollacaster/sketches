// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_1_3_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_x = (10);
sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_y = (10);
sketches.generative_desgin.P_02.P_2_1_3_01.setup = (function sketches$generative_desgin$P_02$P_2_1_3_01$setup(){
quil.core.no_fill();

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),(128));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tile_DASH_width,(quil.core.width() / sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_x),cljs.core.cst$kw$tile_DASH_height,(quil.core.height() / sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_y)], null);
});
sketches.generative_desgin.P_02.P_2_1_3_01.update_state = (function sketches$generative_desgin$P_02$P_2_1_3_01$update_state(state){
return state;
});
sketches.generative_desgin.P_02.P_2_1_3_01.draw = (function sketches$generative_desgin$P_02$P_2_1_3_01$draw(p__21919){
var map__21920 = p__21919;
var map__21920__$1 = ((((!((map__21920 == null)))?(((((map__21920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21920):map__21920);
var tile_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,cljs.core.cst$kw$tile_DASH_width);
var tile_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,cljs.core.cst$kw$tile_DASH_height);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((tile_width / (2)),(tile_height / (2)));

quil.core.random_seed((0));

var circle_count = ((quil.core.mouse_x() / (30)) + (1));
var end_size = quil.core.map_range(quil.core.mouse_x(),(0),(function (){var G__21922 = quil.core.width();
var G__21923 = quil.core.mouse_x();
return Math.max(G__21922,G__21923);
})(),(tile_width / (2)),(0));
var end_offset = quil.core.map_range(quil.core.mouse_y(),(0),(function (){var G__21924 = quil.core.height();
var G__21925 = quil.core.mouse_y();
return Math.max(G__21924,G__21925);
})(),(0),((tile_width - end_size) / (2)));
var seq__21926 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_y));
var chunk__21931 = null;
var count__21932 = (0);
var i__21933 = (0);
while(true){
if((i__21933 < count__21932)){
var grid_y = chunk__21931.cljs$core$IIndexed$_nth$arity$2(null,i__21933);
var seq__21934_21958 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_x));
var chunk__21935_21959 = null;
var count__21936_21960 = (0);
var i__21937_21961 = (0);
while(true){
if((i__21937_21961 < count__21936_21960)){
var grid_x_21962 = chunk__21935_21959.cljs$core$IIndexed$_nth$arity$2(null,i__21937_21961);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((tile_width * grid_x_21962),(tile_height * grid_y));

quil.core.scale.cljs$core$IFn$_invoke$arity$2((1),(tile_height / tile_width));

var G__21938_21963 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(4)) | (0));
switch (G__21938_21963) {
case (0):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.HALF_PI));

break;
case (1):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((0));

break;
case (2):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case (3):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21938_21963)].join('')));

}

var seq__21939_21965 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),circle_count));
var chunk__21940_21966 = null;
var count__21941_21967 = (0);
var i__21942_21968 = (0);
while(true){
if((i__21942_21968 < count__21941_21967)){
var i_21969 = chunk__21940_21966.cljs$core$IIndexed$_nth$arity$2(null,i__21942_21968);
var diameter_21970 = quil.core.map_range(i_21969,(0),circle_count,tile_width,end_size);
var offset_21971 = quil.core.map_range(i_21969,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_21971,(0),diameter_21970,diameter_21970);


var G__21972 = seq__21939_21965;
var G__21973 = chunk__21940_21966;
var G__21974 = count__21941_21967;
var G__21975 = (i__21942_21968 + (1));
seq__21939_21965 = G__21972;
chunk__21940_21966 = G__21973;
count__21941_21967 = G__21974;
i__21942_21968 = G__21975;
continue;
} else {
var temp__5735__auto___21976 = cljs.core.seq(seq__21939_21965);
if(temp__5735__auto___21976){
var seq__21939_21977__$1 = temp__5735__auto___21976;
if(cljs.core.chunked_seq_QMARK_(seq__21939_21977__$1)){
var c__4351__auto___21978 = cljs.core.chunk_first(seq__21939_21977__$1);
var G__21979 = cljs.core.chunk_rest(seq__21939_21977__$1);
var G__21980 = c__4351__auto___21978;
var G__21981 = cljs.core.count(c__4351__auto___21978);
var G__21982 = (0);
seq__21939_21965 = G__21979;
chunk__21940_21966 = G__21980;
count__21941_21967 = G__21981;
i__21942_21968 = G__21982;
continue;
} else {
var i_21983 = cljs.core.first(seq__21939_21977__$1);
var diameter_21984 = quil.core.map_range(i_21983,(0),circle_count,tile_width,end_size);
var offset_21985 = quil.core.map_range(i_21983,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_21985,(0),diameter_21984,diameter_21984);


var G__21986 = cljs.core.next(seq__21939_21977__$1);
var G__21987 = null;
var G__21988 = (0);
var G__21989 = (0);
seq__21939_21965 = G__21986;
chunk__21940_21966 = G__21987;
count__21941_21967 = G__21988;
i__21942_21968 = G__21989;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix();


var G__21990 = seq__21934_21958;
var G__21991 = chunk__21935_21959;
var G__21992 = count__21936_21960;
var G__21993 = (i__21937_21961 + (1));
seq__21934_21958 = G__21990;
chunk__21935_21959 = G__21991;
count__21936_21960 = G__21992;
i__21937_21961 = G__21993;
continue;
} else {
var temp__5735__auto___21994 = cljs.core.seq(seq__21934_21958);
if(temp__5735__auto___21994){
var seq__21934_21995__$1 = temp__5735__auto___21994;
if(cljs.core.chunked_seq_QMARK_(seq__21934_21995__$1)){
var c__4351__auto___21996 = cljs.core.chunk_first(seq__21934_21995__$1);
var G__21997 = cljs.core.chunk_rest(seq__21934_21995__$1);
var G__21998 = c__4351__auto___21996;
var G__21999 = cljs.core.count(c__4351__auto___21996);
var G__22000 = (0);
seq__21934_21958 = G__21997;
chunk__21935_21959 = G__21998;
count__21936_21960 = G__21999;
i__21937_21961 = G__22000;
continue;
} else {
var grid_x_22001 = cljs.core.first(seq__21934_21995__$1);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((tile_width * grid_x_22001),(tile_height * grid_y));

quil.core.scale.cljs$core$IFn$_invoke$arity$2((1),(tile_height / tile_width));

var G__21943_22002 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(4)) | (0));
switch (G__21943_22002) {
case (0):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.HALF_PI));

break;
case (1):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((0));

break;
case (2):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case (3):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21943_22002)].join('')));

}

var seq__21944_22004 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),circle_count));
var chunk__21945_22005 = null;
var count__21946_22006 = (0);
var i__21947_22007 = (0);
while(true){
if((i__21947_22007 < count__21946_22006)){
var i_22008 = chunk__21945_22005.cljs$core$IIndexed$_nth$arity$2(null,i__21947_22007);
var diameter_22009 = quil.core.map_range(i_22008,(0),circle_count,tile_width,end_size);
var offset_22010 = quil.core.map_range(i_22008,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22010,(0),diameter_22009,diameter_22009);


var G__22011 = seq__21944_22004;
var G__22012 = chunk__21945_22005;
var G__22013 = count__21946_22006;
var G__22014 = (i__21947_22007 + (1));
seq__21944_22004 = G__22011;
chunk__21945_22005 = G__22012;
count__21946_22006 = G__22013;
i__21947_22007 = G__22014;
continue;
} else {
var temp__5735__auto___22015__$1 = cljs.core.seq(seq__21944_22004);
if(temp__5735__auto___22015__$1){
var seq__21944_22016__$1 = temp__5735__auto___22015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21944_22016__$1)){
var c__4351__auto___22017 = cljs.core.chunk_first(seq__21944_22016__$1);
var G__22018 = cljs.core.chunk_rest(seq__21944_22016__$1);
var G__22019 = c__4351__auto___22017;
var G__22020 = cljs.core.count(c__4351__auto___22017);
var G__22021 = (0);
seq__21944_22004 = G__22018;
chunk__21945_22005 = G__22019;
count__21946_22006 = G__22020;
i__21947_22007 = G__22021;
continue;
} else {
var i_22022 = cljs.core.first(seq__21944_22016__$1);
var diameter_22023 = quil.core.map_range(i_22022,(0),circle_count,tile_width,end_size);
var offset_22024 = quil.core.map_range(i_22022,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22024,(0),diameter_22023,diameter_22023);


var G__22025 = cljs.core.next(seq__21944_22016__$1);
var G__22026 = null;
var G__22027 = (0);
var G__22028 = (0);
seq__21944_22004 = G__22025;
chunk__21945_22005 = G__22026;
count__21946_22006 = G__22027;
i__21947_22007 = G__22028;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix();


var G__22029 = cljs.core.next(seq__21934_21995__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21934_21958 = G__22029;
chunk__21935_21959 = G__22030;
count__21936_21960 = G__22031;
i__21937_21961 = G__22032;
continue;
}
} else {
}
}
break;
}

var G__22033 = seq__21926;
var G__22034 = chunk__21931;
var G__22035 = count__21932;
var G__22036 = (i__21933 + (1));
seq__21926 = G__22033;
chunk__21931 = G__22034;
count__21932 = G__22035;
i__21933 = G__22036;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21926);
if(temp__5735__auto__){
var seq__21926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21926__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21926__$1);
var G__22037 = cljs.core.chunk_rest(seq__21926__$1);
var G__22038 = c__4351__auto__;
var G__22039 = cljs.core.count(c__4351__auto__);
var G__22040 = (0);
seq__21926 = G__22037;
chunk__21931 = G__22038;
count__21932 = G__22039;
i__21933 = G__22040;
continue;
} else {
var grid_y = cljs.core.first(seq__21926__$1);
var seq__21927_22041 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sketches.generative_desgin.P_02.P_2_1_3_01.tile_count_x));
var chunk__21928_22042 = null;
var count__21929_22043 = (0);
var i__21930_22044 = (0);
while(true){
if((i__21930_22044 < count__21929_22043)){
var grid_x_22045 = chunk__21928_22042.cljs$core$IIndexed$_nth$arity$2(null,i__21930_22044);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((tile_width * grid_x_22045),(tile_height * grid_y));

quil.core.scale.cljs$core$IFn$_invoke$arity$2((1),(tile_height / tile_width));

var G__21948_22046 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(4)) | (0));
switch (G__21948_22046) {
case (0):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.HALF_PI));

break;
case (1):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((0));

break;
case (2):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case (3):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21948_22046)].join('')));

}

var seq__21949_22048 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),circle_count));
var chunk__21950_22049 = null;
var count__21951_22050 = (0);
var i__21952_22051 = (0);
while(true){
if((i__21952_22051 < count__21951_22050)){
var i_22052 = chunk__21950_22049.cljs$core$IIndexed$_nth$arity$2(null,i__21952_22051);
var diameter_22053 = quil.core.map_range(i_22052,(0),circle_count,tile_width,end_size);
var offset_22054 = quil.core.map_range(i_22052,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22054,(0),diameter_22053,diameter_22053);


var G__22055 = seq__21949_22048;
var G__22056 = chunk__21950_22049;
var G__22057 = count__21951_22050;
var G__22058 = (i__21952_22051 + (1));
seq__21949_22048 = G__22055;
chunk__21950_22049 = G__22056;
count__21951_22050 = G__22057;
i__21952_22051 = G__22058;
continue;
} else {
var temp__5735__auto___22059__$1 = cljs.core.seq(seq__21949_22048);
if(temp__5735__auto___22059__$1){
var seq__21949_22060__$1 = temp__5735__auto___22059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21949_22060__$1)){
var c__4351__auto___22061 = cljs.core.chunk_first(seq__21949_22060__$1);
var G__22062 = cljs.core.chunk_rest(seq__21949_22060__$1);
var G__22063 = c__4351__auto___22061;
var G__22064 = cljs.core.count(c__4351__auto___22061);
var G__22065 = (0);
seq__21949_22048 = G__22062;
chunk__21950_22049 = G__22063;
count__21951_22050 = G__22064;
i__21952_22051 = G__22065;
continue;
} else {
var i_22066 = cljs.core.first(seq__21949_22060__$1);
var diameter_22067 = quil.core.map_range(i_22066,(0),circle_count,tile_width,end_size);
var offset_22068 = quil.core.map_range(i_22066,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22068,(0),diameter_22067,diameter_22067);


var G__22069 = cljs.core.next(seq__21949_22060__$1);
var G__22070 = null;
var G__22071 = (0);
var G__22072 = (0);
seq__21949_22048 = G__22069;
chunk__21950_22049 = G__22070;
count__21951_22050 = G__22071;
i__21952_22051 = G__22072;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix();


var G__22073 = seq__21927_22041;
var G__22074 = chunk__21928_22042;
var G__22075 = count__21929_22043;
var G__22076 = (i__21930_22044 + (1));
seq__21927_22041 = G__22073;
chunk__21928_22042 = G__22074;
count__21929_22043 = G__22075;
i__21930_22044 = G__22076;
continue;
} else {
var temp__5735__auto___22077__$1 = cljs.core.seq(seq__21927_22041);
if(temp__5735__auto___22077__$1){
var seq__21927_22078__$1 = temp__5735__auto___22077__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21927_22078__$1)){
var c__4351__auto___22079 = cljs.core.chunk_first(seq__21927_22078__$1);
var G__22080 = cljs.core.chunk_rest(seq__21927_22078__$1);
var G__22081 = c__4351__auto___22079;
var G__22082 = cljs.core.count(c__4351__auto___22079);
var G__22083 = (0);
seq__21927_22041 = G__22080;
chunk__21928_22042 = G__22081;
count__21929_22043 = G__22082;
i__21930_22044 = G__22083;
continue;
} else {
var grid_x_22084 = cljs.core.first(seq__21927_22078__$1);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2((tile_width * grid_x_22084),(tile_height * grid_y));

quil.core.scale.cljs$core$IFn$_invoke$arity$2((1),(tile_height / tile_width));

var G__21953_22085 = (quil.core.random.cljs$core$IFn$_invoke$arity$2((0),(4)) | (0));
switch (G__21953_22085) {
case (0):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((- quil.core.HALF_PI));

break;
case (1):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1((0));

break;
case (2):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.HALF_PI);

break;
case (3):
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(quil.core.PI);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21953_22085)].join('')));

}

var seq__21954_22087 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),circle_count));
var chunk__21955_22088 = null;
var count__21956_22089 = (0);
var i__21957_22090 = (0);
while(true){
if((i__21957_22090 < count__21956_22089)){
var i_22091 = chunk__21955_22088.cljs$core$IIndexed$_nth$arity$2(null,i__21957_22090);
var diameter_22092 = quil.core.map_range(i_22091,(0),circle_count,tile_width,end_size);
var offset_22093 = quil.core.map_range(i_22091,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22093,(0),diameter_22092,diameter_22092);


var G__22094 = seq__21954_22087;
var G__22095 = chunk__21955_22088;
var G__22096 = count__21956_22089;
var G__22097 = (i__21957_22090 + (1));
seq__21954_22087 = G__22094;
chunk__21955_22088 = G__22095;
count__21956_22089 = G__22096;
i__21957_22090 = G__22097;
continue;
} else {
var temp__5735__auto___22098__$2 = cljs.core.seq(seq__21954_22087);
if(temp__5735__auto___22098__$2){
var seq__21954_22099__$1 = temp__5735__auto___22098__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21954_22099__$1)){
var c__4351__auto___22100 = cljs.core.chunk_first(seq__21954_22099__$1);
var G__22101 = cljs.core.chunk_rest(seq__21954_22099__$1);
var G__22102 = c__4351__auto___22100;
var G__22103 = cljs.core.count(c__4351__auto___22100);
var G__22104 = (0);
seq__21954_22087 = G__22101;
chunk__21955_22088 = G__22102;
count__21956_22089 = G__22103;
i__21957_22090 = G__22104;
continue;
} else {
var i_22105 = cljs.core.first(seq__21954_22099__$1);
var diameter_22106 = quil.core.map_range(i_22105,(0),circle_count,tile_width,end_size);
var offset_22107 = quil.core.map_range(i_22105,(0),circle_count,(0),end_offset);
quil.core.ellipse(offset_22107,(0),diameter_22106,diameter_22106);


var G__22108 = cljs.core.next(seq__21954_22099__$1);
var G__22109 = null;
var G__22110 = (0);
var G__22111 = (0);
seq__21954_22087 = G__22108;
chunk__21955_22088 = G__22109;
count__21956_22089 = G__22110;
i__21957_22090 = G__22111;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix();


var G__22112 = cljs.core.next(seq__21927_22078__$1);
var G__22113 = null;
var G__22114 = (0);
var G__22115 = (0);
seq__21927_22041 = G__22112;
chunk__21928_22042 = G__22113;
count__21929_22043 = G__22114;
i__21930_22044 = G__22115;
continue;
}
} else {
}
}
break;
}

var G__22116 = cljs.core.next(seq__21926__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__21926 = G__22116;
chunk__21931 = G__22117;
count__21932 = G__22118;
i__21933 = G__22119;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.generative_desgin.P_02.P_2_1_3_01.run = (function sketches$generative_desgin$P_02$P_2_1_3_01$run(host){
sketches.generative_desgin.P_02.P_2_1_3_01.complex_modules_in_grid = (function sketches$generative_desgin$P_02$P_2_1_3_01$run_$_complex_modules_in_grid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22120__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22121__i = 0, G__22121__a = new Array(arguments.length -  0);
while (G__22121__i < G__22121__a.length) {G__22121__a[G__22121__i] = arguments[G__22121__i + 0]; ++G__22121__i;}
  args = new cljs.core.IndexedSeq(G__22121__a,0,null);
} 
return G__22120__delegate.call(this,args);};
G__22120.cljs$lang$maxFixedArity = 0;
G__22120.cljs$lang$applyTo = (function (arglist__22122){
var args = cljs.core.seq(arglist__22122);
return G__22120__delegate(args);
});
G__22120.cljs$core$IFn$_invoke$arity$variadic = G__22120__delegate;
return G__22120;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_3_01.update_state))?(function() { 
var G__22123__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_3_01.update_state,args);
};
var G__22123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22124__i = 0, G__22124__a = new Array(arguments.length -  0);
while (G__22124__i < G__22124__a.length) {G__22124__a[G__22124__i] = arguments[G__22124__i + 0]; ++G__22124__i;}
  args = new cljs.core.IndexedSeq(G__22124__a,0,null);
} 
return G__22123__delegate.call(this,args);};
G__22123.cljs$lang$maxFixedArity = 0;
G__22123.cljs$lang$applyTo = (function (arglist__22125){
var args = cljs.core.seq(arglist__22125);
return G__22123__delegate(args);
});
G__22123.cljs$core$IFn$_invoke$arity$variadic = G__22123__delegate;
return G__22123;
})()
:sketches.generative_desgin.P_02.P_2_1_3_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_3_01.setup))?(function() { 
var G__22126__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_3_01.setup,args);
};
var G__22126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22127__i = 0, G__22127__a = new Array(arguments.length -  0);
while (G__22127__i < G__22127__a.length) {G__22127__a[G__22127__i] = arguments[G__22127__i + 0]; ++G__22127__i;}
  args = new cljs.core.IndexedSeq(G__22127__a,0,null);
} 
return G__22126__delegate.call(this,args);};
G__22126.cljs$lang$maxFixedArity = 0;
G__22126.cljs$lang$applyTo = (function (arglist__22128){
var args = cljs.core.seq(arglist__22128);
return G__22126__delegate(args);
});
G__22126.cljs$core$IFn$_invoke$arity$variadic = G__22126__delegate;
return G__22126;
})()
:sketches.generative_desgin.P_02.P_2_1_3_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_1_3_01.draw))?(function() { 
var G__22129__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_1_3_01.draw,args);
};
var G__22129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22130__i = 0, G__22130__a = new Array(arguments.length -  0);
while (G__22130__i < G__22130__a.length) {G__22130__a[G__22130__i] = arguments[G__22130__i + 0]; ++G__22130__i;}
  args = new cljs.core.IndexedSeq(G__22130__a,0,null);
} 
return G__22129__delegate.call(this,args);};
G__22129.cljs$lang$maxFixedArity = 0;
G__22129.cljs$lang$applyTo = (function (arglist__22131){
var args = cljs.core.seq(arglist__22131);
return G__22129__delegate(args);
});
G__22129.cljs$core$IFn$_invoke$arity$variadic = G__22129__delegate;
return G__22129;
})()
:sketches.generative_desgin.P_02.P_2_1_3_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_1_3_01.complex_modules_in_grid', sketches.generative_desgin.P_02.P_2_1_3_01.complex_modules_in_grid);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_1_3_01.complex_modules_in_grid,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22132__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22133__i = 0, G__22133__a = new Array(arguments.length -  0);
while (G__22133__i < G__22133__a.length) {G__22133__a[G__22133__i] = arguments[G__22133__i + 0]; ++G__22133__i;}
  args = new cljs.core.IndexedSeq(G__22133__a,0,null);
} 
return G__22132__delegate.call(this,args);};
G__22132.cljs$lang$maxFixedArity = 0;
G__22132.cljs$lang$applyTo = (function (arglist__22134){
var args = cljs.core.seq(arglist__22134);
return G__22132__delegate(args);
});
G__22132.cljs$core$IFn$_invoke$arity$variadic = G__22132__delegate;
return G__22132;
})()
:host)], null));
}
});
