from django.shortcuts import render, redirect
from .models import Destination
# Create your views here.

def index(request):
    dests = Destination.objects.all()
    return render(request,'index.html',{'dests': dests})

def agregar(request):
    if request.method == 'POST' and request.FILES['imagen']:
        destino = Destination()
        destino.name=request.POST['ciudad']
        destino.img = request.FILES['imagen']
        destino.desc=request.POST['desc']
        if 'offer' in request.POST:
            if request.POST['offer'] == 'on':
                destino.offer = True
        else:
            destino.offer = False
        destino.price=request.POST['price']
        destino.save()
        return redirect('/')
    else:
        return render(request,'add.html')
    
def eliminar(request):
    return render (request, 'eliminar.html')