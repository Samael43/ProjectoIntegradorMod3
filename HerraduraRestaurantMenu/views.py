from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Pizza, Lasagna
from .forms import NewUserForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# Create your views here.

def index(request):
    dic1 = {'active_link': 'index'}
    return render(request, 'index.html', dic1)

def pizza(request):
    pizzas = Pizza.objects.all()
    dic2 = {'pizzas': pizzas, 'active_link': 'pizza'}
    print(pizzas)
    return render(request, 'pizza.html', dic2)

def lasagna(request):
    lasagnas = Lasagna.objects.all()
    dic3 = {'lasagnas': lasagnas, 'active_link': 'lasagna'}
    print(lasagnas)
    return render(request, 'lasagna.html', dic3)

def order(request):
    return render(request, 'order.html')

def success(request):
    #order = request.session['order']
    dic4 = {'order': order}
    return render(request, 'success.html', dic4)

def signup(request):
    dic5 = {}
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'index.html')
        else:
            dic5['form'] = form
            return render(request, 'index.html')
    else:
        form = NewUserForm()
        dic5['form'] = form
        return render (request, 'signup.html', dic5)
    

def logIn (request):
    if request.method == 'POST':
        username = request.POST.get('username')
        pwd = request.POST.get('password')
        user = authenticate(request, username=username, password=pwd)
        if user is not None:
            login(request,user)
            return redirect('index')
        else:
            messages.info(request, 'username or password incorrect')
    dic6 = {'active_link': 'login'}
    return render (request, 'login.html', dic6)

def logOut(request):
    logout(request)
    return redirect('index')