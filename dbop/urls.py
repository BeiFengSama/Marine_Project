from django.urls import path, include, re_path
from . import views
from django.views import static
from django.conf import settings
from django.urls import re_path as url

app_name = 'home'
urlpatterns = [
    path('', views.home_view, name='main'),
    path('edit/', views.edit_view, name='edit'),
    path('echarts/', views.echarts_view, name='echarts'),
    path('edit/AddTxtData/', views.txt_data),
    path('echarts/station/', views.select_station),
    path('echarts/year/', views.select_year),
    path('echarts/month/', views.select_month),
    path('echarts/get_date_data/', views.get_date_data),
    re_path('quit/', views.quit_view),
    # 以下是新增
    url(r'^static/(?P<path>.*)$', static.serve,
        {'document_root': settings.STATIC_ROOT}, name='static'),
]
