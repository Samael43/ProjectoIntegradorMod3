from django.contrib import admin
from .models import Pizza, Lasagna

# Register your models here.

class HerradurasAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceS', 'priceM', 'priceL')

admin.site.register(Pizza, HerradurasAdmin)

class HerradurasAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceS', 'priceM', 'priceL')

admin.site.register(Lasagna, HerradurasAdmin)
