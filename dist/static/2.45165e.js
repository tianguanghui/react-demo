webpackJsonp([2,6],{49:function(e,t){"use strict";function u(e,t){var u=new Date(e),a=u.getFullYear(),o=u.getMonth()+1,d=u.getDate(),l=u.getHours(),r=u.getMinutes(),i=u.getSeconds();switch(t){case 0:return n(o)+"-"+n(d);case 1:return n(l)+"-"+n(r);case 2:return a+"-"+n(o)+"-"+n(d);case 3:return a+"-"+n(o)+"-"+n(d)+"  "+n(l)+":"+n(r);default:return a+"-"+n(o)+"-"+n(d)+"  "+n(l)+":"+n(r)+":"+n(i)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var n=function(e){return e>=10?e:"0"+e}},136:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ACTION_HANDLERS=void 0;var a,o=u(50),d=n(o),l=u(51),r=n(l),i=u(84),f=n(i),c="ADD_TODO",s="DEL_TODO",p="TOGGLE_TODO",v=function(e){return{type:c,payload:{id:setTimeout(function(){}),content:e,completed:!1,createdAt:Date.now()}}},_=function(e){return{type:p,payload:e}},h=function(e){return{type:s,payload:e}};t["default"]={addTodo:v,toggleTodo:_,delTodo:h};t.ACTION_HANDLERS=(a={},(0,d["default"])(a,c,function(e,t){var u=t.payload;return[].concat((0,f["default"])(e),[u])}),(0,d["default"])(a,p,function(e,t){var u=t.payload;return e.map(function(e){return e.id===u?(0,r["default"])({},e,{completed:!e.completed}):e})}),(0,d["default"])(a,s,function(e,t){var u=t.payload;return e.filter(function(e){return e.id!==u})}),a)},219:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=u(7),o=n(a),d=u(11),l=n(d),r=u(9),i=n(r),f=u(10),c=n(f),s=u(13),p=n(s),v=u(12),_=n(v),h=u(1),m=(n(h),u(65)),y=n(m),T=function(e){function t(e){(0,i["default"])(this,t);var u=(0,p["default"])(this,(t.__proto__||(0,l["default"])(t)).call(this,e));return u.state={inputVal:""},u.handleChange=y["default"].bind(u),u}return(0,_["default"])(t,e),(0,c["default"])(t,[{key:"handleSubmit",value:function(){var e=this.state.inputVal.trim();e&&(this.props.addTodo(e),this.setState({inputVal:""}))}},{key:"render",value:function(){var e=this;return(0,o["default"])("form",{onSubmit:function(t){t.preventDefault(),e.handleSubmit()}},void 0,(0,o["default"])("div",{className:"form-group"},void 0,(0,o["default"])("input",{type:"text",className:"form-control",name:"inputVal",placeholder:"请输入待办事项，敲回车确认添加",required:!0,value:this.state.inputVal,onChange:this.handleChange})))}}]),t}(h.Component);t["default"]=T},220:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=u(7),o=n(a),d=u(11),l=n(d),r=u(9),i=n(r),f=u(10),c=n(f),s=u(13),p=n(s),v=u(12),_=n(v),h=u(1),m=(n(h),u(219)),y=n(m),T=u(49),g=n(T),D=function(e){function t(){return(0,i["default"])(this,t),(0,p["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,_["default"])(t,e),(0,c["default"])(t,[{key:"delTodo",value:function(e){confirm("确认删除？")&&this.props.delTodo(e)}},{key:"render",value:function(){var e=this,t=this.props,u=t.todos,n=t.addTodo,a=t.toggleTodo;return(0,o["default"])("div",{},void 0,(0,o["default"])("ul",{},void 0,u.map(function(t){return(0,o["default"])("li",{onClick:function(){return a(t.id)}},t.id,(0,o["default"])("span",{style:{textDecoration:t.completed?"line-through":"none"}},void 0,t.content),(0,o["default"])("a",{href:"javascript:;",style:{textDecoration:"none"},className:"pull-right",onClick:function(){return e.delTodo(t.id)}},void 0,"⊗"),(0,o["default"])("span",{className:"label label-default pull-right"},void 0,(0,g["default"])(t.createdAt)))})),(0,o["default"])(y["default"],{addTodo:n}))}}]),t}(h.Component);t["default"]=D},226:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(64),o=n(a),d=u(136),l=u(48),r=n(l);t["default"]=(0,o["default"])(r["default"].todos,d.ACTION_HANDLERS)}});