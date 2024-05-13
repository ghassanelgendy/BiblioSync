from django.urls import path
from . import views

urlpatterns = [
    path("aboutus/", views.about_us, name="about_us"),
    path("addform/", views.add_form, name="add_form"),
    path("adminprofile/", views.admin_profile, name="admin_profile"),
    path("collection/", views.collection, name="collection"),
    path("credits/", views.credits, name="credits"),
    path("", views.index, name="index"),
    path("index/", views.index, name="index"),
    path("login/", views.login_bta3tna, name="login"),
    path("requestbook/", views.request_book, name="request_book"),
    path("search/", views.search, name="search"),
    path("searchresults/", views.search_results, name="search_results"),
    path("signup/", views.sign_up, name="sign_up"),
    path("todo/", views.todo, name="todo"),
    path("bookdetails/<int:id>/", views.book_details, name="book_details"),
    path("bookdetails/", views.book_details, name="book_details"),
    path("userprofile/", views.user_profile, name="user_profile"),
    path("editbook/<int:id>/", views.edit_book, name="edit_book"),
     path('logout/', views.logout, name='logout'),
    # path('borrowbook/<int:id>/', views.borrow_book, name= "borrow_book"),
]
