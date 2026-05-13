from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import generics
from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class=RegisterSerializer
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





