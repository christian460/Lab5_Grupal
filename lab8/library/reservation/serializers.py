from .models import Libro, User
from rest_framork import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Libro
        fields = ['url', 'nombre', 'author', 'codigo']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'nombre', 'email', 'deuda', 'libroPrest']