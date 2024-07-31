from django.shortcuts import render
from .models import Adjective, User
from .serializers import AdjectiveSerializers, UserSerializers
from rest_framework import permissions, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


class AdjectiveViewSet(viewsets.ModelViewSet):
    queryset = Adjective.objects.all().order_by('-id')
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
