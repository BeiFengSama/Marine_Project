$(document).ready(function () {


    $('#quit').click(function(event) {
        deleteCookie("uid");
        window.location.href = 'quit/';
    });
});