// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sketches.icons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
sketches.icons.icon = (function sketches$icons$icon(path,size,color){
var sizes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$small,(12),cljs.core.cst$kw$medium,(24),cljs.core.cst$kw$large,(48)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(size.cljs$core$IFn$_invoke$arity$1 ? size.cljs$core$IFn$_invoke$arity$1(sizes) : size.call(null,sizes)),cljs.core.cst$kw$height,(size.cljs$core$IFn$_invoke$arity$1 ? size.cljs$core$IFn$_invoke$arity$1(sizes) : size.call(null,sizes)),cljs.core.cst$kw$viewBox,"0 0 24 24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,path,cljs.core.cst$kw$fill,color], null)], null)], null);
});
sketches.icons.play_icon = (function sketches$icons$play_icon(var_args){
var G__20250 = arguments.length;
switch (G__20250) {
case 0:
return sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$0 = (function (){
return sketches.icons.icon("M3 22v-20l18 10-18 10z",cljs.core.cst$kw$medium,"black");
});

sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$1 = (function (size){
return sketches.icons.icon("M3 22v-20l18 10-18 10z",size,"black");
});

sketches.icons.play_icon.cljs$core$IFn$_invoke$arity$2 = (function (size,color){
return sketches.icons.icon("M3 22v-20l18 10-18 10z",size,color);
});

sketches.icons.play_icon.cljs$lang$maxFixedArity = 2;

sketches.icons.pause_icon = (function sketches$icons$pause_icon(var_args){
var G__20253 = arguments.length;
switch (G__20253) {
case 0:
return sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$0 = (function (){
return sketches.icons.icon("M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z",cljs.core.cst$kw$medium,"black");
});

sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$1 = (function (size){
return sketches.icons.icon("M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z",size,"black");
});

sketches.icons.pause_icon.cljs$core$IFn$_invoke$arity$2 = (function (size,color){
return sketches.icons.icon("M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z",size,color);
});

sketches.icons.pause_icon.cljs$lang$maxFixedArity = 2;

sketches.icons.stop_icon = (function sketches$icons$stop_icon(var_args){
var G__20256 = arguments.length;
switch (G__20256) {
case 0:
return sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$0 = (function (){
return sketches.icons.icon("M2 2h20v20h-20z",cljs.core.cst$kw$medium,"black");
});

sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$1 = (function (size){
return sketches.icons.icon("M2 2h20v20h-20z",size,"black");
});

sketches.icons.stop_icon.cljs$core$IFn$_invoke$arity$2 = (function (size,color){
return sketches.icons.icon("M2 2h20v20h-20z",size,color);
});

sketches.icons.stop_icon.cljs$lang$maxFixedArity = 2;

sketches.icons.reload_icon = (function sketches$icons$reload_icon(var_args){
var G__20259 = arguments.length;
switch (G__20259) {
case 0:
return sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$0 = (function (){
return sketches.icons.icon("M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z",cljs.core.cst$kw$medium,"black");
});

sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$1 = (function (size){
return sketches.icons.icon("M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z",size,"black");
});

sketches.icons.reload_icon.cljs$core$IFn$_invoke$arity$2 = (function (size,color){
return sketches.icons.icon("M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z",size,color);
});

sketches.icons.reload_icon.cljs$lang$maxFixedArity = 2;

