"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18855],{59230:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>k,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"api/get-country-by-id","title":"Get Country for a CountryId","description":"API used to get the Country for a specific CountryId","source":"@site/docs/api/get-country-by-id.api.mdx","sourceDirName":"api","slug":"/api/get-country-by-id","permalink":"/fasp-documentation/docs/api/get-country-by-id","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-country-by-id","title":"Get Country for a CountryId","description":"API used to get the Country for a specific CountryId","sidebar_label":"Get Country for a CountryId","hide_title":true,"hide_table_of_contents":true,"api":"eJydVMly2zAM/RUOL21nXNt104tOdZcsl2x2Th5PBpEgi61MMiRkx6PRvxek5NhO0iU9SSQBPADvAbUkWHiZzGRqKk1uI+c9maFPnbKkjJaJHF+eicpjJsiIBZKgAsXX1ljkxgkQ3mKqcpVur88y2ZPGooMQgk+JZMfu8Uv7bMHBEgldAK+l5gObpXsBVAC3QIV8mtEjDOcCJDamEmvQFBJ8khy7OryvlENOglyFPenTApcgk1rSxgZMpQkXGEzZYQnUXn0cyaaZB3dvjfbog8doOAyfw2yukSqn/T40x0oNh9UUcfCBBj98MK6bpunJo+HR78OAOCWyEwKqfP/8Ynp7fHFz/k2ofB+AS++azrxkBr3QhgQ+KE9/wf70UglnbO80lAKdY0ZjV63DFQcJvDOuQ3KoVmxi8n+qkqGY3sJ05EfGmcpEDsCqQcfzoH4kvGELj261FUTlSjYuuBU+GQzW63X/vmKOg8yiqoDT3ZBKfd+4xTOFXDqTVWk4iDZoVOrVeMqWK3AK7srIaKRY6dzEChSVQRBXB0ACdCbGWzQxNaYMQTjPFmrU/zDqD59lwFPzxgdFQpqib9XB+GIS0+laB2lsXSf+4/HkUhDCkl9fWz5LWgWP08nkNsS5Pb36vCh8+t76ZTRhPkqVIit5D3FsgadBtPkfQubG9O/AyUCkNZ6WoPccT3gPHO6A/dE/6ES9E8n/rpJuUKPCbAm8GJou3bpT1UyyqmJTt8pMdquEKS64gmBV13fg8caVTROu7ytk42Q236kiii9TPvyzdnMoPf6horfX3Xp5J161lV4sqbsEvYkyLatw4t+fuDnYjc2cjQuEjIUU0m3fxyw0S3ueu4kMKn+cxpPvU2b1F9SND5U=","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Add Country","permalink":"/fasp-documentation/docs/api/add-country"},"next":{"title":"Get Country list","permalink":"/fasp-documentation/docs/api/get-country-list-all"}}');var i=n(74848),a=n(28453),r=n(57742),s=n.n(r),d=n(78178),u=n.n(d),c=n(19624),p=n.n(c),l=n(96226),y=n.n(l),f=(n(77675),n(19365),n(51107));const k={id:"get-country-by-id",title:"Get Country for a CountryId",description:"API used to get the Country for a specific CountryId",sidebar_label:"Get Country for a CountryId",hide_title:!0,hide_table_of_contents:!0,api:"eJydVMly2zAM/RUOL21nXNt104tOdZcsl2x2Th5PBpEgi61MMiRkx6PRvxek5NhO0iU9SSQBPADvAbUkWHiZzGRqKk1uI+c9maFPnbKkjJaJHF+eicpjJsiIBZKgAsXX1ljkxgkQ3mKqcpVur88y2ZPGooMQgk+JZMfu8Uv7bMHBEgldAK+l5gObpXsBVAC3QIV8mtEjDOcCJDamEmvQFBJ8khy7OryvlENOglyFPenTApcgk1rSxgZMpQkXGEzZYQnUXn0cyaaZB3dvjfbog8doOAyfw2yukSqn/T40x0oNh9UUcfCBBj98MK6bpunJo+HR78OAOCWyEwKqfP/8Ynp7fHFz/k2ofB+AS++azrxkBr3QhgQ+KE9/wf70UglnbO80lAKdY0ZjV63DFQcJvDOuQ3KoVmxi8n+qkqGY3sJ05EfGmcpEDsCqQcfzoH4kvGELj261FUTlSjYuuBU+GQzW63X/vmKOg8yiqoDT3ZBKfd+4xTOFXDqTVWk4iDZoVOrVeMqWK3AK7srIaKRY6dzEChSVQRBXB0ACdCbGWzQxNaYMQTjPFmrU/zDqD59lwFPzxgdFQpqib9XB+GIS0+laB2lsXSf+4/HkUhDCkl9fWz5LWgWP08nkNsS5Pb36vCh8+t76ZTRhPkqVIit5D3FsgadBtPkfQubG9O/AyUCkNZ6WoPccT3gPHO6A/dE/6ES9E8n/rpJuUKPCbAm8GJou3bpT1UyyqmJTt8pMdquEKS64gmBV13fg8caVTROu7ytk42Q236kiii9TPvyzdnMoPf6horfX3Xp5J161lV4sqbsEvYkyLatw4t+fuDnYjc2cjQuEjIUU0m3fxyw0S3ueu4kMKn+cxpPvU2b1F9SND5U=",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},g=void 0,h={},m=[];function C(t){const e={p:"p",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Country for a CountryId"}),"\n",(0,i.jsx)(s(),{method:"get",path:"/api/country/{countryId}",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"API used to get the Country for a specific CountryId"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(u(),{parameters:[{name:"countryId",in:"path",description:"CountryId that you want to the Country for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,i.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(y(),{id:void 0,label:void 0,responses:{200:{description:"Returns the Country",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the CountryId specified does not exist",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of Country",content:{"text/json":{}}}}})]})}function b(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(C,{...t})}):C(t)}}}]);