$(document).ready(function () {
    var option = document.getElementById("station_select");
    option.addEventListener('change', function(event) {
        var selectedValue = event.target.value;
        var station = 'xmd';
        if(selectedValue == 'xmd'){console.log(selectedValue);station = 'xmd';}
        else if(selectedValue == 'zfd'){console.log(selectedValue);station = 'zfd';}
        else if(selectedValue == 'bsg'){console.log(selectedValue);station = 'bsg';}
        else if(selectedValue == 'dcn'){console.log(selectedValue);station = 'dcn';}
        else if(selectedValue == 'zlg'){console.log(selectedValue);station = 'zlg';}
        else{station = 'xmd';}
        var data = {
            station:station
        };
        $.ajax({
                    url: 'station/',
                    type: 'POST',
                    data: data,
                    success: function(response) {
                        if(response.status == 'success'){
                            console.log(response.data);
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