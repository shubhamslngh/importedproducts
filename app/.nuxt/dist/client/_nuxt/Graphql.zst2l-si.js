import{Y as ce,Z as f,_ as ue,$ as p,a0 as pe,a1 as J,r as le,a2 as he,a3 as fe,o as M,c as B,a as _,F as de,z as ve,t as me}from"./entry.DWjFiXMK.js";function w(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(r){return typeof r}:w=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(n)}function ye(n){return w(n)=="object"&&n!==null}var Z=typeof Symbol=="function"&&Symbol.toStringTag!=null?Symbol.toStringTag:"@@toStringTag";function j(n,t){for(var r=/\r\n|[\n\r]/g,e=1,i=t+1,a;(a=r.exec(n.body))&&a.index<t;)e+=1,i=t+1-(a.index+a[0].length);return{line:e,column:i}}function Ee(n){return ee(n.source,j(n.source,n.start))}function ee(n,t){var r=n.locationOffset.column-1,e=S(r)+n.body,i=t.line-1,a=n.locationOffset.line-1,s=t.line+a,o=t.line===1?r:0,u=t.column+o,l="".concat(n.name,":").concat(s,":").concat(u,`
`),d=e.split(/\r\n|[\n\r]/g),y=d[i];if(y.length>120){for(var N=Math.floor(u/80),h=u%80,m=[],E=0;E<y.length;E+=80)m.push(y.slice(E,E+80));return l+W([["".concat(s),m[0]]].concat(m.slice(1,N+1).map(function(g){return["",g]}),[[" ",S(h-1)+"^"],["",m[N+1]]]))}return l+W([["".concat(s-1),d[i-1]],["".concat(s),y],["",S(u-1)+"^"],["".concat(s+1),d[i+1]]])}function W(n){var t=n.filter(function(e){e[0];var i=e[1];return i!==void 0}),r=Math.max.apply(Math,t.map(function(e){var i=e[0];return i.length}));return t.map(function(e){var i=e[0],a=e[1];return Te(r,i)+(a?" | "+a:" |")}).join(`
`)}function S(n){return Array(n+1).join(" ")}function Te(n,t){return S(n-t.length)+t}function R(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(r){return typeof r}:R=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},R(n)}function X(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,e)}return r}function Ne(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(e){xe(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function xe(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function _e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function z(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Oe(n,t,r){return t&&z(n.prototype,t),r&&z(n,r),n}function ke(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&A(n,t)}function De(n){var t=ne();return function(){var e=I(n),i;if(t){var a=I(this).constructor;i=Reflect.construct(e,arguments,a)}else i=e.apply(this,arguments);return te(this,i)}}function te(n,t){return t&&(R(t)==="object"||typeof t=="function")?t:D(n)}function D(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function G(n){var t=typeof Map=="function"?new Map:void 0;return G=function(e){if(e===null||!Ae(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return L(e,arguments,I(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),A(i,e)},G(n)}function L(n,t,r){return ne()?L=Reflect.construct:L=function(i,a,s){var o=[null];o.push.apply(o,a);var u=Function.bind.apply(i,o),l=new u;return s&&A(l,s.prototype),l},L.apply(null,arguments)}function ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ae(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function A(n,t){return A=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},A(n,t)}function I(n){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},I(n)}var Ie=function(n){ke(r,n);var t=De(r);function r(e,i,a,s,o,u,l){var d,y,N,h;_e(this,r),h=t.call(this,e),h.name="GraphQLError",h.originalError=u??void 0,h.nodes=H(Array.isArray(i)?i:i?[i]:void 0);for(var m=[],E=0,g=(P=h.nodes)!==null&&P!==void 0?P:[];E<g.length;E++){var P,oe=g[E],q=oe.loc;q!=null&&m.push(q)}m=H(m),h.source=a??((d=m)===null||d===void 0?void 0:d[0].source),h.positions=s??((y=m)===null||y===void 0?void 0:y.map(function(x){return x.start})),h.locations=s&&a?s.map(function(x){return j(a,x)}):(N=m)===null||N===void 0?void 0:N.map(function(x){return j(x.source,x.start)}),h.path=o??void 0;var Q=u==null?void 0:u.extensions;return l==null&&ye(Q)?h.extensions=Ne({},Q):h.extensions=l??{},Object.defineProperties(D(h),{message:{enumerable:!0},locations:{enumerable:h.locations!=null},path:{enumerable:h.path!=null},extensions:{enumerable:h.extensions!=null&&Object.keys(h.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?(Object.defineProperty(D(h),"stack",{value:u.stack,writable:!0,configurable:!0}),te(h)):(Error.captureStackTrace?Error.captureStackTrace(D(h),r):Object.defineProperty(D(h),"stack",{value:Error().stack,writable:!0,configurable:!0}),h)}return Oe(r,[{key:"toString",value:function(){return ge(this)}},{key:Z,get:function(){return"Object"}}]),r}(G(Error));function H(n){return n===void 0||n.length===0?void 0:n}function ge(n){var t=n.message;if(n.nodes)for(var r=0,e=n.nodes;r<e.length;r++){var i=e[r];i.loc&&(t+=`

`+Ee(i.loc))}else if(n.source&&n.locations)for(var a=0,s=n.locations;a<s.length;a++){var o=s[a];t+=`

`+ee(n.source,o)}return t}function v(n,t,r){return new Ie("Syntax Error: ".concat(r),void 0,n,[t])}var c=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function V(n,t){var r=!!n;if(!r)throw new Error(t)}const be=function(t,r){return t instanceof r};function $(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function we(n,t,r){return t&&$(n.prototype,t),r&&$(n,r),n}var re=function(){function n(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"GraphQL request",e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{line:1,column:1};typeof t=="string"||V(0,"Body must be a string. Received: ".concat(ce(t),".")),this.body=t,this.name=r,this.locationOffset=e,this.locationOffset.line>0||V(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||V(0,"column in locationOffset is 1-indexed and must be positive.")}return we(n,[{key:Z,get:function(){return"Source"}}]),n}();function Se(n){return be(n,re)}var Re=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),Le=function(){function n(r){var e=new f(c.SOF,0,0,0,0,null);this.source=r,this.lastToken=e,this.token=e,this.line=1,this.lineStart=0}var t=n.prototype;return t.advance=function(){this.lastToken=this.token;var e=this.token=this.lookahead();return e},t.lookahead=function(){var e=this.token;if(e.kind!==c.EOF)do{var i;e=(i=e.next)!==null&&i!==void 0?i:e.next=Fe(this,e)}while(e.kind===c.COMMENT);return e},n}();function Ce(n){return n===c.BANG||n===c.DOLLAR||n===c.AMP||n===c.PAREN_L||n===c.PAREN_R||n===c.SPREAD||n===c.COLON||n===c.EQUALS||n===c.AT||n===c.BRACKET_L||n===c.BRACKET_R||n===c.BRACE_L||n===c.PIPE||n===c.BRACE_R}function T(n){return isNaN(n)?c.EOF:n<127?JSON.stringify(String.fromCharCode(n)):'"\\u'.concat(("00"+n.toString(16).toUpperCase()).slice(-4),'"')}function Fe(n,t){for(var r=n.source,e=r.body,i=e.length,a=t.end;a<i;){var s=e.charCodeAt(a),o=n.line,u=1+a-n.lineStart;switch(s){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++n.line,n.lineStart=a;continue;case 13:e.charCodeAt(a+1)===10?a+=2:++a,++n.line,n.lineStart=a;continue;case 33:return new f(c.BANG,a,a+1,o,u,t);case 35:return Me(r,a,o,u,t);case 36:return new f(c.DOLLAR,a,a+1,o,u,t);case 38:return new f(c.AMP,a,a+1,o,u,t);case 40:return new f(c.PAREN_L,a,a+1,o,u,t);case 41:return new f(c.PAREN_R,a,a+1,o,u,t);case 46:if(e.charCodeAt(a+1)===46&&e.charCodeAt(a+2)===46)return new f(c.SPREAD,a,a+3,o,u,t);break;case 58:return new f(c.COLON,a,a+1,o,u,t);case 61:return new f(c.EQUALS,a,a+1,o,u,t);case 64:return new f(c.AT,a,a+1,o,u,t);case 91:return new f(c.BRACKET_L,a,a+1,o,u,t);case 93:return new f(c.BRACKET_R,a,a+1,o,u,t);case 123:return new f(c.BRACE_L,a,a+1,o,u,t);case 124:return new f(c.PIPE,a,a+1,o,u,t);case 125:return new f(c.BRACE_R,a,a+1,o,u,t);case 34:return e.charCodeAt(a+1)===34&&e.charCodeAt(a+2)===34?Ue(r,a,o,u,t,n):Ve(r,a,o,u,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Be(r,a,s,o,u,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return je(r,a,o,u,t)}throw v(r,a,Pe(s))}var l=n.line,d=1+a-n.lineStart;return new f(c.EOF,i,i,l,d,t)}function Pe(n){return n<32&&n!==9&&n!==10&&n!==13?"Cannot contain the invalid character ".concat(T(n),"."):n===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:"Cannot parse the unexpected character ".concat(T(n),".")}function Me(n,t,r,e,i){var a=n.body,s,o=t;do s=a.charCodeAt(++o);while(!isNaN(s)&&(s>31||s===9));return new f(c.COMMENT,t,o,r,e,i,a.slice(t+1,o))}function Be(n,t,r,e,i,a){var s=n.body,o=r,u=t,l=!1;if(o===45&&(o=s.charCodeAt(++u)),o===48){if(o=s.charCodeAt(++u),o>=48&&o<=57)throw v(n,u,"Invalid number, unexpected digit after 0: ".concat(T(o),"."))}else u=U(n,u,o),o=s.charCodeAt(u);if(o===46&&(l=!0,o=s.charCodeAt(++u),u=U(n,u,o),o=s.charCodeAt(u)),(o===69||o===101)&&(l=!0,o=s.charCodeAt(++u),(o===43||o===45)&&(o=s.charCodeAt(++u)),u=U(n,u,o),o=s.charCodeAt(u)),o===46||Ge(o))throw v(n,u,"Invalid number, expected digit but got: ".concat(T(o),"."));return new f(l?c.FLOAT:c.INT,t,u,e,i,a,s.slice(t,u))}function U(n,t,r){var e=n.body,i=t,a=r;if(a>=48&&a<=57){do a=e.charCodeAt(++i);while(a>=48&&a<=57);return i}throw v(n,i,"Invalid number, expected digit but got: ".concat(T(a),"."))}function Ve(n,t,r,e,i){for(var a=n.body,s=t+1,o=s,u=0,l="";s<a.length&&!isNaN(u=a.charCodeAt(s))&&u!==10&&u!==13;){if(u===34)return l+=a.slice(o,s),new f(c.STRING,t,s+1,r,e,i,l);if(u<32&&u!==9)throw v(n,s,"Invalid character within String: ".concat(T(u),"."));if(++s,u===92){switch(l+=a.slice(o,s-1),u=a.charCodeAt(s),u){case 34:l+='"';break;case 47:l+="/";break;case 92:l+="\\";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+=`
`;break;case 114:l+="\r";break;case 116:l+="	";break;case 117:{var d=Ke(a.charCodeAt(s+1),a.charCodeAt(s+2),a.charCodeAt(s+3),a.charCodeAt(s+4));if(d<0){var y=a.slice(s+1,s+5);throw v(n,s,"Invalid character escape sequence: \\u".concat(y,"."))}l+=String.fromCharCode(d),s+=4;break}default:throw v(n,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(u),"."))}++s,o=s}}throw v(n,s,"Unterminated string.")}function Ue(n,t,r,e,i,a){for(var s=n.body,o=t+3,u=o,l=0,d="";o<s.length&&!isNaN(l=s.charCodeAt(o));){if(l===34&&s.charCodeAt(o+1)===34&&s.charCodeAt(o+2)===34)return d+=s.slice(u,o),new f(c.BLOCK_STRING,t,o+3,r,e,i,ue(d));if(l<32&&l!==9&&l!==10&&l!==13)throw v(n,o,"Invalid character within String: ".concat(T(l),"."));l===10?(++o,++a.line,a.lineStart=o):l===13?(s.charCodeAt(o+1)===10?o+=2:++o,++a.line,a.lineStart=o):l===92&&s.charCodeAt(o+1)===34&&s.charCodeAt(o+2)===34&&s.charCodeAt(o+3)===34?(d+=s.slice(u,o)+'"""',o+=4,u=o):++o}throw v(n,o,"Unterminated string.")}function Ke(n,t,r,e){return b(n)<<12|b(t)<<8|b(r)<<4|b(e)}function b(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function je(n,t,r,e,i){for(var a=n.body,s=a.length,o=t+1,u=0;o!==s&&!isNaN(u=a.charCodeAt(o))&&(u===95||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122);)++o;return new f(c.NAME,t,o,r,e,i,a.slice(t,o))}function Ge(n){return n===95||n>=65&&n<=90||n>=97&&n<=122}function Ye(n,t){var r=new qe(n,t);return r.parseDocument()}var qe=function(){function n(r,e){var i=Se(r)?r:new re(r);this._lexer=new Le(i),this._options=e}var t=n.prototype;return t.parseName=function(){var e=this.expectToken(c.NAME);return{kind:p.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:p.DOCUMENT,definitions:this.many(c.SOF,this.parseDefinition,c.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(c.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(c.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(c.BRACE_L))return{kind:p.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var i=this.parseOperationType(),a;return this.peek(c.NAME)&&(a=this.parseName()),{kind:p.OPERATION_DEFINITION,operation:i,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(c.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(c.PAREN_L,this.parseVariableDefinition,c.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:p.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(c.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(c.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(c.DOLLAR),{kind:p.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:p.SELECTION_SET,selections:this.many(c.BRACE_L,this.parseSelection,c.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(c.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e=this._lexer.token,i=this.parseName(),a,s;return this.expectOptionalToken(c.COLON)?(a=i,s=this.parseName()):s=i,{kind:p.FIELD,alias:a,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(c.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(e)}},t.parseArguments=function(e){var i=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(c.PAREN_L,i,c.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,i=this.parseName();return this.expectToken(c.COLON),{kind:p.ARGUMENT,name:i,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:p.ARGUMENT,name:this.parseName(),value:(this.expectToken(c.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(c.SPREAD);var i=this.expectOptionalKeyword("on");return!i&&this.peek(c.NAME)?{kind:p.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:p.INLINE_FRAGMENT,typeCondition:i?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,i=this._lexer.token;return this.expectKeyword("fragment"),((e=this._options)===null||e===void 0?void 0:e.experimentalFragmentVariables)===!0?{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(i)}:{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(i)}},t.parseFragmentName=function(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var i=this._lexer.token;switch(i.kind){case c.BRACKET_L:return this.parseList(e);case c.BRACE_L:return this.parseObject(e);case c.INT:return this._lexer.advance(),{kind:p.INT,value:i.value,loc:this.loc(i)};case c.FLOAT:return this._lexer.advance(),{kind:p.FLOAT,value:i.value,loc:this.loc(i)};case c.STRING:case c.BLOCK_STRING:return this.parseStringLiteral();case c.NAME:switch(this._lexer.advance(),i.value){case"true":return{kind:p.BOOLEAN,value:!0,loc:this.loc(i)};case"false":return{kind:p.BOOLEAN,value:!1,loc:this.loc(i)};case"null":return{kind:p.NULL,loc:this.loc(i)};default:return{kind:p.ENUM,value:i.value,loc:this.loc(i)}}case c.DOLLAR:if(!e)return this.parseVariable();break}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:p.STRING,value:e.value,block:e.kind===c.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var i=this,a=this._lexer.token,s=function(){return i.parseValueLiteral(e)};return{kind:p.LIST,values:this.any(c.BRACKET_L,s,c.BRACKET_R),loc:this.loc(a)}},t.parseObject=function(e){var i=this,a=this._lexer.token,s=function(){return i.parseObjectField(e)};return{kind:p.OBJECT,fields:this.any(c.BRACE_L,s,c.BRACE_R),loc:this.loc(a)}},t.parseObjectField=function(e){var i=this._lexer.token,a=this.parseName();return this.expectToken(c.COLON),{kind:p.OBJECT_FIELD,name:a,value:this.parseValueLiteral(e),loc:this.loc(i)}},t.parseDirectives=function(e){for(var i=[];this.peek(c.AT);)i.push(this.parseDirective(e));return i},t.parseDirective=function(e){var i=this._lexer.token;return this.expectToken(c.AT),{kind:p.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(i)}},t.parseTypeReference=function(){var e=this._lexer.token,i;return this.expectOptionalToken(c.BRACKET_L)?(i=this.parseTypeReference(),this.expectToken(c.BRACKET_R),i={kind:p.LIST_TYPE,type:i,loc:this.loc(e)}):i=this.parseNamedType(),this.expectOptionalToken(c.BANG)?{kind:p.NON_NULL_TYPE,type:i,loc:this.loc(e)}:i},t.parseNamedType=function(){var e=this._lexer.token;return{kind:p.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===c.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(c.STRING)||this.peek(c.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("schema");var a=this.parseDirectives(!0),s=this.many(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);return{kind:p.SCHEMA_DEFINITION,description:i,directives:a,operationTypes:s,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,i=this.parseOperationType();this.expectToken(c.COLON);var a=this.parseNamedType();return{kind:p.OPERATION_TYPE_DEFINITION,operation:i,type:a,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("scalar");var a=this.parseName(),s=this.parseDirectives(!0);return{kind:p.SCALAR_TYPE_DEFINITION,description:i,name:a,directives:s,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("type");var a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),u=this.parseFieldsDefinition();return{kind:p.OBJECT_TYPE_DEFINITION,description:i,name:a,interfaces:s,directives:o,fields:u,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(((e=this._options)===null||e===void 0?void 0:e.allowLegacySDLImplementsInterfaces)===!0){var i=[];this.expectOptionalToken(c.AMP);do i.push(this.parseNamedType());while(this.expectOptionalToken(c.AMP)||this.peek(c.NAME));return i}return this.delimitedMany(c.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return((e=this._options)===null||e===void 0?void 0:e.allowLegacySDLEmptyFields)===!0&&this.peek(c.BRACE_L)&&this._lexer.lookahead().kind===c.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(c.BRACE_L,this.parseFieldDefinition,c.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,i=this.parseDescription(),a=this.parseName(),s=this.parseArgumentDefs();this.expectToken(c.COLON);var o=this.parseTypeReference(),u=this.parseDirectives(!0);return{kind:p.FIELD_DEFINITION,description:i,name:a,arguments:s,type:o,directives:u,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(c.PAREN_L,this.parseInputValueDef,c.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,i=this.parseDescription(),a=this.parseName();this.expectToken(c.COLON);var s=this.parseTypeReference(),o;this.expectOptionalToken(c.EQUALS)&&(o=this.parseValueLiteral(!0));var u=this.parseDirectives(!0);return{kind:p.INPUT_VALUE_DEFINITION,description:i,name:a,type:s,defaultValue:o,directives:u,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("interface");var a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),u=this.parseFieldsDefinition();return{kind:p.INTERFACE_TYPE_DEFINITION,description:i,name:a,interfaces:s,directives:o,fields:u,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("union");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseUnionMemberTypes();return{kind:p.UNION_TYPE_DEFINITION,description:i,name:a,directives:s,types:o,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(c.EQUALS)?this.delimitedMany(c.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("enum");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseEnumValuesDefinition();return{kind:p.ENUM_TYPE_DEFINITION,description:i,name:a,directives:s,values:o,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(c.BRACE_L,this.parseEnumValueDefinition,c.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,i=this.parseDescription(),a=this.parseName(),s=this.parseDirectives(!0);return{kind:p.ENUM_VALUE_DEFINITION,description:i,name:a,directives:s,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("input");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseInputFieldsDefinition();return{kind:p.INPUT_OBJECT_TYPE_DEFINITION,description:i,name:a,directives:s,fields:o,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(c.BRACE_L,this.parseInputValueDef,c.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===c.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var i=this.parseDirectives(!0),a=this.optionalMany(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);if(i.length===0&&a.length===0)throw this.unexpected();return{kind:p.SCHEMA_EXTENSION,directives:i,operationTypes:a,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var i=this.parseName(),a=this.parseDirectives(!0);if(a.length===0)throw this.unexpected();return{kind:p.SCALAR_TYPE_EXTENSION,name:i,directives:a,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var i=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return{kind:p.OBJECT_TYPE_EXTENSION,name:i,interfaces:a,directives:s,fields:o,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var i=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return{kind:p.INTERFACE_TYPE_EXTENSION,name:i,interfaces:a,directives:s,fields:o,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var i=this.parseName(),a=this.parseDirectives(!0),s=this.parseUnionMemberTypes();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.UNION_TYPE_EXTENSION,name:i,directives:a,types:s,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var i=this.parseName(),a=this.parseDirectives(!0),s=this.parseEnumValuesDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.ENUM_TYPE_EXTENSION,name:i,directives:a,values:s,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var i=this.parseName(),a=this.parseDirectives(!0),s=this.parseInputFieldsDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.INPUT_OBJECT_TYPE_EXTENSION,name:i,directives:a,fields:s,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,i=this.parseDescription();this.expectKeyword("directive"),this.expectToken(c.AT);var a=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var u=this.parseDirectiveLocations();return{kind:p.DIRECTIVE_DEFINITION,description:i,name:a,arguments:s,repeatable:o,locations:u,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(c.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,i=this.parseName();if(Re[i.value]!==void 0)return i;throw this.unexpected(e)},t.loc=function(e){var i;if(((i=this._options)===null||i===void 0?void 0:i.noLocation)!==!0)return new pe(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var i=this._lexer.token;if(i.kind===e)return this._lexer.advance(),i;throw v(this._lexer.source,i.start,"Expected ".concat(ie(e),", found ").concat(K(i),"."))},t.expectOptionalToken=function(e){var i=this._lexer.token;if(i.kind===e)return this._lexer.advance(),i},t.expectKeyword=function(e){var i=this._lexer.token;if(i.kind===c.NAME&&i.value===e)this._lexer.advance();else throw v(this._lexer.source,i.start,'Expected "'.concat(e,'", found ').concat(K(i),"."))},t.expectOptionalKeyword=function(e){var i=this._lexer.token;return i.kind===c.NAME&&i.value===e?(this._lexer.advance(),!0):!1},t.unexpected=function(e){var i=e??this._lexer.token;return v(this._lexer.source,i.start,"Unexpected ".concat(K(i),"."))},t.any=function(e,i,a){this.expectToken(e);for(var s=[];!this.expectOptionalToken(a);)s.push(i.call(this));return s},t.optionalMany=function(e,i,a){if(this.expectOptionalToken(e)){var s=[];do s.push(i.call(this));while(!this.expectOptionalToken(a));return s}return[]},t.many=function(e,i,a){this.expectToken(e);var s=[];do s.push(i.call(this));while(!this.expectOptionalToken(a));return s},t.delimitedMany=function(e,i){this.expectOptionalToken(e);var a=[];do a.push(i.call(this));while(this.expectOptionalToken(e));return a},n}();function K(n){var t=n.value;return ie(n.kind)+(t!=null?' "'.concat(t,'"'):"")}function ie(n){return Ce(n)?'"'.concat(n,'"'):n}var C=new Map,Y=new Map,ae=!0,F=!1;function se(n){return n.replace(/[\s,]+/g," ").trim()}function Qe(n){return se(n.source.body.substring(n.start,n.end))}function Je(n){var t=new Set,r=[];return n.definitions.forEach(function(e){if(e.kind==="FragmentDefinition"){var i=e.name.value,a=Qe(e.loc),s=Y.get(i);s&&!s.has(a)?ae&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||Y.set(i,s=new Set),s.add(a),t.has(a)||(t.add(a),r.push(e))}else r.push(e)}),J(J({},n),{definitions:r})}function We(n){var t=new Set(n.definitions);t.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(i){var a=e[i];a&&typeof a=="object"&&t.add(a)})});var r=n.loc;return r&&(delete r.startToken,delete r.endToken),n}function Xe(n){var t=se(n);if(!C.has(t)){var r=Ye(n,{experimentalFragmentVariables:F,allowLegacyFragmentVariables:F});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");C.set(t,We(Je(r)))}return C.get(t)}function O(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof n=="string"&&(n=[n]);var e=n[0];return t.forEach(function(i,a){i&&i.kind==="Document"?e+=i.loc.source.body:e+=i,e+=n[a+1]}),Xe(e)}function ze(){C.clear(),Y.clear()}function He(){ae=!1}function $e(){F=!0}function Ze(){F=!1}var k={gql:O,resetCaches:ze,disableFragmentWarnings:He,enableExperimentalFragmentVariables:$e,disableExperimentalFragmentVariables:Ze};(function(n){n.gql=k.gql,n.resetCaches=k.resetCaches,n.disableFragmentWarnings=k.disableFragmentWarnings,n.enableExperimentalFragmentVariables=k.enableExperimentalFragmentVariables,n.disableExperimentalFragmentVariables=k.disableExperimentalFragmentVariables})(O||(O={}));O.default=O;const et=O,tt={class:"box","background-color-black":""},nt={id:"wrapperSwiper",class:"div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]"},rt={id:"gridWrapper",class:"grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1 transition-all duration-200"},it=["id"],at={class:"snap-x"},st={class:"snap-center"},ot=["src"],ct={class:"box text-wrap font-semibold hover:font-bold"},ut={__name:"Graphql",async setup(n){let t,r;const e=le([]),i=et`
  query MyQuery {
    products(where: { category: "cases" }) {
      edges {
        node {
          image {
            link
          }
          name
        }
      }
    }
  }
`,{data:a}=([t,r]=he(()=>fe(i)),t=await t,r(),t);return a&&(e.value=a,console.log(e.value,"Graphql data")),(s,o)=>(M(),B("div",tt,[_("div",nt,[_("div",rt,[(M(!0),B(de,null,ve(e.value._value.products.edges,(u,l)=>(M(),B("div",{key:l,class:"transition-[width] duration-200 ease-in-out",id:u.node.name},[_("div",at,[_("div",st,[_("img",{src:u.node.image?u.node.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,ot),_("h3",ct,me(u.node.name),1)])])],8,it))),128))])])]))}},lt=ut;export{lt as default};