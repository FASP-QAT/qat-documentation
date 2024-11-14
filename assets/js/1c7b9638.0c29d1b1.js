"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53048],{67057:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>w,contentTitle:()=>f,default:()=>T,frontMatter:()=>m,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"api/get-expired-stock","title":"get the ExpiredStockOutput list","description":"API used to get the ExpiredStockOutput list.","source":"@site/docs/api/get-expired-stock.api.mdx","sourceDirName":"api","slug":"/api/get-expired-stock","permalink":"/fasp-documentation/docs/api/get-expired-stock","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-expired-stock","title":"get the ExpiredStockOutput list","description":"API used to get the ExpiredStockOutput list.","sidebar_label":"get the ExpiredStockOutput list","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1T2zAQ/SsaXXrJd8u0zalpS4ecCCTtoQzDKPbGFtiSkNYExuP/3l05gAMtLc3BsaS3H9p9+1xLVFmQ0zPpwVmP8rwnUwiJ1w61NXIqZ4u5qAKkAq3IAAXmIA5vnfaQLtEmV8cVugpFoQMOZE9aB16x6TwlYzLoYuncw3UFAT/b9E5Oa5lYg2CQX5VzhU6i7fAycOxahiSHUvEb3jkgh3Z9CQmSH+c5EmoIfEqrzKuSYz5ANXnOwBN2Y32psN16O5FNT96AD7sc/wkfUHn8qhA6+IBem6wLTwnQR11Ca2Ld6yy0SYoqhUWhjKGC5dqVVJrQcbC2tgBlZENo1FjwXre+c0OtuDiNnfyhYUvApi05Q+QUfQVxIzhrQlu6yWjEf/tNPwWsvAkvNZuu0Wkewi3edy0GPfid2znhvVGFAO+tJ+8KhfNwQ06YYBTMA3rQNwSxm/+KTKFLwNwy+5yNYKcwp9VQOT1sWT6EfVIG8MwIGoNaVr4gcI7ownQ43G63g+tKGdSbHTcV5X+HOgkD67mX+zdceJtWCS9E61RQr8XJbEXIG+W1Whex7E1Dg8ZZnz7Ow+GtKl0BT/g82mPraI+L1LzJu/7ofX/ycTU+mB6Mp5MPg9H78U/Z5d9LqD9ybkcVbTY2VnnHtpO9WghlUjG7L4hYET3lQ7oceDCeDEbPikSS8iawnqgkgdCyjEoklrFiu/aqJLbXqJLjfpstFwJBlXT62g6Rgmi2OFouL9jPxdHJpywPSd+FMkLonqQ8QBPRiThzisRHtPnvh9xYO1grH8eQOVYq0zH8i0g+rUZHA1+rtTtViBPgCqUN3ySmWu9If0aqqqPqRnGnWnSJTxTMeUQIVtdrFeC7L5qGt4mTnvT57PyRtbwi9zmolHrEk3IFBJFf2uz7K06G4UXFST1T86Z3bzGjrjvsYB9HmKfiYXwXx0sem/XuU1HalMFebflC9JzK+L3hEFHJ4l4ticpZpTLGtj759wt1rV9I","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get Region list based on RealmCountry list","permalink":"/fasp-documentation/docs/api/get-region-by-realm-country"},"next":{"title":"get the CostOfInventoryOutput list","permalink":"/fasp-documentation/docs/api/get-cost-of-inventory"}}');var o=i(74848),s=i(28453),r=i(57742),a=i.n(r),p=i(78178),d=i.n(p),c=i(19624),l=i.n(c),u=i(96226),h=i.n(u),g=(i(77675),i(19365),i(51107));const m={id:"get-expired-stock",title:"get the ExpiredStockOutput list",description:"API used to get the ExpiredStockOutput list.",sidebar_label:"get the ExpiredStockOutput list",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1T2zAQ/SsaXXrJd8u0zalpS4ecCCTtoQzDKPbGFtiSkNYExuP/3l05gAMtLc3BsaS3H9p9+1xLVFmQ0zPpwVmP8rwnUwiJ1w61NXIqZ4u5qAKkAq3IAAXmIA5vnfaQLtEmV8cVugpFoQMOZE9aB16x6TwlYzLoYuncw3UFAT/b9E5Oa5lYg2CQX5VzhU6i7fAycOxahiSHUvEb3jkgh3Z9CQmSH+c5EmoIfEqrzKuSYz5ANXnOwBN2Y32psN16O5FNT96AD7sc/wkfUHn8qhA6+IBem6wLTwnQR11Ca2Ld6yy0SYoqhUWhjKGC5dqVVJrQcbC2tgBlZENo1FjwXre+c0OtuDiNnfyhYUvApi05Q+QUfQVxIzhrQlu6yWjEf/tNPwWsvAkvNZuu0Wkewi3edy0GPfid2znhvVGFAO+tJ+8KhfNwQ06YYBTMA3rQNwSxm/+KTKFLwNwy+5yNYKcwp9VQOT1sWT6EfVIG8MwIGoNaVr4gcI7ownQ43G63g+tKGdSbHTcV5X+HOgkD67mX+zdceJtWCS9E61RQr8XJbEXIG+W1Whex7E1Dg8ZZnz7Ow+GtKl0BT/g82mPraI+L1LzJu/7ofX/ycTU+mB6Mp5MPg9H78U/Z5d9LqD9ybkcVbTY2VnnHtpO9WghlUjG7L4hYET3lQ7oceDCeDEbPikSS8iawnqgkgdCyjEoklrFiu/aqJLbXqJLjfpstFwJBlXT62g6Rgmi2OFouL9jPxdHJpywPSd+FMkLonqQ8QBPRiThzisRHtPnvh9xYO1grH8eQOVYq0zH8i0g+rUZHA1+rtTtViBPgCqUN3ySmWu9If0aqqqPqRnGnWnSJTxTMeUQIVtdrFeC7L5qGt4mTnvT57PyRtbwi9zmolHrEk3IFBJFf2uz7K06G4UXFST1T86Z3bzGjrjvsYB9HmKfiYXwXx0sem/XuU1HalMFebflC9JzK+L3hEFHJ4l4ticpZpTLGtj759wt1rV9I",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},f=void 0,w={},x=[];function k(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"get the ExpiredStockOutput list"}),"\n",(0,o.jsx)(a(),{method:"post",path:"/api/report/expiredStock",context:"endpoint"}),"\n",(0,o.jsx)(e.p,{children:"API used to get the ExpiredStockOutput list."}),"\n",(0,o.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(d(),{parameters:void 0}),"\n",(0,o.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{programId:{type:"integer",format:"int32"},versionId:{type:"integer",format:"int32"},startDate:{type:"string",format:"date-time"},stopDate:{type:"string",format:"date-time"},includePlannedShipments:{type:"boolean"}},title:"ExpiredStockInput_ReportView"}}},required:!0}}),"\n",(0,o.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ExpiredStockOutput list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ExpiredStockOutput list",content:{"text/json":{}}}}})]})}function T(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(k,{...t})}):k(t)}}}]);