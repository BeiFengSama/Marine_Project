from django.contrib import admin
from django.urls import path, include
from . import views
from django.views import static
from django.conf import settings
from django.urls import re_path as url

app_name = 'log'
urlpatterns = [
    path('', views.login_view, name="log"),
    path('login/', views.login),
    path('register/', views.register),
    path('home/', include('dbop.urls')),
    # 以下是新增
    url(r'^static/(?P<path>.*)$', static.serve,
        {'document_root': settings.STATIC_ROOT}, name='static'),
]
