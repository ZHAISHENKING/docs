import{f as V,U as m,p as g,_ as k,r as a,o as l,g as n,w as t,a as f,b as s,q as w,k as _,t as i,c as b,s as y,h as B,l as C}from"../app.1f064b6f.js";import{I as N,a as $}from"./hide.95e85fa1.js";const E=V({name:"GField",components:{IconShow:N,IconHide:$},props:{label:{type:String,required:!0},tooltip:String,toggle:Boolean,modelValue:{type:Boolean,default:!0},level:{type:Number,default:1},nest:Boolean,caption:String,disabled:Boolean,isFlat:Boolean,labelSpan:{type:Number,default:9}},emits:[m],setup(e,o){const r=()=>{o.emit(m,!e.modelValue)},p=g(()=>({span:e.nest?24:e.labelSpan})),c=g(()=>({span:e.nest?24:15}));return{toggleVisible:r,labelStyle:p,contentStyle:c}}});const F={class:"g-field-show-placeholder"},I=["title"],M=["innerHTML"],T=["title"],U=["title"];function D(e,o,r,p,c,H){const h=a("n-switch"),v=a("n-tooltip"),u=a("n-gi"),S=a("n-grid");return l(),n(S,{class:C([`g-field-wp --lv${e.level}`,{"--disable":e.disabled||e.toggle&&!e.modelValue}])},{default:t(()=>[f(u,y({class:"g-field"},e.labelStyle),{default:t(()=>[s("i",F,[e.toggle?(l(),n(h,{key:0,value:e.modelValue,size:"small",onClick:o[0]||(o[0]=w(()=>{},["stop"])),"onUpdate:value":e.toggleVisible},null,8,["value","onUpdate:value"])):_("",!0)]),e.tooltip?(l(),n(v,{key:0,placement:"top"},{trigger:t(()=>[s("label",{class:"g-field-title-with-description",title:e.label},i(e.label),9,I)]),default:t(()=>[s("span",{innerHTML:e.tooltip},null,8,M)]),_:1})):(l(),b("label",{key:1,class:"g-field-title",title:e.label},i(e.label),9,T))]),_:1},16),f(u,y({class:["g-field-container",{"--flat":e.isFlat}]},e.contentStyle),{default:t(()=>[B(e.$slots,"default",{},void 0,!0),e.caption?(l(),b("span",{key:0,class:"g-field-caption",title:e.caption},i(e.caption),9,U)):_("",!0)]),_:3},16,["class"])]),_:3},8,["class"])}const d=k(E,[["render",D],["__scopeId","data-v-4deb6130"]]);d.install=e=>{e.component(d.name,d)};export{d as default};
