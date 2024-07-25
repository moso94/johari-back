from django.db import models

class User(models.Model):
    name = models.CharField(blank = True, null=True, max_length=100)
    email = models.EmailField(null = True, unique = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class Project(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.CharField(unique=True, max_length=1024)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


    