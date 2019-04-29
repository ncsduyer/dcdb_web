Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var rykjpub = {
    apprunurl: "http://www.baidu.com",//APP运行域名
    apperrurl: "",//APP错误页面

    //判断是否获取token值
    isgettoken: function () {
        try {
//          var tokenData = TokenInfo.getToken();
//          localStorage.setItem("wccToken", tokenData); //设置
              this.getLocalToken();
            return true;
        }
        catch (ex) {
            ////var message = "\r\n 用户信息获取异常，请退出重新登陆！！！";
            ////var title = "";
            //self.location.href = "404.html";
            ////mui.confirm(message, title, ['确定'], function () {
            ////    if (rturl != "") {
            ////        self.location.href = apperrurl;
            ////    }
            ////    return false;
            ////});
        }
    },
    //获取登录token
    getLocalToken: function () {

        //alert(apiUrl.Login);
        var rt_bool = false;
		$.ajax(apiUrl.Login, {
			type: 'get',
			data: {
				"username": "administrator",
				"password": "111111"
			},
			success: function(res) {
                localStorage.setItem("wccToken", res.data.token); //设置
                // alert("ok");
			},
            error: function (e) {
                // alert("false");
			}
        });
        //延迟操作


        return true;
        
	}
};