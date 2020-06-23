from django.contrib import admin
from .models import Vehicle


@admin.register(Vehicle)
class VehicleModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'description', 'status', 'isAvailable')



