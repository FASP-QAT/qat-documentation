"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69226],{853:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>O,contentTitle:()=>j,default:()=>I,frontMatter:()=>g,metadata:()=>r,toc:()=>R});const r=JSON.parse('{"id":"api/get-procurement-agent-shipment-report","title":"get the ProcurementAgentShipmentReportOutput list","description":"API used to get the ProcurementAgentShipmentReportOutput list.","source":"@site/docs/api/get-procurement-agent-shipment-report.api.mdx","sourceDirName":"api","slug":"/api/get-procurement-agent-shipment-report","permalink":"/fasp-documentation/docs/api/get-procurement-agent-shipment-report","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-procurement-agent-shipment-report","title":"get the ProcurementAgentShipmentReportOutput list","description":"API used to get the ProcurementAgentShipmentReportOutput list.","sidebar_label":"get the ProcurementAgentShipmentReportOutput list","hide_title":true,"hide_table_of_contents":true,"api":"eJytVsty2zoM/RUNN93Ej/g209ar+vYx9apOnHbRTCZDS7DEXolkQShuxuN/L0DJiWwnaT23XtgidQAQxDmA14p0HtT4SiF4h6SuT1QGIUXjyTirxmoymyZ1gCwhl+RACRWQzNClNUIFliY5f80L42VxEX18rsnXlJQmUF+dKOcBtTibZuyOXTxvzRYIP2oI9K/L7tR4rVJniV/Lo/a+NGn0Nvge5HxrFdICKi1PdOeBQ7jFd0jFj0eJTQZCxJFGeq8JOtBAaGzO0KXDSnMIlTGgR6YCtTnh184fZ8Ehc9SVpHpvYvj4OWDXhrf+GQn+FjC0V/NHeF9qa/kAX6yhaRY6VhpR37GNIajC4YE3bGxsWtYZzMQHZNtr74IXzpWgbZvJTpWOjnboYN68PETv5/UkkJFkqJSt51k0tUzBm+b5q4EVm24aYhkEvmzCGuJG8M6GhiCj4VB+dul/AVSjDcfRni+mQ1qCn7RlazzG2WOBpoxHq8sEEB1yPE2JR7hlJyI+Do9ACOaWIW75l87Ch6mACifK9C6CvaaCVwPtzaDpCYP9Sh4INgAKkbmNrFWNJZsXRD6MB4PVatX/UWtLZtnqVnOOd2TS0HcoOtq9BU4rq1NZJI3ThDWQnE8uGXmr0ehFGYu12XCjkjwuHnrFh5+68iXsaZ3LOnrZG77qjd5cnp6Nz07Ho9f94avTb6qr7+dQHU0PdxQ7fESPV1uuXj+jN2HfEwrr2j+toIc29LhwOsoyduli5VvdnO9UI9E2SybbkiSXrH91n6NcS/901B8elImHwosgE0GnKYRGHVykZB5r1lJOp5FyVlcS9+NkPksIdMVvj+UI93cjFp/m8xvxc/Pp/G1ehLTnQxUhnCfPBWAldyJOvObRkDTn3w25dK6/0Nj0KeZ9pW3H8Ogxt38/nZn1/+dn2wKjcrnaJnbnmM66FesVz0UT52arx98IlqlViNjZcL1e6ABfsNxsZJu1hDxzr64f1CYrDliAzriyovD/gCHqXZNh71KOJ/CyjoNhf0JvTrYWE+aKpw72oRmJmu8b0ezzXOS+aMd/5TIBo15Jivw9VvFfhYSIfTvurRULIa91LtjGp3x+AZOKHRc=","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"get the StockAdjustmentReportOutput list","permalink":"/fasp-documentation/docs/api/get-stock-adjustment-report"},"next":{"title":"get the ProgramLeadTimesOutput list","permalink":"/fasp-documentation/docs/api/get-program-lead-times"}}');var i=n(74848),o=n(28453),p=n(57742),a=n.n(p),s=n(78178),u=n.n(s),m=n(19624),d=n.n(m),l=n(96226),c=n.n(l),h=(n(77675),n(19365),n(51107));const g={id:"get-procurement-agent-shipment-report",title:"get the ProcurementAgentShipmentReportOutput list",description:"API used to get the ProcurementAgentShipmentReportOutput list.",sidebar_label:"get the ProcurementAgentShipmentReportOutput list",hide_title:!0,hide_table_of_contents:!0,api:"eJytVsty2zoM/RUNN93Ej/g209ar+vYx9apOnHbRTCZDS7DEXolkQShuxuN/L0DJiWwnaT23XtgidQAQxDmA14p0HtT4SiF4h6SuT1QGIUXjyTirxmoymyZ1gCwhl+RACRWQzNClNUIFliY5f80L42VxEX18rsnXlJQmUF+dKOcBtTibZuyOXTxvzRYIP2oI9K/L7tR4rVJniV/Lo/a+NGn0Nvge5HxrFdICKi1PdOeBQ7jFd0jFj0eJTQZCxJFGeq8JOtBAaGzO0KXDSnMIlTGgR6YCtTnh184fZ8Ehc9SVpHpvYvj4OWDXhrf+GQn+FjC0V/NHeF9qa/kAX6yhaRY6VhpR37GNIajC4YE3bGxsWtYZzMQHZNtr74IXzpWgbZvJTpWOjnboYN68PETv5/UkkJFkqJSt51k0tUzBm+b5q4EVm24aYhkEvmzCGuJG8M6GhiCj4VB+dul/AVSjDcfRni+mQ1qCn7RlazzG2WOBpoxHq8sEEB1yPE2JR7hlJyI+Do9ACOaWIW75l87Ch6mACifK9C6CvaaCVwPtzaDpCYP9Sh4INgAKkbmNrFWNJZsXRD6MB4PVatX/UWtLZtnqVnOOd2TS0HcoOtq9BU4rq1NZJI3ThDWQnE8uGXmr0ehFGYu12XCjkjwuHnrFh5+68iXsaZ3LOnrZG77qjd5cnp6Nz07Ho9f94avTb6qr7+dQHU0PdxQ7fESPV1uuXj+jN2HfEwrr2j+toIc29LhwOsoyduli5VvdnO9UI9E2SybbkiSXrH91n6NcS/901B8elImHwosgE0GnKYRGHVykZB5r1lJOp5FyVlcS9+NkPksIdMVvj+UI93cjFp/m8xvxc/Pp/G1ehLTnQxUhnCfPBWAldyJOvObRkDTn3w25dK6/0Nj0KeZ9pW3H8Ogxt38/nZn1/+dn2wKjcrnaJnbnmM66FesVz0UT52arx98IlqlViNjZcL1e6ABfsNxsZJu1hDxzr64f1CYrDliAzriyovD/gCHqXZNh71KOJ/CyjoNhf0JvTrYWE+aKpw72oRmJmu8b0ezzXOS+aMd/5TIBo15Jivw9VvFfhYSIfTvurRULIa91LtjGp3x+AZOKHRc=",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},j=void 0,O={},R=[];function f(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"get the ProcurementAgentShipmentReportOutput list"}),"\n",(0,i.jsx)(a(),{method:"post",path:"/api/report/procurementAgentShipmentReport",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"API used to get the ProcurementAgentShipmentReportOutput list."}),"\n",(0,i.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(u(),{parameters:void 0}),"\n",(0,i.jsx)(d(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{startDate:{type:"string",format:"date-time"},stopDate:{type:"string",format:"date-time"},programId:{type:"integer",format:"int32"},versionId:{type:"integer",format:"int32"},planningUnitIds:{type:"array",items:{type:"string"}},includePlannedShipments:{type:"boolean"},procurementAgentIds:{type:"array",items:{type:"string"}},procurementAgentIdString:{type:"string"},planningUnitIdString:{type:"string"}},title:"ProcurementAgentShipmentReportInput_ReportView"}}},required:!0}}),"\n",(0,i.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ProcurementAgentShipmentReportOutput list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ProcurementAgentShipmentReportOutput list",content:{"text/json":{}}}}})]})}function I(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(f,{...t})}):f(t)}}}]);