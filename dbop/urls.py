from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home_view),
    path('edit/', views.edit_view),
    path('echarts/', views.echarts_view),
    path('edit/AddTxtData/', views.txt_data),
    path('quit/', views.quit_view),
    path('echarts/test/', views.test),
]
