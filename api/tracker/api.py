from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Employee, TimeStamp, Project
from .serializers import *


class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class TimestampListAPIView(ListAPIView):
    queryset = TimeStamp.objects.all()
    serializer_class = TimestampSerializer


class CreateEmployeeAPIView(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class CreateTimestampAPIView(CreateAPIView):
    queryset = TimeStamp.objects.all()
    serializer_class = TimestampSerializer


class CreateProjectAPIView(CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectListAPIView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
