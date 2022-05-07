const {segment} = require('oicq');
const request = require('sync-request');
const api60s='http://api.qemao.com/api/60s/';
const api60s2='https://api.iyk0.com/60s/';
const cmd='今日60s';

function returnImgurl(apiurl){
    var img = request('GET',apiurl);
    var returnData = JSON.parse(img.getBody('utf8'));
    return returnData.imageUrl;
}
function retrunImg(){
    let imgurl = api60s;
    let img60s=segment.image(imgurl);  
    //let img60s=segment.image(returnImgurl(api60s2));  // 如果图片发不出来 就把这行代码前面'//'删掉 再把上一行代码前面加上'//'
    return img60s;
}
class ReadWorldWith60s extends NIL.ModuleBase{
    onStart(api){
        api.logger.info('60s读世界加载成功 by phj233~~');
        api.listen('onGroupMessageReceived',(e)=>{
            if(e.raw_message==cmd){
                e.reply([`今日60s读懂世界:`,retrunImg()],`~`);
            }
        
        });
    }
    onStop(){
   
    }
   }
   
   module.exports = new ReadWorldWith60s
