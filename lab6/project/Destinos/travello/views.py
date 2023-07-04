from django.shortcuts import render, redirect
from .forms import DestinationForm
from django.shortcuts import render, get_object_or_404
from .models import Destination
# Create your views here.

def index(request):
    dests = Destination.objects.all()
    return render(request,'index.html',{'dests': dests})

def agregar(request):
    if request.method == 'POST':
        destino = Destination()
        destino.name=request.POST['ciudad']
        destino.img=request.FILES.get('imagen')
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

def list(request):
    dests = Destination.objects.all()
    return render(request, 'list.html', {'dests': dests})

def modifications(request, dest_id):
    dest = get_object_or_404(Destination, pk=dest_id)

    if request.method == 'POST':
        form = DestinationForm(request.POST, request.FILES, instance=dest)
        if form.is_valid():
            form.save()
            return redirect('/')
            # Redirigir o realizar otras acciones después de la edición exitosa
    else:
        form = DestinationForm(instance=dest)

    return render(request, 'modificacion.html', {'form': form, 'dest': dest})

def eliminar(request, dest_id):
    dest = get_object_or_404(Destination, pk=dest_id)
    dest.delete()
    return redirect('/')
