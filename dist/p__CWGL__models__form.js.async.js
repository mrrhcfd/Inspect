(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"rj/g":function(e,a,t){"use strict";t.r(a);var r=t("mK77"),n=t.n(r),c=t("Ico4"),s=t.n(c),u=(t("Uk9J"),t("obsD")),o=t("DWJA"),p=t("dCQc");a["default"]={namespace:"CWGL",state:{step:{payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500"}},effects:{submitRegularForm:s.a.mark(function e(a,t){var r,n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,e.next=4,n(p["f"],r);case 4:u["a"].success("\u63d0\u4ea4\u6210\u529f");case 5:case"end":return e.stop()}},e)}),submitStepForm:s.a.mark(function e(a,t){var r,n,c;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,c=t.put,e.next=4,n(p["f"],r);case 4:return e.next=6,c({type:"saveStepFormData",payload:r});case 6:return e.next=8,c(o["routerRedux"].push("/CWGL/step-form/result"));case 8:case"end":return e.stop()}},e)}),submitAdvancedForm:s.a.mark(function e(a,t){var r,n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,e.next=4,n(p["f"],r);case 4:u["a"].success("\u63d0\u4ea4\u6210\u529f");case 5:case"end":return e.stop()}},e)})},reducers:{saveStepFormData:function(e,a){var t=a.payload;return n()({},e,{step:n()({},e.step,t)})}}}}}]);