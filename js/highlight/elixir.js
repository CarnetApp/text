(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[52],{469:function(e,n,i){"use strict";e.exports=function(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",i="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0",s={className:"subst",begin:"#\\{",end:"}",lexemes:n,keywords:i},a={className:"string",begin:"~[a-z](?=[/|([{<\"'])",contains:[{endsParent:!0,contains:[{contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]}]}]},b={className:"string",begin:"~[A-Z](?=[/|([{<\"'])",contains:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/\</,end:/\>/}]},d={className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},t={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},g=e.inherit(t,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),o=[d,b,a,e.HASH_COMMENT_MODE,g,t,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[d,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},{className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return s.contains=o,{lexemes:n,keywords:i,contains:o}}}}]);
//# sourceMappingURL=elixir.js.map?v=13fbecc567fb3fcd9159