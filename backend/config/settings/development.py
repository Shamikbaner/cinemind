from .base import *
from decouple import config


DEBUG=True

ALLOWED_HOSTS=["127.0.0.1","localhost"]

# DEBUG=config("DEBUG",default=True,cast=bool)


MEDIA_URL="/media/"
MEDIA_ROOT=BASE_DIR/"media"


INSTALLED_APPS +=[
    "cloudinary",
    "cloudinary_storage",
]

CLOUDINARY_STORAGE={
    "CLOUD_NAME":config("CLOUDINARY_CLOUD_NAME"),
    "API_KEY":config("CLOUDINARY_API_KEY"),
    "API_SECRET":config("CLOUDINARY_API_SECRET"),
}


# STORAGES={
#     "default":{
#         "BACKEND":"cloudinary_storage.storage.MediaCloudinaryStorage",
#     },

#     "staticfiles":{
#         "BACKEND":"django.contrib.staticfiles.storage.StaticFilesStorage",
#     },
# }
DATABASES = {
    'default': {
        'ENGINE':'django.db.backends.postgresql',
        'NAME':config("DB_NAME"),
        'USER':config("DB_USER"),
        'PASSWORD':config("DB_PASSWORD"),
        'HOST':config("DB_HOST"),
        'PORT':config("DB_PORT"),
    }
}



