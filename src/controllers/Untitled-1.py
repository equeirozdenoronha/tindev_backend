class Teste(object):
def _init__(self):
self._name = "John"
self._surname = "Doe"
@staticmethod
def static_method_example(*args, **kwargs):
print(self)
@property
def property_example(self, *args, **kwargs):
print(self)
@classmethod
def class_method_example(*args, **kwargs):
print(self)
t = Teste()
t.static_method_example()
t.property_example
t.class_method_example()