const request = require("sync-request");
const { segment } = require('oicq');

const api60s='http://api.03c3.cn/zb';
const cmd='今日60s';

class ReadWorldWith60s extends NIL.ModuleBase{
    onStart(api){
        api.logger.info('60s读世界加载成功 by phj233~');
        api.listen('onGroupMessageReceived',(e)=>{
            if(e.raw_message==cmd){
                let imgurl = api60s;
                let img60s=segment.image(imgurl);
                img60s.asface = true;
                e.reply(img60s,img60s);
            }
        });
    }
    onStop(){
   
    }
   }
   
   module.exports = new ReadWorldWith60s;
