from django.urls import path

from . import views

urlpatterns = [
    path('aboutus/', views.about_us, name='about_us'),
    path('addform/', views.add_form, name='add_form'),
    path('adminprofile/', views.admin_profile, name='admin_profile'),
    path('bookdetails/', views.book_details, name='book_details'),
    path('changepassword/', views.change_password, name='change_password'),
    path('collection/', views.collection, name='collection'),
    path('credits/', views.credits, name='credits'),
    path('editprofile/', views.edit_profile, name='edit_profile'),
    path('editbook/', views.edit_book, name='edit_book'),
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('requestbook/', views.request_book, name='request_book'),
    path('searchresults/', views.search_results, name='search_results'),
    path('signup/', views.sign_up, name='sign_up'),
    path('todo/', views.todo, name='todo'),
    path('userprofile/', views.user_profile, name='user_profile'),
]
