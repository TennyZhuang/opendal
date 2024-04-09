"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3702],{3919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=t(1527),s=t(2175);function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," batch"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": Set the work directory for this backend."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"credentials-related",children:"Credentials related"}),"\n",(0,r.jsx)(n.h4,{id:"just-provide-access-token-temporary",children:"Just provide Access Token (Temporary)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"access_token"}),": set the access_token for this backend.\nPlease notice its expiration."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term",children:"Or provide Client ID and Client Secret and refresh token (Long Term)"}),"\n",(0,r.jsx)(n.p,{children:"If you want to let OpenDAL to refresh the access token automatically,\nplease provide the following fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"refresh_token"}),": set the refresh_token for dropbox api"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client_id"}),": set the client_id for dropbox api"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client_secret"}),": set the client_secret for dropbox api"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL is a library, it cannot do the first step of OAuth2 for you.\nYou need to get authorization code from user by calling Dropbox's authorize url\nand exchange it for refresh token."}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://www.dropbox.com/developers/reference/oauth-guide",children:"Dropbox OAuth2 Guide"}),"\nfor more information."]}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to [",(0,r.jsx)(n.code,{children:"DropboxBuilder"}),"]'s docs for more information"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::raw::OpWrite;\nuse opendal::services::Dropbox;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Dropbox::default();\n    builder.root("/opendal");\n    builder.access_token("<token>");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var i=t(5431),l=t(2860);const c={title:"Dropbox"},d=void 0,u={id:"services/dropbox",title:"Dropbox",description:"Dropbox services support.",source:"@site/docs/services/dropbox.mdx",sourceDirName:"services",slug:"/services/dropbox",permalink:"/docs/services/dropbox",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/dropbox.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1712673888,formattedLastUpdatedAt:"Apr 9, 2024",frontMatter:{title:"Dropbox"},sidebar:"docs",previous:{title:"DashMap",permalink:"/docs/services/dashmap"},next:{title:"Etcd",permalink:"/docs/services/etcd"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.dropbox.com/",children:"Dropbox"})," services support."]}),"\n","\n",(0,r.jsx)(o,{components:e.components}),"\n",(0,r.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Dropbox, map)?;\n    Ok(())\n}\n'})})}),(0,r.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("dropbox", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'})})}),(0,r.jsx)(l.Z,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("dropbox",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>o});t(959);var r=t(6259);const s={tabItem:"tabItem_CbVR"};var a=t(1527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(959),s=t(6259),a=t(2990),o=t(8903),i=t(3133),l=t(563),c=t(351),d=t(3026);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=b({queryString:t,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=t(1527);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(k,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(959);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);