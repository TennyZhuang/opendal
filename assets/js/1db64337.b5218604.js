"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1372],{7500:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(1527),t=n(2175);const i={sidebar_label:"About",sidebar_position:1},o="Welcome to Apache OpenDAL\u2122",a={id:"overview",title:"Welcome to Apache OpenDAL\u2122",description:"OpenDAL represents Open Data Access Layer. Our vision is to access data freely.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/overview.md",tags:[],version:"current",lastUpdatedBy:"John Bampton",lastUpdatedAt:1710161712,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"About",sidebar_position:1},sidebar:"docs",next:{title:"Quickstart",permalink:"/docs/quickstart"}},d={},c=[{value:"What does OpenDAL do?",id:"what-does-opendal-do",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Why OpenDAL?",id:"why-opendal",level:2},{value:"1. Free from services",id:"1-free-from-services",level:3},{value:"2. Free from implementations",id:"2-free-from-implementations",level:3},{value:"3. Free to integrate",id:"3-free-to-integrate",level:3},{value:"4. Free of cost",id:"4-free-of-cost",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"welcome-to-apache-opendal",children:"Welcome to Apache OpenDAL\u2122"}),"\n",(0,r.jsxs)(s.p,{children:["OpenDAL represents ",(0,r.jsx)(s.strong,{children:"Open"})," ",(0,r.jsx)(s.strong,{children:"D"}),"ata ",(0,r.jsx)(s.strong,{children:"A"}),"ccess ",(0,r.jsx)(s.strong,{children:"L"}),"ayer. Our vision is to ",(0,r.jsx)(s.strong,{children:"access data freely"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"what-does-opendal-do",children:"What does OpenDAL do?"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://user-images.githubusercontent.com/5351546/222356748-14276998-501b-4d2a-9b09-b8cff3018204.png",alt:""})}),"\n",(0,r.jsx)(s.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(s.p,{children:["See the page for quick start with multiple languages: ",(0,r.jsx)(s.a,{href:"/docs/quickstart",children:"Quickstart"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"why-opendal",children:"Why OpenDAL?"}),"\n",(0,r.jsx)(s.p,{children:'The vision of OpenDAL is access data freely, where "free" refers to four essential aspects:'}),"\n",(0,r.jsx)(s.h3,{id:"1-free-from-services",children:"1. Free from services"}),"\n",(0,r.jsxs)(s.p,{children:["OpenDAL must enable users to access various storage services ranging from ",(0,r.jsx)(s.code,{children:"s3"})," to ",(0,r.jsx)(s.code,{children:"dropbox"})," via its own native API. It should provide a unified API for accessing all these services."]}),"\n",(0,r.jsx)(s.p,{children:"For example, we DO"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add support for ",(0,r.jsx)(s.a,{href:"https://www.google.com/drive/",children:"Google Drive"}),": It allows users to access and manage their data on the ",(0,r.jsx)(s.a,{href:"https://www.google.com/drive/",children:"Google Drive"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Add support for ",(0,r.jsx)(s.a,{href:"https://www.alibabacloud.com/product/object-storage-service",children:"Object Storage Service (OSS)"})," via native API: Users can utilize Aliyun's RAM support."]}),"\n",(0,r.jsxs)(s.li,{children:["Add support for ",(0,r.jsx)(s.a,{href:"https://supabase.com/docs/guides/storage",children:"supabase storage"}),": Users can visit ",(0,r.jsx)(s.code,{children:"supabase storage"})," now!"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"while we DO NOT"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add support for ",(0,r.jsx)(s.a,{href:"https://cloud.google.com/storage",children:"Google Cloud Storage (GCS)"})," via ",(0,r.jsx)(s.a,{href:"https://cloud.google.com/storage/docs/xml-api/overview",children:"XML API"}),": ",(0,r.jsx)(s.a,{href:"https://cloud.google.com/storage",children:"GCS"})," has native ",(0,r.jsx)(s.a,{href:"https://cloud.google.com/storage/docs/json_api",children:"JSON API"})," which is more powerful"]}),"\n",(0,r.jsxs)(s.li,{children:["Add support for structural data in ",(0,r.jsx)(s.code,{children:"MySQL/PostgreSQL"}),": We can treat a database as a simple key-value store, but we can't support unified access of structural data."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"2-free-from-implementations",children:"2. Free from implementations"}),"\n",(0,r.jsx)(s.p,{children:"OpenDAL needs to separate the various implementation details of services and enables users to write identical logic for different services."}),"\n",(0,r.jsx)(s.p,{children:"For example, we DO"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a new capability to indicate whether ",(0,r.jsx)(s.code,{children:"presign"})," is supported: Users can now write logic based on the ",(0,r.jsx)(s.code,{children:"can_presign"})," option."]}),"\n",(0,r.jsxs)(s.li,{children:["Add a ",(0,r.jsx)(s.code,{children:"default_storage_class"})," configuration for the S3 service: Configuration is specific to the S3 service."]}),"\n",(0,r.jsxs)(s.li,{children:["Add an option for ",(0,r.jsx)(s.code,{children:"content_type"})," in the ",(0,r.jsx)(s.code,{children:"write"})," operation: It aligns with HTTP standards."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"while we DO NOT"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a new option in read for ",(0,r.jsx)(s.code,{children:"storage_class"}),": As different services could have varying values for this parameter."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"3-free-to-integrate",children:"3. Free to integrate"}),"\n",(0,r.jsx)(s.p,{children:"OpenDAL needs to be integrated with different systems."}),"\n",(0,r.jsx)(s.p,{children:"For example, we DO"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Add Python binding: Python programmers can use OpenDAL."}),"\n",(0,r.jsxs)(s.li,{children:["Add object_store integration: ",(0,r.jsx)(s.code,{children:"object_store"})," users can adopt OpenDAL."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"4-free-of-cost",children:"4. Free of cost"}),"\n",(0,r.jsx)(s.p,{children:"OpenDAL needs to implement features in a zero cost way which means:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Users don't need to pay costs for unused features."}),"\n",(0,r.jsx)(s.li,{children:"Users cannot write better implementation for used features."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"For example, we DO"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add ",(0,r.jsx)(s.code,{children:"layer"})," support: Users can add logging/metrics/tracing in zero cost way."]}),"\n",(0,r.jsxs)(s.li,{children:["Implement ",(0,r.jsx)(s.code,{children:"seek"})," for Reader: Users cannot write better ",(0,r.jsx)(s.code,{children:"seek"})," support, they all need to pay the same cost."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"we DO NOT"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add ",(0,r.jsx)(s.code,{children:"Arc"})," for metadata: Users may only need to use metadata once and never clone it. For those who do want this feature, they can add ",(0,r.jsx)(s.code,{children:"Arc"})," themselves."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2175:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(959);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);