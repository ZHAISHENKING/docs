import{g as c,U as s,_ as h,a as t,o as a,c as i,d as m,b as g,n as f,h as v,k as r,t as _,l as k}from"../app.4b623794.js";const y=c({name:"GColorPicker",props:{showAlpha:{type:Boolean,default:!0},showValue:{type:Boolean,default:!0},modelValue:{type:String,required:!0},size:{type:String,default:"small"},label:{type:String,default:""},inline:{type:[Boolean,String],default:!1}},emits:[s],setup(e,l){return{handleInput:o=>{l.emit(s,o)}}}}),z={class:"g-color-picker__inner"},V={key:0,class:"g-input__caption"};function w(e,l,p,o,B,C){const u=t("n-color-picker"),d=t("n-input");return a(),i("div",{class:k(["datav-gui g-color-picker",[{"--inline":!!e.inline,"--single":e.inline==="inline-single"}]])},[m("div",z,[g(u,{value:e.modelValue,size:e.size,"show-alpha":e.showAlpha,style:f({width:"var(--n-height)",flex:"0 0 var(--n-height)"}),"onUpdate:value":e.handleInput,modes:["rgb"]},null,8,["value","size","show-alpha","style","onUpdate:value"]),e.showValue?(a(),v(d,{key:0,value:e.modelValue,size:e.size,"onUpdate:value":e.handleInput},null,8,["value","size","onUpdate:value"])):r("",!0)]),e.label?(a(),i("span",V,_(e.label),1)):r("",!0)],2)}const n=h(y,[["render",w]]);n.install=e=>{e.component(n.name,n)};export{n as default};
