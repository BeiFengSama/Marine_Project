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
                            console.log(response.data);
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
                            console.log(response.data);
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
                            console.log(response.data);
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
        console.log(data)
        $.ajax({
                    url: 'get_date_data/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            for(var da=0;da<response.data.length;da++){
                                console.log(response.data[da]['Day']);
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