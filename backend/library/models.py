from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255, default=" Title gamed awy")
    author = models.CharField(max_length=255, default="os w rew")
    cover = models.URLField(
        default="https://m.media-amazon.com/images/I/51RTdGBiL6L._SY445_SX342_.jpg"
    )
    description = models.TextField(default="dah ktab")
    published = models.CharField(max_length=255, default="26 march 2004")
    isbn = models.CharField(max_length=13)
    language = models.CharField(max_length=100, default=" English")
    pages = models.IntegerField(default=354)
    genres = models.ManyToManyField(
        Genre
    )  # Use ManyToManyField for genres 3shan moken kaza genre
    availability = models.BooleanField(default=True)
    formats = models.TextField(default="Paperback, eBook")
    borrowing_period = models.CharField(max_length=100, default="2 weeks")
    reservation_option = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:  # elsatr dah by-sort elkotob ascendingly bel title
        ordering = ["title"]


class User(models.Model):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
    ]
    username = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    birthdate = models.DateField()
    is_admin = models.BooleanField(default=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
