(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[129],{496:function(e,n){e.exports=function(e){var n={keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter"},a={begin:"`[\\s\\S]",relevance:0},i={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},t={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,i,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},s={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},c=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),o={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},r={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},l={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[i]}]},d={begin:/using\s/,end:/$/,returnBegin:!0,contains:[t,s,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},m={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-)[\w\d]+/,relevance:0}]},p={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]},g=[p,c,a,e.NUMBER_MODE,t,s,o,i,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/\@\B/,relevance:0}],b={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return p.contains.unshift(b),{aliases:["ps","ps1"],lexemes:/-?[A-z\.\-]+/,case_insensitive:!0,keywords:n,contains:g.concat(r,l,d,m,b)}}}}]);
//# sourceMappingURL=powershell.js.map?v=3b4d9a58526a7741dcc7