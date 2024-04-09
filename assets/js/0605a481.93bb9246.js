"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2113],{6834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=r(1527),s=r(2175);function i(e){const t={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,n.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.del,{children:"list"})]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," scan"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.del,{children:"presign"})]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"root"}),": Set the working directory of ",(0,n.jsx)(t.code,{children:"OpenDAL"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"endpoint"}),": Set the server address for ",(0,n.jsx)(t.code,{children:"Atomicserver"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"private_key"}),": Set the private key for agent used for ",(0,n.jsx)(t.code,{children:"Atomicserver"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"public_key"}),": Set the public key for agent used for ",(0,n.jsx)(t.code,{children:"Atomicserver"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"parent_resource_id"}),":  Set the parent resource id (url) that ",(0,n.jsx)(t.code,{children:"Atomicserver"})," uses to store resources under"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can refer to [",(0,n.jsx)(t.code,{children:"AtomicserverBuilder"}),"]'s docs for more information."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Atomicserver;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Atomicserver::default();\n\n    // Set the server address for Atomicserver\n    builder.endpoint("http://localhost:9883");\n    // Set the public/private key for agent for Atomicserver\n    builder.private_key("<private_key>");\n    builder.public_key("<public_key>");\n    // Set the parent resource id for Atomicserver. In this case\n    // We are using the root resource (Drive)\n    builder.parent_resource_id("http://localhost:9883");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}var l=r(5431),o=r(2860);const c={title:"AtomicServer"},u=void 0,d={id:"services/atomicserver",title:"AtomicServer",description:"Atomic-Server services support.",source:"@site/docs/services/atomicserver.mdx",sourceDirName:"services",slug:"/services/atomicserver",permalink:"/docs/services/atomicserver",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/atomicserver.mdx",tags:[],version:"current",lastUpdatedBy:"zjregee",lastUpdatedAt:1712670872,formattedLastUpdatedAt:"Apr 9, 2024",frontMatter:{title:"AtomicServer"},sidebar:"docs",previous:{title:"Services",permalink:"/docs/category/services"},next:{title:"Azblob",permalink:"/docs/services/azblob"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.atomicdata.dev/",children:"Atomic-Server"})," services support."]}),"\n","\n",(0,n.jsx)(a,{components:e.components}),"\n",(0,n.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(o.Z,{value:"rust",label:"Rust",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Sqlite;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("endpoint".to_string(), "http://localhost:9883".to_string());\n    map.insert("private_key".to_string(), "your_private_key".to_string());\n    map.insert("public_key".to_string(), "your_public_key".to_string());\n    map.insert("parent_resource_id".to_string(), "your_resource_id".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Atomicserver, map)?;\n    Ok(())\n}\n'})})}),(0,n.jsx)(o.Z,{value:"node.js",label:"Node.js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"atomicserver\", {\n        endpoint: 'http://localhost:9883',\n        private_key: 'your_private_key',\n        public_key: 'your_public_key',\n        parent_resource_id: 'your_resource_id',\n    });\n}\n"})})}),(0,n.jsx)(o.Z,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("atomicserver", {\n    "connection_string": "http://localhost:9883",\n    "private_key": "your_private_key",\n    "public_key": "your_public_key",\n    "parent_resource_id": "your_resource_id",\n})\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},2860:(e,t,r)=>{r.d(t,{Z:()=>a});r(959);var n=r(6259);const s={tabItem:"tabItem_CbVR"};var i=r(1527);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:r,children:t})}},5431:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(959),s=r(6259),i=r(2990),a=r(8903),l=r(3133),o=r(563),c=r(351),u=r(3026);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=p(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:r,groupId:s}),[b,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),x=(()=>{const e=c??b;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=r(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var f=r(1527);function j(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function g(e){const t=(0,v.Z)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(t))}},2175:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>a});var n=r(959);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);