from ast import Delete
import uuid

from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator,MaxValueValidator

User=get_user_model()

# Create your models here.
class Genre(models.Model):
    id=models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    name=models.CharField(
        max_length=100,
        unique=True
    )

    slug=models.SlugField(
        unique=True
    )

    def __str__(self):
        return self.name
class Movie(models.Model):
    id=models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    title=models.CharField(
        max_length=255
    )
    description=models.TextField()
    release_date=models.DateField()

    duration=models.PositiveBigIntegerField(
        help_text="Duration in minutes"
    )
    thumbnail=models.ImageField(
          upload_to='thumbnails/',
          null=True,
          blank=True
    )
    video=models.FileField(
          upload_to='videos/',
          null=True,
          blank=True
    )

    rating=models.FloatField(
        default=0,
        validators=[
              MinValueValidator(0),
              MaxValueValidator(10)
        ]
    )
    release_year=models.IntegerField(
        default=2024
    )
    language=models.CharField(
        max_length=50
    )
    age_rating=models.CharField(
        max_length=20
    )
    is_featured=models.BooleanField(
        default=False
    )
    genres=models.ManyToManyField(
        Genre,related_name="movies"
    )
    created_at=models.DateTimeField(
        auto_now_add=True
    )
    updated_at=models.DateField(
        auto_now=True
    )
    class Meta:
             indexes=[
                  models.Index(fields=['title']),
                  models.Index(fields=['release_date']),
                  models.Index(fields=['rating']),
                  models.Index(fields=['is_featured']),
             ]

    def __str__(self):
        return self.title

class WatchHistory(models.Model):
        id=models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
        )
        user=models.ForeignKey(
            User,
            on_delete=models.CASCADE,
            related_name="watch_history"
        )

        movie=models.ForeignKey(
            Movie,
            on_delete=models.CASCADE,
            related_name="watched_by"
        )

        watched_at=models.DateTimeField(
            auto_now_add=True
        )
        progress=models.PositiveIntegerField(
            default=0,
            help_text="Watch Progress in seconds"
        )
        completed=models.BooleanField(
            default=False
        )

        class Meta:
             indexes=[
                  models.Index(fields=['user']),
                  models.Index(fields=['movie']),
                  models.Index(fields=['watched_at']),
                  models.Index(fields=['user','movie']),
             ]

        def __str__(self):
            return f"{self.user.username}-{self.movie.title}"

class Review(models.Model):
     id=models.UUIDField(
          primary_key=True,
          default=uuid.uuid4,
          editable=False
     )

     user=models.ForeignKey(
          User,
          on_delete=models.CASCADE,
          related_name="reviews"
     )

     movie=models.ForeignKey(
          Movie,
          on_delete=models.CASCADE,
          related_name="reviews"
     )
     rating=models.PositiveIntegerField()
     comment=models.TextField()
     created_at=models.DateTimeField(
          auto_now_add=True
     )
     updated_at=models.DateTimeField(
          auto_now=True
     )
     class Meta:
             indexes=[
                  models.Index(fields=['user']),
                  models.Index(fields=['movie']),
                  models.Index(fields=['rating']),
                  models.Index(fields=['user','movie']),
             ]

     def __str__(self):
          return f"{self.user.username}-{self.movie.title}"


class Recommendation(models.Model):
     id=models.UUIDField(
          primary_key=True,
          default=uuid.uuid4,
          editable=False
     )
     user=models.ForeignKey(
          User,
          on_delete=models.CASCADE,
          related_name="recommendations"
     )
     movie=models.ForeignKey(
          Movie,
          on_delete=models.CASCADE,
          related_name="recommend_to"
     )
     score=models.FloatField(
          default=0
     )
     reason=models.CharField(
          max_length=255
     )
     created_at=models.DateTimeField(
          auto_now_add=True
     )
     class Meta:
             indexes=[
                  models.Index(fields=['user']),
                  models.Index(fields=['score']),

                  models.Index(fields=['user','score']),
             ]

     def __str__(self):
          return f"{self.user.username}->{self.movie.title}"

