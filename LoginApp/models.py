from django.db import models


# Create your models here.
class UserInfo(models.Model):
    Id = models.AutoField(primary_key=True)
    UserNickName = models.CharField(max_length=20)
    UserName = models.CharField(max_length=20)
    UserPassword = models.CharField(max_length=100)
