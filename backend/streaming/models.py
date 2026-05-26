import uuid

from django.db import models
from django.contrib.auth import get_user_model

from movies.models import Movie


# Create your models here.
User=get_user_model()

class PlaybackProgress(models.Model):
    id=models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    user=models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    movie=models.ForeignKey(
        Movie,
        on_delete=models.CASCADE
    )

    progress=models.FloatField(default=0)

    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}-{self.movie.title}"
