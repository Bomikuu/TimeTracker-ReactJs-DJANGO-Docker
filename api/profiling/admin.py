from django.contrib import admin
from .models import Person
from .models import Project
from .models import ProjectList
from .models import TimeStamp

admin.site.register(Person)
admin.site.register(Project)
admin.site.register(ProjectList)
admin.site.register(TimeStamp)
