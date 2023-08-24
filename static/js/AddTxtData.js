$(document).ready(function () {
    //检查cookie是否存在
    var cookie = getCookie("uid");
	if(cookie==''){
		window.location.href = 'quit';
	}

    //数据上传
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function(event) {
        var fileName = fileInput.value.split('\\').pop();
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var Data = e.target.result; // 获得txt文件内容
            var data = {
                filename:fileName,
                txt:Data
            };
            $.ajax({
                url: 'AddTxtData/',
                type: 'POST',
                data: data,
                success: function(response) {
                    if(response.status == 'failure'){
                        swal("数据上传失败!", response.message, "error");
                    }
                    else{
                        swal("数据上传成功", response.message, "success");
                    }
                },
                error: function() {
                    swal("request failed!", "ajax request failed!", "error");
                }
            });
        };
        reader.readAsText(file);
    });

    //返回主页
    $('#back_home').click(function(event) {
        window.history.back();
    });

});