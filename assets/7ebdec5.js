(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(t,e,r){"use strict";var n=r(11),l=r(4),c=r(67),o=r(14),v=r(12),_=r(28),f=r(147),h=r(66),d=r(5),m=r(68),N=r(102).f,I=r(34).f,E=r(17).f,j=r(208).trim,C=l.Number,k=C.prototype,x="Number"==_(m(k)),S=function(t){var e,r,n,l,c,o,v,code,_=h(t,!1);if("string"==typeof _&&_.length>2)if(43===(e=(_=j(_)).charCodeAt(0))||45===e){if(88===(r=_.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(_.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+_}for(o=(c=_.slice(2)).length,v=0;v<o;v++)if((code=c.charCodeAt(v))<48||code>l)return NaN;return parseInt(c,n)}return+_};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(x?d((function(){k.valueOf.call(r)})):"Number"!=_(r))?f(new C(S(e)),r,w):S(e)},O=n?N(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;O.length>y;y++)v(C,A=O[y])&&!v(w,A)&&E(w,A,I(C,A));w.prototype=k,k.constructor=w,o(l,"Number",w)}},208:function(t,e,r){var n=r(13),l="["+r(209)+"]",c=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),v=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},209:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},210:function(t,e,r){t.exports=r.p+"img/splash2.1a39ada.jpg"},211:function(t,e,r){t.exports=r.p+"img/splash3.9b7eb7e.jpg"},212:function(t,e,r){t.exports=r.p+"img/splash1.8e70b1b.jpg"},213:function(t,e,r){"use strict";r.r(e);r(207);var n={data:function(){return{images:[{src:r(210)},{src:r(211)},{src:r(212)}]}},props:{height:{type:Number,required:!1,default:500}}},l=r(21),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"splash pa-0",staticStyle:{"padding-top":"0"},attrs:{fluid:""}},[e("v-carousel",{staticClass:"splash-carousel",attrs:{dark:"",fade:"",cycle:"",light:"",height:this.height+"px","hide-delimiter-background":"","delimiter-icon":"mdi-minus","show-arrows":!1}},this._l(this.images,(function(image,i){return e("v-carousel-item",{key:i,attrs:{src:image.src}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var n=r(21),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content"},[r("h1",{staticClass:"text-center content-padding"},[t._v("O nama")]),t._v(" "),r("p",{staticClass:"content--text"},[t._v("Firma se uspesno bavi nabavkom i prodajom:")]),t._v(" "),r("ul",{staticClass:"content--list"},[r("li",[t._v("Bageri gusenicari")]),t._v(" "),r("li",[t._v("Bageri tockasi")]),t._v(" "),r("li",[t._v("Dizalice")]),t._v(" "),r("li",[t._v("Masine za drobljenje i separaciju")]),t._v(" "),r("li",[t._v("Kombinovane gradjevinske masine")]),t._v(" "),r("li",[t._v("Manipulatori materijala")]),t._v(" "),r("li",[t._v("Mini utovarivaci")]),t._v(" "),r("li",[t._v("Mini bageri")]),t._v(" "),r("li",[t._v("Oprema za nabijanje terena")]),t._v(" "),r("li",[t._v("Prikljucci")]),t._v(" "),r("li",[t._v("Pristupne platforme")]),t._v(" "),r("li",[t._v("Utovarivaci tockasi")]),t._v(" "),r("li",[t._v("Viljuskari")]),t._v(" "),r("li",[t._v("Specijalna teretna vozila")]),t._v(" "),r("li",[t._v("Cisterne za gorivo")]),t._v(" "),r("li",[t._v("Ograde za gradilista")]),t._v(" "),r("li",[t._v("Skele sa podovima")]),t._v(" "),r("li",[t._v("Oplate")])])])}],!1,null,null,null);e.default=component.exports},247:function(t,e,r){"use strict";r.r(e);var n=r(21),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"homepage",staticStyle:{"padding-top":"0"}},[e("Splash"),this._v(" "),e("Content")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Splash:r(213).default,Content:r(214).default})}}]);