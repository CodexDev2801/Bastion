const a278_0x3fe4=['displayAvatarURL','Bastion\x20v','isPublicBastion','IRIS','count','guild','\x20on\x20','Bot\x20Owners','../../utils/durations','\x20/\x20','getConstant','version','memoryUsage','ownerID','author.username','Command','author.url','platform','guilds','shard','Connected\x20via\x20Starlink.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','stats','\x20Servers\x0a','env','BASTION_BOOT_TIME','color','ids','emoji','exec','/status','constructor','toString','Shard\x20','user','name','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','cache','between','prefixes','this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)','Shards','/premium)','send','../../package.json','toFixed','Uptime','../../utils/badges','rss','reduce','\x20Status','locale','\x20•\x20','Constants','../../utils/constants','apply','\x20Users','Memory\x20Usage','Developer','COLORS','catch','Bot\x20ID','join','Environment','process.memoryUsage().rss','@bastion/tesseract','this.guilds.cache.size','bastion.website','then','Default\x20Prefixes','owners','status\x20--shard','channel','map','broadcastEval','now','memberCount','arch','status','client'];(function(_0x5aa0e6,_0x3fe4d9){const _0x50a1bd=function(_0x190a90){while(--_0x190a90){_0x5aa0e6['push'](_0x5aa0e6['shift']());}};const _0x314318=function(){const _0x4033be={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55f0e9,_0x487b34,_0x241b65,_0x5b6410){_0x5b6410=_0x5b6410||{};let _0xe1323a=_0x487b34+'='+_0x241b65;let _0x360895=0x0;for(let _0xf1f611=0x0,_0x112d05=_0x55f0e9['length'];_0xf1f611<_0x112d05;_0xf1f611++){const _0x1fca69=_0x55f0e9[_0xf1f611];_0xe1323a+=';\x20'+_0x1fca69;const _0x5346c2=_0x55f0e9[_0x1fca69];_0x55f0e9['push'](_0x5346c2);_0x112d05=_0x55f0e9['length'];if(_0x5346c2!==!![]){_0xe1323a+='='+_0x5346c2;}}_0x5b6410['cookie']=_0xe1323a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x457060,_0x3058a6){_0x457060=_0x457060||function(_0x4d51b7){return _0x4d51b7;};const _0x4e2d34=_0x457060(new RegExp('(?:^|;\x20)'+_0x3058a6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1c6ff9=function(_0x3cace0,_0x166392){_0x3cace0(++_0x166392);};_0x1c6ff9(_0x50a1bd,_0x3fe4d9);return _0x4e2d34?decodeURIComponent(_0x4e2d34[0x1]):undefined;}};const _0x3038d5=function(){const _0xe6e30c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe6e30c['test'](_0x4033be['removeCookie']['toString']());};_0x4033be['updateCookie']=_0x3038d5;let _0x26e949='';const _0x3165cc=_0x4033be['updateCookie']();if(!_0x3165cc){_0x4033be['setCookie'](['*'],'counter',0x1);}else if(_0x3165cc){_0x26e949=_0x4033be['getCookie'](null,'counter');}else{_0x4033be['removeCookie']();}};_0x314318();}(a278_0x3fe4,0x1e1));const a278_0x50a1=function(_0x5aa0e6,_0x3fe4d9){_0x5aa0e6=_0x5aa0e6-0x0;let _0x50a1bd=a278_0x3fe4[_0x5aa0e6];return _0x50a1bd;};const a278_0x4033be=function(){let _0x3eced0=!![];return function(_0x212059,_0xcaf0f1){const _0x30dc89=_0x3eced0?function(){if(_0xcaf0f1){const _0x29549e=_0xcaf0f1[a278_0x50a1('0x36')](_0x212059,arguments);_0xcaf0f1=null;return _0x29549e;}}:function(){};_0x3eced0=![];return _0x30dc89;};}();const a278_0x190a90=a278_0x4033be(this,function(){const _0x435af5=function(){const _0x58d63c=_0x435af5[a278_0x50a1('0x1e')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a278_0x50a1('0x14'));return!_0x58d63c['test'](a278_0x190a90);};return _0x435af5();});a278_0x190a90();'use strict';const tesseract_1=require(a278_0x50a1('0x40'));const constants=require(a278_0x50a1('0x35'));const duration=require(a278_0x50a1('0x7'));const badges=require(a278_0x50a1('0x2e'));const package_json_1=require(a278_0x50a1('0x2b'));module['exports']=class StatusCommand extends tesseract_1[a278_0x50a1('0xe')]{constructor(){super(a278_0x50a1('0x4d'),{'description':'It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.','triggers':[a278_0x50a1('0x15'),'info'],'arguments':{'boolean':[a278_0x50a1('0x12')]},'scope':a278_0x50a1('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a278_0x50a1('0x4d'),a278_0x50a1('0x46')]});this[a278_0x50a1('0x1c')]=async(_0x405be7,_0x2cc198)=>{const _0x5be52a=constants[a278_0x50a1('0x1')](this['client'][a278_0x50a1('0x21')])&&await badges['fetchBadges'](_0x405be7[a278_0x50a1('0x4')][a278_0x50a1('0xc')],_0x405be7[a278_0x50a1('0x4')]['id'])[a278_0x50a1('0x43')](_0xd5bed5=>_0xd5bed5['json']())['catch'](()=>{});const _0x4ae95d=badges['getMembership'](_0x5be52a?_0x5be52a['badgeValue']:0x0);const _0x5152d8=await this[a278_0x50a1('0x4e')]['shard'][a278_0x50a1('0x49')](a278_0x50a1('0x41'));const _0x3fb609=_0x2cc198[a278_0x50a1('0x12')]?this[a278_0x50a1('0x4e')][a278_0x50a1('0x11')][a278_0x50a1('0x24')]['size']:_0x5152d8[a278_0x50a1('0x30')]((_0x3c98c4,_0x55e5c1)=>_0x3c98c4+_0x55e5c1,0x0);const _0x4bffb4=_0x2cc198['shard']?this[a278_0x50a1('0x4e')]['guilds'][a278_0x50a1('0x24')][a278_0x50a1('0x48')](_0x1fc347=>_0x1fc347[a278_0x50a1('0x4b')]):await this[a278_0x50a1('0x4e')][a278_0x50a1('0x12')][a278_0x50a1('0x49')](a278_0x50a1('0x27'));const _0x1ffe9d=_0x4bffb4[a278_0x50a1('0x30')]((_0x2ff924,_0x42ac59)=>_0x2ff924+_0x42ac59,0x0);const _0x10db87=await this[a278_0x50a1('0x4e')][a278_0x50a1('0x12')]['broadcastEval'](a278_0x50a1('0x3f'));const _0x333e5f=_0x2cc198[a278_0x50a1('0x12')]?process[a278_0x50a1('0xb')]()[a278_0x50a1('0x2f')]:_0x10db87['reduce']((_0x171b64,_0x4a294f)=>_0x171b64+_0x4a294f,0x0);const _0x41d37d=[{'name':a278_0x50a1('0x39'),'value':'['+this[a278_0x50a1('0x4e')][a278_0x50a1('0x32')][a278_0x50a1('0x9')](a278_0x50a1('0xd'))+']('+this['client']['locale'][a278_0x50a1('0x9')](a278_0x50a1('0xf'))+')','inline':!![]},{'name':a278_0x50a1('0x3c'),'value':this[a278_0x50a1('0x4e')][a278_0x50a1('0x21')]['id'],'inline':!![]},{'name':a278_0x50a1('0x6'),'value':this[a278_0x50a1('0x4e')]['credentials'][a278_0x50a1('0x45')][a278_0x50a1('0x3d')]('\x0a')||'-','inline':!![]},{'name':a278_0x50a1('0x44'),'value':this['client']['configurations'][a278_0x50a1('0x26')][a278_0x50a1('0x3d')]('\x20'),'inline':!![]},{'name':a278_0x50a1('0x28'),'value':this[a278_0x50a1('0x4e')][a278_0x50a1('0x12')][a278_0x50a1('0x3')][a278_0x50a1('0x1f')](),'inline':!![]}];const _0x46994a=[{'name':'Presence','value':_0x3fb609+a278_0x50a1('0x16')+_0x1ffe9d+a278_0x50a1('0x37'),'inline':!![]},{'name':a278_0x50a1('0x2d'),'value':duration['humanize'](duration[a278_0x50a1('0x25')](Date[a278_0x50a1('0x4a')](),Number['parseInt'](process[a278_0x50a1('0x17')][a278_0x50a1('0x18')]))),'inline':!![]},{'name':a278_0x50a1('0x38'),'value':(_0x333e5f/0x400/0x400)[a278_0x50a1('0x2c')](0x2)+'MB','inline':!![]},{'name':a278_0x50a1('0x3e'),'value':'Node\x20'+process[a278_0x50a1('0xa')]+a278_0x50a1('0x5')+process[a278_0x50a1('0x10')]+'\x20'+process[a278_0x50a1('0x4c')]+'.\x20'+(constants[a278_0x50a1('0x1')](this[a278_0x50a1('0x4e')][a278_0x50a1('0x21')])?a278_0x50a1('0x13'):''),'inline':!![]}];await _0x405be7[a278_0x50a1('0x47')][a278_0x50a1('0x2a')]({'embed':{'color':_0x4ae95d?_0x4ae95d[a278_0x50a1('0x19')]:tesseract_1[a278_0x50a1('0x34')][a278_0x50a1('0x3a')][a278_0x50a1('0x2')],'author':{'name':a278_0x50a1('0x0')+package_json_1[a278_0x50a1('0xa')],'url':this[a278_0x50a1('0x4e')][a278_0x50a1('0x32')][a278_0x50a1('0x9')](a278_0x50a1('0x42'))},'title':(_0x2cc198['shard']?'Shard\x20'+this[a278_0x50a1('0x4e')][a278_0x50a1('0x12')][a278_0x50a1('0x1a')][a278_0x50a1('0x3d')](a278_0x50a1('0x8')):'')+a278_0x50a1('0x31'),'description':_0x4ae95d?_0x4ae95d[a278_0x50a1('0x1b')]+'\x20'+_0x4ae95d[a278_0x50a1('0x22')]:a278_0x50a1('0x23')+this['client']['locale'][a278_0x50a1('0x9')](a278_0x50a1('0x42'))+a278_0x50a1('0x29'),'url':this[a278_0x50a1('0x4e')][a278_0x50a1('0x32')][a278_0x50a1('0x9')](a278_0x50a1('0x42'))+a278_0x50a1('0x1d'),'thumbnail':{'url':this[a278_0x50a1('0x4e')][a278_0x50a1('0x21')][a278_0x50a1('0x4f')]({'dynamic':!![],'size':0x200})},'fields':_0x2cc198[a278_0x50a1('0x12')]?_0x46994a:_0x41d37d['concat'](_0x46994a),'footer':{'text':(_0x2cc198[a278_0x50a1('0x12')]?'':a278_0x50a1('0x20')+this['client']['shard'][a278_0x50a1('0x1a')][a278_0x50a1('0x3d')](a278_0x50a1('0x8'))+a278_0x50a1('0x33'))+this['client']['ws']['ping']+'ms'},'timestamp':new Date()}})[a278_0x50a1('0x3b')](()=>{});};}};