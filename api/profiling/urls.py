from .api import (
    PersonListAPIView,
    CreatePersonAPIView,
    TimestampListAPIView,
    CreateTimestampAPIView
)
from django.urls import path
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kiosk.settings")

app_name = 'profiling'
urlpatterns = [
    path(r'api/v1/employee', PersonListAPIView.as_view(), name='api-Person-create'),
    path(r'api/v1/create-employee', CreatePersonAPIView.as_view(),
         name='api-Person-create'),
    path(r'api/v1/timestamp', TimestampListAPIView.as_view(),
         name='api-Timestamp-list'),
    path(r'api/v1/create-timestamp', CreateTimestampAPIView.as_view(),
         name='api-Timestamp-create'),
]
