from django.shortcuts import render, redirect

# Formulario para crear usuario
from django.contrib.auth.forms import UserCreationForm

# Formulario para comprobar si un usuario existe, inciar sesion
from django.contrib.auth.forms import AuthenticationForm

from django.contrib.auth.models import User
from django.db import IntegrityError

# Crear usuario
from django.contrib.auth import login

# Salir de sesion
from django.contrib.auth import logout

# Autenticar usuario
from django.contrib.auth import authenticate


# Create your views here.

def registro(request):
    if request.method == 'GET':
        return render(request, 'signup.html', {"form": UserCreationForm})

    else:
        if request.POST["password1"] == request.POST["password2"]:
            try:
                user = User.objects.create_superuser(
                    request.POST["username"], password=request.POST["password1"])
                user.save()
                # Cokiee del usuario que incia con la creacion de cuenta
                login(request, user)
                return redirect('lista')
            # El error de IntegrityError => error especifico cuando se quiere crear un superuser que ya existe
            except IntegrityError:
                return render(request, 'signup.html', {"form": UserCreationForm, "error": "Username already exists."})

        return render(request, 'signup.html', {"form": UserCreationForm, "error": "Passwords did not match."})


def cerrar_sesion(request):
    logout(request)
    return redirect('index')


def inciar_sesion(request):
    if request.method == 'GET':
        return render(request, 'signup.html', {"form": UserCreationForm})

    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])

        if user is None:
            return render(request, 'signup.html', {
                "form": UserCreationForm
                'error': 'Nombre de usuario o contraseña no valida'
                })