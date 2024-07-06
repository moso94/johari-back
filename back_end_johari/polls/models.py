from django.db import models

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

    def contact_default():
        return {"email": "to1@example.com"}

    contact_info = JSONField("ContactInfo", default=contact_default)


