from django.urls import path
from api import views

urlpatterns = [
    path('student/',views.StudentList.as_view()),
    path('departments/', views.DepartmentListCreate.as_view()),
    path('book-submission/', views.BookSubmissionListCreateAPIView.as_view()),
    path('book-submission/<int:pk>/', views.BookSubmissionRetrieveUpdateDestroyAPIView.as_view()),
] 
