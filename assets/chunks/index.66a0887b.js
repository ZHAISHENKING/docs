import{g as i,U as s,_ as t,a as c,o as p,c as r,b as m,l as h}from"../app.4b623794.js";const b=i({name:"GCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:"medium"},inline:{type:[Boolean,String],default:!1},disabled:Boolean},emits:[s],setup(e,a){return{handleChecked:l=>{a.emit(s,l)}}}});function u(e,a,o,l,f,k){const d=c("n-checkbox");return p(),r("div",{class:h(["datav-gui g-switch",[{"--inline":!!e.inline,"--single":e.inline==="inline-single","--disabled":e.disabled}]])},[m(d,{checked:e.modelValue,label:e.label,size:e.size,disabled:e.disabled,"onUpdate:checked":e.handleChecked},null,8,["checked","label","size","disabled","onUpdate:checked"])],2)}const n=t(b,[["render",u]]);n.install=e=>{e.component(n.name,n)};export{n as default};
