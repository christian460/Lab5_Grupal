from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cliente', views.ClienteViewSet)
router.register(r'user', views.UserViewSet)

urlpatterns = [
    path('registro/',views.registro, name="registro"),
    path('logout/',views.cerrar_sesion, name="logout"),
    path('inciar_sesion/',views.inciar_sesion, name="inciar_sesion"),
    path('', include(router.urls)),
]