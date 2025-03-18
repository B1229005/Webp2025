from rest_framework import serializers
from .models import Course_table

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course_table
        fields = ['id', 'Department', 'CourseTitle', 'Instructor']
