const a438_0x5ca4=['isValid','timestamp','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','defineProperty','deconstruct','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','string'];(function(_0xef4e45,_0x5ca461){const _0x43daa9=function(_0x20c676){while(--_0x20c676){_0xef4e45['push'](_0xef4e45['shift']());}};const _0x2412b7=function(){const _0x4a8353={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x194ab6,_0x4e152a,_0x343dd2,_0x5404cb){_0x5404cb=_0x5404cb||{};let _0x2d77aa=_0x4e152a+'='+_0x343dd2;let _0x5867bb=0x0;for(let _0x2fd2d4=0x0,_0x5e2925=_0x194ab6['length'];_0x2fd2d4<_0x5e2925;_0x2fd2d4++){const _0x5c0584=_0x194ab6[_0x2fd2d4];_0x2d77aa+=';\x20'+_0x5c0584;const _0x174086=_0x194ab6[_0x5c0584];_0x194ab6['push'](_0x174086);_0x5e2925=_0x194ab6['length'];if(_0x174086!==!![]){_0x2d77aa+='='+_0x174086;}}_0x5404cb['cookie']=_0x2d77aa;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4db92a,_0x53beec){_0x4db92a=_0x4db92a||function(_0x44e96a){return _0x44e96a;};const _0x463da9=_0x4db92a(new RegExp('(?:^|;\x20)'+_0x53beec['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5ad6c9=function(_0x576945,_0x39a261){_0x576945(++_0x39a261);};_0x5ad6c9(_0x43daa9,_0x5ca461);return _0x463da9?decodeURIComponent(_0x463da9[0x1]):undefined;}};const _0x11021f=function(){const _0x14c9f5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x14c9f5['test'](_0x4a8353['removeCookie']['toString']());};_0x4a8353['updateCookie']=_0x11021f;let _0xde3328='';const _0x4daa10=_0x4a8353['updateCookie']();if(!_0x4daa10){_0x4a8353['setCookie'](['*'],'counter',0x1);}else if(_0x4daa10){_0xde3328=_0x4a8353['getCookie'](null,'counter');}else{_0x4a8353['removeCookie']();}};_0x2412b7();}(a438_0x5ca4,0xa2));const a438_0x43da=function(_0xef4e45,_0x5ca461){_0xef4e45=_0xef4e45-0x0;let _0x43daa9=a438_0x5ca4[_0xef4e45];return _0x43daa9;};const a438_0x4a8353=function(){let _0x39a261=!![];return function(_0x14c9f5,_0x552b33){const _0xa7c572=_0x39a261?function(){if(_0x552b33){const _0x228fe9=_0x552b33[a438_0x43da('0x0')](_0x14c9f5,arguments);_0x552b33=null;return _0x228fe9;}}:function(){};_0x39a261=![];return _0xa7c572;};}();const a438_0x20c676=a438_0x4a8353(this,function(){const _0x36e30e=function(){const _0x3f538d=_0x36e30e['constructor'](a438_0x43da('0x1'))()['compile'](a438_0x43da('0x4'));return!_0x3f538d['test'](a438_0x20c676);};return _0x36e30e();});a438_0x20c676();'use strict';Object[a438_0x43da('0x2')](exports,'__esModule',{'value':!![]});exports[a438_0x43da('0x6')]=void 0x0;const tesseract_1=require('@bastion/tesseract');const numbers=require('./numbers');const isValid=_0x4681a0=>{if(typeof _0x4681a0!==a438_0x43da('0x5'))return![];if(!/^\d{1,20}$/['test'](_0x4681a0))return![];const _0x46c881=tesseract_1['SnowflakeUtil'][a438_0x43da('0x3')](_0x4681a0);return numbers['inRange'](_0x46c881[a438_0x43da('0x7')],0x14aa2cab000,0x3ffffffffff);};exports['isValid']=isValid;