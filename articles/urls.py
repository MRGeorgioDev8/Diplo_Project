from django.urls import path
from .views import base_with_articles,  add_article, add_comment, like_article, dislike_article, article_detail, add_bookmark, remove_bookmark, user_bookmarks

urlpatterns = [
    path('', base_with_articles, name='base_with_articles'),
    path('add_article/', add_article, name='add_article'),
    path('<int:pk>/add_comment/', add_comment, name='add_comment'),
    path('<int:article_id>/like/', like_article, name='like_article'),
    path('<int:article_id>/dislike/', dislike_article, name='dislike_article'),
    path('<int:pk>/', article_detail, name='article_detail'),
    path('add_bookmark/<int:article_id>/', add_bookmark, name='add_bookmark'),
    path('remove_bookmark/<int:article_id>/', remove_bookmark, name='remove_bookmark'),
    path('user_bookmarks/', user_bookmarks, name='user_bookmarks'),
]