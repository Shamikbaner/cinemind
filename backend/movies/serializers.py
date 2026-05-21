from rest_framework import serializers
from .models import Movie,Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Genre
        fields=[
            "id",
            "name",
            "slug",
        ]

class MovieSerializer(serializers.ModelSerializer):
    thumbnail=serializers.ImageField(required=False,use_url=True)
    video=serializers.FileField(required=False,use_url=True)

    genres=GenreSerializer(
        many=True,
        read_only=True
    )


    class Meta:
        model=Movie

        fields=[
            "id",
            "title",
            "description",
            "release_date",
            "release_year",
            "duration",
            "thumbnail",
            "video",
            "rating",
            "language",
            "age_rating",
            "is_featured",
            "genres",
            "created_at",
            "updated_at",
        ]
