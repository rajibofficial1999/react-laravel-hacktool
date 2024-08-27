import{r as M,R as y,q as D,j as p,a as b,Y as T}from"./app-BsXAn7Uv.js";import{D as j}from"./Table-YmXRuOkA.js";import{A as z}from"./AuthenticatedLayout-CTJxk30v.js";import{H as U,_ as v,l as $}from"./index-DlUn4wkD.js";import{D as Q,q as I}from"./DropDownMenu-D27yMIry.js";import{c as H}from"./index-RxbyN6Ed.js";import{S as k}from"./SuccessAlert-DXQAhL69.js";import{F as Y}from"./TrashIcon-BMzIDEA3.js";import"./hidden-BL3gMX0P.js";function G({title:d,titleId:n,...a},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),d?M.createElement("title",{id:n},d):null,M.createElement("path",{d:"m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"}),M.createElement("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"}))}const V=M.forwardRef(G);var X=Object.defineProperty,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,L=(d,n,a)=>n in d?X(d,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[n]=a,K=(d,n)=>{for(var a in n||(n={}))S.call(n,a)&&L(d,a,n[a]);if(P)for(var a of P(n))O.call(n,a)&&L(d,a,n[a]);return d},W=(d,n)=>{var a={};for(var i in d)S.call(d,i)&&n.indexOf(i)<0&&(a[i]=d[i]);if(d!=null&&P)for(var i of P(d))n.indexOf(i)<0&&O.call(d,i)&&(a[i]=d[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var N;(d=>{const n=class{constructor(e,t,r,s){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(r);if(this.drawCodewords(h),s==-1){let l=1e9;for(let c=0;c<8;c++){this.applyMask(c),this.drawFormatBits(c);const f=this.getPenaltyScore();f<l&&(s=c,l=f),this.applyMask(c)}}u(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(e,t){const r=d.QrSegment.makeSegments(e);return n.encodeSegments(r,t)}static encodeBinary(e,t){const r=d.QrSegment.makeBytes(e);return n.encodeSegments([r],t)}static encodeSegments(e,t,r=1,s=40,o=-1,h=!0){if(!(n.MIN_VERSION<=r&&r<=s&&s<=n.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,c;for(l=r;;l++){const g=n.getNumDataCodewords(l,t)*8,C=w.getTotalBits(e,l);if(C<=g){c=C;break}if(l>=s)throw new RangeError("Data too long")}for(const g of[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH])h&&c<=n.getNumDataCodewords(l,g)*8&&(t=g);let f=[];for(const g of e){i(g.mode.modeBits,4,f),i(g.numChars,g.mode.numCharCountBits(l),f);for(const C of g.getData())f.push(C)}u(f.length==c);const _=n.getNumDataCodewords(l,t)*8;u(f.length<=_),i(0,Math.min(4,_-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let g=236;f.length<_;g^=253)i(g,8,f);let A=[];for(;A.length*8<f.length;)A.push(0);return f.forEach((g,C)=>A[C>>>3]|=g<<7-(C&7)),new n(l,t,A,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let s=0;s<t;s++)r==0&&s==0||r==0&&s==t-1||r==t-1&&s==0||this.drawAlignmentPattern(e[r],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const s=(t<<10|r)^21522;u(s>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(s,o));this.setFunctionModule(8,7,E(s,6)),this.setFunctionModule(8,8,E(s,7)),this.setFunctionModule(7,8,E(s,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(s,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(s,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(s,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;u(t>>>18==0);for(let r=0;r<18;r++){const s=E(t,r),o=this.size-11+r%3,h=Math.floor(r/3);this.setFunctionModule(o,h,s),this.setFunctionModule(h,o,s)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let s=-4;s<=4;s++){const o=Math.max(Math.abs(s),Math.abs(r)),h=e+s,l=t+r;0<=h&&h<this.size&&0<=l&&l<this.size&&this.setFunctionModule(h,l,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,t+r,Math.max(Math.abs(s),Math.abs(r))!=1)}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");const s=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],h=Math.floor(n.getNumRawDataModules(t)/8),l=s-h%s,c=Math.floor(h/s);let f=[];const _=n.reedSolomonComputeDivisor(o);for(let g=0,C=0;g<s;g++){let R=e.slice(C,C+c-o+(g<l?0:1));C+=R.length;const B=n.reedSolomonComputeRemainder(R,_);g<l&&R.push(0),f.push(R.concat(B))}let A=[];for(let g=0;g<f[0].length;g++)f.forEach((C,R)=>{(g!=c-o||R>=l)&&A.push(C[g])});return u(A.length==h),A}drawCodewords(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let s=0;s<this.size;s++)for(let o=0;o<2;o++){const h=r-o,c=(r+1&2)==0?this.size-1-s:s;!this.isFunction[c][h]&&t<e.length*8&&(this.modules[c][h]=E(e[t>>>3],7-(t&7)),t++)}}u(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let s;switch(e){case 0:s=(r+t)%2==0;break;case 1:s=t%2==0;break;case 2:s=r%3==0;break;case 3:s=(r+t)%3==0;break;case 4:s=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:s=r*t%2+r*t%3==0;break;case 6:s=(r*t%2+r*t%3)%2==0;break;case 7:s=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&s&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let h=!1,l=0,c=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==h?(l++,l==5?e+=n.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,c),h||(e+=this.finderPenaltyCountPatterns(c)*n.PENALTY_N3),h=this.modules[o][f],l=1);e+=this.finderPenaltyTerminateAndCount(h,l,c)*n.PENALTY_N3}for(let o=0;o<this.size;o++){let h=!1,l=0,c=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==h?(l++,l==5?e+=n.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,c),h||(e+=this.finderPenaltyCountPatterns(c)*n.PENALTY_N3),h=this.modules[f][o],l=1);e+=this.finderPenaltyTerminateAndCount(h,l,c)*n.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let h=0;h<this.size-1;h++){const l=this.modules[o][h];l==this.modules[o][h+1]&&l==this.modules[o+1][h]&&l==this.modules[o+1][h+1]&&(e+=n.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((h,l)=>h+(l?1:0),t);const r=this.size*this.size,s=Math.ceil(Math.abs(t*20-r*10)/r)-1;return u(0<=s&&s<=9),e+=s*n.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let r=[6];for(let s=this.size-7;r.length<e;s-=t)r.splice(1,0,s);return r}}static getNumRawDataModules(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return u(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let s=0;s<e-1;s++)t.push(0);t.push(1);let r=1;for(let s=0;s<e;s++){for(let o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],r),o+1<t.length&&(t[o]^=t[o+1]);r=n.reedSolomonMultiply(r,2)}return t}static reedSolomonComputeRemainder(e,t){let r=t.map(s=>0);for(const s of e){const o=s^r.shift();r.push(0),t.forEach((h,l)=>r[l]^=n.reedSolomonMultiply(h,o))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let r=0;for(let s=7;s>=0;s--)r=r<<1^(r>>>7)*285,r^=(t>>>s&1)*e;return u(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];u(t<=this.size*3);const r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let a=n;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],d.QrCode=a;function i(e,t,r){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let s=t-1;s>=0;s--)r.push(e>>>s&1)}function E(e,t){return(e>>>t&1)!=0}function u(e){if(!e)throw new Error("Assertion error")}const m=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(const r of e)i(r,8,t);return new m(m.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!m.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){const s=Math.min(e.length-r,3);i(parseInt(e.substr(r,s),10),s*3+1,t),r+=s}return new m(m.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!m.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],r;for(r=0;r+2<=e.length;r+=2){let s=m.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;s+=m.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),i(s,11,t)}return r<e.length&&i(m.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new m(m.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:m.isNumeric(e)?[m.makeNumeric(e)]:m.isAlphanumeric(e)?[m.makeAlphanumeric(e)]:[m.makeBytes(m.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new m(m.Mode.ECI,0,t)}static isNumeric(e){return m.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return m.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const s of e){const o=s.mode.numCharCountBits(t);if(s.numChars>=1<<o)return 1/0;r+=4+o+s.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}};let w=m;w.NUMERIC_REGEX=/^[0-9]*$/,w.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,w.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",d.QrSegment=w})(N||(N={}));(d=>{(n=>{const a=class{constructor(E,u){this.ordinal=E,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),n.Ecc=i})(d.QrCode||(d.QrCode={}))})(N||(N={}));(d=>{(n=>{const a=class{constructor(E,u){this.modeBits=E,this.numBitsCharCount=u}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),n.Mode=i})(d.QrSegment||(d.QrSegment={}))})(N||(N={}));var x=N;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var q={L:x.QrCode.Ecc.LOW,M:x.QrCode.Ecc.MEDIUM,Q:x.QrCode.Ecc.QUARTILE,H:x.QrCode.Ecc.HIGH},Z=128,J="L",ee="#FFFFFF",te="#000000",re=!1,F=4,se=.1;function ne(d,n=0){const a=[];return d.forEach(function(i,E){let u=null;i.forEach(function(m,w){if(!m&&u!==null){a.push(`M${u+n} ${E+n}h${w-u}v1H${u+n}z`),u=null;return}if(w===i.length-1){if(!m)return;u===null?a.push(`M${w+n},${E+n} h1v1H${w+n}z`):a.push(`M${u+n},${E+n} h${w+1-u}v1H${u+n}z`);return}m&&u===null&&(u=w)})}),a.join("")}function oe(d,n){return d.slice().map((a,i)=>i<n.y||i>=n.y+n.h?a:a.map((E,u)=>u<n.x||u>=n.x+n.w?E:!1))}function ie(d,n,a,i){if(i==null)return null;const E=a?F:0,u=d.length+E*2,m=Math.floor(n*se),w=u/n,e=(i.width||m)*w,t=(i.height||m)*w,r=i.x==null?d.length/2-e/2:i.x*w,s=i.y==null?d.length/2-t/2:i.y*w;let o=null;if(i.excavate){let h=Math.floor(r),l=Math.floor(s),c=Math.ceil(e+r-h),f=Math.ceil(t+s-l);o={x:h,y:l,w:c,h:f}}return{x:r,y:s,h:t,w:e,excavation:o}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function le(d){const n=d,{value:a,size:i=Z,level:E=J,bgColor:u=ee,fgColor:m=te,includeMargin:w=re,imageSettings:e}=n,t=W(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=x.QrCode.encodeText(a,q[E]).getModules();const s=w?F:0,o=r.length+s*2,h=ie(r,i,w,e);let l=null;e!=null&&h!=null&&(h.excavation!=null&&(r=oe(r,h.excavation)),l=y.createElement("image",{xlinkHref:e.src,height:h.h,width:h.w,x:h.x+s,y:h.y+s,preserveAspectRatio:"none"}));const c=ne(r,s);return y.createElement("svg",K({height:i,width:i,viewBox:`0 0 ${o} ${o}`},t),y.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),y.createElement("path",{fill:m,d:c,shapeRendering:"crispEdges"}),l)}const ge=({auth:d,links:n})=>{const{successMessage:a}=D().props.meta,[i,E]=M.useState(null);let[u,m]=M.useState(!1),[w,e]=M.useState(null),[t,r]=M.useState(null);const s=c=>{E(c)},o=()=>{E(null)},h=c=>{e(c.is_query_link==1?`https://${c.domain.name+c.endpoint}?uid=${d.user.id}`:`https://${c.domain.name+c.endpoint}/${d.user.id}`),r(c.type.name),m(!0)},l=["no","url","type","Action"];return p.jsxs(z,{header:"Links",linkItem:p.jsx(b,{className:H("bg-primary rounded-md text-white p-2",{hidden:!d.user.is_admin}),href:route("admin.links.create"),children:"Create Link"}),children:[p.jsx(T,{title:"Links"}),p.jsx(U,{isModalOpen:u,setIsModalOpen:m,children:p.jsxs(v.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[p.jsx(v.Title,{as:"h3",className:"font-bold leading-6 text-gray-900 text-center text-xl",children:t}),p.jsx("div",{className:"mt-4 py-4 flex justify-center items-center",children:p.jsx(le,{size:"200",value:w})})]})}),p.jsxs("div",{className:"w-full mt-6",children:[p.jsx(k,{children:a}),p.jsx("div",{className:"bg-white tableResponsive",children:p.jsx(j,{headItems:l,children:n.data.map((c,f)=>p.jsxs("tr",{className:"odd:bg-white even:bg-slate-100",children:[p.jsx("td",{className:"text-left py-3 px-4",children:f+1}),p.jsx($.CopyToClipboard,{text:c.is_query_link==1?`https://${c.domain.name+c.endpoint}?uid=${d.user.id}`:`https://${c.domain.name+c.endpoint}/${d.user.id}`,children:p.jsxs("td",{className:"text-left py-3 px-4 cursor-pointer",children:[p.jsx("button",{onMouseLeave:o,onClick:()=>s(f),type:"button",className:"font-semibold",title:"Click to copy",children:c.is_query_link==1?`https://${c.domain.name+c.endpoint}?uid=${d.user.id}`:`https://${c.domain.name+c.endpoint}/${d.user.id}`}),i==f?p.jsx("span",{className:"text-[12px] text-primary ml-1",children:"Copied"}):""]})}),p.jsx("td",{className:"text-left py-3 px-4",children:p.jsx("span",{className:"text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800",children:c.type.name})}),p.jsxs("td",{className:"text-left py-3 px-4 flex items-center gap-1 relative",children:[p.jsx("button",{className:"py-1 px-2 bg-purple-500 rounded-md text-white",onClick:()=>h(c),children:"QR Code"}),d.user.is_admin&&p.jsxs(Q,{additionalClasses:"bg-gray-200 text-gray-900",name:"Actions",children:[p.jsx(I.Item,{children:p.jsxs(b,{href:route("admin.links.edit",c.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[p.jsx(V,{className:"mr-2 h-5 w-5"}),"Edit"]})}),p.jsx(I.Item,{children:p.jsxs(b,{method:"delete",as:"button",href:route("admin.links.destroy",c.id),className:"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white",children:[p.jsx(Y,{className:"mr-2 h-5 w-5"}),"Delete"]})})]})]})]},f))})})]}),n.total>10&&p.jsx(Pagination,{items:n})]})};export{ge as default};
