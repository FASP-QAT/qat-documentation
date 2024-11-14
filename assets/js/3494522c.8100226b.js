"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42409],{69638:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>v,contentTitle:()=>m,default:()=>M,frontMatter:()=>x,metadata:()=>s,toc:()=>T});const s=JSON.parse('{"id":"api/get-forecast-method-type-list","title":"Get active ForecastMethodType list","description":"API used to get the complete ForecastMethodType list. Will only return those ForecastMethodTypes that are marked Active.","source":"@site/docs/api/get-forecast-method-type-list.api.mdx","sourceDirName":"api","slug":"/api/get-forecast-method-type-list","permalink":"/fasp-documentation/docs/api/get-forecast-method-type-list","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-forecast-method-type-list","title":"Get active ForecastMethodType list","description":"API used to get the complete ForecastMethodType list. Will only return those ForecastMethodTypes that are marked Active.","sidebar_label":"Get active ForecastMethodType list","hide_title":true,"hide_table_of_contents":true,"api":"eJzFVE2P2jAQ/SuWL73QQJF64VQO3V2kVoJC1cNqtRqcgbjr2F57AkVR/nvHzn5R6ErbS0+Rkzfz3rx5TisJtlFOruXGBVQQ6StS5crVwaO8GcgSowrak3ZWTuR0PhNNxFKQE1skQRUK5WpvkFBcnDQQRkcqxA9tjHDWHERAaoLlMhfP4SN/ARIQUNQQ7phnqkjvsJAD6TwGSDJmJQth8tPyL8zGyIDROxuRp2rleDRKj+MxvmUZMcv/i2ruo5wltJTKCX/R8GdMxW3XdQP58VzbGeODBSMwBBf6WXzAHTdJljEZzx9Q7xjiNv/EzNR1hvceMNYDVXwYgtfDMyscyIhhhyGtuJVNMIytiHycDIf7/b64b8CS3miVvQVWfyCtYuHCVv65/XlwZaPSQfRNBROKxXTFyB0EDWuTTe86Do62G5cH0GSQixdHRAIsL/eRTaycM6kJ6+ypxsWHcTE6UcD5exdT+EApjP0CmV8ss5wH50Bl5yzUifdiupwLQqj561vHxxp0qrhaLm9Tn9urxadtFdV7H+sM4XUYrZDD9oJx6kGxrl7/MeXGuWINQaY9ehepBvui8JJvFOTAv5KNI0Pa56j8z7tJKWmTPqvegLbJmDx5+5DPa8n5ZOT5nwxTUsK07Roifg+m69Lr+wbDgd/fPMcrnbh3hVDyvlOk7/CQhuc8eMo5NM2TlnxvUhif7szl5xWb/xtghLzX","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get active NodeType list","permalink":"/fasp-documentation/docs/api/get-node-type-list"},"next":{"title":"Get forecasting statistic data for arima","permalink":"/fasp-documentation/docs/api/post-arima"}}');var a=o(74848),i=o(28453),r=o(57742),c=o.n(r),n=o(78178),d=o.n(n),l=o(19624),p=o.n(l),h=o(96226),u=o.n(h),y=(o(77675),o(19365),o(51107));const x={id:"get-forecast-method-type-list",title:"Get active ForecastMethodType list",description:"API used to get the complete ForecastMethodType list. Will only return those ForecastMethodTypes that are marked Active.",sidebar_label:"Get active ForecastMethodType list",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVE2P2jAQ/SuWL73QQJF64VQO3V2kVoJC1cNqtRqcgbjr2F57AkVR/nvHzn5R6ErbS0+Rkzfz3rx5TisJtlFOruXGBVQQ6StS5crVwaO8GcgSowrak3ZWTuR0PhNNxFKQE1skQRUK5WpvkFBcnDQQRkcqxA9tjHDWHERAaoLlMhfP4SN/ARIQUNQQ7phnqkjvsJAD6TwGSDJmJQth8tPyL8zGyIDROxuRp2rleDRKj+MxvmUZMcv/i2ruo5wltJTKCX/R8GdMxW3XdQP58VzbGeODBSMwBBf6WXzAHTdJljEZzx9Q7xjiNv/EzNR1hvceMNYDVXwYgtfDMyscyIhhhyGtuJVNMIytiHycDIf7/b64b8CS3miVvQVWfyCtYuHCVv65/XlwZaPSQfRNBROKxXTFyB0EDWuTTe86Do62G5cH0GSQixdHRAIsL/eRTaycM6kJ6+ypxsWHcTE6UcD5exdT+EApjP0CmV8ss5wH50Bl5yzUifdiupwLQqj561vHxxp0qrhaLm9Tn9urxadtFdV7H+sM4XUYrZDD9oJx6kGxrl7/MeXGuWINQaY9ehepBvui8JJvFOTAv5KNI0Pa56j8z7tJKWmTPqvegLbJmDx5+5DPa8n5ZOT5nwxTUsK07Roifg+m69Lr+wbDgd/fPMcrnbh3hVDyvlOk7/CQhuc8eMo5NM2TlnxvUhif7szl5xWb/xtghLzX",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},m=void 0,v={},T=[];function f(t){const e={p:"p",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get active ForecastMethodType list"}),"\n",(0,a.jsx)(c(),{method:"get",path:"/api/forecastMethodType",context:"endpoint"}),"\n",(0,a.jsx)(e.p,{children:"API used to get the complete ForecastMethodType list. Will only return those ForecastMethodTypes that are marked Active."}),"\n",(0,a.jsx)(d(),{parameters:void 0}),"\n",(0,a.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ForecastMethodType list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ForecastMethodType list",content:{"text/json":{}}}}})]})}function M(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(f,{...t})}):f(t)}}}]);