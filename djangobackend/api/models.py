from django.db import models

# Create your models here.
class Student(models.Model):
    stuname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
#feature department
class Department(models.Model):
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='images/', null=True, blank=True)
    contents_count = models.IntegerField(default=0)
#book post submission form
class BookSubmission(models.Model):
    title = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    edition = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    description = models.TextField()
    img = models.ImageField(upload_to='images/', null=True, blank=True)