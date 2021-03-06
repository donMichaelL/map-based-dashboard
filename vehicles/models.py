from django.db import models


class LocationModel(models.Model):
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    altitude = models.DecimalField(max_digits=9, decimal_places=6)

    class Meta:
        abstract = True


class Vehicle(LocationModel):
    VEHICLE_STATUS = (
    ('free', 'free'),
    ('busy', 'busy'),
    )

    VEHICLE_TYPE = (
        ('ugv', 'ugv'),
        ('uav', 'uav'),
        ('usv', 'usv'),
        ('uuv', 'uuv'),
    )
    
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=10, choices=VEHICLE_TYPE)
    description = models.TextField()
    status =  models.CharField(max_length=10, choices=VEHICLE_STATUS, default='free')
    isAvailable = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name