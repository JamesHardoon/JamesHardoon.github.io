(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ea345b6","chunk-41a8d376","chunk-61e3a1be"],{"1dc5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"标题"}},[a("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryParam.titile,callback:function(t){e.$set(e.queryParam,"titile",t)},expression:"queryParam.titile"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("系统通告")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[0==s.sendStatus?a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]):e._e(),0==s.sendStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[1!=s.sendStatus?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1):e._e(),0==s.sendStatus?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定发布吗?"},on:{confirm:function(){return e.releaseData(s.id)}}},[a("a",[e._v("发布")])])],1):e._e(),1==s.sendStatus?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定撤销吗?"},on:{confirm:function(){return e.reovkeData(s.id)}}},[a("a",[e._v("撤销")])])],1):e._e(),a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(s)}}},[e._v("查看")])])],1)],1)],1)}}])})],1),a("sysAnnouncement-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],n=a("4647"),i=a("4ec3"),o=a("0fea"),l=a("b65a"),c={name:"SysAnnouncementList",mixins:[l["a"]],components:{SysAnnouncementModal:n["default"]},data:function(){return{description:"系统通告表管理页面",queryParam:{},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"标题",align:"center",dataIndex:"titile"},{title:"消息类型",align:"center",dataIndex:"msgCategory",customRender:function(e){return"1"==e?"通知公告":"2"==e?"系统消息":e}},{title:"发布人",align:"center",dataIndex:"sender"},{title:"优先级",align:"center",dataIndex:"priority",customRender:function(e){return"L"==e?"低":"M"==e?"中":"H"==e?"高":e}},{title:"通告对象",align:"center",dataIndex:"msgType",customRender:function(e){return"USER"==e?"指定用户":"ALL"==e?"全体用户":e}},{title:"发布状态",align:"center",dataIndex:"sendStatus",customRender:function(e){return 0==e?"未发布":1==e?"已发布":2==e?"已撤销":e}},{title:"发布时间",align:"center",dataIndex:"sendTime"},{title:"撤销时间",align:"center",dataIndex:"cancelTime"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/annountCement/list",delete:"/sys/annountCement/delete",deleteBatch:"/sys/annountCement/deleteBatch",releaseDataUrl:"/sys/annountCement/doReleaseData",reovkeDataUrl:"sys/annountCement/doReovkeData",exportXlsUrl:"sys/annountCement/exportXls",importExcelUrl:"sys/annountCement/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{releaseData:function(e){var t=this;Object(i["o"])({id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(1)):t.$message.warning(e.message)}))},reovkeData:function(e){var t=this,a=this;Object(i["p"])({id:e}).then((function(s){s.success?(a.$message.success(s.message),a.loadData(1),t.syncHeadNotic(e)):a.$message.warning(s.message)}))},syncHeadNotic:function(e){Object(o["c"])("sys/annountCement/syncNotic",{anntId:e})}}},d=c,u=(a("3bf9"),a("cba8")),m=Object(u["a"])(d,s,r,!1,null,"2c384f04",null);t["default"]=m.exports},"3bf9":function(e,t,a){"use strict";a("4e3e")},4647:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disabled}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{staticStyle:{width:"100%"}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["titile",e.validatorRules.title],expression:"['titile', validatorRules.title]"}],attrs:{placeholder:"请输入标题",readOnly:e.disableSubmit}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"消息类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["msgCategory",e.validatorRules.msgCategory],expression:"[ 'msgCategory', validatorRules.msgCategory]"}],attrs:{placeholder:"请选择消息类型",disabled:e.disableSubmit,getPopupContainer:function(e){return e.parentNode}}},[a("a-select-option",{attrs:{value:"1"}},[e._v("通知公告")]),a("a-select-option",{attrs:{value:"2"}},[e._v("系统消息")])],1)],1)],1)],1),a("a-row",{staticStyle:{width:"100%"}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"开始时间:"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",e.validatorRules.startTime],expression:"[ 'startTime', validatorRules.startTime]"}],staticStyle:{width:"100%"},attrs:{getCalendarContainer:function(e){return e.parentNode},placeholder:"请选择开始时间",showTime:"",dateFormat:"YYYY-MM-DD HH:mm:ss"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticClass:"endTime",attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"结束时间"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["endTime",e.validatorRules.endTime],expression:"[ 'endTime', validatorRules.endTime]"}],staticStyle:{width:"100%"},attrs:{getCalendarContainer:function(e){return e.parentNode},placeholder:"请选择结束时间",showTime:"",dateFormat:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),a("a-row",{staticStyle:{width:"100%"}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"优先级"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["priority",{}],expression:"[ 'priority', {}]"}],attrs:{placeholder:"请选择优先级",disabled:e.disableSubmit,getPopupContainer:function(e){return e.parentNode}}},[a("a-select-option",{attrs:{value:"L"}},[e._v("低")]),a("a-select-option",{attrs:{value:"M"}},[e._v("中")]),a("a-select-option",{attrs:{value:"H"}},[e._v("高")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"通告类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["msgType",e.validatorRules.msgType],expression:"[ 'msgType', validatorRules.msgType]"}],attrs:{placeholder:"请选择通告类型",disabled:e.disableSubmit,getPopupContainer:function(e){return e.parentNode}},on:{change:e.chooseMsgType}},[a("a-select-option",{attrs:{value:"USER"}},[e._v("指定用户")]),a("a-select-option",{attrs:{value:"ALL"}},[e._v("全体用户")])],1)],1)],1)],1),a("a-row",{staticStyle:{width:"100%"}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"摘要"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["msgAbstract",e.validatorRules.msgAbstract],expression:"['msgAbstract',validatorRules.msgAbstract]"}],attrs:{placeholder:"请输入摘要"}})],1)],1),a("a-col",{attrs:{span:12}},[e.userType?a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"指定用户"}},[a("a-select",{attrs:{mode:"multiple",placeholder:"请选择用户"},on:{dropdownVisibleChange:e.selectUserIds},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1):e._e()],1)],1),a("a-row",{staticStyle:{width:"100%"}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticClass:"j-field-content",attrs:{labelCol:e.labelColX1,wrapperCol:e.wrapperColX1,label:"内容"}},[a("j-editor",{directives:[{name:"decorator",rawName:"v-decorator",value:["msgContent",{}],expression:"[ 'msgContent', {} ]"}],attrs:{triggerChange:""}})],1)],1)],1)],1)],1),a("select-user-list-modal",{ref:"UserListModal",on:{choseUser:e.choseUser}})],1)},r=[],n=a("0fea"),i=a("85ee"),o=a.n(i),l=a("2dab"),c=a("a061"),d=a("ed2a"),u=a("caaf"),m=a.n(u),h={components:{JEditor:c["default"],JDate:l["default"],SelectUserListModal:d["default"]},name:"SysAnnouncementModal",data:function(){return{title:"操作",visible:!1,disableSubmit:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},labelColX1:{xs:{span:24},sm:{span:3}},wrapperColX1:{xs:{span:24},sm:{span:21}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{title:{rules:[{required:!0,message:"请输入标题!"}]},msgCategory:{rules:[{required:!0,message:"请选择消息类型!"}]},msgType:{rules:[{required:!0,message:"请选择通告对象类型!"}]},endTime:{rules:[{required:!0,message:"请选择结束时间!"},{validator:this.endTimeValidate}]},startTime:{rules:[{required:!0,message:"请选择开始时间!"},{validator:this.startTimeValidate}]},msgAbstract:{rules:[{required:!0,message:"请输入摘要!"}]}},url:{queryByIds:"/sys/user/queryByIds",add:"/sys/annountCement/add",edit:"/sys/annountCement/edit"},userType:!1,userIds:[],selectedUser:[],disabled:!1,msgContent:""}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){this.form.resetFields(),this.model={},this.disable=!1,this.visible=!0,this.getUser(e)},getUser:function(e){var t=this;this.model=Object.assign({},e),e&&"USER"===e.msgType&&(this.userType=!0,this.userIds=e.userIds,Object(n["c"])(this.url.queryByIds,{userIds:this.userIds}).then((function(e){if(e.success){for(var a=0;a<e.result.length;a++)t.selectedUser.push(e.result[a].realname);t.$refs.UserListModal.edit(e.result,t.userIds)}}))),this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"endTime","startTime","titile","msgContent","sender","priority","msgCategory","msgType","sendStatus","delFlag","msgAbstract"))}))},close:function(){this.$emit("close"),this.selectedUser=[],this.visible=!1},handleOk:function(){var e=this,t=this;!this.userType||null!=this.userIds&&this.userIds.length>0?this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0;var r="",i="";e.model.id?(r+=e.url.edit,i="put"):(r+=e.url.add,i="post");var o=Object.assign(e.model,s);e.userType&&(o.userIds=e.userIds),Object(n["h"])(r,o,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.resetUser()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}})):this.$message.warning("指定用户不能为空！")},handleCancel:function(){this.visible=!1,this.$emit("close"),this.resetUser()},resetUser:function(){this.userType=!1,this.userIds=[],this.selectedUser=[],this.disabled=!1,this.$refs.UserListModal.edit(null,null)},selectUserIds:function(){this.$refs.UserListModal.add(this.selectedUser,this.userIds)},chooseMsgType:function(e){"USER"==e?this.userType=!0:(this.userType=!1,this.selectedUser=[],this.userIds=[])},choseUser:function(e){this.selectedUser=[],this.userIds=[];for(var t=0;t<e.length;t++)this.selectedUser.push(e[t].realname),this.userIds+=e[t].id+","},startTimeValidate:function(e,t,a){var s=this.form.getFieldValue("endTime");t&&s?m()(t).isBefore(s)?a():a("开始时间需小于结束时间"):a()},endTimeValidate:function(e,t,a){var s=this.form.getFieldValue("startTime");t&&s?m()(s).isBefore(t)?a():a("结束时间需大于开始时间"):a()}}},p=h,f=a("cba8"),g=Object(f["a"])(p,s,r,!1,null,"1592acdf",null);t["default"]=g.exports},"4e3e":function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var s=a("7c98"),r=a.n(s),n=a("ca00"),i=a("0fea"),o=a("430a"),l=a("9fb0");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=null,h={data:function(){return{refreshTime:"",tokenHeader:{"X-Access-Token":o["default"].ls.get(l["a"]),"X-Depart-Id":o["default"].ls.get(l["b"])},queryParam:{},customerResult:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","50","100","300"],showTotal:function(e,t){return m?t[0]+"-"+(t[1]-1)+" 共"+(e-1)+"条":t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){if(!this.isStopAddTmail){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,a).then((function(e){e.success&&(r.a.get(e.result,"refreshTime","")&&(t.refreshTime=e.result.refreshTime),t.dataSource=[],e.result.page?(t.customerResult=e.result.customerResult,t.dataSource=e.result.page.records,t.ipagination.total=e.result.page.total):(t.dataSource=e.result.records,t.ipagination.total=e.result.total),t.isSwitch&&t.dataSource.length&&t.dataSource.forEach((function(e,t){if(e.isReceiveSms?e.isChecked=!1:e.isChecked=!0,""==e.id)return t+1})),t.isMyId&&t.dataSource.length&&t.dataSource.forEach((function(e,t){e.id=t+1})),t.isFooter&&t.dataSource.length?(t.dataSource.push({}),m=!0):m=!1),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(n["e"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;this.$confirm({title:"您确定删除么？",content:"",onOk:function(){Object(i["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},onCancel:function(){}})}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},customerHandleExportXls:function(e,t){var a=this;e&&"string"==typeof e||(e="导出文件");var s=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(s["selections"]=this.selectedRowKeys.join(",")),s.pageNo=this.ipagination.current,s.pageSize=this.ipagination.pageSize,Object(i["b"])(t,s).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([t],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=s,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(s)}else a.$message.warning("文件下载失败")}))},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),a.pageNo=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(i["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=s,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(s)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,s=a.message,r=a.result,n=r.msg,i=r.fileUrl,o=r.fileName,l=window._CONFIG["domianURL"]+i;this.$warning({title:s,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请"," ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(i["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(i["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},b84d:function(e,t,a){"use strict";a("c560")},c560:function(e,t,a){},ed2a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,cancelText:"取消"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"账号"}},[a("a-input",{attrs:{placeholder:"请输入账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"性别"}},[a("a-select",{attrs:{placeholder:"请选择性别"},model:{value:e.queryParam.sex,callback:function(t){e.$set(e.queryParam,"sex",t)},expression:"queryParam.sex"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择性别查询")]),a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.queryParam.email,callback:function(t){e.$set(e.queryParam,"email",t)},expression:"queryParam.email"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"手机号码"}},[a("a-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择状态"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择状态")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("解冻")])],1)],1)],1)]:e._e(),a("a-col",{attrs:{span:6}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchByquery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n                "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n                "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("a-table",{ref:"table",attrs:{rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,onSelect:e.onSelect}},on:{change:e.handleTableChange}})],1)},r=[],n=a("ca00"),i=a("4ec3"),o={name:"SelectUserListModal",components:{},data:function(){return{title:"选择用户",queryParam:{},columns:[{title:"用户账号",align:"center",dataIndex:"username",fixed:"left",width:200},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"手机号码",align:"center",dataIndex:"phone"},{title:"邮箱",align:"center",dataIndex:"email"},{title:"状态",align:"center",dataIndex:"status",customRender:function(e){return 1==e?"正常":2==e?"冻结":e}}],dataSource:[],ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedRowKeys:[],selectionRows:[],visible:!1,toggleSearchStatus:!1}},created:function(){this.loadData()},methods:{add:function(e,t){this.visible=!0,this.edit(e,t)},edit:function(e,t){if(t&&t.length>0?this.selectedRowKeys=t.split(","):this.selectedRowKeys=[],e){var a=this;a.selectionRows=[],e.forEach((function(e,t){a.selectionRows.push({id:a.selectedRowKeys[t],realname:e})}))}else this.selectionRows=[]},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(i["H"])(a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(n["e"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},onSelectChange:function(e){this.selectedRowKeys=e},onSelect:function(e,t){1==t?this.selectionRows.push(e):this.selectionRows.forEach((function(t,a,s){t.id==e.id&&s.splice(a,1)}))},searchReset:function(){var e=this;Object.keys(e.queryParam).forEach((function(t){e.queryParam[t]=""})),e.loadData(1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleCancel:function(){this.selectionRows=[],this.selectedRowKeys=[],this.visible=!1},handleOk:function(){this.$emit("choseUser",this.selectionRows),this.handleCancel()},searchByquery:function(){this.loadData(1)},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus}}},l=o,c=(a("b84d"),a("cba8")),d=Object(c["a"])(l,s,r,!1,null,"7e74df10",null);t["default"]=d.exports}}]);