"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[976],{5976:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-cover bg-welcome-background flex flex-col flex-grow h-full justify-between"},[s("div",{staticClass:"flex flex-col mt-12 px-12"},[s("div",{staticClass:"flex-grow"}),s("div",{staticClass:"font-bold px-8 text-3xl text-left text-white"},[e._v(e._s(e.$t("general.welcome")))]),s("div",{staticClass:"font-bold mb-8 px-8 text-3xl text-left text-yellow"},[e._v(" "+e._s(e.$t("views.welcomeView.walletSlogan"))+" ")]),s("div",{staticClass:"leading-7 mb-2 mx-8 text-left text-text-alt"},[s("span",[e._v(e._s(e.$t("general.supported"))+":")]),s("ul",{staticClass:"list-disc ml-5"},e._l(e.supportedTechs,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("div",{staticClass:"flex flex-col mt-4"},[s("primary-button",{staticClass:"flex-1 mb-8 mt-8 t-welcome_view-create_new_wallet",attrs:{title:e.$t("general.createNewWallet")},on:{click:e.generateNewAddress}}),s("outlined-button",{staticClass:"flex-1 mb-8 t-welcome_view-restore_wallet",attrs:{title:e.$t("general.restoreWallet")},on:{click:function(t){return e.$router.push({name:"Restore"})}}})],1)]),s("footer",{staticClass:"bg-gray px-12 py-5 text-text-alt text-xs w-full"},[s("p",[s("span",[e._v(" "+e._s(e.$t("termsOfService.walletProvider")+" "+e.$t("termsOfService.byProceeding"))+" ")]),s("a",{staticClass:"t-welcome_view-tos text-spectrum-blue underline",attrs:{href:"https://www.opera.com/terms/crypto",rel:"noopener noreferrer",target:"_blank"}},[e._v(" "+e._s(e.$t("termsOfService.termsOfService"))+" ")])])])])},a=[],r=(s(57658),s(2424)),l=s(90108),o=s(56258),n={name:"WelcomeView",components:{OutlinedButton:r.Z,PrimaryButton:l.Z},beforeRouteEnter(e,t,s){s((e=>{e.$store.dispatch("setOnboardingOngoing",!1)}))},beforeRouteLeave(e,t,s){this.$store.dispatch("setOnboardingOngoing",!0),s()},computed:{supportedTechs(){return["Bitcoin",this.$t("views.welcomeView.supported.bnbChain"),this.$t("views.welcomeView.supported.ethereumNetwork"),this.$t("views.welcomeView.supported.polygonNetwork"),"Fantom","FIO","NEAR","MultiversX",this.$t("views.welcomeView.supported.ethCoin"),this.$t("views.welcomeView.supported.maticCoin"),this.$t("views.welcomeView.supported.erc20Tokens"),this.$t("views.welcomeView.supported.erc721Tokens"),this.$t("views.welcomeView.supported.erc1155Tokens")]}},mounted(){this.$store.dispatch("setDefaultEnabledNetworks")},methods:{async generateNewAddress(){await o.Z.sendStatsEvent(o.Z.types.CLICK,"wt_create_btn");try{this.$progress.show(),this.$authenticator.lockAuthenticatorWithPassword(),await this.$wallet.createNewWallet(),await this.$store.dispatch("cleanWalletData"),await this.$store.dispatch("getAccounts"),await this.$notifications.subscribeAll(this.$store.getters.enabledChains,this.$store.getters.accountsByCoinType),await this.$router.push({name:"BackupRevealWarning"}),await o.Z.sendStatsEvent(o.Z.types.CLICK,"wallet_created")}catch{this.$authenticator.clearSecretAndUnlockAuthenticator(),await o.Z.sendStatsEvent(o.Z.types.CLICK,"wt_setpwd_fail",{error:"Error creating wallet"})}finally{this.$progress.hide()}}}},c=n,w=s(1001),u=(0,w.Z)(c,i,a,!1,null,"4902b45c",null),p=u.exports}}]);