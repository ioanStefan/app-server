(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,r,s){"use strict";s.r(r);var a=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("b-container",[e.err||""==e.msg?e._e():s("b-alert",{attrs:{variant:"success",show:""}},[e._v(e._s(e.msg))]),e.err?s("b-alert",{attrs:{variant:"danger",show:""}},[e._v(e._s(e.msg))]):e._e(),s("b-row",[s("b-col"),s("b-col",[s("b-form",[s("b-form-group",{attrs:{id:"usernameGroup",label:"Username","label-for":"usernameInput"}},[s("b-form-input",{attrs:{id:"usernameInput",type:"text",required:""},model:{value:e.username,callback:function(r){e.username=r},expression:"username"}})],1),s("b-form-group",{attrs:{id:"passwordGroup",label:"Password","label-for":"passwordInput"}},[s("b-form-input",{attrs:{id:"passwordInput",type:"password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1),s("b-col")],1)],1)},t=[],o={data:function(){return{username:"",password:"",err:!1,msg:""}},methods:{login(){let e=this,r={username:e.username,password:e.password};this.$axios.post("/users/login",r).then(function(r){r.data.success?(localStorage.setItem("id_token",r.data.token),localStorage.setItem("user",r.data.name),e.$router.push("/"),e.err=!1,e.msg=""):(e.err=!0,e.msg=r.data.msg)}).catch()}}},n=o,u=s("2877"),l=Object(u["a"])(n,a,t,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.96d7b985.js.map