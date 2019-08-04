from .api import (
    PersonListAPIView,
    CreatePersonAPIView,
    TimestampListAPIView,
    CreateTimestampAPIView,
    CreateProjectAPIView,
    ProjectListAPIView
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
    path(r'api/v1/create-project', CreateProjectAPIView.as_view(),
         name='api-project-create'),
    path(r'api/v1/project', ProjectListAPIView.as_view(),
         name='api-project'),
]
