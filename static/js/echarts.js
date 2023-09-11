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
        //日期
        var date = []
        //气温
        var xmd_Air_Temperature = []
        var zfd_Air_Temperature = []
        var bsg_Air_Temperature = []
        var dcn_Air_Temperature = []
        var dsn_Air_Temperature = []
        //风向
        var xmd_Wind_direction = []
        var zfd_Wind_direction = []
        var bsg_Wind_direction = []
        var dcn_Wind_direction = []
        var dsn_Wind_direction = []
        //风速
        var xmd_Wind_speed = []
        var zfd_Wind_speed = []
        var bsg_Wind_speed = []
        var dcn_Wind_speed = []
        var dsn_Wind_speed = []
        //大气压
        var xmd_Atmospheric_Pressure = []
        var zfd_Atmospheric_Pressure = []
        var bsg_Atmospheric_Pressure = []
        var dcn_Atmospheric_Pressure = []
        var dsn_Atmospheric_Pressure = []
        //水温
        var xmd_Sea_Temperature = []
        var zfd_Sea_Temperature = []
        var bsg_Sea_Temperature = []
        var dcn_Sea_Temperature = []
        var dsn_Sea_Temperature = []
        //风浪高度
        var xmd_Wind_Wave_Height = []
        var zfd_Wind_Wave_Height = []
        var bsg_Wind_Wave_Height = []
        var dcn_Wind_Wave_Height = []
        var dsn_Wind_Wave_Height = []
        //风浪周期
        var xmd_Wind_Wave_Period = []
        var zfd_Wind_Wave_Period = []
        var bsg_Wind_Wave_Period = []
        var dcn_Wind_Wave_Period = []
        var dsn_Wind_Wave_Period = []
        $.ajax({
                    url: 'get_date_data/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            for(var day=1;day<=response.data.xmd.length;day++){
                                date.push(day);
                                //气温
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
                                //风向
                                if(response.data.xmd[day-1].Wind_direction >= 999){
                                    xmd_Wind_direction.push(0);
                                }
                                else{
                                    xmd_Wind_direction.push(response.data.xmd[day-1].Wind_direction);
                                }
                                if(response.data.zfd[day-1].Wind_direction >= 999){
                                    zfd_Wind_direction.push(0);
                                }
                                else{
                                    zfd_Wind_direction.push(response.data.zfd[day-1].Wind_direction);
                                }
                                if(response.data.bsg[day-1].Wind_direction >= 999){
                                    bsg_Wind_direction.push(0);
                                }
                                else{
                                    bsg_Wind_direction.push(response.data.bsg[day-1].Wind_direction);
                                }
                                if(response.data.dcn[day-1].Wind_direction >= 999){
                                    dcn_Wind_direction.push(0);
                                }
                                else{
                                    dcn_Wind_direction.push(response.data.dcn[day-1].Wind_direction);
                                }
                                if(response.data.dsn[day-1].Wind_direction >= 999){
                                    dsn_Wind_direction.push(0);
                                }
                                else{
                                    dsn_Wind_direction.push(response.data.dsn[day-1].Wind_direction);
                                }
                                //风速
                                if(response.data.xmd[day-1].Wind_speed >= 999){
                                    xmd_Wind_speed.push(0);
                                }
                                else{
                                    xmd_Wind_speed.push(response.data.xmd[day-1].Wind_speed);
                                }
                                if(response.data.zfd[day-1].Wind_speed >= 999){
                                    zfd_Wind_speed.push(0);
                                }
                                else{
                                    zfd_Wind_speed.push(response.data.zfd[day-1].Wind_speed);
                                }
                                if(response.data.bsg[day-1].Wind_speed >= 999){
                                    bsg_Wind_speed.push(0);
                                }
                                else{
                                    bsg_Wind_speed.push(response.data.bsg[day-1].Wind_speed);
                                }
                                if(response.data.dcn[day-1].Wind_speed >= 999){
                                    dcn_Wind_speed.push(0);
                                }
                                else{
                                    dcn_Wind_speed.push(response.data.dcn[day-1].Wind_speed);
                                }
                                if(response.data.dsn[day-1].Wind_speed >= 999){
                                    dsn_Wind_speed.push(0);
                                }
                                else{
                                    dsn_Wind_speed.push(response.data.dsn[day-1].Wind_speed);
                                }
                                //大气压
                                xmd_Atmospheric_Pressure.push(response.data.xmd[day-1].Atmospheric_Pressure);
                                zfd_Atmospheric_Pressure.push(response.data.zfd[day-1].Atmospheric_Pressure);
                                bsg_Atmospheric_Pressure.push(response.data.bsg[day-1].Atmospheric_Pressure);
                                dcn_Atmospheric_Pressure.push(response.data.dcn[day-1].Atmospheric_Pressure);
                                dsn_Atmospheric_Pressure.push(response.data.dsn[day-1].Atmospheric_Pressure);
                                //水温

                            }
                            //气温
                            var chartDom = document.getElementById('Air_Temperature');
                            var Air_Temperature_Chart = echarts.init(chartDom);
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
                            option && Air_Temperature_Chart.setOption(option);
                            //风向
                            var chartDom = document.getElementById('Wind_direction');
                            var Wind_direction_Chart = echarts.init(chartDom);
                            var option;
                            option = {
                                  title: {
                                    text: 'Wind_direction'
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
                                      data: xmd_Wind_direction
                                    },
                                    {
                                      name: '芝罘岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: zfd_Wind_direction
                                    },
                                    {
                                      name: '北礵岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: bsg_Wind_direction
                                    },
                                    {
                                      name: '大陈岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dcn_Wind_direction
                                    },
                                    {
                                      name: '东山岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dsn_Wind_direction
                                    }
                                  ]
                                };
                            option && Wind_direction_Chart.setOption(option);
                            //风速
                            var chartDom = document.getElementById('Wind_speed');
                            var Wind_speed_Chart = echarts.init(chartDom);
                            var option;
                            option = {
                                  title: {
                                    text: 'Wind_speed'
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
                                      data: xmd_Wind_speed
                                    },
                                    {
                                      name: '芝罘岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: zfd_Wind_speed
                                    },
                                    {
                                      name: '北礵岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: bsg_Wind_speed
                                    },
                                    {
                                      name: '大陈岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dcn_Wind_speed
                                    },
                                    {
                                      name: '东山岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dsn_Wind_speed
                                    }
                                  ]
                                };
                            option && Wind_speed_Chart.setOption(option);
                            //大气压
                            var chartDom = document.getElementById('Atmospheric_Pressure');
                            var Atmospheric_Pressure_Chart = echarts.init(chartDom);
                            var option;
                            option = {
                                  title: {
                                    text: 'Atmospheric_Pressure'
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
                                      data: xmd_Atmospheric_Pressure
                                    },
                                    {
                                      name: '芝罘岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: zfd_Atmospheric_Pressure
                                    },
                                    {
                                      name: '北礵岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: bsg_Atmospheric_Pressure
                                    },
                                    {
                                      name: '大陈岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dcn_Atmospheric_Pressure
                                    },
                                    {
                                      name: '东山岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dsn_Atmospheric_Pressure
                                    }
                                  ]
                                };
                            option && Atmospheric_Pressure_Chart.setOption(option);
                            //水温
                            var chartDom = document.getElementById('Sea_Temperature');
                            var Sea_Temperature_Chart = echarts.init(chartDom);
                            var option;
                            option = {
                                  title: {
                                    text: 'Sea_Temperature'
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
                                      data: xmd_Sea_Temperature
                                    },
                                    {
                                      name: '芝罘岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: zfd_Sea_Temperature
                                    },
                                    {
                                      name: '北礵岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: bsg_Sea_Temperature
                                    },
                                    {
                                      name: '大陈岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dcn_Sea_Temperature
                                    },
                                    {
                                      name: '东山岛',
                                      type: 'line',
                                      stack: 'Total',
                                      data: dsn_Sea_Temperature
                                    }
                                  ]
                                };
                            option && Sea_Temperature_Chart.setOption(option);
                        }
                        else{
                            console.log(response.message);
                        }
                    },
                    error: function() {

                    }
            });
    });
});