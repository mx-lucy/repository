webpackJsonp([11],{"5eOl":function(t,e){},hXHU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("xrTZ").Base64,o={name:"TimeCloud",data:function(){return{ifshow:[],ifshow1:[],loading1:!1,loading2:!1,chooseList:[],Data:"",Data1:{imei:"",type:"",msg:[]},queryType:"",para:[],paraType:"",Datapara:{error:"",false:[],list:""},paramodel:[],getinter:"",getinterpara:{imei:""},eventcode:"",eventmsg:""}},methods:{getchooseList:function(){var t=this;this.$http.get("./../static/inter.json").then(function(e){t.chooseList=e.data.list,t.Data=e.data.data,t.eventcode=e.data.event,t.eventmsg=e.data.msg,t.paraType=e.data.parameter,t.analyzeData()})},showData:function(){var t=this;if(this.analyzepara(),this.getinterface(),0!==this.Datapara.error)return this.$message.error("参数有误,详情请见参数分析");if(!this.getinter)return this.$message.error("接口为空，请先生成接口");var e=r.encode("b994ec9e4e2b4cdca1631599f602d859:1d31a09cb99fe97ba5092e9f559f78f3");this.loading1=!0,this.$http({timeout:5e3,method:"post",url:"http://www.lbs-iot.com:8082/third/api/v1/device/battery",headers:{Authorization:"Basic "+e},data:this.getinterpara}).then(function(e){t.Data=e.data,t.loading1=!1,t.analyzeData()}).catch(function(e){5e3===e.config.timeout?(t.Data="请求超时",t.loading1=!1):(t.Data=e,t.loading1=!1)})},clearData:function(){this.para=[],this.Data="",this.Data1={imei:"",type:"",msg:[]},this.Datapara={error:"",false:[],list:""},this.queryType="",this.getinter="",document.getElementById("Data_para").style.visibility="hidden",document.getElementById("Data1").style.visibility="hidden"},analyzeData:function(){this.loading2=!0,this.Data1={imei:"",type:"",msg:{}},this.Data1.imei=this.Data.imei,document.getElementById("Data1").style.visibility="visible";for(var t=0;t<this.eventcode.length;t++)this.eventcode[t].code-this.Data.type==0&&(this.Data1.type=this.eventcode[t].type);for(var e in this.Data.msg)for(var a=0;a<this.eventmsg.length;a++)e===this.eventmsg[a].参数名称&&(this.Data1.msg[this.eventmsg[a].描述]=this.Data.msg[e]);this.loading2=!1},changepara:function(){this.paramodel=[],this.para=[];for(var t=0;t<this.chooseList.length;t++)this.queryType===this.chooseList[t].value&&(this.para=this.chooseList[t].parameter.split(","),this.paramodel.length=this.para.length);for(var e=0;e<this.para.length;e++)for(var a=0;a<this.paraType.length;a++)this.para[e]===this.paraType[a].parameter&&("bool"===this.paraType[a].type?(this.ifshow[e]=!1,this.ifshow1[e]=!0):(this.ifshow[e]=!0,this.ifshow1[e]=!1))},getinterface:function(){this.getinter="",this.getinterpara={};for(var t=0;t<this.chooseList.length;t++)this.queryType===this.chooseList[t].value&&(this.getinter=this.chooseList[t].URL);for(var e=0;e<this.paramodel.length;e++)this.paramodel[e]&&(console.log("this.para[j]="+this.para[e]+" this.paramodel[j] ="+this.paramodel[e]),this.getinterpara[this.para[e]]=this.paramodel[e]);console.log(this.getinterpara)},analyzepara:function(){this.Datapara.error=0,this.Datapara.list=[],this.Datapara.false=[],document.getElementById("Data_para").style.visibility="visible";for(var t=0;t<this.para.length;t++)for(var e=0;e<this.paraType.length;e++)if(this.para[t]===this.paraType[e].parameter){var a=this.getpattern(this.paraType[e]);"TRUE"===this.paraType[e].need?this.geterror(this.paraType[e],a,this.paramodel[t]):this.paramodel[t]&&(this.Datapara.false.push(this.paraType[e].parameter),this.geterror(this.paraType[e],a,this.paramodel[t]))}"callin"===this.queryType&&(1===this.Datapara.false.length?this.Datapara.error+=0:(this.Datapara.error+=1,this.Datapara.list.push(this.Datapara.error+": firewall,ring,viberate,nodisturb_time 有且仅有一项")))},getpattern:function(t){return"ip"===t.parameter?new RegExp("^(?:(?:2[0-4][0-9]\\.)|(?:25[0-5]\\.)|(?:1[0-9][0-9]\\.)|(?:[1-9][0-9]\\.)|(?:[0-9]\\.)){3}(?:(?:2[0-5][0-5])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$"):new RegExp(t.RegExp)},geterror:function(t,e,a){a?e.test(a)?this.Datapara.error+=0:(this.Datapara.error+=1,this.Datapara.list.push(this.Datapara.error+" : "+t.parameter+"的输入形式应为"+t.type+"，描述为"+t.describe)):(this.Datapara.error+=1,this.Datapara.list.push(this.Datapara.error+" : "+t.parameter+"不能为空，描述为"+t.describe))}},created:function(){this.getchooseList()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"80%","margin-left":"10%"}},[a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"get_message"},[a("h2",[t._v("请输入接口信息")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"5px"},attrs:{slot:"prepend"},on:{change:t.changepara},slot:"prepend",model:{value:t.queryType,callback:function(e){t.queryType=e},expression:"queryType"}},t._l(t.chooseList,function(t,e){return a("el-option",{key:e,attrs:{value:t.value,label:t.label}})}),1),t._v(" "),a("div",{staticClass:"get_parameter"},[a("ul",t._l(t.para,function(e,r){return a("li",{key:r,staticStyle:{width:"200px",float:"left"},attrs:{value:e}},[t._v("\n            "+t._s(e)+"\n            "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ifshow[r],expression:"ifshow[index]"}],staticStyle:{width:"200px",height:"60px"}},[a("el-input",{staticStyle:{width:"180px"},model:{value:t.paramodel[r],callback:function(e){t.$set(t.paramodel,r,e)},expression:"paramodel[index]"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ifshow1[r],expression:"ifshow1[index]"}],staticStyle:{width:"200px",height:"60px"}},[[a("el-radio",{attrs:{label:"0"},model:{value:t.paramodel[r],callback:function(e){t.$set(t.paramodel,r,e)},expression:"paramodel[index]"}},[t._v("0")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.paramodel[r],callback:function(e){t.$set(t.paramodel,r,e)},expression:"paramodel[index]"}},[t._v("1")])]],2)])}),0)]),t._v(" "),a("div",{staticStyle:{width:"100%"}},[a("h4",[t._v("生成接口: ")]),t._v(" "),a("el-input",{staticStyle:{width:"90%",margin:"10px"},model:{value:t.getinter,callback:function(e){t.getinter=e},expression:"getinter"}}),t._v(" "),a("div",{staticStyle:{width:"90%",margin:"10px","background-color":"#c5c5c5",height:"100px"}},[t._v(t._s(t.getinterpara))])],1),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},on:{click:t.getinterface}},[t._v("生成接口")]),t._v(" "),a("el-button",{on:{click:t.showData}},[t._v("提交接口")]),t._v(" "),a("el-button",{on:{click:t.clearData}},[t._v("清空数据")]),t._v(" "),a("el-button",{on:{click:t.analyzepara}},[t._v("分析参数")]),t._v(" "),a("el-button",{on:{click:t.analyzeData}},[t._v("分析数据")]),t._v(" "),a("el-button",{on:{click:t.getchooseList}},[t._v("测试数据")])],1),t._v(" "),a("div",{staticClass:"analyze_parameter"},[a("h4",[t._v("参数分析: ")]),t._v(" "),a("div",{staticClass:"analyze_Data"},[a("p",{staticStyle:{visibility:"hidden",color:"red"},attrs:{id:"Data_para"}},[t._v("参数输入有误: "+t._s(t.Datapara.error)),a("br"),t._v(t._s(t.Datapara.list))])])]),t._v(" "),a("div",{staticClass:"return_message"},[a("h2",[t._v("接口返回结果")]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticClass:"return_Data",attrs:{"element-loading-text":"拼命加载中"}},[a("p",[t._v(t._s(t.Data))])]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],staticClass:"return_Data1",attrs:{"element-loading-text":"拼命加载中"}},[a("p",{staticStyle:{visibility:"hidden"},attrs:{id:"Data1"}},[t._v(t._s(t.Data1))])])])])])},staticRenderFns:[]};var n=a("VU/8")(o,i,!1,function(t){a("5eOl")},"data-v-7878c247",null);e.default=n.exports},xrTZ:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){module.exports=e(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},a=0,r=t.length;a<r;a++)e[t.charAt(a)]=a;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],a=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(a>>>18),b64chars.charAt(a>>>12&63),e>=2?"=":b64chars.charAt(a>>>6&63),e>=1?"=":b64chars.charAt(63&a)].join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,a=e%4,r=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),o=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return o.length-=[0,0,2,1][a],o.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(exports,__webpack_require__("DuR2"))}});
//# sourceMappingURL=11.e0fbcfd1d2957019fc7c.js.map