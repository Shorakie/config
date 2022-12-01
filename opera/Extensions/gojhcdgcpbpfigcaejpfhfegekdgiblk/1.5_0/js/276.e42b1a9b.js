"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[276],{48796:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"wrapper"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.isChecked,value:t.value},on:{change:t.updateInput}}),s("span",{staticClass:"checkmark"})])},i=[],n=(s(57658),{name:"OperaCheckbox",model:{event:"change",prop:"modelValue"},props:{modelValue:{default:!1,type:[Array,Boolean]},value:{default:void 0,type:[Object,String]}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(t){const e=t.target.checked;if(this.modelValue instanceof Array){const t=[...this.modelValue];e?t.push(this.value):t.splice(t.indexOf(this.value),1),this.$emit("change",t)}else this.$emit("change",e)}}}),o=n,l=s(1001),r=(0,l.Z)(o,a,i,!1,null,"8d8c1508",null),c=r.exports},37643:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.disabled?t._e():s("div",{staticClass:"bg-dark-N16 border border-black border-opacity-10 cursor-pointer flex items-center justify-between mb-2 px-6 py-3 rounded-lg t-token_item-click",on:{click:t.click}},[s("token-icon",{staticClass:"h-9 w-9",attrs:{address:t.address,chain:t.chain,"icon-uri":t.value.logoURI}}),s("div",{staticClass:"flex-1 mx-4"},[s("div",{staticClass:"font-bold tracking-wider"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex items-center text-dark-N77 text-xs"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:t.chain}}),t.type&&t.type!==t.symbol?s("div",{staticClass:"bg-input-bg inline-block ml-1 px-2 py-0 rounded-full"},[t._v(" "+t._s(t.type)+" ")]):t._e()],1)]),t.selectable?s("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":t.modelValue,value:t.value},on:{change:t.onChange}}):t._e()],1)},i=[],n=s(88080),o=s(48796),l=s(56258),r=s(67990),c={name:"TokenItem",components:{ChainBadge:n.Z,OperaCheckbox:o.Z,TokenIcon:r.Z},model:{event:"change",prop:"modelValue"},props:{address:{default:"",type:String},chain:{default:void 0,type:Object},disabled:{default:!1,type:Boolean},modelValue:{default:void 0,type:[String,Object,Array]},name:{default:"",type:String},selectable:{default:!0,type:Boolean},symbol:{default:"",type:String},value:{default:void 0,type:[String,Object,Array]}},computed:{type(){const t=this.value.type??this.value.contract?.type;if(t)return!1}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const t=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${t}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"},onChange(t){const[e,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol],a=this.getStatsEventName();l.Z.sendStatsEvent(l.Z.types.CLICK,a,{network:e,symbol:s}),this.$emit("change",t)}}},d=c,h=s(1001),u=(0,h.Z)(d,a,i,!1,null,null,null),p=u.exports},88080:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.chainNameFriendly?s("div",{staticClass:"flex mr-2 px-2 py-0.5 rounded-full space-x-1 t-chain-badge text-dark-N77",class:[t.backgroundColor]},[t.chainLogo?s("img",{staticClass:"object-contain w-3.5",attrs:{alt:"",src:t.chainLogo}}):t._e(),s("span",{staticClass:"t-chain-badge-name"},[t._v(t._s(t.chainNameFriendly))])]):t._e()},i=[],n=s(6445),o={name:"ChainBadge",props:{backgroundColor:{default:"bg-dark-N16",type:String},chain:{default:void 0,type:Object}},computed:{chainLogo(){if(this.chain)return(0,n.Z)(this.chain).icon()},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)}}},l=o,r=s(1001),c=(0,r.Z)(l,a,i,!1,null,null,null),d=c.exports},70924:function(t,e,s){s.d(e,{Z:function(){return _}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full"},[t.value?s("div",{staticClass:"bg-input-bg cursor-pointer flex rounded-full t-asset_selector-show_dialog",on:{click:t.showDialog}},[s("token-icon",{staticClass:"h-8 mx-4 my-5 w-10",attrs:{address:t.address,chain:t.chain}}),s("div",{staticClass:"flex items-center justify-between w-full"},[s("div",{staticClass:"tracking-wider truncate"},[s("div",{staticClass:"font-bold text-lg"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex flex font-bold items-center text-grey-A text-sm"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{chain:t.chain}})],1)]),s("i",{staticClass:"icon-chevron_down m-4 text-dark-N60 w-6"})])],1):t._e(),s("asset-selector-dialog",{ref:"dialog",attrs:{options:t.options,"still-loading-count":t.stillLoadingCount,value:t.value}})],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-background bottom-0 fixed left-0 right-0 top-0 z-10"},[s("div",{staticClass:"flex flex-col h-full"},[s("top-bar",{attrs:{"emit-back":"","test-parent-name":"asset_selector_dialog",title:t.$t("general.selectAssets")},on:{back:t.close}}),s("div",{staticClass:"px-4"},[s("opera-input",{staticClass:"t-token_dialog-query",attrs:{placeholder:t.$t("general.search"),"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",value:t.search},on:{input:t.updateSearch}})],1),s("div",{staticClass:"h-full overflow-y-scroll pb-4 px-4",on:{scroll:t.onScroll}},[t._l(t.tokenList,(function(e,a){return s("div",{key:a},[s("token-item",{staticClass:"my-3",attrs:{address:"contract"in e?e.contract.contract:e.address,chain:e.chain,name:"contract"in e?e.contract.name:e.name,selectable:!1,symbol:"contract"in e?e.contract.symbol:e.symbol,value:e},on:{change:t.itemClicked}})],1)})),t._l(t.stillLoadingCount,(function(t){return s("div",{key:"loading-"+t,staticClass:"bg-dark-N16 border border-black border-opacity-10 cursor-wait flex items-center justify-between mb-2 mt-3 px-6 py-3 rounded-lg t-token_loading_item",style:{opacity:1/t}},[s("div",{staticClass:"h-10"},[s("lottie-component",{staticClass:"h-10",attrs:{src:"loader_tx.json"}})],1)])}))],2)],1)])},o=[],l=s(39944),r=s(49314),c=s(37643),d=s(38423),h=s(20144);const u=20;var p=h.Z.extend({name:"AssetSelectorDialog",components:{LottieComponent:l.Z,OperaInput:r.Z,TokenItem:c.Z,TopBar:d.Z},props:{options:{default:void 0,type:Array},stillLoadingCount:{default:0,type:Number},value:{default:void 0,type:Object}},data(){return{callback:null,loading:!1,pageSize:u,search:"",showing:!1}},computed:{tokenList(){const{tokens:t}=this;return this.search?t.filter((t=>("contract"in t?t.contract.name:t.name).toLowerCase().includes(this.search.toLowerCase()))).slice(0,this.pageSize):t.slice(0,this.pageSize)},tokens(){return this.options}},methods:{close(){!this.value||this.$route.meta?.preselectToken?this.$router.go(-1):this.showing=!1},async itemClicked(t){this.loading=!0,this.callback(t),this.showing=!1,this.loading=!1},onScroll(t){const{target:e}=t,s=e.scrollTop+e.clientHeight>=e.scrollHeight-e.clientHeight;s&&(this.pageSize+u<this.tokens.length?this.pageSize+=u:this.pageSize=this.tokens.length-1)},show(t){this.callback=t,this.showing=!0},updateSearch(t){this.search=t}}}),m=p,g=s(1001),k=(0,g.Z)(m,n,o,!1,null,null,null),v=k.exports,f=s(88080),y=s(67990),b=h.Z.extend({name:"AssetSelector",components:{AssetSelectorDialog:v,ChainBadge:f.Z,TokenIcon:y.Z},props:{options:{default:void 0,type:Array},stillLoadingCount:{default:0,type:Number},value:{default:void 0,type:Object}},data(){return{dialog:!1}},computed:{address(){return"contract"in this.token?this.token.contract.contract:this.token.address},chain(){return this.token.chain},name(){return"contract"in this.token?this.token.contract.name:this.token.name},symbol(){return"contract"in this.token?this.token.contract.symbol:this.token.symbol},token(){return this.value??this.$store.getters.matchingNativeToken("",this.chain)}},methods:{showDialog(){this.$refs.dialog.show((t=>{this.$emit("input",t)}))}}}),w=b,C=(0,g.Z)(w,a,i,!1,null,null,null),_=C.exports},34276:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col tracking-wide"},[s("top-bar",{attrs:{"test-parent-name":"sell_view",title:t.$t("general.sell")}}),s("div",{staticClass:"mt-5 mx-14"},[s("div",{staticClass:"mb-8 text-white"},[t._v(t._s(t.$t("views.sellView.sellDescription")))]),s("div",{staticClass:"mb-4 text-grey-D text-lg"},[t._v(t._s(t.$t("general.sell")))]),s("div",{staticClass:"flex items-center justify-center mb-12"},[s("asset-selector",{ref:"assetSelector",attrs:{options:t.sellableTokens},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),s("div",{staticClass:"mb-4 text-grey-D text-lg"},[t._v(t._s(t.$t("general.serviceProvider")))]),t._l(t.promos.filter((function(t){return!t.hidden})),(function(e){return s("li",{key:e.key,staticClass:"bg-dark-N16 list-none mb-8 px-8 py-6 rounded-md",class:e.addClass},[s("img",{staticClass:"-ml-2 mr-6",attrs:{src:e.icon}}),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"font-semibold mt-4 tracking-wider"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"font-light mt-2 text-dark-N77 tracking-normal"},[s("i18n",{attrs:{path:"views.sellView.sellWithDescription",tag:"span"},scopedSlots:t._u([{key:"platform",fn:function(){return[s("span",[t._v(t._s(e.platform))])]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"flex flex-center mt-6"},[s("div",{staticClass:"flex-1"}),s("div",{class:"t-sell_view-click_"+e.key,on:{click:function(s){return t.clickItem(e)}}},[s("primary-button",{staticClass:"flex-1",class:"t-sell_view-button_"+e.key,attrs:{title:e.action}})],1),s("div",{staticClass:"flex-1"})]),e.supportLink?s("div",{staticClass:"font-semibold mt-2 text-center text-dark-N77 text-xs underline"},[s("a",{attrs:{href:e.supportLink,rel:"noopener noreferrer",target:"_blank"}},[t._v(" "+t._s(t.$t("general.support"))+" ")])]):t._e()])])}))],2)],1)},i=[],n=s(70924),o=s(90108),l=s(56258),r=s(38423),c={name:"SellView",components:{AssetSelector:n.Z,PrimaryButton:o.Z,TopBar:r.Z},data(){return{token:this.$route.params?.token??this.$store.getters.sellableTokens[0]}},computed:{address(){return this.$store.getters.accountsByCoinType[this.coinType]},chain(){return this.token.chain},coinType(){return this.token.chain.coinType},name(){return this.token.contract.name},promos(){const t=this.receivingAddress,e=this.$store.getters.productSell,{symbol:a}=this;return[{action:this.$t("views.sellView.sellWithContinue",{platform:"Wyre"}),hidden:!0,icon:s(97061),infoLink:"",key:"wyre",link:"https://www.sendwyre.com/",platform:"Wyre",title:this.$t("views.sellView.sellWithTitle",{platform:"Wyre",symbol:a})},{action:this.$t("views.sellView.sellWithContinue",{platform:"MoonPay"}),icon:s(82820),infoLink:"https://support.moonpay.com/hc/",key:"moonpay",link:`https://satoshi.opera-api.com/v4/redirects/moonpay-sell?currencyCode=${a}&refundWalletAddress=${t}&product=${e}`,platform:"MoonPay",stats:"wt_sell_moonpay",supportLink:"https://support.moonpay.com/hc/en-gb/requests/new",title:this.$t("views.sellView.sellWithTitle",{platform:"MoonPay",symbol:a})},{action:this.$t("views.sellView.sellWithContinue",{platform:"Ramp"}),hidden:!0,icon:s(82702),infoLink:"https://support.ramp.network",key:"ramp",link:`https://sell.ramp.network/?swapAsset=${a}&userAddress=${t}&hostApiKey=hq84sto6z2nry34dwhvoh76yxpzspggyjzavzuoe`,platform:"Ramp",stats:"wt_sell_ramp",supportLink:"https://support.ramp.network",title:this.$t("views.sellView.sellWithTitle",{platform:"Ramp",symbol:a})}]},receivingAddress(){return this.$store.getters.receivingAddress},sellableTokens(){return this.$store.getters.sellableTokens},statsPayload(){return{coin:this.symbol,network:this.$store.getters.getNetworkName(this.chain)}},symbol(){return this.token.contract.symbol}},watch:{token(){this.$store.dispatch("getReceivingAddress",this.chain)}},mounted(){l.Z.sendStatsEvent(l.Z.types.IMPRESSION,"wt_sell_entered",this.statsPayload),this.$route.meta.preselectToken&&this.$refs.assetSelector.showDialog(),this.$store.dispatch("getReceivingAddress",this.chain)},methods:{clickItem(t){t.stats&&l.Z.sendStatsEvent(l.Z.types.CLICK,t.stats,this.statsPayload);const{link:e}=t;window.open(e)}}},d=c,h=s(1001),u=(0,h.Z)(d,a,i,!1,null,null,null),p=u.exports},82820:function(t,e,s){t.exports=s.p+"img/moonpay.6b4c9c2a.svg"},82702:function(t,e,s){t.exports=s.p+"img/ramp.26a0a8eb.svg"},97061:function(t,e,s){t.exports=s.p+"img/wyre.72783911.svg"}}]);