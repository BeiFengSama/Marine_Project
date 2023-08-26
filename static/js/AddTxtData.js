var loading = document.getElementById('loading');
loading.style.visibility = 'hidden';
$(document).ready(function () {
    //数据上传
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function(event) {
        loading.style.visibility = 'visible';
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
                        loading.style.visibility = 'hidden';
                    }
                    else{
                        swal("数据上传成功", response.message, "success");
                        loading.style.visibility = 'hidden';
                    }
                },
                error: function() {
                    swal("request failed!", "ajax request failed!", "error");
                    loading.style.visibility = 'hidden';
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