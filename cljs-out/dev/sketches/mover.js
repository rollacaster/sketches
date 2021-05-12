// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.mover');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('sketches.vector');
sketches.mover.apply_force = (function sketches$mover$apply_force(p__17992,force){
var map__17993 = p__17992;
var map__17993__$1 = ((((!((map__17993 == null)))?(((((map__17993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17993):map__17993);
var mover = map__17993__$1;
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$mass);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$acceleration,((function (map__17993,map__17993__$1,mover,mass){
return (function (p1__17991_SHARP_){
return sketches.vector.add.cljs$core$IFn$_invoke$arity$2(p1__17991_SHARP_,sketches.vector.div(force,mass));
});})(map__17993,map__17993__$1,mover,mass))
);
});
sketches.mover.update_mover = (function sketches$mover$update_mover(p__17995,acceleration){
var map__17996 = p__17995;
var map__17996__$1 = ((((!((map__17996 == null)))?(((((map__17996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17996):map__17996);
var mover = map__17996__$1;
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17996__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17996__$1,cljs.core.cst$kw$location);
var velocity__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(velocity,acceleration);
var location__$1 = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(location,velocity__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,location__$1),cljs.core.cst$kw$velocity,velocity__$1),cljs.core.cst$kw$accleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
sketches.mover.keep_inside = (function sketches$mover$keep_inside(mover){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,(function (p__17998){
var vec__17999 = p__17998;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17999,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17999,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?quil.core.width():(((x < (0)))?(0):x
)),(((y > quil.core.height()))?quil.core.height():(((y < (0)))?(0):y
))], null);
}));
});
sketches.mover.bounce_inside = (function sketches$mover$bounce_inside(p__18002){
var map__18003 = p__18002;
var map__18003__$1 = ((((!((map__18003 == null)))?(((((map__18003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18003):map__18003);
var mover = map__18003__$1;
var vec__18004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18003__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(1),null);
var vec__18007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18003__$1,cljs.core.cst$kw$velocity);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x > quil.core.width()))?((-1) * vx):(((x < (0)))?((-1) * vx):vx
)),(((y > quil.core.height()))?((-1) * vy):(((y < (0)))?((-1) * vy):vy
))], null));
});
sketches.mover.check_edges = (function sketches$mover$check_edges(mover){
var map__18011 = mover;
var map__18011__$1 = ((((!((map__18011 == null)))?(((((map__18011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18011):map__18011);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,cljs.core.cst$kw$location);
var vec__18012 = location;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012,(1),null);
var mover__$1 = (((x > quil.core.width()))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),y], null)),cljs.core.cst$kw$velocity,((function (map__18011,map__18011__$1,location,vec__18012,x,y){
return (function (p__18016){
var vec__18017 = p__18016;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((-1) * x__$1),y__$1],null));
});})(map__18011,map__18011__$1,location,vec__18012,x,y))
):(((x < (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$velocity,((function (map__18011,map__18011__$1,location,vec__18012,x,y){
return (function (p__18020){
var vec__18021 = p__18020;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18021,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18021,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((-1) * x__$1),y__$1],null));
});})(map__18011,map__18011__$1,location,vec__18012,x,y))
),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)):mover));
if((y > quil.core.height())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(mover__$1,cljs.core.cst$kw$velocity,((function (map__18011,map__18011__$1,location,vec__18012,x,y,mover__$1){
return (function (p__18024){
var vec__18025 = p__18024;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18025,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18025,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x__$1,((-1) * y__$1)],null));
});})(map__18011,map__18011__$1,location,vec__18012,x,y,mover__$1))
),cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,quil.core.height()], null));
} else {
return mover__$1;
}
});
sketches.mover.move_through = (function sketches$mover$move_through(mover){
var map__18028 = mover;
var map__18028__$1 = ((((!((map__18028 == null)))?(((((map__18028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18028):map__18028);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,cljs.core.cst$kw$location);
var vec__18029 = location;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029,(1),null);
if((x > quil.core.width())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null));
} else {
if((x < (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),y], null));
} else {
if((y > quil.core.height())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null));
} else {
if((y < (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,quil.core.height()], null));
} else {
return mover;

}
}
}
}
});
sketches.mover.create_mover = (function sketches$mover$create_mover(mass,location){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$mass,mass,cljs.core.cst$kw$location,location,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),cljs.core.cst$kw$a_DASH_velocity,0.0,cljs.core.cst$kw$a_DASH_acceleration,0.0,cljs.core.cst$kw$angle,0.0], null);
});
sketches.mover.compute_position = (function sketches$mover$compute_position(p__18033){
var map__18034 = p__18033;
var map__18034__$1 = ((((!((map__18034 == null)))?(((((map__18034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18034):map__18034);
var mover = map__18034__$1;
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$location);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$angle);
var a_velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$a_DASH_velocity);
var a_acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034__$1,cljs.core.cst$kw$a_DASH_acceleration);
var new_velocity = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(acceleration,velocity);
var new_location = sketches.vector.add.cljs$core$IFn$_invoke$arity$2(new_velocity,location);
var new_a_velocity = (a_acceleration + a_velocity);
var new_angle = (new_a_velocity + angle);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.cst$kw$velocity,new_velocity),cljs.core.cst$kw$location,new_location),cljs.core.cst$kw$a_DASH_velocity,new_a_velocity),cljs.core.cst$kw$angle,new_angle),cljs.core.cst$kw$a_DASH_acceleration,(0)),cljs.core.cst$kw$acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
sketches.mover.pol_to_cart = (function sketches$mover$pol_to_cart(p__18036){
var vec__18037 = p__18036;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * quil.core.cos(phi)),(r * quil.core.sin(phi))], null);
});
sketches.mover.draw_stats = (function sketches$mover$draw_stats(p__18040){
var map__18041 = p__18040;
var map__18041__$1 = ((((!((map__18041 == null)))?(((((map__18041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18041):map__18041);
var vec__18042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$location);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(1),null);
var vec__18045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$velocity);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18045,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18045,(1),null);
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$acceleration);
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$velocity);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$location);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$angle);
var a_velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$a_DASH_velocity);
var a_acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$a_DASH_acceleration);
quil.core.push_matrix();

quil.core.rect_mode(cljs.core.cst$kw$corner);

quil.core.translate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() * 0.5),(quil.core.height() * 0.01)], null));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(quil.core.width() * 0.4),(105));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

var tr__14574__auto___18052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(20)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14574__auto___18052);

quil.core.text.cljs$core$IFn$_invoke$arity$3(["Location ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.round(x),quil.core.round(y)], null))].join(''),(0),(0));

quil.core.text.cljs$core$IFn$_invoke$arity$3(["Velocity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.round(vx),quil.core.round(vy)], null))].join(''),(0),(15));

quil.core.text.cljs$core$IFn$_invoke$arity$3(["Polar ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var vec__18049 = sketches.mover.pol_to_cart(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.round(r),quil.core.round(phi)], null);
})())].join(''),(0),(30));

quil.core.text.cljs$core$IFn$_invoke$arity$3(["Angle ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.degrees(quil.core.atan2(vy,vx)))].join(''),(0),(45));

quil.core.text.cljs$core$IFn$_invoke$arity$3(["A-Velocity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_velocity)].join(''),(0),(60));
}finally {quil.core.pop_matrix();
}
return quil.core.pop_matrix();
});
