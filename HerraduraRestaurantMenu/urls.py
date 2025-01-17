from django.urls import path
from . import views

app_name='HerraduraRestaurantMenu'

urlpatterns = [
    path('index/', views.index, name='index'),
    path('pizza/', views.pizza, name='pizza'),
    path('lasagna/', views.lasagna, name='lasagna'),
    path('order/', views.order, name='order'),
    path('success/', views.success, name='success'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.logIn, name='login'),
    path('logout/', views.logOut, name='logout'),
]
