from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email=models.EmailField(unique=True)
    avatar=models.URLField(blank=True,null=True)
    is_kid_profile=models.BooleanField(default=False)

    created_at=models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self):
        return self.email
