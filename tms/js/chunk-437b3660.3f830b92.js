(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437b3660","chunk-6fccf7d4","chunk-40e3186c"],{"2b2b":function(e,t,a){"use strict";a("39a0")},"39a0":function(e,t,a){},4867:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"表名"}},[a("a-input",{attrs:{placeholder:"请输入表名"},model:{value:e.queryParam.dataTable,callback:function(t){e.$set(e.queryParam,"dataTable",t)},expression:"queryParam.dataTable"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"数据ID"}},[a("a-input",{attrs:{placeholder:"请输入ID"},model:{value:e.queryParam.dataId,callback:function(t){e.$set(e.queryParam,"dataId",t)},expression:"queryParam.dataId"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleCompare()}}},[e._v("数据比较")])],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"dataContent",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:80}})],1)}}])})],1),a("data-log-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},s=[],n=a("b469"),r=a("b65a"),o=a("d579"),l={name:"DataLogList",mixins:[r["a"]],components:{JEllipsis:o["default"],DataLogModal:n["default"]},data:function(){return{description:"数据日志管理页面",columns:[{title:"表名",align:"center",dataIndex:"dataTable",width:"120"},{title:"数据ID",align:"center",dataIndex:"dataId",width:"120"},{title:"版本号",align:"center",dataIndex:"dataVersion",width:"50"},{title:"数据内容",align:"center",dataIndex:"dataContent",width:"150",scopedSlots:{customRender:"dataContent"}},{title:"创建人",align:"center",dataIndex:"createBy",width:"100"}],url:{list:"/sys/dataLog/list"}}},methods:{handleCompare:function(){return this.selectionRows&&2==this.selectionRows.length?this.selectionRows[0].dataId!=this.selectionRows[1].dataId?(this.openNotifIcon("请选择相同的数据库表和数据ID进行比较"),!1):(this.$refs.modalForm.addModal(this.selectionRows),void(this.$refs.modalForm.title="数据比较")):(this.openNotifIcon("请选择两条数据"),!1)},openNotifIcon:function(e){this.$notification["warning"]({message:"提示信息",description:e})}}},d=l,c=(a("2b2b"),a("cba8")),u=Object(c["a"])(d,i,s,!1,null,"5e3c5a3a",null);t["default"]=u.exports},"4a1c":function(e,t,a){"use strict";a("a9b3")},a9b3:function(e,t,a){},b469:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{width:e.modalWidth,visible:e.visible,title:"数据对比窗口",confirmLoading:e.confirmLoading,cancelText:"取消"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"数据库表名","label-col":{span:6},"wrapper-col":{span:15}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataTale",{}],expression:"[ 'dataTale', {}]"}],attrs:{placeholder:"请输入数据库表名",disabled:""},on:{blur:e.handleTableBlur}})],1)],1),a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"数据ID","label-col":{span:5},"wrapper-col":{span:15}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataId",{}],expression:"[ 'dataId', {}]"}],attrs:{placeholder:"请输入数据ID",disabled:""},on:{blur:e.handleIdBlur}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"版本号1","label-col":{span:6},"wrapper-col":{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion1",{}],expression:"[ 'dataVersion1', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:e.handleChange1}},e._l(e.DataVersionList,(function(t,i){return a("a-select-option",{key:i.toString(),attrs:{value:t.id}},[e._v("\n                  "+e._s(t.dataVersion)+"\n                ")])})),1)],1)],1),a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"版本号2","label-col":{span:5},"wrapper-col":{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion2",{}],expression:"[ 'dataVersion2', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:e.handleChange2}},e._l(e.DataVersionList,(function(t,i){return a("a-select-option",{key:i.toString(),attrs:{value:t.id}},[e._v("\n                  "+e._s(t.dataVersion)+"\n                ")])})),1)],1)],1)],1)],1)],1),a("data-log-compare-modal",{ref:"modal",on:{ok:e.modalFormOk}})],1)],1)},s=[],n=a("0fea"),r=a("fcbc"),o={name:"DataLogModal",components:{DataLogCompareModal:r["default"]},dataId1:"",dataId2:"",dataTable1:"",dataID3:"",data:function(){return{modalWidth:700,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},form:this.$form.createForm(this),url:{queryDataVerListUrl:"/sys/dataLog/queryDataVerList"},DataVersionList:[]}},created:function(){},methods:{addModal:function(e){var t=this,a=e[0].dataTable,i=e[0].dataId,s=e[0].dataVersion,n=e[1].dataVersion;this.dataId1=e[0].id,this.dataId2=e[1].id,this.dataTable1=e[0].dataTable,this.dataID3=e[0].dataId,this.initDataVersionList(),this.form.resetFields(),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue({dataTale:a,dataId:i,dataVersion1:s,dataVersion2:n})}))},handleOk:function(){this.close(),this.$refs.modal.compareModal(this.dataId1,this.dataId2),this.$refs.modal.title="数据比较"},handleCancel:function(){this.close()},handleSubmit:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},modalFormOk:function(){},initDataVersionList:function(){var e=this,t=this;Object(n["c"])(t.url.queryDataVerListUrl,{dataTable:this.dataTable1,dataId:this.dataID3}).then((function(t){t.success?e.DataVersionList=t.result:(e.DataVersionList=[],e.dataId1="",e.dataId2="")}))},handleChange1:function(e){this.dataId1=e},handleChange2:function(e){this.dataId2=e},handleTableBlur:function(e){this.dataTable1=e.target.value,this.initDataVersionList()},handleIdBlur:function(e){this.dataID3=e.target.value,this.initDataVersionList()}}},l=o,d=a("cba8"),c=Object(d["a"])(l,i,s,!1,null,"499ee242",null);t["default"]=c.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("7c98"),s=a.n(i),n=a("ca00"),r=a("0fea"),o=a("430a"),l=a("9fb0");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=null,m={data:function(){return{refreshTime:"",tokenHeader:{"X-Access-Token":o["default"].ls.get(l["a"]),"X-Depart-Id":o["default"].ls.get(l["b"])},queryParam:{},customerResult:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","50","100","300"],showTotal:function(e,t){return h?t[0]+"-"+(t[1]-1)+" 共"+(e-1)+"条":t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){if(!this.isStopAddTmail){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(r["c"])(this.url.list,a).then((function(e){e.success&&(s.a.get(e.result,"refreshTime","")&&(t.refreshTime=e.result.refreshTime),t.dataSource=[],e.result.page?(t.customerResult=e.result.customerResult,t.dataSource=e.result.page.records,t.ipagination.total=e.result.page.total):(t.dataSource=e.result.records,t.ipagination.total=e.result.total),t.isSwitch&&t.dataSource.length&&t.dataSource.forEach((function(e,t){if(e.isReceiveSms?e.isChecked=!1:e.isChecked=!0,""==e.id)return t+1})),t.isMyId&&t.dataSource.length&&t.dataSource.forEach((function(e,t){e.id=t+1})),t.isFooter&&t.dataSource.length?(t.dataSource.push({}),h=!0):h=!1),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(n["e"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(r["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;this.$confirm({title:"您确定删除么？",content:"",onOk:function(){Object(r["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},customerHandleExportXls:function(e,t){var a=this;e&&"string"==typeof e||(e="导出文件");var i=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(i["selections"]=this.selectedRowKeys.join(",")),i.pageNo=this.ipagination.current,i.pageSize=this.ipagination.pageSize,Object(r["b"])(t,i).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([t],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=i,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}else a.$message.warning("文件下载失败")}))},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),a.pageNo=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(r["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=i,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,i=a.message,s=a.result,n=s.msg,r=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:i,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请"," ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(r["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(r["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},d579:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},s=[],n={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},r=n,o=a("cba8"),l=Object(o["a"])(r,i,s,!1,null,"4de15389",null);t["default"]=l.exports},fcbc:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:e.modalWidth,visible:e.visible,footer:null,cancelText:"关闭"},on:{cancel:e.handleCancel}},[a("div",{staticClass:"marginCss"},[a("a-table",{ref:"table",attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,rowClassName:e.setdataCss,loading:e.loading,scroll:{y:700},pagination:!1},scopedSlots:e._u([{key:"avatarslot",fn:function(t,i){return[a("div",{staticClass:"anty-img-wrap"},[a("img",{attrs:{src:e.getAvatarView(i)}})])]}}])},[a("span",{attrs:{slot:"dataVersionTitle1"},slot:"dataVersionTitle1"},[a("a-icon",{attrs:{type:"smile-o"}}),e._v(" 版本:"+e._s(e.dataVersion1Num))],1),a("span",{attrs:{slot:"dataVersionTitle2"},slot:"dataVersionTitle2"},[a("a-icon",{attrs:{type:"smile-o"}}),e._v(" 版本:"+e._s(e.dataVersion2Num))],1)])],1)])},s=[],n=a("0fea"),r={name:"DataLogCompareModal",data:function(){return{modalWidth:1e3,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},dataVersion1Num:"",dataVersion2Num:"",columns:[{title:"字段名",align:"left",dataIndex:"code",width:"30%"},{align:"left",dataIndex:"dataVersion1",width:"30%",slots:{title:"dataVersionTitle1"}},{title:"",dataIndex:"imgshow",align:"center",scopedSlots:{customRender:"avatarslot"},width:"10%"},{align:"left",dataIndex:"dataVersion2",width:"30%",slots:{title:"dataVersionTitle2"}}],dataSource:[],loading:!1,url:{queryCompareUrl:"/sys/dataLog/queryCompareList"}}},created:function(){},methods:{loadData:function(e,t){var a=this;this.dataSource=[];var i=this;Object(n["c"])(i.url.queryCompareUrl,{dataId1:e,dataId2:t}).then((function(e){if(e.success){i.dataVersion1Num=e.result[0].dataVersion,i.dataVersion2Num=e.result[1].dataVersion;var t=JSON.parse(e.result[0].dataContent),s=JSON.parse(e.result[1].dataContent);for(var n in t)for(var r in s)n==r&&a.dataSource.push({code:n,imgshow:"",dataVersion1:t[n],dataVersion2:s[r]})}}))},compareModal:function(e,t){this.visible=!0,this.loadData(e,t)},handleCancel:function(){this.close()},modalFormOk:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},setdataCss:function(e){var t="trcolor",a=e.dataVersion1,i=e.dataVersion2;if(a!=i)return t},getAvatarView:function(e){return e.dataVersion1!=e.dataVersion2?"/goright.png":""}}},o=r,l=(a("4a1c"),a("cba8")),d=Object(l["a"])(o,i,s,!1,null,"6f34d1e7",null);t["default"]=d.exports}}]);