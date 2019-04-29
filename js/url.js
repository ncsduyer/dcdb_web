// var apiPrefix = "http://192.168.10.115:8080/api";
var apiPrefix = "http://do.scncry.com:8081/admin/api";
 // var apiPrefix1 = "http://192.168.10.115:8080/file";
var apiPrefix1 = "http://do.scncry.com:8081/admin/file";
var apiUrl = {
	Login: apiPrefix + "/login",
	User: apiPrefix + "/user",
	LogOut: apiPrefix + "/logout",
	// 权限列表
	Permissions: apiPrefix + "/permissions",
	// 上传文件
	Upload:apiPrefix+"/upload",
	// 下载文件
	Download:apiPrefix1+"/download",
	// 获取图片
	RenderPicture:apiPrefix1+"/renderPicture",
	//督查责任单位
	//GET 督查责任单位管理详情 company-controller
	ApicompanyDetail: apiPrefix + "/apicompany/detail",
	//GET 获取督查责任单位列表 company-controller
	ApicompanyList: apiPrefix + "/apicompany/list",

	//会议管理
	//GET和POST 新增会议管理
	MeetingAdd: apiPrefix + "/apimeeting/add",
	//GET和POST 会议管理详情
	MeetingDetail: apiPrefix + "/apimeeting/detail",
	//GET和POST 获取会议管理列表
	MeetingList: apiPrefix + "/apimeeting/list",
	//GET和POST 修改会议管理
	MeetingUpdate: apiPrefix + "/apimeeting/update",
	//GET和POST 会议详情管理
	MeetingDetail: apiPrefix + "/meeting/detail",
	//GET和POST 会议单个人员信息列表
	MeetingDetailList: apiPrefix + "/meetingrec/detailList",
	//GET和POST 查询单个人员信息详情
	MeetingUserDetail: apiPrefix + "/meetingrec/detail",
	//GET和POST 会议单个人员信息列表
	MeetingUserDelete: apiPrefix + "/meetingrec/delete",
	//GET和POST 保存会议单个人员信息
	MeetingUserSave: apiPrefix + "/meetingrec/update",
	// 报表数据
	ApimeetingReport: apiPrefix + "/meetingrec/report",
	//GET和POST 根据ids显示文件列表
	getFilesByIds: apiPrefix1 + "/getFiles/",
	//GET和POST 根据id下载文件
	downLoadFilesById: apiPrefix1 + "/download/",
	getinfoUnitAttrs: apiPrefix+"/infoUnitAttr/detail",
	//流程记录
	//GET和POST 获取流程记录日志
	WorkFlowLogList: apiPrefix + "/apiworkFlowLog/list",

	//督查督办功能API
	//POST 新增督察督办
	ApiassignWorkAdd: apiPrefix + "/apiassignWork/add",
	//GET和POST 获取督察督办列表
	ApiassignWorkList: apiPrefix + "/apiassignWork/list",
	//GET 督察督办单条详情
	ApiassignWorkDetail: apiPrefix + "/apiassignWork/detail",
	//POST 修改督察督办
	ApiassignWorkUpdate: apiPrefix + "/apiassignWork/update",

	//督查单位关联API
	//GET 督查单位关联详情
	ApiworkCompanyDetail: apiPrefix + "/apiworkCompany/detail",
	//GET 督查单位关联列表
	ApiworkCompanyList: apiPrefix + "/apiworkCompany/list",
	//POST 修改督查单位关联
	ApiworkCompanyUpdate: apiPrefix + "/apiworkCompany/update",

	//督查类型
	//GET和POST 获取督查类型列表
	SupervisionTypeList: apiPrefix + "/apiworkType/list",

	//督查类型API
	//GET 获取督查类型管理列表
	ApiworkTypeList: apiPrefix + "/apiworkType/list",
	ApiworkTypeUserList: apiPrefix + "/apiworkType/userlist",
	ApiworkTypeCompanyList: apiPrefix + "/apiworkType/companylist",

	//督查进度控制API
	//POST 新增督查单位进度
	ApiwcInfosAdd: apiPrefix + "/apiwcInfos/add",
	//GET 督查单位进度详情
	ApiwcInfosDetail: apiPrefix + "/apiwcInfos/detail",
	//GET 获取督查单位进度列表
	ApiwcInfosList: apiPrefix + "/apiwcInfos/list",

	//领导列表
	//GET&POST 获取领导列表
	ApileadershipList: apiPrefix + "/apileadership/list",

	//督办事项报表
	ApiWorkReportGenerate: apiPrefix + "/dcdbReport/add",
	ApiWorkReportdelete: apiPrefix + "/dcdbReport/delete",
	ApiWorkReportlist: apiPrefix + "/dcdbReport/list",
	ApiWorkReportDetail: apiPrefix + "/dcdbReport/detail",
	ApiWorkReportUpdate: apiPrefix + "/dcdbReport/update",
	ApiWorkReportexport: apiPrefix + "/dcdbReport/export",
	ApiWorkReportdateGroup: apiPrefix + "/dateGroup/list",

	//交办事项
	//POST 交办事项列表
	ApiTaskList: apiPrefix + "/task/getTaskList",

	ApiTaskList: apiPrefix + "/task/list",

	// 责任单位列表
	ApiNuitList: apiPrefix + "/apiworkType/companylist",

	//获取督办人列表
	ApiOverseePeopleList: apiPrefix + "/apiworkType/userlist",

	//获取各监督项目列表

	ApiCheckItemList: apiPrefix + "/checkitem/list",
	//修改交办事项 或归档事项
	ApiUpdateAssignTask: apiPrefix + "/taskassign/update",



	//POST 交办事项列表
	ApiTaskAdd: apiPrefix + "/task/add",

	//POST 事项名称列表
	ApiTaskNameList: apiPrefix + "/task/getTaskList",

	//POST 督办事项责任单位列表
	ApiTaskAssignUnitList: apiPrefix + "/taskassignUnit/list",

    //GET 获取交办事项详情
    ApiTaskDetailList: apiPrefix + "/task/detail",

    //POST 修改单位督办记录
    ApiTaskassignUnitUpdate: apiPrefix + "/taskassignUnit/update",

    //POST 新增单位督办日志记录
    ApiTaskassignUnitdealAdd: apiPrefix + "/taskassignUnitdeal/add",
    ApiTaskReportChart: apiPrefix + "/task/chart",
	ApiTaskReportlist: apiPrefix + "/task/report",

    //GET 查看交办督查分配记录
    ApiTaskassignDetail: apiPrefix + "/taskassign/detail",
    // 事项日志
    ApitaskassignLoglist: apiPrefix + "/taskassignLog/list",
	Apireportlist: apiPrefix + "/report/list",
	ApireportChart: apiPrefix + "/report/chart",
    Apiinfosadd: apiPrefix + "/infos/add",
    // 区委信息列表
    Apiinfoslist: apiPrefix + "/infos/list",
    ApiinfosReport: apiPrefix + "/infos/report",

    ApiinfosSelectlist:apiPrefix + "/infos/getList",
    // 区委信息添加
    Apiinfosadd: apiPrefix + "/infos/add",
    // 区委会议修改
    ApimeetingEdit: apiPrefix + "/meeting/update",
    // 区委会议添加
    Apimeetingadd: apiPrefix + "/meeting/add",
    // 区委会议列表
    Apimeetinglist: apiPrefix + "/meeting/list",

    ApimeetingSelectlist: apiPrefix + "/meeting/getList",

    // 区委公文添加
    Apidocsadd: apiPrefix + "/docs/add",
    // 区委公文列表
    Apidocslist: apiPrefix + "/docs/list", 
    //区委公文详情
    Apidocdetail: apiPrefix + "/docs/detail",
    //公文运转上报列表
 	Apidoclist: apiPrefix + "/docassignrec/list",
 	//公文编辑
 	Apidocupdate: apiPrefix + "/docs/update",
 	//公文删除
 	Apidocdelete: apiPrefix + "/docs/delete",
    
 
    ApidocsSelectlist: apiPrefix + "/docs/getList",
    
    //区委会议详情
    ApiMeetDetail: apiPrefix + "/meeting/detail",
    
    //获取督查类型管理列表
    ApiStatistics: apiPrefix + "/checkitem/list",

    //实现督办事项导出XLS
    ApiTaskXlsExport: apiPrefix + "/task/export",
    
    //实现报表导出XLS
    ApiReportXlsExport: apiPrefix + "/report/export",
	//會議報表導出
	ApimeetXlsExport: apiPrefix + "/meeting/export",
	//公文報表導出
	ApidocsXlsExport: apiPrefix + "/docs/export",
	//信息報表導出
	ApiinfosXlsExport: apiPrefix + "/infos/export",
	  // 区委信息删除
    Apiinfosdelete: apiPrefix + "/infosrec/delete",
	// 区委信息詳情
	ApiinfosDetails: apiPrefix + "/infosrec/detail",
	// 区委信息更新
	Apiinfosupdate: apiPrefix + "/infosrec/update",
	// 区委会议更新
	Apimeetupdate: apiPrefix + "/meetingrec/update",
	// 区委会议詳情
	ApimeetDetails: apiPrefix + "/meetingrec/detail",
	  // 区委会议删除
    Apimeetdelete: apiPrefix + "/meetingrec/delete",
   // 督办获取图片详情
    Apisore: apiPrefix + "/taskassignUnitdeal/detail",
    // 督办未及时上报
    Apilook: apiPrefix + "/taskassignUnit/updateIsTimeLy",
    
    
    // 大数据展示中心接口 ---王晓
    ApiUnitBigData: apiPrefix + "/BigData/countUnit",
    ApiMeetingBigData: apiPrefix + "/BigData/countMeeting",
    ApiDocsBigData: apiPrefix + "/BigData/countDocs",
    ApiInfosBigData: apiPrefix + "/BigData/countInfos",
    ApiCountBigData: apiPrefix + "/BigData/count",
    ApiAssignBigData: apiPrefix + "/BigData/countAssignStatus",
    ApiUnitStarBigData: apiPrefix + "/BigData/countUnitStar",
    ApiManagementBigData: apiPrefix + "/BigData/countManagementServicesStatistics",
   
    
    
    

	
};
// $.ajaxSetup({
// 	contentType: "application/x-www-form-urlencoded;charset=utf-8",
// 	complete: function(XMLHttpRequest, textStatus) {
// 		//通过XMLHttpRequest取得响应结果
// 		var res = XMLHttpRequest.responseText;
// 		try {
// 			var jsonData = JSON.parse(res);
// 			if (textStatus == 200) {
// 				if (jsonData.code == 500 || jsonData.code == 700) {
// 					//如果超时就处理 ，指定要跳转的页面(比如登陆页)
// 					window.location.replace("/login.html");
// 				}
// 			}
//
// 		} catch (e) {}
// 	}
// });

function getHandleTime(startTime, endTime) {
	if (endTime == '' || endTime == undefined || endTime == null) {
		return "还未完成";
	}
	//结束时间
	end_str = endTime.replace(/-/g, "/"); //一般得到的时间的格式都是：yyyy-MM-dd hh24:mi:ss，所以我就用了这个做例子，是/的格式，就不用replace了。
	var end_date = new Date(end_str); //将字符串转化为时间
	//开始时间
	sta_str = startTime.replace(/-/g, "/");
	var sta_date = new Date(sta_str);
	var num = end_date - sta_date; //求出两个时间的时间差，这个是天数
	//计算出相差天数
	var days = Math.floor(num / (24 * 3600 * 1000))

	//计算出小时数

	var leave1 = num % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000))
	//计算相差分钟数
	var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000))
	//计算相差秒数
	var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000)
	return days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒";

}

$.apiAjax = function(options) {
	var defaults = {
		url: "",
		data: null,
		type: "GET",
		dataType: "json",
		success: null,
		error: null,
		isheaders: true,
		loading: true,
		alert: true,
		async: false
	};
	var options = $.extend(defaults, options);
	if (options.loading) {
		loading(true, options.content);
	}
	if (options.isheaders) {
		options.headers = {
			"Authorization": "Bearer " + localStorage.getItem("wccToken")
		};
	} else {
		options.headers = null;
	}
	$.ajax({
		type: options.type,
		url: options.url,
		data: options.data,
		dataType: "json",
		contentType: "application/json",
		headers: options.headers,
		async: options.async,
		success: function(ret) {
			if (ret.code == 200) {
				options.success(ret.data);
			} else if (ret.code == 700) {
				window.parent.frames.location.href = "login.html?messbox=1";
			} else {
				DialogMsg(ret.message, 2);
			}

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if (textStatus == "error") {
				if (errorThrown) {
					DialogMsg(errorThrown.message, 2)
				} else {
					var mess = JSON.parse(XMLHttpRequest.responseText)
					DialogMsg(mess.message, 2);
				}
				if (options.error != null) {

				}

			} else {
				DialogMsg("请求失败,请联系管理员。", 2)
			}
			if (options.error) {
				options.error();
			}

		},
		complete: function() {
			loading(false);
		}
	})
}


$.Apiaxios = function(options) {
	var defaults = {
		url: "",
		data: null,
		method: "GET",
		dataType: "json",
		success: null,
		error: null,
		isheaders: true,
		loading: true,
		alert: true,
		async: false,
		isclose: false
	};
	var options = $.extend(defaults, options);
	if (options.loading) {
		loading(true, options.content);
	}
	window.setTimeout(function() {
		axios({
			url: options.url,
			method: options.method,
			headers: {
				"Authorization": "Bearer " + localStorage.getItem("wccToken"),
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: options.data
		}).then(function(ret) {
			loading(false);
			if (ret.data.code == 200) {
				if (options.success) {
					options.success(ret.data);
					// 是否关闭当前窗口
					if (options.isclose) {
						$.closeiframe();
					}
				}
			} else if (ret.data.code == 700) {
				top.frames.location.href = "login.html?messbox=1";
			} else {
				DialogMsg(ret.data.message, 2);
			}
		}).catch(function(error) {
			loading(false);
			if (error.response) {
				DialogMsg(error.response, 2);
				return;
			} else {
				DialogMsg(error.message, 2);
				return;
			}
// 			if (options.error()) {
// 				// options.error();
// 			}
		});
	}, 500);

}




$.fn.authorizeButton = function() {
	var arrPermissions = localStorage.getItem("Permissions");
	if (!arrPermissions) {
		window.parent.frames.location.href = "login.html?messbox=1";
		return;
	}
	arrPermissions = arrPermissions.split(',');
	var $element = $(this);
	$element.find("a,button").attr("authorize", "no");
	$element.find("a,button").each(function() {
		var $a = $(this);
		var id = $a.attr("id");
		if (id) {
			if (arrPermissions.indexOf(id.toString()) > 0) {
				$($a).attr("authorize", "yes");
			}

		} else {
			$($a).attr("display", "yes");
		}

	});
	$element.find('[authorize=no]').remove();
}
/*提醒框*/
DialogMsg = function(content, type) {
	if (!type) {
		type = 0;
	}
	parent.layer.msg(content, {
		icon: type
	}); //0-警告；1-成功；2-失败

}

/*获取URL值*/
request = function(keyValue) {
	var search = location.search.slice(1);
	var arr = search.split("&");
	for (var i = 0; i < arr.length; i++) {
		var ar = arr[i].split("=");
		if (ar[0] == keyValue) {
			if (unescape(ar[1]) == 'undefined') {
				return "";
			} else {
				return unescape(ar[1]);
			}
		}
	}
	return "";
}


loading = function(IsShow, content) {
	if (!content) {
		content = "请稍等。。。"
	}
	if (IsShow) {
		$("body").append(
			'<div class="load-container" id="ajaxloading" v-if="isSpinShow" style="position: absolute; width: 100%; top: 0; overflow: hidden; height: 100%; z-index: 9999; background:  rgba(3,3,3,0.1);">' +
			'<div style="width: 20%; height: 100px; position:absolute; background: #fff; border-radius: 5px;     box-shadow: darkgrey 10px 10px 30px 5px ; margin: 0 auto;     margin-left: -10%; left: 50%; top: 50%; margin-top: -50px;">' +
			'<div class="loader"></div>' +
			'<p>' + content + '</p>' +
			'</div>' +
			'</div>');
	} else {
		$("#ajaxloading").remove();
	}
}


dialogOpen = function(options) {
	// loading(true);
	var defaults = {
		id: null,
		title: '系统窗口',
		width: "100px",
		height: "100px",
		url: '',
		shade: 0.3,
		btn: ['确认', '关闭'],
		callBack: null,
		isfull: false

	};
	var options = $.extend(defaults, options);
	var _url = options.url;
	var _width = $.windowWidth() > parseInt(options.width.replace('px', '')) ? options.width : $.windowWidth() +
		'px';
	var _height = $.windowHeight() > parseInt(options.height.replace('px', '')) ? options.height : $.windowHeight() +
		'px';
	var index = layer.open({
		id: options.id,
		type: 2,
		shade: options.shade,
		title: options.title,
		fix: false,
		area: [_width, _height],
		content: _url,
		btn: options.btn,
		yes: function(index, layero) {
			options.callBack(index, layero, options.id)
		},
		cancel: function() {
			if (options.cancel != undefined) {
				options.cancel();
			}
			return true;
		}
	});
	if (options.isfull) {
		layer.full(index);
	}
}

$.windowWidth = function() {
	return $(window).width();
}
$.windowHeight = function() {
	return $(window).height();
}

$.closeiframe = function(name) {
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

function getDateStringByDateTime(data,start,end){
	return String(data).substring(start,end);
}
function html_cancel() {
	var index = parent.layer.getFrameIndex(window.name);
	parent.LoadTable();
	parent.layer.close(index);
}
