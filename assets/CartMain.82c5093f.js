import{d as e,x as s,m as a,z as l,A as t,o as c,j as o,b as r,w as u,a as n,u as d,F as i,c as f,e as _,r as p,y as v,t as g,B as m,C as k,f as h,h as x,i as b,k as w,q as y,s as C,D as j,v as I,E as T}from"./index-66b61406.js";import{g as V,p as F,d as S,a as E,_ as P}from"./cart.e6a787cc.js";import{_ as R,a as U}from"./uni-swipe-action.d78465b4.js";import{u as q,_ as z}from"./index.60ec2bf7.js";import{_ as A}from"./_plugin-vue_export-helper.1b428a4d.js";const B=A(e({__name:"CartMain",setup(e){const A=s(),B=a([]),D=async()=>{const e=await V();B.value=e.result};l((()=>{A.profile&&D()}));const G=e=>{E(e.index,{count:e.value})},M=t((()=>B.value.length&&B.value.every((e=>e.selected)))),O=()=>{const e=!M.value;B.value.forEach((s=>{s.selected=e})),F({selected:e})},X=t((()=>B.value.filter((e=>e.selected)))),$=t((()=>X.value.reduce(((e,s)=>e+s.count),0))),H=t((()=>X.value.reduce(((e,s)=>e+s.count*s.nowPrice),0).toFixed(2))),J=()=>{if(0===$.value)return m({icon:"none",title:"请选择商品"});k({url:"/pagesOrder/create/create"})},{guess:K,isTriggered:L,onScrolltolower:N,onrefresherrefresh:Q}=q();return(e,s)=>{var a;const l=h,t=x,k=b,V=w,F=y(C("vk-data-input-number-box"),P),q=j,X=y(C("uni-swipe-action-item"),R),W=y(C("uni-swipe-action"),U),Y=y(C("XtxGuess"),z),Z=I;return c(),o(i,null,[r(Z,{"scroll-y":"",class:"scroll-view","refresher-enabled":"",onRefresherrefresh:d(Q),onScrolltolower:d(N),"refresher-triggered":d(L)},{default:u((()=>{var e;return[n(" 已登录: 显示购物车 "),d(A).profile?(c(),o(i,{key:0},[n(" 购物车列表 "),(null==(e=B.value)?void 0:e.length)?(c(),f(t,{key:0,class:"cart-list"},{default:u((()=>[n(" 优惠提示 "),r(t,{class:"tips"},{default:u((()=>[r(l,{class:"label"},{default:u((()=>[_("满减")])),_:1}),r(l,{class:"desc"},{default:u((()=>[_("满1件, 即可享受9折优惠")])),_:1})])),_:1}),n(" 滑动操作分区 "),r(W,null,{default:u((()=>[n(" 滑动操作项 "),(c(!0),o(i,null,p(B.value,(e=>(c(),f(X,{key:null==e?void 0:e.skuId,class:"cart-swipe"},{right:u((()=>[r(t,{class:"cart-swipe-right"},{default:u((()=>[r(q,{onClick:s=>{return a=e.skuId,void T({content:"是否删除",success:async e=>{e.confirm&&(await S({ids:[a]}),m({icon:"success",title:"删除成功"}),D())}});var a},class:"button delete-button"},{default:u((()=>[_("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:u((()=>[r(t,{class:"goods"},{default:u((()=>[n(" 选中状态 "),r(l,{onClick:s=>(e=>{e.selected=!e.selected,E(e.skuId,{selected:e.selected})})(e),class:v(["checkbox",{checked:null==e?void 0:e.selected}])},null,8,["onClick","class"]),r(V,{url:`/pages/goods/goods?id=${null==e?void 0:e.id}`,"hover-class":"none",class:"navigator"},{default:u((()=>[r(k,{mode:"aspectFill",class:"picture",src:null==e?void 0:e.picture},null,8,["src"]),r(t,{class:"meta"},{default:u((()=>[r(t,{class:"name ellipsis"},{default:u((()=>[_(g(e.name),1)])),_:2},1024),r(t,{class:"attrsText ellipsis"},{default:u((()=>[_(g(e.attrsText),1)])),_:2},1024),r(t,{class:"price"},{default:u((()=>[_(g(e.nowPrice),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),n(" 商品数量 "),r(t,{class:"count"},{default:u((()=>[r(F,{modelValue:e.count,"onUpdate:modelValue":s=>e.count=s,min:1,max:e.stock,index:e.skuId,onChange:G},null,8,["modelValue","onUpdate:modelValue","max","index"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):(c(),o(i,{key:1},[n(" 购物车空状态 "),r(t,{class:"cart-blank"},{default:u((()=>[r(k,{src:"./static/images/blank_cart.png",class:"image"}),r(l,{class:"text"},{default:u((()=>[_("购物车还是空的，快来挑选好货吧")])),_:1}),r(V,{"open-type":"switchTab",url:"/pages/index/index","hover-class":"none"},{default:u((()=>[r(q,{class:"button"},{default:u((()=>[_("去首页看看")])),_:1})])),_:1})])),_:1})],2112))],64)):(c(),o(i,{key:1},[n(" 未登录: 提示登录 "),r(t,{class:"login-blank"},{default:u((()=>[r(l,{class:"text"},{default:u((()=>[_("登录后可查看购物车中的商品")])),_:1}),r(V,{url:"/pages/login/login","hover-class":"none"},{default:u((()=>[r(q,{class:"button"},{default:u((()=>[_("去登录")])),_:1})])),_:1})])),_:1})],2112)),n(" 猜你喜欢 "),r(Y,{ref_key:"guess",ref:K},null,512),n(" 底部占位空盒子 "),r(t,{class:"toolbar-height"})]})),_:1},8,["onRefresherrefresh","onScrolltolower","refresher-triggered"]),n(" 吸底工具栏 "),(null==(a=d(A))?void 0:a.profile)?(c(),f(t,{key:0,class:"toolbar"},{default:u((()=>[r(l,{onClick:O,class:v(["all",{checked:d(M)}])},{default:u((()=>[_("全选")])),_:1},8,["class"]),r(l,{class:"text"},{default:u((()=>[_("合计:")])),_:1}),r(l,{class:"amount"},{default:u((()=>[_(g(d(H)),1)])),_:1}),r(t,{onClick:J,class:"button-grounp"},{default:u((()=>[r(t,{class:v(["button payment-button",{disabled:!0}])},{default:u((()=>[_(" 去结算("+g(d($))+") ",1)])),_:1})])),_:1})])),_:1})):n("v-if",!0)],64)}}}),[["__scopeId","data-v-067c8498"]]);export{B as C};
