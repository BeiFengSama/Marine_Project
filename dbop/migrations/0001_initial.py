# Generated by Django 3.0 on 2023-09-01 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BeiShuang',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Station', models.CharField(max_length=10, null=True)),
                ('Year', models.CharField(max_length=4, null=True)),
                ('Month', models.CharField(max_length=2, null=True)),
                ('Day', models.CharField(max_length=2, null=True)),
                ('Hour', models.CharField(max_length=2, null=True)),
                ('Lat', models.CharField(max_length=10, null=True)),
                ('Long', models.CharField(max_length=10, null=True)),
                ('Visibility', models.CharField(max_length=10, null=True)),
                ('Air_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_direction', models.CharField(max_length=10, null=True)),
                ('Wind_speed', models.CharField(max_length=10, null=True)),
                ('Atmospheric_Pressure', models.CharField(max_length=10)),
                ('During_Past_6_hours_Precipitation', models.CharField(max_length=10, null=True)),
                ('Sea_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Height', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Period', models.CharField(max_length=10, null=True)),
                ('Surge_Height', models.CharField(max_length=10, null=True)),
                ('Surge_Period', models.CharField(max_length=10, null=True)),
                ('filename', models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='DaChen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Station', models.CharField(max_length=10, null=True)),
                ('Year', models.CharField(max_length=4, null=True)),
                ('Month', models.CharField(max_length=2, null=True)),
                ('Day', models.CharField(max_length=2, null=True)),
                ('Hour', models.CharField(max_length=2, null=True)),
                ('Lat', models.CharField(max_length=10, null=True)),
                ('Long', models.CharField(max_length=10, null=True)),
                ('Visibility', models.CharField(max_length=10, null=True)),
                ('Air_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_direction', models.CharField(max_length=10, null=True)),
                ('Wind_speed', models.CharField(max_length=10, null=True)),
                ('Atmospheric_Pressure', models.CharField(max_length=10)),
                ('During_Past_6_hours_Precipitation', models.CharField(max_length=10, null=True)),
                ('Sea_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Height', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Period', models.CharField(max_length=10, null=True)),
                ('Surge_Height', models.CharField(max_length=10, null=True)),
                ('Surge_Period', models.CharField(max_length=10, null=True)),
                ('filename', models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='DongShan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Station', models.CharField(max_length=10, null=True)),
                ('Year', models.CharField(max_length=4, null=True)),
                ('Month', models.CharField(max_length=2, null=True)),
                ('Day', models.CharField(max_length=2, null=True)),
                ('Hour', models.CharField(max_length=2, null=True)),
                ('Lat', models.CharField(max_length=10, null=True)),
                ('Long', models.CharField(max_length=10, null=True)),
                ('Visibility', models.CharField(max_length=10, null=True)),
                ('Air_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_direction', models.CharField(max_length=10, null=True)),
                ('Wind_speed', models.CharField(max_length=10, null=True)),
                ('Atmospheric_Pressure', models.CharField(max_length=10)),
                ('During_Past_6_hours_Precipitation', models.CharField(max_length=10, null=True)),
                ('Sea_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Height', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Period', models.CharField(max_length=10, null=True)),
                ('Surge_Height', models.CharField(max_length=10, null=True)),
                ('Surge_Period', models.CharField(max_length=10, null=True)),
                ('filename', models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='XiaoMaiDao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ZhiFuDao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Station', models.CharField(max_length=10, null=True)),
                ('Year', models.CharField(max_length=4, null=True)),
                ('Month', models.CharField(max_length=2, null=True)),
                ('Day', models.CharField(max_length=2, null=True)),
                ('Hour', models.CharField(max_length=2, null=True)),
                ('Lat', models.CharField(max_length=10, null=True)),
                ('Long', models.CharField(max_length=10, null=True)),
                ('Visibility', models.CharField(max_length=10, null=True)),
                ('Air_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_direction', models.CharField(max_length=10, null=True)),
                ('Wind_speed', models.CharField(max_length=10, null=True)),
                ('Atmospheric_Pressure', models.CharField(max_length=10)),
                ('During_Past_6_hours_Precipitation', models.CharField(max_length=10, null=True)),
                ('Sea_Temperature', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Height', models.CharField(max_length=10, null=True)),
                ('Wind_Wave_Period', models.CharField(max_length=10, null=True)),
                ('Surge_Height', models.CharField(max_length=10, null=True)),
                ('Surge_Period', models.CharField(max_length=10, null=True)),
                ('filename', models.CharField(max_length=20, null=True)),
            ],
        ),
    ]
