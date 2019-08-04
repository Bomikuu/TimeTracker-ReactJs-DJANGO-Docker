from django.db import models


class Employee(models.Model):
    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name


class Project(models.Model):
    projectName = models.CharField("Project Name", max_length=255)
    description = models.CharField("Project Description", max_length=255)
    status = models.CharField(max_length=255)


class ProjectList(models.Model):
    projectID = models.CharField(max_length=255)
    employeeID = models.CharField(max_length=255)


class TimeStamp(models.Model):
    employeeName = models.CharField(max_length=255)
    timeStamp = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
