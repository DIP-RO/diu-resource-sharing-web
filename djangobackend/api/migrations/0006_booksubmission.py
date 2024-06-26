# Generated by Django 5.0.1 on 2024-05-08 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_department_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('edition', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('img', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
    ]
