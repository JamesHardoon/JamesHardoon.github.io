(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-306ee3d0","chunk-2d0de953","chunk-51a85adc","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-2f604fb4","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953"],{"0edc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,switchFullscreen:"",cancelText:"取消"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"供应商id",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["supplierId"],expression:"['supplierId']"}],attrs:{placeholder:"请输入供应商id"}})],1),a("a-form-item",{attrs:{label:"供应商名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["supplierName"],expression:"['supplierName']"}],attrs:{placeholder:"请输入供应商名称"}})],1),a("a-form-item",{attrs:{label:"结算金额",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["settlementMoney"],expression:"['settlementMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入结算金额"}})],1),a("a-form-item",{attrs:{label:"理论应收服务费",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["theoreticalReceivablesMoney"],expression:"['theoreticalReceivablesMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入理论应收服务费"}})],1),a("a-form-item",{attrs:{label:"减免服务费",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["freeMoney"],expression:"['freeMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入减免服务费"}})],1),a("a-form-item",{attrs:{label:"实际应收服务费",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["actualReceivablesMoney"],expression:"['actualReceivablesMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入实际应收服务费"}})],1),a("a-form-item",{attrs:{label:"已收服务费",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["receivedMoney"],expression:"['receivedMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入已收服务费"}})],1),a("a-form-item",{attrs:{label:"未收服务费",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["unreceivedMoney"],expression:"['unreceivedMoney']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入未收服务费"}})],1),a("a-form-item",{attrs:{label:"核算周期年",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["accountingYear"],expression:"['accountingYear']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入核算周期年"}})],1),a("a-form-item",{attrs:{label:"核算周期季度",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["accountingQuarter"],expression:"['accountingQuarter']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入核算周期季度"}})],1),a("a-form-item",{attrs:{label:"创建时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime"],expression:"['createTime']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择创建时间","trigger-change":!0}})],1)],1)],1)],1)},r=[],i=a("0fea"),s=a("85ee"),l=a.n(s),o=(a("ca00"),a("2dab")),c={name:"SummarySupplierModal",components:{JDate:o["default"]},data:function(){return{form:this.$form.createForm(this),title:"操作",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/summary/summarySupplier/add",edit:"/summary/summarySupplier/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"supplierId","supplierName","settlementMoney","theoreticalReceivablesMoney","freeMoney","actualReceivablesMoney","receivedMoney","unreceivedMoney","accountingYear","accountingQuarter","createTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var r="",s="";e.model.id?(r+=e.url.edit,s="put"):(r+=e.url.add,s="post");var l=Object.assign(e.model,n);Object(i["h"])(r,l,s).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},popupCallback:function(e){this.form.setFieldsValue(l()(e,"supplierId","supplierName","settlementMoney","theoreticalReceivablesMoney","freeMoney","actualReceivablesMoney","receivedMoney","unreceivedMoney","accountingYear","accountingQuarter","createTime"))}}},u=c,d=a("cba8"),p=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=p.exports},"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},r=[],i=a("caaf"),s=a.n(i),l={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?s()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?s()(e,this.dateFormat):null}},methods:{moment:s.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},o=l,c=a("cba8"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},"2f34":function(e,t,a){},"3d5c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QkYwNjE0M0ZCRjQxMUVBQTlEN0Y1Q0UwMjhDOUU3MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QkYwNjE0NEZCRjQxMUVBQTlEN0Y1Q0UwMjhDOUU3MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhCRjA2MTQxRkJGNDExRUFBOUQ3RjVDRTAyOEM5RTcwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhCRjA2MTQyRkJGNDExRUFBOUQ3RjVDRTAyOEM5RTcwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DfIXoQAAAJxJREFUeNpi/D+NAR0oA/F2KNsTiO8iSzKhKeYH4hogVoXiOqgYVg0eQPwIiBOQxOKgYh7oGkSBeCUQ8zFgAj6onAiyhkAcipE1BSFrkGUgDOSQNbAQoYEZWygRBCANjECsToRaDZBakIYsqKcJgQAgzgdpyCPBRdkgz2aS4Jf/IA370AQnArEklP0c5Ax8aYkBaoAtFO9HlwQIMABH1BOEAuMjQwAAAABJRU5ErkJggg=="},"6eb7":function(e,t,a){},"85ee":function(e,t,a){(function(t){var a=1/0,n=9007199254740991,r="[object Arguments]",i="[object Function]",s="[object GeneratorFunction]",l="[object Symbol]",o="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=o||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,n=e?e.length:0,r=Array(n);while(++a<n)r[a]=t(e[a],a,e);return r}function m(e,t){var a=-1,n=t.length,r=e.length;while(++a<n)e[r+a]=t[a];return e}var h=Object.prototype,f=h.hasOwnProperty,y=h.toString,g=u.Symbol,b=h.propertyIsEnumerable,v=g?g.isConcatSpreadable:void 0,w=Math.max;function S(e,t,a,n,r){var i=-1,s=e.length;a||(a=x),r||(r=[]);while(++i<s){var l=e[i];t>0&&a(l)?t>1?S(l,t-1,a,n,r):m(r,l):n||(r[r.length]=l)}return r}function C(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var n=-1,r=t.length,i={};while(++n<r){var s=t[n],l=e[s];a(l,s)&&(i[s]=l)}return i}function A(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,n=-1,r=w(a.length-t,0),i=Array(r);while(++n<r)i[n]=a[t+n];n=-1;var s=Array(t+1);while(++n<t)s[n]=a[n];return s[t]=i,d(e,this,s)}}function x(e){return j(e)||O(e)||!!(v&&e&&e[v])}function R(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function O(e){return Q(e)&&f.call(e,"callee")&&(!b.call(e,"callee")||y.call(e)==r)}var j=Array.isArray;function M(e){return null!=e&&E(e.length)&&!_(e)}function Q(e){return N(e)&&M(e)}function _(e){var t=I(e)?y.call(e):"";return t==i||t==s}function E(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||N(e)&&y.call(e)==l}var F=A((function(e,t){return null==e?{}:C(e,p(S(t,1),R))}));e.exports=F}).call(this,a("2409"))},9053:function(e,t,a){},a6f0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("a-select",{staticStyle:{width:"120px","margin-right":"10px"},attrs:{"label-in-value":"","default-value":{key:""}},on:{change:e.handleChangeSe1}},e._l(e.yearSelect,(function(t){return a("a-select-option",{key:t.key},[e._v("\n      "+e._s(t.name)+"\n    ")])})),1),a("a-select",{staticStyle:{width:"120px"},attrs:{"label-in-value":"","default-value":{key:""}},on:{change:e.handleChangeSe2}},e._l(e.quarterOptions,(function(t){return a("a-select-option",{key:t.key},[e._v("\n      "+e._s(t.name)+"\n    ")])})),1),e._v("\n  --\n  "),a("a-select",{staticStyle:{width:"120px","margin-right":"10px"},attrs:{"label-in-value":"","default-value":{key:""}},on:{change:e.handleChanSe3}},e._l(e.yearSelect,(function(t){return a("a-select-option",{key:t.key},[e._v("\n      "+e._s(t.name)+"\n    ")])})),1),a("a-select",{staticStyle:{width:"120px"},attrs:{"label-in-value":"","default-value":{key:""}},on:{change:e.handleChanSe4}},e._l(e.quarterOptions,(function(t){return a("a-select-option",{key:t.key},[e._v("\n      "+e._s(t.name)+"\n    ")])})),1)],1)},r=[],i=(a("0fea"),{name:"addSelect",props:{},watch:{},data:function(){return{queryStartAccountingYear:"",queryEndAccountingYear:"",queryStartAccountingQuarter:"",queryEndAccountingQuarter:"",currentYear:2015,value:"",yearSelect:[{name:"全部",key:""}],quarterOptions:[{name:"全部",key:""},{name:"Q1",key:"1"},{name:"Q2",key:"2"},{name:"Q3",key:"3"},{name:"Q4",key:"4"}]}},mounted:function(){for(var e=new Date,t=e.getFullYear(),a=t-2015,n=[],r=0;r<=a;r++)n.push({name:this.currentYear+r,key:this.currentYear+r});this.yearSelect=this.yearSelect.concat(n)},methods:{handleChangeSe1:function(e){this.$emit("queryStartAccountingYear",e.key)},handleChangeSe2:function(e){this.$emit("queryStartAccountingQuarter",e.key)},handleChanSe3:function(e){this.$emit("queryEndAccountingYear",e.key)},handleChanSe4:function(e){this.$emit("queryEndAccountingQuarter",e.key)}}}),s=i,l=(a("e266"),a("cba8")),o=Object(l["a"])(s,n,r,!1,null,"7f37dcfb",null);t["default"]=o.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("7c98"),r=a.n(n),i=a("ca00"),s=a("0fea"),l=a("430a"),o=a("9fb0");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p=null,m={data:function(){return{refreshTime:"",tokenHeader:{"X-Access-Token":l["default"].ls.get(o["a"]),"X-Depart-Id":l["default"].ls.get(o["b"])},queryParam:{},customerResult:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","50","100","300"],showTotal:function(e,t){return p?t[0]+"-"+(t[1]-1)+" 共"+(e-1)+"条":t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){if(!this.isStopAddTmail){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(s["c"])(this.url.list,a).then((function(e){e.success&&(r.a.get(e.result,"refreshTime","")&&(t.refreshTime=e.result.refreshTime),t.dataSource=[],e.result.page?(t.customerResult=e.result.customerResult,t.dataSource=e.result.page.records,t.ipagination.total=e.result.page.total):(t.dataSource=e.result.records,t.ipagination.total=e.result.total),t.isSwitch&&t.dataSource.length&&t.dataSource.forEach((function(e,t){if(e.isReceiveSms?e.isChecked=!1:e.isChecked=!0,""==e.id)return t+1})),t.isMyId&&t.dataSource.length&&t.dataSource.forEach((function(e,t){e.id=t+1})),t.isFooter&&t.dataSource.length?(t.dataSource.push({}),p=!0):p=!1),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["e"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;this.$confirm({title:"您确定删除么？",content:"",onOk:function(){Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},customerHandleExportXls:function(e,t){var a=this;e&&"string"==typeof e||(e="导出文件");var n=u({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),n.pageNo=this.ipagination.current,n.pageSize=this.ipagination.pageSize,Object(s["b"])(t,n).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([t],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=n,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}else a.$message.warning("文件下载失败")}))},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=u({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),a.pageNo=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(s["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=n,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,n=a.message,r=a.result,i=r.msg,s=r.fileUrl,l=r.fileName,o=window._CONFIG["domianURL"]+s;this.$warning({title:n,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请"," ",t("a",{attrs:{href:o,target:"_blank",download:l}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},bccc:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticClass:"dashCard",attrs:{bordered:!1}},[n("div",{staticClass:"sysUpdateTime"},[n("img",{attrs:{src:a("3d5c"),alt:""}}),e._v("\n    统计时间："+e._s(e.refreshTime)+"\n  ")]),n("div",{staticClass:"summary"},[n("div",{staticClass:"card-panel",staticStyle:{width:"45px"}},[n("span",{staticClass:"cardptit"},[e._v("合计")]),n("span",{staticClass:"number",staticStyle:{opacity:"0"}},[e._v("123123")])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v("结算金额")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v(" "+e._s(e.customerResult.settlementMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v(" 理论应收服务费")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v("\n          "+e._s(e.customerResult.theoreticalReceivablesMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v("减免服务费")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v(e._s(e.customerResult.freeMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v("实际应收服务费")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v("\n          "+e._s(e.customerResult.actualReceivablesMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v("已收服务费")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v(" "+e._s(e.customerResult.receivedMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])]),n("div",{staticClass:"card-panel"},[n("span",{staticClass:"cardptit"},[e._v("未收服务费")]),n("span",{staticClass:"number"},[n("span",{staticClass:"number-text"},[e._v(" "+e._s(e.customerResult.unreceivedMoney)),n("span",{staticClass:"summary-text"},[e._v("元")])])])])]),n("div",{staticClass:"table-operator"},[e._v("\n    供应商名称:\n    "),n("a-input",{staticStyle:{width:"150px"},attrs:{placeholder:"供应商名称"},model:{value:e.supplierName,callback:function(t){e.supplierName="string"===typeof t?t.trim():t},expression:"supplierName"}}),e._v("\n       核算周期:\n    "),n("addSelectTime",{staticStyle:{width:"150px"},on:{queryStartAccountingYear:e.queryStartAccountingYear,queryStartAccountingQuarter:e.queryStartAccountingQuarter,queryEndAccountingYear:e.queryEndAccountingYear,queryEndAccountingQuarter:e.queryEndAccountingQuarter}}),e._v("\n      \n    "),n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handle_query}},[e._v("查询")]),n("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("按供应商统计")}}},[e._v("导出")])],1),n("div",{staticClass:"table-operator"}),n("div",[n("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[n("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?n("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?n("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.uploadFile(t)}}},[e._v("\n          下载\n        ")]):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[e._v("更多\n            "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[n("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),n("summarySupplier-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],i=(a("6eb7"),a("ac0d")),s=a("b65a"),l=a("0edc"),o=a("a6f0"),c={name:"SummarySupplierList",mixins:[s["a"],i["b"]],components:{SummarySupplierModal:l["default"],addSelectTime:o["default"]},data:function(){return{description:"SUMMARY_SUPPLIER管理页面",supplierName:"",columns:[{title:"#",dataIndex:"",key:"rowIndex",align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"供应商名称",align:"center",widt:330,dataIndex:"supplierName"},{title:"结算金额",align:"center",dataIndex:"settlementMoney"},{title:"理论应收服务费",align:"center",dataIndex:"theoreticalReceivablesMoney"},{title:"减免服务费",align:"center",dataIndex:"freeMoney"},{title:"实际应收服务费",align:"center",dataIndex:"actualReceivablesMoney"},{title:"已收服务费",align:"center",dataIndex:"receivedMoney"},{title:"未收服务费",align:"center",dataIndex:"unreceivedMoney"},{title:"核算周期年",align:"center",dataIndex:"accountingYear",customRender:function(e,t,a){if(t.id)return e+"年Q"+t.accountingQuarter+"季度"}}],url:{list:"/summary/summarySupplier/list",delete:"/summary/summarySupplier/delete",deleteBatch:"/summary/summarySupplier/deleteBatch",exportXlsUrl:"/summary/summarySupplier/exportXls",importExcelUrl:"summary/summarySupplier/importExcel"},dictOptions:{}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},handle_query:function(){this.queryParam.supplierName=this.supplierName,this.searchQuery()},queryStartAccountingYear:function(e){this.queryParam.queryStartAccountingYear=e},queryStartAccountingQuarter:function(e){this.queryParam.queryStartAccountingQuarter=e},queryEndAccountingYear:function(e){this.queryParam.queryEndAccountingYear=e},queryEndAccountingQuarter:function(e){this.queryParam.queryEndAccountingQuarter=e}}},u=c,d=(a("f824"),a("cba8")),p=Object(d["a"])(u,n,r,!1,null,"20f8be44",null);t["default"]=p.exports},e266:function(e,t,a){"use strict";a("2f34")},f824:function(e,t,a){"use strict";a("9053")}}]);