$(document).ready(function () {
    var selectedStation,selectedYear,selectedMonth,selectedDate;
    var station_option = document.getElementById("station_select");
    station_option.addEventListener('change', function(event) {
        selectedStation = event.target.value;
        var data = {
            station:selectedStation
        };
        $.ajax({
                    url: 'station/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            var year_select = document.getElementById("year_select");
                            while (year_select.options.length > 1) {
                                year_select.remove(1);
                            }
                            var month_select = document.getElementById("month_select");
                            while (month_select.options.length > 1) {
                                month_select.remove(1);
                            }
                            var date_select = document.getElementById("date_select");
                            while (date_select.options.length > 1) {
                                date_select.remove(1);
                            }
                            // 动态设置选项
                            for(var i=0;i<response.data.length;i++){
                                var option = document.createElement("option");
                                option.value = response.data[i];
                                option.text = response.data[i];
                                year_select.add(option);
                            }
                        }
                        else{
                            console.log(response.message)
                        }
                    },
                    error: function() {

                    }
            });
    });
    var year_option = document.getElementById("year_select");
    year_option.addEventListener('change', function(event) {
        selectedYear = event.target.value;
        var data = {
            station:selectedStation,
            year:selectedYear
        };
        $.ajax({
                    url: 'year/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            var month_select = document.getElementById("month_select");
                            while (month_select.options.length > 1) {
                                month_select.remove(1);
                            }
                            var date_select = document.getElementById("date_select");
                            while (date_select.options.length > 1) {
                                date_select.remove(1);
                            }
                            // 动态设置选项
                            for(var i=0;i<response.data.length;i++){
                                var option = document.createElement("option");
                                option.value = response.data[i];
                                option.text = response.data[i];
                                month_select.add(option);
                            }
                        }
                        else{
                            console.log(response.message)
                        }
                    },
                    error: function() {

                    }
            });
    });
    var month_option = document.getElementById("month_select");
    month_option.addEventListener('change', function(event) {
        selectedMonth = event.target.value;
        var data = {
            station:selectedStation,
            year:selectedYear,
            month:selectedMonth
        };
        $.ajax({
                    url: 'month/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            var date_select = document.getElementById("date_select");
                            while (date_select.options.length > 1) {
                                date_select.remove(1);
                            }
                            // 动态设置选项
                            for(var i=0;i<response.data.length;i++){
                                var option = document.createElement("option");
                                option.value = response.data[i];
                                option.text = response.data[i];
                                date_select.add(option);
                            }
                        }
                        else{
                            console.log(response.message)
                        }
                    },
                    error: function() {

                    }
            });
    });
    var date_option = document.getElementById("date_select");
    date_option.addEventListener('change', function(event) {
        selectedDate = event.target.value;
    });
    var submit_btn = document.getElementById("submit");
    submit_btn.addEventListener('click', function(event) {
        var data={
            station:selectedStation,
            year:selectedYear,
            month:selectedMonth,
            date:selectedDate
        };
        // 参数初始化
        var date = []
        var xmd_Air_Temperature = []
        var zfd_Air_Temperature = []
        var bsg_Air_Temperature = []
        var dcn_Air_Temperature = []
        var dsn_Air_Temperature = []
        var Wind_direction = []
        var Wind_speed = []
        var Atmospheric_Pressure = []
        var Sea_Temperature = []
        var Wind_Wave_Height = []
        var Wind_Wave_Period = []
        $.ajax({
                    url: 'get_date_data/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            for(var day=1;day<=response.data.xmd.length;day++){
                                date.push(day);
                                if(response.data.xmd[day-1].Air_Temperature >= 999){
                                    xmd_Air_Temperature.push(0);
                                }
                                else{
                                    xmd_Air_Temperature.push(response.data.xmd[day-1].Air_Temperature);
                                }
                                if(response.data.zfd[day-1].Air_Temperature >= 999){
                                    zfd_Air_Temperature.push(0);
                                }
                                else{
                                    zfd_Air_Temperature.push(response.data.zfd[day-1].Air_Temperature);
                                }
                                if(response.data.bsg[day-1].Air_Temperature >= 999){
                                    bsg_Air_Temperature.push(0);
                                }
                                else{
                                    bsg_Air_Temperature.push(response.data.bsg[day-1].Air_Temperature);
                                }
                                if(response.data.dcn[day-1].Air_Temperature >= 999){
                                    dcn_Air_Temperature.push(0);
                                }
                                else{
                                    dcn_Air_Temperature.push(response.data.dcn[day-1].Air_Temperature);
                                }
                                if(response.data.dsn[day-1].Air_Temperature >= 999){
                                    dsn_Air_Temperature.push(0);
                                }
                                else{
                                    dsn_Air_Temperature.push(response.data.dsn[day-1].Air_Temperature);
                                }
                                var chartDom = document.getElementById('main');
                                var myChart = echarts.init(chartDom);
                                var option;
                                option = {
                                  title: {
                                    text: 'Air_Temperature'
                                  },
                                  tooltip: {
                                    trigger: 'axis'
                                  },
                                  legend: {
                                    data: ['小麦岛', '芝罘岛', '北礵岛', '大陈岛', '东山岛']
                                  },
                                  grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                  },
                                  toolbox: {
                                    feature: {
                                      saveAsImage: {}
                                    }
                                  },
                                  xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: date
                                  },
                                  yAxis: {
                                    type: 'value'
                                  },
                                  series: [
                                    {
                                      name: '小麦岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: xmd_Air_Temperature
                                    },
                                    {
                                      name: '芝罘岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: zfd_Air_Temperature
                                    },
                                    {
                                      name: '北礵岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: bsg_Air_Temperature
                                    },
                                    {
                                      name: '大陈岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dcn_Air_Temperature
                                    },
                                    {
                                      name: '东山岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dsn_Air_Temperature
                                    }
                                  ]
                                };
                                option && myChart.setOption(option);
                            }
                        }
                        else{
                            console.log(response.message)
                        }
                    },
                    error: function() {

                    }
            });
    });
});