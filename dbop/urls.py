from django.urls import path, include
from . import views
from django.views import static
from django.conf import settings
from django.urls import re_path as url


urlpatterns = [
    path('', views.home_view),
    path('edit/', views.edit_view),
    path('echarts/', views.echarts_view),
    path('edit/AddTxtData/', views.txt_data),
    path('quit/', views.quit_view),
    path('echarts/test/', views.test),
    # 以下是新增
    url(r'^static/(?P<path>.*)$', static.serve,
        {'document_root': settings.STATIC_ROOT}, name='static'),
]
