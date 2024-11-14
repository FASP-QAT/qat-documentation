"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11110],{8273:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>u,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"api/get-dataset-for-realm","title":"Get dataset list for realm","description":"API used to get the dataset list for specific realm.","source":"@site/docs/api/get-dataset-for-realm.api.mdx","sourceDirName":"api","slug":"/api/get-dataset-for-realm","permalink":"/fasp-documentation/docs/api/get-dataset-for-realm","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-dataset-for-realm","title":"Get dataset list for realm","description":"API used to get the dataset list for specific realm.","sidebar_label":"Get dataset list for realm","hide_title":true,"hide_table_of_contents":true,"api":"eJydVE1zGjEM/SseX9rOUKAkvXAqHULCJR98nDJMRtkVrNtl7dhaCLOz/72yMQmEtEl6wmue9J7kJ1WSYOFk91amQOCQ5KwhU3SJVYaULmRX9q6HonSYCtJigSQoQxHBIleOxFxb4Qwmaq4SYRHyZVPIhtQGLfgcw5SzcGR/GzTQduRBDDFgYYmE1iuoZMEfDA0pOKghlec3QJl8KSpiWAyQ2OhSrKEgr/ClMo60+FAqi6yCbIkN6ZIMlyC7laSN8YSqIFygh3LAEmh7ddKRdT3z4c7owqHzEZ122/8cihkhlbZwR53hhInm3AUFMnyk1i/nI6q6rhvytH3y91wgLojMmIBK1xxcjX4O+/2zS6HmgWXq0IpUoxOFJpHBCgUkCTr3JuXpOykvryZ3g6vpZX9Huet4fGn2wxM/Pr5d7PfXGjdkvC0gF2gtmyg8prG44iTeb4GVLKoVQ/T8/b1lPrZVpqPxgtPYRF3ZAqNaMU0rVtSq4qFmHPd1tbNjaXMOybgnrttqrdfr5kPJLvM2D74GVr4hlbimtosjh15bnZaJ/xDbpGFObnoTRq7AKrjPg6WCx1Qx16EORbl35M0BkYAiFb0dm5honfskrHNL1Wl+6zTbRwp4cD85PxNba4R+Mr8YBzmxgZCEBsbRG/TG14IQ/HB+tHyeKeUjLsbjO5/n7uLmxyJzyVfjlgHCr5KrBHmU9hh7BngcxVb/IeVc6+Y9WOmf02hHSyj2As/ZCEdryMbFctCI6tkp/73M4qYIPjM58GKqo9wqeutWsrc8ddyjjb091t0d+akzrsSjq+qecVOb17W/fijRbvh+9uyOYMJUOX9mJ88hd/iP0j6P4p77Ij6yHV+tLF5CsQluzUv/xcffuNlb0PWMoRlCym7yWrf/9ththvbinofTW/1pMM/PJvy0fwCzUDuw","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get dataset list","permalink":"/fasp-documentation/docs/api/get-dataset-all"},"next":{"title":"Get planning unit list for programId and versionId","permalink":"/fasp-documentation/docs/api/get-planning-unit-for-dataset"}}');var i=a(74848),r=a(28453),n=a(57742),o=a.n(n),d=a(78178),l=a.n(d),c=a(19624),p=a.n(c),m=a(96226),h=a.n(m),f=(a(77675),a(19365),a(51107));const u={id:"get-dataset-for-realm",title:"Get dataset list for realm",description:"API used to get the dataset list for specific realm.",sidebar_label:"Get dataset list for realm",hide_title:!0,hide_table_of_contents:!0,api:"eJydVE1zGjEM/SseX9rOUKAkvXAqHULCJR98nDJMRtkVrNtl7dhaCLOz/72yMQmEtEl6wmue9J7kJ1WSYOFk91amQOCQ5KwhU3SJVYaULmRX9q6HonSYCtJigSQoQxHBIleOxFxb4Qwmaq4SYRHyZVPIhtQGLfgcw5SzcGR/GzTQduRBDDFgYYmE1iuoZMEfDA0pOKghlec3QJl8KSpiWAyQ2OhSrKEgr/ClMo60+FAqi6yCbIkN6ZIMlyC7laSN8YSqIFygh3LAEmh7ddKRdT3z4c7owqHzEZ122/8cihkhlbZwR53hhInm3AUFMnyk1i/nI6q6rhvytH3y91wgLojMmIBK1xxcjX4O+/2zS6HmgWXq0IpUoxOFJpHBCgUkCTr3JuXpOykvryZ3g6vpZX9Huet4fGn2wxM/Pr5d7PfXGjdkvC0gF2gtmyg8prG44iTeb4GVLKoVQ/T8/b1lPrZVpqPxgtPYRF3ZAqNaMU0rVtSq4qFmHPd1tbNjaXMOybgnrttqrdfr5kPJLvM2D74GVr4hlbimtosjh15bnZaJ/xDbpGFObnoTRq7AKrjPg6WCx1Qx16EORbl35M0BkYAiFb0dm5honfskrHNL1Wl+6zTbRwp4cD85PxNba4R+Mr8YBzmxgZCEBsbRG/TG14IQ/HB+tHyeKeUjLsbjO5/n7uLmxyJzyVfjlgHCr5KrBHmU9hh7BngcxVb/IeVc6+Y9WOmf02hHSyj2As/ZCEdryMbFctCI6tkp/73M4qYIPjM58GKqo9wqeutWsrc8ddyjjb091t0d+akzrsSjq+qecVOb17W/fijRbvh+9uyOYMJUOX9mJ88hd/iP0j6P4p77Ij6yHV+tLF5CsQluzUv/xcffuNlb0PWMoRlCym7yWrf/9ththvbinofTW/1pMM/PJvy0fwCzUDuw",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},b=void 0,g={},y=[];function j(t){const e={p:"p",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get dataset list for realm"}),"\n",(0,i.jsx)(o(),{method:"get",path:"/api/dataset/realmId/{realmId}",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"API used to get the dataset list for specific realm."}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(l(),{parameters:[{name:"realmId",in:"path",description:"realmId that you want to dataset list for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,i.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Returns the dataset list",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the realmId specified does not exist",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of dataset list",content:{"text/json":{}}}}})]})}function x(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(j,{...t})}):j(t)}}}]);