(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);n(14);var o=n(0),d=n.n(o),c=n(12),r=n.n(c),a=(n(19),n(13)),u=n(4),i=n(5),s=n(8),l=n(7),j=(n.p,n(20),n(11)),b=n(1),h=function(t){return Object(b.jsx)(j.a.Item,{variant:"primary",onClick:function(){return t.deleteTodo(t.todo)},children:t.todo})},f=function(t){return Object(b.jsx)(j.a,{children:t.todos.map((function(e){return Object(b.jsx)(h,{todo:e,deleteTodo:t.deleteTodo},e)}))})},p=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).todo="",o.handleChange=function(t){o.todo=t.target.value,o.setState({todoInput:o.todo})},o.handleSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.todoInput),o.todo=""},o.state={todoInput:""},o}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(b.jsx)("input",{type:"text",placeholder:"Add goal",value:this.todo,onChange:function(e){return t.handleChange(e)}}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})}}]),n}(d.a.Component),O=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).addTodo=function(t){o.setState((function(e){return{todos:[].concat(Object(a.a)(e.todos),[t])}}))},o.deleteTodo=function(t){o.setState((function(e){return{todos:e.todos.filter((function(e){return e!==t}))}}))},o.state={todos:[]},o}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"To-Do"}),Object(b.jsx)(f,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(b.jsx)(p,{addTodo:this.addTodo})]})}}]),n}(d.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,o=e.getFID,d=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),o(t),d(t),c(t),r(t)}))};r.a.render(Object(b.jsx)(d.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.8296de0a.chunk.js.map