const a397_0x137d=['../utils/constants','voiceSessions','Listener','channel','voice','findById','categories','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','tag','newSessionChannelPrefix','channels','includes','guild','members','size','channelID','isPublicBastion','member','compile','setChannel','fetchPremiumTier','deletable','Requested\x20by\x20','create','test','LISTENER_MODE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','parentID','apply','parent','premiumTier','../utils/omnic','Constants','exec','default','trim','startsWith','type','catch','name','user','children','delete'];(function(_0x18ddf7,_0x137d02){const _0x60e169=function(_0x3cd1cd){while(--_0x3cd1cd){_0x18ddf7['push'](_0x18ddf7['shift']());}};const _0x156d8c=function(){const _0x15cba2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x455b3d,_0x1aeddb,_0xd9eb81,_0x339547){_0x339547=_0x339547||{};let _0x4c007e=_0x1aeddb+'='+_0xd9eb81;let _0x4db281=0x0;for(let _0x2ccc9c=0x0,_0x3e8e6a=_0x455b3d['length'];_0x2ccc9c<_0x3e8e6a;_0x2ccc9c++){const _0x4ab6a2=_0x455b3d[_0x2ccc9c];_0x4c007e+=';\x20'+_0x4ab6a2;const _0x3c0b64=_0x455b3d[_0x4ab6a2];_0x455b3d['push'](_0x3c0b64);_0x3e8e6a=_0x455b3d['length'];if(_0x3c0b64!==!![]){_0x4c007e+='='+_0x3c0b64;}}_0x339547['cookie']=_0x4c007e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x52cf95,_0x30e7f5){_0x52cf95=_0x52cf95||function(_0x36cb07){return _0x36cb07;};const _0x404589=_0x52cf95(new RegExp('(?:^|;\x20)'+_0x30e7f5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x14b32c=function(_0x5972fb,_0x156a58){_0x5972fb(++_0x156a58);};_0x14b32c(_0x60e169,_0x137d02);return _0x404589?decodeURIComponent(_0x404589[0x1]):undefined;}};const _0x3f27bd=function(){const _0x4ab57e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4ab57e['test'](_0x15cba2['removeCookie']['toString']());};_0x15cba2['updateCookie']=_0x3f27bd;let _0x1c856b='';const _0x39b762=_0x15cba2['updateCookie']();if(!_0x39b762){_0x15cba2['setCookie'](['*'],'counter',0x1);}else if(_0x39b762){_0x1c856b=_0x15cba2['getCookie'](null,'counter');}else{_0x15cba2['removeCookie']();}};_0x156d8c();}(a397_0x137d,0xcc));const a397_0x60e1=function(_0x18ddf7,_0x137d02){_0x18ddf7=_0x18ddf7-0x0;let _0x60e169=a397_0x137d[_0x18ddf7];return _0x60e169;};const a397_0x15cba2=function(){let _0x28704f=!![];return function(_0xd1950b,_0x4d6dbe){const _0x290032=_0x28704f?function(){if(_0x4d6dbe){const _0x26218b=_0x4d6dbe[a397_0x60e1('0x1')](_0xd1950b,arguments);_0x4d6dbe=null;return _0x26218b;}}:function(){};_0x28704f=![];return _0x290032;};}();const a397_0x3cd1cd=a397_0x15cba2(this,function(){const _0x291403=function(){const _0x357b2e=_0x291403[a397_0x60e1('0x18')](a397_0x60e1('0x2b'))()[a397_0x60e1('0x23')](a397_0x60e1('0x17'));return!_0x357b2e[a397_0x60e1('0x29')](a397_0x3cd1cd);};return _0x291403();});a397_0x3cd1cd();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require('../models/Guild');const constants=require(a397_0x60e1('0x10'));const omnic=require(a397_0x60e1('0x4'));module['exports']=class VoiceStateUpdateListener extends tesseract_1[a397_0x60e1('0x12')]{constructor(){super('voiceStateUpdate',{'mode':tesseract_1[a397_0x60e1('0x5')][a397_0x60e1('0x2a')]['ON']});this[a397_0x60e1('0x6')]=async(_0x3e195e,_0x82ac67)=>{if(_0x82ac67[a397_0x60e1('0x20')]===_0x3e195e['channelID'])return;if(!(_0x3e195e[a397_0x60e1('0x13')]&&_0x3e195e['channel'][a397_0x60e1('0x2')])&&!(_0x82ac67[a397_0x60e1('0x13')]&&_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x2')]))return;const _0x5764b8=await Guild_1[a397_0x60e1('0x7')][a397_0x60e1('0x15')](_0x3e195e[a397_0x60e1('0x1d')]?_0x3e195e['guild']['id']:_0x82ac67['guild']['id']);if(!_0x5764b8[a397_0x60e1('0x11')]||!_0x5764b8[a397_0x60e1('0x11')][a397_0x60e1('0x16')])return;if(constants[a397_0x60e1('0x21')](this['client']['user'])){const _0x494ff8=await omnic[a397_0x60e1('0x25')](_0x3e195e[a397_0x60e1('0x1d')]||_0x82ac67[a397_0x60e1('0x1d')])[a397_0x60e1('0xb')](()=>{});if(!_0x494ff8)return;}if(_0x3e195e[a397_0x60e1('0x13')]&&_0x3e195e[a397_0x60e1('0x13')][a397_0x60e1('0x2')]&&_0x5764b8['voiceSessions'][a397_0x60e1('0x16')][a397_0x60e1('0x1c')](_0x3e195e[a397_0x60e1('0x13')][a397_0x60e1('0x0')])&&!_0x3e195e['channel'][a397_0x60e1('0xc')][a397_0x60e1('0x9')](this[a397_0x60e1('0x1a')])&&_0x3e195e[a397_0x60e1('0x13')][a397_0x60e1('0x1e')][a397_0x60e1('0x1f')]===0x0&&_0x3e195e[a397_0x60e1('0x13')][a397_0x60e1('0x26')]){_0x3e195e[a397_0x60e1('0x13')][a397_0x60e1('0xf')]('Members\x20Left');}if(_0x82ac67[a397_0x60e1('0x13')]&&_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x2')]&&_0x5764b8[a397_0x60e1('0x11')][a397_0x60e1('0x16')]['includes'](_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x0')])){if(_0x82ac67[a397_0x60e1('0x13')]['name'][a397_0x60e1('0x9')](this[a397_0x60e1('0x1a')])){const _0x1f41ea=_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0xc')]['replace'](this[a397_0x60e1('0x1a')],'')[a397_0x60e1('0x8')]();const _0x5cb8d7=await _0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x1d')][a397_0x60e1('0x1b')][a397_0x60e1('0x28')](_0x1f41ea+'\x20#'+(_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x2')][a397_0x60e1('0xe')]['filter'](_0x168fee=>_0x168fee[a397_0x60e1('0xa')]==='voice'&&_0x168fee[a397_0x60e1('0xc')][a397_0x60e1('0x9')](_0x1f41ea+'\x20#'))[a397_0x60e1('0x1f')]+0x1),{'type':a397_0x60e1('0x14'),'bitrate':_0x82ac67[a397_0x60e1('0x13')][a397_0x60e1('0x1d')][a397_0x60e1('0x3')]?_0x82ac67[a397_0x60e1('0x13')]['guild']['premiumTier']*0x1f400:0x17700,'parent':_0x82ac67[a397_0x60e1('0x13')]['parent'],'reason':a397_0x60e1('0x27')+(_0x82ac67[a397_0x60e1('0x22')]['user']?_0x82ac67[a397_0x60e1('0x22')][a397_0x60e1('0xd')][a397_0x60e1('0x19')]:_0x82ac67['member']['id'])});await _0x82ac67[a397_0x60e1('0x22')][a397_0x60e1('0x14')][a397_0x60e1('0x24')](_0x5cb8d7)[a397_0x60e1('0xb')](console['error']);}}};this[a397_0x60e1('0x1a')]='➕\x20New';}};