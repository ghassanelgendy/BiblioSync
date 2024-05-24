from django.contrib import admin
from .models import Book,BorrowedBook
from .models import User

admin.site.register(Book)
admin.site.register(User)
admin.site.register(BorrowedBook)


admin.site.site_header = 'Jana'
admin.site.site_title = 'Jana'