from django.contrib import admin
from .models import Employee
from .models import Project
from .models import ProjectList
from .models import TimeStamp

admin.site.register(Employee)
admin.site.register(Project)
admin.site.register(ProjectList)
admin.site.register(TimeStamp)
