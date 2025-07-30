(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[8792],{8379:()=>{},19853:(e,n,t)=>{"use strict";var r=t(31085),i=t(69920),o=t(1048).Buffer;try{3===o.from([1,2,3]).length&&(i.Mn.Buffer=o)}catch{}var s=t(10366),a=t(70020),l=t.n(a),c=t(24690),d=t(73408),u=t(37456),p=t(60184);const m=function(){const e=s.A.parse(location.href.split("?")[1]);if(e.rpc){(0,p.vA)(!Array.isArray(e.rpc),"Invalid WS endpoint specified");const n=decodeURIComponent(e.rpc.split("#")[0]);return(0,p.vA)(n.startsWith("ws://")||n.startsWith("wss://")||n.startsWith("light://"),"Non-prefixed ws/wss/light url"),n}const n=(0,c.Xi)(()=>""),{ipnsChain:t}=(0,d.a)();if(t){const e=n.find(({dnslink:e})=>e===t);if(e)return e.value}const r=l().get("settings")||{},i=n.find(({value:e})=>!!e);return[r.apiUrl,void 0].includes(u.W.apiUrl)?u.W.apiUrl:i?i.value:"ws://127.0.0.1:9944"}();u.W.set({apiUrl:m}),function(e){e.startsWith("light://")?console.log("Light endpoint=",e.replace("light://","")):console.log("WS endpoint=",e)}(m),t(91516);var g=t(14041),h=t(25873),f=t(73657),x=t(65180),v=t(10005),y=t(99524),b=t(38994),k=t(10551),A=t(63736),w=t(76385),C=t(56482),j=t(57295),N=t(64077),I=t(26689),U=t(85121),S=t(61020),$=t(48463),R=t(18690),W=t(45912),q=t(54668);function E(e){return{Component:W.A,display:{needsApi:[]},group:"accounts",icon:"users",name:"accounts",text:e("nav.accounts","Accounts",{ns:"apps-routing"}),useCounter:q.A}}var T=t(10608);function M(e){return{Component:T.A,display:{needsApi:[]},group:"accounts",icon:"address-card",name:"addresses",text:e("nav.addresses","Address book",{ns:"apps-routing"})}}var B=t(49161),z=t(5939);function D(e){return{Component:B.A,display:{needsApi:["tx.alliance.joinAlliance"]},group:"governance",icon:"people-group",name:"alliance",text:e("nav.alliance","Alliance",{ns:"apps-routing"}),useCounter:z.A}}var F=t(30868),O=t(98487);function P(e){return{Component:F.A,display:{needsApi:["tx.ambassadorCollective.vote","tx.ambassadorReferenda.submit","consts.ambassadorReferenda.tracks"]},group:"governance",icon:"user-friends",name:"ambassador",text:e("nav.ambassador","Ambassador",{ns:"apps-routing"}),useCounter:O.A}}var H=t(2456);function L(e){return{Component:H.A,display:{needsApi:["tx.assets.setMetadata","tx.assets.transferKeepAlive"]},group:"network",icon:"shopping-basket",name:"assets",text:e("nav.assets","Assets",{ns:"apps-routing"})}}var Y=t(92362),G=t(63057);function V(e){return{Component:Y.A,display:{needsApi:[["tx.bounties.proposeBounty","tx.treasury.proposeBounty"]]},group:"governance",icon:"coins",name:"bounties",text:e("nav.bounties","Bounties",{ns:"apps-routing"}),useCounter:G.A}}var _=t(19956);function X(e){return{Component:_.A,display:{needsApi:["query.broker.status"],needsApiInstances:!0},group:"network",icon:"flask",name:"broker",text:e("nav.broker","Coretime Broker",{ns:"app-broker"})}}var J=t(76604);function Z(e){return{Component:J.A,display:{needsApi:[]},group:"network",icon:"calendar-alt",name:"calendar",text:e("nav.calendar","Event calendar",{ns:"apps-routing"})}}var K=t(15423),Q=t(74831),ee=t(40824),ne=t(37992),te=t(1048).Buffer;function re(){try{if(!te.from([1,2,3])?.length)return console.error("ERROR: Unable to construct Buffer object for claims module"),!1;if(!ee.Ze||!te.isBuffer((0,ne.e)(new Uint8Array([1,2,3]))))return console.error("ERROR: Unable to use u8aToBuffer for claims module"),!1}catch{return console.error("ERROR: Fatal error in working with Buffer module"),!1}return!0}function ie(e){return{Component:K.A,display:{needsAccounts:!0,needsApi:["tx.claims.mintClaim"],needsApiCheck:re},group:"accounts",icon:"star",name:"claims",text:e("nav.claims","Claim Tokens",{ns:"apps-routing"}),useCounter:Q.A}}var oe=t(33202);function se(e){return{Component:oe.A,display:{needsApi:["query.collatorSelection.candidacyBond"]},group:"network",icon:"timeline",name:"collators",text:e("nav.collator","Collators",{ns:"apps-routing"})}}var ae=t(9791);function le(e){try{return(0,p.Z8)(6===e.tx.contracts.instantiateWithCode.meta.args.length,"Invalid args")}catch{return console.warn("Contract interface does not support storageDepositLimit, disabling route"),!1}}function ce(e){return{Component:ae.A,display:{needsAccounts:!0,needsApi:["tx.contracts.instantiateWithCode"],needsApiCheck:le},group:"developer",icon:"compress",name:"contracts",text:e("nav.contracts","Contracts",{ns:"apps-routing"})}}var de=t(56876);function ue(e){return{Component:de.A,display:{needsApi:["query.coretimeAssignmentProvider.coreDescriptors"],needsApiInstances:!0},group:"network",icon:"flask",name:"coretime",text:e("nav.coretime","Coretime",{ns:"apps-routing"})}}var pe=t(61014),me=t(32125);function ge(e){return{Component:pe.A,display:{needsApi:["query.council.prime"],needsApiInstances:!0},group:"governance",icon:"building",name:"council",text:e("nav.council","Council",{ns:"apps-routing"}),useCounter:me.A}}var he=t(76869),fe=t(81035);function xe(e){try{return e.tx.democracy.vote(1,{Standard:{balance:1,vote:{aye:!0,conviction:1}}}),!0}catch{return console.warn("Unable to create referendum vote transaction, disabling democracy route"),!1}}function ve(e){return{Component:he.A,display:{needsApi:["tx.democracy.propose"],needsApiCheck:xe},group:"governance",icon:"calendar-check",name:"democracy",text:e("nav.democracy","Democracy",{ns:"apps-routing"}),useCounter:fe.A}}var ye=t(52262);function be(e){return{Component:ye.A,display:{needsApi:[]},group:"network",icon:"braille",name:"explorer",text:e("nav.explorer","Explorer",{ns:"apps-routing"})}}var ke=t(70464);function Ae(e){return{Component:ke.A,display:{needsApi:[]},group:"developer",icon:"envelope-open-text",name:"extrinsics",text:e("nav.extrinsics","Extrinsics",{ns:"apps-routing"})}}var we=t(24736),Ce=t(31539);function je(e){return{Component:we.A,display:{needsApi:["tx.fellowshipCollective.vote","tx.fellowshipReferenda.submit","consts.fellowshipReferenda.tracks"]},group:"governance",icon:"people-arrows",name:"fellowship",text:e("nav.fellowship","Fellowship",{ns:"apps-routing"}),useCounter:Ce.A}}var Ne=t(79294);function Ie(e){return{Component:Ne.A,display:{needsAccounts:!0,needsApi:[]},group:"developer",icon:"file",name:"files",text:e("nav.files","Files (IPFS)",{ns:"apps-routing"})}}var Ue=t(60086);function Se(e){return{Component:Ue.A,display:{needsApi:["tx.gilt.placeBid","query.proxy.proxies"]},group:"network",icon:"leaf",name:"gilt",text:e("nav.gilt","Gilt",{ns:"apps-routing"})}}var $e=t(41435);function Re(e){return{Component:$e.A,display:{needsApi:[]},group:"developer",icon:"code",name:"js",text:e("nav.js","JavaScript",{ns:"apps-routing"})}}var We=t(73403),qe=t(61544);function Ee(e){return{Component:We.A,display:{needsAccounts:!0,needsApi:["query.membership.members"]},group:"governance",icon:"people-carry",name:"membership",text:e("nav.membership","Membership",{ns:"apps-routing"}),useCounter:qe.A}}var Te=t(30265);function Me(e){return{Component:Te.A,display:{needsApi:["tx.uniques.create"]},group:"network",icon:"shopping-cart",name:"nfts",text:e("nav.nfts","NFTs",{ns:"apps-routing"})}}var Be=t(94844);function ze(e){return{Component:Be.A,display:{needsApi:["tx.nis.placeBid","query.proxy.proxies"]},group:"network",icon:"leaf",name:"nis",text:e("nav.nis","Non-interactive Staking",{ns:"apps-routing"})}}var De=t(89685);function Fe(e){return{Component:De.A,display:{needsApi:[["query.paras.parachains"]]},group:"network",icon:"link",name:"parachains",text:e("nav.parachains","Parachains",{ns:"apps-routing"})}}var Oe=t(96110);function Pe(e){return{Component:Oe.A,display:{needsAccounts:!0,needsApi:["tx.poll.vote"]},group:"governance",icon:"podcast",name:"poll",text:e("nav.poll","Token poll",{ns:"apps-routing"})}}var He=t(42011);function Le(e){return{Component:He.A,display:{needsAccounts:!0,needsApi:["query.preimage.statusFor","tx.preimage.notePreimage"]},group:"governance",icon:"panorama",name:"preimages",text:e("nav.preimages","Preimages",{ns:"apps-routing"})}}var Ye=t(12638),Ge=t(16934);function Ve(e){return{Component:Ye.A,display:{needsAccounts:!0,needsApi:["tx.rankedCollective.vote","tx.rankedPolls.submit"]},group:"governance",icon:"people-arrows",name:"ranked",text:e("nav.ranked","Ranked collective",{ns:"apps-routing"}),useCounter:Ge.A}}var _e=t(76381),Xe=t(66530);function Je(e){return{Component:_e.A,display:{needsApi:["tx.referenda.submit","tx.convictionVoting.vote","consts.referenda.tracks"]},group:"governance",icon:"person-booth",name:"referenda",text:e("nav.referenda","Referenda",{ns:"apps-routing"}),useCounter:Xe.A}}var Ze=t(87373);function Ke(e){return{Component:Ze.A,display:{needsApi:[]},group:"developer",icon:"network-wired",name:"rpc",text:e("nav.rpc","RPC calls",{ns:"apps-routing"})}}var Qe=t(284);function en(e){return{Component:Qe.A,display:{needsApi:[]},group:"developer",icon:"arrows-to-circle",name:"runtime",text:e("nav.runtime","Runtime calls",{ns:"apps-routing"})}}var nn=t(98343);function tn(e){return{Component:nn.A,display:{needsApi:["query.scheduler.agenda"]},group:"network",icon:"clock",name:"scheduler",text:e("nav.scheduler","Scheduler",{ns:"apps-routing"})}}var rn=t(97629),on=t(36583);function sn(e){return{Component:rn.A,display:{},group:"settings",icon:"cogs",name:"settings",text:e("nav.settings","Settings",{ns:"apps-routing"}),useCounter:on.A}}var an=t(31732);function ln(e){return{Component:an.A,display:{needsAccounts:!0,needsApi:[]},group:"developer",icon:"signature",name:"signing",text:e("nav.signing","Sign and verify",{ns:"apps-routing"})}}var cn=t(72434),dn=t(54362);function un(e){return{Component:cn.A,display:{needsAccounts:!0,needsApi:["query.society.pot"]},group:"network",icon:"hand-spock",name:"society",text:e("nav.society","Society",{ns:"apps-routing"}),useCounter:dn.A}}var pn=t(78634),mn=t(27010),gn=t(21771),hn=t(74873);function fn(e){try{const{nominatorCount:n,own:t,pageCount:r,total:i}=e.registry.createType((0,gn.f)(e.registry,e.query.staking.erasStakersOverview.creator.meta.type),{nominatorCount:hn.Uu,own:hn.Uu,pageCount:hn.Uu,total:hn.Uu});(0,p.vA)(i&&t&&n&&r&&i.eq(hn.Uu)&&t.eq(hn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(mn.fY,hn.Uu,{Account:mn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(hn.Uu,{Account:mn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}try{const n=e.registry.createType((0,gn.f)(e.registry,e.query.staking.claimedRewards.creator.meta.type),[0]);(0,p.vA)(n.eq([0]),"Needs a legacyClaimedRewards array")}catch{return console.warn("No known legacyClaimedRewards or claimedRewards inside staking ledger, disabling staking route"),!1}return!0}function xn(e){return{Component:pn.A,display:{needsApi:["query.staking.erasStakersOverview","tx.staking.bond"],needsApiCheck:fn},group:"network",icon:"certificate",name:"staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var vn=t(16675);function yn(e){try{const{others:[{value:n,who:t}],own:r,total:i}=e.registry.createType((0,gn.f)(e.registry,e.query.staking.erasStakers.creator.meta.type),{others:[{value:hn.Uu,who:mn.fY}],own:hn.Uu,total:hn.Uu});(0,p.vA)(i&&r&&n&&t&&i.eq(hn.Uu)&&r.eq(hn.Uu)&&n.eq(hn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(mn.fY,hn.Uu,{Account:mn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(hn.Uu,{Account:mn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}return!0}function bn(e){return{Component:vn.A,display:{isHidden:!0,needsApi:["query.session.validators","query.staking.erasStakers","tx.staking.bond"],needsApiCheck:yn},group:"network",icon:"certificate",name:"test-staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var kn=t(4182);function An(e){if("function"==typeof e.query.staking.erasStakersOverview)return!1;try{const{others:[{value:n,who:t}],own:r,total:i}=e.registry.createType((0,gn.f)(e.registry,e.query.staking.erasStakers.creator.meta.type),{others:[{value:hn.Uu,who:mn.fY}],own:hn.Uu,total:hn.Uu});(0,p.vA)(i&&r&&n&&t&&i.eq(hn.Uu)&&r.eq(hn.Uu)&&n.eq(hn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(mn.fY,hn.Uu,{Account:mn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(hn.Uu,{Account:mn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}try{const n=e.registry.createType((0,gn.f)(e.registry,e.query.staking.ledger.creator.meta.type),{claimedRewards:[1,2,3]});if(n.claimedRewards)(0,p.vA)(n.claimedRewards.eq([1,2,3]),"Needs a claimedRewards array");else{const n=e.registry.createType((0,gn.f)(e.registry,e.query.staking.ledger.creator.meta.type),{legacyClaimedRewards:[1,2,3]});(0,p.vA)(n.legacyClaimedRewards.eq([1,2,3]),"Needs a legacyClaimedRewards array")}}catch{return console.warn("No known legacyClaimedRewards or claimedRewards inside staking ledger, disabling staking route"),!1}return!0}function wn(e){return{Component:kn.A,display:{needsApi:["query.staking.erasStakers","tx.staking.bond"],needsApiCheck:An},group:"network",icon:"certificate",name:"legacy-staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var Cn=t(39006);function jn(e){return{Component:Cn.A,display:{needsApi:[]},group:"developer",icon:"database",name:"chainstate",text:e("nav.storage","Chain state",{ns:"apps-routing"})}}var Nn=t(30889);function In(e){return{Component:Nn.A,display:{needsAccounts:!0,needsApi:["tx.sudo.setKey"],needsSudo:!0},group:"developer",icon:"unlock",name:"sudo",text:e("nav.sudo","Sudo",{ns:"apps-routing"})}}var Un=t(24910),Sn=t(34857);function $n(e){return{Component:Un.A,display:{needsAccounts:!0,needsApi:["query.technicalCommittee.members"],needsApiInstances:!0},group:"governance",icon:"microchip",name:"techcomm",text:e("nav.tech-comm","Tech. comm.",{ns:"apps-routing"}),useCounter:Sn.A}}var Rn=t(51198);function Wn(e){return{Component:Rn.A,Modal:Rn.A,display:{isHidden:!1,needsAccounts:!0,needsApi:[["tx.xcm.teleportAssets","tx.xcmPallet.teleportAssets","tx.polkadotXcm.teleportAssets","tx.xcm.limitedTeleportAssets","tx.xcmPallet.limitedTeleportAssets","tx.polkadotXcm.limitedTeleportAssets"]],needsTeleport:!0},group:"accounts",icon:"share-square",name:"teleport",text:e("nav.teleport","Teleport",{ns:"apps-routing"})}}function qn(e){return{Component:N.XU,Modal:N.XU,display:{isHidden:!1,needsAccounts:!0,needsApi:["tx.balances.transferKeepAlive"]},group:"accounts",icon:"paper-plane",name:"transfer",text:e("nav.transfer","Transfer",{ns:"apps-routing"})}}var En=t(66881),Tn=t(33107);function Mn(e){return{Component:En.A,display:{needsApi:["query.treasury.proposals"]},group:"governance",icon:"gem",name:"treasury",text:e("nav.treasury","Treasury",{ns:"apps-routing"}),useCounter:Tn.A}}var Bn=t(11502);function zn(e){return{Component:Bn.A,display:{needsApi:[]},group:"developer",icon:"wrench",name:"utilities",text:e("nav.utilities","Utilities",{ns:"apps-routing"})}}var Dn=t(75392);function Fn(e){return{Component:Dn.A,display:{needsAccounts:!0,needsApi:["tx.whitelist.removeWhitelistedCall"]},group:"governance",icon:"list-check",name:"whitelist",text:e("nav.whitelist","Whitelist",{ns:"apps-routing"})}}function On(e){return[E(e),M(e),be(e),ie(e),Pe(e),qn(e),Wn(e),xn(e),bn(e),wn(e),se(e),X(e),ue(e),Je(e),Ee(e),D(e),P(e),je(e),Ve(e),Le(e),Fn(e),ve(e),ge(e),$n(e),Mn(e),V(e),Fe(e),L(e),Me(e),un(e),ze(e),Se(e),tn(e),Z(e),ce(e),jn(e),Ae(e),Ke(e),en(e),ln(e),In(e),Ie(e),Re(e),zn(e),sn(e)]}var Pn=t(51999),Hn=t(29133),Ln=t(92222),Yn=t(9069);function Gn(e,n,t){const[r,i,o]=n.split("."),[s]=t&&e.registry.getModuleInstances(e.runtimeVersion.specName.toString(),i)||[i],a=e[r][s]?s:i;try{return"consts"===r?(0,Ln.G)(e[r][a][o]):(0,Yn.T)(e[r][a][o])}catch{return!1}}function Vn(e,n,t=!1,r){if(!n)return[];const i=n.filter(n=>!(Array.isArray(n)?n.reduce((n,r)=>n||Gn(e,r,t),!1):Gn(e,n,t)));return i.length||!r||r(e)?i:["needsApiCheck"]}var _n=t(37140);function Xn(){return(0,_n.Bd)("apps")}const Jn=g.memo(function({basePath:e,missingApis:n=[]}){return console.log(`Redirecting from route "${e}" to "/explorer"${n.length?`, missing the following APIs: ${JSON.stringify(n)}`:""}`),(0,r.jsx)(R.C5,{to:"/explorer"})});var Zn=t(97186),Kn=t(1510),Qn=t(13231),et=t(39906);let nt;const tt=g.memo(function({optionsAll:e}){const{queueAction:n}=(0,Pn.x)(),{api:t,isApiReady:i}=(0,S.g)(),{allAccounts:o}=(0,Zn.o)(),{t:s}=Xn(),a=(0,Kn.Gc)(i&&t.query.system?.events);return(0,g.useEffect)(()=>{const t=function(e,n,t,r){const i=(0,et.E)((0,Qn.j)(JSON.stringify(r)));return t&&r&&i!==nt?(nt=i,r.map(({event:{data:t,method:r,section:i}})=>{if("balances"===i&&"Transfer"===r){const o=t[1].toString();if(e.includes(o))return{account:o,action:`${i}.${r}`,message:n("transfer received"),status:"event"}}else if("democracy"===i){const e=t[0].toString();return{action:`${i}.${r}`,message:n("update on #{{index}}",{replace:{index:e}}),status:"event"}}return null}).filter(e=>!!e)):null}(o,s,e,a);t&&n(t)},[o,a,e,n,s]),(0,r.jsx)(N.nW,{})}),rt={Component:Jn,display:{},group:"settings",icon:"times",isIgnored:!1,name:"unknown",text:"Unknown"},it=N.I4.div`
  flex-grow: 1;
  overflow: hidden auto;
  padding: 0 0 1rem 0;
  position: relative;
  width: 100%;

  .connecting {
    padding: 3.5rem 0;
  }

  & main > *:not(header):not(.hasOwnMaxWidth) {
    max-width: var(--width-full);
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 1.5rem;

    @media only screen and (max-width: 1100px) {
      padding: 0 1rem;
    }

    @media only screen and (max-width: 800px) {
      padding: 0 0.75rem;
    }
  }
`,ot=g.memo(function({className:e}){const n=(0,R.zy)(),{t}=Xn(),{api:i,isApiConnected:o,isApiReady:s,isDevelopment:a}=(0,S.g)(),{queueAction:l}=(0,Pn.x)(),{Component:c,display:{needsApi:d,needsApiCheck:u,needsApiInstances:p},icon:m,name:h,text:f}=(0,g.useMemo)(()=>{const e=n.pathname.slice(1)||"";return On(t).find(n=>n&&e.startsWith(n.name)&&(a||!n.display.isDevelopment))||rt},[a,n,t]),x=(0,g.useMemo)(()=>d?s&&o?Vn(i,d,p,u):null:[],[i,o,s,d,u,p]);return(0,r.jsx)(it,{className:e,children:x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Suspense,{fallback:"...",children:(0,r.jsx)(N.tH,{trigger:h,children:(0,r.jsx)(Hn.I.Provider,{value:{icon:m,text:f},children:x.length?(0,r.jsx)(Jn,{basePath:`/${h}`,location:n,missingApis:x,onStatusChange:l}):(0,r.jsx)(c,{basePath:`/${h}`,location:n,onStatusChange:l})})})}),(0,r.jsx)(tt,{})]}):(0,r.jsx)("div",{className:"connecting",children:(0,r.jsx)(N.y$,{label:t("Initializing connection")})})})});var st=t(44377),at=t(5757),lt=t(70280),ct=t(60078),dt=t(74826),ut=t(77958),pt=t(73630);const mt=(0,N.I4)(N.lM)`
  padding: 0.25rem;
  text-align: right;

  > label {
    max-width: 12.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,gt=g.memo(function({apiUrl:e,className:n,label:t,setApiUrl:i,url:o}){const s=(0,g.useCallback)(()=>i(o),[i,o]);return(0,r.jsx)(mt,{className:n,isRadio:!0,label:t,onChange:s,value:e===o})}),ht=N.I4.div`
  border-left: 0.25rem solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 0 0.25rem 0;
  padding: 0.375rem 0.5rem 0.375rem 1rem;
  position: relative;

  &.isUnreachable {
    opacity: var(--opacity-light);
  }

  &.isSelected,
  &:hover {
    background: var(--bg-table);
  }

  .endpointSection {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: relative;

    &+.ui--Toggle {
      margin-top: 1rem;
    }

    &.isChild .endpointIcon {
      margin-left: 1.25rem;
    }

    &+.endpointProvider {
      margin-top: -0.125rem;
    }

    .endpointValue {
      .endpointExtra {
        font-size: var(--font-size-small);
        opacity: var(--opacity-light);
      }
    }
  }

  // we jiggle our labels somewhat...
  label {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    text-transform: none;
  }
`,ft=g.memo(function({apiUrl:e,className:n="",setApiUrl:t,value:{isChild:i,isRelay:o,isUnreachable:s,name:a,nameRelay:l,paraId:c,providers:d,ui:u}}){const{t:p}=Xn(),m=(0,g.useMemo)(()=>d.some(({url:n})=>n===e),[e,d]),h=(0,g.useCallback)(()=>{const e=d.filter(({url:e})=>!e.startsWith("light://"));return t(a,e[Math.floor(Math.random()*e.length)].url)},[a,d,t]),f=(0,g.useCallback)(e=>t(a,e),[a,t]);return(0,r.jsxs)(ht,{className:`${n}${m?" isSelected highlight--border":""}${s?" isUnreachable":""}`,children:[(0,r.jsxs)("div",{className:"endpointSection"+(i?" isChild":""),onClick:s?void 0:h,children:[(0,r.jsx)(N.nZ,{className:"endpointIcon",isInline:!0,logo:u.logo||"empty",withoutHl:!0}),(0,r.jsxs)("div",{className:"endpointValue",children:[(0,r.jsx)("div",{children:a}),m&&(o||!!c)&&(0,r.jsx)("div",{className:"endpointExtra",children:o?p("Relay chain"):p(c&&c<1e3?"{{relay}} System":c&&c<2e3?"{{relay}} Common":"{{relay}} Parachain",{replace:{relay:l}})})]})]}),m&&d.map(({name:n,url:t})=>(0,r.jsx)(gt,{apiUrl:e,label:n,setApiUrl:f,url:t},t))]})}),xt=N.I4.div`
  .groupHeader {
    border-radius: 0.25rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.75rem 1rem;
    position: relative;
    text-transform: uppercase;

    &:hover {
      background: var(--bg-table);
    }

    &.isSpaced {
      margin-top: 0.75rem;
    }

    .ui--Icon {
      margin-right: 0.5rem;
    }
  }

  .groupNetworks {
    padding: 0.25rem 0 0.5rem 1rem;
  }
`,vt=g.memo(function({affinities:e,apiUrl:n,children:t,className:i="",index:o,isSelected:s,setApiUrl:a,setGroup:l,value:{header:c,isSpaced:d,networks:u}}){const p=(0,g.useCallback)(()=>l(s?-1:o),[o,s,l]),m=(0,g.useMemo)(()=>u.filter(({isUnreachable:e})=>!e),[u]);return(0,r.jsxs)(xt,{className:`${i}${s?" isSelected":""}`,children:[(0,r.jsxs)("div",{className:"groupHeader"+(d?" isSpaced":""),onClick:p,children:[(0,r.jsx)(N.In,{icon:s?"caret-up":"caret-down"}),c]}),s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"groupNetworks",children:m.map((t,i)=>(0,r.jsx)(ft,{affinity:e[t.name],apiUrl:n,setApiUrl:a,value:t},i))}),t]})]})}),yt="network:affinities";function bt(e){return e.reduce((e,n)=>{if(n.isHeader)e.push({header:n.text,isDevelopment:n.isDevelopment,isSpaced:n.isSpaced,networks:[]});else{const t=e[e.length-1],r={isLightClient:n.isLightClient,name:n.textBy,url:n.value};t.networks[t.networks.length-1]&&n.text===t.networks[t.networks.length-1].name?t.networks[t.networks.length-1].providers.push(r):n.isUnreachable||t.networks.push({isChild:n.isChild,isRelay:!!n.genesisHash,name:n.text,nameRelay:n.textRelay,paraId:n.paraId,providers:[r],ui:n.ui})}return e},[])}function kt(){try{const e=localStorage.getItem(ut.UC);if(e)return JSON.parse(e)}catch(e){console.error(e)}return[]}function At(e,n){let t=n.findIndex(({networks:n})=>n.some(({providers:n})=>n.some(({url:n})=>n===e)));return-1===t&&(t=n.findIndex(({isDevelopment:e})=>e)),{apiUrl:e,groupIndex:t,hasUrlChanged:u.W.get().apiUrl!==e,isUrlValid:(r=e,r.length>=7&&(r.startsWith("ws://")||r.startsWith("wss://")||r.startsWith("light://")))};var r}const wt=(0,N.I4)(N.Bx)`
  color: var(--color-text);
  padding-top: 3.5rem;

  .customButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .endpointCustom {
    input {
      padding-right: 4rem;
    }
  }

  .endpointCustomWrapper {
    position: relative;
  }
`,Ct=g.memo(function({className:e="",offset:n,onClose:t}){const{t:i}=Xn(),o=(0,c.Xi)(i),{isLocalFork:s}=(0,S.g)(),[a,d]=(0,g.useState)(()=>bt(o)),[{apiUrl:p,groupIndex:m,hasUrlChanged:h,isUrlValid:f},x]=(0,g.useState)(()=>At(u.W.get().apiUrl,a)),[v,y]=(0,g.useState)(()=>kt()),[b,k]=(0,g.useState)(()=>function(e){return Object.entries(l().get(yt)||{}).filter(([n,t])=>e.some(({networks:e})=>e.some(({name:e,providers:r})=>e===n&&r.some(({url:e})=>e===t)))).reduce((e,[n,t])=>({...e,[n]:t}),{})}(a)),A=(0,g.useRef)(null),w=(0,g.useMemo)(()=>{let e=!1;return o.some(n=>n.value===p&&(e=!0,!0)),e},[p,o]),C=(0,g.useMemo)(()=>{let e=!1;return v.some(n=>n===p&&(e=!0,!0)),e},[p,v]),j=(0,g.useCallback)(e=>x(n=>({...n,groupIndex:e})),[]),I=(0,g.useCallback)(()=>{if(!C)return;const e=v.filter(e=>e!==p);try{localStorage.setItem(ut.UC,JSON.stringify(e)),d(bt((0,c.Xi)(i))),y(kt())}catch(e){console.error(e)}},[p,C,v,i]),U=(0,g.useCallback)((e,n)=>{k(t=>{const r={...t,[e]:n};return l().set(yt,r),r}),x(At(n,a))},[a]),$=(0,g.useCallback)(e=>{(0,pt.E)(e)||(e=dt.Ay.toASCII(e)),x(At(e,a))},[a]),R=(0,g.useCallback)(()=>{l().set("localFork",""),u.W.set({...u.W.get(),apiUrl:p}),window.location.assign(`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(p)}${window.location.hash}`),h||window.location.reload(),t()},[p,t,h]),W=(0,g.useCallback)(()=>{l().set("localFork",p),u.W.set({...u.W.get(),apiUrl:p}),window.location.assign(`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(p)}${window.location.hash}`),h||window.location.reload(),t()},[p,t,h]),q=(0,g.useCallback)(()=>{try{localStorage.setItem(ut.UC,JSON.stringify([...v,p])),R()}catch(e){console.error(e)}},[R,p,v]),E=(0,g.useMemo)(()=>function(e,n,t,r){return e?!n.startsWith("light://")&&!t:!r}(h,p,f,s),[h,p,f,s]),T=(0,g.useMemo)(()=>function(e,n,t,r){return e?!!n.startsWith("light://")||!t:!!r}(h,p,f,s),[h,p,f,s]);return(0,r.jsx)(wt,{buttons:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.$n,{icon:"code-fork",isDisabled:T,label:i("Fork Locally"),onClick:W,tooltip:"fork-locally-btn"}),(0,r.jsx)(N.$n,{icon:"sync",isDisabled:E,label:i("Switch"),onClick:R})]}),className:e,offset:n,onClose:t,position:"left",sidebarRef:A,children:a.map((e,n)=>(0,r.jsx)(vt,{affinities:b,apiUrl:p,index:n,isSelected:m===n,setApiUrl:U,setGroup:j,value:e,children:e.isDevelopment&&(0,r.jsxs)("div",{className:"endpointCustomWrapper",children:[(0,r.jsx)(N.pd,{className:"endpointCustom",isError:!f,isFull:!0,label:i("custom endpoint"),onChange:$,value:p}),C?(0,r.jsx)(N.$n,{className:"customButton",icon:"trash-alt",onClick:I}):(0,r.jsx)(N.$n,{className:"customButton",icon:"save",isDisabled:!f||w,onClick:q})]})},n))})}),jt=N.I4.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 0;
  margin: 0;

  .apps--SideBar-logo-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.isClickable {
      cursor: pointer;
    }

    .ui--ChainImg {
      height: 3rem;
      margin-right: 0.5rem;
      width: 3rem;
    }

    .ui--Icon.dropdown,
    > div.info {
      text-align: right;
      vertical-align: middle;
    }

    .ui--Icon.dropdown {
      flex: 0;
      margin: 0;
      width: 1rem;
    }

    .info {
      flex: 1;
      font-size: var(--font-size-tiny);
      line-height: 1.2;
      padding-right: 0.5rem;
      text-align: right;

      .chain {
        font-size: var(--font-size-small);
        max-width: 16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .runtimeVersion {
        letter-spacing: -0.01em;
      }
    }
  }
`,Nt=g.memo(function({className:e}){const{api:n,isApiReady:t}=(0,S.g)(),i=(0,Kn.Gc)(t&&n.rpc.state.subscribeRuntimeVersion),{ipnsChain:o}=(0,d.c)(),[s,a]=(0,at.e)(),l=!o;return(0,r.jsxs)(jt,{className:e,children:[(0,r.jsxs)("div",{className:`apps--SideBar-logo-inner${l?" isClickable":""} highlight--color-contrast`,onClick:a,children:[(0,r.jsx)(N.nZ,{}),(0,r.jsxs)("div",{className:"info media--1000",children:[(0,r.jsx)(lt.A,{className:"chain"}),i&&(0,r.jsxs)("div",{className:"runtimeVersion",children:[i.specName.toString(),"/",i.specVersion.toNumber()]}),(0,r.jsx)(ct.A,{className:"bestNumber",label:"#"})]}),l&&(0,r.jsx)(N.In,{className:"dropdown",icon:s?"caret-right":"caret-down"})]}),s&&(0,r.jsx)(Ct,{onClose:a})]})}),It=()=>0,Ut=N.I4.li`
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &.topLevel {
    font-weight: var(--font-weight-normal);
    line-height: 1.214rem;
    border-radius: 0.15rem;

    a {
      padding: 0.857rem 0.857em 0.857rem 1rem;
      line-height: 1.214rem;
      border-radius: 0.25rem;
    }

    &.isActive.highlight--color-contrast {
      font-weight: var(--font-weight-normal);
      color: var(--color-text);

      a {
        background-color: var(--bg-tabs);
      }
    }

    &.isActive {
      border-radius: 0.15rem 0.15rem 0 0;

      a {
        padding: 0.857rem 1.429rem 0.857rem;
        cursor: default;
      }

      &&.withCounter a {
        padding-right: 3.2rem;
      }
    }

    .ui--Badge {
      top: 0.7rem;
    }
  }

  &&.withCounter a {
    padding-right: 3.2rem;
  }

  a {
    color: inherit !important;
    display: block;
    padding: 0.5rem 1.15rem 0.57rem;
    text-decoration: none;
    line-height: 1.5rem;
  }

  .ui--Badge {
    position: absolute;
    right: 0.5rem;
  }

  .ui--Icon {
    margin-right: 0.5rem;
  }
`,St=g.memo(function({className:e="",classNameText:n,isLink:t,isToplevel:i,route:{Modal:o,href:s,icon:a,name:l,text:c,useCounter:d=It}}){const[u,p]=(0,at.e)(),m=d();return(0,r.jsxs)(Ut,{className:`${e} ui--MenuItem ${m?"withCounter":""} ${t?"isLink":""} ${i?"topLevel highlight--color-contrast":""}`,children:[(0,r.jsxs)("a",{href:o?void 0:s||`#/${l}`,onClick:o?p:void 0,rel:"noopener noreferrer",target:s?"_blank":void 0,children:[(0,r.jsx)(N.In,{icon:a}),(0,r.jsx)("span",{className:n,children:c}),!!m&&(0,r.jsx)(N.Ex,{color:"white",info:m})]}),o&&u&&(0,r.jsx)(o,{onClose:p})]})}),$t="rgba(34, 36, 38, 0.12)",Rt="5px",Wt=N.I4.li`
  cursor: pointer;
  position: relative;

  .groupHdr {
    border-radius: 0.25rem;
    padding: 0.857rem 1.375rem;
    font-weight: var(--font-weight-normal);
    line-height: 1.214rem;

    > .ui--Icon {
      margin-left: 0.75rem;
    }
  }

  &.isActive .groupHdr {
    background-color: var(--bg-tabs);
    font-weight: var(--font-weight-normal);
    margin-bottom: 0;
  }

  .groupMenu {
    border-radius: 0.25rem;
    box-shadow: 0 ${Rt} ${Rt} -${Rt} ${$t}, ${Rt} 0 ${Rt} -${Rt} ${$t}, -${Rt} 0 ${Rt} -${Rt} ${$t};
    display: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 2.9rem;
    z-index: 250;

    > li {
      z-index: 1;

      a {
        padding-right: 4rem;
      }
    }

    &::before {
      bottom: 0;
      content: ' ';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }

  &:hover {
    .groupHdr {
      box-shadow: 0px 4px 37px rgba(0, 0, 0, 0.08);
      padding-bottom: 2rem;
      margin-bottom: -2rem;
    }

    .groupMenu {
      display: block;

      > li:hover {
        background: var(--bg-menu-hover);
      }
    }
  }
`,qt=g.memo(function({className:e="",isActive:n,name:t,routes:i}){return 1===i.length&&"settings"===i[0].group?(0,r.jsx)(St,{className:n?"isActive":"",classNameText:"smallHide",isToplevel:!0,route:i[0]}):(0,r.jsxs)(Wt,{className:`${e} ${n?"isActive":""}`,children:[(0,r.jsxs)("div",{className:"groupHdr "+(n?"":"highlight--color-contrast"),children:[(0,r.jsx)("span",{className:"smallHide",children:t}),(0,r.jsx)(N.In,{className:"smallShow",icon:i[0].icon}),(0,r.jsx)(N.In,{icon:"caret-down"})]}),(0,r.jsx)("ul",{className:"groupMenu",children:i.map(e=>(0,r.jsx)(St,{route:e},e.name))})]})});var Et=t(53307),Tt=t(1010),Mt=t(66827);const Bt=N.I4.div`
  background: transparent;
  font-size: var(--font-size-tiny);
  line-height: 1.2;
  padding: 0 0 0 1rem;
  text-align: right;

  > div {
    margin-bottom: -0.125em;

    > div {
      display: inline-block;
    }
  }
`,zt=g.memo(function({className:e=""}){const{api:n,isApiReady:t}=(0,S.g)(),i=(0,Et.R)();return(0,r.jsxs)(Bt,{className:`${e} media--1400 highlight--color-contrast ui--NodeInfo`,children:[t&&(0,r.jsxs)("div",{className:"node",children:[(0,r.jsx)(Tt.A,{})," ",(0,r.jsx)(Mt.A,{label:"v"})]}),(0,r.jsx)("div",{children:n.libraryInfo.replace("@polkadot/","")}),(0,r.jsx)("div",{children:i})]})});const Dt=N.I4.div`
  width: 100%;
  padding: 0;
  z-index: 220;
  position: relative;

  .smallShow {
    display: none;
  }

  & .menuContainer {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    width: 100%;
    max-width: var(--width-full);
    margin: 0 auto;
  }

  &.isLoading {
    background: #999 !important;

    .menuActive {
      background: var(--bg-page);
    }

    &:before {
      filter: grayscale(1);
    }

    .menuItems {
      filter: grayscale(1);
    }
  }

  .menuSection {
    align-items: center;
    display: flex;
  }

  .menuActive {
    background: var(--bg-tabs);
    border-bottom: none;
    border-radius: 0.25rem 0.25rem 0 0;
    color: var(--color-text);
    padding: 1rem 1.5rem;
    margin: 0 1rem -1px;
    z-index: 1;

    .ui--Icon {
      margin-right: 0.5rem;
    }
  }

  .menuItems {
    flex: 1 1;
    list-style: none;
    margin: 0 1rem 0 0;
    padding: 0;

    > li {
      display: inline-block;
    }

    > li + li {
      margin-left: 0.375rem
    }
  }

  .ui--NodeInfo {
    align-self: center;
  }

  @media only screen and (max-width: 800px) {
    .groupHdr {
      padding: 0.857rem 0.75rem;
    }

    .smallShow {
      display: initial;
    }

    .smallHide {
      display: none;
    }

    .menuItems {
      margin-right: 0;

      > li + li {
        margin-left: 0.25rem;
      }
    }
  }
`,Ft=g.memo(function({className:e=""}){const{t:n}=Xn(),{allAccounts:t,hasAccounts:i}=(0,Zn.o)(),o=(0,S.g)(),{allowTeleport:s}=(0,st.n)(),a=(0,Kn.Gc)(o.isApiReady&&o.api.query.sudo?.key),l=(0,R.zy)(),c=(0,g.useRef)(function(e){return[{href:"https://github.com/polkadot-js/apps",icon:"code-branch",name:"github",text:e("nav.github","GitHub",{ns:"apps-routing"})},{href:"https://wiki.polkadot.network",icon:"book",name:"wiki",text:e("nav.wiki","Wiki",{ns:"apps-routing"})}]}(n)),d=(0,g.useRef)(On(n)),u=(0,g.useRef)({accounts:n("Accounts"),developer:n("Developer"),files:n("Files"),governance:n("Governance"),network:n("Network"),settings:n("Settings")}),p=(0,g.useMemo)(()=>!!a&&t.some(e=>a.eq(e)),[t,a]),m=(0,g.useMemo)(()=>function(e,n,t,r,i,o){return Object.values(e.reduce((e,t)=>(e[t.group]?e[t.group].routes.push(t):e[t.group]={name:n[t.group],routes:[t]},e),{})).map(({name:e,routes:n})=>({name:e,routes:n.filter(({display:e})=>function({api:e,isApiConnected:n,isApiReady:t,isDevelopment:r},i,o,s,{isDevelopment:a,isHidden:l,needsAccounts:c,needsApi:d,needsApiCheck:u,needsApiInstances:p,needsSudo:m,needsTeleport:g}){return!(l||c&&!o||d&&(!t||!n||m&&!s||g&&!i||!r&&a||0!==Vn(e,d,p,u).length))}(t,r,i,o,e))})).filter(({routes:e})=>e.length)}(d.current,u.current,o,s,i,p),[s,o,i,p]),h=(0,g.useMemo)(()=>d.current.find(({name:e})=>l.pathname.startsWith(`/${e}`))||null,[l]);return(0,r.jsx)(Dt,{className:`${e}${o.isApiReady&&o.isApiConnected?"":" isLoading"} highlight--bg`,children:(0,r.jsxs)("div",{className:"menuContainer",children:[(0,r.jsxs)("div",{className:"menuSection",children:[(0,r.jsx)(Nt,{}),(0,r.jsx)("ul",{className:"menuItems",children:m.map(({name:e,routes:n})=>(0,r.jsx)(qt,{isActive:!!h&&h.group===e.toLowerCase(),name:e,routes:n},e))})]}),(0,r.jsx)("div",{className:"menuSection media--1200",children:(0,r.jsx)("ul",{className:"menuItems",children:c.current.map(e=>(0,r.jsx)(St,{isLink:!0,isToplevel:!0,route:e},e.name))})}),(0,r.jsx)(zt,{className:"media--1400"})]})})}),Ot=N.I4.div`
  background: var(--bg-menu);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-left-width: 0.25rem;
  line-height: 1.5em;
  padding: 0 1rem;
  position: fixed;
  right: 0.75rem;
  top: 0.75rem;
  z-index: 500;

  &.isBottom {
    position: static;
    z-index: 0;
  }

  &.isFull {
    left: 0.75rem;
  }

  &.isPartial {
    max-width: 42rem;
    width: 42rem;

    .content {
      max-width: 50rem;
    }
  }

  &:before {
    border-radius: 0.25rem;
    bottom: 0;
    content: ' ';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &.isError {
    &:before {
      background: rgba(255, 12, 12, 0.05);
    }

    border-color: rgba(255, 12, 12, 1);
  }

  &.isInfo {
    &:before {
      background: rgba(255, 196, 12, 0.05);
    }

    border-color: rgba(255, 196, 12, 1);
  }

  .content {
    align-items: center;
    display: flex;
    margin: 0 auto;
    padding: 1em 3rem 1rem 0.5rem;
    position: relative;

    .contentIcon {
      flex: 0;
    }

    .contentItem {
      flex: 1;
      padding: 0 1rem;

      > div+div {
        margin-top: 0.5rem;
      }
    }
  }

  .closeIcon {
    cursor: pointer;
    position: absolute;
    right: 0em;
    top: 0.75rem;
  }
`,Pt=g.memo(function({children:e,className:n="",icon:t,isBottom:i=!1,isDev:o,isFull:s=!1,type:a}){const[l,c]=(0,at.e)(),d=(0,g.useCallback)(()=>{o&&localStorage.setItem("dev:notification",(new Date).toString()),c()},[o,c]);return(0,g.useEffect)(()=>{const e=localStorage.getItem("dev:notification");if(e){const n=new Date(e);n.setMonth(n.getMonth()+1),n.getTime()<=(new Date).getTime()?localStorage.removeItem("dev:notification"):c()}},[c]),l?null:(0,r.jsx)(Ot,{className:`${n} ${"error"===a?"isError":"isInfo"} ${i?"isBottom":"isTop"} ${s?"isFull":"isPartial"}`,children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)(N.In,{className:"contentIcon",icon:t,size:"2x"}),(0,r.jsx)("div",{className:"contentItem",children:e}),(0,r.jsx)(N.$n,{className:"closeIcon",icon:"times",isBasic:!0,isCircular:!0,onClick:d})]})})}),Ht=window.location.host.startsWith("polkadot.js.org"),Lt=(0,c.Xi)(()=>"").map(e=>e.dnslink).reduce((e,n)=>(n&&!e.includes(n)&&e.push(n),e),[]),Yt=g.memo(function({className:e}){const{t:n}=Xn(),{systemChain:t}=(0,S.g)(),i=(0,g.useMemo)(()=>{const e=t?.toLowerCase();return e&&Lt.includes(e)?`https://${e}.dotapps.io`:"https://dotapps.io"},[t]);return Ht?(0,r.jsx)(Pt,{className:e,icon:"link",isBottom:!0,isDev:!0,isFull:!0,type:"info",children:(0,r.jsxs)("div",{children:[n("You are connected to the development instance of the UI. For a fully decentralized experience, you are encouraged to use the IPFS deployed version as the canonical URL: "),(0,r.jsx)("a",{href:i,rel:"noreferrer",target:"_blank",children:i.replace("https://","")})]})}):null}),Gt=g.memo(function({className:e}){const{t:n}=Xn(),{isLocalFork:t}=(0,S.g)();return t?(0,r.jsx)(Pt,{className:e,icon:"link",isBottom:!0,isFull:!0,type:"info",children:(0,r.jsxs)("div",{children:[n("Local fork powered by "),(0,r.jsx)("a",{href:"https://github.com/AcalaNetwork/chopsticks",rel:"noreferrer",target:"_blank",children:"Chopsticks"}),"."]})}):null}),Vt=N.I4.div`
  position: fixed;
  bottom: 0.75rem;
  right: 0.75rem;
  left: 0.75rem;
  top: auto;
  padding: 1rem;
  z-index: 500;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;;
  div.isInfo:before {
    content: none;
  }
`,_t=g.memo(function({className:e}){return(0,r.jsxs)(Vt,{className:e,children:[(0,r.jsx)(Gt,{}),(0,r.jsx)(Yt,{})]})}),Xt=u.W.apiType.param,Jt="json-rpc"===u.W.apiType.type&&"string"==typeof Xt&&Xt.startsWith("ws://"),Zt="string"==typeof Xt&&Xt.includes("127.0.0.1"),Kt=window.location.protocol.startsWith("https:"),Qt=g.memo(function({className:e}){const{t:n}=Xn(),{apiError:t,isApiConnected:i,isApiReady:o,isWaitingInjected:s}=(0,S.g)();return t?(0,r.jsx)(Pt,{className:e,icon:"globe",type:"error",children:(0,r.jsx)("div",{children:t})}):o?s?(0,r.jsx)(Pt,{className:e,icon:"puzzle-piece",type:"info",children:(0,r.jsx)("div",{children:n("Waiting for authorization from the extension. Please open the installed extension and approve or reject access.")})}):i?null:(0,r.jsxs)(Pt,{className:e,icon:"globe",type:"error",children:[(0,r.jsx)("div",{children:n("You are not connected to a node. Ensure that your node is running and that the Websocket endpoint is reachable.")}),Jt&&!Zt&&Kt?(0,r.jsx)("div",{children:n("You are connecting from a secure location to an insecure WebSocket ({{wsUrl}}). Due to browser mixed-content security policies this connection type is not allowed. Change the RPC service to a secure 'wss' endpoint.",{replace:{wsUrl:Xt}})}):void 0]}):(0,r.jsx)(Pt,{className:e,icon:"globe",type:"info",children:(0,r.jsx)("div",{children:n(i?"Waiting to complete metadata retrieval from remote endpoint.":"Waiting to establish a connection with the remote endpoint.")})})}),er=g.memo(function(){const{api:e,apiIdentity:n,isApiReady:t}=(0,S.g)(),i=(0,Kn.Gc)(t&&e.derive.accounts?.indexes),o=(0,Kn.Gc)(t&&n.query.identity?.registrars),s=(0,Kn.Gc)(t&&e.query.balances?.totalIssuance),[a,l]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{l(!!i||!!s||!!o)},[]),(0,r.jsx)("div",{className:`apps--api-warm ${a.toString()}`})}),nr=N.I4.div`
  background: var(--bg-page);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(e=>`\n    .greyAnim-${e} {\n      animation: greyAnim${e} 2s;\n    }\n\n    @keyframes greyAnim${e} {\n      0% { background: #a6a6a6; }\n      50% { background: darkorange; }\n      100% { background: #a6a6a6; }\n    }\n  `).join("")}
`,tr=g.memo(function({className:e=""}){const{themeClassName:n}=(0,U.D)(),{apiEndpoint:t,isDevelopment:i}=(0,S.g)(),o=(0,g.useMemo)(()=>i?void 0:t?.ui.color,[t,i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I.A,{uiHighlight:o}),(0,r.jsxs)(nr,{className:`${e} apps--Wrapper ${n}`,children:[(0,r.jsx)(Ft,{}),(0,r.jsxs)(N.Ux,{children:[(0,r.jsx)($.Ay,{children:(0,r.jsx)(ot,{})}),(0,r.jsx)(Qt,{}),(0,r.jsx)(_t,{}),(0,r.jsx)("div",{id:"portals"})]})]}),(0,r.jsx)(er,{})]})});function rr({uiTheme:e}){const n="dark"===e?"dark":"light";return document?.documentElement?.setAttribute("data-theme",n),{theme:n}}const ir=g.memo(function({isElectron:e,store:n}){const[t,i]=(0,g.useState)(()=>rr(u.W));return(0,g.useEffect)(()=>{u.W.on("change",e=>i(rr(e)))},[]),(0,r.jsx)(g.Suspense,{fallback:"...",children:(0,r.jsx)(x.NP,{theme:t,children:(0,r.jsx)(y.D,{children:(0,r.jsx)(v.ApiCtxRoot,{apiUrl:u.W.apiUrl,isElectron:e,store:n,children:(0,r.jsx)(b.n,{children:(0,r.jsx)(k.H,{children:(0,r.jsx)(A.T,{children:(0,r.jsx)(w.I,{children:(0,r.jsx)(f.I9,{children:(0,r.jsx)(C.N,{children:(0,r.jsx)(j.M,{children:(0,r.jsx)(tr,{})})})})})})})})})})})})}),or="root",sr=document.getElementById(or);if(!sr)throw new Error(`Unable to find element with id '${or}'`);(0,h.H)(sr).render((0,r.jsx)(ir,{isElectron:!1}))},43951:()=>{},57618:(e,n,t)=>{var r={".":[10005,9],"./":[10005,9],"./Api":[43910,9],"./Api.tsx":[43910,9],"./hoc":[27900,9],"./hoc/":[27900,9],"./hoc/api":[49788,9],"./hoc/api.tsx":[49788,9],"./hoc/call":[63002,9],"./hoc/call.tsx":[63002,9],"./hoc/callDiv":[40833,9],"./hoc/callDiv.tsx":[40833,9],"./hoc/calls":[1621,9],"./hoc/calls.ts":[1621,9],"./hoc/index":[27900,9],"./hoc/index.ts":[27900,9],"./hoc/multi":[10665,9],"./hoc/multi.ts":[10665,9],"./hoc/observable":[2385,9],"./hoc/observable.tsx":[2385,9],"./hoc/onlyOn":[15567,9],"./hoc/onlyOn.tsx":[15567,9],"./hoc/types":[37229,9,7229],"./hoc/types.ts":[37229,9,7229],"./index":[10005,9],"./index.ts":[10005,9],"./light":[19830,9],"./light.spec":[77224,9,7224],"./light.spec.ts":[77224,9,7224],"./light/":[19830,9],"./light/index":[19830,9],"./light/index.ts":[19830,9],"./light/kusama":[69585,9],"./light/kusama/":[69585,9],"./light/kusama/gm.json":[34310,3,4310],"./light/kusama/index":[69585,9],"./light/kusama/index.ts":[69585,9],"./light/kusama/shiden.json":[26387,3,6387],"./light/kusama/tinkernet.json":[43452,3,3452],"./light/polkadot":[1269,9],"./light/polkadot/":[1269,9],"./light/polkadot/astar.json":[88021,3,8021],"./light/polkadot/index":[1269,9],"./light/polkadot/index.ts":[1269,9],"./light/polkadot/laos.json":[27735,3,7735],"./statics":[35038,9],"./statics.ts":[35038,9],"./transform/echo":[5745,9],"./transform/echo.ts":[5745,9],"./types":[33136,9,3136],"./types.ts":[33136,9,3136],"./urlTypes":[815,9],"./urlTypes.ts":[815,9],"./util":[2926,9],"./util/":[2926,9],"./util/getEnvironment":[10461,9],"./util/getEnvironment.ts":[10461,9],"./util/historic":[1713,9],"./util/historic.ts":[1713,9],"./util/index":[2926,9],"./util/index.ts":[2926,9],"./util/intervalObservable":[24732,9],"./util/intervalObservable.ts":[24732,9],"./util/isEqual":[16898,9],"./util/isEqual.ts":[16898,9],"./util/triggerChange":[44362,9],"./util/triggerChange.ts":[44362,9]};function i(e){if(!t.o(r,e))return Promise.resolve().then(()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return Promise.all(n.slice(2).map(t.e)).then(()=>t.t(i,16|n[1]))}i.keys=()=>Object.keys(r),i.id=57618,e.exports=i},63011:()=>{},70618:()=>{},93553:()=>{}},e=>{e.O(0,[3175,6508,1151,8168,965,9657,5901,7231,5328,7289,9145,6206,9725,3024,9025,9873,1345,3802,4637,3346,9711,1292,3960,533,3123,6267,9907,6476,3989,2701,9286,281,3065,6316,8997,3450,2843,2360,6623,5893,7119,8769,6837,2973,2628,4590,1155,6309,4919,3602,4470],()=>e(e.s=19853)),e.O()}]);