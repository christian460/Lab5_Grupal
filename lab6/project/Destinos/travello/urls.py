from django.urls import path
from .import views

urlpatterns = [
    path('',views.index,name="index"),
    path('agregar',views.agregar,name="agregar"),
    path('list', views.list, name="list"),
    path('destination/edit/<int:dest_id>/', views.modifications,name="modificaciones"),
]