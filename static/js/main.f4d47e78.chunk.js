(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{14:function(e,a,t){},2:function(e,a,t){e.exports={App:"App_App__2wjpf",Settings:"App_Settings__2qXC2",Input:"App_Input__1V1_Q",Counter:"App_Counter__381zn",DataBlock:"App_DataBlock__1NMjR",StartMessageStyle:"App_StartMessageStyle__1qaRB",EditModeStyle:"App_EditModeStyle__jDIOx",ErrorStyle:"App_ErrorStyle__2x_-n",MaxValueStyle:"App_MaxValueStyle__2kbMV",InputBlock:"App_InputBlock__2wwud",InputError:"App_InputError__KYNzh",ButtonsBlock:"App_ButtonsBlock__2Omgf"}},20:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(5),u=t.n(l),o=(t(14),t(4)),s=t(2),i=t.n(s),d=t(1),_=c.a.memo((function(e){var a=e.name,t=e.onClick,n=e.disable;return Object(d.jsx)("button",{disabled:n,onClick:t,children:a})})),m=c.a.memo((function(e){var a=e.maxValue,t=e.minValue,n=e.value,r=e.error,c=e.start,l=e.editMode,u=e.onIncClickHandler,o=e.onResetClickHandler,s=c?"HELLO! Enter start value and press 'SET'":l?r?"Enter correct value and press 'SET'":"Press 'SET'":n,m=c?i.a.StartMessageStyle:l?r?i.a.ErrorStyle:i.a.EditModeStyle:n===a?i.a.MaxValueStyle:"";return Object(d.jsxs)("div",{className:i.a.Counter,children:[Object(d.jsx)("div",{className:"".concat(m," ").concat(i.a.DataBlock),children:s}),Object(d.jsxs)("div",{className:i.a.ButtonsBlock,children:[Object(d.jsx)(_,{disable:r||l||n>=a,onClick:u,name:"inc"}),Object(d.jsx)(_,{disable:l||n===t,onClick:o,name:"reset"})]})]})})),p=t(9),j=t(3);!function(e){e.inc_counter="INC-COUNTER",e.reset_counter="RESET-COUNTER",e.handle_on_change_max="HANDLE-ON-CHANGE-MAX",e.handle_on_change_min="HANDLE-ON-CHANGE-MIN",e.set_counter_local_storage="SET-COUNTER-LOCAL-STORAGE",e.error_check="ERROR-CHECK",e.on_set_handler="ON-SET-HANDLER"}(n||(n={}));var b={maxValue:0,minValue:0,value:0,editMode:!1,error:!1,ultimateValue:0,start:!0},O=Object(p.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.error_check:return e.maxValue<=e.minValue||e.maxValue<=0||e.minValue<0?Object(j.a)(Object(j.a)({},e),{},{error:!0}):Object(j.a)(Object(j.a)({},e),{},{error:!1});case n.inc_counter:return Object(j.a)(Object(j.a)({},e),{},{value:e.value+1});case n.on_set_handler:return Object(j.a)(Object(j.a)({},e),{},{value:e.minValue,ultimateValue:e.maxValue,editMode:!1});case n.reset_counter:return Object(j.a)(Object(j.a)({},e),{},{value:e.minValue});case n.handle_on_change_max:return Object(j.a)(Object(j.a)({},e),{},{editMode:!0,maxValue:a.value,start:!1});case n.handle_on_change_min:return Object(j.a)(Object(j.a)({},e),{},{editMode:!0,minValue:a.value,start:!1});default:return e}}}),h=Object(p.b)(O,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(a){return}}()),x=c.a.memo((function(e){var a=e.value,t=e.maxValue,n=e.minValue,r=e.error,c=e.onChange,l=e.name,u=a<0||r&&0===t||a<=n&&r?i.a.InputError:"";return Object(d.jsxs)("div",{className:i.a.InputBlock,children:[Object(d.jsx)("span",{children:l}),Object(d.jsx)("input",{className:"".concat(u," ").concat(i.a.Input),value:a,onChange:function(e){c(JSON.parse(e.currentTarget.value))},type:"number"})]})})),v=c.a.memo((function(e){var a=e.maxValue,t=e.minValue,n=e.onMaxInputValueChangeHandler,r=e.onMinInputValueChangeHandler,c=e.editMode,l=e.error,u=e.onSetClickHandler,o=!c||l||t<0||a<0;return Object(d.jsxs)("div",{className:i.a.Settings,children:[Object(d.jsxs)("div",{className:i.a.DataBlock,children:[Object(d.jsx)(x,{value:a,maxValue:a,minValue:t,error:l,onChange:n,name:"max value"}),Object(d.jsx)(x,{value:t,maxValue:a,minValue:t,error:l,onChange:r,name:"min value"})]}),Object(d.jsx)("div",{className:i.a.ButtonsBlock,children:Object(d.jsx)(_,{disable:o,onClick:u,name:"set"})})]})})),C=function(){var e=Object(o.c)((function(e){return e.counter})),a=e.maxValue,t=e.minValue,c=e.value,l=e.editMode,u=e.error,s=e.start,_=Object(o.b)(),p=Object(r.useCallback)((function(){_({type:n.on_set_handler}),function(e){try{var a=JSON.stringify(e);localStorage.setItem("app-state",a)}catch(t){}}({counter:h.getState().counter})}),[_]),j=Object(r.useCallback)((function(){_({type:n.inc_counter})}),[_]),b=Object(r.useCallback)((function(){_({type:n.reset_counter})}),[_]),O=Object(r.useCallback)((function(e){_(function(e){return{type:n.handle_on_change_max,value:e}}(e))}),[_]),x=Object(r.useCallback)((function(e){_(function(e){return{type:n.handle_on_change_min,value:e}}(e))}),[_]);return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)(m,{value:c,error:u,editMode:l,maxValue:a,minValue:t,onIncClickHandler:j,onResetClickHandler:b,start:s}),Object(d.jsx)(v,{maxValue:a,minValue:t,onMaxInputValueChangeHandler:O,onMinInputValueChangeHandler:x,editMode:l,error:u,onSetClickHandler:p})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)}))};u.a.render(Object(d.jsx)(o.a,{store:h,children:Object(d.jsx)(C,{})}),document.getElementById("root")),V()}},[[20,1,2]]]);
//# sourceMappingURL=main.f4d47e78.chunk.js.map