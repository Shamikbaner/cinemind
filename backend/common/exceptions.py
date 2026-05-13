from rest_framework.views import exception_handler
from common.responses import error_response

def custom_exception_handler(exc,context):
    response=exception_handler(exc,context)

    if response is not None:
        return error_response(
            errors=response.data,
            message="API Error",
            status_code=response.status_code
        )

    return error_response(
        errors=str(exc),
        message="Server Error",
        status_code=500
    )
