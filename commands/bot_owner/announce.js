const a221_0x4332=['COLORS','default','announce','cache','message','Constants','author','INVALID_COMMAND_SYNTAX','📣\x20','channels','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','@bastion/tesseract','../../utils/errors','announce\x20--message\x20MESSAGE','BASTION_ERROR_TYPE','send','PUPIL','compile','Command','\x20/\x20','DiscordError','find','tag','test','client','channel','catch','IRIS','announcementsChannelId','title','join','exec','exports','It\x20allows\x20you\x20to\x20send\x20announcements\x20to\x20the\x20announcement\x20channels\x20in\x20the\x20servers\x20where\x20it\x20has\x20been\x20set.'];(function(_0x25b3f5,_0x433208){const _0x5960cd=function(_0x50ce6f){while(--_0x50ce6f){_0x25b3f5['push'](_0x25b3f5['shift']());}};const _0x5baf86=function(){const _0x89cdf5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1585bb,_0x27d932,_0x1b7cda,_0x128e17){_0x128e17=_0x128e17||{};let _0x426cf9=_0x27d932+'='+_0x1b7cda;let _0x5c1a63=0x0;for(let _0x25a2fe=0x0,_0x415935=_0x1585bb['length'];_0x25a2fe<_0x415935;_0x25a2fe++){const _0x2b2247=_0x1585bb[_0x25a2fe];_0x426cf9+=';\x20'+_0x2b2247;const _0x3c692e=_0x1585bb[_0x2b2247];_0x1585bb['push'](_0x3c692e);_0x415935=_0x1585bb['length'];if(_0x3c692e!==!![]){_0x426cf9+='='+_0x3c692e;}}_0x128e17['cookie']=_0x426cf9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x46069c,_0xee2b0d){_0x46069c=_0x46069c||function(_0x20399e){return _0x20399e;};const _0x5f3a46=_0x46069c(new RegExp('(?:^|;\x20)'+_0xee2b0d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x452789=function(_0x292299,_0x313788){_0x292299(++_0x313788);};_0x452789(_0x5960cd,_0x433208);return _0x5f3a46?decodeURIComponent(_0x5f3a46[0x1]):undefined;}};const _0x1fd209=function(){const _0x55eea9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x55eea9['test'](_0x89cdf5['removeCookie']['toString']());};_0x89cdf5['updateCookie']=_0x1fd209;let _0x58bda0='';const _0x4cd7da=_0x89cdf5['updateCookie']();if(!_0x4cd7da){_0x89cdf5['setCookie'](['*'],'counter',0x1);}else if(_0x4cd7da){_0x58bda0=_0x89cdf5['getCookie'](null,'counter');}else{_0x89cdf5['removeCookie']();}};_0x5baf86();}(a221_0x4332,0x102));const a221_0x5960=function(_0x25b3f5,_0x433208){_0x25b3f5=_0x25b3f5-0x0;let _0x5960cd=a221_0x4332[_0x25b3f5];return _0x5960cd;};const a221_0x89cdf5=function(){let _0x50d3da=!![];return function(_0x2b8984,_0x5df5b8){const _0x594304=_0x50d3da?function(){if(_0x5df5b8){const _0x4ed97c=_0x5df5b8['apply'](_0x2b8984,arguments);_0x5df5b8=null;return _0x4ed97c;}}:function(){};_0x50d3da=![];return _0x594304;};}();const a221_0x50ce6f=a221_0x89cdf5(this,function(){const _0x2064b5=function(){const _0x10b1da=_0x2064b5['constructor'](a221_0x5960('0x6'))()[a221_0x5960('0xd')](a221_0x5960('0x4'));return!_0x10b1da[a221_0x5960('0x13')](a221_0x50ce6f);};return _0x2064b5();});a221_0x50ce6f();'use strict';const tesseract_1=require(a221_0x5960('0x7'));const Guild_1=require('../../models/Guild');const errors=require(a221_0x5960('0x8'));module[a221_0x5960('0x1c')]=class Announce extends tesseract_1[a221_0x5960('0xe')]{constructor(){super(a221_0x5960('0x20'),{'description':a221_0x5960('0x1d'),'triggers':[],'arguments':{'array':[a221_0x5960('0x22'),'title'],'string':[a221_0x5960('0x22'),a221_0x5960('0x19')]},'scope':a221_0x5960('0x5'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a221_0x5960('0x9'),'announce\x20--title\x20TITLE\x20--message\x20MESSAGE']});this[a221_0x5960('0x1b')]=async(_0x40da6f,_0xb1ea49)=>{const _0x28255b=_0xb1ea49[a221_0x5960('0x19')]&&_0xb1ea49[a221_0x5960('0x19')][a221_0x5960('0x1a')]('\x20');const _0x23f691=_0xb1ea49['message']&&_0xb1ea49[a221_0x5960('0x22')][a221_0x5960('0x1a')]('\x20');if(!_0x23f691)throw new errors[(a221_0x5960('0x10'))](errors[a221_0x5960('0xa')][a221_0x5960('0x1')],this['name']);const _0x12aa33=await Guild_1[a221_0x5960('0x1f')][a221_0x5960('0x11')]({'announcementsChannelId':{'$exists':!![]}});for(const _0x547694 of _0x12aa33){if(this[a221_0x5960('0x14')][a221_0x5960('0x3')][a221_0x5960('0x21')]['has'](_0x547694[a221_0x5960('0x18')])){const _0x2810d3=this[a221_0x5960('0x14')][a221_0x5960('0x3')][a221_0x5960('0x21')]['get'](_0x547694[a221_0x5960('0x18')]);_0x2810d3[a221_0x5960('0xb')]({'embed':{'color':tesseract_1[a221_0x5960('0x23')][a221_0x5960('0x1e')][a221_0x5960('0x17')],'title':_0x28255b,'description':_0x23f691,'footer':{'text':a221_0x5960('0x2')+_0x40da6f[a221_0x5960('0x0')][a221_0x5960('0x12')]+a221_0x5960('0xf')+_0x40da6f[a221_0x5960('0x0')]['id']}}})[a221_0x5960('0x16')](()=>{});}}await _0x40da6f[a221_0x5960('0x15')]['send']({'embed':{'color':tesseract_1[a221_0x5960('0x23')][a221_0x5960('0x1e')][a221_0x5960('0xc')],'author':{'name':'Announced'},'title':_0x28255b,'description':_0x23f691,'footer':{'text':'📣\x20'+_0x40da6f[a221_0x5960('0x0')]['tag']+a221_0x5960('0xf')+_0x40da6f[a221_0x5960('0x0')]['id']}}})[a221_0x5960('0x16')](()=>{});};}};