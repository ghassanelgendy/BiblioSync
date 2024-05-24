from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


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
    published = models.IntegerField(default=2004)
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


class User(AbstractUser):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
    ]
    REQUIRED_FIELDS = ['email', 'gender']
    
    email = models.EmailField()
    is_admin = models.BooleanField(default=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    borrowed_books = models.ManyToManyField('BorrowedBook', related_name='borrowers')

    def __str__(self):
        return self.username
    

class BorrowedBook(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    borrowed_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.book.title} - Borrowed by {self.borrower.username}"