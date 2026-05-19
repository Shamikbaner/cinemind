from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics,status
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
class RegisterView(generics.CreateAPIView):
    serializer_class=RegisterSerializer

@method_decorator(
    ratelimit(key="ip",rate='5/m',method='POST'),
    name='post'
)


class LoginView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        user=authenticate(
            username=username,
            password=password
        )

        if user is not None:
            return Response({
                "success":True,
                "message":"Login Succcessful",
                "user":{
                    "username":user.username,
                    "email":user.email
                }
            })
        return Response({
            "success":False,
            "message":"Invalid credentials"
        },status=400)


class LogoutView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request):
        try:
            refresh_token=request.data["refresh"]
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response(
                {
                    "success":True,
                    "message":"Logout Successful",
                },
                status=status.HTTP_205_RESET_CONTENT,
            )
        except Exception:
            return Response(
                {
                    "success":False,
                    "message":"Invalid Token",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


