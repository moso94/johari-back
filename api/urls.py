from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import AdjectiveViewSet, UserViewSet, ProjectViewSet, FeedBackViewSet

router = routers.DefaultRouter()
router.register(r'adjectives', AdjectiveViewSet)
router.register(r'users', UserViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'feedbacks', FeedBackViewSet)


urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),  
]
