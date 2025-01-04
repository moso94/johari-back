from .models import User, Adjective, Project, FeedBack
from rest_framework import serializers

class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'user', 'created_at', 'updated_at', 'slug']

class UserSerializers(serializers.ModelSerializer):
    projects = ProjectSerializers(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at', 'updated_at', 'projects']

class AdjectiveSerializers(serializers.ModelSerializer):

    class Meta:
        model = Adjective
        fields = ['id', 'title', 'created_at', 'updated_at']

class FeedBackSerializers(serializers.ModelSerializer):
    class Meta:
        model = FeedBack
        fields = ['id', 'created_at', 'updated_at', 'user', 'project', 'adjectives']
