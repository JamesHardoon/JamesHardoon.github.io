(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61f23c7e","chunk-2d0de953","chunk-0dc46ede","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-418fc05a","chunk-2f604fb4","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953","chunk-2d0de953"],{"0a56":function(e,t,a){"use strict";a("2f0d")},"202d":function(e,t,a){"use strict";a("465a")},"2dab":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},n=[],r=a("caaf"),o=a.n(r),s={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?o()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?o()(e,this.dateFormat):null}},methods:{moment:o.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},c=s,l=a("cba8"),d=Object(l["a"])(c,i,n,!1,null,null,null);t["default"]=d.exports},"2f0d":function(e,t,a){},"392e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,visible:e.visible,"confirm-loading":e.confirmLoading,width:"50%"},on:{ok:e.handleOk,cancel:e.handleCancel}},[[a("div",[e._v("\n         名称: \n      "),a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"名称"},model:{value:e.queryName,callback:function(t){e.queryName=t},expression:"queryName"}}),e._v("   \n      "),a("a-button",{staticClass:"btn-search",attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.handle_query(1,null)}}},[e._v("查询")])],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data,customRow:e.rowClick,pagination:!1,scroll:{y:240}},scopedSlots:e._u([{key:"action",fn:function(t){return a("a",{attrs:{href:"javascript:;"}},[a("a-checkbox",{on:{change:e.onChange},model:{value:t.isChecked,callback:function(a){e.$set(t,"isChecked",a)},expression:"text.isChecked"}},[e._v("\n          选择\n        ")])],1)}}])}),a("div",{staticClass:"pageAtion"},[a("a-pagination",{attrs:{size:"small",total:e.total,"page-size":e.pageSize,"show-size-changer":"","show-quick-jumper":""},on:{change:e.changePage,showSizeChange:e.changePageSize}})],1)]],2)},n=[],r=a("0fea"),o={name:"addSelect",props:{visble:null,title:null,typeKinds:null,checkProjectId:null,checkSupplerId:null},watch:{visble:function(e){this.visible=e,e&&this.getList()},queryName:function(e){this.queryName=e.replace(/(^\s*)|(\s*$)/g,"")},typeKinds:function(e){},checkProjectId:function(e){},checkSupplerId:function(e){}},data:function(){return{myCheckedItem:{},queryName:"",total:null,pageNo:1,pageSize:10,data:[],columns:[{title:"名称",dataIndex:"name",with:"auto"},{width:150,title:"选择",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}],ModalText:"Content of the modal",visible:!1,confirmLoading:!1}},methods:{onChange:function(e){},rowClick:function(e,t){var a=this;return{on:{click:function(){a.data.forEach((function(e,t){e.isChecked=!1,a.$set(a.data,t,e)})),e.isChecked=!e.isChecked,a.$set(a.data,t,e),e.isChecked&&(a.myCheckedItem=e)}}}},handle_query:function(e,t){var a=this,i={pageNo:e};i.pageSize=t||this.pageSize,i.name=this.queryName;var n="project"===this.typeKinds?"/basicdata/baseProject/getBaseProject?supplierId=".concat(this.checkSupplerId):"/basicdata/baseSupplier/getBaseSupplier?projectId=".concat(this.checkProjectId);Object(r["c"])(n,i).then((function(e){e.success&&e.result&&(a.data=e.result.records,a.total=e.result.total)}))},changePage:function(e,t){this.pageNo=e,this.pageSize=t,this.handle_query(e,t)},changePageSize:function(e,t){this.pageNo=e,this.pageSize=t,this.data=[],this.total=0,this.handle_query(e,t)},getList:function(){var e=this;this.myCheckedItem={},this.queryName="";var t="project"===this.typeKinds?"/basicdata/baseProject/getBaseProject?supplierId=".concat(this.checkSupplerId):"/basicdata/baseSupplier/getBaseSupplier?projectId=".concat(this.checkProjectId);this.pageSize=10,this.pageNo=1;var a={pageNo:this.pageNo,pageSize:this.pageSize};Object(r["c"])(t,a).then((function(t){t.success&&t.result&&(e.data=t.result.records,e.total=t.result.total)}))},close:function(){},showModal:function(){this.visible=!0},handleOk:function(e){if(!this.myCheckedItem.id)return this.$message.error("请选择！"),!1;this.$emit("closeVisible",!1),"project"===this.typeKinds?this.$emit("clicktableRow",this.myCheckedItem):this.$emit("clicktableRowSupper",this.myCheckedItem)},handleCancel:function(e){this.$emit("closeVisible",!1)}}},s=o,c=(a("202d"),a("cba8")),l=Object(c["a"])(s,i,n,!1,null,"0555d77b",null);t["default"]=l.exports},4110:function(e,t,a){},"465a":function(e,t,a){},"5a59":function(e,t,a){"use strict";a.r(t);var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{staticClass:"addGHt",attrs:{title:e.title,width:"900px",visible:e.visible,confirmLoading:e.confirmLoading,switchFullscreen:"",wrapClassName:"custom-modal",okText:"提交",footer:"",cancelText:"取消"},on:{ok:e.handleOk,cancel:e.handleCancel}},[[1===e.recordDetail.contractState?a("div",{staticClass:"allStatus beConfirm"},[a("span",[e._v("状态：待确认")])]):e._e(),3===e.recordDetail.contractState?a("div",{staticClass:"allStatus Confirm"},[a("span",[e._v("状态：通过")])]):e._e(),2===e.recordDetail.contractState?a("div",{staticClass:"allStatus notPass"},[a("div",[e._v("状态：未通过")])]):e._e(),2===e.recordDetail.contractState?a("div",{staticClass:"notpassDesc"},[e._v("驳回原因："+e._s(e.recordDetail.confirmContent||""))]):e._e(),a("a-form-model",{ref:"ruleForm",staticStyle:{margin:"20px"},attrs:{model:e.formAd,layout:e.vertical,rules:e.rules}},[a("a-form-model-item",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:""}},[a("div",{staticStyle:{display:"flex"}},[a("a-form-model-item",{ref:"contractNo",attrs:{label:"合同编号",prop:"contractNo"}},[a("div",{staticStyle:{width:"360px","margin-right":"80px",display:"flex","align-items":"center"}},[a("a-input",{model:{value:e.formAd.contractNo,callback:function(t){e.$set(e.formAd,"contractNo",t)},expression:"formAd.contractNo"}})],1)]),a("a-form-model-item",{ref:"taxRegistrationNumber",attrs:{label:"税务登记号",prop:"taxRegistrationNumber"}},[a("div",{staticStyle:{width:"360px","margin-right":"80px",display:"flex","align-items":"center"}},[a("a-input",{attrs:{disabled:""},model:{value:e.formAd.taxRegistrationNumber,callback:function(t){e.$set(e.formAd,"taxRegistrationNumber",t)},expression:"formAd.taxRegistrationNumber"}})],1)])],1)]),a("a-form-model-item",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:""}},[a("div",{staticStyle:{display:"flex"}},[a("a-form-model-item",{ref:"projectName",attrs:{label:"项目",prop:"projectName"}},[a("div",{staticStyle:{width:"360px","margin-right":"80px",display:"flex","align-items":"center"}},[a("a-input",{attrs:{disabled:""},model:{value:e.formAd.projectName,callback:function(t){e.$set(e.formAd,"projectName",t)},expression:"formAd.projectName"}}),"1"===e.editDisabled?a("a-icon",{staticStyle:{"margin-left":"8px",float:"right"},attrs:{type:"plus"},on:{click:function(t){return e.addProject("project")}}}):e._e()],1)]),a("a-form-model-item",{attrs:{label:"签订供应商",prop:"supplierName"}},[a("div",{staticStyle:{width:"360px","margin-right":"80px",display:"flex","align-items":"center"}},[a("a-input",{attrs:{disabled:""},model:{value:e.formAd.supplierName,callback:function(t){e.$set(e.formAd,"supplierName",t)},expression:"formAd.supplierName"}}),"1"===e.editDisabled?a("a-icon",{staticStyle:{"margin-left":"8px"},attrs:{type:"plus"},on:{click:function(t){return e.addProject("supplier")}}}):e._e()],1)])],1)]),a("a-form-model-item",{staticStyle:{"margin-bottom":"-20px"},attrs:{label:""}},[a("div",{staticStyle:{display:"flex"}},[a("a-form-model-item",{staticStyle:{width:"360px","margin-right":"80px"},attrs:{label:"服务费点数",required:"",prop:"serviceChargePoints"}},[a("a-input-search",{attrs:{disabled:e.editDisabled,max:100,placeholder:""},model:{value:e.formAd.serviceChargePoints,callback:function(t){e.$set(e.formAd,"serviceChargePoints",t)},expression:"formAd.serviceChargePoints"}},[a("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[e._v("\n                %\n              ")])],1)],1),a("a-form-model-item",{staticStyle:{width:"360px"},attrs:{label:"合同有限期",prop:"date1"}},[e.startTime?a("a-range-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",allowClear:!1,disabled:e.editDisabled,placeholder:["开始时间","结束时间"],"default-value":[e.moment(e.startTime,e.dateFormat),e.moment(e.endTime,e.dateFormat)]},on:{change:e.onChange,ok:e.onOk},model:{value:e.formAd.date1,callback:function(t){e.$set(e.formAd,"date1",t)},expression:"formAd.date1"}}):e._e()],1)],1)]),a("a-form-model-item",{attrs:{label:""}},[a("div",{staticStyle:{display:"flex"}},[a("a-form-model-item",{staticStyle:{width:"377px","margin-right":"80px"},attrs:{label:"合同附件",prop:"desc"}},[!e.editDisabled||e.fileList.length?a("a-upload",{attrs:{name:"file",multiple:!0,accept:".pdf,.jpg,.doc,docx","file-list":e.fileList},on:{change:e.handleChange}},[e.editDisabled?e._e():a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(" 上传文件\n              ")],1),e.editDisabled?e._e():a("span",{staticStyle:{}},[e._v("支持扩展名：pdf、jpg、doc、docx、文件大小不超过5M")])],1):a("span",[e._v("暂无附件")])],1),a("a-form-model-item",{staticStyle:{width:"400px"},attrs:{label:"合同信息"}},[1==e.formAd.contractType?a("a-tag",{attrs:{color:"blue"}},[e._v("\n              原合同\n            ")]):e._e(),3==e.formAd.contractType?a("a-tag",{attrs:{color:"green"}},[e._v("\n              补充\n            ")]):e._e(),2==e.formAd.contractType?a("a-tag",{attrs:{color:"cyan"}},[e._v("\n              续签\n            ")]):e._e()],1)],1)]),a("a-form-model-item",{staticStyle:{"margin-top":"-10px"},attrs:{label:""}},[a("a-form-model-item",{attrs:{label:"备注"}},[a("a-input",{staticStyle:{width:"800px",height:"90px"},attrs:{maxLength:200,disabled:e.editDisabled,placeholder:"此处为备注说明， 限制200字以内",type:"textarea"},model:{value:e.formAd.remarks,callback:function(t){e.$set(e.formAd,"remarks",t)},expression:"formAd.remarks"}})],1)],1)],1),a("div",{staticClass:"btn-group"},[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",loading:e.loading},on:{click:e.aggree}},[e._v("\n        通过\n      ")]),a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.agreeSign}},[e._v("\n        驳回\n      ")]),a("a-button",{staticStyle:{"margin-right":"10px"},on:{click:e.handleCancel}},[e._v("\n        取消\n      ")])],1)],a("addSelectModal",{attrs:{title:e.myaddTitle,visble:e.isShow},on:{closeVisible:e.closeVisible}}),a("a-modal",{attrs:{title:"提示",visible:e.visibleModel},on:{ok:e.cancelSignModalOk,cancel:e.cancelSignModal}},[a("p",[a("span",[e._v("不通过原因：")]),a("a-textarea",{attrs:{placeholder:"请输入不通过原因","auto-size":{minRows:3,maxRows:5}},model:{value:e.confirmContent,callback:function(t){e.confirmContent=t},expression:"confirmContent"}})],1)])],2)},r=[],o=a("caaf"),s=a.n(o),c=(a("10ef"),a("0fea")),l=a("85ee"),d=a.n(l),u=(a("ca00"),a("2dab")),m=a("392e");function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={name:"ContractModal",components:{JDate:u["default"],addSelectModal:m["default"]},data:function(){var e;return e={vertical:"vertical",recordDetail:{},moment:s.a,startTime:"",endTime:"",dateFormat:"YYYY-MM-DD HH:mm:ss",noloading:!1,confirmContent:"",loading:!1,ImagesUrl:window._CONFIG["domianURL"]+"/sys/common/static/",editDisabled:!0,fileList:[],value:"",ModalText:"Content of the modal",visibleModel:!1,confirmLoading:!1,isShow:!1,myaddTitle:"",headers:{authorization:"authorization-text"},myTime:"",form:this.$form.createForm(this),title:"新增",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}},h(e,"confirmLoading",!1),h(e,"validatorRules",{}),h(e,"url",{add:"/contract/contract/add",edit:"/contract/contract/edit"}),h(e,"labelCol",{span:4}),h(e,"wrapperCol",{span:14}),h(e,"other",""),h(e,"formAd",{name:"",region:void 0,dotShu:"",date1:[],contractNo:"",taxRegistrationNumber:"",delivery:!1,type:[],resource:"",desc:"",myTime:[],contractType:""}),h(e,"rules",{name:[{required:!0,message:"请选择项目",trigger:"blur"}],region:[{required:!0,message:"请选择签订供应商",trigger:"blur"}],dotShu:[{required:!0,message:"请输入服务点数",trigger:"blur"}],date1:[{required:!0,message:"请选择合同有效期",trigger:"change"}],contractNo:[{required:!0,message:"请输入合同编号",trigger:"change"}],taxRegistrationNumber:[{required:!0,message:"税务登记号不能为空 ，请到供应商维护",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),e},created:function(){},methods:(i={aggree:function(){var e=this;if(!this.loading){var t={id:this.recordDetail.id};this.loading=!0,Object(c["k"])("/contract/confirm_pass",t).then((function(t){t.success&&(e.visible=!1,e.$message.success("操作成功！"),e.$emit("ok"),e.loading=!1)})).finally((function(){}))}},removeFile:function(e,t){return!1},cancelSignModalOk:function(){var e=this;if(!this.noloading){var t={id:this.recordDetail.id,confirmContent:this.confirmContent};this.noloading=!0,Object(c["k"])("/contract/confirm_no_pass",t).then((function(t){t.success&&(e.visibleModel=!1,setTimeout((function(){e.visible=!1,e.$message.success("操作成功！"),e.$emit("ok"),e.loading=!1}),1e3))})).finally((function(){}))}},cancelSignModal:function(){this.visibleModel=!1},agreeSign:function(){this.visibleModel=!0},showModalSign:function(){this.visibleModel=!0},handleOk:function(e){var t=this;this.ModalText="The modal will be closed after two seconds",this.confirmLoading=!0,setTimeout((function(){t.visible=!1,t.confirmLoading=!1}),2e3)},handleCancel:function(e){this.visible=!1},closeVisible:function(e){this.isShow=e},addProject:function(){this.isShow=!0,this.myaddTitle="添加项目"},handleChange:function(e){e.file.status,"done"===e.file.status?this.$message.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&this.$message.error("".concat(e.file.name," file upload failed."))},onChange:function(e,t){},onOk:function(e){},onSubmit:function(){this.$refs.ruleForm.validate((function(e){if(!e)return!1;alert("submit!")}))},resetForm:function(){this.$refs.ruleForm.resetFields()},add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.fileList=[],this.model=Object.assign({},e),this.recordDetail=e;var a={projectName:e.projectName,supplierName:e.supplierName,serviceChargePoints:e.serviceChargePoints,contractNo:e.contractNo,taxRegistrationNumber:e.taxRegistrationNumber,remarks:e.remarks,contractType:e.contractType};e.fileList.length&&e.fileList.forEach((function(e,a){t.fileList.push({uid:a+1,name:e.enclosureName,status:"done",url:t.ImagesUrl+e.enclosurePath})})),this.formAd=a,this.startTime=e.startTime,this.endTime=e.endTime,this.visible=!0},close:function(){this.$emit("close"),this.visible=!1}},h(i,"handleOk",(function(){var e=this;this.$refs.ruleForm.validate((function(e){if(!e)return!1;alert("submit!")}));var t=this;this.form.validateFields((function(a,i){if(!a){t.confirmLoading=!0;var n="",r="";e.model.id?(n+=e.url.edit,r="put"):(n+=e.url.add,r="post");var o=Object.assign(e.model,i);Object(c["h"])(n,o,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))})),h(i,"handleCancel",(function(){this.close(),this.$refs.ruleForm.resetFields()})),h(i,"popupCallback",(function(e){this.form.setFieldsValue(d()(e,"contractNo","taxRegistrationNumber","projectId","supplierId","serviceChargePoints","startTime","endTime","remarks","contractState","contractType","createBy","createTime","confirmBy","confirmTime","confirmContent","isNullify"))})),i)},p=f,g=(a("82e8"),a("8c64"),a("cba8")),b=Object(g["a"])(p,n,r,!1,null,"46392f2a",null);t["default"]=b.exports},"6eb7":function(e,t,a){},"82e8":function(e,t,a){"use strict";a("4110")},"85ee":function(e,t,a){(function(t){var a=1/0,i=9007199254740991,n="[object Arguments]",r="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,i=e?e.length:0,n=Array(i);while(++a<i)n[a]=t(e[a],a,e);return n}function h(e,t){var a=-1,i=t.length,n=e.length;while(++a<i)e[n+a]=t[a];return e}var f=Object.prototype,p=f.hasOwnProperty,g=f.toString,b=d.Symbol,y=f.propertyIsEnumerable,v=b?b.isConcatSpreadable:void 0,S=Math.max;function w(e,t,a,i,n){var r=-1,o=e.length;a||(a=j),n||(n=[]);while(++r<o){var s=e[r];t>0&&a(s)?t>1?w(s,t-1,a,i,n):h(n,s):i||(n[n.length]=s)}return n}function x(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var i=-1,n=t.length,r={};while(++i<n){var o=t[i],s=e[o];a(s,o)&&(r[o]=s)}return r}function C(e,t){return t=S(void 0===t?e.length-1:t,0),function(){var a=arguments,i=-1,n=S(a.length-t,0),r=Array(n);while(++i<n)r[i]=a[t+i];i=-1;var o=Array(t+1);while(++i<t)o[i]=a[i];return o[t]=r,u(e,this,o)}}function j(e){return _(e)||O(e)||!!(v&&e&&e[v])}function N(e){if("string"==typeof e||I(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function O(e){return P(e)&&p.call(e,"callee")&&(!y.call(e,"callee")||g.call(e)==n)}var _=Array.isArray;function $(e){return null!=e&&R(e.length)&&!T(e)}function P(e){return F(e)&&$(e)}function T(e){var t=D(e)?g.call(e):"";return t==r||t==o}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function I(e){return"symbol"==typeof e||F(e)&&g.call(e)==s}var q=C((function(e,t){return null==e?{}:x(e,m(w(t,1),N))}));e.exports=q}).call(this,a("2409"))},"8c64":function(e,t,a){"use strict";a("bc72")},"96b6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator"},[e._v("\n    合同编号:\n    "),a("a-input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{placeholder:"请输入合同编号"},model:{value:e.contractNo,callback:function(t){e.contractNo="string"===typeof t?t.trim():t},expression:"contractNo"}}),e._v("\n    供应商:\n    "),a("a-input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{placeholder:"请输入供应商名称"},model:{value:e.supplierName,callback:function(t){e.supplierName="string"===typeof t?t.trim():t},expression:"supplierName"}}),e._v("\n    项目:\n    "),a("a-input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{placeholder:"请输入项目名称"},model:{value:e.projectName,callback:function(t){e.projectName="string"===typeof t?t.trim():t},expression:"projectName"}}),e._v("\n    合同有效期:\n    "),a("a-range-picker",{attrs:{format:"YYYY-MM-DD"},on:{change:e.effectiveChange}}),a("a-button",{staticClass:"btn-search",attrs:{type:"primary",icon:"search"},on:{click:e.handle_query}},[e._v("查询")])],1),a("div",[a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.uploadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"serviceChargePoints",fn:function(t,i){return a("span",{},[e._v("\n        "+e._s(i.serviceChargePoints)+"%\n      ")])}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.preview(i)}}},[e._v("查看")])])}}])})],1),a("ContractSigningModal",{ref:"ContractSigningModal",on:{ok:e.modalFormOk}})],1)},n=[],r=(a("6eb7"),a("ac0d")),o=a("b65a"),s=a("0fea"),c=a("5a59"),l={name:"ContractList",mixins:[o["a"],r["b"]],components:{ContractSigningModal:c["default"]},data:function(){return{description:"CONTRACT管理页面",contractNo:"",supplierName:"",projectName:"",effective_times:"",contractState:1,columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"合同编号",align:"center",dataIndex:"contractNo"},{title:"签订供应商",align:"center",dataIndex:"supplierName"},{title:"项目",align:"center",dataIndex:"projectName"},{title:"服务点数",align:"center",dataIndex:"serviceChargePoints",scopedSlots:{customRender:"serviceChargePoints"}},{title:"有效期",align:"center",dataIndex:"startTime",customRender:function(e,t,a){return e+"-"+t.endTime}},{title:"提交时间",align:"center",dataIndex:"createTime"},{title:"提交人",align:"center",dataIndex:"createByName"},{title:"操作",dataIndex:"action",align:"center",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/contract/list?contractState=1",delete:"/contract//delete",deleteBatch:"/contract//deleteBatch",exportXlsUrl:"/contract//exportXls",importExcelUrl:"contract/contractSignRegister/importExcel"},dictOptions:{}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},effectiveChange:function(e,t){this.effective_times=t},handle_query:function(e,t){this.queryParam.contractNo=this.contractNo,this.queryParam.supplierName=this.supplierName,this.queryParam.projectName=this.projectName,this.queryParam.queryStartTime=this.effective_times[0],this.queryParam.queryEndTime=this.effective_times[1],this.queryParam.contractState=this.contractState,this.searchQuery()},handle_add:function(){this.$router.push({name:"addNews"})},contract_callback:function(e){this.contractState=e,this.handle_query()},handleAddModel:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="添加合同",this.$refs.modalForm.disableSubmit=!1},preview:function(e){var t=this,a={id:e.id};Object(s["c"])("/contract/queryById",a).then((function(e){e.success&&(t.$refs.ContractSigningModal.edit(e.result),t.$refs.ContractSigningModal.title="合同签约登记",t.$refs.ContractSigningModal.disableSubmit=!1)})).finally((function(){}))}}},d=l,u=(a("0a56"),a("cba8")),m=Object(u["a"])(d,i,n,!1,null,"0a063b66",null);t["default"]=m.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var i=a("7c98"),n=a.n(i),r=a("ca00"),o=a("0fea"),s=a("430a"),c=a("9fb0");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=null,h={data:function(){return{refreshTime:"",tokenHeader:{"X-Access-Token":s["default"].ls.get(c["a"]),"X-Depart-Id":s["default"].ls.get(c["b"])},queryParam:{},customerResult:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","50","100","300"],showTotal:function(e,t){return m?t[0]+"-"+(t[1]-1)+" 共"+(e-1)+"条":t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){if(!this.isStopAddTmail){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(o["c"])(this.url.list,a).then((function(e){e.success&&(n.a.get(e.result,"refreshTime","")&&(t.refreshTime=e.result.refreshTime),t.dataSource=[],e.result.page?(t.customerResult=e.result.customerResult,t.dataSource=e.result.page.records,t.ipagination.total=e.result.page.total):(t.dataSource=e.result.records,t.ipagination.total=e.result.total),t.isSwitch&&t.dataSource.length&&t.dataSource.forEach((function(e,t){if(e.isReceiveSms?e.isChecked=!1:e.isChecked=!0,""==e.id)return t+1})),t.isMyId&&t.dataSource.length&&t.dataSource.forEach((function(e,t){e.id=t+1})),t.isFooter&&t.dataSource.length?(t.dataSource.push({}),m=!0):m=!1),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["e"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(o["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;this.$confirm({title:"您确定删除么？",content:"",onOk:function(){Object(o["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},customerHandleExportXls:function(e,t){var a=this;e&&"string"==typeof e||(e="导出文件");var i=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(i["selections"]=this.selectedRowKeys.join(",")),i.pageNo=this.ipagination.current,i.pageSize=this.ipagination.pageSize,Object(o["b"])(t,i).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([t],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=i,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(i)}else a.$message.warning("文件下载失败")}))},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),a.pageNo=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(o["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=i,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(i)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,i=a.message,n=a.result,r=n.msg,o=n.fileUrl,s=n.fileName,c=window._CONFIG["domianURL"]+o;this.$warning({title:i,content:t("div",[t("span",[r]),t("br"),t("span",["具体详情请"," ",t("a",{attrs:{href:c,target:"_blank",download:s}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(o["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(o["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},bc72:function(e,t,a){}}]);