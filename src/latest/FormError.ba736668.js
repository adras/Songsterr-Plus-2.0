import{i as e,y as t,v as n}from"./preact.f8a34c73.js";import{V as r,R as o,C as s,T as a}from"./index.3637aaf7.js";function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"En";const n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return null==e||0===e.length?"Ru"===t?"Обязательно для заполнения":"Should not be empty":!n.test(e)&&("Ru"===t?"Неверный e-mail адрес":"Invalid e-mail address")}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"En";return 0===e.length&&("Ru"===t?"Обязательно для заполнения":"Should not be empty")}function c(e){return e.length>=1e3?"Should be less than 1000 characters":0===(e=e.replace(/[^\w\s_]/,"").trim()).length?"Should not be empty":e.length<3&&"Please provide more meaningful edit summary"}function u(e){return 0===(e=e.replace(/[^\w\s_]/,"").trim()).length?"Should not be empty":e.length<3&&"Please provide more meaningful annotation"}function f(e){return i(e)}function m(e){return 0===e.length&&"Tell us how can we help you"}function h(e){const t=e?["gp3","gp4","gp5","gpx","gp"]:["gp3","gp4","gp5"];return function(e){if(!e.length)return"Upload the file";{const n=e[0].name.split(".").pop();if(!t.includes(n))return"Choose right file format"}}}function p(e){return 0===e.length?"Should not be empty":e.length<5&&"Should be at least 5 symbols long"}function d(e){return!e&&"Should be checked"}function g(e,t){return!(!t||e===t)&&"Passwords should match"}function y(e,t){return e&&e.reasons&&e.reasons[t]}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"En";const n=e.map((e=>{let n;return n="checkbox"===e.field.type?e.field.checked:"file"===e.field.type?e.field.files:e.field.value,{[e.field.name]:e.validator(n,t)}})).reduce(((e,t)=>Object.assign(e,t)),{});if(Object.keys(n).reduce(((e,t)=>e||!!n[t]),!1))throw new r(n);return null}function _(e,t){const n={__all__:void 0,comment:void 0};if(e||(n.__all__="Please select a reason for the report"),"other"!==e||t||(n.comment="Please describe the problem"),Object.keys(n).reduce(((e,t)=>e||!!n[t]),!1))throw new r(n);return null}const b="Df4c",w={error:"Df9s",title:"Df4c",rejected:"Dfxe",content:"Dfsp",exitActive:"Df1p2",enterActive:"Df16",enter:"Df58",exit:"Df1s7"};function x(l){let{styles:i,error:c,errorMessage:u,name:f="form"}=l;const m=i||w,h=e();let p=u;const d={enter:m.enter,enterActive:m.enterActive,exit:m.exit,exitActive:m.exitActive};return!p&&c&&(p=function(e){if(e instanceof r){if(e.reasons){if(e.reasons.__all__)return e.reasons.__all__;const t=e.reasons.length&&e.reasons[e.reasons.length-1].message;if(t)return t}return"Please fix the errors and try again"}return e.message||"Oops, something went wrong. Please try again later"}(c)),t((()=>{h.current.scrollIntoView&&h.current.scrollIntoView()}),[p]),c instanceof o&&c.action?n(a,{component:"div",className:m.error,ref:h},c&&n(s,{animationStyles:d,timeout:300},n("div",{className:m.rejected,key:"error"},n("span",{className:m.content,role:"alert","aria-label":f},`Your actions appear suspicious. We will reject any attempt to ${c.action} within the next twenty four hours. `,"Please contact ",n("a",{href:"mailto:support@songsterr.com","data-action":"support"},"support@songsterr.com")," if you think we made a mistake.")))):n(a,{component:"div",className:m.error,ref:h},p&&n(s,{animationStyles:d,timeout:300},n("div",{className:m.title,key:"error"},n("span",{className:m.content,role:"alert","aria-label":f},p))))}export{_,b,c,d,f,g,p as h,i,l,m,h as p,u,v,w,x,y};
//# sourceMappingURL=FormError.ba736668.js.map
