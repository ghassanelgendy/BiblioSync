from django.shortcuts import render
from .models import Book
import json
from django.shortcuts import render, get_object_or_404

def about_us(request):
    return render(request, 'aboutus.html')

def add_form(request):
    return render(request, 'addform.html')

def admin_profile(request):
    return render(request, 'adminprofile.html')

def book_details(request, id):
    Book.objects.get(id=id)
    return render(request, 'bookdetails.html', {'book':     Book.objects.get(id=id)})

def change_password(request):
    return render(request, 'change password.html')

def collection(request):
    return render(request, 'collection.html', {'books': Book.objects.all() })


def credits(request):
    return render(request, 'credits.html')

def edit_profile(request):
    return render(request, 'Edit profile.html')

def edit_book(request):
    return render(request, 'editbook.html')

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def request_book(request):
    return render(request, 'requestbook.html')

def search_results(request):
    return render(request, 'searchresults.html')

def sign_up(request):
    return render(request, 'signup.html')

def todo(request):
    return render(request, 'Todo.html')

def user_profile(request):
    return render(request, 'userprofile.html')
