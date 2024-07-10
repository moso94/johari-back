import datetime
from django.db import models
#from geography.models import ZipCode
from django.utils import timezone

class Person(models.Model):
    id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    Email = models.EmailField(validators=mailbox, primary_key=True)
    created = models.DateTimeField(db_default=Now())

    def __str__(self):
        return self.first_name

    def __str__(self):
        return self.last_name
    def __str__(self):
        return self.Email

    def contact_default():
        return {"email": "to1@example.com"}

    contact_info = JSONField("ContactInfo", default=contact_default)

    def save(
        self, force_insert=False, force_update=False, using=None, update_fields=None
    ):
        return self
class Question(models.Model):
    # ...
    def __str__(self):
        return self.question_text


class Choice(models.Model):
    # ...
    def __str__(self):
        return self.choice_text

class Question(models.Model):
    # ...
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)