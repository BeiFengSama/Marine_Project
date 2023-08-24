$(document).ready(function () {

    $('#txtData').click(function(event) {
        window.location.href = 'edit/';
    });

    $('#view').click(function(event) {
        window.location.href = 'echarts/';
    });

    $('#quit').click(function(event) {
        deleteCookie("uid");
        window.location.href = 'quit/';
    });
});