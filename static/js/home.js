$(document).ready(function () {
    var uid = getCookie("uid");
    if(uid == ''){
        window.location.href = 'quit/';
    }

    $('#quit').click(function(event) {
        document.cookie = 'uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        swal("退出成功！","欢迎下次使用","success").then(() => {window.location.href = 'quit/';});
    });
});