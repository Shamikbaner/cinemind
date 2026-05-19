from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Movie

@api_view(['GET'])
def movie_list(request):
    movies=Movie.objects.prefetch_related(
        'genres'
    ).all()
    data=[]

    for movie in movies:
        data.append({
            "title":movie.title,
            "genres":[genre.name for genre in movie.genres.all()],
            "rating":movie.rating,
            "release_year":movie.release_year,
        })

        return Response(data)
