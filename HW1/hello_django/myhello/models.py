

from django.db import models

'''class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    photo = models.URLField(blank=True)
    location = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
'''
'''from django.db import models

class Course_table(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.name
'''
from django.db import models

class Course_table(models.Model):
    department = models.CharField(max_length=100)
    course_title = models.CharField(max_length=200)
    instructor = models.CharField(max_length=100)

    def __str__(self):
        return self.course_title
