from django.http import HttpResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import UserInfo
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse


# Create your views here.
def login_view(request):
    return render(request, 'login.html', {})


@csrf_exempt
def login(request):
    if request.method == 'POST':
        name = request.POST.get('LoginUserName')
        pwd = request.POST.get('LoginPassword')
        c = UserInfo.objects.filter(UserName=name).count()
        if c == 1:
            user = UserInfo.objects.get(UserName=name)
            is_matching = check_password(pwd, user.UserPassword)
            if is_matching:
                return JsonResponse({'status': 'success', 'user_id': user.Id})
    return JsonResponse({'status': 'failure', 'message': '用户名或密码错误'})


@csrf_exempt
def register(request):
    if request.method == 'POST':
        nickname = request.POST.get('RegisterNickName')
        username = request.POST.get('RegisterUserName')
        pwd = request.POST.get('RegisterPassword')
        c = UserInfo.objects.filter(UserName=username).count()
        if c >= 1:
            return JsonResponse({'status': 'failure', 'message': '用户名已被占用'})
        elif username is null or pwd is null:
            return JsonResponse({'status': 'failure', 'message': '用户名或密码不能为空'})
        else:
            re_pwd = make_password(pwd)
            user = UserInfo(UserNickName=nickname, UserName=username, UserPassword=re_pwd)
            user.save()
            return JsonResponse({'status': 'success', 'message': '注册成功'})
    return JsonResponse({'status': 'failure', 'message': '注册失败'})

