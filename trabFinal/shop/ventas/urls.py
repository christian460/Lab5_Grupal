from . import views
from django.urls import include, path
from django.contrib import admin
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'producto', views.ProductoViewSet)

urlpatterns = [
    path('agregar',views.agregar, name="agregar"),
    path('modificar/<int:pro_id>/',views.modificar, name="modificar"),
    path('listar',views.lista, name="lista"),
    path('eliminar/<int:pro_id>/',views.eliminar, name="eliminar"),
    path('', include(router.urls)),
]