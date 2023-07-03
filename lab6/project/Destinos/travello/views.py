from django.shortcuts import render, redirect
from .forms import DestinationForm
from django.shortcuts import render, get_object_or_404
from .models import Destination
# Create your views here.

def index(request):
    dests = Destination.objects.all()
    return render(request,'index.html',{'dests': dests})

def agregar(request):
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
            redirect('/')
            return redirect('/')
            # Redirigir o realizar otras acciones después de la edición exitosa
    else:
        form = DestinationForm(instance=dest)

    return render(request, 'modificacion.html', {'form': form, 'dest': dest})