const a294_0x153a=['constructor','compile','INVALID_COMMAND_SYNTAX','errors','test','rolePosition','deaf\x20--user\x20USER_ID\x20--\x20REASON','Constants','set','name','user','memberSetDeaf','guild','COLORS','client','locale','voice','deaf\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','getString','tag','resolver','apply','Command','RED','join','BASTION_ERROR_TYPE','Reason','catch','It\x20allows\x20you\x20to\x20deafen\x20(and\x20undeafen)\x20users\x20in\x20the\x20server.\x20Deafened\x20users\x20can\x27t\x20listen\x20anything\x20in\x20the\x20server\x27s\x20voice\x20channels.','exec','exports','member','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','unauthorized','author','ownerID','language','ORANGE','canManage','channel','DEAFEN_MEMBERS','send','document','resolveGuildMember'];(function(_0x158493,_0x153ab2){const _0x3c3633=function(_0x336f0e){while(--_0x336f0e){_0x158493['push'](_0x158493['shift']());}};const _0x53e540=function(){const _0x5b0613={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xd75896,_0x131bde,_0x1b3a06,_0x28473b){_0x28473b=_0x28473b||{};let _0x54dfa2=_0x131bde+'='+_0x1b3a06;let _0x498a33=0x0;for(let _0x440caa=0x0,_0x2ceb0e=_0xd75896['length'];_0x440caa<_0x2ceb0e;_0x440caa++){const _0x56741c=_0xd75896[_0x440caa];_0x54dfa2+=';\x20'+_0x56741c;const _0x1e2b89=_0xd75896[_0x56741c];_0xd75896['push'](_0x1e2b89);_0x2ceb0e=_0xd75896['length'];if(_0x1e2b89!==!![]){_0x54dfa2+='='+_0x1e2b89;}}_0x28473b['cookie']=_0x54dfa2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1608e8,_0x15885b){_0x1608e8=_0x1608e8||function(_0x370eff){return _0x370eff;};const _0x2528f0=_0x1608e8(new RegExp('(?:^|;\x20)'+_0x15885b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4c7d60=function(_0x143955,_0xb9a482){_0x143955(++_0xb9a482);};_0x4c7d60(_0x3c3633,_0x153ab2);return _0x2528f0?decodeURIComponent(_0x2528f0[0x1]):undefined;}};const _0x3a1ddc=function(){const _0x2c7b08=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c7b08['test'](_0x5b0613['removeCookie']['toString']());};_0x5b0613['updateCookie']=_0x3a1ddc;let _0xf76ef0='';const _0x34120a=_0x5b0613['updateCookie']();if(!_0x34120a){_0x5b0613['setCookie'](['*'],'counter',0x1);}else if(_0x34120a){_0xf76ef0=_0x5b0613['getCookie'](null,'counter');}else{_0x5b0613['removeCookie']();}};_0x53e540();}(a294_0x153a,0xbe));const a294_0x3c36=function(_0x158493,_0x153ab2){_0x158493=_0x158493-0x0;let _0x3c3633=a294_0x153a[_0x158493];return _0x3c3633;};const a294_0x5b0613=function(){let _0x240ef3=!![];return function(_0xeb8790,_0x31df1e){const _0x439320=_0x240ef3?function(){if(_0x31df1e){const _0x3ad1bd=_0x31df1e[a294_0x3c36('0xb')](_0xeb8790,arguments);_0x31df1e=null;return _0x3ad1bd;}}:function(){};_0x240ef3=![];return _0x439320;};}();const a294_0x336f0e=a294_0x5b0613(this,function(){const _0x4312a6=function(){const _0x398da9=_0x4312a6[a294_0x3c36('0x23')](a294_0x3c36('0x17'))()[a294_0x3c36('0x24')](a294_0x3c36('0x16'));return!_0x398da9[a294_0x3c36('0x27')](a294_0x336f0e);};return _0x4312a6();});a294_0x336f0e();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require('../../utils/errors');module[a294_0x3c36('0x14')]=class Deaf extends tesseract_1[a294_0x3c36('0xc')]{constructor(){super('deaf',{'description':a294_0x3c36('0x12'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':[a294_0x3c36('0x2b')],'string':[a294_0x3c36('0x0')]},'scope':a294_0x3c36('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['DEAFEN_MEMBERS'],'userPermissions':[a294_0x3c36('0x1f')],'syntax':[a294_0x3c36('0x29'),a294_0x3c36('0x7')]});this[a294_0x3c36('0x13')]=async(_0x10b51b,_0x1e8991)=>{const _0x2f44d3=this[a294_0x3c36('0x4')][a294_0x3c36('0xa')][a294_0x3c36('0x22')](_0x10b51b[a294_0x3c36('0x2')],_0x1e8991[a294_0x3c36('0x0')]);if(!_0x2f44d3)throw new errors['DiscordError'](errors[a294_0x3c36('0xf')][a294_0x3c36('0x25')],this[a294_0x3c36('0x2c')]);if(_0x10b51b[a294_0x3c36('0x19')]['id']!==_0x10b51b['guild'][a294_0x3c36('0x1a')]&&!_0x10b51b[a294_0x3c36('0x15')][a294_0x3c36('0x1d')](_0x2f44d3)){return await _0x10b51b[a294_0x3c36('0x1e')][a294_0x3c36('0x20')]({'embed':{'color':tesseract_1[a294_0x3c36('0x2a')][a294_0x3c36('0x3')][a294_0x3c36('0xd')],'title':this[a294_0x3c36('0x4')][a294_0x3c36('0x5')]['getString'](_0x10b51b[a294_0x3c36('0x2')][a294_0x3c36('0x21')][a294_0x3c36('0x1b')],a294_0x3c36('0x26'),a294_0x3c36('0x18')),'description':this[a294_0x3c36('0x4')]['locale']['getString'](_0x10b51b[a294_0x3c36('0x2')][a294_0x3c36('0x21')][a294_0x3c36('0x1b')],'errors',a294_0x3c36('0x28'),_0x10b51b[a294_0x3c36('0x19')][a294_0x3c36('0x9')],_0x2f44d3['user'][a294_0x3c36('0x9')])}})['catch'](()=>{});}const _0x5ae9fd=_0x1e8991['_'][a294_0x3c36('0xe')]('\x20')||'-';await _0x2f44d3[a294_0x3c36('0x6')]['setDeaf'](!!_0x1e8991[a294_0x3c36('0x2b')],_0x5ae9fd);await _0x10b51b['channel'][a294_0x3c36('0x20')]({'embed':{'color':tesseract_1[a294_0x3c36('0x2a')]['COLORS'][a294_0x3c36('0x1c')],'description':_0x1e8991[a294_0x3c36('0x2b')]?this[a294_0x3c36('0x4')][a294_0x3c36('0x5')]['getString'](_0x10b51b['guild']['document'][a294_0x3c36('0x1b')],'info',a294_0x3c36('0x1'),_0x10b51b[a294_0x3c36('0x19')][a294_0x3c36('0x9')],_0x2f44d3[a294_0x3c36('0x0')][a294_0x3c36('0x9')]):this[a294_0x3c36('0x4')][a294_0x3c36('0x5')][a294_0x3c36('0x8')](_0x10b51b[a294_0x3c36('0x2')][a294_0x3c36('0x21')]['language'],'info','memberUnsetDeaf',_0x10b51b['author'][a294_0x3c36('0x9')],_0x2f44d3['user'][a294_0x3c36('0x9')]),'fields':[{'name':a294_0x3c36('0x10'),'value':_0x5ae9fd}],'footer':{'text':_0x2f44d3['id']}}})[a294_0x3c36('0x11')](()=>{});};}};