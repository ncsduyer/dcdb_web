function fnW(str) {
	var num;
	str >= 10 ? num = str : num = "0" + str;
	return num;
}

//中国地图开始
//var china_map =echarts.init(document.getElementById("china_map"),'macarons'); 
// var china_map =echarts.init(document.getElementById("china_map"),'infographic'); 
//var china_map =echarts.init(document.getElementById("china_map"),'shine'); 


// function randomData() {
// 		return Math.round(Math.random()*500);
// 	}
//  
// 	var mydata = [
// 		{name: '北京',value: randomData() },{name: '天津',value: randomData() },
// 		{name: '上海',value: randomData() },{name: '重庆',value: randomData() },
// 		{name: '河北',value: randomData() },{name: '河南',value: randomData() },
// 		{name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
// 		{name: '黑龙江',value: randomData() },{name: '湖南',value: randomData()},
// 		{name: '安徽',value: randomData() },{name: '山东',value: randomData() },
// 		{name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
// 		{name: '浙江',value: randomData() },{name: '江西',value: randomData() },
// 		{name: '湖北',value: randomData() },{name: '广西',value: randomData() },
// 		{name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
// 		{name: '内蒙古',value: randomData() },{name: '陕西',value: randomData()},
// 		{name: '吉林',value: randomData() },{name: '福建',value: randomData() },
// 		{name: '贵州',value: randomData() },{name: '广东',value: randomData() },
// 		{name: '青海',value: randomData() },{name: '西藏',value: randomData() },
// 		{name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
// 		{name: '海南',value: randomData() },{name: '台湾',value: randomData() },
// 		{name: '香港',value: randomData() },{name: '澳门',value: randomData() }
// 	];
//  
// 	var option = {
// 		//backgroundColor: '#FFFFFF',
// 		
// 		title: {
// 			text: '犯罪人口来源分析',
// 			textStyle:{color:'#fff'},
// 			//subtext: '纯属虚构',
// 			x:'center'
// 		},
// 		tooltip : {
// 			trigger: 'item'
// 		},
// 		visualMap: {
// 			show : false,
// 			x: 'left',
// 			y: 'bottom',
// 			//layoutCenter:['30%','30%'],
// 			splitList: [ 
// 				{start: 500, end:600},{start: 400, end: 500},
// 				{start: 300, end: 400},{start: 200, end: 300},
// 				{start: 100, end: 200},{start: 0, end: 100},
// 			],
// 			color: ['#ff0', '#ffff00', '#0E94EB','#6FBCF0', '#F0F06F', '#00CC00']
// 		},
// 		series: [{
// 			name: '犯罪人口来源分析',
// 			type: 'map',
// 			mapType: 'china', 
// 			roam: true,
// 			label: {
// 				normal: {
// 					show: false
// 				},
// 				emphasis: {
// 					show: false
// 				}
// 			},
// 			data:mydata
// 		}]
// 	};

// china_map.setOption(option);
//中国地图结束







//获取当前时间
var timer = setInterval(function() {
	var date = new Date();
	var year = date.getFullYear(); //当前年份
	var month = date.getMonth(); //当前月份
	var data = date.getDate(); //天
	var hours = date.getHours(); //小时
	var minute = date.getMinutes(); //分
	var second = date.getSeconds(); //秒
	var day = date.getDay(); //获取当前星期几 
	var ampm = hours < 12 ? 'am' : 'pm';
	$('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
	$('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span>' + ampm + '</span><span>周' + day +
		'</span>')

}, 1000)


//违法犯罪人员分析占比，带边框效果的饼图
//var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'macarons'); 
var pie_fanzui = echarts.init(document.getElementById("pie_fanzui"), 'infographic');

// pie_fanzui.on('click', function(param) {
//     var url = param.data.url;
//     window.location.href = 'https://www.baidu.com';
// });



//----------------------违法犯罪人员分析占比end---------------



//违法犯罪人员年龄分析占比，带边框效果的饼图
//var pie_age =echarts.init(document.getElementById("pie_age"),'macarons'); 
var pie_age = echarts.init(document.getElementById("pie_age"), 'infographic');
//var pie_age =echarts.init(document.getElementById("pie_age"),'shine'); 

//----------------------违法犯罪人员年龄分析占比end---------------



//===================人口出入时间段统计=======================
//var line_time =echarts.init(document.getElementById("line_time"),'shine'); 
var line_time = echarts.init(document.getElementById("line_time"), 'macarons');
//var line_time =echarts.init(document.getElementById("line_time"),'infographic'); 
// var option = {
// 	// 给echarts图设置背景色
// 	//backgroundColor: '#FBFBFB',  // -----------> // 给echarts图设置背景色
// 	color: ['#7FFF00'],
// 	tooltip: {
// 		trigger: 'axis'
// 	},
//
// 	grid: {
// 		x: 40,
// 		y: 30,
// 		x2: 5,
// 		y2: 20
//
// 	},
// 	calculable: true,
//
//
// 	xAxis: [{
// 		type: 'category',
// 		data: ['上报数', '采用数', '采纳率', '逾期上报', '未上报', '得分'],
// 		axisLabel: {
// 			color: "#7FFF00" //刻度线标签颜色
// 		}
// 	}],
// 	yAxis: [{
//
// 		type: 'value',
// 		axisLabel: {
// 			color: "#7FFF00" //刻度线标签颜色
// 		}
// 	}],
// 	series: [{
// 		name: '区委信息工作统计',
// 		type: 'line',
// 		data: [800, 3000, 500, 800, 300, 600, 600],
//
// 	}]
// };
//
//
// line_time.setOption(option);


//=========违法犯罪人员地区分布开始=======================
//var qufenbu_data =echarts.init(document.getElementById("qufenbu_data"),'shine'); 
//var qufenbu_data =echarts.init(document.getElementById("qufenbu_data"),'macarons'); 
var qufenbu_data = echarts.init(document.getElementById("qufenbu_data"), 'infographic');
// option = {
// 	color: ['#FADB71'],
// 	tooltip: {
// 		trigger: 'axis',
// 		axisPointer: { // 坐标轴指示器，坐标轴触发有效
// 			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
// 		}
// 	},
// 	grid: {
// 		x: 30,
// 		y: 10,
// 		x2: 15,
// 		y2: 20
// 	},
// 	xAxis: [{
// 		type: 'category',
// 		data: ['错别字', '格式有误', '体外循环', '一文多送', '平均时长', '逾期上报', '未上报'],
// 		axisTick: {
// 			alignWithLabel: true
// 		},
// 		axisLabel: {
// 			color: "#FADB71" //刻度线标签颜色
// 		}
// 	}],
// 	yAxis: [{
// 		type: 'value',
// 		axisLabel: {
// 			color: "#FADB71" //刻度线标签颜色
// 		}
// 	}],
// 	series: [{
// 		name: '区委公文运转统计',
// 		type: 'bar',
// 		barWidth: '60%',
// 		data: [10, 52, 200, 334, 390, 330, 220]
// 	}]
// };
//
// qufenbu_data.setOption(option);
//=========违法犯罪人员地区分布结束=======================

/*

//时间选择器
var startV = '';
var endV = '';
laydate.skin('danlan');
var startTime = {
    elem: '#startTime',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: laydate.now(), //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startV = datas;
        endTime.min = datas; //开始日选好后，重置结束日的最小日期
    }
};
var endTime = {
    elem: '#endTime',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endV = datas;
    }
};

laydate(startTime);
laydate(endTime);

//时间选择器
var startVs = '';
var endVs = '';
laydate.skin('danlan');
var startTimes = {
    elem: '#startTimes',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startVs = datas;
        endTimes.min = datas; //开始日选好后，重置结束日的最小日期
        setQgData($('#barTypes').parent().parent(), 1);
    }
};
var endTimes = {
    elem: '#endTimes',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endVs = datas;
        setQgData($('#barTypes').parent().parent(), 1);
    }
};

laydate(startTimes);
laydate(endTimes);






//更改日期插件的样式
function dateCss() {
    var arr = $('#laydate_box').attr('style').split(';');
    var cssStr =
        'position:absolute;right:0;';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('top') != -1) {
            cssStr += arr[i];
        }
    }

    $('#laydate_box').attr('style', cssStr);
}


var workDate;
var time = {
    elem: '#times',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now() + 30,
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        workDate = datas;
    }
};

laydate(time);
*/

var china_mapa = echarts.init(document.getElementById("china_mapa"), 'infographic');
// console.log("china_mapa:")
// console.log(china_mapa)
// console.log(dataMap.dataPI['2002']);
option = {
	
	timeline:{
        data:[
            '2002','2003','2004','2005','2006',
        ],
				
		autoPlay: true,
		
    },
    options: [
        {
			title: {
				'text': '区委办管理事务统计',
				'subtext': '数据来自顺庆区委办',
				textStyle: {
					color: "#fff"
				},
			},
			tooltip: {
				'trigger': 'axis'
			},
			legend: {
				x: 'right',
				'data': ['督办事项', '区委会议', '区委公文', '区委信息', ],
				'selected': {
					'督办事项': true,
					'区委会议': true,
					'区委公文': true,
					'区委公文': true,

				},
				textStyle: {
					color: "#fff"
				},
			},
			toolbox: {
				'show': true,
				orient: 'vertical',
				x: 'right',
				y: 'center',
			},
			calculable: true,
			grid: {
				'y': 80,
				'y2': 100
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': {
					'interval': 0
				},
				'data': [
					'一月', '\n二月', '三月', '\n四月', '五月', '\n六月', '七月', '\n八月',
					'九月', '\n十月', '十一月', '\n十二月'
				]
			}],
			textStyle: {
				color: "#fff"
			},
			yAxis: [{
					'type': 'value',
					'name': '总数据',
					'max': 53500
				},
				{
					'type': 'value',
					'name': '单位：个'
				}
			],
			series: [{
					'name': '督办事项',
					'type': 'bar',
					'markLine': {
						symbol: ['arrow', 'none'],
						symbolSize: [4, 2],
						itemStyle: {
							normal: {
								lineStyle: {
									color: 'orange'
								},
								barBorderColor: 'orange',
								label: {
									position: 'left',
									formatter: function(params) {
										return Math.round(params.value);
									},
									textStyle: {
										color: 'orange'
									}
								}
							}
						},
						'data': [{
							'type': 'average',
							'name': '平均值'
						}]
					},
					'data': [50, 60, 70, 80, 90, 1000, 2000, 3000, 4000, 4000, 4000, 4000]
				},
				{
					'name': '区委会议',
					'yAxisIndex': 1,
					'type': 'bar',
					'data': [50, 60, 70, 80, 90, 1000, 2000, 3000, 4000, 4000, 4000, 4000]
				},
				{
					'name': '区委公文',
					'yAxisIndex': 1,
					'type': 'bar',
					'data': [50, 60, 70, 80, 90, 1000, 2000, 3000, 4000, 4000, 4000, 4000]
				},
				{
					'name': '区委信息',
					'yAxisIndex': 1,
					'type': 'bar',
					'data': [50, 60, 70, 80, 90, 1000, 2000, 3000, 4000, 4000, 4000, 4000]
				},

			]
		},
		{
			title: {
				'text': '区委办管理事务统计'
			},
			series: [{
					'data': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300]
				},
				{
					'data': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300]
				},
				{
					'data': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300]
				},
				{
					'data': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300]
				},

			]
		},
		{
			title: {
				'text': '区委办管理事务统计'
			},
			series: [{
					'data': [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 12000, 13000]
				},
				{
					'data': [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 12000, 13000]
				},
				{
					'data': [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 12000, 13000]
				},
				{
					'data': [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 1000, 12000, 13000]
				},

			]
		},
		{
			title: {
				'text': '区委办管理事务统计'
			},
			series: [{
					'data': [11000, 21000, 31000, 41000, 51000, 21000, 51000, 31000, 11000, 11000, 12000, 13000]
				},
				{
					'data': [11000, 21000, 31000, 41000, 51000, 21000, 51000, 31000, 11000, 11000, 12000, 13000]
				},
				{
					'data': [11000, 21000, 31000, 41000, 51000, 21000, 51000, 31000, 11000, 11000, 12000, 13000]
				},
				{
					'data': [11000, 21000, 31000, 41000, 51000, 21000, 51000, 31000, 11000, 11000, 12000, 13000]
				},
			]
		},
	]
};

// china_mapa.setOption(option);
