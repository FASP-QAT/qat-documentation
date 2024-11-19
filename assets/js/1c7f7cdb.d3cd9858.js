"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29896],{69002:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>f,contentTitle:()=>h,default:()=>k,frontMatter:()=>g,metadata:()=>s,toc:()=>S});const s=JSON.parse('{"id":"api/get-stock-status-matrix","title":"get the StockStatusMatrixOutput list","description":"API used to get the StockStatusMatrixOutput list.","source":"@site/docs/api/get-stock-status-matrix.api.mdx","sourceDirName":"api","slug":"/api/get-stock-status-matrix","permalink":"/fasp-documentation/docs/api/get-stock-status-matrix","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-stock-status-matrix","title":"get the StockStatusMatrixOutput list","description":"API used to get the StockStatusMatrixOutput list.","sidebar_label":"get the StockStatusMatrixOutput list","hide_title":true,"hide_table_of_contents":true,"api":"eJydVUtz2kgQ/iuquezFPMyuK7ucljy2wmEr2Dh7WJfL1UiNmESamfS0jCmK/57uEbaFcR4OB0Cjr1/T39e9NQxlNOMrQxg8sbk+MQXGnGxg650Zm8lsmjURi4x9ViJnvMJszj7/PGfgJv4LTPbuQ8Oh4ayykfvmxPiABGo/LcSDWB0ZCIjwS4ORX/tiY8Zbk3vH6Fj/QgiVzZODwaeoWWxNzFdYg/7jTUDx6hefMGfxE0jDscWob+WpJKg18APUiucSSbBLTzVwe/T7yOxOzC1S3Cf6U/jIQPwWGDv4KBW5sgsvBNBjW2Nr4sPLLEIFzgngo7M8LWLHEIhgI3aWsY7HDndizAQ50hvxV3ravNjcurxqCpxpCljMVzbU0pYueOF9heDaYJYrPTtq8NQJIW4uEqn+s7gW9K7tuSWUy2ZqMB3E4F1sezcaDvXnkH8XyA25+EPeSVUdCjHe8T13UuSz53xPBU8OqgyJPEkI4CwQ3ooTJbxEJGRCeysQv/z18BK/Rl55VUPwCRyAV/I0gGAHrfQG8RmRRCRlqAh0axqqxGLFHOJ4MFiv1/0vDTi2y71WQCrZsM1j35Ny67DWGfmiyfUha51mwr3sfHIpyFsgC4sqdWG3kxGgqV886vPdHdShwif6Gh6oZ3igDenl6I/e8FVv9Nfl6dn47HQ8+rM/fHX6v+nq4XuoIw1c3bP0+lmOd19/k8N71lm39KlNe/aeH9xjBq7IJveXmV0K3c1DqZp0/3TUHx5dsAzK36JOSchzjC1h5XqzebrtPT8gT/xwUGvcfybzWcYItbx9aXdlGlq1eD+f36ifm/fnf5ermPdCrBNE6pQpiiKuTsRJABmkWZv/Ycil9/0FUJK1krQG1zH8mdH/9Eo6Q/2X1sh+3iQxCR2s05pS0tu9fq5kV9i0S9LyStx6oiGhw0olJ9jtdgERP1K12+mx0Jtk9VxdPwpAnyTGCqGQlqnoPqNAzJu2jt6lZqTwqknj9Omi2p3cW0yEBIE72MeRoAJ7GAezD3NV4GK/BWtfKJhgrVXJ99ikfaoh0oxMZ1sjzC4bKBXb+tTPVwG2s14=","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"get the ForecastMetricsComparisionOutput list","permalink":"/fasp-documentation/docs/api/get-forecast-metrics-comparision"},"next":{"title":"get the ShipmentDetailsOutput object","permalink":"/fasp-documentation/docs/api/get-shipment-details"}}');var a=i(74848),o=i(28453),n=i(57742),r=i.n(n),u=i(78178),p=i.n(u),c=i(19624),l=i.n(c),d=i(96226),x=i.n(d),m=(i(77675),i(19365),i(51107));const g={id:"get-stock-status-matrix",title:"get the StockStatusMatrixOutput list",description:"API used to get the StockStatusMatrixOutput list.",sidebar_label:"get the StockStatusMatrixOutput list",hide_title:!0,hide_table_of_contents:!0,api:"eJydVUtz2kgQ/iuquezFPMyuK7ucljy2wmEr2Dh7WJfL1UiNmESamfS0jCmK/57uEbaFcR4OB0Cjr1/T39e9NQxlNOMrQxg8sbk+MQXGnGxg650Zm8lsmjURi4x9ViJnvMJszj7/PGfgJv4LTPbuQ8Oh4ayykfvmxPiABGo/LcSDWB0ZCIjwS4ORX/tiY8Zbk3vH6Fj/QgiVzZODwaeoWWxNzFdYg/7jTUDx6hefMGfxE0jDscWob+WpJKg18APUiucSSbBLTzVwe/T7yOxOzC1S3Cf6U/jIQPwWGDv4KBW5sgsvBNBjW2Nr4sPLLEIFzgngo7M8LWLHEIhgI3aWsY7HDndizAQ50hvxV3ravNjcurxqCpxpCljMVzbU0pYueOF9heDaYJYrPTtq8NQJIW4uEqn+s7gW9K7tuSWUy2ZqMB3E4F1sezcaDvXnkH8XyA25+EPeSVUdCjHe8T13UuSz53xPBU8OqgyJPEkI4CwQ3ooTJbxEJGRCeysQv/z18BK/Rl55VUPwCRyAV/I0gGAHrfQG8RmRRCRlqAh0axqqxGLFHOJ4MFiv1/0vDTi2y71WQCrZsM1j35Ny67DWGfmiyfUha51mwr3sfHIpyFsgC4sqdWG3kxGgqV886vPdHdShwif6Gh6oZ3igDenl6I/e8FVv9Nfl6dn47HQ8+rM/fHX6v+nq4XuoIw1c3bP0+lmOd19/k8N71lm39KlNe/aeH9xjBq7IJveXmV0K3c1DqZp0/3TUHx5dsAzK36JOSchzjC1h5XqzebrtPT8gT/xwUGvcfybzWcYItbx9aXdlGlq1eD+f36ifm/fnf5ermPdCrBNE6pQpiiKuTsRJABmkWZv/Ycil9/0FUJK1krQG1zH8mdH/9Eo6Q/2X1sh+3iQxCR2s05pS0tu9fq5kV9i0S9LyStx6oiGhw0olJ9jtdgERP1K12+mx0Jtk9VxdPwpAnyTGCqGQlqnoPqNAzJu2jt6lZqTwqknj9Omi2p3cW0yEBIE72MeRoAJ7GAezD3NV4GK/BWtfKJhgrVXJ99ikfaoh0oxMZ1sjzC4bKBXb+tTPVwG2s14=",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},h=void 0,f={},S=[];function j(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"get the StockStatusMatrixOutput list"}),"\n",(0,a.jsx)(r(),{method:"post",path:"/api/report/stockStatusMatrix",context:"endpoint"}),"\n",(0,a.jsx)(e.p,{children:"API used to get the StockStatusMatrixOutput list."}),"\n",(0,a.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:void 0}),"\n",(0,a.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{programId:{type:"integer",format:"int32"},versionId:{type:"integer",format:"int32"},startDate:{type:"string",format:"date-time"},stopDate:{type:"string",format:"date-time"},planningUnitIds:{type:"array",items:{type:"string"}},tracerCategoryIds:{type:"array",items:{type:"string"}},includePlannedShipments:{type:"boolean"}},title:"StockStatusMatrixInput_ReportView"}}},required:!0}}),"\n",(0,a.jsx)(x(),{id:void 0,label:void 0,responses:{200:{description:"Returns the StockStatusMatrixOutput list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of StockStatusMatrixOutput list",content:{"text/json":{}}}}})]})}function k(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(j,{...t})}):j(t)}}}]);