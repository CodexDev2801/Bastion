const a279_0x42e1=['../../utils/constants','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20user.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','author','member','displayAvatarURL','catch','then','userInfo','client','slice','nickname','isPublicBastion','user','toUTCString','getMemberBadgeValue','Bot','premiumSince','getMembership','apply','cache','Boosting\x20Since','memberInfo','channel','map','Constants','exec','\x20•\x20','tag','createdAt','@bastion/tesseract','roles','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Roles','exports','Human','IRIS','displayColor','json','user\x20USER','\x20/\x20','guild','constructor','Joined\x20Discord','name','size','COLORS','test','ownerID','joinedAt','values','emoji','join','../../utils/badges','Command'];(function(_0x57310b,_0x42e106){const _0x1c4af4=function(_0x4b5aa7){while(--_0x4b5aa7){_0x57310b['push'](_0x57310b['shift']());}};const _0x237e23=function(){const _0x4f517c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x987084,_0x598927,_0xe9f692,_0x170ef5){_0x170ef5=_0x170ef5||{};let _0x2334fd=_0x598927+'='+_0xe9f692;let _0x2ac1d7=0x0;for(let _0x983fcb=0x0,_0x241899=_0x987084['length'];_0x983fcb<_0x241899;_0x983fcb++){const _0x121082=_0x987084[_0x983fcb];_0x2334fd+=';\x20'+_0x121082;const _0x10a3b4=_0x987084[_0x121082];_0x987084['push'](_0x10a3b4);_0x241899=_0x987084['length'];if(_0x10a3b4!==!![]){_0x2334fd+='='+_0x10a3b4;}}_0x170ef5['cookie']=_0x2334fd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11deb5,_0x2daadc){_0x11deb5=_0x11deb5||function(_0x454603){return _0x454603;};const _0x3633f1=_0x11deb5(new RegExp('(?:^|;\x20)'+_0x2daadc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x158c7f=function(_0x241975,_0x11a6ff){_0x241975(++_0x11a6ff);};_0x158c7f(_0x1c4af4,_0x42e106);return _0x3633f1?decodeURIComponent(_0x3633f1[0x1]):undefined;}};const _0x3c669f=function(){const _0x2cb0cd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cb0cd['test'](_0x4f517c['removeCookie']['toString']());};_0x4f517c['updateCookie']=_0x3c669f;let _0x8e755b='';const _0x46b403=_0x4f517c['updateCookie']();if(!_0x46b403){_0x4f517c['setCookie'](['*'],'counter',0x1);}else if(_0x46b403){_0x8e755b=_0x4f517c['getCookie'](null,'counter');}else{_0x4f517c['removeCookie']();}};_0x237e23();}(a279_0x42e1,0x1d2));const a279_0x1c4a=function(_0x57310b,_0x42e106){_0x57310b=_0x57310b-0x0;let _0x1c4af4=a279_0x42e1[_0x57310b];return _0x1c4af4;};const a279_0x4f517c=function(){let _0x4df68a=!![];return function(_0x4830f4,_0x265963){const _0x11b4c9=_0x4df68a?function(){if(_0x265963){const _0x18d6fa=_0x265963[a279_0x1c4a('0x30')](_0x4830f4,arguments);_0x265963=null;return _0x18d6fa;}}:function(){};_0x4df68a=![];return _0x11b4c9;};}();const a279_0x4b5aa7=a279_0x4f517c(this,function(){const _0x385c9b=function(){const _0x2bb23e=_0x385c9b[a279_0x1c4a('0x10')](a279_0x1c4a('0x1f'))()['compile'](a279_0x1c4a('0x6'));return!_0x2bb23e[a279_0x1c4a('0x15')](a279_0x4b5aa7);};return _0x385c9b();});a279_0x4b5aa7();'use strict';const tesseract_1=require(a279_0x1c4a('0x4'));const badges=require(a279_0x1c4a('0x1b'));const constants=require(a279_0x1c4a('0x1d'));module[a279_0x1c4a('0x8')]=class UserCommand extends tesseract_1[a279_0x1c4a('0x1c')]{constructor(){super(a279_0x1c4a('0x2a'),{'description':a279_0x1c4a('0x1e'),'triggers':[a279_0x1c4a('0x21'),a279_0x1c4a('0x25'),a279_0x1c4a('0x33')],'arguments':{},'scope':a279_0x1c4a('0xf'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a279_0x1c4a('0x2a'),a279_0x1c4a('0xd')]});this[a279_0x1c4a('0x0')]=async(_0x4f2299,_0x8ad29d)=>{const _0x33fc53=_0x8ad29d['_']['join']('\x20');let _0x536369,_0x391739;if(_0x33fc53){_0x536369=await this[a279_0x1c4a('0x26')]['users']['fetch'](_0x33fc53);_0x391739=await _0x4f2299[a279_0x1c4a('0xf')]['members']['fetch'](_0x33fc53)[a279_0x1c4a('0x23')](()=>{});}else{_0x536369=_0x4f2299[a279_0x1c4a('0x20')];_0x391739=_0x4f2299[a279_0x1c4a('0x21')];}const _0xc5a7c2=constants[a279_0x1c4a('0x29')](this[a279_0x1c4a('0x26')][a279_0x1c4a('0x2a')])&&await badges['fetchBadges'](_0x536369['id'])[a279_0x1c4a('0x24')](_0x5da3f9=>_0x5da3f9[a279_0x1c4a('0xc')]())[a279_0x1c4a('0x23')](()=>{});const _0x1b9ccd=badges[a279_0x1c4a('0x2f')](_0xc5a7c2?_0xc5a7c2['badgeValue']:0x0);const _0x2c2b35=constants[a279_0x1c4a('0x29')](this[a279_0x1c4a('0x26')][a279_0x1c4a('0x2a')])&&_0x391739?badges['resolveBadges']((_0xc5a7c2?_0xc5a7c2['badgeValue']:0x0)|badges[a279_0x1c4a('0x2c')](_0x391739)):[];_0x4f2299[a279_0x1c4a('0x34')]['send']({'embed':{'color':_0x1b9ccd?_0x1b9ccd['color']:_0x391739&&_0x391739['displayColor']?_0x391739[a279_0x1c4a('0xb')]:tesseract_1[a279_0x1c4a('0x36')][a279_0x1c4a('0x14')][a279_0x1c4a('0xa')],'author':{'name':_0x536369[a279_0x1c4a('0x2')]+(_0x391739&&_0x391739[a279_0x1c4a('0x28')]?a279_0x1c4a('0xe')+_0x391739[a279_0x1c4a('0x28')]:'')},'title':_0x536369['bot']?a279_0x1c4a('0x2d'):a279_0x1c4a('0x9'),'description':_0x2c2b35[a279_0x1c4a('0x35')](_0x4b25c0=>_0x4b25c0[a279_0x1c4a('0x19')])[a279_0x1c4a('0x1a')]('\x20'),'fields':[{'name':a279_0x1c4a('0x11'),'value':_0x536369[a279_0x1c4a('0x3')][a279_0x1c4a('0x2b')](),'inline':!![]},{'name':'Joined\x20Server','value':_0x391739?_0x391739[a279_0x1c4a('0x17')][a279_0x1c4a('0x2b')]():'-','inline':!![]},{'name':a279_0x1c4a('0x32'),'value':_0x391739&&_0x391739['premiumSince']?_0x391739[a279_0x1c4a('0x2e')][a279_0x1c4a('0x2b')]():'-','inline':!![]},{'name':a279_0x1c4a('0x7'),'value':_0x391739&&_0x391739[a279_0x1c4a('0x5')][a279_0x1c4a('0x31')][a279_0x1c4a('0x13')]>0x1?[..._0x391739[a279_0x1c4a('0x5')][a279_0x1c4a('0x31')][a279_0x1c4a('0x18')]()][a279_0x1c4a('0x27')](0x0,_0x391739[a279_0x1c4a('0x5')][a279_0x1c4a('0x31')][a279_0x1c4a('0x13')]-0x1)[a279_0x1c4a('0x35')](_0x2323df=>_0x2323df[a279_0x1c4a('0x12')])['join'](',\x20'):'-'}],'thumbnail':{'url':_0x536369[a279_0x1c4a('0x22')]({'dynamic':!![],'size':0x200})},'footer':{'text':(_0x1b9ccd?_0x1b9ccd['name']+a279_0x1c4a('0x1'):'')+(_0x391739&&_0x391739[a279_0x1c4a('0xf')][a279_0x1c4a('0x16')]===_0x536369['id']?'Server\x20Owner\x20•\x20':'')+_0x536369['id']}}})[a279_0x1c4a('0x23')](()=>{});};}};