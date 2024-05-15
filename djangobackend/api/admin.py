from django.contrib import admin
from .models import Student , Department,BookSubmission,Resource
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id','stuname','email']
@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['id','name','img','contents_count']
@admin.register(BookSubmission)
class BookSubmissionAdmin(admin.ModelAdmin):
    list_display = ['id','title','department','author','edition','subject','description','img']
@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    fields = [ 'id','title','department', 'teacher', 'course', 'resource_type', 'file']