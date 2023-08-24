from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.login_view, name="login"),
    path('login/', views.login),
    path('register/', views.register),
    path('home/', include('dbop.urls')),
]
