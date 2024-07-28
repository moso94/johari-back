from django.shortcuts import render
from .models import Adjective
from .serializers import AdjectiveSerializers
from rest_framework import permissions, viewsets


class AdjectiveViewSet(viewsets.ModelViewSet):
    queryset = Adjective.objects.all().order_by('-id')
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]



