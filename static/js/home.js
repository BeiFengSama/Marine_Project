$(document).ready(function () {
    var uid = getCookie("uid");
    if(uid == ''){
        window.location.href = 'quit/';
    }

    $('#quit').click(function(event) {
        deleteCookie("uid");
        swal("退出成功！","欢迎下次使用","success").then(() => {window.location.href = 'quit/';});
    });
});