"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[2107],{51304:(e,t,s)=>{s.d(t,{ZP:()=>K});var n=s(23994),r=s(85960),a=s(47451);const i={name:"@polkadot/react-identicon",path:new URL("file:///home/runner/work/Quantova-js-app/Quantova-js-app/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/Quantova-js-app/Quantova-js-app/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.16.1"};(0,a.E)(i,null,[n.b,r.b]);var o=s(52322),c=s(2784),l=s(72282),u=s(16039),m=s(35545),d=s(48358),p=s(74076),h=s(55858),f=s(73493),y=s(90107),g=s(94175),v=s(7989);const x=c.memo((function({address:e,className:t="",size:s,style:n={}}){const r=(0,c.useCallback)((t=>{t&&(t.innerHTML="",t.appendChild((0,v.y)(e,{isAlternative:!1,size:s})))}),[e,s]);return(0,o.jsx)("div",{className:t,ref:r,style:n})})),w=c.memo((function({className:e="",size:t,style:s={}}){return(0,o.jsx)("svg",{className:e,height:t,style:s,viewBox:"0 0 64 64",width:t})}));var k=s(88617),b=s(31383);const j=b.zo.img((({size:e})=>`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`)),N=c.memo((function({address:e,className:t="",size:s,style:n={}}){const r=(0,c.useMemo)((()=>k(e)),[e]);return(0,o.jsx)(j,{className:t,size:s,src:r,style:n})}));var z=s(56926);const I=c.memo((function({className:e="",publicKey:t,size:s,style:n={}}){const r=(0,c.useMemo)((()=>({__html:z.KT(t.substring(2),s)})),[t,s]);return(0,o.jsx)("div",{className:e,dangerouslySetInnerHTML:r,style:n})}));var U=s(55824);function A({cx:e,cy:t,fill:s,r:n},r){return(0,o.jsx)("circle",{cx:e,cy:t,fill:s,r:n},r)}const E=c.memo((function({address:e,className:t="",isAlternative:s=!1,size:n,style:r={}}){const a=(0,c.useMemo)((()=>(0,U.i)(e,{isAlternative:s})),[e,s]);return(0,o.jsx)("svg",{className:t,height:n,id:e,name:e,style:r,viewBox:"0 0 64 64",width:n,children:a.map(A)})})),D=x,C=64,S={beachball:x,empty:w,ethereum:N,jdenticon:I,polkadot:E,substrate:I};class _ extends c.PureComponent{state={address:"",publicKey:"0x"};static prefix=void 0;static setDefaultPrefix(e){_.prefix=e}static getDerivedStateFromProps({prefix:e=_.prefix,theme:t,value:s},n){if("ethereum"===t)return{address:(0,d.U)(s)?(0,f.K)(s):s||"",publicKey:""};try{const t=(0,d.U)(s)||(0,p.vq)(s)?(0,y.m)(s,e):s||"",r=(0,h.c)((0,g.m)(t,!1,e));return t===n.address?null:{address:t,publicKey:r}}catch{return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,t=this.getWrapped(this.state,this.props);return e?(0,o.jsx)(l,{onCopy:this.onCopy,text:e,children:t}):t}getWrapped({address:e,publicKey:t},{Custom:s}){const{className:n="",isAlternative:r,isHighlight:a,size:i=C,style:c={},theme:l=u.X.icon}=this.props,d=e?s||S["default"===l?m.Oi:l]||D:w;return(0,o.jsx)(q,{className:`ui--IdentityIcon  ${n}`,style:c,children:(0,o.jsx)(d,{address:e,className:a?"highlight":"",isAlternative:r,publicKey:t,size:i})},e)}onCopy=()=>{const{onCopy:e}=this.props,{address:t}=this.state;t&&e&&e(t)}}const q=b.zo.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,K=c.memo((function(e){return(0,o.jsx)(_,{...e})}))},72152:(e,t,s)=>{s.d(t,{r_:()=>N,K0:()=>z,CU:()=>D,lB:()=>C});var n=s(47451);const r={name:"@polkadot/react-qr",path:new URL("file:///home/runner/work/Quantova-js-app/Quantova-js-app/node_modules/@polkadot/react-qr/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/Quantova-js-app/Quantova-js-app/node_modules/@polkadot/react-qr/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.16.1"};(0,n.E)(r,null,[]);var a=s(52322),i=s(2784),o=s(33403),c=s(69516);const l=s(4133);l.stringToBytes=e=>e;var u=s(31383),m=s(51330),d=s(46610),p=s(54371),h=s(94175);const f="secret",y=new Uint8Array([83]),g=new Uint8Array([1]),v=(new Uint8Array([0]),new Uint8Array([1]),new Uint8Array([2]),new Uint8Array([3]),new Uint8Array([0]));function x(e){return new Uint8Array([e>>8,255&e])}function w(e){if(!e)return{height:"auto",width:"100%"};const t=(0,p.H)(e)?e:`${e}px`;return{height:t,width:t}}function k(e){const t=l(0,"M");return t.addData(e,"Byte"),t.make(),t.createDataURL(16,0)}const b=u.zo.div`
  .ui--qr-Display {
    height: 100%;
    width: 100%;

    img,
    svg {
      background: white;
      height: auto !important;
      max-height: 100%;
      max-width: 100%;
      width: auto !important;
    }
  }
`,j=i.memo((function({className:e="",size:t,skipEncoding:s,style:n={},timerDelay:r=2750,value:l}){const[{image:u},d]=(0,i.useState)({frameIdx:0,frames:[],image:null,valueHash:null}),p=(0,i.useRef)({timerDelay:r,timerId:null}),h=(0,i.useMemo)((()=>w(t)),[t]);return(0,i.useEffect)((()=>{const e=()=>d((t=>{if(t.frames.length<=1)return t;let s=t.frameIdx+1;s===t.frames.length&&(s=0,p.current.timerDelay=p.current.timerDelay+500);const n=(0,o.Z)({},t,{frameIdx:s,image:k(t.frames[s])});return p.current.timerId=setTimeout(e,p.current.timerDelay),n}));return p.current.timerId=setTimeout(e,p.current.timerDelay),()=>{p.current.timerId&&clearTimeout(p.current.timerId)}}),[]),(0,i.useEffect)((()=>{d((e=>{const t=(0,c.R)(l);if(t===e.valueHash)return e;const n=s?[l]:function(e){const t=[];let s=0;for(;s<e.length;)t.push(e.subarray(s,s+1024)),s+=1024;return t.map(((e,s)=>(0,m.e)(v,x(t.length),x(s),e)))}(l);return{frameIdx:0,frames:n,image:k(n[0]),valueHash:t}}))}),[s,l]),u?(0,a.jsx)(b,{className:e,style:h,children:(0,a.jsx)("div",{className:"ui--qr-Display",style:n,children:(0,a.jsx)("img",{src:u})})}):null})),N=i.memo((function({address:e,className:t,cmd:s,genesisHash:n,payload:r,size:o,style:c,timerDelay:l}){const u=(0,i.useMemo)((()=>function(e,t,s,n){return(0,m.e)(y,g,new Uint8Array([t]),(0,h.m)(e),(0,d.Y)(s),(0,d.Y)(n))}(e,s,r,n)),[e,s,r,n]);return u?(0,a.jsx)(j,{className:t,size:o,style:c,timerDelay:l,value:u}):null})),z=i.memo((function({className:e,networkSpecs:t,size:s,style:n}){const r=(0,i.useMemo)((()=>function(e){const t=e.length,s=new Uint8Array(t);for(let n=0;n<t;n++)s[n]=e.charCodeAt(n);return s}(JSON.stringify(t))),[t]);return r?(0,a.jsx)(j,{className:e,size:s,skipEncoding:!0,style:n,value:r}):null}));var I=s(87533);const U=e=>{console.error("@polkadot/react-qr:Scan",e.message)},A=u.zo.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;
  }
`,E=i.memo((function({className:e="",delay:t=150,onError:s=U,onScan:n,size:r,style:o={}}){const c=(0,i.useRef)(null),l=(0,i.useRef)(null),u=(0,i.useMemo)((()=>w(r)),[r]),m=(0,i.useCallback)((e=>s(e)),[s]);return(0,i.useEffect)((()=>{const e=new I.Nm,s=setTimeout((async()=>{try{const t=(await I.Nm.listVideoInputDevices())[0].deviceId;l.current=await e.decodeFromVideoDevice(t,c.current??void 0,((e,t)=>{e&&n(e.getText()),!t||t instanceof Error||m(new Error(t))}))}catch(e){m(e instanceof Error?e:new Error("Unknown error occurred"))}}),t);return()=>{clearTimeout(s),l.current&&l.current.stop()}}),[n,m,t]),(0,a.jsx)(A,{className:e,style:u,children:(0,a.jsx)("video",{className:"ui--qr-Scan",ref:c,style:o})})})),D=i.memo((function({className:e,isEthereum:t,onError:s,onScan:n,size:r,style:o}){const c=(0,i.useCallback)((e=>{if(e)try{let s,r,a,i;t?([s,r,...i]=e.split(":"),a=null,r=r.substring(0,42)):[s,r,a,...i]=e.split(":");const o=t?"ethereum":"substrate";if(s!==o&&s!==f)throw new Error(`Invalid prefix received, expected '${o} or ${f}' , found '${s}'`);const c=s===o;c&&!t&&(0,h.m)(r),n({content:r,genesisHash:a,isAddress:c,name:i?.length?i.join(":"):void 0})}catch(t){s&&s(t),console.error("@polkadot/react-qr:QrScanAddress",t.message,e)}}),[n,s,t]);return(0,a.jsx)(E,{className:e,onError:s,onScan:c,size:r,style:o})})),C=i.memo((function({className:e,onError:t,onScan:s,size:n,style:r}){const o=(0,i.useCallback)((e=>e&&s({signature:`0x${e}`})),[s]);return(0,a.jsx)(E,{className:e,onError:t,onScan:o,size:n,style:r})}))}}]);