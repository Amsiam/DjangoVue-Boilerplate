DEBUG = True

if(DEBUG):
    from .dev import *
else:
    from .production import *