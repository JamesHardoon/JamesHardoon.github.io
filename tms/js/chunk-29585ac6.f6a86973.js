(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29585ac6"],{"12a7":function(e,t,n){"use strict";n("4558")},4558:function(e,t,n){},8034:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"600",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[e.designNameOption.length>0?n("a-form",{attrs:{form:e.form}},[n("a-form-item",{attrs:{label:""}},[n("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[n("a-card",{style:{marginTop:"12px",height:"auto"}},[n("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.designNameChange},model:{value:e.designNameValue,callback:function(t){e.designNameValue=t},expression:"designNameValue"}},[n("a-row",[e._l(e.designNameOption,(function(t){return[n("a-col",{attrs:{span:6}},[n("a-checkbox",{attrs:{value:t.value}},[e._v(e._s(t.text))])],1)]}))],2)],1)],1)],1)],1)],1):n("div",[n("h3",[e._v("无可配置角色!")])])],1),n("div",{staticClass:"drawer-bootom-button"},[n("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:e.checkALL}},[e._v("全部勾选")]),n("a-menu-item",{key:"2",on:{click:e.cancelCheckALL}},[e._v("取消全选")])],1),n("a-button",[e._v("\n        操作 "),n("a-icon",{attrs:{type:"up"}})],1)],1),n("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[n("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),n("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存")])],1)],1)},i=[],a=n("0fea"),o=n("d579");n("89f2");function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){r=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw a}}}}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var u={name:"DeptRoleUserModal",components:{JEllipsis:o["default"]},data:function(){return{currentDeptId:"",title:"部门角色分配",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/sys/sysDepartRole/deptRoleUserAdd",getDeptRoleList:"/sys/sysDepartRole/getDeptRoleList",getDeptRoleByUserId:"/sys/sysDepartRole/getDeptRoleByUserId"},designNameOption:[],userId:"",newRoleId:"",oldRoleId:"",designNameValue:[],desformList:[]}},created:function(){},methods:{add:function(e,t){this.userId=e.id,this.currentDeptId=t,this.loadDesformList(),this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,Object(a["c"])(this.url.getDeptRoleByUserId,{userId:this.userId}).then((function(e){if(e.success){var n,s=[],i=r(e.result);try{for(i.s();!(n=i.n()).done;){var a=n.value;s.push(a.droleId)}}catch(o){i.e(o)}finally{i.f()}t.oldRoleId=s.join(","),t.designNameValue=s,t.newRoleId=s.join(",")}}))},close:function(){this.$emit("close"),this.visible=!1},handleSubmit:function(){var e=this;e.confirmLoading=!0;var t=this.url.add,n="post",s=Object.assign(this.model,{});s.userId=this.userId,s.newRoleId=this.newRoleId,s.oldRoleId=this.oldRoleId,Object(a["h"])(t,s,n).then((function(t){t.success?(e.$message.success(t.message),e.$emit("reload"),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.designNameOption=[],this.designNameValue=[],this.close()},designNameChange:function(e){this.newRoleId=e.join(",")},checkALL:function(){var e,t=[],n=r(this.desformList);try{for(n.s();!(e=n.n()).done;){var s=e.value;t.push(s.id)}}catch(i){n.e(i)}finally{n.f()}this.designNameValue=t,this.newRoleId=t.join(",")},cancelCheckALL:function(){this.designNameValue=[],this.newRoleId=""},loadDesformList:function(){var e=this;Object(a["c"])(this.url.getDeptRoleList,{departId:this.currentDeptId,userId:this.userId}).then((function(t){if(t.success){e.desformList=t.result;var n,s=[],i=r(e.desformList);try{for(i.s();!(n=i.n()).done;){var a=n.value;s.push({value:a.id,text:a.roleName})}}catch(o){i.e(o)}finally{i.f()}e.designNameOption=s}}))}}},d=u,f=(n("12a7"),n("cba8")),m=Object(f["a"])(d,s,i,!1,null,"518ec681",null);t["default"]=m.exports},d579:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tooltip",{attrs:{placement:"topLeft"}},[n("template",{slot:"title"},[n("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},i=[],a={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},o=a,r=n("cba8"),l=Object(r["a"])(o,s,i,!1,null,"4de15389",null);t["default"]=l.exports}}]);