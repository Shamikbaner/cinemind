

from django.urls import URLPattern, path
from .views import get_progress, save_progress

urlpatterns=[
    path("save-progress/",save_progress),
    path("get-progress/<uuid:movie_id>/",get_progress),
]
