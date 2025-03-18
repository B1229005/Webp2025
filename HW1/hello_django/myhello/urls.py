'''from django.urls import path
from . import views

urlpatterns = [
    path('add',views.add_post, name='add_post'),
    path('list',views.list_post,name='list_post')
]'''
from django.contrib import admin
from django.urls import path
from . import views 

urlpatterns = [
    path("admin/", admin.site.urls),
    path("courselist/", views.courselist, name="courselist"), 
    path('addcourse/', views.addcourse, name='addcourse'),
]
