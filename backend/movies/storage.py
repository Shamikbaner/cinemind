from cloudinary_storage.storage import MediaCloudinaryStorage

class VideoMediaCloudinaryStorage(MediaCloudinaryStorage):
    resource_type="video"
