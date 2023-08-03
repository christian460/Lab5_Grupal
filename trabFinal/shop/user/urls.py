from django.urls import path
from . import views

urlpatterns = [
    path('registro/',views.registro, name="registro"),
    path('logout/',views.cerrar_sesion, name="logout"),
    path('inciar_sesion/',views.inciar_sesion, name="inciar_sesion"),
]