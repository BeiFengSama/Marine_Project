$(document).ready(function () {
    var option = document.getElementById("select");
    option.addEventListener('change', function(event) {
        var selectedValue = event.target.value;
        console.log(selectedValue);
        var station = '';
        if(selectedValue == 'xmd'){station = 'xmd';}
        else if(selectedValue == 'zfd'){station = 'zfd';}
        else if(selectedValue == 'bsg'){station = 'bsg';}
        else if(selectedValue == 'dcn'){station = 'dcn';}
        else if(selectedValue == 'zlg'){station = 'zlg';}
        else{station = 'xmd';}
        var data = {
        station:station,
        month:'03',
        day:'01'
        };
        var date=[];
        for(var i = 0;i<24;i++){
            date.push(i);
        }
        var atm = [];
        $.ajax({
                    url: 'test/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            for(var i=0;i<response.data.length;i++){
                              atm.push(response.data[i])
                            }
                            // 基于准备好的dom，初始化echarts实例
                            var myChart = echarts.init(document.getElementById('main'));

                            // 指定图表的配置项和数据
                            var option = {
                              xAxis: {
                                type: 'category',
                                data: date
                              },
                              yAxis: {
                                type: 'value'
                              },
                              series: [
                                {
                                  data: atm,
                                  type: 'line'
                                }
                              ]
                            };
                            // 使用刚指定的配置项和数据显示图表。
                            myChart.setOption(option);
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