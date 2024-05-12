from django.shortcuts import render , get_object_or_404
from .models import Book,Genre
import random
from django.shortcuts import redirect


# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Book, BorrowedBook

def about_us(request):
    return render(request, "aboutus.html")


def add_form(request):
    if request.method == 'POST':
        bookname = request.POST.get('book-name')
        ISBN = request.POST.get('ISBN')
        author = request.POST.get('author')
        coverlink = request.POST.get('coverlink')
        language = request.POST.get('language')
        pagesnumber = request.POST.get('no-pages')
        publishDate = request.POST.get('publishDate')
        description = request.POST.get('description')
        availability = True if request.POST.get('available') == 'available' else False
        genres = request.POST.getlist('genres')

        book = Book(title=bookname, isbn=ISBN, author=author, language=language, cover=coverlink, pages=pagesnumber, availability=availability, description=description)
        book.save()

        for genre_name in genres:
            genre, created = Genre.objects.get_or_create(name=genre_name)
            book.genres.add(genre)

    return render(request, "addform.html")


def admin_profile(request):
    return render(request, "adminprofile.html")



def book_details(request, id):
    book = get_object_or_404(Book, id=id)
    genres = book.genres.all()

    if request.method == "POST" and "delete_book" in request.POST:
        book.delete()
        return redirect("collection")  

    return render(request, "bookdetails.html", {"book": book, "genres": genres})


def change_password(request):
    return render(request, "change password.html")


def collection(request):
    sort = request.GET.get('sort', 'title')
    if sort == 'year':
        books = Book.objects.order_by('published')
    elif sort == 'pages':
        books = Book.objects.order_by('pages')
    else:
        books = Book.objects.order_by('title')

    return render(request, "collection.html", {"books": books, "sort": sort})



def credits(request):
    return render(request, "credits.html")


def edit_profile(request):
    return render(request, "Edit profile.html")


def edit_book(request, id):
    # hat elketab
    book = get_object_or_404(Book, id=id)
    genres = Genre.objects.all()

    if request.method == 'POST':
        bookname = request.POST.get('book-name')
        ISBN = request.POST.get('ISBN')
        author = request.POST.get('author')
        language = request.POST.get('language')
        coverlink = request.POST.get('coverlink')
        availability = True if request.POST.get('available') == 'available' else False
        description = request.POST.get('description')
        genres = request.POST.getlist('genres')
        # publishDate = request.POST.get('publishDate')

        #el values elgededa
        book.title = bookname
        book.isbn = ISBN
        book.author = author
        book.language = language
        book.cover = coverlink
        book.availability = availability
        book.description = description

       
        book.genres.clear()

        
        for genre_name in genres:
            genre, created = Genre.objects.get_or_create(name=genre_name)
            book.genres.add(genre)


      
        book.save()

  
    return render(request, "editbook.html", {"book": book, "genres": genres})



def index(request):
    books = list(Book.objects.all())
    random.shuffle(books)
    books = books[:4]
    return render(request, "index.html", {"books": books})


def login(request):
    return render(request, "login.html")


def request_book(request):
    return render(request, "requestbook.html")


def search_results(request):
    return render(request, "searchresults.html")


def sign_up(request):
    return render(request, "signup.html")


def todo(request):
    return render(request, "Todo.html")


def user_profile(request):
    return render(request, "userprofile.html")

# @csrf_exempt
# def borrow_book(request, book_id):
#     if request.method == 'POST':
#         try:
#             book = Book.objects.get(id=book_id)
#             if book.availability:
#                 book.availability = False
#                 book.save()
#                 BorrowedBook.objects.create(book=book, borrower_name=request.user.username)
#                 return JsonResponse({'message': 'Book borrowed successfully.'}, status=200)
#             else:
#                 return JsonResponse({'error': 'Book is not available.'}, status=400)
#         except Book.DoesNotExist:
#             return JsonResponse({'error': 'Book not found.'}, status=404)
#     else:
#         return JsonResponse({'error': 'Method not allowed.'}, status=405) 

