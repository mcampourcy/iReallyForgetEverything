(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),i=a(4),o=a(3),c=a(5),l=a(0),r=a.n(l),d=a(8),u=a.n(d),m=a(6),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this))).props=e,a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.updateTodo(this.props.thisTodo.id)}},{key:"render",value:function(){var e=this.props.thisTodo.isDone?"fa fa-check-square-o":"fa fa-square-o",t=this.props.thisTodo.isDone?"Check this task":"Uncheck this task";return r.a.createElement("p",null,r.a.createElement("i",{onClick:this.handleClick,className:e,"aria-hidden":"true",title:t}),this.props.thisTodo.name,r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",title:"Delete this todo"}))}}]),t}(r.a.Component),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={isActive:!1},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(c.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=document.getElementById("addModal");this.state.isActive?(t.style.display="none",this.state.isActive=!1):(t.style.display="block",this.state.isActive=!0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"#addModal",className:"btn btn-outline-info",onClick:this.handleClick,id:"addTodo"},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Add a Todo"),r.a.createElement("div",{id:"addModal",className:"some-modal"},r.a.createElement("div",{className:"some-modal-content"},r.a.createElement("span",{className:"close",onClick:this.handleClick},"\xd7"),r.a.createElement("form",{id:"addForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskName"},"New Todo"),r.a.createElement("input",{type:"text",className:"form-control",id:"taskName",name:"taskName",placeholder:"Todo : brush my unicorn's hair"})),r.a.createElement("button",{type:"submit",className:"btn btn-success",id:"addTask"},"Add")))))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this))).props=e,a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todoList.map(function(t,a){return r.a.createElement(h,{thisTodo:t,key:a,updateTodo:function(t){return e.props.updateTodo(t)}})});return r.a.createElement("div",{id:"taskList"},r.a.createElement("div",{className:"text-right"},r.a.createElement(p,null)),t)}}]),t}(r.a.Component),f=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={todoList:[{id:0,name:"Task n\xb01",isDone:!1},{id:1,name:"Task n\xb02",isDone:!0},{id:2,name:"Task n\xb03",isDone:!1}]},e}return Object(c.a)(t,e),Object(s.a)(t,[{key:"updateTodo",value:function(e){var t=Object.assign({},this.state);t.todoList=t.todoList.slice(),t.todoList[e]=Object.assign({},t.todoList[e]),t.todoList[e].isDone=!t.todoList[e].isDone,this.setState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 content"},r.a.createElement("h1",null,"I really forget everything"),r.a.createElement("h2",null,"so I make lists"),r.a.createElement(b,{todoList:this.state.todoList,updateTodo:function(t){return e.updateTodo(t)}})))}}]),t}(r.a.Component);u.a.render(r.a.createElement(f,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.89e6e245.chunk.js.map