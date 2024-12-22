from django.db import models

class User(models.Model):
    name = models.CharField(blank=True, null=True, max_length=100)
    email = models.EmailField(null=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

class Adjective(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(unique=True, max_length=100)

    class Meta:
        verbose_name = "Adjective"
        verbose_name_plural = "Adjectives"

class Project(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.CharField(unique=True, max_length=1024)
    user = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    adjectives = models.ManyToManyField(Adjective)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

class FeedBack(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    adjectives = models.ManyToManyField(Adjective)

    class Meta:
        verbose_name = "Feedback"
        verbose_name_plural = "Feedbacks"
