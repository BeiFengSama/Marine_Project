$(document).ready(function () {
    var uid = getCookie("uid");
    if(uid != ''){
        window.location.href = 'home/';
    }
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    $('#login').click(function(event) {
        event.preventDefault(); // 阻止按钮的默认提交行为

        // 获取输入框的值
        var username = $('input[name="LoginUserName"]').val();
        var password = $('input[name="LoginPassword"]').val();

        // 创建一个对象，包含要发送的数据
        var data = {
            LoginUserName: username,
            LoginPassword: password
        };

        // 发送Ajax请求
        $.ajax({
            url: 'login/',
            type: 'POST',
            data: data,
            success: function(response) {
                if(response.status == 'success'){
                    swal("Welcome Back!", "welcome visit our website", "success").then(() => {window.location.href = 'home/';});
                    setCookie("uid", response.user_id, 7);
                }
                if(response.status == 'failure'){
                    swal("Account Failed!", "Your account did not match!", "error");
                }
            },
            error: function() {
                swal("request failed!", "ajax request failed!", "error");
            }
        });
    });

    $('#register').click(function(event) {
        event.preventDefault(); // 阻止按钮的默认提交行为

        // 获取输入框的值
        var usernickname = $('input[name="RegisterNickName"]').val();
        var username = $('input[name="RegisterUserName"]').val();
        var password = $('input[name="RegisterPassword"]').val();
        //判断用户名或密码是否为空
        if(username.length == 0 || password.length == 0){
            swal("Sign Up Failed!", "用户名或密码不能为空", "error")
        }
        else{
            console.log("nickname="+usernickname);
            console.log("username="+username);
            console.log("password="+password);
            // 创建一个对象，包含要发送的数据
            var data = {
                RegisterNickName: usernickname,
                RegisterUserName: username,
                RegisterPassword: password

            };

            // 发送Ajax请求
            $.ajax({
                url: 'register/',
                type: 'POST',
                data: data,
                success: function(response) {
                    if(response.status == 'success'){
                        swal("Sign Up Successfully!", "try to visit our website", "success").then(() => {window.location.href = '';});
                    }
                    if(response.status == 'failure'){
                        swal("Sign Up Failed!", response.message, "error");
                    }
                },
                error: function() {
                    swal("request failed!", "ajax request failed!", "error");
                }
            });
        }

    });


});
