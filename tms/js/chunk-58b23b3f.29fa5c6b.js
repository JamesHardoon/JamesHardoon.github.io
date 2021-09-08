(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b23b3f","chunk-2d0de953","chunk-152db136","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-2f604fb4","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953"],{1398:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[[n("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[n("a-form-model-item",{ref:"projectName",attrs:{label:"项目名称：",prop:"projectName"}},[n("a-input",{attrs:{disabled:""},model:{value:e.form.projectName,callback:function(t){e.$set(e.form,"projectName",t)},expression:"form.projectName"}})],1),n("a-form-model-item",{attrs:{label:"归属公司",prop:"departId"}},[n("a-select",{attrs:{placeholder:"请选择归属公司"},model:{value:e.form.departId,callback:function(t){e.$set(e.form,"departId",t)},expression:"form.departId"}},e._l(e.sourceData,(function(t,a){return n("a-select-option",{key:a,attrs:{value:t.id}},[e._v("\n            "+e._s(t.departName)+"\n          ")])})),1)],1),n("a-form-model-item",{attrs:{label:"归属医院",prop:"hosptialId"}},[n("a-tree-select",{staticStyle:{width:"100%"},attrs:{treeData:e.treeData},on:{select:e.treeList},model:{value:e.form.hosptialId,callback:function(t){e.$set(e.form,"hosptialId",t)},expression:"form.hosptialId"}})],1),n("a-form-model-item",{attrs:{label:"商务合同点数",required:"",prop:"businessPoints"}},[n("a-input-search",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入商务合同点数，具体到小数点两位"},model:{value:e.form.businessPoints,callback:function(t){e.$set(e.form,"businessPoints",t)},expression:"form.businessPoints"}},[n("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[e._v("\n            %\n          ")])],1)],1),n("a-form-model-item",{staticStyle:{display:"flex","margin-bottom":"-10px"},attrs:{label:"每月同步结算时间"}},[n("div",{staticStyle:{display:"flex"}},[e._v("\n          每个月的"),n("a-form-model-item",{attrs:{label:"",prop:"synchronizationDay"}},[n("a-input-number",{staticStyle:{width:"80px"},attrs:{placeholder:""},model:{value:e.form.synchronizationDay,callback:function(t){e.$set(e.form,"synchronizationDay",t)},expression:"form.synchronizationDay"}})],1),e._v("号，\n\n          "),n("a-form-model-item",{attrs:{label:"",prop:"synchronizationTime"}},[e.form.synchronizationTime?n("a-time-picker",{attrs:{"default-value":e.moment(e.form.synchronizationTime,"HH:mm:ss"),format:"HH:mm:ss"},on:{change:e.onChangeTime}}):e._e()],1)],1)]),n("a-form-model-item",{attrs:{label:"收费负责人",prop:"responsiblePersonName"}},[n("a-input",{attrs:{placeholder:"请输入负责人名称"},model:{value:e.form.responsiblePersonName,callback:function(t){e.$set(e.form,"responsiblePersonName",t)},expression:"form.responsiblePersonName"}})],1),n("a-form-model-item",{attrs:{label:"联系电话",prop:"responsiblePersonPhone"}},[n("a-input",{attrs:{type:"tel",maxLength:11,placeholder:"请输入负责人名称"},model:{value:e.form.responsiblePersonPhone,callback:function(t){e.$set(e.form,"responsiblePersonPhone",t)},expression:"form.responsiblePersonPhone"}})],1)],1)]],2)},r=[],i=n("0fea"),s=n("85ee"),o=n.n(s),l=(n("ca00"),n("2dab")),c=n("caaf"),u=n.n(c);n("10ef");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"BaseProjectModal",components:{JDate:l["default"]},data:function(){var e;return e={moment:u.a,time:"",clickItem:{},sourceData:[],form:this.$form.createForm(this),labelCol:{span:4},wrapperCol:{span:14},other:""},d(e,"form",{projectName:"",departId:"",businessPoints:"",synchronizationDay:"",synchronizationTime:"",responsiblePersonName:"",responsiblePersonPhone:"",hosptialId:""}),d(e,"rules",{projectName:[{required:!0,message:"请输入项目名称",trigger:"blur"}],departId:[{required:!0,message:"请选择归属供公司",trigger:"change"}],hosptialId:[{required:!0,message:"请选择归属供公司",trigger:"change"}],businessPoints:[{required:!0,message:"请输入商务合同点数",trigger:"blur"}],synchronizationDay:[{required:!0,message:"请输入天数",trigger:"blur"},{type:"number",message:"仅支持输入1-31之间的整数",trigger:"blur",transform:function(e){var t=Number(e);return!!/^[1-9]$|^[12]\d$|^3[01]$/.test(t)&&t}}],responsiblePersonName:[{required:!0,message:"请选择收费负责人名称",trigger:"blur"}],responsiblePersonPhone:[{required:!0,pattern:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,message:"请输入正确联系电话"}]}),d(e,"title","操作"),d(e,"width",800),d(e,"visible",!1),d(e,"selectedKeys",[]),d(e,"model",{}),d(e,"visibleModel",!1),d(e,"labelCol",{xs:{span:24},sm:{span:5}}),d(e,"wrapperCol",{xs:{span:24},sm:{span:16}}),d(e,"confirmLoading",!1),d(e,"validatorRules",{}),d(e,"treeData",[]),d(e,"url",{add:"/basicdata/baseProject/add",edit:"/basicdata/baseProject/edit"}),e},created:function(){},mounted:function(){this.treeList(),this.dataList()},methods:{onChangeTime:function(e){this.form.synchronizationTime=this.formatDateTime(e._d)},formatDateTime:function(e){var t=new Date(e),n=(t.getFullYear(),t.getMonth()+1);n=n<10?"0"+n:n;var a=t.getDate();a=a<10?"0"+a:a;var r=t.getHours();r=r<10?"0"+r:r;var i=t.getMinutes(),s=t.getSeconds();return i=i<10?"0"+i:i,s=s<10?"0"+s:s,r+":"+i+":"+s},onSubmit:function(){this.$refs.ruleForm.validate((function(e){if(!e)return!1;alert("submit!")}))},resetForm:function(){this.$refs.ruleForm.resetFields()},add:function(){this.edit({})},edit:function(e){this.model=Object.assign({},e),this.visible=!0,this.clickItem=e,this.form.projectName=e.name,this.form.businessPoints=e.businessPoints,this.form.synchronizationDay=e.synchronizationDay,this.form.synchronizationTime=e.synchronizationTime,this.form.responsiblePersonName=e.responsiblePersonName,this.form.responsiblePersonPhone=e.responsiblePersonPhone,this.form.hosptialId=e.hosptialId,this.form.departId=e.departId},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(n){if(!n)return!1;t.confirmLoading=!0;var a="",r="";e.model.id?(a+=e.url.edit,r="put"):(a+=e.url.add,r="post"),e.form.id=e.clickItem.id,e.form.projectId=e.clickItem.projectId,Object(i["h"])(a,e.form,r).then((function(e){e.success?(t.$message.success(e.message),t.$refs.ruleForm.resetFields(),t.form.synchronizationTime="",t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close(),this.$refs.ruleForm.resetFields(),this.form.synchronizationTime=""},popupCallback:function(e){this.form.setFieldsValue(o()(e,"name","departId","hosptialId","businessPoints","synchronizationDay","synchronizationTime","responsiblePersonName","responsiblePersonPhone"))},treeList:function(){var e=this;Object(i["c"])("/basicdata/baseHospital/queryTreeList",null).then((function(t){t.success&&(e.treeData=t.result)})).finally((function(){}))},dataList:function(){var e=this;Object(i["c"])("/basicdata/baseProject/getCompany",null).then((function(t){t.success&&(e.sourceData=t.result)})).finally((function(){}))}}},h=m,f=n("cba8"),p=Object(f["a"])(h,a,r,!1,null,null,null);t["default"]=p.exports},"2dab":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},r=[],i=n("caaf"),s=n.n(i),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?s()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?s()(e,this.dateFormat):null}},methods:{moment:s.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=o,c=n("cba8"),u=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports},5956:function(e,t,n){"use strict";n("b31a")},"6eb7":function(e,t,n){},"79db":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator"},[e._v("\n    项目:\n    "),n("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"项目名称"},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}}),e._v("\n    归属公司:\n    "),n("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"归属公司"},model:{value:e.departName,callback:function(t){e.departName="string"===typeof t?t.trim():t},expression:"departName"}}),e._v("\n    归属医院:\n    "),n("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"归属医院"},model:{value:e.hosptialName,callback:function(t){e.hosptialName="string"===typeof t?t.trim():t},expression:"hosptialName"}}),e._v("\n\n    收费负责人:\n    "),n("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"收费负责人"},model:{value:e.responsiblePersonName,callback:function(t){e.responsiblePersonName="string"===typeof t?t.trim():t},expression:"responsiblePersonName"}}),e._v("\n\n    启用状态: "),n("a-select",{staticStyle:{width:"140px","margin-right":"10px"},attrs:{placeholder:"请选择状态",getPopupContainer:function(e){return e.parentNode}},model:{value:e.isFrozen,callback:function(t){e.isFrozen=t},expression:"isFrozen"}},[n("a-select-option",{attrs:{value:null}},[e._v("全部")]),n("a-select-option",{attrs:{value:0}},[e._v("启用")]),n("a-select-option",{attrs:{value:1}},[e._v("禁用")])],1),n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handle_query}},[e._v("查询")])],1),n("div",[n("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[n("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?n("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?n("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(n){return e.uploadFile(t)}}},[e._v("\n          下载\n        ")]):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,a){return n("span",{},[n("a",{directives:[{name:"show",rawName:"v-show",value:0==a.isFrozen,expression:"record.isFrozen == 0"}],on:{click:function(t){return e.handleFrozen(a,1)}}},[e._v("禁用")]),n("a",{directives:[{name:"show",rawName:"v-show",value:1==a.isFrozen,expression:"record.isFrozen == 1"}],on:{click:function(t){return e.handleFrozen(a,0)}}},[e._v("启用")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("修改")])],1)}},{key:"isFrozen",fn:function(t,a){return n("span",{},[0===a.isFrozen?n("a-tag",{attrs:{color:"green"}},[e._v("\n          启用\n        ")]):e._e(),1===a.isFrozen?n("a-tag",{attrs:{color:"red"}},[e._v("\n          禁用\n        ")]):e._e()],1)}}])})],1),n("baseProject-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],i=(n("6eb7"),n("ac0d")),s=n("b65a"),o=n("1398"),l=n("0fea"),c={name:"BaseProjectList",mixins:[s["a"],i["b"]],components:{BaseProjectModal:o["default"]},data:function(){return{description:"BASE_PROJECT管理页面",name:"",departName:"",hosptialName:"",responsiblePersonName:"",isFrozen:null,columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,n){return parseInt(n)+1}},{title:"项目名称",align:"center",dataIndex:"name"},{title:"归属公司",align:"center",dataIndex:"departName"},{title:"归属医院",align:"center",dataIndex:"hosptialName"},{title:"自动同步结算数据时间",align:"center",dataIndex:"time"},{title:"负责人名称",align:"center",dataIndex:"responsiblePersonName"},{title:"负责人电话",align:"center",dataIndex:"responsiblePersonPhone"},{title:"更新时间",align:"center",dataIndex:"updateTime",customRender:function(e){return e?e.length>10?e.substr(0,10):e:""}},{title:"启用状态",align:"center",dataIndex:"isFrozen",scopedSlots:{customRender:"isFrozen"}},{title:"操作",dataIndex:"action",align:"center",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/basicdata/baseProject/list",edit:"/basicdata/baseProject/edit",delete:"/basicdata/baseProject/delete",deleteBatch:"/basicdata/baseProject/deleteBatch",exportXlsUrl:"/basicdata/baseProject/exportXls",importExcelUrl:"basicdata/baseProject/importExcel"},dictOptions:{}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},handle_query:function(){this.queryParam.name=this.name,this.queryParam.departName=this.departName,this.queryParam.hosptialName=this.hosptialName,this.queryParam.responsiblePersonName=this.responsiblePersonName,this.queryParam.isFrozen=this.isFrozen,this.searchQuery()},handleFrozen:function(e,t){var n="",a=this;n=1==t?"您确定要禁用吗?":"您确定要启用吗?",this.$confirm({title:n,content:"",onOk:function(){return new Promise((function(n,r){n();var i={id:e.id,isFrozen:t};Object(l["k"])(a.url.edit,i).then((function(e){a.searchQuery()})).catch((function(e){}))})).catch((function(){}))},onCancel:function(){}})}}},u=c,d=(n("5956"),n("cba8")),m=Object(d["a"])(u,a,r,!1,null,"6873f92c",null);t["default"]=m.exports},"85ee":function(e,t,n){(function(t){var n=1/0,a=9007199254740991,r="[object Arguments]",i="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function m(e,t){var n=-1,a=e?e.length:0,r=Array(a);while(++n<a)r[n]=t(e[n],n,e);return r}function h(e,t){var n=-1,a=t.length,r=e.length;while(++n<a)e[r+n]=t[n];return e}var f=Object.prototype,p=f.hasOwnProperty,b=f.toString,g=u.Symbol,y=f.propertyIsEnumerable,v=g?g.isConcatSpreadable:void 0,w=Math.max;function P(e,t,n,a,r){var i=-1,s=e.length;n||(n=S),r||(r=[]);while(++i<s){var o=e[i];t>0&&n(o)?t>1?P(o,t-1,n,a,r):h(r,o):a||(r[r.length]=o)}return r}function k(e,t){return e=Object(e),x(e,t,(function(t,n){return n in e}))}function x(e,t,n){var a=-1,r=t.length,i={};while(++a<r){var s=t[a],o=e[s];n(o,s)&&(i[s]=o)}return i}function j(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var n=arguments,a=-1,r=w(n.length-t,0),i=Array(r);while(++a<r)i[a]=n[t+a];a=-1;var s=Array(t+1);while(++a<t)s[a]=n[a];return s[t]=i,d(e,this,s)}}function S(e){return $(e)||F(e)||!!(v&&e&&e[v])}function O(e){if("string"==typeof e||R(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function F(e){return z(e)&&p.call(e,"callee")&&(!y.call(e,"callee")||b.call(e)==r)}var $=Array.isArray;function N(e){return null!=e&&C(e.length)&&!I(e)}function z(e){return _(e)&&N(e)}function I(e){var t=D(e)?b.call(e):"";return t==i||t==s}function C(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){return!!e&&"object"==typeof e}function R(e){return"symbol"==typeof e||_(e)&&b.call(e)==o}var T=j((function(e,t){return null==e?{}:k(e,m(P(t,1),O))}));e.exports=T}).call(this,n("2409"))},b31a:function(e,t,n){},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("7c98"),r=n.n(a),i=n("ca00"),s=n("0fea"),o=n("430a"),l=n("9fb0");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=null,h={data:function(){return{refreshTime:"",tokenHeader:{"X-Access-Token":o["default"].ls.get(l["a"]),"X-Depart-Id":o["default"].ls.get(l["b"])},queryParam:{},customerResult:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","50","100","300"],showTotal:function(e,t){return m?t[0]+"-"+(t[1]-1)+" 共"+(e-1)+"条":t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){if(!this.isStopAddTmail){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(s["c"])(this.url.list,n).then((function(e){e.success&&(r.a.get(e.result,"refreshTime","")&&(t.refreshTime=e.result.refreshTime),t.dataSource=[],e.result.page?(t.customerResult=e.result.customerResult,t.dataSource=e.result.page.records,t.ipagination.total=e.result.page.total):(t.dataSource=e.result.records,t.ipagination.total=e.result.total),t.isSwitch&&t.dataSource.length&&t.dataSource.forEach((function(e,t){if(e.isReceiveSms?e.isChecked=!1:e.isChecked=!0,""==e.id)return t+1})),t.isMyId&&t.dataSource.length&&t.dataSource.forEach((function(e,t){e.id=t+1})),t.isFooter&&t.dataSource.length?(t.dataSource.push({}),m=!0):m=!1),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["e"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(s["a"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;this.$confirm({title:"您确定删除么？",content:"",onOk:function(){Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},customerHandleExportXls:function(e,t){var n=this;e&&"string"==typeof e||(e="导出文件");var a=u({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),a.pageNo=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(s["b"])(t,a).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([t],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else n.$message.warning("文件下载失败")}))},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=u({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),n.pageNo=this.ipagination.current,n.pageSize=this.ipagination.pageSize,Object(s["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,a=n.message,r=n.result,i=r.msg,s=r.fileUrl,o=r.fileName,l=window._CONFIG["domianURL"]+s;this.$warning({title:a,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请"," ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}}}]);