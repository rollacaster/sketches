// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.generative_desgin.P_02.P_2_2_6_01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('sketches.vector');
sketches.generative_desgin.P_02.P_2_2_6_01.max_angle = (360);
sketches.generative_desgin.P_02.P_2_2_6_01.setup = (function sketches$generative_desgin$P_02$P_2_2_6_01$setup(){
quil.core.color_mode.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$hsb,(360),(100),(100),(100));

quil.core.no_fill();

quil.core.stroke_weight((1));

var joints = (5);
var speed_relation = (2);
var center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$show_DASH_pendulum,cljs.core.cst$kw$speed_DASH_relation,cljs.core.cst$kw$line_DASH_length,cljs.core.cst$kw$angle,cljs.core.cst$kw$center,cljs.core.cst$kw$joints,cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.cst$kw$show_DASH_pendulum_DASH_path,cljs.core.cst$kw$pendulum_DASH_paths],[true,speed_relation,(40),(0),center,joints,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(center))),true,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))]);
});
sketches.generative_desgin.P_02.P_2_2_6_01.update_state = (function sketches$generative_desgin$P_02$P_2_2_6_01$update_state(p__22791){
var map__22792 = p__22791;
var map__22792__$1 = ((((!((map__22792 == null)))?(((((map__22792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22792):map__22792);
var state = map__22792__$1;
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$angle);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$speed);
var joints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$joints);
var speed_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$speed_DASH_relation);
var line_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$line_DASH_length);
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$center);
var pendulum_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$pendulum_DASH_paths);
var pendulum_centers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.cst$kw$pendulum_DASH_centers);
var vec__22794 = (((angle <= (sketches.generative_desgin.P_02.P_2_2_6_01.max_angle + speed)))?(function (){var i = (0);
var pos = center;
var paths = pendulum_paths;
var centers = pendulum_centers;
while(true){
if((i < joints)){
var a = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(i,(2)),(0)))?(1):(-1)) * (angle * Math.pow(speed_relation,i)));
var next_pos = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(sketches.vector.mult(sketches.vector.from_angle.cljs$core$IFn$_invoke$arity$1(quil.core.radians(a)),(((joints - i) / joints) * line_length)),pos);
var G__22801 = (i + (1));
var G__22802 = next_pos;
var G__22803 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(paths,i,cljs.core.conj,cljs.core.vec(next_pos));
var G__22804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(centers,i,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?center:cljs.core.last(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paths,(i - (1))))));
i = G__22801;
pos = G__22802;
paths = G__22803;
centers = G__22804;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paths,centers], null);
}
break;
}
})():cljs.core.PersistentVector.EMPTY);
var pendulum_paths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(0),null);
var pendulum_centers__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(1),null);
var speed__$1 = (((8) / (function (){var G__22797 = 1.75;
var G__22798 = (joints - (1));
return Math.pow(G__22797,G__22798);
})()) / (function (){var G__22799 = speed_relation;
var G__22800 = (speed_relation - (1));
return Math.pow(G__22799,G__22800);
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$angle,cljs.core._PLUS_,speed__$1),cljs.core.cst$kw$pendulum_DASH_paths,pendulum_paths__$1),cljs.core.cst$kw$pendulum_DASH_centers,pendulum_centers__$1);
});
sketches.generative_desgin.P_02.P_2_2_6_01.draw = (function sketches$generative_desgin$P_02$P_2_2_6_01$draw(p__22809){
var map__22810 = p__22809;
var map__22810__$1 = ((((!((map__22810 == null)))?(((((map__22810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22810):map__22810);
var joints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22810__$1,cljs.core.cst$kw$joints);
var pendulum_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22810__$1,cljs.core.cst$kw$pendulum_DASH_paths);
var pendulum_centers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22810__$1,cljs.core.cst$kw$pendulum_DASH_centers);
var show_pendulum_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22810__$1,cljs.core.cst$kw$show_DASH_pendulum_DASH_path);
var show_pendulum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22810__$1,cljs.core.cst$kw$show_DASH_pendulum);
quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(100));

if(cljs.core.truth_(show_pendulum)){
var seq__22812_22864 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__22810,map__22810__$1,joints,pendulum_paths,pendulum_centers,show_pendulum_path,show_pendulum){
return (function (p1__22805_SHARP_,p2__22806_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__22805_SHARP_,p2__22806_SHARP_],null));
});})(map__22810,map__22810__$1,joints,pendulum_paths,pendulum_centers,show_pendulum_path,show_pendulum))
,pendulum_paths));
var chunk__22813_22865 = null;
var count__22814_22866 = (0);
var i__22815_22867 = (0);
while(true){
if((i__22815_22867 < count__22814_22866)){
var vec__22816_22868 = chunk__22813_22865.cljs$core$IIndexed$_nth$arity$2(null,i__22815_22867);
var i_22869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22816_22868,(0),null);
var pendulum_path_22870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22816_22868,(1),null);
var vec__22819_22871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pendulum_centers,i_22869);
var x1_22872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_22871,(0),null);
var y1_22873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819_22871,(1),null);
var vec__22822_22874 = cljs.core.last(pendulum_path_22870);
var x2_22875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_22874,(0),null);
var y2_22876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_22874,(1),null);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(10));

quil.core.ellipse(x2_22875,y2_22876,(4),(4));

quil.core.no_fill();

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),(10));

quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22872,y1_22873,x2_22875,y2_22876);


var G__22877 = seq__22812_22864;
var G__22878 = chunk__22813_22865;
var G__22879 = count__22814_22866;
var G__22880 = (i__22815_22867 + (1));
seq__22812_22864 = G__22877;
chunk__22813_22865 = G__22878;
count__22814_22866 = G__22879;
i__22815_22867 = G__22880;
continue;
} else {
var temp__5735__auto___22881 = cljs.core.seq(seq__22812_22864);
if(temp__5735__auto___22881){
var seq__22812_22882__$1 = temp__5735__auto___22881;
if(cljs.core.chunked_seq_QMARK_(seq__22812_22882__$1)){
var c__4351__auto___22883 = cljs.core.chunk_first(seq__22812_22882__$1);
var G__22884 = cljs.core.chunk_rest(seq__22812_22882__$1);
var G__22885 = c__4351__auto___22883;
var G__22886 = cljs.core.count(c__4351__auto___22883);
var G__22887 = (0);
seq__22812_22864 = G__22884;
chunk__22813_22865 = G__22885;
count__22814_22866 = G__22886;
i__22815_22867 = G__22887;
continue;
} else {
var vec__22825_22888 = cljs.core.first(seq__22812_22882__$1);
var i_22889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22825_22888,(0),null);
var pendulum_path_22890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22825_22888,(1),null);
var vec__22828_22891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pendulum_centers,i_22889);
var x1_22892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22828_22891,(0),null);
var y1_22893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22828_22891,(1),null);
var vec__22831_22894 = cljs.core.last(pendulum_path_22890);
var x2_22895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22831_22894,(0),null);
var y2_22896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22831_22894,(1),null);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$2((0),(10));

quil.core.ellipse(x2_22895,y2_22896,(4),(4));

quil.core.no_fill();

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((0),(10));

quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22892,y1_22893,x2_22895,y2_22896);


var G__22897 = cljs.core.next(seq__22812_22882__$1);
var G__22898 = null;
var G__22899 = (0);
var G__22900 = (0);
seq__22812_22864 = G__22897;
chunk__22813_22865 = G__22898;
count__22814_22866 = G__22899;
i__22815_22867 = G__22900;
continue;
}
} else {
}
}
break;
}
} else {
}

quil.core.no_fill();

quil.core.no_stroke();

if(cljs.core.truth_(show_pendulum_path)){
var seq__22834 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__22810,map__22810__$1,joints,pendulum_paths,pendulum_centers,show_pendulum_path,show_pendulum){
return (function (p1__22807_SHARP_,p2__22808_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__22807_SHARP_,p2__22808_SHARP_],null));
});})(map__22810,map__22810__$1,joints,pendulum_paths,pendulum_centers,show_pendulum_path,show_pendulum))
,pendulum_paths));
var chunk__22835 = null;
var count__22836 = (0);
var i__22837 = (0);
while(true){
if((i__22837 < count__22836)){
var vec__22838 = chunk__22835.cljs$core$IIndexed$_nth$arity$2(null,i__22837);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(0),null);
var pendulum_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(1),null);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var hue_22901 = quil.core.map_range(i,(0),joints,(120),(360));
quil.core.stroke.cljs$core$IFn$_invoke$arity$4(hue_22901,(80),(60),(50));

var seq__22841_22902 = cljs.core.seq(pendulum_path);
var chunk__22842_22903 = null;
var count__22843_22904 = (0);
var i__22844_22905 = (0);
while(true){
if((i__22844_22905 < count__22843_22904)){
var vec__22845_22906 = chunk__22842_22903.cljs$core$IIndexed$_nth$arity$2(null,i__22844_22905);
var x_22907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22845_22906,(0),null);
var y_22908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22845_22906,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22907,y_22908);


var G__22909 = seq__22841_22902;
var G__22910 = chunk__22842_22903;
var G__22911 = count__22843_22904;
var G__22912 = (i__22844_22905 + (1));
seq__22841_22902 = G__22909;
chunk__22842_22903 = G__22910;
count__22843_22904 = G__22911;
i__22844_22905 = G__22912;
continue;
} else {
var temp__5735__auto___22913 = cljs.core.seq(seq__22841_22902);
if(temp__5735__auto___22913){
var seq__22841_22914__$1 = temp__5735__auto___22913;
if(cljs.core.chunked_seq_QMARK_(seq__22841_22914__$1)){
var c__4351__auto___22915 = cljs.core.chunk_first(seq__22841_22914__$1);
var G__22916 = cljs.core.chunk_rest(seq__22841_22914__$1);
var G__22917 = c__4351__auto___22915;
var G__22918 = cljs.core.count(c__4351__auto___22915);
var G__22919 = (0);
seq__22841_22902 = G__22916;
chunk__22842_22903 = G__22917;
count__22843_22904 = G__22918;
i__22844_22905 = G__22919;
continue;
} else {
var vec__22848_22920 = cljs.core.first(seq__22841_22914__$1);
var x_22921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848_22920,(0),null);
var y_22922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22848_22920,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22921,y_22922);


var G__22923 = cljs.core.next(seq__22841_22914__$1);
var G__22924 = null;
var G__22925 = (0);
var G__22926 = (0);
seq__22841_22902 = G__22923;
chunk__22842_22903 = G__22924;
count__22843_22904 = G__22925;
i__22844_22905 = G__22926;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();


var G__22927 = seq__22834;
var G__22928 = chunk__22835;
var G__22929 = count__22836;
var G__22930 = (i__22837 + (1));
seq__22834 = G__22927;
chunk__22835 = G__22928;
count__22836 = G__22929;
i__22837 = G__22930;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22834);
if(temp__5735__auto__){
var seq__22834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22834__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22834__$1);
var G__22931 = cljs.core.chunk_rest(seq__22834__$1);
var G__22932 = c__4351__auto__;
var G__22933 = cljs.core.count(c__4351__auto__);
var G__22934 = (0);
seq__22834 = G__22931;
chunk__22835 = G__22932;
count__22836 = G__22933;
i__22837 = G__22934;
continue;
} else {
var vec__22851 = cljs.core.first(seq__22834__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851,(0),null);
var pendulum_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851,(1),null);
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var hue_22935 = quil.core.map_range(i,(0),joints,(120),(360));
quil.core.stroke.cljs$core$IFn$_invoke$arity$4(hue_22935,(80),(60),(50));

var seq__22854_22936 = cljs.core.seq(pendulum_path);
var chunk__22855_22937 = null;
var count__22856_22938 = (0);
var i__22857_22939 = (0);
while(true){
if((i__22857_22939 < count__22856_22938)){
var vec__22858_22940 = chunk__22855_22937.cljs$core$IIndexed$_nth$arity$2(null,i__22857_22939);
var x_22941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858_22940,(0),null);
var y_22942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858_22940,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22941,y_22942);


var G__22943 = seq__22854_22936;
var G__22944 = chunk__22855_22937;
var G__22945 = count__22856_22938;
var G__22946 = (i__22857_22939 + (1));
seq__22854_22936 = G__22943;
chunk__22855_22937 = G__22944;
count__22856_22938 = G__22945;
i__22857_22939 = G__22946;
continue;
} else {
var temp__5735__auto___22947__$1 = cljs.core.seq(seq__22854_22936);
if(temp__5735__auto___22947__$1){
var seq__22854_22948__$1 = temp__5735__auto___22947__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22854_22948__$1)){
var c__4351__auto___22949 = cljs.core.chunk_first(seq__22854_22948__$1);
var G__22950 = cljs.core.chunk_rest(seq__22854_22948__$1);
var G__22951 = c__4351__auto___22949;
var G__22952 = cljs.core.count(c__4351__auto___22949);
var G__22953 = (0);
seq__22854_22936 = G__22950;
chunk__22855_22937 = G__22951;
count__22856_22938 = G__22952;
i__22857_22939 = G__22953;
continue;
} else {
var vec__22861_22954 = cljs.core.first(seq__22854_22948__$1);
var x_22955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_22954,(0),null);
var y_22956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861_22954,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22955,y_22956);


var G__22957 = cljs.core.next(seq__22854_22948__$1);
var G__22958 = null;
var G__22959 = (0);
var G__22960 = (0);
seq__22854_22936 = G__22957;
chunk__22855_22937 = G__22958;
count__22856_22938 = G__22959;
i__22857_22939 = G__22960;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();


var G__22961 = cljs.core.next(seq__22834__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22834 = G__22961;
chunk__22835 = G__22962;
count__22836 = G__22963;
i__22837 = G__22964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
sketches.generative_desgin.P_02.P_2_2_6_01.key_pressed = (function sketches$generative_desgin$P_02$P_2_2_6_01$key_pressed(state,p__22967){
var map__22968 = p__22967;
var map__22968__$1 = ((((!((map__22968 == null)))?(((((map__22968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22968):map__22968);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22968__$1,cljs.core.cst$kw$key);
var G__22970 = key;
var G__22970__$1 = (((G__22970 instanceof cljs.core.Keyword))?G__22970.fqn:null);
switch (G__22970__$1) {
case "ArrowUp":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$line_DASH_length,cljs.core._PLUS_,(2)),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "ArrowDown":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$line_DASH_length,cljs.core._,(2)),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "ArrowLeft":
var joints = (function (){var G__22971 = (1);
var G__22972 = (cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state) - (1));
return Math.max(G__22971,G__22972);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$joints,joints),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "ArrowRight":
var joints = (function (){var G__22973 = (10);
var G__22974 = (cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state) + (1));
return Math.min(G__22973,G__22974);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$joints,joints),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(joints,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "+":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$speed_DASH_relation,((function (G__22970,G__22970__$1,map__22968,map__22968__$1,key){
return (function (p1__22965_SHARP_){
var G__22975 = (5);
var G__22976 = (p1__22965_SHARP_ + 0.5);
return Math.min(G__22975,G__22976);
});})(G__22970,G__22970__$1,map__22968,map__22968__$1,key))
),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "-":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$speed_DASH_relation,((function (G__22970,G__22970__$1,map__22968,map__22968__$1,key){
return (function (p1__22966_SHARP_){
var G__22977 = (2);
var G__22978 = (p1__22966_SHARP_ - 0.5);
return Math.max(G__22977,G__22978);
});})(G__22970,G__22970__$1,map__22968,map__22968__$1,key))
),cljs.core.cst$kw$angle,(0)),cljs.core.cst$kw$pendulum_DASH_paths,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)))),cljs.core.cst$kw$pendulum_DASH_centers,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$joints.cljs$core$IFn$_invoke$arity$1(state),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(state)))));

break;
case "1":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$show_DASH_pendulum,cljs.core.not);

break;
case "2":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$show_DASH_pendulum_DASH_path,cljs.core.not);

break;
default:
return state;

}
});
sketches.generative_desgin.P_02.P_2_2_6_01.run = (function sketches$generative_desgin$P_02$P_2_2_6_01$run(host){
sketches.generative_desgin.P_02.P_2_2_6_01.agents_on_a_pendulum = (function sketches$generative_desgin$P_02$P_2_2_6_01$run_$_agents_on_a_pendulum(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22980__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22981__i = 0, G__22981__a = new Array(arguments.length -  0);
while (G__22981__i < G__22981__a.length) {G__22981__a[G__22981__i] = arguments[G__22981__i + 0]; ++G__22981__i;}
  args = new cljs.core.IndexedSeq(G__22981__a,0,null);
} 
return G__22980__delegate.call(this,args);};
G__22980.cljs$lang$maxFixedArity = 0;
G__22980.cljs$lang$applyTo = (function (arglist__22982){
var args = cljs.core.seq(arglist__22982);
return G__22980__delegate(args);
});
G__22980.cljs$core$IFn$_invoke$arity$variadic = G__22980__delegate;
return G__22980;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_6_01.update_state))?(function() { 
var G__22983__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_6_01.update_state,args);
};
var G__22983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22984__i = 0, G__22984__a = new Array(arguments.length -  0);
while (G__22984__i < G__22984__a.length) {G__22984__a[G__22984__i] = arguments[G__22984__i + 0]; ++G__22984__i;}
  args = new cljs.core.IndexedSeq(G__22984__a,0,null);
} 
return G__22983__delegate.call(this,args);};
G__22983.cljs$lang$maxFixedArity = 0;
G__22983.cljs$lang$applyTo = (function (arglist__22985){
var args = cljs.core.seq(arglist__22985);
return G__22983__delegate(args);
});
G__22983.cljs$core$IFn$_invoke$arity$variadic = G__22983__delegate;
return G__22983;
})()
:sketches.generative_desgin.P_02.P_2_2_6_01.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_6_01.setup))?(function() { 
var G__22986__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_6_01.setup,args);
};
var G__22986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22987__i = 0, G__22987__a = new Array(arguments.length -  0);
while (G__22987__i < G__22987__a.length) {G__22987__a[G__22987__i] = arguments[G__22987__i + 0]; ++G__22987__i;}
  args = new cljs.core.IndexedSeq(G__22987__a,0,null);
} 
return G__22986__delegate.call(this,args);};
G__22986.cljs$lang$maxFixedArity = 0;
G__22986.cljs$lang$applyTo = (function (arglist__22988){
var args = cljs.core.seq(arglist__22988);
return G__22986__delegate(args);
});
G__22986.cljs$core$IFn$_invoke$arity$variadic = G__22986__delegate;
return G__22986;
})()
:sketches.generative_desgin.P_02.P_2_2_6_01.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_6_01.key_pressed))?(function() { 
var G__22989__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_6_01.key_pressed,args);
};
var G__22989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22990__i = 0, G__22990__a = new Array(arguments.length -  0);
while (G__22990__i < G__22990__a.length) {G__22990__a[G__22990__i] = arguments[G__22990__i + 0]; ++G__22990__i;}
  args = new cljs.core.IndexedSeq(G__22990__a,0,null);
} 
return G__22989__delegate.call(this,args);};
G__22989.cljs$lang$maxFixedArity = 0;
G__22989.cljs$lang$applyTo = (function (arglist__22991){
var args = cljs.core.seq(arglist__22991);
return G__22989__delegate(args);
});
G__22989.cljs$core$IFn$_invoke$arity$variadic = G__22989__delegate;
return G__22989;
})()
:sketches.generative_desgin.P_02.P_2_2_6_01.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(sketches.generative_desgin.P_02.P_2_2_6_01.draw))?(function() { 
var G__22992__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sketches.generative_desgin.P_02.P_2_2_6_01.draw,args);
};
var G__22992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22993__i = 0, G__22993__a = new Array(arguments.length -  0);
while (G__22993__i < G__22993__a.length) {G__22993__a[G__22993__i] = arguments[G__22993__i + 0]; ++G__22993__i;}
  args = new cljs.core.IndexedSeq(G__22993__a,0,null);
} 
return G__22992__delegate.call(this,args);};
G__22992.cljs$lang$maxFixedArity = 0;
G__22992.cljs$lang$applyTo = (function (arglist__22994){
var args = cljs.core.seq(arglist__22994);
return G__22992__delegate(args);
});
G__22992.cljs$core$IFn$_invoke$arity$variadic = G__22992__delegate;
return G__22992;
})()
:sketches.generative_desgin.P_02.P_2_2_6_01.draw)], 0));
});
goog.exportSymbol('sketches.generative_desgin.P_02.P_2_2_6_01.agents_on_a_pendulum', sketches.generative_desgin.P_02.P_2_2_6_01.agents_on_a_pendulum);

if(cljs.core.truth_(cljs.core.some((function (p1__13699__13700__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13699__13700__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,sketches.generative_desgin.P_02.P_2_2_6_01.agents_on_a_pendulum,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__22995__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__22995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22996__i = 0, G__22996__a = new Array(arguments.length -  0);
while (G__22996__i < G__22996__a.length) {G__22996__a[G__22996__i] = arguments[G__22996__i + 0]; ++G__22996__i;}
  args = new cljs.core.IndexedSeq(G__22996__a,0,null);
} 
return G__22995__delegate.call(this,args);};
G__22995.cljs$lang$maxFixedArity = 0;
G__22995.cljs$lang$applyTo = (function (arglist__22997){
var args = cljs.core.seq(arglist__22997);
return G__22995__delegate(args);
});
G__22995.cljs$core$IFn$_invoke$arity$variadic = G__22995__delegate;
return G__22995;
})()
:host)], null));
}
});
