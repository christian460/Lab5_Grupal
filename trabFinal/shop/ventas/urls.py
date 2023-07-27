from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name="index"),
    path('agregar',views.agregar, name="agregar"),
    path('modificar/<int:pro_id>/',views.modificar, name="modificar"),
    path('listar',views.lista, name="lista"),
    path('eliminar/<int:pro_id>/',views.eliminar, name="eliminar"),

]