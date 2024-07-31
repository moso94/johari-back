from .models import User, Adjective
from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at', 'updated_at']
class AdjectiveSerializers(serializers.ModelSerializer):
    class Meta:
        model = Adjective
        fields = ['id', 'title', 'created_at', 'updated_at']
    