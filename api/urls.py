from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import AdjectiveViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'adjectives', AdjectiveViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),  
]
