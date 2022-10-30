import{r as d,j as i,af as oe,ac as G,aD as ie,ag as ae,ce,x as V,z as ue,G as le,ar as de,e as v,P as pe,cf as me,N as fe,cg as he,ch as ye,ci as ge,b7 as Te,bv as be,H as Y,h as F,aa as N,a2 as Pe,bl as Le,a1 as w,a0 as C,ad as Ie,F as xe,aL as Oe,cj as Se,a8 as k,l as ve,t as Re,v as je,aP as A,ck as _e,cl as we,cm as Ce,cn as De,aJ as q,d as Ee,co as Fe,c8 as Ae,c9 as $e,aN as Ne,cp as ke,cq as qe,bp as M,br as Me,cr as Be,bg as We,aQ as Ue,aT as He,cs as Ge,ct as Ve,cu as Ye,bh as ze}from"./sanity.99b39035.js";import{u as Ke,c as B,b as Xe}from"./index-c5e19f83.esm.96cef367.js";import{P as Qe}from"./PaneItem-0d1fb658.esm.87435455.js";function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?W(Object(t),!0).forEach(function(r){Je(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Je(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const U=100,$=2e3,z={by:[{field:"_createdAt",direction:"desc"}]},Ze={};function et(e,n){return e._id?Y(e._id):"item-".concat(n)}function tt(e){return Ce(e).map(n=>{const t=n.draft||n.published;return f(f({},t),{},{hasPublished:!!n.published,hasDraft:!!n.draft})})}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const r=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(r[0]==="$"){const o=r.slice(1),u=n[o];return typeof u=="string"?u:null}return r}function st(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(n=>[it(n),(n.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function it(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function at(e,n){const t=e.by.map(r=>{if(r.mapWith)return r;const o=ct(n,r.field);return o?lt(o,"datetime")?f(f({},r),{},{mapWith:"dateTime"}):o.jsonType==="string"?f(f({},r),{},{mapWith:"lower"}):r:r});return t.every((r,o)=>r===e.by[o])?e:f(f({},e),{},{by:t})}function ct(e,n){const t=fe(n);let r=e;for(const o of t){if(!r)return;if(typeof o=="string"){r=ut(r,o);continue}if(!(he(o)||ye(o))||r.jsonType!=="array")return;const[s,a]=r.of||[];if(a||!s)return;if(!ge(s)){r=s;continue}const[p,y]=s.to||[];if(y||!p)return;r=p}return r}function ut(e,n){if(!("fields"in e))return;const t=e.fields.find(r=>r.name===n);return t?t.type:void 0}function lt(e,n){let t=e.type;for(;t;){if(t.name===n||!t.type&&t.jsonType===n)return!0;t=t.type}return!1}function dt(e){const{childItemId:n,error:t,filterIsSimpleTypeContraint:r,fullList:o,isActive:u,isLoading:s,items:a,layout:p,onListChange:y,onRetry:m,showIcons:l}=e,P=V(),{collapsed:R}=Te(),{collapsed:g,index:x}=be(),[L,j]=d.exports.useState(!1);d.exports.useEffect(()=>{if(g)return;const c=setTimeout(()=>{j(!0)},0);return()=>{clearTimeout(c)}},[g]);const O=d.exports.useCallback(c=>{const T=Y(c._id),h=n===T;return i(Qe,{icon:l===!1?!1:void 0,id:T,pressed:!u&&h,selected:u&&h,layout:p,schemaType:P.get(c._type),value:c})},[n,u,p,P,l]),I=d.exports.useMemo(()=>{if(!L)return null;if(t)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:v(Pe,{paddingX:4,paddingY:5,space:4,children:[i(Le,{as:"h3",children:"Could not fetch list items"}),v(w,{as:"p",children:["Error: ",i("code",{children:t.message})]}),m&&i(C,{children:i(G,{icon:Ie,onClick:m,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Xe,{ms:300,children:v(xe,{children:[i(Oe,{muted:!0}),i(C,{marginTop:3,children:i(w,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!s&&a.length===0)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:i(C,{paddingX:4,paddingY:5,children:i(w,{align:"center",muted:!0,size:2,children:r?"No documents of this type":"No matching documents"})})})});const c=o&&a.length===$;return v(C,{padding:2,children:[a.length>0&&i(Se,{gap:1,getItemKey:et,items:a,renderItem:O,onChange:y},"".concat(x,"-").concat(g)),s&&i(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(w,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),c&&i(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(w,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",$," documents"]})})]})},[t,r,o,y,s,a,m,O,L,g,x]);return i(ve,{overflow:R?void 0:"auto",children:I})}const K=d.exports.memo(e=>{let{index:n,initialValueTemplates:t=[],menuItems:r=[],menuItemGroups:o=[],setLayout:u,setSortOrder:s,title:a}=e;const{features:p}=Ke(),y=d.exports.useMemo(()=>({setLayout:m=>{let{layout:l}=m;u(l)},setSortOrder:m=>{s(m)}}),[u,s]);return i(oe,{backButton:p.backButton&&n>0&&i(G,{as:ie,"data-as":"a",icon:ae,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:y,menuItemGroups:o,menuItems:r})})});K.displayName="DocumentListPaneHeader";const pt={result:null,error:!1},mt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new De,r=t.next.bind(t);return e.pipe(q(s=>({client:s.client,query:s.query,params:s.params})),Ee(Fe),Ae(1),$e()).pipe(Ne(s=>{const a=ke(s.client,s.query,s.params,n).pipe(q(mt),qe());return M(A({loading:!0}).pipe(Me(400),Be(a)),a)})).pipe(We(pt),Ue((s,a)=>He(A(ft(s)),M(Ge(window,"online"),t).pipe(Ve(1),Ye(a)))),ze((s,a)=>f(f(f({},s),a),{},{onRetry:r})))};function yt(e){var n;const{apiVersion:t,defaultOrdering:r,filter:o,params:u,sortOrder:s}=e,a=Re(je),[p,y]=d.exports.useState(!1),m=d.exports.useRef(p),[l,P]=d.exports.useState(null),R=(l==null?void 0:l.error)||null,g=(l==null?void 0:l.loading)||l===null,x=l==null?void 0:l.onRetry,L=(n=l==null?void 0:l.result)==null?void 0:n.documents,j=d.exports.useMemo(()=>L?tt(L):null,[L]),O=d.exports.useMemo(()=>{const c=s==null?void 0:s.extendedProjection,T=["_id","_type"],h=T.join(","),b=r||(s==null?void 0:s.by)||[],_=p?$:U,D=b.length>0?b:z.by,S=ot(D);if(c){const E=T.concat(c).join(",");return["*[".concat(o,"] {").concat(E,"}"),"order(".concat(S,") [0...").concat(_,"]"),"{".concat(h,"}")].join("|")}return"*[".concat(o,"]|order(").concat(S,")[0...").concat(_,"]{").concat(h,"}")},[r,o,p,s]),I=d.exports.useCallback(c=>{let{toIndex:T}=c;g||m.current||T>=U/2&&(y(!0),m.current=!0)},[g]);return d.exports.useEffect(()=>{const c=p?b=>Boolean(b.result):()=>!0;P(b=>b?f(f({},b),{},{loading:!0}):null);const h=ht(A({client:a,query:O,params:u}),{apiVersion:t,tag:"desk.document-list"}).pipe(_e(c)).subscribe(P);return()=>h.unsubscribe()},[t,a,p,O,u]),d.exports.useEffect(()=>{P(null),y(!1),m.current=!1},[o,u,s,t]),{error:R,fullList:p,handleListChange:I,isLoading:g,items:j,onRetry:x}}const H=[];function gt(e){const n=d.exports.useRef(e);return we(n.current,e)||(n.current=e),n.current}const Lt=d.exports.memo(function(n){const{childItemId:t,index:r,isActive:o,isSelected:u,pane:s,paneKey:a}=n,p=V(),{name:y}=ue(),{defaultLayout:m="default",displayOptions:l,initialValueTemplates:P=H,menuItems:R,menuItemGroups:g,options:x,title:L}=s,{apiVersion:j,defaultOrdering:O=H,filter:I}=x,c=gt(x.params||Ze),T=s.source,h=d.exports.useMemo(()=>rt(I,c),[I,c]),b=(l==null?void 0:l.showIcons)!==!1,[_,D]=B(h,"layout",m),[S,E]=B(h,"sortOrder",z),X=h&&S?at(S,p.get(h)):S,Q=le(X),J=st(I),{error:Z,fullList:ee,handleListChange:te,isLoading:ne,items:re,onRetry:se}=yt({defaultOrdering:O,filter:I,params:c,sortOrder:Q,apiVersion:j});return i(de,{name:T||y,children:v(pe,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:u,children:[me,i(K,{index:r,initialValueTemplates:P,menuItems:R,menuItemGroups:g,setLayout:D,setSortOrder:E,title:L}),i(dt,{childItemId:t,error:Z,filterIsSimpleTypeContraint:J,fullList:ee,isActive:o,isLoading:ne,items:re,layout:_,onListChange:te,onRetry:se,showIcons:b})]})})});export{Lt as default};
