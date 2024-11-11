from django.db import models

# Create your models here.

class Pizza(models.Model):
    name = models.CharField(max_length=120)
    priceS = models.DecimalField(max_digits=4, decimal_places=2)
    priceM = models.DecimalField(max_digits=4, decimal_places=2)
    priceL = models.DecimalField(max_digits=4, decimal_places=2)
    PImage = models.URLField()

class Lasagna(models.Model):
    name = models.CharField(max_length=120)
    priceS = models.DecimalField(max_digits=4, decimal_places=2)
    priceM = models.DecimalField(max_digits=4, decimal_places=2)
    priceL = models.DecimalField(max_digits=4, decimal_places=2)
    LImage = models.URLField()