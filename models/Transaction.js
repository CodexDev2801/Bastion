const a408_0x51ae=['model','Guild','compile','Schema','defineProperty','Transaction','apply','default','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','mongoose','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','__esModule'];(function(_0x3e2e2c,_0x51ae3){const _0x5c73e9=function(_0x3630af){while(--_0x3630af){_0x3e2e2c['push'](_0x3e2e2c['shift']());}};const _0x37102f=function(){const _0xdef061={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x17e172,_0x2f8449,_0x25b78c,_0x3b3fc5){_0x3b3fc5=_0x3b3fc5||{};let _0x345d95=_0x2f8449+'='+_0x25b78c;let _0x1915e5=0x0;for(let _0x20e460=0x0,_0x43ee12=_0x17e172['length'];_0x20e460<_0x43ee12;_0x20e460++){const _0x37960a=_0x17e172[_0x20e460];_0x345d95+=';\x20'+_0x37960a;const _0x2ea06d=_0x17e172[_0x37960a];_0x17e172['push'](_0x2ea06d);_0x43ee12=_0x17e172['length'];if(_0x2ea06d!==!![]){_0x345d95+='='+_0x2ea06d;}}_0x3b3fc5['cookie']=_0x345d95;},'removeCookie':function(){return'dev';},'getCookie':function(_0x254b86,_0x467feb){_0x254b86=_0x254b86||function(_0x4c4ec8){return _0x4c4ec8;};const _0x529e43=_0x254b86(new RegExp('(?:^|;\x20)'+_0x467feb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3db8c7=function(_0x461854,_0x5a9fec){_0x461854(++_0x5a9fec);};_0x3db8c7(_0x5c73e9,_0x51ae3);return _0x529e43?decodeURIComponent(_0x529e43[0x1]):undefined;}};const _0x2c01a7=function(){const _0x41d599=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x41d599['test'](_0xdef061['removeCookie']['toString']());};_0xdef061['updateCookie']=_0x2c01a7;let _0x26f82a='';const _0x57f9be=_0xdef061['updateCookie']();if(!_0x57f9be){_0xdef061['setCookie'](['*'],'counter',0x1);}else if(_0x57f9be){_0x26f82a=_0xdef061['getCookie'](null,'counter');}else{_0xdef061['removeCookie']();}};_0x37102f();}(a408_0x51ae,0x169));const a408_0x5c73=function(_0x3e2e2c,_0x51ae3){_0x3e2e2c=_0x3e2e2c-0x0;let _0x5c73e9=a408_0x51ae[_0x3e2e2c];return _0x5c73e9;};const a408_0xdef061=function(){let _0x529e43=!![];return function(_0x3db8c7,_0x4c4ec8){const _0x461854=_0x529e43?function(){if(_0x4c4ec8){const _0x5a9fec=_0x4c4ec8[a408_0x5c73('0x9')](_0x3db8c7,arguments);_0x4c4ec8=null;return _0x5a9fec;}}:function(){};_0x529e43=![];return _0x461854;};}();const a408_0x3630af=a408_0xdef061(this,function(){const _0x41d599=function(){const _0x7892df=_0x41d599['constructor'](a408_0x5c73('0xc'))()[a408_0x5c73('0x5')](a408_0x5c73('0x1'));return!_0x7892df[a408_0x5c73('0xb')](a408_0x3630af);};return _0x41d599();});a408_0x3630af();'use strict';Object[a408_0x5c73('0x7')](exports,a408_0x5c73('0x2'),{'value':!![]});const mongoose=require(a408_0x5c73('0x0'));const transactionSchema=new mongoose[(a408_0x5c73('0x6'))]({'guild':{'type':String,'required':!![],'ref':a408_0x5c73('0x4')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[a408_0x5c73('0xa')]=mongoose[a408_0x5c73('0x3')](a408_0x5c73('0x8'),transactionSchema);