(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"m/ta":function(e,a,t){"use strict";t.r(a);t("76GV");var l,r,m,s,o=t("XiP4"),n=(t("bcsP"),t("m9h3")),i=(t("7EcG"),t("4+hb")),c=(t("dxBz"),t("4z9h")),d=(t("UGkV"),t("KWz7")),p=(t("Pbqo"),t("mtdH")),u=t("zAuD"),f=t.n(u),g=t("43Yg"),b=t.n(g),E=t("/tCh"),h=t.n(E),M=t("scpF"),F=t.n(M),v=t("O/V9"),y=t.n(v),O=t("8aBX"),w=t.n(O),j=(t("5JyO"),t("HzjU")),q=(t("WTyv"),t("+HAJ")),x=(t("NYtG"),t("C+G2")),A=(t("2x7Z"),t("szh6")),k=t("2w0b"),z=t.n(k),C=t("LneV"),U=t("lvdA"),G=t("zHco"),H=t("4A03"),V=t.n(H),N=A["a"].Item,P=x["a"].Option,R=q["a"].RangePicker,T=j["a"].TextArea,B=(l=Object(C["connect"])(function(e){var a=e.loading;return{submitting:a.effects["form/submitRegularForm"]}}),r=A["a"].create(),l(m=r((s=function(e){function a(){var e,t;b()(this,a);for(var l=arguments.length,r=new Array(l),m=0;m<l;m++)r[m]=arguments[m];return t=F()(this,(e=y()(a)).call.apply(e,[this].concat(r))),t.handleSubmit=function(e){var a=t.props,l=a.dispatch,r=a.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){e||l({type:"form/submitRegularForm",payload:a})})},t}return w()(a,e),h()(a,[{key:"render",value:function(){var e=this.props.submitting,a=this.props.form,t=a.getFieldDecorator,l=a.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return z.a.createElement(G["a"],{title:z.a.createElement(U["FormattedMessage"],{id:"app.forms.basic.title"}),content:z.a.createElement(U["FormattedMessage"],{id:"app.forms.basic.description"})},z.a.createElement(o["a"],{bordered:!1},z.a.createElement(A["a"],{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},z.a.createElement(N,f()({},r,{label:z.a.createElement(U["FormattedMessage"],{id:"form.title.label"})}),t("title",{rules:[{required:!0,message:Object(U["formatMessage"])({id:"validation.title.required"})}]})(z.a.createElement(j["a"],{placeholder:Object(U["formatMessage"])({id:"form.title.placeholder"})}))),z.a.createElement(N,f()({},r,{label:z.a.createElement(U["FormattedMessage"],{id:"form.date.label"})}),t("date",{rules:[{required:!0,message:Object(U["formatMessage"])({id:"validation.date.required"})}]})(z.a.createElement(R,{style:{width:"100%"},placeholder:[Object(U["formatMessage"])({id:"form.date.placeholder.start"}),Object(U["formatMessage"])({id:"form.date.placeholder.end"})]}))),z.a.createElement(N,f()({},r,{label:z.a.createElement(U["FormattedMessage"],{id:"form.goal.label"})}),t("goal",{rules:[{required:!0,message:Object(U["formatMessage"])({id:"validation.goal.required"})}]})(z.a.createElement(T,{style:{minHeight:32},placeholder:Object(U["formatMessage"])({id:"form.goal.placeholder"}),rows:4}))),z.a.createElement(N,f()({},r,{label:z.a.createElement(U["FormattedMessage"],{id:"form.standard.label"})}),t("standard",{rules:[{required:!0,message:Object(U["formatMessage"])({id:"validation.standard.required"})}]})(z.a.createElement(T,{style:{minHeight:32},placeholder:Object(U["formatMessage"])({id:"form.standard.placeholder"}),rows:4}))),z.a.createElement(N,f()({},r,{label:z.a.createElement("span",null,z.a.createElement(U["FormattedMessage"],{id:"form.client.label"}),z.a.createElement("em",{className:V.a.optional},z.a.createElement(U["FormattedMessage"],{id:"form.optional"}),z.a.createElement(d["a"],{title:z.a.createElement(U["FormattedMessage"],{id:"form.client.label.tooltip"})},z.a.createElement(p["a"],{type:"info-circle-o",style:{marginRight:4}}))))}),t("client")(z.a.createElement(j["a"],{placeholder:Object(U["formatMessage"])({id:"form.client.placeholder"})}))),z.a.createElement(N,f()({},r,{label:z.a.createElement("span",null,z.a.createElement(U["FormattedMessage"],{id:"form.invites.label"}),z.a.createElement("em",{className:V.a.optional},z.a.createElement(U["FormattedMessage"],{id:"form.optional"})))}),t("invites")(z.a.createElement(j["a"],{placeholder:Object(U["formatMessage"])({id:"form.invites.placeholder"})}))),z.a.createElement(N,f()({},r,{label:z.a.createElement("span",null,z.a.createElement(U["FormattedMessage"],{id:"form.weight.label"}),z.a.createElement("em",{className:V.a.optional},z.a.createElement(U["FormattedMessage"],{id:"form.optional"})))}),t("weight")(z.a.createElement(c["a"],{placeholder:Object(U["formatMessage"])({id:"form.weight.placeholder"}),min:0,max:100})),z.a.createElement("span",{className:"ant-form-text"},"%")),z.a.createElement(N,f()({},r,{label:z.a.createElement(U["FormattedMessage"],{id:"form.public.label"}),help:z.a.createElement(U["FormattedMessage"],{id:"form.public.label.help"})}),z.a.createElement("div",null,t("public",{initialValue:"1"})(z.a.createElement(i["a"].Group,null,z.a.createElement(i["a"],{value:"1"},z.a.createElement(U["FormattedMessage"],{id:"form.public.radio.public"})),z.a.createElement(i["a"],{value:"2"},z.a.createElement(U["FormattedMessage"],{id:"form.public.radio.partially-public"})),z.a.createElement(i["a"],{value:"3"},z.a.createElement(U["FormattedMessage"],{id:"form.public.radio.private"})))),z.a.createElement(N,{style:{marginBottom:0}},t("publicUsers")(z.a.createElement(x["a"],{mode:"multiple",placeholder:Object(U["formatMessage"])({id:"form.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===l("public")?"block":"none"}},z.a.createElement(P,{value:"1"},z.a.createElement(U["FormattedMessage"],{id:"form.publicUsers.option.A"})),z.a.createElement(P,{value:"2"},z.a.createElement(U["FormattedMessage"],{id:"form.publicUsers.option.B"})),z.a.createElement(P,{value:"3"},z.a.createElement(U["FormattedMessage"],{id:"form.publicUsers.option.C"}))))))),z.a.createElement(N,f()({},m,{style:{marginTop:32}}),z.a.createElement(n["a"],{type:"primary",htmlType:"submit",loading:e},z.a.createElement(U["FormattedMessage"],{id:"form.submit"})),z.a.createElement(n["a"],{style:{marginLeft:8}},z.a.createElement(U["FormattedMessage"],{id:"form.save"}))))))}}]),a}(k["PureComponent"]),m=s))||m)||m);a["default"]=B}}]);