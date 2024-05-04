from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=255)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    cover = models.URLField()
    description = models.TextField()
    published = models.CharField(max_length=255) 
    isbn = models.CharField(max_length=13)
    language = models.CharField(max_length=100)
    pages = models.IntegerField()
    genres = models.ManyToManyField(Genre)  # Use ManyToManyField for genres 3shan moken kaza genre
    availability = models.BooleanField(default=True)
    formats = models.TextField()
    borrowing_period = models.CharField(max_length=100)
    reservation_option = models.BooleanField(default=True)


