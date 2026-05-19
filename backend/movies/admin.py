from django.contrib import admin

# Register your models here.
from .models import Genre,Movie,WatchHistory,Review,Recommendation
admin.site.register(Genre)
admin.site.register(Movie)
admin.site.register(WatchHistory)
admin.site.register(Review)
admin.site.register(Recommendation)




