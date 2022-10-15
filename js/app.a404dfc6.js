(function(){"use strict";var e={4718:function(e,t,n){var r=n(6369),i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("div",{ref:"mainContainer",staticClass:"main-container"},[t("div",{staticClass:"app-title text-shadow"},[e._v("Alchemy visualizer")]),t("div",{staticClass:"sep"}),t("input-box",{ref:"inp",on:{graph:e.graphChanged}}),t("div",{staticClass:"graph-container"},[t("graph-visualizer",{ref:"graph",staticClass:"graph",attrs:{graph:e.graph,animated:e.animated}}),t("transition-group",{attrs:{name:"flash"},on:{"after-enter":e.removeFlash}},e._l(e.flashArr,(function(e){return t("div",{key:e,staticClass:"flash",attrs:{"data-tr":e}})})),0)],1),e.graphContainsData()?t("div",{staticClass:"footer"},[t("div",{staticClass:"animation-check"},[t("div",{staticClass:"animated-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.animated,expression:"animated"}],attrs:{type:"checkbox",id:"anim-enable"},domProps:{checked:Array.isArray(e.animated)?e._i(e.animated,null)>-1:e.animated},on:{change:function(t){var n=e.animated,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&(e.animated=n.concat([o])):a>-1&&(e.animated=n.slice(0,a).concat(n.slice(a+1)))}else e.animated=i}}}),t("label",{attrs:{for:"anim-enable"}})]),t("label",{attrs:{for:"anim-enable"}},[e._v("Animated")])]),t("div",{staticClass:"footer-delimiter"}),t("div",{staticClass:"copy-image-btn"},[t("button",{on:{click:function(t){return e.captureGraph()}}},[t("span",{staticClass:"material-symbols-outlined"},[e._v("add_a_photo")]),t("transition",{attrs:{name:"tooltip"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.copiedTooltip,expression:"copiedTooltip"}]},[e._v("Image Copied!")])])],1)])]):e._e()],1),e._m(0)])},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"credits margin-top-auto"},[t("div",[e._v("made with "),t("span",{staticClass:"material-symbols-outlined"},[e._v("favorite")]),e._v(" by yoda")])])}],a=(n(7658),function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"canvas",staticClass:"canvas",style:{width:`${e.canvasSize.x}em`,height:`${e.canvasSize.y}em`}},[e._l(e.graph.nodes,(function(e){return t("div",{key:e.id,staticClass:"node",style:{top:`${e.pos.y}em`,left:`${e.pos.x}em`,width:`${e.size.x}em`,height:`${e.size.y}em`}},[t("node-item",{attrs:{node:e}})],1)})),t("svg",{attrs:{width:"100em",height:"100em"}},[e._l(e.graph.conns,(function(n){return t("path",{key:10*n.id,staticClass:"path",class:{"path-animated":e.animated},attrs:{d:`M ${e.tr(n.a.x)} ${e.tr(n.a.y)} C ${e.tr(n.a.x+n.dist/2)} ${e.tr(n.a.y)}, ${e.tr(n.b.x-n.dist/2)} ${e.tr(n.b.y)}, ${e.tr(n.b.x)} ${e.tr(n.b.y)}`,fill:"transparent","stroke-width":"3px","stroke-dasharray":e.animated?"0.5em 0.15em":void 0}})})),t("g",e._l(e.graph.conns,(function(n){return t("path",{key:20*n.id,staticClass:"path",class:{"path-animated":e.animated},attrs:{d:`M ${e.tr(n.a.x)} ${e.tr(n.a.y-.15)} C ${e.tr(n.a.x+n.dist/2)} ${e.tr(n.a.y)}, ${e.tr(n.b.x-n.dist/2)} ${e.tr(n.b.y)}, ${e.tr(n.b.x)} ${e.tr(n.b.y)}`,fill:"transparent","stroke-width":"3px","stroke-dasharray":e.animated?"0.5em 0.15em":void 0}})})),0),t("g",e._l(e.graph.conns,(function(n){return t("path",{key:30*n.id,staticClass:"path",class:{"path-animated":e.animated},attrs:{d:`M ${e.tr(n.a.x)} ${e.tr(n.a.y+.15)} C ${e.tr(n.a.x+n.dist/2)} ${e.tr(n.a.y)}, ${e.tr(n.b.x-n.dist/2)} ${e.tr(n.b.y)}, ${e.tr(n.b.x)} ${e.tr(n.b.y)}`,fill:"transparent","stroke-width":"3px","stroke-dasharray":e.animated?"0.5em 0.15em":void 0}})})),0)],2)],2)}),l=[],c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"node-root",class:e.nodeClass(e.node)},[t("div",{staticClass:"node-name",class:e.nodeTextClass(e.node)},[t("span",[e._v(e._s(e.node.text))])]),e.hasEffects(e.node)?t("div",{staticClass:"node-output-effects"},[t("div",{staticClass:"node-effects"},e._l(e.node.effects,(function(n){return t("div",{key:n.text,staticClass:"node-effect",class:{[e.effectIcon(n).color]:!0}},[t("span",{staticClass:"material-symbols-outlined node-effect-icon"},[e._v(e._s(e.effectIcon(n).text))]),t("div",{staticClass:"node-effect-text"},[e._v(e._s(n.text))])])})),0)]):e._e(),e._l(e.node.connectorsIn,(function(e){return t("div",{key:"4"+e.y,staticClass:"node-connector node-connector-in",style:{top:`${e.y}em`,left:`${e.x}em`}})})),e._l(e.node.connectorsOut,(function(e){return t("div",{key:e.y,staticClass:"node-connector node-connector-out",style:{top:`${e.y}em`,left:`${e.x}em`}})}))],2)},u=[],s=r.ZP.extend({props:{node:{type:Object}},methods:{hasEffects:function(e){return"out"===e.nodeType&&0!=e.effects.length},nodeClass:function(e){var t=e.nodeType;return"tr"===t?"node-transform":"out"===t?"node-output":"node-component"},nodeTextClass:function(e){return"tr"==e.nodeType?"":e.text.length>15?"node-text-small":""},effectIcon:function(e){var t=e.type;switch(t){case"+":return{text:"heart_plus",color:"ne-heal"};case"-":return{text:"heart_minus",color:"ne-hurt"};case"^":return{text:"north",color:"ne-up"};case"%":return{text:"timer",color:"ne-timer"};case"^^":return{text:"keyboard_double_arrow_up",color:"ne-up"};default:return{text:"question_mark",color:"ne-oth"}}}}}),f=s,d=n(1001),h=(0,d.Z)(f,c,u,!1,null,null,null),p=h.exports,b=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},y=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},m=function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(){function e(e,t){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"depth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"children",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.name=e,this.depth=t}return e}(),g="(",x=")",_=",";function O(e){var t,n,r=y([],v(e),!1),i=0,o="",a=[],l=function(){return a[a.length-1]},c=null;try{for(var u=m(r),s=u.next();!s.done;s=u.next()){var f=s.value;if(f===g){var d=new w(o.trim(),i);0!=a.length&&l().children.push(d),a.push(d),o="",i++}else if(f===x){if(0==i)throw new Error("no matching opening bracket");1==a.length&&(c=l());var h=o.trim();if(0!=h.length){d=new w(h,i);l().children.push(d)}a.pop(),o="",i--}else if(f===_){h=o.trim();if(o="",0==h.length)continue;if(0!=a.length){d=new w(h,i);l().children.push(d)}}else o+=f}}catch(p){t={error:p}}finally{try{s&&!s.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}if(i>0)throw new Error("no matching closing bracket");return c}var P=function(){function e(e,t){Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.x=e,this.y=t}return Object.defineProperty(e.prototype,"add",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return new e(this.x+t.x,this.y+t.y)}}),Object.defineProperty(e.prototype,"sub",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return new e(this.x-t.x,this.y-t.y)}}),Object.defineProperty(e.prototype,"addP",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n){return new e(this.x+t,this.y+n)}}),Object.defineProperty(e.prototype,"mul",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return new e(this.x*t,this.y*t)}}),Object.defineProperty(e.prototype,"copy",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new e(this.x,this.y)}}),Object.defineProperty(e.prototype,"dist",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}}),e}(),C=function(){function e(){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"children",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"pos",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"sizeWithChildren",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"nodeSize",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"sizeChildren",{enumerable:!0,configurable:!0,writable:!0,value:new P(0,0)}),Object.defineProperty(this,"nodeType",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"connectorsIn",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"connectorsOut",{enumerable:!0,configurable:!0,writable:!0,value:[]})}return Object.defineProperty(e.prototype,"realSize",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new P(0,0)}}),Object.defineProperty(e.prototype,"nativeSize",{enumerable:!1,configurable:!0,writable:!0,value:function(){return this.realSize().add(this.margin.mul(2))}}),Object.defineProperty(e.prototype,"setPos",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var n=this.realSize().mul(.5);this.pos=e.add(t.sub(e).mul(.5)).sub(n),this.size=this.realSize()}}),Object.defineProperty(e.prototype,"init",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.text=this.name}}),Object.defineProperty(e.prototype,"calculatePos",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t,n,r=e.copy(),i=0;try{for(var o=m(this.children),a=o.next();!a.done;a=o.next()){var l=a.value,c=l.calculatePos(r);i=Math.max(i,c.x),r.x=e.x,r.y=c.y}}catch(d){t={error:d}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}var u=r.y,s=new P(e.x+i,e.y),f=new P(i+this.nativeSize().x,Math.max(u,e.y+this.nativeSize().y));return this.sizeChildren=r.sub(e),this.setPos(s,f),this.sizeWithChildren=f.sub(e),this.nodeSize=f.sub(s),this.calculateConnectors(),f}}),Object.defineProperty(e.prototype,"connect",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(this.children.length==this.connectorsIn.length)for(var n=0;n<this.children.length;n++){var r=this.children[n];if(1==r.connectorsOut.length){var i=new j(r.pos.add(r.connectorsOut[0]),this.pos.add(this.connectorsIn[n]),t());e.push(i),r.connect(e,t)}}}}),Object.defineProperty(e.prototype,"adjustPos",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t,n;this.pos.y+=e,this.nodeSize.y>this.sizeChildren.y&&(e+=(this.nodeSize.y-this.sizeChildren.y)/2);try{for(var r=m(this.children),i=r.next();!i.done;i=r.next()){var o=i.value;o.adjustPos(e)}}catch(a){t={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}}),Object.defineProperty(e.prototype,"calculateConnectors",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),e}(),j=function(){function e(e,t,n){Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"dist",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.dist=e.dist(t)}return e}(),T=function(){function e(e,t,n){Object.defineProperty(this,"nodes",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"conns",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:n})}return e}(),S={md:function(){return new z("Measured Distillate")},la:function(){return new z("Lye Ablution")},fc:function(){return new z("Fiery Combustion")},hg:function(){return new z("Herbal Grind")},mc:function(){return new z("Mineral Calcination")},mush:function(){return new k("Mushroom Decoction")},herb:function(){return new k("Herbal Swill")},merc:function(){return new k("Mercurial Elixir")}},k=function(e){function t(t){var n=e.call(this)||this;return Object.defineProperty(n,"text",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(n,"effects",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(n,"effectsWidth",{enumerable:!0,configurable:!0,writable:!0,value:12}),n.nodeType="out",n.margin=new P(3,1),n}return b(t,e),Object.defineProperty(t.prototype,"init",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(t.prototype,"realSize",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new P(4,14);return 0==this.effects.length?e:e.addP(this.effectsWidth,0)}}),Object.defineProperty(t.prototype,"setPos",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var n=t.sub(e).sub(this.margin.mul(2)),r=this.realSize();this.size=new P(r.x,Math.max(r.y,n.y));var i=this.size.mul(.5);this.pos=e.add(t.sub(e).mul(.5)).sub(i)}}),Object.defineProperty(t.prototype,"calculateConnectors",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.size;if(0!=this.children.length)for(var t=1,n=(e.y-2*t)/this.children.length,r=t+n/2,i=0;i<this.children.length;i++){var o=new P(0,r+n*i);this.connectorsIn.push(o)}}}),t}(C),z=function(e){function t(t){var n=e.call(this)||this;return Object.defineProperty(n,"text",{enumerable:!0,configurable:!0,writable:!0,value:t}),n.nodeType="tr",n.margin=new P(2,1),n}return b(t,e),Object.defineProperty(t.prototype,"init",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(t.prototype,"realSize",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new P(7,4)}}),Object.defineProperty(t.prototype,"calculateConnectors",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.size,t=new P(e.x,e.y/2);if(this.connectorsOut.push(t),0!=this.children.length)for(var n=1,r=(e.y-2*n)/this.children.length,i=n+r/2,o=0;o<this.children.length;o++){var a=new P(0,i+r*o);this.connectorsIn.push(a)}}}),t}(C),$=function(e){function t(){var t=e.call(this)||this;return t.margin=new P(1,1),t}return b(t,e),Object.defineProperty(t.prototype,"realSize",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new P(10,2)}}),Object.defineProperty(t.prototype,"calculateConnectors",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.realSize(),t=new P(e.x,e.y/2);this.connectorsOut.push(t)}}),t}(C);function A(e,t){var n;return n=Object.prototype.hasOwnProperty.call(S,e)?S[e]():new $,n.name=e,n.id=t,n.init(),n}function E(e,t,n){var r,i,o=A(e.name,t.id);if(t.id++,o instanceof k){if(t.outCount>0)throw new Error("more than one output node");t.outCount++,o.effects=y([],v(n),!1),n.length=0}try{for(var a=m(e.children),l=a.next();!l.done;l=a.next()){var c=l.value;o.children.push(E(c,t,n))}}catch(u){r={error:u}}finally{try{l&&!l.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return o}function M(e,t){if(null==e)return new T([],[],new P(0,0));var n={id:0,outCount:0},r=E(e,n,t),i=new P(0,0);r.calculatePos(i),r.adjustPos(0);var o=[],a=0,l=r.sizeWithChildren.copy();return r.connect(o,(function(){return a++,a})),new T(I(r),o,l)}function I(e){if(null==e)return[];var t=[],n=function(e){var r,i;t.push(e);try{for(var o=m(e.children),a=o.next();!a.done;a=o.next()){var l=a.value;n(l)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}e.children=[]};return n(e),t}var N=function(){function e(e,t){Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:t})}return e}();function F(e){return e.split("\n").filter((function(e){return e.trim().length>0})).map((function(e){var t=e.trim();return["^^"].includes(t.slice(0,2))?new N(t.slice(0,2),t.slice(2).trim()):["+","-","^","%"].includes(t[0])?new N(t[0],t.slice(1).trim()):new N("?",t)})).filter((function(e){return!!e}))}var L=r.ZP.extend({components:{NodeItem:p},props:{graph:{type:Object},animated:{type:Boolean}},data:function(){return{fontSize:16,canvasSize:new P(0,0)}},created:function(){var e=this;window.addEventListener("resize",(function(){e.recalculateFontSize()}))},watch:{graph:function(e){this.recalculateFontSize(),this.canvasSize=e.size}},methods:{recalculateFontSize:function(){var e=this.$refs.canvas;this.fontSize=parseFloat(getComputedStyle(e).fontSize)},tr:function(e){return e*this.fontSize}}}),Z=L,G=(0,d.Z)(Z,a,l,!1,null,null,null),D=G.exports,U=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"input-box-container"},[t("div",{staticClass:"input-box spacer"},[t("div",{staticClass:"input-formula"},[t("div",{staticClass:"stylized-input-dark"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.formulaText,expression:"formulaText"}],attrs:{type:"text",placeholder:"mush(md(quartz, gneiss), md(dolomite, lamp stalk), chantrelles)",spellcheck:"false"},domProps:{value:e.formulaText},on:{input:function(t){t.target.composing||(e.formulaText=t.target.value)}}})]),t("button",{on:{click:function(t){return e.copyLink()}}},[t("span",{staticClass:"material-symbols-outlined"},[e._v("content_copy")]),t("transition",{attrs:{name:"tooltip"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.copiedTooltip,expression:"copiedTooltip"}]},[e._v("Link Copied!")])])],1)]),e.error?t("div",{staticClass:"input-error"},[t("div",[e._v(e._s(e.error))])]):e._e()]),t("div",{staticClass:"help-and-effects spacer"},[e._m(0),t("div",{staticClass:"input-box input-box-effects"},[t("div",{staticClass:"stylized-input-dark"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.effectsText,expression:"effectsText"}],attrs:{type:"text",placeholder:e.effectsPlaceholder,spellcheck:"false"},domProps:{value:e.effectsText},on:{input:function(t){t.target.composing||(e.effectsText=t.target.value)}}})])])])])},H=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"help"},[t("div",[t("code",[e._v("mush")]),e._v(" Mushroom Decoction "),t("br"),t("code",[e._v("herb")]),e._v(" Herbal Swill "),t("br"),t("code",[e._v("merc")]),e._v(" Mercurial Elixir ")]),t("div",[t("code",[e._v("md")]),e._v(" Measured Distillate "),t("br"),t("code",[e._v("la")]),e._v(" Lye Ablution "),t("br"),t("code",[e._v("fc")]),e._v(" Fiery Combustion "),t("br"),t("code",[e._v("hg")]),e._v(" Herbal Grind "),t("br"),t("code",[e._v("mc")]),e._v(" Mineral Calcination "),t("br")])])}],B=(n(3408),n(4590),n(2801),function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}),W=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};function q(e){for(var t=new Uint16Array(e.length),n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return btoa(String.fromCharCode.apply(String,W([],B(new Uint8Array(t.buffer)),!1)))}function R(e){for(var t=atob(e),n=new Uint8Array(t.length),r=0;r<n.length;r++)n[r]=t.charCodeAt(r);return String.fromCharCode.apply(String,W([],B(new Uint16Array(n.buffer)),!1))}var J=r.ZP.extend({data:function(){return{logs:[],parsed:"",formulaText:"",effectsText:"",parsedEffects:"",effectsPlaceholder:"+Quicksilver Poison\n+Beesting\n^Melee Combat\n^^Strength\n%Shorter Duration\n-Chills And Nausea",error:"",copiedTooltip:!1}},watch:{formulaText:function(e){this.updateGraph(e,this.effectsText)},effectsText:function(e){this.updateGraph(this.formulaText,e)}},created:function(){var e=this;this.loadFromURL(),window.addEventListener("hashchange",(function(){e.loadFromURL()}))},methods:{loadFromURL:function(){var e=window.location.hash,t=e.slice(1);if(0!=t.length)try{var n=JSON.parse(R(t));if(!Object.prototype.hasOwnProperty.call(n,"ver"))return this.formulaText="",void(this.effectsText="");if(1!==n.ver)throw new Error("unknown data version");if("string"!==typeof n.f)throw new Error("formula is not a string");if("string"!==typeof n.e)throw new Error("effects is not a string");this.formulaText=n.f,this.effectsText=n.e}catch(r){window.location.hash="",console.debug(r)}},copyLink:function(){var e=this,t=window.location.toString();navigator.clipboard.writeText(t),this.copiedTooltip=!0;var n=this;n.copiedTooltipTimeout&&clearTimeout(n.copiedTooltipTimeout),n.copiedTooltipTimeout=setTimeout((function(){e.copiedTooltip=!1}),1e3)},exportToHash:function(e){history.replaceState(null,"","".concat(document.location.pathname,"#").concat(e))},updateGraph:function(e,t){var n=q(JSON.stringify({f:e,e:t,ver:1}));this.exportToHash(n);try{var r=O(e),i=F(t),o=M(r,i);this.parsed=JSON.stringify(o),this.error="",this.$emit("graph",o)}catch(a){this.error=a,this.parsed=a}}}}),Q=J,V=(0,d.Z)(Q,U,H,!1,null,null,null),K=V.exports,X=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,l)}c((r=r.apply(e,t||[])).next())}))},Y=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},ee=r.ZP.extend({name:"App",components:{InputBox:K,GraphVisualizer:D},data:function(){return{graph:{},animated:!1,flashArr:[],copiedTooltip:!1}},methods:{graphChanged:function(e){this.graph=e},graphContainsData:function(){var e;return!!(null===(e=this.graph.nodes)||void 0===e?void 0:e.length)},captureGraph:function(){return X(this,void 0,void 0,(function(){var e,t,r,i,o=this;return Y(this,(function(a){switch(a.label){case 0:return this.flashArr.push(Date.now()),e=this.$refs.graph.$el,[4,n.e(756).then(n.t.bind(n,1756,23))];case 1:return t=a.sent(),[4,t.default(e,{allowTaint:!0,backgroundColor:"#1d1d1d",scale:1.25*window.devicePixelRatio})];case 2:return r=a.sent(),r.toBlob((function(e){return X(o,void 0,void 0,(function(){var t;return Y(this,(function(n){switch(n.label){case 0:return null==e?[2]:(t=new ClipboardItem({"image/png":e}),[4,navigator.clipboard.write([t])]);case 1:return n.sent(),this.copiedTooltip=!0,[2]}}))}))})),i=this,i.copiedTooltipTimeout&&clearTimeout(i.copiedTooltipTimeout),i.copiedTooltipTimeout=setTimeout((function(){o.copiedTooltip=!1}),1e3),[2]}}))}))},removeFlash:function(e){this.flashArr.splice(this.flashArr.indexOf(parseInt(e.dataset.tr)),1)}}}),te=ee,ne=(0,d.Z)(te,i,o,!1,null,null,null),re=ne.exports;r.ZP.config.productionTip=!1,new r.ZP({render:function(e){return e(re)}}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],o=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(o,a),o}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".68392d60.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="viewer:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var l,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/alchemygraph/"}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),l=new Error,c=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],l=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(c)var s=c(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkviewer"]=self["webpackChunkviewer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4718)}));r=n.O(r)})();