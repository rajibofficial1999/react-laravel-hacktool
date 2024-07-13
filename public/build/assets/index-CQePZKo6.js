import{r as S,g as j}from"./app-DosBPi95.js";var b={},R=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},T=R,C={"text/plain":"Text","text/html":"Url",default:"Text"},k="Copy to clipboard: #{key}, Enter";function A(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function I(e,t){var r,n,o,i,c,a,u=!1;t||(t={}),r=t.debug||!1;try{o=T(),i=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=C[t.format]||C.default;window.clipboardData.setData(f,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),c.addRange(i);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");u=!0}catch(l){r&&console.error("unable to copy using execCommand: ",l),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),n=A("message"in t?t.message:k),window.prompt(n,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),a&&document.body.removeChild(a),o()}return u}var U=I;function m(e){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(e)}Object.defineProperty(b,"__esModule",{value:!0});b.CopyToClipboard=void 0;var y=_(S),N=_(U),M=["text","onCopy","options","children"];function _(e){return e&&e.__esModule?e:{default:e}}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){h(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $(e,t){if(e==null)return{};var r=q(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function q(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t,r){return t&&B(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},v(e,t)}function L(e){var t=H();return function(){var n=d(e),o;if(t){var i=d(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return W(this,o)}}function W(e,t){if(t&&(m(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},d(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=function(e){K(r,e);var t=L(r);function r(){var n;z(this,r);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=t.call.apply(t,[this].concat(i)),h(P(n),"onClick",function(a){var u=n.props,p=u.text,l=u.onCopy,f=u.children,x=u.options,s=y.default.Children.only(f),E=(0,N.default)(p,x);l&&l(p,E),s&&s.props&&typeof s.props.onClick=="function"&&s.props.onClick(a)}),n}return F(r,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,c=$(o,M),a=y.default.Children.only(i);return y.default.cloneElement(a,w(w({},c),{},{onClick:this.onClick}))}}]),r}(y.default.PureComponent);b.CopyToClipboard=D;h(D,"defaultProps",{onCopy:void 0,options:void 0});var X=b,g=X.CopyToClipboard;g.CopyToClipboard=g;var G=g;const Q=j(G);export{Q as C,G as l};
