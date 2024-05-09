from django.shortcuts import render
from .serializers import StudentSerializer , DepartmentSerializer,BookSubmissionSerializer
from rest_framework.generics import ListAPIView ,ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .models import Student,Department,BookSubmission
# Create your views here.
class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
#feature department
class DepartmentListCreate(ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

#book post,get submission form
"""class BookSubmissionCreateAPIView(CreateAPIView):
    queryset = BookSubmission.objects.all()
    serializer_class = BookSubmissionSerializer
class BookSubmissionListAPIView(ListAPIView):
    queryset = BookSubmission.objects.all()
    serializer_class = BookSubmissionSerializer"""
class BookSubmissionListCreateAPIView(ListCreateAPIView):
    queryset = BookSubmission.objects.all()
    serializer_class = BookSubmissionSerializer
# Retrieve, Update, and Destroy Book Submissions
class BookSubmissionRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = BookSubmission.objects.all()
    serializer_class = BookSubmissionSerializer