from django.shortcuts import render , get_object_or_404, redirect
from .models import Book,Genre,User ,BorrowedBook
from django.contrib import messages
from django.http import JsonResponse
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout as auth_logout
from django.db.utils import IntegrityError
import re,random


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
        published= request.POST.get('publishDate')
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

    if request.method == 'POST' and 'deleteaccount' in request.POST:
        user = request.user
        user.delete()
        return redirect('index')

    x = {
        'username': request.user.username,
        'email': request.user.email
    }
    return render(request, "adminprofile.html", x)



def book_details(request, id):
    book = get_object_or_404(Book, id=id)
    genres = book.genres.all()
    # BorrowedBook = User.borrowed_books.all()

    if request.method == "POST" and "delete_book" in request.POST:
        book.delete()
        return redirect("collection")  
    
    if request.method == 'POST' and 'zorar' in request.POST:
                book.availability = False
                book.save()
                BorrowedBook.objects.create(book=book, borrower=request.user)
    return render(request, "bookdetails.html", {"book": book, "genres": genres, "BorrowedBook": BorrowedBook})



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

    initial_data = {
            'bookName': book.title,
            'ISBN': book.isbn,
            'author': book.author,
            'language': book.language,
            'coverlink': book.cover,
            'description': book.description,
            'available': 'available' if book.availability else 'notAvailable',
            'genres': [genre.name for genre in book.genres.all()],
        }
       

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
        return redirect('book_details', id=id)

    return render(request, "editbook.html", {"book": book, "genres": genres, "initial_data": initial_data})



def index(request):
    books = list(Book.objects.all())
    random.shuffle(books)
    books = books[:4]
    return render(request, "index.html", {"books": books})


def sign_up(request):
    error_messages = ''
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('Confirm password')
        gender = request.POST.get('Gender')
        is_admin = request.POST.get('is-admin') is not None

        # Check if email is in correct format
        if not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email):
            print('Email validation failed')
            error_messages = 'Invalid email format'

        # Check if password is at least 8 characters long
        elif len(password) < 8:
            print('Password length check failed')
            error_messages = 'Password should be at least 8 characters long'

        # Check if password and confirm password match
        elif password != confirm_password:
            print('Password match check failed')
            error_messages = 'Passwords do not match'

        if not error_messages:
            try:
                user = User(username=username, email=email, gender=gender, is_admin=is_admin)
                user.set_password(password)
                user.save()
                return JsonResponse({'success': True})
            except IntegrityError:
                error_messages = 'Username already exists. Please choose a different username.'


        return JsonResponse({'error': error_messages})
    else:
        return render(request, 'signup.html')

def login_bta3tna(request):
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=username, password=password)
            print(request.POST.get('username'))
            print(request.POST.get('password'))
            if user is not None:
                login(request, user)
                return redirect('index')  
            else:
                messages.error(request, 'Invalid username or password')

        return render(request, 'login.html')

def logout(request):
    auth_logout(request)
    return redirect('index')

def request_book(request):
    return render(request, "requestbook.html")


def search_results(request):
    query = request.GET.get('query')
    if query:
        filtered_books = Book.objects.filter(
            Q(title__icontains=query) |
            Q(author__icontains=query) |
            Q(isbn__icontains=query) |
            Q(genres__name__icontains=query)
        ).distinct()
        return render(request, 'searchresults.html', {'books': filtered_books, 'query': query})
    else:
        return render(request, 'searchresults.html', {'query': query})
    

def search(request):
    if 'term' in request.GET:
        books = Book.objects.filter(title__icontains=request.GET.get('term'))
        results = []
        for book in books:
            book_json = {}
            book_json['label'] = book.title
            book_json['value'] = book.id
            results.append(book_json)
        return JsonResponse(results, safe=False)

def todo(request):
    return render(request, "Todo.html")


def user_profile(request):

    
    if request.method == 'POST' and 'deleteaccount' in request.POST:
        user = request.user
        user.delete()
        return redirect('index')

    
    x = {
        'username': request.user.username,
        'email': request.user.email
    }
    borrowed_books = BorrowedBook.objects.filter(borrower=request.user)
    x["borrowed_books"] = borrowed_books
    return render(request, "userprofile.html", x)


