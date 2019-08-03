from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Person, TimeStamp
from .serializers import *


class PersonListAPIView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class TimestampListAPIView(ListAPIView):
    queryset = TimeStamp.objects.all()
    serializer_class = TimestampSerializer


class CreatePersonAPIView(CreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class CreateTimestampAPIView(CreateAPIView):
    queryset = TimeStamp.objects.all()
    serializer_class = TimestampSerializer
