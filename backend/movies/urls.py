from django.urls import path

from .views import (MovieListCreateView,MovieDetailView,MovieStreamView,movie_list)

urlpatterns=[path('movies/',MovieListCreateView.as_view(),name="movie-list-create"),
             path('movies/<uuid:pk>/',MovieDetailView.as_view(),name="movie-detail"),
             path('movies/<uuid:pk>/stream/',MovieStreamView.as_view(),name="movie-stream")]

