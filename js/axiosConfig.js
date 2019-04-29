// http request 请求拦截器，有token值则配置上token值
var token = localStorage.getItem("wccToken"); //获取
axios.interceptors.request.use(
    config => {
        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        if (!response.data.success) {
            switch (response.data.code) {
                case 700:
                    // 这里写清除token的代码
                   var  url=window.document.location.href;
                   var pathName=window.document.location.pathname;
                   // alert(url);
                   // alert(pathName);
                   // alert(url.substring(0,url.indexOf(pathName))+'/../login.html');
                    window.top.location.href = url.substring(0,url.indexOf(pathName))+'/../login.html';

            }
        }
        return response;
    },
    error => {
        // if (error.response) {
        //     switch (error.response.status) {
        //         case 404:
        //             // 这里写清除token的代码
        //             router.replace({
        //                 path: 'login',
        //                 query: {redirect: router.currentRoute.fullPath}   //登录成功后跳入浏览的当前页面
        //             })
        //     }
        // }
        return Promise.reject(error.response.data)
    });