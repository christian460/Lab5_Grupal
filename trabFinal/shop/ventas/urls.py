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
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]