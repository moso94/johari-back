from cProfile import Profile

import django_filters.rest_framework
from rest_framework import permissions, viewsets
from .models import Adjective, User, Project
from .serializers import AdjectiveSerializers, UserSerializers, ProjectSerializers
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination





class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class AdjectiveViewSet(viewsets.ModelViewSet):
    queryset = Adjective.objects.all().order_by('-id')
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['title']
    search_fields = ['title']  
    pagination_class = StandardResultsSetPagination


class AdjectiveListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Adjective.objects.all()
    serializer_class = AdjectiveSerializers
    permission_classes = [permissions.AllowAny]

    # Removed redundant get_queryset method


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializers
    permission_classes = [IsAuthenticated] 
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']  


class UserListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()

class UserDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['title']

    def get_queryset(self):
        return Project.object.all()


class ProjectListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['title']

    def get_queryset(self):
        return Project.object.all()


class ProjectDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['title']

    def get_queryset(self):
        return Project.object.all()



