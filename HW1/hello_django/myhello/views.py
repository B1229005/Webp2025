'''from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name' , None)
        if my_name:
            retValue = {}
            retValue['data'] = "Hello"+my_name
            return Response(retValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res":"parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )

# Create your views here.
def myIndex(request):
    my_name = request.POST.get('name',"CGU")
    return HttpResponse("Hello " + my_name)
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post

logger = logging.getLogger('django')

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title','')
    content = request.GET.get('content','')
    photo = request.GET.get('photo','')
    location = request.GET.get('location','')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug(" ************** myhello_api: "+title)
    if title:
        return Response({"data":title+" insert!"},status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)
    #return Response({"data":
    #               json.dumps(
    #                   list(posts),
    #                   sort_keys = True,
    #                   indent = 1,
    #                   cls = DjangoJSONEncoder)},
    #               status=status.HTTP_200_OK)
'''
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Course_table
from .serializers import CourseSerializer
from django.http import JsonResponse

class CourseListView(generics.ListAPIView):
    queryset = Course_table.objects.all()
    serializer_class = CourseSerializer


@api_view(['GET'])
def courselist(request):
    courses = Course_table.objects.all()
    course_list = [{"department": course.department, "course_title": course.course_title, "instructor": course.instructor} for course in courses]
    return JsonResponse({"courses": course_list})


from django.http import JsonResponse
from .models import Course_table

def addcourse(request):
    if request.method == "GET":
        department = request.GET.get('department')
        course_title = request.GET.get('course_title')
        instructor = request.GET.get('instructor')

        if not department or not course_title or not instructor:
            return JsonResponse({"message": "Missing data!"}, status=400)

        course = Course_table(department=department, course_title=course_title, instructor=instructor)
        course.save()

        return JsonResponse({"message": "Course added successfully!"})

    return JsonResponse({"message": "Invalid request method!"}, status=400)
