from django.db import models
from typing import Type

class BaseRepository:
    model:Type[models.Model]

    @classmethod
    def get_all(cls):
        return cls.model.objects.all()
    @classmethod
    def get_by_id(cls,id):
        return cls.model.objects.filter(id=id).first()
    @classmethod
    def create(cls,**kwargs):
        return cls.model.objects.create(**kwargs)
    @classmethod
    def update(cls,instance,**kwargs):
        for key,value in kwargs.items():
            setattr(instance,key,value)
        instance.save()
        return instance

    @classmethod
    def delete(cls,instance):
        instance.delete()


