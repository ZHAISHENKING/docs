import{_ as Q,o as S,c as E,b as y,N as ae,O as ie,P as ce,f as ue,Q as le,x as se,R as de,i as V,S as fe,m as ge,z as me,J as z,G as he,W as pe,r as p,g as ve,k as L,a as v,w as P,l as H,F as be}from"../app.8de2ac0a.js";import{I as ye}from"./copy.21b8b35a.js";import{I as we}from"./fullscreen-exit.4207a90d.js";const Oe={},je={t:"1640016193753",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3997",width:"64",height:"64"},Se=y("path",{d:"M819.98000001 764H204.01999999V260h616.02000001v504zM260 708.02000001h504V315.97999999H260v392.04000002zM764 92v55.98000001h112.02000001V260H932V92h-168zM92 92v168h55.98000001V147.97999999H260V92H92zM876.02000001 764v112.02000001H764V932H932v-168h-55.98000001zM147.97999999 876.02000001V764H92V932h168v-55.98000001H147.97999999z","p-id":"3998"},null,-1),Ce=[Se];function Ie(e,t){return S(),E("svg",je,Ce)}const Fe=Q(Oe,[["render",Ie]]);function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $e(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ae(e,t){if(e==null)return{};var n=$e(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Me(e,t){return Te(e)||Ee(e,t)||De(e,t)||_e()}function Te(e){if(Array.isArray(e))return e}function Ee(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var c=e[Symbol.iterator](),u;!(r=(u=c.next()).done)&&(n.push(u.value),!(t&&n.length===t));r=!0);}catch(i){o=!0,a=i}finally{try{!r&&c.return!=null&&c.return()}finally{if(o)throw a}}return n}}function De(e,t){if(e){if(typeof e=="string")return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}}function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(r){Be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function b(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,u=new Array(c),i=0;i<c;i++)u[i]=arguments[i];return t.apply(n,[].concat(o,u))}}}function C(e){return{}.toString.call(e).includes("Object")}function Ve(e){return!Object.keys(e).length}function w(e){return typeof e=="function"}function ze(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Le(e,t){return C(t)||d("changeType"),Object.keys(t).some(function(n){return!ze(e,n)})&&d("changeField"),t}function He(e){w(e)||d("selectorType")}function ke(e){w(e)||C(e)||d("handlerType"),C(e)&&Object.values(e).some(function(t){return!w(t)})&&d("handlersType")}function We(e){e||d("initialIsRequired"),C(e)||d("initialType"),Ve(e)&&d("initialContent")}function xe(e,t){throw new Error(e[t]||e.default)}var qe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},d=b(xe)(qe),j={changes:Le,selector:He,handler:ke,initial:We};function Re(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};j.initial(e),j.handler(t);var n={current:e},r=b(Ke)(n,t),o=b(Ge)(n),a=b(j.changes)(e),c=b(Ue)(n);function u(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return j.selector(l),l(n.current)}function i(l){Ne(r,o,a,c)(l)}return[u,i]}function Ue(e,t){return w(t)?t(e.current):t}function Ge(e,t){return e.current=R(R({},e.current),t),t}function Ke(e,t,n){return w(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var Je={create:Re},Qe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Ye(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,u=new Array(c),i=0;i<c;i++)u[i]=arguments[i];return t.apply(n,[].concat(o,u))}}}function Xe(e){return{}.toString.call(e).includes("Object")}function Ze(e){return e||U("configIsRequired"),Xe(e)||U("configType"),e.urls?(et(),{paths:{vs:e.urls.monacoBase}}):e}function et(){console.warn(Y.deprecation)}function tt(e,t){throw new Error(e[t]||e.default)}var Y={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},U=Ye(tt)(Y),nt={config:Ze},rt=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,c){return c(a)},o)}};function X(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],X(e[n],t[n]))}),W(W({},e),t)}var ot={type:"cancelation",msg:"operation is manually canceled"};function $(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o(ot):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var at=Je.create({config:Qe,isInitialized:!1,resolve:null,reject:null,monaco:null}),Z=Me(at,2),O=Z[0],I=Z[1];function it(e){var t=nt.config(e),n=t.monaco,r=Ae(t,["monaco"]);I(function(o){return{config:X(o.config,r),monaco:n}})}function ct(){var e=O(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(I({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),$(A);if(window.monaco&&window.monaco.editor)return ee(window.monaco),e.resolve(window.monaco),$(A);rt(ut,st)(dt)}return $(A)}function ut(e){return document.body.appendChild(e)}function lt(e){var t=document.createElement("script");return e&&(t.src=e),t}function st(e){var t=O(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=lt("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function dt(){var e=O(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){ee(n),e.resolve(n)},function(n){e.reject(n)})}function ee(e){O().monaco||I({monaco:e})}function ft(){return O(function(e){var t=e.monaco;return t})}var A=new Promise(function(e,t){return I({resolve:e,reject:t})}),gt={config:it,init:ct,__getMonacoInstance:ft};const te=gt,G={automaticLayout:!0,contextmenu:!1,fixedOverflowWidgets:!0,fontFamily:'Menlo-Regular, Monaco, Menlo, Consolas, "Ubuntu Mono", monospace',formatOnPaste:!0,formatOnType:!0,insertSpaces:!0,lineDecorationsWidth:7,lineHeight:15,lineNumbersMinChars:3,minimap:{enabled:!1},quickSuggestions:!1,readOnly:!1,roundedSelection:!1,scrollBeyondLastLine:!1,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6,alwaysConsumeMouseWheel:!1,arrowSize:0},snippetSuggestions:"none",tabSize:2,theme:"vs-dark",wordBasedSuggestions:!1,wordWrap:"on",cursorStyle:"line",selectOnLineNumbers:!0,autoIndent:"advanced",glyphMargin:!1,guides:{indentation:!0},renderLineHighlight:"line",renderWhitespace:"none",scrollBeyondLastColumn:2},mt=e=>{const t="datav-dark-theme";return e.editor.defineTheme(t,{base:"vs-dark",inherit:!0,rules:[{token:"key",foreground:"dddddd"},{token:"string.key.json",foreground:"dddddd"},{token:"string.value.json",foreground:"b4e98c"}],colors:{"editor.background":"#0e1013","editor.lineHighlightBackground":"#1f2329","editorLineNumber.foreground":"#576369","editorCursor.foreground":"#2D68FE"}}),t};let D=[];const ht=(e,t)=>{const n=[];for(let r=0;r<D.length;r++){const o=D[r];n.push({label:`:${o}`,insertText:o,kind:e.languages.CompletionItemKind.Variable,detail:"CallbackId",range:t})}return n},K=new Map,pt=(e,t,n)=>{if(n&&n.length>0){if(D=n,K.has(t))return;K.set(t,1),e.languages.registerCompletionItemProvider(t,{triggerCharacters:[":"],provideCompletionItems(r,o){const a=r.getWordUntilPosition(o),c={startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return{suggestions:ht(e,c)}}})}},J=(e,t)=>{let n=t;return(ae(n)||ie(n))&&(n=JSON.stringify(n,null,2)),ce(n)?n:`${n}`},M=(e,t)=>{t==="sql"||e.getAction("editor.action.formatDocument").run()};te.config({paths:{vs:"https://unpkg.com/monaco-editor@0.33.0/min/vs"}});const vt=ue({name:"GMonacoEditor",components:{AsyncLoading:le,IconCopy:ye,IconFullscreen:Fe,IconFullscreenExit:we},props:{language:{type:String,default:"plaintext"},code:{type:[String,Array,Object],default:""},readOnly:Boolean,useMinimap:Boolean,lineNumbers:{type:String,default:"on"},wordWrap:{type:String,default:"on"},autoFormat:Boolean,options:{type:Object,default(){return{}}},completions:Array,extra:Object,height:{type:Number,default:240},editorClass:String,fullScreenTitle:{type:String,default:"全屏模式"}},emits:["change","blur"],setup(e,t){const n=se(),r="datav-dark-theme",o=`datav-editor-${de()}`,a=V(!1),c=V(!1);let u=null,i=null,l=null;const m=()=>{i&&pe(i.getValue()).then(()=>{n.success("复制成功")})},F=()=>{if(i){const s=i.getValue();t.emit("change",{value:s,extra:e.extra})}},_=()=>{if(i){const s=i.getValue();t.emit("blur",{value:s,extra:e.extra}),e.autoFormat&&M(i,e.language)}},B=fe(F,300),ne=()=>{a.value=!a.value,a.value&&z(()=>{N()})},N=()=>{const s=document.querySelector(".datav-fullscreen-editor > section");if(s){const f=Object.assign({},G,e.options,{tabSize:2,value:"",language:e.language,theme:r,readOnly:e.readOnly,minimap:{enabled:e.useMinimap},lineNumbers:e.lineNumbers,wordWrap:e.wordWrap}),g=u.editor.create(s,f);g.setValue(i.getValue()),e.autoFormat&&setTimeout(()=>{M(g,e.language)},1200),g.onDidChangeModelContent(()=>B()),g.onDidBlurEditorText(()=>_()),l=g}},re=()=>{l&&(i&&!e.readOnly&&(i.setValue(l.getValue()),i.focus()),l.dispose())};return ge(()=>e.code,s=>{if(i){const f=J(e.language,s);i.setValue(f)}}),me(async()=>{const s=setTimeout(()=>{c.value=!0},200);u=await te.init(),clearTimeout(s),c.value=!1,mt(u),pt(u,e.language,e.completions),await z();const f=document.getElementById(o);if(f){const g=Object.assign({},G,e.options,{tabSize:2,value:"",language:e.language,theme:r,readOnly:e.readOnly,minimap:{enabled:e.useMinimap},lineNumbers:e.lineNumbers,wordWrap:e.wordWrap}),h=u.editor.create(f,g),oe=J(e.language,e.code);h.setValue(oe),e.autoFormat&&M(h,e.language),e.height>0&&(f.style.height=`${e.height}px`),h.onDidChangeModelContent(()=>B()),h.onDidBlurEditorText(()=>_()),i=h}}),he(()=>{i==null||i.dispose(),l==null||l.dispose()}),{editorId:o,isFullScreen:a,loading:c,copyData:m,switchFullScreen:ne,openedFullScreenDialog:N,closedFullScreenDialog:re}}}),bt=["id"],yt={key:0,class:"datav-editor-actions"},wt={class:"datav-fullscreen-editor-wp"},Ot=y("section",{style:{display:"flex",position:"relative","text-align":"initial",width:"100%",height:"100%"}},null,-1),jt=[Ot];function St(e,t,n,r,o,a){const c=p("AsyncLoading"),u=p("IconCopy"),i=p("n-icon"),l=p("IconFullscreenExit"),m=p("n-modal");return S(),E(be,null,[e.loading?(S(),ve(c,{key:0})):L("",!0),y("div",{id:e.editorId,class:H(["datav-editor",[{"--read-only":e.readOnly},e.editorClass]])},[e.loading?L("",!0):(S(),E("div",yt,[v(i,{class:"action-btn",title:"点击复制",onClick:e.copyData},{default:P(()=>[v(u)]),_:1},8,["onClick"]),v(i,{class:"action-btn",title:e.isFullScreen?"退出全屏":"全屏模式下编辑或查看",onClick:e.switchFullScreen},{default:P(()=>[v(l)]),_:1},8,["title","onClick"])]))],10,bt),v(m,{show:e.isFullScreen,"onUpdate:show":t[0]||(t[0]=F=>e.isFullScreen=F),title:`${e.fullScreenTitle}${e.readOnly?" ( 只读 )":""}`,preset:"dialog","show-icon":!1,"mask-closable":!1,class:"datav-fullscreen-editor-dialog",style:{width:"66%"},onAfterLeave:e.closedFullScreenDialog},{default:P(()=>[y("div",wt,[y("div",{class:H(["datav-editor datav-fullscreen-editor",[{"--read-only":e.readOnly}]])},jt,2)])]),_:1},8,["show","title","onAfterLeave"])],64)}const T=Q(vt,[["render",St]]);T.install=e=>{e.component(T.name,T)};export{T as default};
