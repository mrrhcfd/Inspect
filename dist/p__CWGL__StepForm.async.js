(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"6U26":function(e,a,t){"use strict";t.r(a);t("YgQQ");var n,r,l,s=t("Zgq0"),c=(t("bcsP"),t("m9h3")),m=(t("5JyO"),t("HzjU")),o=t("zAuD"),p=t.n(o),i=t("43Yg"),u=t.n(i),f=t("/tCh"),d=t.n(f),E=t("scpF"),y=t.n(E),h=t("O/V9"),g=t.n(h),b=t("8aBX"),C=t.n(b),v=(t("2x7Z"),t("szh6")),w=(t("NYtG"),t("C+G2")),x=t("2w0b"),F=t.n(x),N=t("LneV"),V=t("rA3V"),A=t.n(V),k=t("m0VP"),L=t.n(k),G=w["a"].Option,I={labelCol:{span:5},wrapperCol:{span:19}},P=(n=Object(N["connect"])(function(e){var a=e.CWGL;return{data:a.step}}),r=v["a"].create(),n(l=r(l=function(e){function a(){return u()(this,a),y()(this,g()(a).apply(this,arguments))}return C()(a,e),d()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.dispatch,n=e.data,r=a.getFieldDecorator,l=a.validateFields,o=function(){l(function(e,a){e||(t({type:"CWGL/saveStepFormData",payload:a}),A.a.push("/CWGL/step-form/confirm"))})};return F.a.createElement(x["Fragment"],null,F.a.createElement(v["a"],{layout:"horizontal",className:L.a.stepForm,hideRequiredMark:!0},F.a.createElement(v["a"].Item,p()({},I,{label:"\u4ed8\u6b3e\u8d26\u6237"}),r("payAccount",{initialValue:n.payAccount,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237"}]})(F.a.createElement(w["a"],{placeholder:"test@example.com"},F.a.createElement(G,{value:"ant-design@alipay.com"},"ant-design@alipay.com")))),F.a.createElement(v["a"].Item,p()({},I,{label:"\u6536\u6b3e\u8d26\u6237"}),F.a.createElement(m["a"].Group,{compact:!0},F.a.createElement(w["a"],{defaultValue:"alipay",style:{width:100}},F.a.createElement(G,{value:"alipay"},"\u652f\u4ed8\u5b9d"),F.a.createElement(G,{value:"bank"},"\u94f6\u884c\u8d26\u6237")),r("receiverAccount",{initialValue:n.receiverAccount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237"},{type:"email",message:"\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f"}]})(F.a.createElement(m["a"],{style:{width:"calc(100% - 100px)"},placeholder:"test@example.com"})))),F.a.createElement(v["a"].Item,p()({},I,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),r("receiverName",{initialValue:n.receiverName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}]})(F.a.createElement(m["a"],{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}))),F.a.createElement(v["a"].Item,p()({},I,{label:"\u8f6c\u8d26\u91d1\u989d"}),r("amount",{initialValue:n.amount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57"}]})(F.a.createElement(m["a"],{prefix:"\uffe5",placeholder:"\u8bf7\u8f93\u5165\u91d1\u989d"}))),F.a.createElement(v["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:I.wrapperCol.span,offset:I.labelCol.span}},label:""},F.a.createElement(c["a"],{type:"primary",onClick:o},"\u4e0b\u4e00\u6b65"))),F.a.createElement(s["a"],{style:{margin:"40px 0 24px"}}),F.a.createElement("div",{className:L.a.desc},F.a.createElement("h3",null,"\u8bf4\u660e"),F.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),F.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),F.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),F.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002")))}}]),a}(F.a.PureComponent))||l)||l);a["default"]=P},"70s2":function(e,a,t){"use strict";t.r(a);t("bcsP");var n,r,l=t("m9h3"),s=(t("nDpc"),t("9i6L")),c=(t("5fwP"),t("QEt6")),m=t("43Yg"),o=t.n(m),p=t("/tCh"),i=t.n(p),u=t("scpF"),f=t.n(u),d=t("O/V9"),E=t.n(d),y=t("8aBX"),h=t.n(y),g=t("2w0b"),b=t.n(g),C=t("LneV"),v=t("rA3V"),w=t.n(v),x=t("ALo4"),F=t("m0VP"),N=t.n(F),V=(n=Object(C["connect"])(function(e){var a=e.CWGL;return{data:a.step}}),n(r=function(e){function a(){return o()(this,a),f()(this,E()(a).apply(this,arguments))}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.props.data,a=function(){w.a.push("/CWGL/step-form/info")},t=b.a.createElement("div",{className:N.a.information},b.a.createElement(s["a"],null,b.a.createElement(c["a"],{xs:24,sm:8,className:N.a.label},"\u4ed8\u6b3e\u8d26\u6237\uff1a"),b.a.createElement(c["a"],{xs:24,sm:16},e.payAccount)),b.a.createElement(s["a"],null,b.a.createElement(c["a"],{xs:24,sm:8,className:N.a.label},"\u6536\u6b3e\u8d26\u6237\uff1a"),b.a.createElement(c["a"],{xs:24,sm:16},e.receiverAccount)),b.a.createElement(s["a"],null,b.a.createElement(c["a"],{xs:24,sm:8,className:N.a.label},"\u6536\u6b3e\u4eba\u59d3\u540d\uff1a"),b.a.createElement(c["a"],{xs:24,sm:16},e.receiverName)),b.a.createElement(s["a"],null,b.a.createElement(c["a"],{xs:24,sm:8,className:N.a.label},"\u8f6c\u8d26\u91d1\u989d\uff1a"),b.a.createElement(c["a"],{xs:24,sm:16},b.a.createElement("span",{className:N.a.money},e.amount)," \u5143"))),n=b.a.createElement(g["Fragment"],null,b.a.createElement(l["a"],{type:"primary",onClick:a},"\u518d\u8f6c\u4e00\u7b14"),b.a.createElement(l["a"],null,"\u67e5\u770b\u8d26\u5355"));return b.a.createElement(x["a"],{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u9884\u8ba1\u4e24\u5c0f\u65f6\u5185\u5230\u8d26",extra:t,actions:n,className:N.a.result})}}]),a}(b.a.PureComponent))||r);a["default"]=V},BkC9:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return v});t("76GV");var n=t("XiP4"),r=t("43Yg"),l=t.n(r),s=t("/tCh"),c=t.n(s),m=t("scpF"),o=t.n(m),p=t("O/V9"),i=t.n(p),u=t("8aBX"),f=t.n(u),d=(t("Biu0"),t("9YSz")),E=t("2w0b"),y=t.n(E),h=t("zHco"),g=t("4A03"),b=t.n(g),C=d["a"].Step,v=function(e){function a(){return l()(this,a),o()(this,i()(a).apply(this,arguments))}return f()(a,e),c()(a,[{key:"getCurrentStep",value:function(){var e=this.props.location,a=e.pathname,t=a.split("/");switch(t[t.length-1]){case"info":return 0;case"confirm":return 1;case"result":return 2;default:return 0}}},{key:"render",value:function(){var e=this.props,a=e.location,t=e.children;return y.a.createElement(h["a"],{title:"\u7535\u5b50\u7f34\u8d39",tabActiveKey:a.pathname,content:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002"},y.a.createElement(n["a"],{bordered:!1},y.a.createElement(E["Fragment"],null,y.a.createElement(d["a"],{current:this.getCurrentStep(),className:b.a.steps},y.a.createElement(C,{title:"\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"}),y.a.createElement(C,{title:"\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"}),y.a.createElement(C,{title:"\u5b8c\u6210"})),t)))}}]),a}(E["PureComponent"])},btkd:function(e,a,t){"use strict";t.r(a);t("bcsP");var n,r,l,s=t("m9h3"),c=(t("5JyO"),t("HzjU")),m=(t("YgQQ"),t("Zgq0")),o=t("zAuD"),p=t.n(o),i=(t("qj6t"),t("4jIu")),u=t("mK77"),f=t.n(u),d=t("43Yg"),E=t.n(d),y=t("/tCh"),h=t.n(y),g=t("scpF"),b=t.n(g),C=t("O/V9"),v=t.n(C),w=t("8aBX"),x=t.n(w),F=(t("2x7Z"),t("szh6")),N=t("2w0b"),V=t.n(N),A=t("LneV"),k=t("rA3V"),L=t.n(k),G=t("+n12"),I=t("m0VP"),P=t.n(I),O={labelCol:{span:5},wrapperCol:{span:19}},q=(n=Object(A["connect"])(function(e){var a=e.CWGL,t=e.loading;return{submitting:t.effects["CWGL/submitStepForm"],data:a.step}}),r=F["a"].create(),n(l=r(l=function(e){function a(){return E()(this,a),b()(this,v()(a).apply(this,arguments))}return x()(a,e),h()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.data,n=e.dispatch,r=e.submitting,l=a.getFieldDecorator,o=a.validateFields,u=function(){L.a.push("/CWGL/step-form/info")},d=function(e){e.preventDefault(),o(function(e,a){e||n({type:"CWGL/submitStepForm",payload:f()({},t,a)})})};return V.a.createElement(F["a"],{layout:"horizontal",className:P.a.stepForm},V.a.createElement(i["a"],{closable:!0,showIcon:!0,message:"\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002",style:{marginBottom:24}}),V.a.createElement(F["a"].Item,p()({},O,{className:P.a.stepFormText,label:"\u4ed8\u6b3e\u8d26\u6237"}),t.payAccount),V.a.createElement(F["a"].Item,p()({},O,{className:P.a.stepFormText,label:"\u6536\u6b3e\u8d26\u6237"}),t.receiverAccount),V.a.createElement(F["a"].Item,p()({},O,{className:P.a.stepFormText,label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),t.receiverName),V.a.createElement(F["a"].Item,p()({},O,{className:P.a.stepFormText,label:"\u8f6c\u8d26\u91d1\u989d"}),V.a.createElement("span",{className:P.a.money},t.amount),V.a.createElement("span",{className:P.a.uppercase},"\uff08",Object(G["a"])(t.amount),"\uff09")),V.a.createElement(m["a"],{style:{margin:"24px 0"}}),V.a.createElement(F["a"].Item,p()({},O,{label:"\u652f\u4ed8\u5bc6\u7801",required:!1}),l("password",{initialValue:"123456",rules:[{required:!0,message:"\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8"}]})(V.a.createElement(c["a"],{type:"password",autoComplete:"off",style:{width:"80%"}}))),V.a.createElement(F["a"].Item,{style:{marginBottom:8},wrapperCol:{xs:{span:24,offset:0},sm:{span:O.wrapperCol.span,offset:O.labelCol.span}},label:""},V.a.createElement(s["a"],{type:"primary",onClick:d,loading:r},"\u63d0\u4ea4"),V.a.createElement(s["a"],{onClick:u,style:{marginLeft:8}},"\u4e0a\u4e00\u6b65")))}}]),a}(V.a.PureComponent))||l)||l);a["default"]=q},m0VP:function(e,a,t){e.exports={stepForm:"antd-pro-pages-c-w-g-l-step-form-style-stepForm",stepFormText:"antd-pro-pages-c-w-g-l-step-form-style-stepFormText",result:"antd-pro-pages-c-w-g-l-step-form-style-result",desc:"antd-pro-pages-c-w-g-l-step-form-style-desc",information:"antd-pro-pages-c-w-g-l-step-form-style-information",label:"antd-pro-pages-c-w-g-l-step-form-style-label",money:"antd-pro-pages-c-w-g-l-step-form-style-money",uppercase:"antd-pro-pages-c-w-g-l-step-form-style-uppercase"}}}]);