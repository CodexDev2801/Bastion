const a256_0x20bf=['document','save','channel','join','guild','streamers\x20--twitch\x20USERNAME\x20--remove','Command','locale','errors','../../utils/errors','length','Twitch','PLATINUM','GOLD','twitch','includes','streamers','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','STREAMERS_PER_SERVICE','Constants','client','test','filter','compile','channelId','../../utils/omnic','LIMITED_PREMIUM_MEMBERSHIP','push','user','language','premiumStreamers','constructor','MANAGE_GUILD','DiscordError','streamers\x20--twitch\x20USERNAME','Followed\x20Streamers','PremiumTier','membershipLimitStreamers','catch','concat','exec','isPublicBastion','remove','BASTION_ERROR_TYPE','users','LIMITS','exports'];(function(_0x1ae7d8,_0x20bf38){const _0x93b662=function(_0x34d972){while(--_0x34d972){_0x1ae7d8['push'](_0x1ae7d8['shift']());}};const _0x5bbae9=function(){const _0x4ab202={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f9884,_0x2467de,_0x59ced4,_0x3c31fc){_0x3c31fc=_0x3c31fc||{};let _0x5aa08e=_0x2467de+'='+_0x59ced4;let _0x5b08e4=0x0;for(let _0x28e21d=0x0,_0x2cfebc=_0x3f9884['length'];_0x28e21d<_0x2cfebc;_0x28e21d++){const _0x4114e9=_0x3f9884[_0x28e21d];_0x5aa08e+=';\x20'+_0x4114e9;const _0x177466=_0x3f9884[_0x4114e9];_0x3f9884['push'](_0x177466);_0x2cfebc=_0x3f9884['length'];if(_0x177466!==!![]){_0x5aa08e+='='+_0x177466;}}_0x3c31fc['cookie']=_0x5aa08e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x441b5b,_0x58f6bd){_0x441b5b=_0x441b5b||function(_0x16ac53){return _0x16ac53;};const _0x225197=_0x441b5b(new RegExp('(?:^|;\x20)'+_0x58f6bd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5ea964=function(_0x27ca45,_0x481cf6){_0x27ca45(++_0x481cf6);};_0x5ea964(_0x93b662,_0x20bf38);return _0x225197?decodeURIComponent(_0x225197[0x1]):undefined;}};const _0x47e5f0=function(){const _0x848e7c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x848e7c['test'](_0x4ab202['removeCookie']['toString']());};_0x4ab202['updateCookie']=_0x47e5f0;let _0x4ccd23='';const _0x1d2978=_0x4ab202['updateCookie']();if(!_0x1d2978){_0x4ab202['setCookie'](['*'],'counter',0x1);}else if(_0x1d2978){_0x4ccd23=_0x4ab202['getCookie'](null,'counter');}else{_0x4ab202['removeCookie']();}};_0x5bbae9();}(a256_0x20bf,0xd5));const a256_0x93b6=function(_0x1ae7d8,_0x20bf38){_0x1ae7d8=_0x1ae7d8-0x0;let _0x93b662=a256_0x20bf[_0x1ae7d8];return _0x93b662;};const a256_0x4ab202=function(){let _0x2e53bc=!![];return function(_0x2d5750,_0x52a6aa){const _0x409aff=_0x2e53bc?function(){if(_0x52a6aa){const _0x5d8d79=_0x52a6aa['apply'](_0x2d5750,arguments);_0x52a6aa=null;return _0x5d8d79;}}:function(){};_0x2e53bc=![];return _0x409aff;};}();const a256_0x34d972=a256_0x4ab202(this,function(){const _0x3a0c2c=function(){const _0x56f24e=_0x3a0c2c[a256_0x93b6('0xb')](a256_0x93b6('0x2c'))()[a256_0x93b6('0x3')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x56f24e[a256_0x93b6('0x1')](a256_0x34d972);};return _0x3a0c2c();});a256_0x34d972();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require('../../utils/constants');const errors=require(a256_0x93b6('0x24'));const omnic=require(a256_0x93b6('0x5'));module[a256_0x93b6('0x1a')]=class InviteFilterCommand extends tesseract_1[a256_0x93b6('0x21')]{constructor(){super(a256_0x93b6('0x2b'),{'description':'It\x20allows\x20you\x20to\x20follow\x20streamers,\x20from\x20various\x20platforms,\x20in\x20the\x20server.\x20When\x20the\x20streamers\x20go\x20live,\x20or\x20post\x20a\x20video,\x20Bastion\x20will\x20notify\x20about\x20it\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'remove':['r'],'twitch':['t']},'boolean':[a256_0x93b6('0x16')],'string':['twitch']},'scope':a256_0x93b6('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a256_0x93b6('0xc')],'syntax':['streamers',a256_0x93b6('0xe'),a256_0x93b6('0x20')]});this[a256_0x93b6('0x14')]=async(_0x362e62,_0x268039)=>{const _0x258fdf=_0x362e62[a256_0x93b6('0x1f')];if(_0x268039[a256_0x93b6('0x29')]){_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]={..._0x258fdf['document'][a256_0x93b6('0x2b')],'twitch':{'channelId':_0x362e62[a256_0x93b6('0x1d')]['id'],'users':_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]&&_0x258fdf[a256_0x93b6('0x1b')]['streamers'][a256_0x93b6('0x29')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch'][a256_0x93b6('0x18')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch'][a256_0x93b6('0x18')][a256_0x93b6('0x25')]&&!_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch'][a256_0x93b6('0x18')][a256_0x93b6('0x2a')](_0x268039[a256_0x93b6('0x29')])?_0x258fdf['document'][a256_0x93b6('0x2b')][a256_0x93b6('0x29')][a256_0x93b6('0x18')][a256_0x93b6('0x13')](_0x268039[a256_0x93b6('0x29')]):[_0x268039['twitch']]}};if(_0x268039[a256_0x93b6('0x16')]){_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch'][a256_0x93b6('0x18')]=_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch'][a256_0x93b6('0x18')][a256_0x93b6('0x2')](_0x19d0d7=>_0x19d0d7!==_0x268039[a256_0x93b6('0x29')]);if(_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')][a256_0x93b6('0x29')]['users'][a256_0x93b6('0x25')]===0x0){_0x258fdf['document'][a256_0x93b6('0x2b')][a256_0x93b6('0x29')]=undefined;delete _0x258fdf['document'][a256_0x93b6('0x2b')][a256_0x93b6('0x29')];}}if(_0x258fdf[a256_0x93b6('0x1b')]['streamers'][a256_0x93b6('0x29')][a256_0x93b6('0x18')][a256_0x93b6('0x25')]>constants['LIMITS'][a256_0x93b6('0x2e')]&&constants[a256_0x93b6('0x15')](this[a256_0x93b6('0x0')][a256_0x93b6('0x8')])){const _0x27f392=await omnic['fetchPremiumTier'](_0x362e62['guild'])['catch'](()=>{});if(_0x27f392){if(_0x27f392===omnic['PremiumTier'][a256_0x93b6('0x28')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')][a256_0x93b6('0x29')][a256_0x93b6('0x18')][a256_0x93b6('0x25')]>constants[a256_0x93b6('0x19')]['GOLD'][a256_0x93b6('0x2e')]){throw new errors[(a256_0x93b6('0xd'))](errors[a256_0x93b6('0x17')][a256_0x93b6('0x6')],this['client'][a256_0x93b6('0x22')][a256_0x93b6('0x2d')](_0x362e62[a256_0x93b6('0x1f')]['document'][a256_0x93b6('0x9')],a256_0x93b6('0x23'),a256_0x93b6('0x11'),constants[a256_0x93b6('0x19')]['GOLD'][a256_0x93b6('0x2e')]));}else if(_0x27f392===omnic[a256_0x93b6('0x10')][a256_0x93b6('0x27')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')][a256_0x93b6('0x29')]['users'][a256_0x93b6('0x25')]>constants[a256_0x93b6('0x19')][a256_0x93b6('0x27')][a256_0x93b6('0x2e')]){throw new errors[(a256_0x93b6('0xd'))](errors[a256_0x93b6('0x17')][a256_0x93b6('0x6')],this['client'][a256_0x93b6('0x22')][a256_0x93b6('0x2d')](_0x362e62[a256_0x93b6('0x1f')]['document'][a256_0x93b6('0x9')],a256_0x93b6('0x23'),a256_0x93b6('0x11'),constants['LIMITS'][a256_0x93b6('0x27')][a256_0x93b6('0x2e')]));}}else{throw new errors[(a256_0x93b6('0xd'))](errors[a256_0x93b6('0x17')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a256_0x93b6('0x0')][a256_0x93b6('0x22')]['getString'](_0x362e62[a256_0x93b6('0x1f')][a256_0x93b6('0x1b')]['language'],a256_0x93b6('0x23'),a256_0x93b6('0xa'),constants[a256_0x93b6('0x19')][a256_0x93b6('0x2e')]));}}await _0x258fdf['document'][a256_0x93b6('0x1c')]();}const _0x13bc5e=[];if(_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')][a256_0x93b6('0x29')]){_0x13bc5e[a256_0x93b6('0x7')]({'name':a256_0x93b6('0x26'),'value':'<#'+_0x258fdf[a256_0x93b6('0x1b')]['streamers'][a256_0x93b6('0x29')][a256_0x93b6('0x4')]+'>\x0a'+(_0x258fdf['document']['streamers']['twitch'][a256_0x93b6('0x18')]&&_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')]['twitch']['users'][a256_0x93b6('0x25')]?_0x258fdf[a256_0x93b6('0x1b')][a256_0x93b6('0x2b')][a256_0x93b6('0x29')]['users'][a256_0x93b6('0x1e')]('\x0a'):'-')});}await _0x362e62[a256_0x93b6('0x1d')]['send']({'embed':{'color':_0x268039[a256_0x93b6('0x29')]&&_0x268039[a256_0x93b6('0x29')]['length']?constants['COLORS']['TWITCH']:tesseract_1[a256_0x93b6('0x2f')]['COLORS']['IRIS'],'title':a256_0x93b6('0xf'),'fields':_0x13bc5e['length']?_0x13bc5e:[{'name':'You\x20aren\x27t\x20following\x20any\x20streamers.','value':'See\x20`'+this['name']+'\x20--help`\x20for\x20more\x20information.'}]}})[a256_0x93b6('0x12')](()=>{});};}};