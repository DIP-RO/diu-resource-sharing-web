from rest_framework import serializers
from .models import Student,Department,BookSubmission
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id','stuname','email']
#feature department
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id','name','img','contents_count']
#book post submission form
class BookSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookSubmission
        fields = ['id','title','department','author','edition','subject','description','img']