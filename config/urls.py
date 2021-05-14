from django.contrib import admin
from django.urls import path,re_path,include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("api.urls")),
    re_path(r'^(?!admin|static|media|api|__debug__).*$',TemplateView.as_view(template_name="index.html"),name="home"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls)),]