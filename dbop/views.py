import json
from django.shortcuts import render
from django.shortcuts import redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseRedirect
from numpy import double

from .models import XiaoMaiDao
from .models import ZhiFuDao
from .models import BeiShuang
from .models import DaChen
from .models import DongShan


@csrf_exempt
def test_view(request):
    return render(request, 'test.html', {})


# Create your views here.
@csrf_exempt
def home_view(request):
    return render(request, 'home.html', {})


@csrf_exempt
def quit_view(request):
    url = reverse('log:log')
    return HttpResponseRedirect(url)


@csrf_exempt
def edit_view(request):
    return render(request, 'edit.html', {})


@csrf_exempt
def echarts_view(request):
    return render(request, 'echarts.html', {})


@csrf_exempt
def get_date_data(request):
    if request.method == 'POST':
        station = request.POST.get('station')
        year = request.POST.get('year')
        month = request.POST.get('month')
        date = request.POST.get('date')
        if len(month) < 2:
            month = '0' + month
        if len(date) < 2:
            date = '0' + date
        print(station + year + month + date)
        xmd_data = list(XiaoMaiDao.objects.filter(Year=year, Month=month, Day=date).values())
        zfd_data = list(ZhiFuDao.objects.filter(Year=year, Month=month, Day=date).values())
        bsg_data = list(BeiShuang.objects.filter(Year=year, Month=month, Day=date).values())
        dcn_data = list(DaChen.objects.filter(Year=year, Month=month, Day=date).values())
        dsn_data = list(DongShan.objects.filter(Year=year, Month=month, Day=date).values())
        data = {
            'xmd': xmd_data,
            'zfd': zfd_data,
            'bsg': bsg_data,
            'dcn': dcn_data,
            'dsn': dsn_data
        }
        return JsonResponse({'status': 'success', 'data': data})
    return JsonResponse({'status': 'false', 'message': '数据获取失败'})


@csrf_exempt
def select_month(request):
    if request.method == 'POST':
        station = request.POST.get('station')
        year = request.POST.get('year')
        month = request.POST.get('month')
        if len(month) < 2:
            month = '0' + month
        date = []
        if station == 'xmd':
            data = list(XiaoMaiDao.objects.filter(Year=year, Month=month).values('Day').distinct())
        elif station == 'zfd':
            data = list(ZhiFuDao.objects.filter(Year=year, Month=month).values('Day').distinct())
        elif station == 'bsg':
            data = list(BeiShuang.objects.filter(Year=year, Month=month).values('Day').distinct())
        elif station == 'dcn':
            data = list(DaChen.objects.filter(Year=year, Month=month).values('Day').distinct())
        elif station == 'dsn':
            data = list(DongShan.objects.filter(Year=year, Month=month).values('Day').distinct())
        else:
            data = []
        for i in data:
            date.append(float(i['Day']))
        new_date = sorted(date)
        return JsonResponse({'status': 'success', 'data': new_date})
    return JsonResponse({'status': 'false', 'message': '数据获取失败'})


@csrf_exempt
def select_year(request):
    if request.method == 'POST':
        station = request.POST.get('station')
        year = request.POST.get('year')
        month = []
        if station == 'xmd':
            data = list(XiaoMaiDao.objects.filter(Year=year).values('Month').distinct())
        elif station == 'zfd':
            data = list(ZhiFuDao.objects.filter(Year=year).values('Month').distinct())
        elif station == 'bsg':
            data = list(BeiShuang.objects.filter(Year=year).values('Month').distinct())
        elif station == 'dcn':
            data = list(DaChen.objects.filter(Year=year).values('Month').distinct())
        elif station == 'dsn':
            data = list(DongShan.objects.filter(Year=year).values('Month').distinct())
        else:
            data = []
        for i in data:
            month.append(float(i['Month']))
        new_month = sorted(month)
        return JsonResponse({'status': 'success', 'data': new_month})
    return JsonResponse({'status': 'false', 'message': '数据获取失败'})


@csrf_exempt
def select_station(request):
    if request.method == 'POST':
        station = request.POST.get('station')
        year = []
        if station == 'xmd':
            data = list(XiaoMaiDao.objects.values('Year').distinct())
        elif station == 'zfd':
            data = list(ZhiFuDao.objects.values('Year').distinct())
        elif station == 'bsg':
            data = list(BeiShuang.objects.values('Year').distinct())
        elif station == 'dcn':
            data = list(DaChen.objects.values('Year').distinct())
        elif station == 'dsn':
            data = list(DongShan.objects.values('Year').distinct())
        else:
            data = []
        for i in data:
            year.append(float(i['Year']))
        new_year = sorted(year)
        return JsonResponse({'status': 'success', 'data': new_year})
    return JsonResponse({'status': 'false', 'message': '数据获取失败'})


@csrf_exempt
def txt_data(request):
    if request.method == 'POST':
        filename = request.POST.get('filename')
        txtdata = request.POST.get('txt')
        lines = txtdata.split('\n')
        year_num = '20'
        month_num = ''
        name = ''
        ret_name = ''
        for i in filename:
            if 'A' <= i <= 'Z':
                name += i
            elif '0' <= i <= '9':
                if len(year_num) < 4:
                    year_num += i
                else:
                    month_num += i
            elif i == '.':
                break
        if name == 'XMD':
            ret_name = '小麦岛'
            c = XiaoMaiDao.objects.filter(filename=filename).count()
            if c >= 1:
                return JsonResponse({'status': 'failure', 'message': '小麦岛数据重复上传'})
        elif name == 'ZFD':
            ret_name = '芝罘岛'
            c = ZhiFuDao.objects.filter(filename=filename).count()
            if c >= 1:
                return JsonResponse({'status': 'failure', 'message': '芝罘岛数据重复上传'})
        elif name == 'BSG':
            ret_name = '北礵岛'
            c = BeiShuang.objects.filter(filename=filename).count()
            if c >= 1:
                return JsonResponse({'status': 'failure', 'message': '北礵岛数据重复上传'})
        elif name == 'DCN':
            ret_name = '大陈岛'
            c = DaChen.objects.filter(filename=filename).count()
            if c >= 1:
                return JsonResponse({'status': 'failure', 'message': '大陈岛数据重复上传'})
        elif name == 'DSN':
            ret_name = '东山岛'
            c = DongShan.objects.filter(filename=filename).count()
            if c >= 1:
                return JsonResponse({'status': 'failure', 'message': '东山岛数据重复上传'})
        else:
            return JsonResponse({'status': 'failure', 'message': '文件格式错误'})
        for line in lines:
            if line == '':
                break
            station = ''
            Date = ''
            Time = ''
            Lat = ''
            Long = ''
            Visibility = ''
            Air_temperature = ''
            Wind_direction = ''
            Wind_speed = ''
            Air_pressure = ''
            During_Past_6_hours_Precipitation = ''
            Sea_temperature = ''
            Wind_Wave_Height = ''
            Wind_Wave_Period = ''
            Surge_Height = ''
            Surge_Period = ''
            for i in range(107):
                if 0 <= i < 15:
                    if line[i] == ' ':
                        continue
                    else:
                        station += line[i]
                elif 15 <= i < 19:
                    if line[i] == ' ':
                        continue
                    else:
                        Date += line[i]
                elif 19 <= i < 23:
                    if line[i] == ' ':
                        continue
                    else:
                        Time += line[i]
                elif 23 <= i < 29:
                    if line[i] == ' ':
                        continue
                    else:
                        Lat += line[i]
                elif 29 <= i < 36:
                    if line[i] == ' ':
                        continue
                    else:
                        Long += line[i]
                elif 36 <= i < 43:
                    if line[i] == ' ':
                        continue
                    else:
                        Visibility += line[i]
                elif 43 <= i < 50:
                    if line[i] == ' ':
                        continue
                    else:
                        Air_temperature += line[i]
                elif 50 <= i < 57:
                    if line[i] == ' ':
                        continue
                    else:
                        Wind_direction += line[i]
                elif 57 <= i < 64:
                    if line[i] == ' ':
                        continue
                    else:
                        Wind_speed += line[i]
                elif 64 <= i < 71:
                    if line[i] == ' ':
                        continue
                    else:
                        Air_pressure += line[i]
                elif 71 <= i < 77:
                    if line[i] == ' ':
                        continue
                    else:
                        During_Past_6_hours_Precipitation += line[i]
                elif 77 <= i < 83:
                    if line[i] == ' ':
                        continue
                    else:
                        Sea_temperature += line[i]
                elif 83 <= i < 89:
                    if line[i] == ' ':
                        continue
                    else:
                        Wind_Wave_Height += line[i]
                elif 89 <= i < 95:
                    if line[i] == ' ':
                        continue
                    else:
                        Wind_Wave_Period += line[i]
                elif 95 <= i < 101:
                    if line[i] == ' ':
                        continue
                    else:
                        Surge_Height += line[i]
                elif 101 <= i < 107:
                    if line[i] == ' ':
                        continue
                    else:
                        Surge_Period += line[i]
                else:
                    break
            if name == 'XMD':
                datainfo = XiaoMaiDao(Station=station, Year=year_num, Month=month_num, Day=Date, Hour=Time, Lat=Lat,
                                      Long=Long,
                                      Visibility=Visibility, Air_Temperature=Air_temperature,
                                      Wind_direction=Wind_direction, Wind_speed=Wind_speed,
                                      Atmospheric_Pressure=Air_pressure,
                                      During_Past_6_hours_Precipitation=During_Past_6_hours_Precipitation,
                                      Sea_Temperature=Sea_temperature, Wind_Wave_Height=Wind_Wave_Height,
                                      Wind_Wave_Period=Wind_Wave_Period, Surge_Height=Surge_Height,
                                      Surge_Period=Surge_Period, filename=filename)
                datainfo.save()
            elif name == 'ZFD':
                datainfo = ZhiFuDao(Station=station, Year=year_num, Month=month_num, Day=Date, Hour=Time, Lat=Lat,
                                    Long=Long,
                                    Visibility=Visibility, Air_Temperature=Air_temperature,
                                    Wind_direction=Wind_direction,
                                    Wind_speed=Wind_speed, Atmospheric_Pressure=Air_pressure,
                                    During_Past_6_hours_Precipitation=During_Past_6_hours_Precipitation,
                                    Sea_Temperature=Sea_temperature, Wind_Wave_Height=Wind_Wave_Height,
                                    Wind_Wave_Period=Wind_Wave_Period, Surge_Height=Surge_Height,
                                    Surge_Period=Surge_Period, filename=filename)
                datainfo.save()
            elif name == 'BSG':
                datainfo = BeiShuang(Station=station, Year=year_num, Month=month_num, Day=Date, Hour=Time, Lat=Lat,
                                     Long=Long,
                                     Visibility=Visibility, Air_Temperature=Air_temperature,
                                     Wind_direction=Wind_direction, Wind_speed=Wind_speed,
                                     Atmospheric_Pressure=Air_pressure,
                                     During_Past_6_hours_Precipitation=During_Past_6_hours_Precipitation,
                                     Sea_Temperature=Sea_temperature, Wind_Wave_Height=Wind_Wave_Height,
                                     Wind_Wave_Period=Wind_Wave_Period, Surge_Height=Surge_Height,
                                     Surge_Period=Surge_Period, filename=filename)
                datainfo.save()
            elif name == 'DCN':
                datainfo = DaChen(Station=station, Year=year_num, Month=month_num, Day=Date, Hour=Time, Lat=Lat,
                                  Long=Long,
                                  Visibility=Visibility, Air_Temperature=Air_temperature, Wind_direction=Wind_direction,
                                  Wind_speed=Wind_speed, Atmospheric_Pressure=Air_pressure,
                                  During_Past_6_hours_Precipitation=During_Past_6_hours_Precipitation,
                                  Sea_Temperature=Sea_temperature, Wind_Wave_Height=Wind_Wave_Height,
                                  Wind_Wave_Period=Wind_Wave_Period, Surge_Height=Surge_Height,
                                  Surge_Period=Surge_Period, filename=filename)
                datainfo.save()
            else:
                datainfo = DongShan(Station=station, Year=year_num, Month=month_num, Day=Date, Hour=Time, Lat=Lat,
                                    Long=Long,
                                    Visibility=Visibility, Air_Temperature=Air_temperature,
                                    Wind_direction=Wind_direction,
                                    Wind_speed=Wind_speed, Atmospheric_Pressure=Air_pressure,
                                    During_Past_6_hours_Precipitation=During_Past_6_hours_Precipitation,
                                    Sea_Temperature=Sea_temperature, Wind_Wave_Height=Wind_Wave_Height,
                                    Wind_Wave_Period=Wind_Wave_Period, Surge_Height=Surge_Height,
                                    Surge_Period=Surge_Period, filename=filename)
                datainfo.save()
        return JsonResponse({'status': 'success', 'message': ret_name + '数据成功上传至数据库'})
    return JsonResponse({'status': 'failure', 'message': '数据上传失败'})
