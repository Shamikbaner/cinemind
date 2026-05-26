from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from movies.models import Movie
from .models import PlaybackProgress


@api_view(["POST"])
# @permission_classes([IsAuthenticated])
def save_progress(request):
    movie_id=request.data.get("movie_id")
    progress=request.data.get("progress")
    movie=Movie.objects.get(id=movie_id)

    USER=get_user_model()
    test_user=USER.objects.first()

    playback,created=PlaybackProgress.objects.get_or_create(
        user=test_user,
        movie=movie

    )
    playback.progress=progress
    playback.save()

    return Response({
        "message":"Progress Saved",
        "progress":playback.progress
    })

@api_view(["GET"])
def get_progress(request,movie_id):
    playback=PlaybackProgress.objects.filter(
        user_id=1,
        movie_id=movie_id
    ).first()

    if playback:
        return Response({
            "progress":playback.progress
        })
    return Response({
        "progress":0
    })
