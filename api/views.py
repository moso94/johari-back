from rest_framework import permissions, viewsets

from .models import Adjective, User
from .serializers import AdjectiveSerializers, UserSerializers


class AdjectiveViewSet(viewsets.ModelViewSet):
    queryset = Adjective.objects.all().order_by('-id')
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]



class AdjectiveListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Adjective.objects.all()
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]
    def get_queryset(self):
        return Adjective.objects.all()



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]


class UserListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAdminUser]
    def get_queryset(self):
        return User.objects.all()
