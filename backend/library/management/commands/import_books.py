import json
from datetime import datetime
from django.core.management.base import BaseCommand
from library.models import Book, Genre

class Command(BaseCommand):
    help = 'Import books from a JSON file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to the JSON file')

    # import_books.py
    def handle(self, *args, **kwargs):
        file_path = kwargs['file_path']
        with open(file_path, 'r', encoding='utf-8') as f:
            books_data = json.load(f)
            for book_data in books_data:
                reservation_option = True if book_data.get('reservationOption', '') == 'Yes' else False
                # Create the book without the genres
                book = Book.objects.create(
                    title=book_data['title'],
                    author=book_data['author'],
                    cover=book_data['cover'],
                    description=book_data['description'],
                    published=book_data['published'],
                    isbn=book_data['isbn'],
                    language=book_data['language'],
                    pages=book_data['pages'],
                    availability=book_data['availability'],
                    formats=book_data['formats'],
                    borrowing_period=book_data['borrowingPeriod'], 
                    reservation_option=reservation_option
                )

                # Create the genres and add them to the book
                genres = []
                for genre_name in book_data['genres']:
                    genre, created = Genre.objects.get_or_create(name=genre_name)
                    genres.append(genre)
                book.genres.set(genres)  # Use .set() here
        self.stdout.write(self.style.SUCCESS('Books imported successfully'))
