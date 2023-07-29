from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField()
    numero = forms.CharField(max_length=15)
    dni = forms.CharField(max_length=15)
    direccion = forms.CharField(max_length=100)

    class Meta:
        model = User
        fields = ['username', 'email', 'numero', 'dni', 'direccion', 'password1', 'password2']
