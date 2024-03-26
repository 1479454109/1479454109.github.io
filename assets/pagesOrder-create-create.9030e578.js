import{d as s,g as a,m as e,A as l,p as t,o as u,j as d,b as r,w as o,a as n,u as c,c as i,e as v,t as p,F as f,r as m,y as _,n as y,B as g,a0 as b,h as x,f as k,k as h,X as I,I as j,v as w,i as F}from"./index-66b61406.js";import{g as A,a as P,b as T,p as C}from"./order.b9fd0a73.js";import{a as M}from"./address.13eb7c42.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";import"./http.c8e1d22e.js";const B=V(s({__name:"create",props:{orderId:null,skuId:null,count:null},setup(s){const V=s,{safeAreaInsets:B}=a(),$=e(""),D=e([{type:1,text:"时间不限 (周一至周日)"},{type:2,text:"工作日送 (周一至周五)"},{type:3,text:"周末配送 (周六至周日)"}]),L=e(0),O=l((()=>D.value[L.value])),U=s=>{L.value=s.detail.value},X=e(),q=l((()=>{var s;return M().selectedAddress||(null==(s=X.value)?void 0:s.userAddresses.find((s=>s.isDefault)))}));t((async()=>{if((null==V?void 0:V.skuId)&&(null==V?void 0:V.count))(async()=>{const s=await T({skuId:V.skuId,count:V.count+""});X.value=s.result})();else if(null==V?void 0:V.orderId){const s=await A(null==V?void 0:V.orderId);X.value=s.result}else(async()=>{const s=await P();X.value=s.result})()}));const z=async()=>{var s,a;if(!(null==(s=q.value)?void 0:s.id))return g({icon:"none",title:"请选择收货地址"});const e=await C({addressId:null==(a=q.value)?void 0:a.id,buyerMessage:$.value,deliveryTimeType:O.value.type,goods:X.value.goods.map((s=>({count:s.count,skuId:s.skuId}))),payChannel:2,payType:1});b({url:`/pagesOrder/detail/detail?id=${e.result.id}`})};return(s,a)=>{var e;const l=x,t=k,g=h,b=F,A=I,P=j,T=w;return u(),d(f,null,[r(T,{"scroll-y":"",class:"viewport"},{default:o((()=>[n(" 收货地址 "),c(q)?(u(),i(g,{key:0,class:"shipment","hover-class":"none",url:"/pagesMember/address/address?from=order"},{default:o((()=>[r(l,{class:"user"},{default:o((()=>{var s,a;return[v(p(null==(s=c(q))?void 0:s.receiver)+" "+p(null==(a=c(q))?void 0:a.contact),1)]})),_:1}),r(l,{class:"address"},{default:o((()=>{var s,a;return[v(p(null==(s=c(q))?void 0:s.fullLocation)+" "+p(null==(a=c(q))?void 0:a.address),1)]})),_:1}),r(t,{class:"icon icon-right"})])),_:1})):(u(),i(g,{key:1,class:"shipment","hover-class":"none",url:"/pagesMember/address/address?from=order"},{default:o((()=>[r(l,{class:"address"},{default:o((()=>[v(" 请选择收货地址 ")])),_:1}),r(t,{class:"icon icon-right"})])),_:1})),n(" 商品信息 "),r(l,{class:"goods"},{default:o((()=>{var s;return[(u(!0),d(f,null,m(null==(s=X.value)?void 0:s.goods,(s=>(u(),i(g,{key:null==s?void 0:s.id,url:`/pages/goods/goods?id=${null==s?void 0:s.id}`,class:"item","hover-class":"none"},{default:o((()=>[r(b,{class:"picture",src:null==s?void 0:s.picture},null,8,["src"]),r(l,{class:"meta"},{default:o((()=>[r(l,{class:"name ellipsis"},{default:o((()=>[v(p(s.name),1)])),_:2},1024),r(l,{class:"attrs"},{default:o((()=>[v(p(s.attrsText),1)])),_:2},1024),r(l,{class:"prices"},{default:o((()=>[r(l,{class:"pay-price symbol"},{default:o((()=>[v(p(s.payPrice),1)])),_:2},1024),r(l,{class:"price symbol"},{default:o((()=>[v(p(s.price),1)])),_:2},1024)])),_:2},1024),r(l,{class:"count"},{default:o((()=>[v(p(s.count),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))]})),_:1}),n(" 配送及支付方式 "),r(l,{class:"related"},{default:o((()=>[r(l,{class:"item"},{default:o((()=>[r(t,{class:"text"},{default:o((()=>[v("配送时间")])),_:1}),r(A,{range:D.value,"range-key":"text",onChange:U},{default:o((()=>[r(l,{class:"icon-fonts picker"},{default:o((()=>[v(p(c(O).text),1)])),_:1})])),_:1},8,["range"])])),_:1}),r(l,{class:"item"},{default:o((()=>[r(t,{class:"text"},{default:o((()=>[v("订单备注")])),_:1}),r(P,{class:"input","cursor-spacing":30,placeholder:"选题，建议留言前先与商家沟通确认",modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=s=>$.value=s)},null,8,["modelValue"])])),_:1})])),_:1}),n(" 支付金额 "),r(l,{class:"settlement"},{default:o((()=>[r(l,{class:"item"},{default:o((()=>[r(t,{class:"text"},{default:o((()=>[v("商品总价: ")])),_:1}),r(t,{class:"number symbol"},{default:o((()=>{var s,a;return[v(p(null==(a=null==(s=X.value)?void 0:s.summary)?void 0:a.totalPrice.toFixed(2)),1)]})),_:1})])),_:1}),r(l,{class:"item"},{default:o((()=>[r(t,{class:"text"},{default:o((()=>[v("运费: ")])),_:1}),r(t,{class:"number symbol"},{default:o((()=>{var s,a;return[v(p(null==(a=null==(s=X.value)?void 0:s.summary)?void 0:a.postFee.toFixed(2)),1)]})),_:1})])),_:1})])),_:1})])),_:1}),n(" 吸底工具栏 "),r(l,{class:"toolbar",style:y({paddingBottom:(null==(e=c(B))?void 0:e.bottom)+"px"})},{default:o((()=>{var s;return[r(l,{class:"total-pay symbol"},{default:o((()=>[r(t,{class:"number"},{default:o((()=>{var s,a;return[v(p(null==(a=null==(s=X.value)?void 0:s.summary)?void 0:a.totalPayPrice.toFixed(2)),1)]})),_:1})])),_:1}),r(l,{class:_(["button",{disabled:!(null==(s=c(q))?void 0:s.id)}]),onClick:z},{default:o((()=>[v(" 提交订单 ")])),_:1},8,["class"])]})),_:1},8,["style"])],64)}}}),[["__scopeId","data-v-dcd44457"]]);export{B as default};
