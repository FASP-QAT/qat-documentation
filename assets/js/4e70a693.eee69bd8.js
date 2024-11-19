"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69694],{23832:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>x,default:()=>P,frontMatter:()=>h,metadata:()=>i,toc:()=>U});const i=JSON.parse('{"id":"api/get-user-list-1","title":"Get the User list for specified realmId","description":"API used to get the User list for specified realmId","source":"@site/docs/api/get-user-list-1.api.mdx","sourceDirName":"api","slug":"/api/get-user-list-1","permalink":"/fasp-documentation/docs/api/get-user-list-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-user-list-1","title":"Get the User list for specified realmId","description":"API used to get the User list for specified realmId","sidebar_label":"Get the User list for specified realmId","hide_title":true,"hide_table_of_contents":true,"api":"eJydVE2P2jAQ/SuWL20lmrBse8mpVPuFVO0X7GmF0GwyELeJ7bUdKIry3zt2QoFd2qU9xbHfzHtjv5maO1hYnjzyyqLh0x7P0KZGaCeU5Akf3o4YnWTMKbZAx1yO7IGQrBDWsbkyzGpMxVwQxCAU5SjjPa40GvAZ6C/hFOdDvlHE7IRONRgo0aHxvDWX9EOobbTwxBpczl+quW8xpAIcW6uKrUAe0ERxBp8rYZDonamwx22aYwk8qblba08npMMFeigFlODardMBb5qpD7daSYvWRwz6ff95KcVVRtp9csqWKkosXWDCny7+bj28bpqmxz/1T/+cCNiVc3rswFU2uri5/zo6Ozu/ZmK+pcgUWiaVYzkskUGaorUHH+ZNHZ+O1HF9M5ld3Dxcn210WFUiU+26khmaYi3kgmXgYCuPrjPNozdEfD50qyPCGwkFQ2PIW+GdtcElJfEeJFKDzqBYEoRUHFcwkZHdctV5MTiQzJXwGLSIve/jznxx3S0aAtH+cuPRyhSEz+libBLHq9Uqeq7IeuT7NPgcSPPaidRGyixe2fbWqKxK/Q9rk4bGuRtOCLkEI+CpCE4L1hNyrkIRwhXeqHd7RAxkxoYbNjZRqvBJSGdLNYhOBlH/lQJq43fBKhvT0E0SPxsHOd3tQRpur+vHi+H4ljmEkk7/tXxqNeEjrsbjmc8zu7r7ssht+lHbMkDoSQqRInXYDuNQA3Upa/XvU86Vip7AcP+WWllXgtwJvDx6MO3dSr31zH/OuW6WBL/pAmhwNZ3yuvPYIyeP+XIstmNpE5pslvTkOVXkoXX9BBYfTNE0fvu5QrOm/enWJcGMmbB+TXaeQ2HxL1W9v+/G4Ad2/Og8WFS3CXIdPFtU/o+WP3C9M7ubKUFzBJoLQWl7OiTPabcTt+1Pb/jfvXl5PqEH/gWqcEAf","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Add User","permalink":"/fasp-documentation/docs/api/add-user"},"next":{"title":"Get user list by programId","permalink":"/fasp-documentation/docs/api/get-user-list-for-program"}}');var a=s(74848),r=s(28453),o=s(57742),d=s.n(o),n=s(78178),l=s.n(n),c=s(19624),p=s.n(c),u=s(96226),m=s.n(u),f=(s(77675),s(19365),s(51107));const h={id:"get-user-list-1",title:"Get the User list for specified realmId",description:"API used to get the User list for specified realmId",sidebar_label:"Get the User list for specified realmId",hide_title:!0,hide_table_of_contents:!0,api:"eJydVE2P2jAQ/SuWL20lmrBse8mpVPuFVO0X7GmF0GwyELeJ7bUdKIry3zt2QoFd2qU9xbHfzHtjv5maO1hYnjzyyqLh0x7P0KZGaCeU5Akf3o4YnWTMKbZAx1yO7IGQrBDWsbkyzGpMxVwQxCAU5SjjPa40GvAZ6C/hFOdDvlHE7IRONRgo0aHxvDWX9EOobbTwxBpczl+quW8xpAIcW6uKrUAe0ERxBp8rYZDonamwx22aYwk8qblba08npMMFeigFlODardMBb5qpD7daSYvWRwz6ff95KcVVRtp9csqWKkosXWDCny7+bj28bpqmxz/1T/+cCNiVc3rswFU2uri5/zo6Ozu/ZmK+pcgUWiaVYzkskUGaorUHH+ZNHZ+O1HF9M5ld3Dxcn210WFUiU+26khmaYi3kgmXgYCuPrjPNozdEfD50qyPCGwkFQ2PIW+GdtcElJfEeJFKDzqBYEoRUHFcwkZHdctV5MTiQzJXwGLSIve/jznxx3S0aAtH+cuPRyhSEz+libBLHq9Uqeq7IeuT7NPgcSPPaidRGyixe2fbWqKxK/Q9rk4bGuRtOCLkEI+CpCE4L1hNyrkIRwhXeqHd7RAxkxoYbNjZRqvBJSGdLNYhOBlH/lQJq43fBKhvT0E0SPxsHOd3tQRpur+vHi+H4ljmEkk7/tXxqNeEjrsbjmc8zu7r7ssht+lHbMkDoSQqRInXYDuNQA3Upa/XvU86Vip7AcP+WWllXgtwJvDx6MO3dSr31zH/OuW6WBL/pAmhwNZ3yuvPYIyeP+XIstmNpE5pslvTkOVXkoXX9BBYfTNE0fvu5QrOm/enWJcGMmbB+TXaeQ2HxL1W9v+/G4Ad2/Og8WFS3CXIdPFtU/o+WP3C9M7ubKUFzBJoLQWl7OiTPabcTt+1Pb/jfvXl5PqEH/gWqcEAf",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},x=void 0,b={},U=[];function I(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get the User list for specified realmId"}),"\n",(0,a.jsx)(d(),{method:"get",path:"/api/user/realmId/{realmId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"API used to get the User list for specified realmId"}),"\n",(0,a.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"realmId",in:"path",description:"RealmId that you want the User list for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,a.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Returns the User list",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access to get the User list",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the some of the underlying data does not match.",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of User list",content:{"text/json":{}}}}})]})}function P(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(I,{...e})}):I(e)}}}]);