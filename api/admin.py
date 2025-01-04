from django.contrib import admin
from .models import User, Adjective, Project, FeedBack

class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at", "updated_at")
    search_fields = ("name", "email")  
    list_filter = ("created_at",)  

class AdjectiveAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at", "updated_at")
    search_fields = ("title",)

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("slug", "user", "created_at", "updated_at")
    search_fields = ("slug",)
    list_filter = ("user",)

class FeedBackAdmin(admin.ModelAdmin):
    list_display = ("user", "project", "created_at", "updated_at")
    search_fields = ("user__name", "project__slug")

admin.site.register(User, UserAdmin)
admin.site.register(Adjective, AdjectiveAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(FeedBack, FeedBackAdmin)
