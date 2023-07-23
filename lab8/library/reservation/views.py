from django.shortcuts import render
from .models import Libro, User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import LibroSerializer, UserSerializer
# Create your views here.

class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]