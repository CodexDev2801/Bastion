const a289_0x7f17=['author','roleRename','send','info','roleCreate','apply','roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON','roles','../../utils/confirmation','channel','MANAGE_ROLES','roleDeleteQuestion','getString','resolver','INVALID_COMMAND_SYNTAX','constructor','create','GREEN','length','Command','locale','roles\x20--create\x20NAME\x20--\x20REASON','catch','default','test','exec','DiscordError','language','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','join','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON','roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON','tag','Constants','edit','rename','COLORS','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','client','delete','COLOR','resolveRole','@bastion/tesseract','compile','name','document','guild','hoist','mentionable'];(function(_0xf27700,_0x7f17a6){const _0x5732e6=function(_0x4a89ec){while(--_0x4a89ec){_0xf27700['push'](_0xf27700['shift']());}};const _0x10c049=function(){const _0x5ea320={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1dadef,_0x3ef390,_0x3984c3,_0x23c0be){_0x23c0be=_0x23c0be||{};let _0x2c8f92=_0x3ef390+'='+_0x3984c3;let _0x23cebd=0x0;for(let _0x57700f=0x0,_0x1b94c6=_0x1dadef['length'];_0x57700f<_0x1b94c6;_0x57700f++){const _0x2557c1=_0x1dadef[_0x57700f];_0x2c8f92+=';\x20'+_0x2557c1;const _0x32cc97=_0x1dadef[_0x2557c1];_0x1dadef['push'](_0x32cc97);_0x1b94c6=_0x1dadef['length'];if(_0x32cc97!==!![]){_0x2c8f92+='='+_0x32cc97;}}_0x23c0be['cookie']=_0x2c8f92;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5f2932,_0x586c26){_0x5f2932=_0x5f2932||function(_0x41dccc){return _0x41dccc;};const _0x46c72b=_0x5f2932(new RegExp('(?:^|;\x20)'+_0x586c26['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2caf7b=function(_0x117e65,_0x376000){_0x117e65(++_0x376000);};_0x2caf7b(_0x5732e6,_0x7f17a6);return _0x46c72b?decodeURIComponent(_0x46c72b[0x1]):undefined;}};const _0x3beb45=function(){const _0x397f63=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x397f63['test'](_0x5ea320['removeCookie']['toString']());};_0x5ea320['updateCookie']=_0x3beb45;let _0x2704a0='';const _0xbd87f4=_0x5ea320['updateCookie']();if(!_0xbd87f4){_0x5ea320['setCookie'](['*'],'counter',0x1);}else if(_0xbd87f4){_0x2704a0=_0x5ea320['getCookie'](null,'counter');}else{_0x5ea320['removeCookie']();}};_0x10c049();}(a289_0x7f17,0xa3));const a289_0x5732=function(_0xf27700,_0x7f17a6){_0xf27700=_0xf27700-0x0;let _0x5732e6=a289_0x7f17[_0xf27700];return _0x5732e6;};const a289_0x5ea320=function(){let _0xc2ebde=!![];return function(_0x369f51,_0x3a051b){const _0x2bba55=_0xc2ebde?function(){if(_0x3a051b){const _0x864d83=_0x3a051b[a289_0x5732('0x2e')](_0x369f51,arguments);_0x3a051b=null;return _0x864d83;}}:function(){};_0xc2ebde=![];return _0x2bba55;};}();const a289_0x4a89ec=a289_0x5ea320(this,function(){const _0x39c655=function(){const _0xfcdcc8=_0x39c655[a289_0x5732('0x5')](a289_0x5732('0x14'))()[a289_0x5732('0x23')](a289_0x5732('0x12'));return!_0xfcdcc8[a289_0x5732('0xe')](a289_0x4a89ec);};return _0x39c655();});a289_0x4a89ec();'use strict';const tesseract_1=require(a289_0x5732('0x22'));const confirmation_1=require(a289_0x5732('0x31'));const errors=require('../../utils/errors');module[a289_0x5732('0x15')]=class RolesCommand extends tesseract_1[a289_0x5732('0x9')]{constructor(){super(a289_0x5732('0x30'),{'description':'It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','triggers':[],'arguments':{'array':['create',a289_0x5732('0x1f'),a289_0x5732('0x24'),a289_0x5732('0x1b')],'boolean':[a289_0x5732('0x27'),a289_0x5732('0x28')],'string':[a289_0x5732('0x6'),a289_0x5732('0x1f'),a289_0x5732('0x1b')],'coerce':{'color':tesseract_1['Constants']['ArgumentTypes'][a289_0x5732('0x20')]}},'scope':a289_0x5732('0x26'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a289_0x5732('0x0')],'syntax':[a289_0x5732('0xb'),a289_0x5732('0x1d'),a289_0x5732('0x17'),a289_0x5732('0x16'),a289_0x5732('0x2f'),'roles\x20--delete\x20ROLE\x20--\x20REASON']});this[a289_0x5732('0xf')]=async(_0x53f194,_0xa67201)=>{const _0x4ee7b7=_0xa67201['_']['join']('\x20')||'-';if(_0xa67201[a289_0x5732('0x6')]&&_0xa67201[a289_0x5732('0x6')][a289_0x5732('0x8')]){const _0x546739=await _0x53f194[a289_0x5732('0x26')][a289_0x5732('0x30')][a289_0x5732('0x6')]({'data':{'name':_0xa67201[a289_0x5732('0x6')][a289_0x5732('0x13')]('\x20'),'color':_0xa67201['color'],'hoist':_0xa67201[a289_0x5732('0x27')],'mentionable':_0xa67201['mentionable']},'reason':_0x4ee7b7});return await _0x53f194['channel'][a289_0x5732('0x2b')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a289_0x5732('0x7')],'description':this[a289_0x5732('0x1e')][a289_0x5732('0xa')][a289_0x5732('0x2')](_0x53f194[a289_0x5732('0x26')][a289_0x5732('0x25')][a289_0x5732('0x11')],a289_0x5732('0x2c'),a289_0x5732('0x2d'),_0x53f194[a289_0x5732('0x29')][a289_0x5732('0x18')],_0x546739[a289_0x5732('0x24')],_0x4ee7b7)}})['catch'](()=>{});}if(_0xa67201['delete']&&_0xa67201[a289_0x5732('0x1f')][a289_0x5732('0x8')]){const _0x52fce4=this[a289_0x5732('0x1e')][a289_0x5732('0x3')]['resolveRole'](_0x53f194['guild'],_0xa67201[a289_0x5732('0x1f')][a289_0x5732('0x13')]('\x20'));const _0x5b508f=await confirmation_1[a289_0x5732('0xd')](_0x53f194,this[a289_0x5732('0x1e')]['locale']['getString'](_0x53f194[a289_0x5732('0x26')][a289_0x5732('0x25')][a289_0x5732('0x11')],a289_0x5732('0x2c'),a289_0x5732('0x1'),_0x53f194[a289_0x5732('0x29')][a289_0x5732('0x18')],_0x52fce4['name']));if(_0x5b508f){await _0x52fce4[a289_0x5732('0x1f')](_0x4ee7b7);return await _0x53f194['channel']['send']({'embed':{'color':tesseract_1[a289_0x5732('0x19')]['COLORS'][a289_0x5732('0x7')],'description':this[a289_0x5732('0x1e')][a289_0x5732('0xa')]['getString'](_0x53f194[a289_0x5732('0x26')][a289_0x5732('0x25')][a289_0x5732('0x11')],a289_0x5732('0x2c'),'roleDelete',_0x53f194['author'][a289_0x5732('0x18')],_0x52fce4[a289_0x5732('0x24')],_0x4ee7b7)}})['catch'](()=>{});}return!![];}if(_0xa67201[a289_0x5732('0x1b')]&&_0xa67201[a289_0x5732('0x1b')]['length']&&_0xa67201[a289_0x5732('0x24')]&&_0xa67201[a289_0x5732('0x24')]['length']){let _0x22ce92=this[a289_0x5732('0x1e')][a289_0x5732('0x3')][a289_0x5732('0x21')](_0x53f194[a289_0x5732('0x26')],_0xa67201[a289_0x5732('0x1b')]['join']('\x20'));_0x22ce92=await _0x22ce92[a289_0x5732('0x1a')]({'name':_0xa67201[a289_0x5732('0x24')][a289_0x5732('0x13')]('\x20')});return await _0x53f194[a289_0x5732('0x32')][a289_0x5732('0x2b')]({'embed':{'color':tesseract_1[a289_0x5732('0x19')][a289_0x5732('0x1c')][a289_0x5732('0x7')],'description':this[a289_0x5732('0x1e')][a289_0x5732('0xa')][a289_0x5732('0x2')](_0x53f194[a289_0x5732('0x26')][a289_0x5732('0x25')]['language'],a289_0x5732('0x2c'),a289_0x5732('0x2a'),_0x53f194[a289_0x5732('0x29')]['tag'],_0x22ce92[a289_0x5732('0x24')],_0x4ee7b7)}})[a289_0x5732('0xc')](()=>{});}throw new errors[(a289_0x5732('0x10'))](errors['BASTION_ERROR_TYPE'][a289_0x5732('0x4')],this[a289_0x5732('0x24')]);};}};