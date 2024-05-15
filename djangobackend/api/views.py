
from .serializers import StudentSerializer ,ResourceSerializer, DepartmentSerializer,BookSubmissionSerializer,UserSerializer
from rest_framework.generics import ListAPIView ,ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .models import Student,Department,BookSubmission,Resource
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
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

#login
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = User.objects.filter(username=username).first()
    if user is None or not user.check_password(password):
        return Response({'error': 'Invalid username/password'}, status=status.HTTP_400_BAD_REQUEST)
    # You may implement token-based authentication here
    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#resourse pdf
class ResourceListCreateAPIView(ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class ResourceRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer