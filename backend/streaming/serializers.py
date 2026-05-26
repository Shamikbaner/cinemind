from rest_framework import serializers

from .models import PlaybackProgress

class PlaybackProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model=PlaybackProgress
        fields="__all__"
