"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6678],{71802:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>S,frontMatter:()=>h,metadata:()=>l,toc:()=>b});const l=JSON.parse('{"id":"api/application-level-dashboard-user-list","title":"Application level admin user list","description":"API used to get user list for application level admin","source":"@site/docs/api/application-level-dashboard-user-list.api.mdx","sourceDirName":"api","slug":"/api/application-level-dashboard-user-list","permalink":"/fasp-documentation/docs/api/application-level-dashboard-user-list","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"application-level-dashboard-user-list","title":"Application level admin user list","description":"API used to get user list for application level admin","sidebar_label":"Application level admin user list","hide_title":true,"hide_table_of_contents":true,"api":"eJydVMFu2zAM/RVBl12yuAuwS08LsHQtEHStk+5SFAFjM7E2WVIlullg+N9HOmmadEOH7RJHMsn3+PjoVhOskz6/1yWkaukhlvphoEtMRTSBjHf6XI9vrlSTsFTk1RpJ/kdlTSK18lFBCNYUILHK4hNaBWVtnB5oHzD291clVzmKm0rY52fAOy435WqcETEF7xIyo1aPzs7kccolR2qiSwp2BPyqZ5P+wqTwjtCRlCP8Sdn3JMXarusG+uPbMJdEYUZATRpeXc8n+fV4uphN8m+TfDHJ86+5MitFFUZUG0gq+RqVl7PCGJkTVUCqNKVynhRY6zcSrQ7SiKaFr4NFwjeJMtMaqfIiJQ+BYwNQxYcMgskO08uORMhEGg7k3yfWiKfc6iZazqm4qXSeZZvNZvjYgCOz2ueAA7slU6Shj2v92gk30ZdN0fPeFe11vx3POfIJooGl7WfXdWwi41a+b8SQRU6+PQFS4Eo1fkZTc++tFGGeO6jR8MNoePYbA/biuySiQVFgSr2YjK9mPZ29glD0CjqoBfdiPLtRhFDz239tH2swknE5my2kzuLy9tO6SsX7kOo+hMfCciN79ghxHKBgXjv+p5Ar74dLiFrmGXyiGtxJ4h8d/LJxr/VoXxzz32tK2yDYvd+CBb7r9qzbvcfueXmNQB++EYPjdZYmxWk884pbkvi2XULCu2i7Tq4fG4xbvn94sYmcGKdCKDlVrPkDt9IFzzVQ7yfbHHj1eyCmOuzAl8mcRfwF4wKlig==","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Supply plan reviewer level dashboard","permalink":"/fasp-documentation/docs/api/supply-plan-reviewer-level-dashboard"},"next":{"title":"Realm level admin user list","permalink":"/fasp-documentation/docs/api/realm-level-dashboard-user-list"}}');var a=i(74848),s=i(28453),o=i(57742),n=i.n(o),d=i(78178),r=i.n(d),p=i(19624),c=i.n(p),u=i(96226),m=i.n(u),f=(i(77675),i(19365),i(51107));const h={id:"application-level-dashboard-user-list",title:"Application level admin user list",description:"API used to get user list for application level admin",sidebar_label:"Application level admin user list",hide_title:!0,hide_table_of_contents:!0,api:"eJydVMFu2zAM/RVBl12yuAuwS08LsHQtEHStk+5SFAFjM7E2WVIlullg+N9HOmmadEOH7RJHMsn3+PjoVhOskz6/1yWkaukhlvphoEtMRTSBjHf6XI9vrlSTsFTk1RpJ/kdlTSK18lFBCNYUILHK4hNaBWVtnB5oHzD291clVzmKm0rY52fAOy435WqcETEF7xIyo1aPzs7kccolR2qiSwp2BPyqZ5P+wqTwjtCRlCP8Sdn3JMXarusG+uPbMJdEYUZATRpeXc8n+fV4uphN8m+TfDHJ86+5MitFFUZUG0gq+RqVl7PCGJkTVUCqNKVynhRY6zcSrQ7SiKaFr4NFwjeJMtMaqfIiJQ+BYwNQxYcMgskO08uORMhEGg7k3yfWiKfc6iZazqm4qXSeZZvNZvjYgCOz2ueAA7slU6Shj2v92gk30ZdN0fPeFe11vx3POfIJooGl7WfXdWwi41a+b8SQRU6+PQFS4Eo1fkZTc++tFGGeO6jR8MNoePYbA/biuySiQVFgSr2YjK9mPZ29glD0CjqoBfdiPLtRhFDz239tH2swknE5my2kzuLy9tO6SsX7kOo+hMfCciN79ghxHKBgXjv+p5Ar74dLiFrmGXyiGtxJ4h8d/LJxr/VoXxzz32tK2yDYvd+CBb7r9qzbvcfueXmNQB++EYPjdZYmxWk884pbkvi2XULCu2i7Tq4fG4xbvn94sYmcGKdCKDlVrPkDt9IFzzVQ7yfbHHj1eyCmOuzAl8mcRfwF4wKlig==",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},v=void 0,k={},b=[];function R(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Application level admin user list"}),"\n",(0,a.jsx)(n(),{method:"get",path:"/api/dashboard/application/user",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"API used to get user list for application level admin"}),"\n",(0,a.jsx)(r(),{parameters:void 0}),"\n",(0,a.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Returns a list of users for application level admin",content:{"text/json":{}}},500:{description:"Returns a HttpStatus.INTERNAL_SERVER_ERROR if there was some other error that did not allow the operation to complete",content:{"text/json":{}}}}})]})}function S(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(R,{...e})}):R(e)}}}]);