from repositories.base_repository import BaseRepository
class BaseService:
    repository:BaseRepository

    @classmethod
    def get_all(cls):
        return cls.repository.get_all()

    @classmethod
    def get_by_id(cls,id):
        return cls.repository.get_by_id(id)

    @classmethod
    def create(cls,**kwargs):
        return cls.repository.create(**kwargs)

    @classmethod
    def update(cls,instance,**kwargs):
        return cls.repository.update(instance,**kwargs)

    @classmethod
    def delete(cls,instance):
        return cls.repository.delete(instance)

