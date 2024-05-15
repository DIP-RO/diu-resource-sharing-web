from rest_framework import serializers
from .models import Student,Department,BookSubmission ,User,Resource
from rest_framework.decorators import api_view
from rest_framework.response import Response
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
#login
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']  # Include the password field
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], password=validated_data['password'])
        return user


# views.py
@api_view(['POST'])
def login(request):
    email = request.data.get('email')  # Use 'email' instead of 'username'
    password = request.data.get('password')
    user = User.objects.filter(email=email).first()
    if user is None or not user.check_password(password):
        return Response({'error': 'Invalid email/password'}, status=status.HTTP_400_BAD_REQUEST)
    # You may implement token-based authentication here
    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#resource pdf
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ['id','title','department', 'teacher', 'course', 'resource_type', 'file']
