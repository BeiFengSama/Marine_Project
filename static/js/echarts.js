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
        var Air_Temperature = []
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
                            for(var day=1;day<=response.data.length;day++){
                                date.push(day);
                                Air_Temperature.push(response.data[day-1].Air_Temperature)
                                Wind_direction.push(response.data[day-1].Wind_direction)
                                Wind_speed.push(response.data[day-1].Wind_speed)
                                Atmospheric_Pressure.push(response.data[day-1].Atmospheric_Pressure)
                                Sea_Temperature.push(response.data[day-1].Sea_Temperature)
                                Wind_Wave_Height.push(response.data[day-1].Wind_Wave_Height)
                                Wind_Wave_Period.push(response.data[day-1].Wind_Wave_Period)
                                var chartDom = document.getElementById('main');
                                var myChart = echarts.init(chartDom);
                                var option;
                                option = {
                                  title: {
                                    text: selectedStation
                                  },
                                  tooltip: {
                                    trigger: 'axis'
                                  },
                                  legend: {
                                    data: ['Air_Temperature', 'Wind_direction', 'Wind_speed', 'Atmospheric_Pressure', 'Sea_Temperature', 'Wind_Wave_Height', 'Wind_Wave_Period']
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
                                      name: 'Air_Temperature',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Air_Temperature
                                    },
                                    {
                                      name: 'Wind_direction',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Wind_direction
                                    },
                                    {
                                      name: 'Wind_speed',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Wind_speed
                                    },
                                    {
                                      name: 'Atmospheric_Pressure',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Atmospheric_Pressure
                                    },
                                    {
                                      name: 'Sea_Temperature',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Sea_Temperature
                                    },
                                    {
                                      name: 'Wind_Wave_Height',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Wind_Wave_Height
                                    },
                                    {
                                      name: 'Wind_Wave_Period',
                                      type: 'line',
                                      stack: 'Total',
                                      data: Wind_Wave_Period
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