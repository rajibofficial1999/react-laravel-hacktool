import{r as M,R as x,j as p,a as b,Y as D}from"./app-CzDKNEIs.js";import{D as T}from"./Table-CaG3AW7D.js";import{A as j}from"./AuthenticatedLayout-C7FXM_oT.js";import{H as z,_ as v,l as U}from"./index-ClHFJN1D.js";import{D as $,q as I}from"./DropDownMenu-CoPtDWpp.js";import{c as Q}from"./index-RxbyN6Ed.js";import{F as H}from"./TrashIcon-TMmpkuih.js";import"./hidden-Dtxiou3D.js";function k({title:h,titleId:n,...a},l){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":n},a),h?M.createElement("title",{id:n},h):null,M.createElement("path",{d:"m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"}),M.createElement("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"}))}const Y=M.forwardRef(k);var G=Object.defineProperty,P=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,L=(h,n,a)=>n in h?G(h,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[n]=a,V=(h,n)=>{for(var a in n||(n={}))O.call(n,a)&&L(h,a,n[a]);if(P)for(var a of P(n))S.call(n,a)&&L(h,a,n[a]);return h},X=(h,n)=>{var a={};for(var l in h)O.call(h,l)&&n.indexOf(l)<0&&(a[l]=h[l]);if(h!=null&&P)for(var l of P(h))n.indexOf(l)<0&&S.call(h,l)&&(a[l]=h[l]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var A;(h=>{const n=class{constructor(e,t,r,s){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let i=0;i<this.size;i++)o.push(!1);for(let i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(r);if(this.drawCodewords(c),s==-1){let i=1e9;for(let f=0;f<8;f++){this.applyMask(f),this.drawFormatBits(f);const m=this.getPenaltyScore();m<i&&(s=f,i=m),this.applyMask(f)}}d(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(e,t){const r=h.QrSegment.makeSegments(e);return n.encodeSegments(r,t)}static encodeBinary(e,t){const r=h.QrSegment.makeBytes(e);return n.encodeSegments([r],t)}static encodeSegments(e,t,r=1,s=40,o=-1,c=!0){if(!(n.MIN_VERSION<=r&&r<=s&&s<=n.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let i,f;for(i=r;;i++){const g=n.getNumDataCodewords(i,t)*8,C=w.getTotalBits(e,i);if(C<=g){f=C;break}if(i>=s)throw new RangeError("Data too long")}for(const g of[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH])c&&f<=n.getNumDataCodewords(i,g)*8&&(t=g);let m=[];for(const g of e){l(g.mode.modeBits,4,m),l(g.numChars,g.mode.numCharCountBits(i),m);for(const C of g.getData())m.push(C)}d(m.length==f);const _=n.getNumDataCodewords(i,t)*8;d(m.length<=_),l(0,Math.min(4,_-m.length),m),l(0,(8-m.length%8)%8,m),d(m.length%8==0);for(let g=236;m.length<_;g^=253)l(g,8,m);let N=[];for(;N.length*8<m.length;)N.push(0);return m.forEach((g,C)=>N[C>>>3]|=g<<7-(C&7)),new n(i,t,N,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let s=0;s<t;s++)r==0&&s==0||r==0&&s==t-1||r==t-1&&s==0||this.drawAlignmentPattern(e[r],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const s=(t<<10|r)^21522;d(s>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(s,o));this.setFunctionModule(8,7,E(s,6)),this.setFunctionModule(8,8,E(s,7)),this.setFunctionModule(7,8,E(s,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(s,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(s,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(s,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;d(t>>>18==0);for(let r=0;r<18;r++){const s=E(t,r),o=this.size-11+r%3,c=Math.floor(r/3);this.setFunctionModule(o,c,s),this.setFunctionModule(c,o,s)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let s=-4;s<=4;s++){const o=Math.max(Math.abs(s),Math.abs(r)),c=e+s,i=t+r;0<=c&&c<this.size&&0<=i&&i<this.size&&this.setFunctionModule(c,i,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,t+r,Math.max(Math.abs(s),Math.abs(r))!=1)}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");const s=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],c=Math.floor(n.getNumRawDataModules(t)/8),i=s-c%s,f=Math.floor(c/s);let m=[];const _=n.reedSolomonComputeDivisor(o);for(let g=0,C=0;g<s;g++){let R=e.slice(C,C+f-o+(g<i?0:1));C+=R.length;const B=n.reedSolomonComputeRemainder(R,_);g<i&&R.push(0),m.push(R.concat(B))}let N=[];for(let g=0;g<m[0].length;g++)m.forEach((C,R)=>{(g!=f-o||R>=i)&&N.push(C[g])});return d(N.length==c),N}drawCodewords(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let s=0;s<this.size;s++)for(let o=0;o<2;o++){const c=r-o,f=(r+1&2)==0?this.size-1-s:s;!this.isFunction[f][c]&&t<e.length*8&&(this.modules[f][c]=E(e[t>>>3],7-(t&7)),t++)}}d(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let s;switch(e){case 0:s=(r+t)%2==0;break;case 1:s=t%2==0;break;case 2:s=r%3==0;break;case 3:s=(r+t)%3==0;break;case 4:s=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:s=r*t%2+r*t%3==0;break;case 6:s=(r*t%2+r*t%3)%2==0;break;case 7:s=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&s&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let c=!1,i=0,f=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[o][m]==c?(i++,i==5?e+=n.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,f),c||(e+=this.finderPenaltyCountPatterns(f)*n.PENALTY_N3),c=this.modules[o][m],i=1);e+=this.finderPenaltyTerminateAndCount(c,i,f)*n.PENALTY_N3}for(let o=0;o<this.size;o++){let c=!1,i=0,f=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[m][o]==c?(i++,i==5?e+=n.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,f),c||(e+=this.finderPenaltyCountPatterns(f)*n.PENALTY_N3),c=this.modules[m][o],i=1);e+=this.finderPenaltyTerminateAndCount(c,i,f)*n.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let c=0;c<this.size-1;c++){const i=this.modules[o][c];i==this.modules[o][c+1]&&i==this.modules[o+1][c]&&i==this.modules[o+1][c+1]&&(e+=n.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((c,i)=>c+(i?1:0),t);const r=this.size*this.size,s=Math.ceil(Math.abs(t*20-r*10)/r)-1;return d(0<=s&&s<=9),e+=s*n.PENALTY_N4,d(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let r=[6];for(let s=this.size-7;r.length<e;s-=t)r.splice(1,0,s);return r}}static getNumRawDataModules(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return d(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let s=0;s<e-1;s++)t.push(0);t.push(1);let r=1;for(let s=0;s<e;s++){for(let o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],r),o+1<t.length&&(t[o]^=t[o+1]);r=n.reedSolomonMultiply(r,2)}return t}static reedSolomonComputeRemainder(e,t){let r=t.map(s=>0);for(const s of e){const o=s^r.shift();r.push(0),t.forEach((c,i)=>r[i]^=n.reedSolomonMultiply(c,o))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let r=0;for(let s=7;s>=0;s--)r=r<<1^(r>>>7)*285,r^=(t>>>s&1)*e;return d(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];d(t<=this.size*3);const r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let a=n;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=a;function l(e,t,r){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let s=t-1;s>=0;s--)r.push(e>>>s&1)}function E(e,t){return(e>>>t&1)!=0}function d(e){if(!e)throw new Error("Assertion error")}const u=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(const r of e)l(r,8,t);return new u(u.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!u.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){const s=Math.min(e.length-r,3);l(parseInt(e.substr(r,s),10),s*3+1,t),r+=s}return new u(u.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!u.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],r;for(r=0;r+2<=e.length;r+=2){let s=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;s+=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(s,11,t)}return r<e.length&&l(u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new u(u.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:u.isNumeric(e)?[u.makeNumeric(e)]:u.isAlphanumeric(e)?[u.makeAlphanumeric(e)]:[u.makeBytes(u.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new u(u.Mode.ECI,0,t)}static isNumeric(e){return u.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return u.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const s of e){const o=s.mode.numCharCountBits(t);if(s.numChars>=1<<o)return 1/0;r+=4+o+s.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}};let w=u;w.NUMERIC_REGEX=/^[0-9]*$/,w.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,w.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=w})(A||(A={}));(h=>{(n=>{const a=class{constructor(E,d){this.ordinal=E,this.formatBits=d}};let l=a;l.LOW=new a(0,1),l.MEDIUM=new a(1,0),l.QUARTILE=new a(2,3),l.HIGH=new a(3,2),n.Ecc=l})(h.QrCode||(h.QrCode={}))})(A||(A={}));(h=>{(n=>{const a=class{constructor(E,d){this.modeBits=E,this.numBitsCharCount=d}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let l=a;l.NUMERIC=new a(1,[10,12,14]),l.ALPHANUMERIC=new a(2,[9,11,13]),l.BYTE=new a(4,[8,16,16]),l.KANJI=new a(8,[8,10,12]),l.ECI=new a(7,[0,0,0]),n.Mode=l})(h.QrSegment||(h.QrSegment={}))})(A||(A={}));var y=A;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var K={L:y.QrCode.Ecc.LOW,M:y.QrCode.Ecc.MEDIUM,Q:y.QrCode.Ecc.QUARTILE,H:y.QrCode.Ecc.HIGH},W=128,Z="L",q="#FFFFFF",J="#000000",ee=!1,F=4,te=.1;function re(h,n=0){const a=[];return h.forEach(function(l,E){let d=null;l.forEach(function(u,w){if(!u&&d!==null){a.push(`M${d+n} ${E+n}h${w-d}v1H${d+n}z`),d=null;return}if(w===l.length-1){if(!u)return;d===null?a.push(`M${w+n},${E+n} h1v1H${w+n}z`):a.push(`M${d+n},${E+n} h${w+1-d}v1H${d+n}z`);return}u&&d===null&&(d=w)})}),a.join("")}function se(h,n){return h.slice().map((a,l)=>l<n.y||l>=n.y+n.h?a:a.map((E,d)=>d<n.x||d>=n.x+n.w?E:!1))}function ne(h,n,a,l){if(l==null)return null;const E=a?F:0,d=h.length+E*2,u=Math.floor(n*te),w=d/n,e=(l.width||u)*w,t=(l.height||u)*w,r=l.x==null?h.length/2-e/2:l.x*w,s=l.y==null?h.length/2-t/2:l.y*w;let o=null;if(l.excavate){let c=Math.floor(r),i=Math.floor(s),f=Math.ceil(e+r-c),m=Math.ceil(t+s-i);o={x:c,y:i,w:f,h:m}}return{x:r,y:s,h:t,w:e,excavation:o}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function oe(h){const n=h,{value:a,size:l=W,level:E=Z,bgColor:d=q,fgColor:u=J,includeMargin:w=ee,imageSettings:e}=n,t=X(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=y.QrCode.encodeText(a,K[E]).getModules();const s=w?F:0,o=r.length+s*2,c=ne(r,l,w,e);let i=null;e!=null&&c!=null&&(c.excavation!=null&&(r=se(r,c.excavation)),i=x.createElement("image",{xlinkHref:e.src,height:c.h,width:c.w,x:c.x+s,y:c.y+s,preserveAspectRatio:"none"}));const f=re(r,s);return x.createElement("svg",V({height:l,width:l,viewBox:`0 0 ${o} ${o}`},t),x.createElement("path",{fill:d,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),x.createElement("path",{fill:u,d:f,shapeRendering:"crispEdges"}),i)}const me=({auth:h,links:n})=>{const[a,l]=M.useState(null);let[E,d]=M.useState(!1),[u,w]=M.useState(null),[e,t]=M.useState(null);const r=i=>{l(i)},s=()=>{l(null)},o=i=>{w(i.is_query_link==1?`https://${i.domain.name+i.endpoint}?uid=${h.user.id}`:`https://${i.domain.name+i.endpoint}/${h.user.id}`),t(i.type.name),d(!0)},c=["no","url","type","Action"];return p.jsxs(j,{header:"Links",linkItem:p.jsx(b,{className:Q("bg-primary rounded-md text-white p-2",{hidden:!h.user.is_admin}),href:route("admin.links.create"),children:"Create Link"}),children:[p.jsx(D,{title:"Links"}),p.jsx(z,{isModalOpen:E,setIsModalOpen:d,children:p.jsxs(v.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[p.jsx(v.Title,{as:"h3",className:"font-bold leading-6 text-gray-900 text-center text-xl",children:e}),p.jsx("div",{className:"mt-4 py-4 flex justify-center items-center",children:p.jsx(oe,{size:"200",value:u})})]})}),p.jsx("div",{className:"w-full mt-6",children:p.jsx("div",{className:"bg-white tableResponsive",children:p.jsx(T,{headItems:c,children:n.data.map((i,f)=>p.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[p.jsx("td",{className:"text-left py-3 px-4",children:f+1}),p.jsx(U.CopyToClipboard,{text:i.is_query_link==1?`https://${i.domain.name+i.endpoint}?uid=${h.user.id}`:`https://${i.domain.name+i.endpoint}/${h.user.id}`,children:p.jsxs("td",{className:"text-left py-3 px-4 cursor-pointer",children:[p.jsx("button",{onMouseLeave:s,onClick:()=>r(f),type:"button",className:"font-semibold",title:"Click to copy",children:i.is_query_link==1?`https://${i.domain.name+i.endpoint}?uid=${h.user.id}`:`https://${i.domain.name+i.endpoint}/${h.user.id}`}),a==f?p.jsx("span",{className:"text-[12px] text-primary ml-1",children:"Copied"}):""]})}),p.jsx("td",{className:"text-left py-3 px-4",children:p.jsx("span",{className:"text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800",children:i.type.name})}),p.jsxs("td",{className:"text-left py-3 px-4 flex items-center gap-1 relative",children:[p.jsx("button",{className:"py-1 px-2 bg-purple-500 rounded-md text-white",onClick:()=>o(i),children:"QR Code"}),h.user.is_admin&&p.jsxs($,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[p.jsx(I.Item,{children:p.jsxs(b,{href:route("admin.links.edit",i.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[p.jsx(Y,{className:"mr-2 h-5 w-5"}),"Edit"]})}),p.jsx(I.Item,{children:p.jsxs(b,{method:"delete",as:"button",href:route("admin.links.destroy",i.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[p.jsx(H,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})]})]},f))})})}),n.total>10&&p.jsx(Pagination,{items:n})]})};export{me as default};