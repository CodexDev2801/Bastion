const a337_0x51fd=['Comedy','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20TV\x20Show.','First\x20Air\x20Date','Soap','IRIS','Constants','sanitize','backdrop_path','../../utils/omnic','results','War\x20&\x20Politics','nsfw','https://themoviedb.org/tv/','Powered\x20by\x20The\x20Movie\x20Database','filter','Crime','TV\x20Show','exec','Genre','tvShow\x20TITLE','Command','DiscordError','map','compile','Mystery','genre_ids','@bastion/tesseract','makeRequest','genres','toUpperCase','return\x20/\x22\x20+\x20this\x20+\x20\x22/','News','Reality','Western','BASTION_ERROR_TYPE','Rating','join','poster_path','Documentary','INVALID_COMMAND_SYNTAX','channel','Animation','send','length','constructor','\x0a...','NOT_FOUND','adult','first_air_date','Sci-Fi\x20&\x20Fantasy','Action\x20&\x20Adventure','original_language','/tmdb/tv/','Language','name','../../utils/errors','Family','Drama','https://image.tmdb.org/t/p/original'];(function(_0x56b4fb,_0x51fdb4){const _0x1e23b3=function(_0x3c74bb){while(--_0x3c74bb){_0x56b4fb['push'](_0x56b4fb['shift']());}};const _0xe4ebc5=function(){const _0x13ec75={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x151843,_0xbf4153,_0x4ef411,_0x5a2ec8){_0x5a2ec8=_0x5a2ec8||{};let _0x101df5=_0xbf4153+'='+_0x4ef411;let _0x14efcb=0x0;for(let _0x219b30=0x0,_0x4c94f6=_0x151843['length'];_0x219b30<_0x4c94f6;_0x219b30++){const _0x2e230f=_0x151843[_0x219b30];_0x101df5+=';\x20'+_0x2e230f;const _0x52e084=_0x151843[_0x2e230f];_0x151843['push'](_0x52e084);_0x4c94f6=_0x151843['length'];if(_0x52e084!==!![]){_0x101df5+='='+_0x52e084;}}_0x5a2ec8['cookie']=_0x101df5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1ad07c,_0x4b1ea1){_0x1ad07c=_0x1ad07c||function(_0x3a45f4){return _0x3a45f4;};const _0x34a075=_0x1ad07c(new RegExp('(?:^|;\x20)'+_0x4b1ea1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x578704=function(_0x526c29,_0x4721f1){_0x526c29(++_0x4721f1);};_0x578704(_0x1e23b3,_0x51fdb4);return _0x34a075?decodeURIComponent(_0x34a075[0x1]):undefined;}};const _0x50840e=function(){const _0xe933b5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe933b5['test'](_0x13ec75['removeCookie']['toString']());};_0x13ec75['updateCookie']=_0x50840e;let _0x578fd7='';const _0x3848c6=_0x13ec75['updateCookie']();if(!_0x3848c6){_0x13ec75['setCookie'](['*'],'counter',0x1);}else if(_0x3848c6){_0x578fd7=_0x13ec75['getCookie'](null,'counter');}else{_0x13ec75['removeCookie']();}};_0xe4ebc5();}(a337_0x51fd,0x1d0));const a337_0x1e23=function(_0x56b4fb,_0x51fdb4){_0x56b4fb=_0x56b4fb-0x0;let _0x1e23b3=a337_0x51fd[_0x56b4fb];return _0x1e23b3;};const a337_0x13ec75=function(){let _0x50c58d=!![];return function(_0x1644c6,_0x210d8f){const _0x52371b=_0x50c58d?function(){if(_0x210d8f){const _0x2c1a9f=_0x210d8f['apply'](_0x1644c6,arguments);_0x210d8f=null;return _0x2c1a9f;}}:function(){};_0x50c58d=![];return _0x52371b;};}();const a337_0x3c74bb=a337_0x13ec75(this,function(){const _0x4f3736=function(){const _0x35d4ac=_0x4f3736[a337_0x1e23('0x34')](a337_0x1e23('0x26'))()[a337_0x1e23('0x1f')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x35d4ac['test'](a337_0x3c74bb);};return _0x4f3736();});a337_0x3c74bb();'use strict';const tesseract_1=require(a337_0x1e23('0x22'));const errors=require(a337_0x1e23('0x4'));const omnic=require(a337_0x1e23('0x10'));module['exports']=class TVShowCommand extends tesseract_1[a337_0x1e23('0x1c')]{constructor(){super('tvShow',{'description':a337_0x1e23('0x9'),'triggers':['tv'],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a337_0x1e23('0x1b')]});this['sanitize']=_0x157ba2=>{return _0x157ba2[a337_0x1e23('0x33')]>0x7d0?_0x157ba2['slice'](0x0,0x7d0)+a337_0x1e23('0x35'):_0x157ba2;};this[a337_0x1e23('0x19')]=async(_0x899e15,_0x1d0918)=>{if(!_0x1d0918['_'][a337_0x1e23('0x33')])throw new errors[(a337_0x1e23('0x1d'))](errors[a337_0x1e23('0x2a')][a337_0x1e23('0x2f')],this[a337_0x1e23('0x3')]);const _0x3235b4=_0x1d0918['_']['join']('\x20');const _0x5dff06=await omnic[a337_0x1e23('0x23')](a337_0x1e23('0x1')+_0x3235b4);const _0x4de7ce=await _0x5dff06['json']();const _0xf4ed89=_0x899e15[a337_0x1e23('0x30')][a337_0x1e23('0x13')]?_0x4de7ce[a337_0x1e23('0x11')]:_0x4de7ce[a337_0x1e23('0x11')][a337_0x1e23('0x16')](_0x2c598a=>!_0x2c598a[a337_0x1e23('0x37')]);if(!_0xf4ed89||!_0xf4ed89[a337_0x1e23('0x33')])throw new Error(a337_0x1e23('0x36'));await _0x899e15['channel'][a337_0x1e23('0x32')]({'embed':{'color':tesseract_1[a337_0x1e23('0xd')]['COLORS'][a337_0x1e23('0xc')],'author':{'name':a337_0x1e23('0x18')},'title':_0xf4ed89[0x0][a337_0x1e23('0x3')],'url':a337_0x1e23('0x14')+_0xf4ed89[0x0]['id'],'description':this[a337_0x1e23('0xe')](_0xf4ed89[0x0]['overview']),'fields':[{'name':a337_0x1e23('0x1a'),'value':_0xf4ed89[0x0][a337_0x1e23('0x21')][a337_0x1e23('0x1e')](_0x56f587=>this[a337_0x1e23('0x24')][_0x56f587])[a337_0x1e23('0x2c')]('\x0a'),'inline':!![]},{'name':a337_0x1e23('0x2'),'value':_0xf4ed89[0x0][a337_0x1e23('0x0')][a337_0x1e23('0x25')](),'inline':!![]},{'name':a337_0x1e23('0x2b'),'value':''+_0xf4ed89[0x0]['vote_average'],'inline':!![]},{'name':a337_0x1e23('0xa'),'value':_0xf4ed89[0x0][a337_0x1e23('0x38')],'inline':!![]}],'image':{'url':_0xf4ed89[0x0]['poster_path']?a337_0x1e23('0x7')+_0xf4ed89[0x0][a337_0x1e23('0x2d')]:a337_0x1e23('0x7')+_0xf4ed89[0x0][a337_0x1e23('0xf')]},'footer':{'text':a337_0x1e23('0x15')}}});};this['genres']={'10759':a337_0x1e23('0x3a'),'16':a337_0x1e23('0x31'),'35':a337_0x1e23('0x8'),'80':a337_0x1e23('0x17'),'99':a337_0x1e23('0x2e'),'18':a337_0x1e23('0x6'),'10751':a337_0x1e23('0x5'),'10762':'Kids','9648':a337_0x1e23('0x20'),'10763':a337_0x1e23('0x27'),'10764':a337_0x1e23('0x28'),'10765':a337_0x1e23('0x39'),'10766':a337_0x1e23('0xb'),'10767':'Talk','10768':a337_0x1e23('0x12'),'37':a337_0x1e23('0x29')};}};