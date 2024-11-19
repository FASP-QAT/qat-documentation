"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94978],{3165:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>I,contentTitle:()=>h,default:()=>x,frontMatter:()=>u,metadata:()=>a,toc:()=>N});const a=JSON.parse('{"id":"api/get-forecasting-unit-for-realm","title":"Get ForecastingUnit for a RealmId","description":"API used to get all the ForecastingUnits for a specific RealmId","source":"@site/docs/api/get-forecasting-unit-for-realm.api.mdx","sourceDirName":"api","slug":"/api/get-forecasting-unit-for-realm","permalink":"/fasp-documentation/docs/api/get-forecasting-unit-for-realm","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-forecasting-unit-for-realm","title":"Get ForecastingUnit for a RealmId","description":"API used to get all the ForecastingUnits for a specific RealmId","sidebar_label":"Get ForecastingUnit for a RealmId","hide_title":true,"hide_table_of_contents":true,"api":"eJytlE1zGjEMhv+Kx5e2MxQoSS+cSich4ZIv4JRhMsquYN0utmNrIczO/vfKZgkfoUnb6Ym1kfRK8iOVkmDmZfdeTo3DBDwpPRtrRXLSkCn6xClLymjZlb2bgSg8poKMmCEJyHNBGYr+vqMXHEmA8BYTNVWJuEPI54NUNqSx6CBE41NXcowDVz5GYza14GCOhC7kVkrNB3ZxL6FUyMgCZfIwzVqOUwMSK1OIJWgKOR/JNaTKARw+FcohJ0WuwIb0SYZzkN1S0soGXaUJZxhM2WEOtL466ciqmgR3b4326INHp90OP4c5UeG0P96uXHniyIlhEU1RFZ+p9cMH17KqqoY8bZ/8PiiISyI7JKDCN/vXd98HZ2fnV0JNo9zYoxOpQS+0IZHBAgUkCXr/ruTpH0peXY8e+tfjq7ON5OYFagKYmBd9fH6/2K/HOjhge6chF+gc4xUf1zpccJBAJKs6JIdqwSZmetjkNxVZkknLTM1khI+56soWWNU6GItWjWCrrD8qtucWLzakFi5n14zb47ut1nK5bD4VDGCYhIg+cBErUolvGjd7Be+NM2mRhINYB43DdNsbseUCnILHPGIWuVN6amI9ivJA6e2ekACdit5GTYyMyUMQznMt1Wl+6TTbrzLgKf/gw7isKYmtZX0xjOnUjYQkNrKeyn5veCMIIczt35bPc6aCx+Vw+BDiPFzefptlPvls/Tya8OvkKkEerx3FngUeUbHOf19yakzzEZwMz2qNpznoHccL3ltHdgADvd1Se/0ot+D8hwVYr5MIoM2Bl1hV51/W0N1Lhm69Zw4A3u6+7uaTGci4xOBVlo/gcezyqgrXTwW6Fd9PtthEOlPlwzejPoXc4xvFfryrl+In8Q8b9Wih9SXoVaQ5L8KJP3/iame3VxM2zRBSpi2kvP63xzRa2vHbDnEYhZcBvjgf8dP/Agz0XQg=","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get ForecastingUnit list","permalink":"/fasp-documentation/docs/api/get-forecasting-unit-all"},"next":{"title":"Get ForecastingUnit for a multiple tracer categories","permalink":"/fasp-documentation/docs/api/get-forecasting-unit-for-tracer-category"}}');var n=i(74848),o=i(28453),r=i(57742),s=i.n(r),c=i(78178),l=i.n(c),d=i(19624),g=i.n(d),f=i(96226),p=i.n(f),m=(i(77675),i(19365),i(51107));const u={id:"get-forecasting-unit-for-realm",title:"Get ForecastingUnit for a RealmId",description:"API used to get all the ForecastingUnits for a specific RealmId",sidebar_label:"Get ForecastingUnit for a RealmId",hide_title:!0,hide_table_of_contents:!0,api:"eJytlE1zGjEMhv+Kx5e2MxQoSS+cSich4ZIv4JRhMsquYN0utmNrIczO/vfKZgkfoUnb6Ym1kfRK8iOVkmDmZfdeTo3DBDwpPRtrRXLSkCn6xClLymjZlb2bgSg8poKMmCEJyHNBGYr+vqMXHEmA8BYTNVWJuEPI54NUNqSx6CBE41NXcowDVz5GYza14GCOhC7kVkrNB3ZxL6FUyMgCZfIwzVqOUwMSK1OIJWgKOR/JNaTKARw+FcohJ0WuwIb0SYZzkN1S0soGXaUJZxhM2WEOtL466ciqmgR3b4326INHp90OP4c5UeG0P96uXHniyIlhEU1RFZ+p9cMH17KqqoY8bZ/8PiiISyI7JKDCN/vXd98HZ2fnV0JNo9zYoxOpQS+0IZHBAgUkCXr/ruTpH0peXY8e+tfjq7ON5OYFagKYmBd9fH6/2K/HOjhge6chF+gc4xUf1zpccJBAJKs6JIdqwSZmetjkNxVZkknLTM1khI+56soWWNU6GItWjWCrrD8qtucWLzakFi5n14zb47ut1nK5bD4VDGCYhIg+cBErUolvGjd7Be+NM2mRhINYB43DdNsbseUCnILHPGIWuVN6amI9ivJA6e2ekACdit5GTYyMyUMQznMt1Wl+6TTbrzLgKf/gw7isKYmtZX0xjOnUjYQkNrKeyn5veCMIIczt35bPc6aCx+Vw+BDiPFzefptlPvls/Tya8OvkKkEerx3FngUeUbHOf19yakzzEZwMz2qNpznoHccL3ltHdgADvd1Se/0ot+D8hwVYr5MIoM2Bl1hV51/W0N1Lhm69Zw4A3u6+7uaTGci4xOBVlo/gcezyqgrXTwW6Fd9PtthEOlPlwzejPoXc4xvFfryrl+In8Q8b9Wih9SXoVaQ5L8KJP3/iame3VxM2zRBSpi2kvP63xzRa2vHbDnEYhZcBvjgf8dP/Agz0XQg=",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},h=void 0,I={},N=[];function U(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Get ForecastingUnit for a RealmId"}),"\n",(0,n.jsx)(s(),{method:"get",path:"/api/forecastingUnit/realmId/{realmId}",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"API used to get all the ForecastingUnits for a specific RealmId"}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(l(),{parameters:[{name:"realmId",in:"path",description:"RealmId that you want to the ForecastingUnit for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,n.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(p(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ForecastingUnits list",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the RealmId specified does not exist",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ForecastingUnit",content:{"text/json":{}}}}})]})}function x(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(U,{...t})}):U(t)}}}]);