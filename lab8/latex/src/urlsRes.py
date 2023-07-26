from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'libros', views.LibroViewSet)
router.register(r'users', views.UserViewSet)  

urlpatterns=[
    path('',include(router.urls))
]