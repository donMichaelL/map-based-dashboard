from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Vehicle
from .serializers import VehicleSerializer


class VehicleApiView(ListAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer