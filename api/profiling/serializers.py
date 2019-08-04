from rest_framework import serializers
from .models import Person, TimeStamp, Project


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class TimestampSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeStamp
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
