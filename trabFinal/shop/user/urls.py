from django.urls import path
from . import views

urlpatterns = [
    path('registro/',views.registro, name="registro"),
    path('logout/',views.cerrar_sesion, name="logout"),
    path('signin/',views.inciar_sesion, name="signin"),
]