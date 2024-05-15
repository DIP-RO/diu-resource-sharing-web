from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
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
#login
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
#pdf
class Resource(models.Model):
    title = models.CharField(max_length=100)
    department = models.CharField(max_length=100,default='Default Department')
    teacher = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    resource_type = models.CharField(max_length=100)
    file = models.FileField(upload_to='pdfs/')