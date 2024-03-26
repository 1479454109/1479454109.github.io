import{B as e,M as t,q as a,s,o as l,c as o,w as d,a as c,b as r,y as u,n,e as i,t as f,K as p,L as m,j as k,F as g,r as b,N as y,h as v,i as C,f as h,v as _,d as S,m as N,z as I,u as x,S as T,l as w,D as A,k as B,g as F,p as V,A as L,C as G}from"./index-66b61406.js";import{_ as O,b as j}from"./cart.e6a787cc.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as P}from"./uni-popup.28abe222.js";import{h as J}from"./http.c8e1d22e.js";import{g as E}from"./address.90968f05.js";import{a as $}from"./address.13eb7c42.js";var M,K={};const R=D({name:"vk-data-goods-sku-popup",emits:["update:modelValue","input","update-goods","open","close","add-cart","buy-now","cart","buy","num-change"],props:{value:{Type:Boolean,default:!1},modelValue:{Type:Boolean,default:!1},goodsId:{Type:String,default:""},action:{Type:String,default:""},noStockText:{Type:String,default:"该商品已抢完"},stockText:{Type:String,default:"库存"},goodsIdName:{Type:String,default:"_id"},skuIdName:{Type:String,default:"_id"},skuListName:{Type:String,default:"sku_list"},specListName:{Type:String,default:"spec_list"},stockName:{Type:String,default:"stock"},skuArrName:{Type:String,default:"sku_name_arr"},defaultSingleSkuName:{Type:String,default:"默认"},mode:{Type:Number,default:1},maskCloseAble:{Type:Boolean,default:!0},borderRadius:{Type:[String,Number],default:0},goodsThumbName:{Type:[String],default:"goods_thumb"},goodsThumbBackgroundColor:{Type:String,default:"transparent"},minBuyNum:{Type:[Number,String],default:1},maxBuyNum:{Type:[Number,String],default:1e5},stepBuyNum:{Type:[Number,String],default:1},stepStrictly:{Type:Boolean,default:!1},customAction:{Type:[Function],default:null},localdata:{type:Object},priceColor:{Type:String},buyNowText:{Type:String,default:"立即购买"},buyNowColor:{Type:String},buyNowBackgroundColor:{Type:String},addCartText:{Type:String,default:"加入购物车"},addCartColor:{Type:String},addCartBackgroundColor:{Type:String},disableStyle:{Type:Object,default:null},activedStyle:{Type:Object,default:null},btnStyle:{Type:Object,default:null},showClose:{Type:Boolean,default:!0},closeImage:{Type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAEyUlEQVR42sSZeWwNURTGp4OqtBo7sSXELragdkpQsRRJ1Zr4hyJiJ9YgxNIg1qANiT+E1i5IY0kVVWtQEbuEKLFGUSH27/ANN5PXmTvzupzkl/tm8t6b7517lnvvC0lKSjJ8WmnQAUSDFqABqALKgl8gD7wE90E2SAeXwFf1SxISErQeVtKHwCgwFsSDSIf3hYFKoCkYDBaDdyAViHdueHmoF6FtwDLQ23b/E7gM7oIcejIERIDaoBFoC8qA8mA8SQNz6W1XC9GY+nCQCCYAk/c+gF0gBZwH312+IxR0BCPBUIaH2A+wHsxHCHxx+gLT5QGN6a2JfG8uvVCDws9oiDQYlxkMGfHyQvARlADTwcXk5OT6foV2kS8ATXidymlcyen1a/Jjl9IJh3hPkjELYqO8Cu0KjjNZvtETw5jFBWXPmGSTGQKSeOn5iQ0kVLL0CINfPNcPbDMKyRCbGzEMBJ+ZD8cChYFdqGTqfsWT8otPGoVsEHsMwxDFs3shNsxJ6BrQ0Po8OGUUkVHsNCVml+cntB1jUWwn2GEUsTEMrASbDK+2CCQ0kYX6nfLLisMmKqUr0S60M+jG10vAm+JSCa8+x7CKlzHwaktV6DiObzUzPJIxFO1BQ12wGtTReO9GetVgY/kjNJzZbcWmTjHfxw51AsRqvL8eOAtmsJuFu3g1l+1ZLB5eDTVZ3K0P7tL0TkWOpSg61kVkBtuuNRthGs+wtJST5aQI7cEbkkRXNYVKgX6kIdYuUhYzMQwxN8tiExCLFqHNeSF9/aem0BzGp5PYQCJ7c/Gsk1RfuSD6U1dNpcDf9ZigTmKbMRZ9iVTsHscGJluW2FMf1SSQWGnBmaB6kCJVTVVNJZE++Cx9drEllS1KMCINpURFmEbBWA63Fz9s95cGIdJgp/zXmT4pZcOvSUzuZttTbblmnc3PIjjmidDXvKgdhMh0JdbzuCjWrbNOVovjS5P7bkPJ/mBESkz2BO0166ybNeJ431S2q+01NntuIq3E0amzjiZtk9tssWyTDzO4525bACK9NAUn68TtkNhpEXpOSagRml+S6iLSSeweHv242Qhl13rRyvoDvDlKyTQny/ZQJ+1iH7vVbEx7OR5UiKVIO7VicgvHCtwrudloMIV7/0uadVYW57O4Wvvi8v4pymlKkrpwvsDeLLZAY2pkwbAB3PSQfC+4cH7l4k1ZH8zkZRq8ecO+Z5rN40JJqnXFuGfaxPCTLjcn0OZOpnArXw8HY4paIbw5CcMgXq6HN2/mt6+XGLrN15tBryIUGavMpCTrfKcDCKkAceA9S8nhAOehhSUyhXpkBxxnP4YM1InugP7cBkjBPcqVUWFYCEROxXiQz5JlXV+IfKh7mpfJac+lZ6V87QXVClBkTc7YWsWTPSDyitfzUTlJlj8TbvE6jluDOdwZ+jX57GLO3ADeuyZrDYi86vV81FD2UVGsmT+5Zl0BnkhoseOEaogL46pqO4v/IqUEyalIR4h85BgjHv6+aUWRMbb7EstX6O0cpT1Gco0ry8fWygLDMjmDnQeBt3Qe7uVfkeugDwVLcsVzGsuwLXbV+I63XNAkG5r/hvgRqgqWs6pJPKrsbvz/Q6yyun0w/h6lP+BnzrCpfPMT2L8FGAA7k1GZ/vnaqAAAAABJRU5ErkJggg=="},hideStock:{Type:Boolean,default:!1},theme:{Type:String,default:"default"},actionTips:{Type:String,default:"请求中..."},defaultSelect:{Type:Object},useCache:{Type:Boolean,default:!0},defaultGoods:{Type:Object},amountType:{Type:Number,default:1},selectedInit:{Type:Boolean,default:!1},safeAreaInsetBottom:{Type:Boolean,default:!0}},data(){return{complete:!1,goodsInfo:{},isShow:!1,initKey:!0,shopItemInfo:{},selectArr:[],subIndex:[],selectShop:{},selectNum:this.minBuyNum||1,outFoStock:!1,openTime:0,themeColor:{default:{priceColor:"rgb(254, 86, 10)",buyNowColor:"#ffffff",buyNowBackgroundColor:"rgb(254, 86, 10)",addCartColor:"#ffffff",addCartBackgroundColor:"rgb(255, 148, 2)",btnStyle:{color:"#333333",borderColor:"#f4f4f4",backgroundColor:"#ffffff"},activedStyle:{color:"rgb(254, 86, 10)",borderColor:"rgb(254, 86, 10)",backgroundColor:"rgba(254,86,10,0.1)"},disableStyle:{color:"#c3c3c3",borderColor:"#f6f6f6",backgroundColor:"#f6f6f6"}},"red-black":{priceColor:"rgb(255, 68, 68)",buyNowColor:"#ffffff",buyNowBackgroundColor:"rgb(255, 68, 68)",addCartColor:"#ffffff",addCartBackgroundColor:"rgb(85, 85, 85)",activedStyle:{color:"rgb(255, 68, 68)",borderColor:"rgb(255, 68, 68)",backgroundColor:"rgba(255,68,68,0.1)"}},"black-white":{priceColor:"rgb(47, 47, 52)",buyNowColor:"#ffffff",buyNowBackgroundColor:"rgb(47, 47, 52)",addCartColor:"rgb(47, 47, 52)",addCartBackgroundColor:"rgb(235, 236, 242)",activedStyle:{color:"rgb(47, 47, 52)",borderColor:"rgba(47,47,52,0.12)",backgroundColor:"rgba(47,47,52,0.12)"}},coffee:{priceColor:"rgb(195, 167, 105)",buyNowColor:"#ffffff",buyNowBackgroundColor:"rgb(195, 167, 105)",addCartColor:"rgb(195, 167, 105)",addCartBackgroundColor:"rgb(243, 238, 225)",activedStyle:{color:"rgb(195, 167, 105)",borderColor:"rgb(195, 167, 105)",backgroundColor:"rgba(195, 167, 105,0.1)"}},green:{priceColor:"rgb(99, 190, 114)",buyNowColor:"#ffffff",buyNowBackgroundColor:"rgb(99, 190, 114)",addCartColor:"rgb(99, 190, 114)",addCartBackgroundColor:"rgb(225, 244, 227)",activedStyle:{color:"rgb(99, 190, 114)",borderColor:"rgb(99, 190, 114)",backgroundColor:"rgba(99, 190, 114,0.1)"}}}}},created(){let e=this;M=e.vk,e.valueCom&&e.open()},mounted(){},methods:{init(e){let t=this;t.selectArr=[],t.subIndex=[],t.selectShop={},t.selectNum=t.minBuyNum||1,t.outFoStock=!1,t.shopItemInfo={};let a=t.specListName;t.goodsInfo[a].map((e=>{t.selectArr.push(""),t.subIndex.push(-1)})),t.checkItem(),t.checkInpath(-1),e||t.autoClickSku()},findGoodsInfo(e={}){let t=this,{useCache:a}=e;if(void 0===M)return t.toast("custom-action必须是function","none"),!1;let{actionTips:s}=t,l="",o=!1;"custom"!==s?l=a?"":"请求中...":o=!a,M.callFunction({url:t.action,title:l,loading:o,data:{goods_id:t.goodsId},success(e){t.updateGoodsInfo(e.goodsInfo),K[t.goodsId]=e.goodsInfo,t.$emit("update-goods",e.goodsInfo)},fail(){t.updateValue(!1)}})},updateValue(e){let t=this;e?(t.$emit("open",!0),t.$emit("input",!0),t.$emit("update:modelValue",!0)):(t.$emit("input",!1),t.$emit("close","close"),t.$emit("update:modelValue",!1))},updateGoodsInfo(e){let t=this,{skuListName:a}=t;"{}"===JSON.stringify(t.goodsInfo)||t.goodsInfo[t.goodsIdName]!==e[t.goodsIdName]?(t.goodsInfo=e,t.initKey=!0):t.goodsInfo[a]=e[a],t.initKey&&(t.initKey=!1,t.init());let s=t.getListItem(t.goodsInfo[a],t.skuIdName,t.selectShop[t.skuIdName]);Object.assign(t.selectShop,s),t.defaultSelectSku(),t.complete=!0},async open(){let e=this;e.openTime=(new Date).getTime();let t=!0;e.skuListName;let a=!1,s=K[e.goodsId];if(s&&e.useCache?(a=!0,e.updateGoodsInfo(s)):e.complete=!1,e.customAction&&"function"==typeof e.customAction){try{s=await e.customAction({useCache:a,goodsId:e.goodsId,goodsInfo:s,close:function(){setTimeout((function(){e.close()}),500)}}).catch((t=>{setTimeout((function(){e.close()}),500)}))}catch(l){let{message:t=""}=l;if(t.indexOf(".catch is not a function")>-1)return e.toast("custom-action必须返回一个Promise","none"),setTimeout((function(){e.close()}),500),!1}if(K[e.goodsId]=s,!s||"object"!=typeof s||"{}"==JSON.stringify(s))return e.toast("未获取到商品信息","none"),e.$emit("input",!1),!1;t=!1,e.updateGoodsInfo(s),e.updateValue(!0)}else if(void 0!==e.localdata&&null!==e.localdata){if(s=e.localdata,!s||"object"!=typeof s||"{}"==JSON.stringify(s))return e.toast("未获取到商品信息","none"),e.$emit("input",!1),!1;t=!1,e.updateGoodsInfo(s),e.updateValue(!0)}else t&&e.findGoodsInfo({useCache:a})},close(e){let t=this;if((new Date).getTime()-t.openTime<400)return!1;"mask"==e?!1!==t.maskCloseAble&&(t.$emit("input",!1),t.$emit("close","mask"),t.$emit("update:modelValue",!1)):(t.$emit("input",!1),t.$emit("close","close"),t.$emit("update:modelValue",!1))},moveHandle(){},skuClick(e,t,a){let s=this;e.ishow&&(s.selectArr[t]!=e.name?(s.$set(s.selectArr,t,e.name),s.$set(s.subIndex,t,a)):(s.$set(s.selectArr,t,""),s.$set(s.subIndex,t,-1)),s.checkInpath(t),s.checkSelectShop())},checkSelectShop(){let e=this;if(e.selectArr.every((e=>""!=e))){e.selectShop=e.shopItemInfo[e.getArrayToSting(e.selectArr)];let t=e.selectShop[e.stockName];void 0!==t&&e.selectNum>t&&(e.selectNum=t),e.selectNum>e.maxBuyNum&&(e.selectNum=e.maxBuyNum),e.selectNum<e.minBuyNum&&(e.selectNum=e.minBuyNum),e.selectedInit&&(e.selectNum=e.minBuyNum||1)}else e.selectShop={}},checkInpath(e){let t=this,a=t.specListName,s=t.goodsInfo[a];for(let l=0,o=s.length;l<o;l++){if(l==e)continue;let a=s[l].list.length;for(let e=0;e<a;e++){if(-1!=t.subIndex[l]&&e==t.subIndex[l])continue;let a=[...t.selectArr];t.$set(a,l,s[l].list[e].name);let o=a.filter((e=>""!==e&&void 0!==e));t.shopItemInfo.hasOwnProperty(t.getArrayToSting(o))?s[l].list[e].ishow=!0:s[l].list[e].ishow=!1}}t.$set(t.goodsInfo,a,s)},checkItem(){let e=this,{stockName:t}=e,a=e.skuListName,s=e.goodsInfo[a],l=[],o=0;s.map(((e,a)=>{e[t]>0&&(l.push(e),o+=e[t])})),o<=0&&(e.outFoStock=!0),l.reduce(((t,a)=>t.concat(a[e.skuArrName].reduce(((t,s)=>t.concat(t.map((t=>(e.shopItemInfo.hasOwnProperty(e.getArrayToSting([...t,s]))||(e.shopItemInfo[e.getArrayToSting([...t,s])]=a),[...t,s]))))),[[]]))),[[]])},getArrayToSting(e){let t="";return e.map(((e,a)=>{e=e.replace(/\./g,"。"),t+=0==a?e:","+e})),t},checkSelectComplete(e={}){let t=this,a=(new Date).getTime();if(t.clickTime&&a-t.clickTime<400)return!1;t.clickTime=a;let{selectShop:s,selectNum:l,stockText:o,stockName:d}=t;return s&&s[t.skuIdName]?l<=0?(t.toast("购买数量必须>0","none"),!1):l>s[d]?(t.toast(o+"不足","none"),!1):void("function"==typeof e.success&&e.success(s)):(t.toast("请先选择对应规格","none"),!1)},addCart(){let e=this;e.checkSelectComplete({success:function(t){t.buy_num=e.selectNum,e.$emit("add-cart",t),e.$emit("cart",t)}})},buyNow(){let e=this;e.checkSelectComplete({success:function(t){t.buy_num=e.selectNum,e.$emit("buy-now",t),e.$emit("buy",t)}})},toast(t,a){e({title:t,icon:a})},getListItem(e,t,a){let s;for(let l in e)if("object"==typeof a){if(JSON.stringify(e[l][t])===JSON.stringify(a)){s=e[l];break}}else if(e[l][t]===a){s=e[l];break}return s},getListIndex(e,t,a){let s=-1;for(let l=0;l<e.length;l++)if(e[l][t]===a){s=l;break}return s},autoClickSku(){let e=this,{stockName:t}=e,a=e.goodsInfo[e.skuListName],s=e.goodsInfo[e.specListName];if(1==s.length){let l=s[0].list;for(let s=0;s<l.length;s++){let o=e.getListItem(a,e.skuArrName,[l[s].name]);if(o&&o[t]>0){e.skuClick(l[s],0,s);break}}}},themeColorFn(e){let t=this,{theme:a,themeColor:s}=t;return t[e]?t[e]:s[a][e]},defaultSelectSku(){let e=this,{defaultSelect:t}=e;t&&t.sku&&t.sku.length>0&&e.selectSku(t)},selectSku(e={}){let t=this,{sku:a,num:s}=e,l=t.goodsInfo[t.specListName];if(a&&l.length===a.length){let e=[],s=!0;for(let o=0;o<a.length;o++){let d=a[o],c=l[o].list,r=o,u=t.getListIndex(c,"name",d);if(-1==u){s=!1;break}e.push({spec:c[u],index1:r,index2:u})}s&&(t.init(!0),e.map((e=>{t.skuClick(e.spec,e.index1,e.index2)})))}s>0&&(t.selectNum=s)},priceFilter(e=0){return"string"==typeof e&&(e=parseFloat(e)),0===this.amountType?e.toFixed(2):(e/100).toFixed(2)},pushGoodsCache(e){let{goodsIdName:t}=this;K[e[t]]=e},stop(){},previewImage(){let{selectShop:e,goodsInfo:a,goodsThumbName:s}=this,l=e.image?e.image:a[s];l&&t({urls:[l]})},getMaxStock(){let e=0,{selectShop:t={},goodsInfo:a={},skuListName:s,stockName:l}=this;if(t[l])e=t[l];else{let t=a[s];if(t&&t.length>0){let a=[];t.map(((e,t)=>{a.push(e[l])})),e=Math.max(...a)}}return e},numChange(e){this.$emit("num-change",e.value)}},computed:{valueCom(){return this.modelValue},maxBuyNumCom(){let e=this.getMaxStock(),t=this.maxBuyNum||1e5;return t>e&&(t=e),t},isManyCom(){let{goodsInfo:e,defaultSingleSkuName:t,specListName:a}=this,s=!0;return e[a]&&1===e[a].length&&1===e[a][0].list.length&&e[a][0].name===t&&(s=!1),s},priceCom(){let e="",t=this,{selectShop:a={},goodsInfo:s={},skuListName:l,skuIdName:o}=t;if(a[o])e=t.priceFilter(a.price);else{let a=s[l];if(a&&a.length>0){let s=[];a.map(((e,t)=>{s.push(e.price)}));let l=t.priceFilter(Math.min(...s)),o=t.priceFilter(Math.max(...s));e=l===o?l+"":`${l} - ${o}`}}return e},stockCom(){let e="",{selectShop:t={},goodsInfo:a={},skuListName:s,stockName:l}=this;if(t[l])e=t[l];else{let t=a[s];if(t&&t.length>0){let a=[];t.map(((e,t)=>{a.push(e[l])}));let s=Math.min(...a),o=Math.max(...a);e=s===o?s:`${s} - ${o}`}}return e}},watch:{valueCom(e,t){e&&this.open()},defaultGoods:{immediate:!0,handler:function(e,t){let a=this,{goodsIdName:s}=a;"object"==typeof e&&e&&e[s]&&!K[e[s]]&&a.pushGoodsCache(e)}}}},[["render",function(e,t,S,N,I,x){const T=v,w=C,A=h,B=a(s("vk-data-input-number-box"),O),F=_;return l(),o(T,{class:u(["vk-data-goods-sku-popup",x.valueCom&&I.complete?"show":"none"]),catchtouchmove:"true",onTouchmove:y(x.moveHandle,["stop","prevent"]),onClick:y(x.stop,["stop"])},{default:d((()=>[c(" 页面内容开始 "),r(T,{class:"mask",onClick:t[0]||(t[0]=e=>x.close("mask"))}),r(T,{class:u(["layer attr-content",{"safe-area-inset-bottom":S.safeAreaInsetBottom}]),style:n({borderRadius:S.borderRadius+"rpx "+S.borderRadius+"rpx 0 0"})},{default:d((()=>[r(T,{class:"specification-wrapper"},{default:d((()=>[r(F,{class:"specification-wrapper-content","scroll-y":"true"},{default:d((()=>[r(T,{class:"specification-header"},{default:d((()=>[r(T,{class:"specification-left"},{default:d((()=>[r(w,{class:"product-img",src:I.selectShop.image?I.selectShop.image:I.goodsInfo[S.goodsThumbName],style:n({backgroundColor:S.goodsThumbBackgroundColor}),mode:"aspectFill",onClick:x.previewImage},null,8,["src","style","onClick"])])),_:1}),r(T,{class:"specification-right"},{default:d((()=>[r(T,{class:"price-content",style:n({color:x.themeColorFn("priceColor")})},{default:d((()=>[r(A,{class:"sign"},{default:d((()=>[i("¥")])),_:1}),r(A,{class:u(["price",x.priceCom.length>16?"price2":""])},{default:d((()=>[i(f(x.priceCom),1)])),_:1},8,["class"])])),_:1},8,["style"]),S.hideStock?(l(),o(T,{key:1,class:"inventory"})):(l(),o(T,{key:0,class:"inventory"},{default:d((()=>[i(f(S.stockText)+"："+f(x.stockCom),1)])),_:1})),p(r(T,{class:"choose"},{default:d((()=>[i("已选："+f(I.selectArr.join(" ")),1)])),_:1},512),[[m,x.isManyCom]])])),_:1})])),_:1}),r(T,{class:"specification-content"},{default:d((()=>[(l(!0),k(g,null,b(I.goodsInfo[S.specListName],((e,t)=>p((l(),o(T,{class:"specification-item",key:t},{default:d((()=>[r(T,{class:"item-title"},{default:d((()=>[i(f(e.name),1)])),_:2},1024),r(T,{class:"item-wrapper"},{default:d((()=>[(l(!0),k(g,null,b(e.list,((e,a)=>(l(),o(T,{class:u(["item-content",[e.ishow?"":"noactived",I.subIndex[t]==a?"actived":""]]),key:a,style:n([e.ishow?"":x.themeColorFn("disableStyle"),e.ishow?x.themeColorFn("btnStyle"):"",I.subIndex[t]==a?x.themeColorFn("activedStyle"):""]),onClick:s=>x.skuClick(e,t,a)},{default:d((()=>[i(f(e.name),1)])),_:2},1032,["class","style","onClick"])))),128))])),_:2},1024)])),_:2},1024)),[[m,x.isManyCom]]))),128)),r(T,{class:"number-box-view"},{default:d((()=>[r(T,{style:{flex:"1"}},{default:d((()=>[i("数量")])),_:1}),r(T,{style:{flex:"4","text-align":"right"}},{default:d((()=>[r(B,{modelValue:I.selectNum,"onUpdate:modelValue":t[1]||(t[1]=e=>I.selectNum=e),min:S.minBuyNum||1,max:x.maxBuyNumCom,step:S.stepBuyNum||1,"step-strictly":S.stepStrictly,"positive-integer":!0,onChange:x.numChange},null,8,["modelValue","min","max","step","step-strictly","onChange"])])),_:1})])),_:1})])),_:1})])),_:1}),0!=S.showClose?(l(),o(T,{key:0,class:"close",onClick:t[2]||(t[2]=e=>x.close("close"))},{default:d((()=>[r(w,{class:"close-item",src:S.closeImage},null,8,["src"])])),_:1})):c("v-if",!0)])),_:1}),I.outFoStock||4==S.mode?(l(),o(T,{key:0,class:"btn-wrapper"},{default:d((()=>[r(T,{class:"sure",style:{color:"#ffffff","background-color":"#cccccc"}},{default:d((()=>[i(f(S.noStockText),1)])),_:1})])),_:1})):1==S.mode?(l(),o(T,{key:1,class:"btn-wrapper"},{default:d((()=>[r(T,{class:"sure add-cart",style:n([{"border-radius":"38rpx 0rpx 0rpx 38rpx"},{color:x.themeColorFn("addCartColor"),backgroundColor:x.themeColorFn("addCartBackgroundColor")}]),onClick:x.addCart},{default:d((()=>[i(f(S.addCartText),1)])),_:1},8,["style","onClick"]),r(T,{class:"sure",style:n([{"border-radius":"0rpx 38rpx 38rpx 0rpx"},{color:x.themeColorFn("buyNowColor"),backgroundColor:x.themeColorFn("buyNowBackgroundColor")}]),onClick:x.buyNow},{default:d((()=>[i(f(S.buyNowText),1)])),_:1},8,["style","onClick"])])),_:1})):2==S.mode?(l(),o(T,{key:2,class:"btn-wrapper"},{default:d((()=>[r(T,{class:"sure add-cart",style:n({color:x.themeColorFn("addCartColor"),backgroundColor:x.themeColorFn("addCartBackgroundColor")}),onClick:x.addCart},{default:d((()=>[i(f(S.addCartText),1)])),_:1},8,["style","onClick"])])),_:1})):3==S.mode?(l(),o(T,{key:3,class:"btn-wrapper"},{default:d((()=>[r(T,{class:"sure",style:n({color:x.themeColorFn("buyNowColor"),backgroundColor:x.themeColorFn("buyNowBackgroundColor")}),onClick:x.buyNow},{default:d((()=>[i(f(S.buyNowText),1)])),_:1},8,["style","onClick"])])),_:1})):c("v-if",!0)])),_:1},8,["class","style"]),c(" 页面内容结束 ")])),_:1},8,["class","onTouchmove","onClick"])}],["__scopeId","data-v-c1658407"]]),Q=D(S({__name:"detail",props:{data:null},setup:e=>(t,a)=>{const s=h,u=v,n=C;return l(),k(g,null,[c(" 商品详情 "),r(u,{class:"detail panel"},{default:d((()=>[r(u,{class:"title"},{default:d((()=>[r(s,null,{default:d((()=>[i("详情")])),_:1})])),_:1}),r(u,{class:"content"},{default:d((()=>{var t;return[r(u,{class:"properties"},{default:d((()=>{var t;return[c(" 属性详情 "),(l(!0),k(g,null,b(null==(t=e.data)?void 0:t.properties,(e=>(l(),o(u,{class:"item",key:null==e?void 0:e.value},{default:d((()=>[r(s,{class:"label"},{default:d((()=>[i(f(e.name),1)])),_:2},1024),r(s,{class:"value"},{default:d((()=>[i(f(e.value),1)])),_:2},1024)])),_:2},1024)))),128))]})),_:1}),c(" 图片详情 "),(l(!0),k(g,null,b(null==(t=e.data)?void 0:t.pictures,(e=>(l(),o(n,{key:e,mode:"widthFix",src:e},null,8,["src"])))),128))]})),_:1})])),_:1})],2112)}}),[["__scopeId","data-v-2b09dc04"]]),U=D(S({__name:"ServicePanel",emits:["close"],setup:(e,{emit:t})=>(e,a)=>{const s=h,u=v;return l(),o(u,{class:"service-panel"},{default:d((()=>[c(" 关闭按钮 "),r(s,{onClick:a[0]||(a[0]=e=>t("close")),class:"close icon-close"}),c(" 标题 "),r(u,{class:"title"},{default:d((()=>[i("服务说明")])),_:1}),c(" 内容 "),r(u,{class:"content"},{default:d((()=>[r(u,{class:"item"},{default:d((()=>[r(u,{class:"dt"},{default:d((()=>[i("无忧退货")])),_:1}),r(u,{class:"dd"},{default:d((()=>[i(" 自收到商品之日起30天内，可在线申请无忧退货服务（食品等特殊商品除外） ")])),_:1})])),_:1}),r(u,{class:"item"},{default:d((()=>[r(u,{class:"dt"},{default:d((()=>[i("快速退款")])),_:1}),r(u,{class:"dd"},{default:d((()=>[i(" 收到退货包裹并确认无误后，将在48小时内办理退款， 退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账 ")])),_:1})])),_:1}),r(u,{class:"item"},{default:d((()=>[r(u,{class:"dt"},{default:d((()=>[i("满88元免邮费")])),_:1}),r(u,{class:"dd"},{default:d((()=>[i(" 单笔订单金额(不含运费)满88元可免邮费，不满88元， 单笔订单收取10元邮费 ")])),_:1})])),_:1})])),_:1})])),_:1})}}),[["__scopeId","data-v-3b630f56"]]),H=D(S({__name:"AddressPanel",emits:["close"],setup(e,{emit:t}){const a=N([]);I((()=>{(async()=>{const e=await E();a.value=e.result;const t=e.result.find((e=>e.isDefault));s.selectedAddress||s.changeSelectedAddress(t||e.result[0])})()}));const s=$();return(e,n)=>{const p=h,m=v;return l(),o(m,{class:"address-panel"},{default:d((()=>[c(" 关闭按钮 "),r(p,{onClick:n[0]||(n[0]=e=>t("close")),class:"close icon-close"}),c(" 标题 "),r(m,{class:"title"},{default:d((()=>[i("配送至")])),_:1}),c(" 内容 "),r(m,{class:"content"},{default:d((()=>[(l(!0),k(g,null,b(a.value,(e=>(l(),o(m,{class:"item",onClick:t=>{return a=e,void s.changeSelectedAddress(a);var a},key:e.id},{default:d((()=>{var t,a;return[r(m,{class:"user"},{default:d((()=>[i(f(e.receiver)+" "+f(e.contact),1)])),_:2},1024),r(m,{class:"address"},{default:d((()=>[i(f(e.fullLocation)+" "+f(e.address),1)])),_:2},1024),r(p,{class:u(["icon",{"icon-checked":(null==e?void 0:e.id)==(null==(a=null==(t=x(s))?void 0:t.selectedAddress)?void 0:a.id)}])},null,8,["class"])]})),_:2},1032,["onClick"])))),128))])),_:1}),r(m,{class:"footer"},{default:d((()=>{var e;return[(null==(e=a.value)?void 0:e.length)>0?(l(),o(m,{key:0,onClick:n[1]||(n[1]=e=>t("close")),class:"button primary"},{default:d((()=>[i("确定")])),_:1})):(l(),o(m,{key:1,class:"button primary"},{default:d((()=>[i(" 新建地址 ")])),_:1}))]})),_:1})])),_:1})}}}),[["__scopeId","data-v-ab2b84ae"]]);const Z=D({},[["render",function(e,t){const a=C,s=T,c=w,u=h,n=v,f=_,p=A,m=B;return l(),o(n,{class:"sk-container"},{default:d((()=>[r(f,{"scroll-y":!0,class:"viewport viewport data-v-e000afeb data-v-e000afeb","enable-back-to-top":!0},{default:d((()=>[r(n,{class:"goods goods data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(n,{class:"preview preview data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(c,{circular:!0,class:"data-v-e000afeb data-v-e000afeb",current:0,autoplay:!1},{default:d((()=>[r(s,{class:"data-v-e000afeb data-v-e000afeb",style:{position:"absolute",width:"100%",height:"100%",transform:"translate(0%, 0px) translateZ(0px)"}},{default:d((()=>[r(a,{class:"data-v-e000afeb sk-image",mode:"aspectFill"})])),_:1})])),_:1}),r(n,{class:"indicator indicator data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(u,{class:"current data-v-e000afeb sk-transparent sk-opacity"},{default:d((()=>[i("1")])),_:1}),r(u,{class:"split data-v-e000afeb sk-transparent sk-opacity"},{default:d((()=>[i("/")])),_:1}),r(u,{class:"total data-v-e000afeb sk-transparent sk-opacity"},{default:d((()=>[i("5")])),_:1})])),_:1})])),_:1}),r(n,{class:"meta meta data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(n,{class:"price price data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(u,{class:"symbol data-v-e000afeb sk-transparent sk-opacity"},{default:d((()=>[i("¥")])),_:1}),r(u,{class:"number data-v-e000afeb sk-transparent sk-text-14-2857-903 sk-text"},{default:d((()=>[i("168.00")])),_:1})])),_:1}),r(n,{class:"name ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-354 sk-text"},{default:d((()=>[i("梅乃宿梅酒720毫升")])),_:1}),r(n,{class:"desc data-v-e000afeb sk-transparent sk-text-0-0000-434 sk-text"},{default:d((()=>[i("小藏手工酿造，百年名酒app")])),_:1})])),_:1}),r(n,{class:"action action data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(n,{class:"item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle"},{default:d((()=>[r(u,{class:"label data-v-e000afeb sk-transparent sk-text-14-2857-115 sk-text"},{default:d((()=>[i("选择")])),_:1}),r(u,{class:"text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-773 sk-text"},{default:d((()=>[i(" 请选择商品规格 ")])),_:1})])),_:1}),r(n,{class:"item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle"},{default:d((()=>[r(u,{class:"label data-v-e000afeb sk-transparent sk-text-14-2857-649 sk-text"},{default:d((()=>[i("送至")])),_:1}),r(u,{class:"text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-84 sk-text"},{default:d((()=>[i(" 请选择收获地址 ")])),_:1})])),_:1}),r(n,{class:"item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle"},{default:d((()=>[r(u,{class:"label data-v-e000afeb sk-transparent sk-text-14-2857-98 sk-text"},{default:d((()=>[i("服务")])),_:1}),r(u,{class:"text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-185 sk-text"},{default:d((()=>[i(" 无忧退 快速退款 免费包邮 ")])),_:1})])),_:1})])),_:1})])),_:1}),r(n,{is:"pages/goods/comonent/detail",class:"data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(n,{class:"detail detail--detail panel detail--panel data-v-1034a2dc detail--data-v-1034a2dc"},{default:d((()=>[r(n,{class:"title detail--title data-v-1034a2dc detail--data-v-1034a2dc"},{default:d((()=>[r(u,{class:"data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-0-0000-120 sk-text"},{default:d((()=>[i("详情")])),_:1})])),_:1}),r(n,{class:"content detail--content data-v-1034a2dc detail--data-v-1034a2dc"},{default:d((()=>[r(n,{class:"properties detail--properties data-v-1034a2dc detail--data-v-1034a2dc"},{default:d((()=>[r(n,{class:"item detail--item data-v-1034a2dc detail--data-v-1034a2dc"},{default:d((()=>[r(u,{class:"label detail--label data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-25-0000-336 sk-text"},{default:d((()=>[i("品名")])),_:1}),r(u,{class:"value detail--value data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-25-0000-677 sk-text"},{default:d((()=>[i("梅乃宿梅酒")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),r(n,{class:"toolbar toolbar data-v-e000afeb data-v-e000afeb",style:{"padding-bottom":"34px"}},{default:d((()=>[r(n,{class:"icons icons data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(p,{class:"icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"},{default:d((()=>[r(u,{class:"icon-heart data-v-e000afeb sk-pseudo sk-pseudo-circle"}),i("收藏 ")])),_:1}),r(m,{class:"icons-button data-v-e000afeb sk-transparent","open-type":"switchTab"},{default:d((()=>[r(u,{class:"icon-cart data-v-e000afeb sk-pseudo sk-pseudo-circle"}),i("购物车 ")])),_:1})])),_:1}),r(n,{class:"buttons buttons data-v-e000afeb data-v-e000afeb"},{default:d((()=>[r(n,{class:"addcart data-v-e000afeb sk-transparent sk-text-31-9444-767 sk-text",style:{"background-position-x":"50%"}},{default:d((()=>[i(" 加入购物车 ")])),_:1}),r(n,{class:"buynow data-v-e000afeb sk-transparent sk-text-31-9444-637 sk-text",style:{"background-position-x":"50%"}},{default:d((()=>[i(" 立即购买 ")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-6295326c"]]),q=D(S({__name:"goods",props:{id:null},setup(u){const p=u,{safeAreaInsets:m}=F();let y=N();const S=async()=>{const e=await(t=p.id,J({method:"GET",url:"/goods",data:{id:t}}));var t;y.value=e.result,z.value={_id:e.result.id,name:e.result.name,goods_thumb:e.result.mainPictures[0],spec_list:e.result.specs.map((e=>({name:e.name,list:e.values}))),sku_list:e.result.skus.map((t=>({_id:t.id,goods_id:e.result.id,goods_name:e.result.name,image:t.picture,price:100*t.price,stock:t.inventory,sku_name_arr:t.specs.map((e=>e.valueName))})))}};V((async()=>{await S(),I.value=!1}));let I=N(!0),O=N(0);const D=e=>{O.value=e.detail.current},E=N();let M=N("");const K=e=>{var t;M.value=e,null==(t=E.value)||t.open()},q=$(),X=N(!1),z=N({}),Y=N(2),W=e=>{X.value=!0,Y.value=e},ee=N(),te=L((()=>{var e,t;return(null==(t=null==(e=ee.value)?void 0:e.selectArr)?void 0:t.join(" ").trim())||"请选择商品规格"})),ae=async t=>{await j({skuId:t._id,count:t.buy_num}),e({title:"添加成功"}),X.value=!1},se=e=>{G({url:`/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}`})};return(e,u)=>{var p;const S=a(s("vk-data-goods-sku-popup"),R),N=C,F=T,V=w,L=h,G=v,j=B,J=_,$=A,le=a(s("uni-popup"),P);return l(),k(g,null,[r(S,{ref_key:"skuPopupRef",ref:ee,mode:Y.value,modelValue:X.value,"onUpdate:modelValue":u[0]||(u[0]=e=>X.value=e),localdata:z.value,onAddCart:ae,onBuyNow:se,"add-cart-background-color":"#FFA868","buy-now-background-color":"#27BA9B","actived-style":{color:"#27BA9B",borderColor:"#27BA9B",backgroundColor:"#E9F8F5"}},null,8,["mode","modelValue","localdata"]),x(I)?(l(),o(Z,{key:0})):c("v-if",!0),x(I)?c("v-if",!0):(l(),o(J,{key:1,"scroll-y":"",class:"viewport"},{default:d((()=>{var e;return[c(" 基本信息 "),r(G,{class:"goods"},{default:d((()=>[c(" 商品主图 "),r(G,{class:"preview"},{default:d((()=>[r(V,{onChange:D,circular:""},{default:d((()=>{var e;return[(l(!0),k(g,null,b(null==(e=x(y))?void 0:e.mainPictures,(e=>(l(),o(F,{key:e},{default:d((()=>[r(N,{onClick:a=>(e=>{var a;t({current:e,urls:null==(a=y.value)?void 0:a.mainPictures})})(e),mode:"aspectFill",src:e},null,8,["onClick","src"])])),_:2},1024)))),128))]})),_:1}),r(G,{class:"indicator"},{default:d((()=>[r(L,{class:"current"},{default:d((()=>[i(f(x(O)+1),1)])),_:1}),r(L,{class:"split"},{default:d((()=>[i("/")])),_:1}),r(L,{class:"total"},{default:d((()=>{var e;return[i(f(null==(e=x(y))?void 0:e.mainPictures.length),1)]})),_:1})])),_:1})])),_:1}),c(" 商品简介 "),r(G,{class:"meta"},{default:d((()=>[r(G,{class:"price"},{default:d((()=>[r(L,{class:"symbol"},{default:d((()=>[i("¥")])),_:1}),r(L,{class:"number"},{default:d((()=>{var e;return[i(f(null==(e=x(y))?void 0:e.price),1)]})),_:1})])),_:1}),r(G,{class:"name ellipsis"},{default:d((()=>{var e;return[i(f(null==(e=x(y))?void 0:e.name),1)]})),_:1}),r(G,{class:"desc"},{default:d((()=>{var e;return[i(f(null==(e=x(y))?void 0:e.desc),1)]})),_:1})])),_:1}),c(" 操作面板 "),r(G,{class:"action"},{default:d((()=>[r(G,{onClick:u[1]||(u[1]=e=>W(1)),class:"item arrow"},{default:d((()=>[r(L,{class:"label"},{default:d((()=>[i("选择")])),_:1}),r(L,{class:"text ellipsis"},{default:d((()=>[i(f(x(te)),1)])),_:1})])),_:1}),r(G,{onClick:u[2]||(u[2]=e=>K("AddressPanel")),class:"item arrow"},{default:d((()=>[r(L,{class:"label"},{default:d((()=>[i("送至")])),_:1}),x(q).selectedAddress?(l(),o(L,{key:0,class:"text ellipsis"},{default:d((()=>[i(f(x(q).selectedAddress.fullLocation)+f(x(q).selectedAddress.address),1)])),_:1})):(l(),o(L,{key:1,class:"text ellipsis"},{default:d((()=>[i(" 请选择收获地址 ")])),_:1}))])),_:1}),r(G,{onClick:u[3]||(u[3]=e=>K("ServicePanel")),class:"item arrow"},{default:d((()=>[r(L,{class:"label"},{default:d((()=>[i("服务")])),_:1}),r(L,{class:"text ellipsis"},{default:d((()=>[i(" 无忧退 快速退款 免费包邮 ")])),_:1})])),_:1})])),_:1})])),_:1}),c(" 商品详情 "),r(Q,{data:null==(e=x(y))?void 0:e.details},null,8,["data"]),c(" 同类推荐 "),r(G,{class:"similar panel"},{default:d((()=>[r(G,{class:"title"},{default:d((()=>[r(L,null,{default:d((()=>[i("同类推荐")])),_:1})])),_:1}),r(G,{class:"content"},{default:d((()=>{var e;return[(l(!0),k(g,null,b(null==(e=x(y))?void 0:e.similarProducts,(e=>(l(),o(j,{key:e.id,class:"goods","hover-class":"none",url:`/pages/goods/goods?id=${e.id}`},{default:d((()=>[r(N,{class:"image",mode:"aspectFill",src:e.picture},null,8,["src"]),r(G,{class:"name ellipsis"},{default:d((()=>[i(f(e.name),1)])),_:2},1024),r(G,{class:"price"},{default:d((()=>[r(L,{class:"symbol"},{default:d((()=>[i("¥")])),_:1}),r(L,{class:"number"},{default:d((()=>[i(f(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))]})),_:1})])),_:1})]})),_:1})),c(" 用户操作 "),x(I)?c("v-if",!0):(l(),o(G,{key:2,class:"toolbar",style:n({paddingBottom:(null==(p=x(m))?void 0:p.bottom)+"px"})},{default:d((()=>[r(G,{class:"icons"},{default:d((()=>[r($,{class:"icons-button"},{default:d((()=>[r(L,{class:"icon-heart"}),i("收藏")])),_:1}),r(j,{class:"icons-button",url:"/pages/cart/cart2","open-type":"navigate"},{default:d((()=>[r(L,{class:"icon-cart"}),i("购物车 ")])),_:1})])),_:1}),r(G,{class:"buttons"},{default:d((()=>[r(G,{onClick:u[4]||(u[4]=e=>W(2)),class:"addcart"},{default:d((()=>[i(" 加入购物车 ")])),_:1}),r(G,{onClick:u[5]||(u[5]=e=>W(3)),class:"buynow"},{default:d((()=>[i(" 立即购买 ")])),_:1})])),_:1})])),_:1},8,["style"])),r(le,{ref_key:"popup",ref:E,type:"bottom","background-color":"#fff"},{default:d((()=>["ServicePanel"==x(M)?(l(),o(U,{key:0,onClose:u[6]||(u[6]=e=>E.value.close())})):(l(),o(H,{key:1,onClose:u[7]||(u[7]=e=>E.value.close())}))])),_:1},512)],64)}}}),[["__scopeId","data-v-5b43bcec"]]);export{q as default};
