const a263_0x1734=['BASTION_ERROR_TYPE','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','port','maxplayers','\x20minutes','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','guild','Players','host','sort','\x20•\x20Password\x20Protected','gameServer','score','name','/games/','INVALID_COMMAND_SYNTAX','exec','length','concat','\x20•\x20Powered\x20by\x20Omnic','ping','players','IRIS','send','time','apply','\x20/\x20','filter','Constants','COLORS','It\x20allows\x20you\x20to\x20fetch\x20information\x20from\x20nearly\x20any\x20game\x20server\x20that\x20makes\x20its\x20status\x20publicly\x20available.','bots','Map','Connect','makeRequest','constructor','@bastion/tesseract','json','slice','map','channel','compile','team','password'];(function(_0x3de7f3,_0x1734c1){const _0x2ba104=function(_0x2b9267){while(--_0x2b9267){_0x3de7f3['push'](_0x3de7f3['shift']());}};const _0x3b86d0=function(){const _0x3cb971={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x955a3d,_0x9238cd,_0x4abbc4,_0x4d5183){_0x4d5183=_0x4d5183||{};let _0x620918=_0x9238cd+'='+_0x4abbc4;let _0x47e9e0=0x0;for(let _0x5bbbb9=0x0,_0x1e383f=_0x955a3d['length'];_0x5bbbb9<_0x1e383f;_0x5bbbb9++){const _0x47c0f3=_0x955a3d[_0x5bbbb9];_0x620918+=';\x20'+_0x47c0f3;const _0x421000=_0x955a3d[_0x47c0f3];_0x955a3d['push'](_0x421000);_0x1e383f=_0x955a3d['length'];if(_0x421000!==!![]){_0x620918+='='+_0x421000;}}_0x4d5183['cookie']=_0x620918;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37bcb1,_0x161cb6){_0x37bcb1=_0x37bcb1||function(_0x4ca92b){return _0x4ca92b;};const _0x475fbf=_0x37bcb1(new RegExp('(?:^|;\x20)'+_0x161cb6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x18d8db=function(_0x1a43d1,_0x347fae){_0x1a43d1(++_0x347fae);};_0x18d8db(_0x2ba104,_0x1734c1);return _0x475fbf?decodeURIComponent(_0x475fbf[0x1]):undefined;}};const _0x22f28d=function(){const _0x54ab7b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x54ab7b['test'](_0x3cb971['removeCookie']['toString']());};_0x3cb971['updateCookie']=_0x22f28d;let _0x2df456='';const _0x105463=_0x3cb971['updateCookie']();if(!_0x105463){_0x3cb971['setCookie'](['*'],'counter',0x1);}else if(_0x105463){_0x2df456=_0x3cb971['getCookie'](null,'counter');}else{_0x3cb971['removeCookie']();}};_0x3b86d0();}(a263_0x1734,0x168));const a263_0x2ba1=function(_0x3de7f3,_0x1734c1){_0x3de7f3=_0x3de7f3-0x0;let _0x2ba104=a263_0x1734[_0x3de7f3];return _0x2ba104;};const a263_0x3cb971=function(){let _0x106fbc=!![];return function(_0x3037d9,_0x690d14){const _0x5b11d6=_0x106fbc?function(){if(_0x690d14){const _0x1e7f91=_0x690d14[a263_0x2ba1('0x1a')](_0x3037d9,arguments);_0x690d14=null;return _0x1e7f91;}}:function(){};_0x106fbc=![];return _0x5b11d6;};}();const a263_0x2b9267=a263_0x3cb971(this,function(){const _0xa9d647=function(){const _0x3b1f8e=_0xa9d647[a263_0x2ba1('0x24')](a263_0x2ba1('0x2'))()[a263_0x2ba1('0x2a')](a263_0x2ba1('0x6'));return!_0x3b1f8e['test'](a263_0x2b9267);};return _0xa9d647();});a263_0x2b9267();'use strict';const tesseract_1=require(a263_0x2ba1('0x25'));const errors=require('../../utils/errors');const omnic=require('../../utils/omnic');module[a263_0x2ba1('0x1')]=class GameServerCommand extends tesseract_1['Command']{constructor(){super(a263_0x2ba1('0xc'),{'description':a263_0x2ba1('0x1f'),'triggers':[],'arguments':{'alias':{'host':['h'],'port':['p']},'string':[a263_0x2ba1('0x9'),a263_0x2ba1('0x3')]},'scope':a263_0x2ba1('0x7'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['gameServer\x20GAME\x20--host\x20HOSTNAME\x20--port\x20PORT']});this[a263_0x2ba1('0x11')]=async(_0x38ceb5,_0x32c648)=>{if(!_0x32c648['_'][a263_0x2ba1('0x12')])throw new errors['DiscordError'](errors[a263_0x2ba1('0x0')][a263_0x2ba1('0x10')],this[a263_0x2ba1('0xe')]);const _0x52748a=_0x32c648['_']['join']('');const _0x43b1d0=await omnic[a263_0x2ba1('0x23')](a263_0x2ba1('0xf')+_0x52748a+'/server/'+_0x32c648[a263_0x2ba1('0x9')]+'/'+_0x32c648[a263_0x2ba1('0x3')]);const _0x3bdce2=await _0x43b1d0[a263_0x2ba1('0x26')]();await _0x38ceb5[a263_0x2ba1('0x29')][a263_0x2ba1('0x18')]({'embed':{'color':tesseract_1[a263_0x2ba1('0x1d')][a263_0x2ba1('0x1e')][a263_0x2ba1('0x17')],'author':{'name':'Game\x20Server\x20Stats'},'title':_0x3bdce2[a263_0x2ba1('0xe')],'description':'','fields':[{'name':a263_0x2ba1('0x21'),'value':_0x3bdce2[a263_0x2ba1('0x28')],'inline':!![]},{'name':a263_0x2ba1('0x8'),'value':_0x3bdce2['players']['length']+_0x3bdce2[a263_0x2ba1('0x20')]['length']+a263_0x2ba1('0x1b')+_0x3bdce2[a263_0x2ba1('0x4')],'inline':!![]},{'name':a263_0x2ba1('0x22'),'value':'`'+_0x3bdce2['connect']+'`','inline':!![]}][a263_0x2ba1('0x13')](_0x3bdce2[a263_0x2ba1('0x16')][a263_0x2ba1('0x1c')](_0x25f62d=>_0x25f62d['name'])[a263_0x2ba1('0xa')]((_0x165a93,_0x2032d4)=>_0x2032d4[a263_0x2ba1('0x19')]-_0x165a93[a263_0x2ba1('0x19')])['sort']((_0x4a040c,_0x4a7045)=>_0x4a7045[a263_0x2ba1('0xd')]-_0x4a040c[a263_0x2ba1('0xd')])[a263_0x2ba1('0x28')](_0x3f49d6=>({'name':(_0x3f49d6[a263_0x2ba1('0x2b')]?'['+_0x3f49d6[a263_0x2ba1('0x2b')]+']':'')+_0x3f49d6[a263_0x2ba1('0xe')],'value':'```\x0aSCORE\x20'+(_0x3f49d6[a263_0x2ba1('0xd')]||0x0)+(_0x3f49d6[a263_0x2ba1('0x15')]?'\x09PING\x20'+_0x3f49d6['ping']+'ms':'')+(_0x3f49d6[a263_0x2ba1('0x19')]?'\x09'+(_0x3f49d6['time']/0x3c)['toFixed'](0x2)+a263_0x2ba1('0x5'):'')+'```'}))[a263_0x2ba1('0x27')](0x0,0xa)),'footer':{'text':_0x3bdce2[a263_0x2ba1('0x15')]+'ms'+(_0x3bdce2[a263_0x2ba1('0x2c')]?a263_0x2ba1('0xb'):'')+a263_0x2ba1('0x14')}}});};}};