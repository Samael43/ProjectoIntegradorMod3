# Generated by Django 5.1.3 on 2024-11-10 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HerraduraRestaurantMenu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pizza',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('priceS', models.DecimalField(decimal_places=2, max_digits=4)),
                ('priceM', models.DecimalField(decimal_places=2, max_digits=4)),
                ('priceL', models.DecimalField(decimal_places=2, max_digits=4)),
                ('PImage', models.URLField()),
            ],
        ),
        migrations.RenameModel(
            old_name='menu',
            new_name='Lasagna',
        ),
        migrations.RenameField(
            model_name='lasagna',
            old_name='Image',
            new_name='LImage',
        ),
    ]
