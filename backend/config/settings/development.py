from .base import *
from decouple import config

DEBUG=config("DEBUG",default=True,cast=bool)


MEDIA_URL="/media/"
MEDIA_ROOT=BASE_DIR/"media"


INSTALLED_APPS +=[
    "cloudinary",
    "cloudinary_storage",
]

CLOUDINARY_STORAGE={
    "CLOUD_NAME":"dkwwtolks",
    "API_KEY":"863911492338759",
    "API_SECRET":"hq-vieQN3654oNWgw-lZonO2SrA"
}


STORAGES={
    "default":{
        "BACKEND":"cloudinary_storage.storage.MediaCloudinaryStorage",
    },

    "staticfiles":{
        "BACKEND":"django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}
