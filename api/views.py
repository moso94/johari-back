from cProfile import Profile

import django_filters.rest_framework
from rest_framework import permissions, viewsets
from .models import Adjective, User, Project, FeedBack
from .serializers import AdjectiveSerializers, UserSerializers, ProjectSerializers, FeedBackSerializers
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




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']  


class UserListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()

class UserDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()

class UserCreateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()

class UserUpdateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'email']

    def get_queryset(self):
        return User.objects.all()


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()


class ProjectListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()


class ProjectDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()

class ProjectCreateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()


class ProjectUpdateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()

class ProjectDeleteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return Project.object.all()




class ProjectFeedbackViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()


class FeedBackViewSet(viewsets.ModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()

class FeedBackListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()

class FeedBackDetailViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()

class FeedBackUpdateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()

class FeedBackDeleteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'user']

    def get_queryset(self):
        return FeedBack.objects.all()





    


