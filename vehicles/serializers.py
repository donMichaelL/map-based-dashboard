from rest_framework import serializers
from .models import Vehicle


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['latitude', 'longitude', 'altitude']


class VehicleSerializer(serializers.ModelSerializer):
    home_location = LocationSerializer(source='*')

    class Meta:
        model = Vehicle
        exclude = ('latitude', 'longitude', 'altitude')
