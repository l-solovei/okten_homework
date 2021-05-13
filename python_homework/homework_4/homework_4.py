'''
#ДЗ
создать класс Human
и два класса Prince и Cinderella которые наследуются от Human
у принца должен быть размер туфельки и  метод который принимает лист золушек и выводит какой золушки подошла туфелька
'''

class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f'{self.__dict__}'

class Prince(Human):
    def __init__(self, name, age, find_size):
        super().__init__(name, age)
        self.find_size = find_size

    def find_cinderella(self, cinderellas):
        for cinderella in cinderellas:
            if cinderella.size == self.find_size:
                return f'Your cinderella is - {cinderella.name}. She is {cinderella.age} old and have {cinderella.size} foot size.'

class Cinderella(Human):
    def __init__(self, name, age, size):
        super().__init__(name, age)
        self.size = size


cinderellas = [Cinderella('Anna', 21, 38),
               Cinderella('Ira', 37, 41),
               Cinderella('Lili', 22, 37),
               Cinderella('Ola', 17, 34),
               Cinderella('Maryna', 28, 36)]

max_prince = Prince('Max', 23, 37)
print(max_prince.find_cinderella(cinderellas))
