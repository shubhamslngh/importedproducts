import{s as ae,T as f,t as se,K as p,L as oe,_ as Y}from"./entry.qT_yumLZ.js";function g(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(i){return typeof i}:g=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},g(t)}function ce(t){return g(t)=="object"&&t!==null}var z=typeof Symbol=="function"&&Symbol.toStringTag!=null?Symbol.toStringTag:"@@toStringTag";function U(t,n){for(var i=/\r\n|[\n\r]/g,e=1,r=n+1,a;(a=i.exec(t.body))&&a.index<n;)e+=1,r=n+1-(a.index+a[0].length);return{line:e,column:r}}function ue(t){return H(t.source,U(t.source,t.start))}function H(t,n){var i=t.locationOffset.column-1,e=S(i)+t.body,r=n.line-1,a=t.locationOffset.line-1,s=n.line+a,o=n.line===1?i:0,u=n.column+o,l="".concat(t.name,":").concat(s,":").concat(u,`
`),d=e.split(/\r\n|[\n\r]/g),E=d[r];if(E.length>120){for(var N=Math.floor(u/80),h=u%80,m=[],y=0;y<E.length;y+=80)m.push(E.slice(y,y+80));return l+q([["".concat(s),m[0]]].concat(m.slice(1,N+1).map(function(_){return["",_]}),[[" ",S(h-1)+"^"],["",m[N+1]]]))}return l+q([["".concat(s-1),d[r-1]],["".concat(s),E],["",S(u-1)+"^"],["".concat(s+1),d[r+1]]])}function q(t){var n=t.filter(function(e){e[0];var r=e[1];return r!==void 0}),i=Math.max.apply(Math,n.map(function(e){var r=e[0];return r.length}));return n.map(function(e){var r=e[0],a=e[1];return pe(i,r)+(a?" | "+a:" |")}).join(`
`)}function S(t){return Array(t+1).join(" ")}function pe(t,n){return S(t-n.length)+n}function w(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(i){return typeof i}:w=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},w(t)}function Q(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,e)}return i}function le(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(i),!0).forEach(function(e){he(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Q(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function he(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function fe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function J(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function de(t,n,i){return n&&J(t.prototype,n),i&&J(t,i),t}function ve(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&I(t,n)}function me(t){var n=Z();return function(){var e=A(t),r;if(n){var a=A(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return $(this,r)}}function $(t,n){return n&&(w(n)==="object"||typeof n=="function")?n:D(t)}function D(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){var n=typeof Map=="function"?new Map:void 0;return V=function(e){if(e===null||!Ee(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return R(e,arguments,A(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),I(r,e)},V(t)}function R(t,n,i){return Z()?R=Reflect.construct:R=function(r,a,s){var o=[null];o.push.apply(o,a);var u=Function.bind.apply(r,o),l=new u;return s&&I(l,s.prototype),l},R.apply(null,arguments)}function Z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ee(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function I(t,n){return I=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},I(t,n)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},A(t)}var ye=function(t){ve(i,t);var n=me(i);function i(e,r,a,s,o,u,l){var d,E,N,h;fe(this,i),h=n.call(this,e),h.name="GraphQLError",h.originalError=u??void 0,h.nodes=W(Array.isArray(r)?r:r?[r]:void 0);for(var m=[],y=0,_=(F=h.nodes)!==null&&F!==void 0?F:[];y<_.length;y++){var F,ie=_[y],j=ie.loc;j!=null&&m.push(j)}m=W(m),h.source=a??((d=m)===null||d===void 0?void 0:d[0].source),h.positions=s??((E=m)===null||E===void 0?void 0:E.map(function(x){return x.start})),h.locations=s&&a?s.map(function(x){return U(a,x)}):(N=m)===null||N===void 0?void 0:N.map(function(x){return U(x.source,x.start)}),h.path=o??void 0;var G=u==null?void 0:u.extensions;return l==null&&ce(G)?h.extensions=le({},G):h.extensions=l??{},Object.defineProperties(D(h),{message:{enumerable:!0},locations:{enumerable:h.locations!=null},path:{enumerable:h.path!=null},extensions:{enumerable:h.extensions!=null&&Object.keys(h.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?(Object.defineProperty(D(h),"stack",{value:u.stack,writable:!0,configurable:!0}),$(h)):(Error.captureStackTrace?Error.captureStackTrace(D(h),i):Object.defineProperty(D(h),"stack",{value:Error().stack,writable:!0,configurable:!0}),h)}return de(i,[{key:"toString",value:function(){return Te(this)}},{key:z,get:function(){return"Object"}}]),i}(V(Error));function W(t){return t===void 0||t.length===0?void 0:t}function Te(t){var n=t.message;if(t.nodes)for(var i=0,e=t.nodes;i<e.length;i++){var r=e[i];r.loc&&(n+=`

`+ue(r.loc))}else if(t.source&&t.locations)for(var a=0,s=t.locations;a<s.length;a++){var o=s[a];n+=`

`+H(t.source,o)}return n}function v(t,n,i){return new ye("Syntax Error: ".concat(i),void 0,t,[n])}var c=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function P(t,n){var i=!!t;if(!i)throw new Error(n)}const Ne=function(n,i){return n instanceof i};function X(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function xe(t,n,i){return n&&X(t.prototype,n),i&&X(t,i),t}var ee=function(){function t(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"GraphQL request",e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{line:1,column:1};typeof n=="string"||P(0,"Body must be a string. Received: ".concat(ae(n),".")),this.body=n,this.name=i,this.locationOffset=e,this.locationOffset.line>0||P(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||P(0,"column in locationOffset is 1-indexed and must be positive.")}return xe(t,[{key:z,get:function(){return"Source"}}]),t}();function Oe(t){return Ne(t,ee)}var ke=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),De=function(){function t(i){var e=new f(c.SOF,0,0,0,0,null);this.source=i,this.lastToken=e,this.token=e,this.line=1,this.lineStart=0}var n=t.prototype;return n.advance=function(){this.lastToken=this.token;var e=this.token=this.lookahead();return e},n.lookahead=function(){var e=this.token;if(e.kind!==c.EOF)do{var r;e=(r=e.next)!==null&&r!==void 0?r:e.next=Ae(this,e)}while(e.kind===c.COMMENT);return e},t}();function Ie(t){return t===c.BANG||t===c.DOLLAR||t===c.AMP||t===c.PAREN_L||t===c.PAREN_R||t===c.SPREAD||t===c.COLON||t===c.EQUALS||t===c.AT||t===c.BRACKET_L||t===c.BRACKET_R||t===c.BRACE_L||t===c.PIPE||t===c.BRACE_R}function T(t){return isNaN(t)?c.EOF:t<127?JSON.stringify(String.fromCharCode(t)):'"\\u'.concat(("00"+t.toString(16).toUpperCase()).slice(-4),'"')}function Ae(t,n){for(var i=t.source,e=i.body,r=e.length,a=n.end;a<r;){var s=e.charCodeAt(a),o=t.line,u=1+a-t.lineStart;switch(s){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++t.line,t.lineStart=a;continue;case 13:e.charCodeAt(a+1)===10?a+=2:++a,++t.line,t.lineStart=a;continue;case 33:return new f(c.BANG,a,a+1,o,u,n);case 35:return be(i,a,o,u,n);case 36:return new f(c.DOLLAR,a,a+1,o,u,n);case 38:return new f(c.AMP,a,a+1,o,u,n);case 40:return new f(c.PAREN_L,a,a+1,o,u,n);case 41:return new f(c.PAREN_R,a,a+1,o,u,n);case 46:if(e.charCodeAt(a+1)===46&&e.charCodeAt(a+2)===46)return new f(c.SPREAD,a,a+3,o,u,n);break;case 58:return new f(c.COLON,a,a+1,o,u,n);case 61:return new f(c.EQUALS,a,a+1,o,u,n);case 64:return new f(c.AT,a,a+1,o,u,n);case 91:return new f(c.BRACKET_L,a,a+1,o,u,n);case 93:return new f(c.BRACKET_R,a,a+1,o,u,n);case 123:return new f(c.BRACE_L,a,a+1,o,u,n);case 124:return new f(c.PIPE,a,a+1,o,u,n);case 125:return new f(c.BRACE_R,a,a+1,o,u,n);case 34:return e.charCodeAt(a+1)===34&&e.charCodeAt(a+2)===34?we(i,a,o,u,n,t):Se(i,a,o,u,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return ge(i,a,s,o,u,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Le(i,a,o,u,n)}throw v(i,a,_e(s))}var l=t.line,d=1+a-t.lineStart;return new f(c.EOF,r,r,l,d,n)}function _e(t){return t<32&&t!==9&&t!==10&&t!==13?"Cannot contain the invalid character ".concat(T(t),"."):t===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:"Cannot parse the unexpected character ".concat(T(t),".")}function be(t,n,i,e,r){var a=t.body,s,o=n;do s=a.charCodeAt(++o);while(!isNaN(s)&&(s>31||s===9));return new f(c.COMMENT,n,o,i,e,r,a.slice(n+1,o))}function ge(t,n,i,e,r,a){var s=t.body,o=i,u=n,l=!1;if(o===45&&(o=s.charCodeAt(++u)),o===48){if(o=s.charCodeAt(++u),o>=48&&o<=57)throw v(t,u,"Invalid number, unexpected digit after 0: ".concat(T(o),"."))}else u=M(t,u,o),o=s.charCodeAt(u);if(o===46&&(l=!0,o=s.charCodeAt(++u),u=M(t,u,o),o=s.charCodeAt(u)),(o===69||o===101)&&(l=!0,o=s.charCodeAt(++u),(o===43||o===45)&&(o=s.charCodeAt(++u)),u=M(t,u,o),o=s.charCodeAt(u)),o===46||Ce(o))throw v(t,u,"Invalid number, expected digit but got: ".concat(T(o),"."));return new f(l?c.FLOAT:c.INT,n,u,e,r,a,s.slice(n,u))}function M(t,n,i){var e=t.body,r=n,a=i;if(a>=48&&a<=57){do a=e.charCodeAt(++r);while(a>=48&&a<=57);return r}throw v(t,r,"Invalid number, expected digit but got: ".concat(T(a),"."))}function Se(t,n,i,e,r){for(var a=t.body,s=n+1,o=s,u=0,l="";s<a.length&&!isNaN(u=a.charCodeAt(s))&&u!==10&&u!==13;){if(u===34)return l+=a.slice(o,s),new f(c.STRING,n,s+1,i,e,r,l);if(u<32&&u!==9)throw v(t,s,"Invalid character within String: ".concat(T(u),"."));if(++s,u===92){switch(l+=a.slice(o,s-1),u=a.charCodeAt(s),u){case 34:l+='"';break;case 47:l+="/";break;case 92:l+="\\";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+=`
`;break;case 114:l+="\r";break;case 116:l+="	";break;case 117:{var d=Re(a.charCodeAt(s+1),a.charCodeAt(s+2),a.charCodeAt(s+3),a.charCodeAt(s+4));if(d<0){var E=a.slice(s+1,s+5);throw v(t,s,"Invalid character escape sequence: \\u".concat(E,"."))}l+=String.fromCharCode(d),s+=4;break}default:throw v(t,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(u),"."))}++s,o=s}}throw v(t,s,"Unterminated string.")}function we(t,n,i,e,r,a){for(var s=t.body,o=n+3,u=o,l=0,d="";o<s.length&&!isNaN(l=s.charCodeAt(o));){if(l===34&&s.charCodeAt(o+1)===34&&s.charCodeAt(o+2)===34)return d+=s.slice(u,o),new f(c.BLOCK_STRING,n,o+3,i,e,r,se(d));if(l<32&&l!==9&&l!==10&&l!==13)throw v(t,o,"Invalid character within String: ".concat(T(l),"."));l===10?(++o,++a.line,a.lineStart=o):l===13?(s.charCodeAt(o+1)===10?o+=2:++o,++a.line,a.lineStart=o):l===92&&s.charCodeAt(o+1)===34&&s.charCodeAt(o+2)===34&&s.charCodeAt(o+3)===34?(d+=s.slice(u,o)+'"""',o+=4,u=o):++o}throw v(t,o,"Unterminated string.")}function Re(t,n,i,e){return b(t)<<12|b(n)<<8|b(i)<<4|b(e)}function b(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Le(t,n,i,e,r){for(var a=t.body,s=a.length,o=n+1,u=0;o!==s&&!isNaN(u=a.charCodeAt(o))&&(u===95||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122);)++o;return new f(c.NAME,n,o,i,e,r,a.slice(n,o))}function Ce(t){return t===95||t>=65&&t<=90||t>=97&&t<=122}function Fe(t,n){var i=new Pe(t,n);return i.parseDocument()}var Pe=function(){function t(i,e){var r=Oe(i)?i:new ee(i);this._lexer=new De(r),this._options=e}var n=t.prototype;return n.parseName=function(){var e=this.expectToken(c.NAME);return{kind:p.NAME,value:e.value,loc:this.loc(e)}},n.parseDocument=function(){var e=this._lexer.token;return{kind:p.DOCUMENT,definitions:this.many(c.SOF,this.parseDefinition,c.EOF),loc:this.loc(e)}},n.parseDefinition=function(){if(this.peek(c.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(c.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},n.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(c.BRACE_L))return{kind:p.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var r=this.parseOperationType(),a;return this.peek(c.NAME)&&(a=this.parseName()),{kind:p.OPERATION_DEFINITION,operation:r,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},n.parseOperationType=function(){var e=this.expectToken(c.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},n.parseVariableDefinitions=function(){return this.optionalMany(c.PAREN_L,this.parseVariableDefinition,c.PAREN_R)},n.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:p.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(c.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(c.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},n.parseVariable=function(){var e=this._lexer.token;return this.expectToken(c.DOLLAR),{kind:p.VARIABLE,name:this.parseName(),loc:this.loc(e)}},n.parseSelectionSet=function(){var e=this._lexer.token;return{kind:p.SELECTION_SET,selections:this.many(c.BRACE_L,this.parseSelection,c.BRACE_R),loc:this.loc(e)}},n.parseSelection=function(){return this.peek(c.SPREAD)?this.parseFragment():this.parseField()},n.parseField=function(){var e=this._lexer.token,r=this.parseName(),a,s;return this.expectOptionalToken(c.COLON)?(a=r,s=this.parseName()):s=r,{kind:p.FIELD,alias:a,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(c.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(e)}},n.parseArguments=function(e){var r=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(c.PAREN_L,r,c.PAREN_R)},n.parseArgument=function(){var e=this._lexer.token,r=this.parseName();return this.expectToken(c.COLON),{kind:p.ARGUMENT,name:r,value:this.parseValueLiteral(!1),loc:this.loc(e)}},n.parseConstArgument=function(){var e=this._lexer.token;return{kind:p.ARGUMENT,name:this.parseName(),value:(this.expectToken(c.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},n.parseFragment=function(){var e=this._lexer.token;this.expectToken(c.SPREAD);var r=this.expectOptionalKeyword("on");return!r&&this.peek(c.NAME)?{kind:p.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:p.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},n.parseFragmentDefinition=function(){var e,r=this._lexer.token;return this.expectKeyword("fragment"),((e=this._options)===null||e===void 0?void 0:e.experimentalFragmentVariables)===!0?{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(r)}:{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(r)}},n.parseFragmentName=function(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()},n.parseValueLiteral=function(e){var r=this._lexer.token;switch(r.kind){case c.BRACKET_L:return this.parseList(e);case c.BRACE_L:return this.parseObject(e);case c.INT:return this._lexer.advance(),{kind:p.INT,value:r.value,loc:this.loc(r)};case c.FLOAT:return this._lexer.advance(),{kind:p.FLOAT,value:r.value,loc:this.loc(r)};case c.STRING:case c.BLOCK_STRING:return this.parseStringLiteral();case c.NAME:switch(this._lexer.advance(),r.value){case"true":return{kind:p.BOOLEAN,value:!0,loc:this.loc(r)};case"false":return{kind:p.BOOLEAN,value:!1,loc:this.loc(r)};case"null":return{kind:p.NULL,loc:this.loc(r)};default:return{kind:p.ENUM,value:r.value,loc:this.loc(r)}}case c.DOLLAR:if(!e)return this.parseVariable();break}throw this.unexpected()},n.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:p.STRING,value:e.value,block:e.kind===c.BLOCK_STRING,loc:this.loc(e)}},n.parseList=function(e){var r=this,a=this._lexer.token,s=function(){return r.parseValueLiteral(e)};return{kind:p.LIST,values:this.any(c.BRACKET_L,s,c.BRACKET_R),loc:this.loc(a)}},n.parseObject=function(e){var r=this,a=this._lexer.token,s=function(){return r.parseObjectField(e)};return{kind:p.OBJECT,fields:this.any(c.BRACE_L,s,c.BRACE_R),loc:this.loc(a)}},n.parseObjectField=function(e){var r=this._lexer.token,a=this.parseName();return this.expectToken(c.COLON),{kind:p.OBJECT_FIELD,name:a,value:this.parseValueLiteral(e),loc:this.loc(r)}},n.parseDirectives=function(e){for(var r=[];this.peek(c.AT);)r.push(this.parseDirective(e));return r},n.parseDirective=function(e){var r=this._lexer.token;return this.expectToken(c.AT),{kind:p.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(r)}},n.parseTypeReference=function(){var e=this._lexer.token,r;return this.expectOptionalToken(c.BRACKET_L)?(r=this.parseTypeReference(),this.expectToken(c.BRACKET_R),r={kind:p.LIST_TYPE,type:r,loc:this.loc(e)}):r=this.parseNamedType(),this.expectOptionalToken(c.BANG)?{kind:p.NON_NULL_TYPE,type:r,loc:this.loc(e)}:r},n.parseNamedType=function(){var e=this._lexer.token;return{kind:p.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},n.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===c.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},n.peekDescription=function(){return this.peek(c.STRING)||this.peek(c.BLOCK_STRING)},n.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},n.parseSchemaDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");var a=this.parseDirectives(!0),s=this.many(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);return{kind:p.SCHEMA_DEFINITION,description:r,directives:a,operationTypes:s,loc:this.loc(e)}},n.parseOperationTypeDefinition=function(){var e=this._lexer.token,r=this.parseOperationType();this.expectToken(c.COLON);var a=this.parseNamedType();return{kind:p.OPERATION_TYPE_DEFINITION,operation:r,type:a,loc:this.loc(e)}},n.parseScalarTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");var a=this.parseName(),s=this.parseDirectives(!0);return{kind:p.SCALAR_TYPE_DEFINITION,description:r,name:a,directives:s,loc:this.loc(e)}},n.parseObjectTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");var a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),u=this.parseFieldsDefinition();return{kind:p.OBJECT_TYPE_DEFINITION,description:r,name:a,interfaces:s,directives:o,fields:u,loc:this.loc(e)}},n.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(((e=this._options)===null||e===void 0?void 0:e.allowLegacySDLImplementsInterfaces)===!0){var r=[];this.expectOptionalToken(c.AMP);do r.push(this.parseNamedType());while(this.expectOptionalToken(c.AMP)||this.peek(c.NAME));return r}return this.delimitedMany(c.AMP,this.parseNamedType)},n.parseFieldsDefinition=function(){var e;return((e=this._options)===null||e===void 0?void 0:e.allowLegacySDLEmptyFields)===!0&&this.peek(c.BRACE_L)&&this._lexer.lookahead().kind===c.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(c.BRACE_L,this.parseFieldDefinition,c.BRACE_R)},n.parseFieldDefinition=function(){var e=this._lexer.token,r=this.parseDescription(),a=this.parseName(),s=this.parseArgumentDefs();this.expectToken(c.COLON);var o=this.parseTypeReference(),u=this.parseDirectives(!0);return{kind:p.FIELD_DEFINITION,description:r,name:a,arguments:s,type:o,directives:u,loc:this.loc(e)}},n.parseArgumentDefs=function(){return this.optionalMany(c.PAREN_L,this.parseInputValueDef,c.PAREN_R)},n.parseInputValueDef=function(){var e=this._lexer.token,r=this.parseDescription(),a=this.parseName();this.expectToken(c.COLON);var s=this.parseTypeReference(),o;this.expectOptionalToken(c.EQUALS)&&(o=this.parseValueLiteral(!0));var u=this.parseDirectives(!0);return{kind:p.INPUT_VALUE_DEFINITION,description:r,name:a,type:s,defaultValue:o,directives:u,loc:this.loc(e)}},n.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");var a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),u=this.parseFieldsDefinition();return{kind:p.INTERFACE_TYPE_DEFINITION,description:r,name:a,interfaces:s,directives:o,fields:u,loc:this.loc(e)}},n.parseUnionTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseUnionMemberTypes();return{kind:p.UNION_TYPE_DEFINITION,description:r,name:a,directives:s,types:o,loc:this.loc(e)}},n.parseUnionMemberTypes=function(){return this.expectOptionalToken(c.EQUALS)?this.delimitedMany(c.PIPE,this.parseNamedType):[]},n.parseEnumTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseEnumValuesDefinition();return{kind:p.ENUM_TYPE_DEFINITION,description:r,name:a,directives:s,values:o,loc:this.loc(e)}},n.parseEnumValuesDefinition=function(){return this.optionalMany(c.BRACE_L,this.parseEnumValueDefinition,c.BRACE_R)},n.parseEnumValueDefinition=function(){var e=this._lexer.token,r=this.parseDescription(),a=this.parseName(),s=this.parseDirectives(!0);return{kind:p.ENUM_VALUE_DEFINITION,description:r,name:a,directives:s,loc:this.loc(e)}},n.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");var a=this.parseName(),s=this.parseDirectives(!0),o=this.parseInputFieldsDefinition();return{kind:p.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:a,directives:s,fields:o,loc:this.loc(e)}},n.parseInputFieldsDefinition=function(){return this.optionalMany(c.BRACE_L,this.parseInputValueDef,c.BRACE_R)},n.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===c.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},n.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var r=this.parseDirectives(!0),a=this.optionalMany(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);if(r.length===0&&a.length===0)throw this.unexpected();return{kind:p.SCHEMA_EXTENSION,directives:r,operationTypes:a,loc:this.loc(e)}},n.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var r=this.parseName(),a=this.parseDirectives(!0);if(a.length===0)throw this.unexpected();return{kind:p.SCALAR_TYPE_EXTENSION,name:r,directives:a,loc:this.loc(e)}},n.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var r=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return{kind:p.OBJECT_TYPE_EXTENSION,name:r,interfaces:a,directives:s,fields:o,loc:this.loc(e)}},n.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var r=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return{kind:p.INTERFACE_TYPE_EXTENSION,name:r,interfaces:a,directives:s,fields:o,loc:this.loc(e)}},n.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var r=this.parseName(),a=this.parseDirectives(!0),s=this.parseUnionMemberTypes();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.UNION_TYPE_EXTENSION,name:r,directives:a,types:s,loc:this.loc(e)}},n.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var r=this.parseName(),a=this.parseDirectives(!0),s=this.parseEnumValuesDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.ENUM_TYPE_EXTENSION,name:r,directives:a,values:s,loc:this.loc(e)}},n.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var r=this.parseName(),a=this.parseDirectives(!0),s=this.parseInputFieldsDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return{kind:p.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:a,fields:s,loc:this.loc(e)}},n.parseDirectiveDefinition=function(){var e=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(c.AT);var a=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var u=this.parseDirectiveLocations();return{kind:p.DIRECTIVE_DEFINITION,description:r,name:a,arguments:s,repeatable:o,locations:u,loc:this.loc(e)}},n.parseDirectiveLocations=function(){return this.delimitedMany(c.PIPE,this.parseDirectiveLocation)},n.parseDirectiveLocation=function(){var e=this._lexer.token,r=this.parseName();if(ke[r.value]!==void 0)return r;throw this.unexpected(e)},n.loc=function(e){var r;if(((r=this._options)===null||r===void 0?void 0:r.noLocation)!==!0)return new oe(e,this._lexer.lastToken,this._lexer.source)},n.peek=function(e){return this._lexer.token.kind===e},n.expectToken=function(e){var r=this._lexer.token;if(r.kind===e)return this._lexer.advance(),r;throw v(this._lexer.source,r.start,"Expected ".concat(te(e),", found ").concat(B(r),"."))},n.expectOptionalToken=function(e){var r=this._lexer.token;if(r.kind===e)return this._lexer.advance(),r},n.expectKeyword=function(e){var r=this._lexer.token;if(r.kind===c.NAME&&r.value===e)this._lexer.advance();else throw v(this._lexer.source,r.start,'Expected "'.concat(e,'", found ').concat(B(r),"."))},n.expectOptionalKeyword=function(e){var r=this._lexer.token;return r.kind===c.NAME&&r.value===e?(this._lexer.advance(),!0):!1},n.unexpected=function(e){var r=e??this._lexer.token;return v(this._lexer.source,r.start,"Unexpected ".concat(B(r),"."))},n.any=function(e,r,a){this.expectToken(e);for(var s=[];!this.expectOptionalToken(a);)s.push(r.call(this));return s},n.optionalMany=function(e,r,a){if(this.expectOptionalToken(e)){var s=[];do s.push(r.call(this));while(!this.expectOptionalToken(a));return s}return[]},n.many=function(e,r,a){this.expectToken(e);var s=[];do s.push(r.call(this));while(!this.expectOptionalToken(a));return s},n.delimitedMany=function(e,r){this.expectOptionalToken(e);var a=[];do a.push(r.call(this));while(this.expectOptionalToken(e));return a},t}();function B(t){var n=t.value;return te(t.kind)+(n!=null?' "'.concat(n,'"'):"")}function te(t){return Ie(t)?'"'.concat(t,'"'):t}var L=new Map,K=new Map,ne=!0,C=!1;function re(t){return t.replace(/[\s,]+/g," ").trim()}function Me(t){return re(t.source.body.substring(t.start,t.end))}function Be(t){var n=new Set,i=[];return t.definitions.forEach(function(e){if(e.kind==="FragmentDefinition"){var r=e.name.value,a=Me(e.loc),s=K.get(r);s&&!s.has(a)?ne&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||K.set(r,s=new Set),s.add(a),n.has(a)||(n.add(a),i.push(e))}else i.push(e)}),Y(Y({},t),{definitions:i})}function Ue(t){var n=new Set(t.definitions);n.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(r){var a=e[r];a&&typeof a=="object"&&n.add(a)})});var i=t.loc;return i&&(delete i.startToken,delete i.endToken),t}function Ve(t){var n=re(t);if(!L.has(n)){var i=Fe(t,{experimentalFragmentVariables:C,allowLegacyFragmentVariables:C});if(!i||i.kind!=="Document")throw new Error("Not a valid GraphQL document.");L.set(n,Ue(Be(i)))}return L.get(n)}function O(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];typeof t=="string"&&(t=[t]);var e=t[0];return n.forEach(function(r,a){r&&r.kind==="Document"?e+=r.loc.source.body:e+=r,e+=t[a+1]}),Ve(e)}function Ke(){L.clear(),K.clear()}function je(){ne=!1}function Ge(){C=!0}function Ye(){C=!1}var k={gql:O,resetCaches:Ke,disableFragmentWarnings:je,enableExperimentalFragmentVariables:Ge,disableExperimentalFragmentVariables:Ye};(function(t){t.gql=k.gql,t.resetCaches=k.resetCaches,t.disableFragmentWarnings=k.disableFragmentWarnings,t.enableExperimentalFragmentVariables=k.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=k.disableExperimentalFragmentVariables})(O||(O={}));O.default=O;const Qe=O;export{O as a,Qe as g};
