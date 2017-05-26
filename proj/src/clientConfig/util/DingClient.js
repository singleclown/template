class  DingClient{
    static clientConfig(param,apptype,devtype,callback){	
        if(apptype==0&&devtype==1){
          //手机微应用
           var apiList = require('../apilist_agent.json');
        }else if(apptype==0&&devtype==2){
         //pc微应用
           var apiList = require('../apilist_pcagent.json');
        }else if(apptype==1&&devtype==1){
         //手机服务窗
           var apiList = require('../apilist_service.json');
        }
		let apiListArr = [];
        for(var key in apiList){
			if(apiList[key])
            apiListArr.push(key);   
        }; 	
		let agentId0 = param.agentid;
		let agentId = agentId0.toString();
		if((apptype==0&&devtype==1)||(apptype==1&&devtype==1)){
			dd.config({
			        agentId:agentId,
			        corpId:param.corpid,
					timeStamp:param.timeStamp,
			        nonceStr:param.nonceStr,
			        signature:param.signature,
			        type:parseInt(apptype),
					jsApiList:apiListArr
		    });
		dd.ready(function(){
                if(callback){
				   let option = "JSAPI验证成功";
				   callback(true,option);
			    }
        });
        dd.error(function(error){
				// alert("JSAPI错误:"+error);
                if(callback){
				    callback(false,error);
			    }
        });
		}else if(apptype==0&&devtype==2){
			DingTalkPC.config({
			    agentId:agentId,
			    corpId:param.corpid,
				timeStamp:param.timeStamp,
			    nonceStr:param.nonceStr,
			    signature:param.signature,
			    type:parseInt(apptype),
				jsApiList:apiListArr
            });
			DingTalkPC.ready(function(res){
				console.log('验证成功');
                if(callback){
				   let option = "JSAPI验证成功";
				   callback(true,option);
			    }
            });
			DingTalkPC.error(function(error){
                if(callback){
				    callback(false,error);
			    }
            });
		}
	}
	/*methodName:string钉钉的jsapi方法名
	*pram:参数
	*cb：方法回调
	*/
	static  clientApi(method,prams,cb){
		var callback = { 
			         onSuccess: function(result) {cb&&cb(true,result);},
                     onFail: function(error){cb&&cb(false,error);}
                    };
	    var object = Object.assign(callback,prams);
		eval('dd.'+method+'(object)');
	}
}
module.exports = DingClient;