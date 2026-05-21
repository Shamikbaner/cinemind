from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.permissions import (IsAuthenticatedOrReadOnly,IsAdminUser,AllowAny,IsAuthenticated)
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser


permission_classes=[IsAuthenticatedOrReadOnly]
from .models import Movie
from .serializers import MovieSerializer

class MoviePagination(PageNumberPagination):
    page_size=2
    page_size_query_param='page_si'

class MovieListCreateView(
    generics.ListCreateAPIView
):
    queryset=Movie.objects.prefetch_related(
        "genres"
    ).all()
    serializer_class=MovieSerializer
    parser_classes=[MultiPartParser,FormParser]

    def get_permissions(self):
        if self.request.method=="POST":
            return[IsAuthenticatedOrReadOnly()]
        return[AllowAny()]

class MovieDetailView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset=Movie.objects.prefetch_related(
        "genres"
    ).all()

    serializer_class=MovieSerializer
    parser_classes=[MultiPartParser,FormParser]

    def get_permissions(self):
        if self.request.method in ["PUT","PATCH","DELETE"]:
            return[IsAdminUser()]
        return [AllowAny()]

class MovieStreamView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request,pk):
        movie=Movie.objects.get(pk=pk)
        return Response({
            "title":movie.title,
            "video_url":movie.video.url,
            "thumbnail":movie.thumbnail.url if movie.thumbnail else None,
        })

@api_view(["GET"])
def movie_list(request):
    movies=Movie.objects.prefetch_related(
        'genres'
    ).all()
    language=request.GET.get('language')
    if language:
        movies=movies.filter(
            language__iexact=language

        )
    sort=request.GET.get('sort')
    if sort:
        movies=movies.order_by(sort)
    search=request.GET.get('search')
    if search:
        movies=movies.filter(
            Q(title__icontains=search) |
            Q(description__icontains=search)
        )
    paginator=MoviePagination()

    paginated_movies=paginator.paginate_queryset(
        movies,
        request
    )
    data=[]

    for movie in paginated_movies or []:
        data.append({
            "title":movie.title,
            "genres":[
                genre.name
                for genre in movie.genres.all()
            ],
            "rating":movie.rating,
            "release_year":movie.release_year,
        })

    return paginator.get_paginated_response(data)
