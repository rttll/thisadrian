import{s as _,b7 as g,e as j,P as w,cf as B,j as a,af as L,ce as O,ac as T,aD as S,ag as D,l as A,a2 as W,a0 as z}from"./sanity.99b39035.js";import{P as C}from"./PaneItem-0d1fb658.esm.87435455.js";import{u as G}from"./index-c5e19f83.esm.96cef367.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:u,pane:p,paneKey:f}=n,{features:h}=G(),{collapsed:y}=g(),{defaultLayout:m,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=p,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:u,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:D,mode:"bleed"}),title:b}),a(A,{overflow:y?void 0:"auto",children:a(W,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:m,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
