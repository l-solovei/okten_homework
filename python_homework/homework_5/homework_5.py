#  Створити клас rectangle
# 1) об'єкт приймає два параметри - дві сторони х у
# 2) описати методи арифметичні
#   + сума площин двок об'єктів
#   - різниця площин
# 3) логічні оператори:
#   == повертає true якщо рівні по площині
#   != якщо не рівні
#   >, < відповідно
# 4) len() - сума сторін

class Rectangle:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return (self.x * self.y) + (other.x * other.y)

    def __sub__(self, other):
        return (self.x * self.y) - (other.x * other.y)

    def __eq__(self, other):
        return (self.x * self.y) == (other.x * other.y)

    def __ne__(self, other):
        return (self.x * self.y) != (other.x * other.y)

    def __lt__(self, other):
        return (self.x * self.y) < (other.x * other.y)

    def __gt__(self, other):
        return (self.x * self.y) > (other.x * other.y)

    def __len__(self):
        return self.x + self.y

rectangle = Rectangle(4, 6)
rectangle2  = Rectangle(8, 10)
print(rectangle.__add__(rectangle2))
print(rectangle.__sub__(rectangle2))
print(rectangle.__eq__(rectangle2))
print(rectangle.__ne__(rectangle2))
print(rectangle.__lt__(rectangle2))
print(rectangle.__gt__(rectangle2))
print(rectangle.__len__())

#############################################################
# 1)Створити пустий list
# 2)Створити клас Letter
# 3) створити змінну класу __count.
# 4) при створенні об'єкта має створюватись змінна об'єкта(пропертя) __text, для цієї змінної мають бути гетер і сетер
# 5) при створені об'єкта __count має збільшуватися на 1
# 6) має бути метод(метод класу) для виводу __сount
# 7) має бути метод який записує в наш ліст текст з нашої змінної __text

lst = []

class Letter:
    __count = 0

    #@property
    def __init__(self, text):
        self.__text = text
        Letter.__count += 1

    @property
    def text(self):
        return self.__text

    @text.setter
    def text(self, text):
        self.__text = text

    @classmethod
    def show_count(cls):
        return cls.__count

    def text_in_list(self):
        lst.append(self.__text)

letter = Letter('test')
print(letter.text)
letter.text = 'task is done'
print(letter.text)
print(letter.show_count())
letter.text_in_list()
print(lst)

##################################################################
'''
1) написати програму для запису відомостей про пасажирські перевезення
2) перевезення відбувається трьома способами, літаком, машиною, поїздом,
3) дані які треба буде зберігати:
  - вартість квитка(літак, поїзд)
  - кількість пасажирів(машина)
  - час в дорозі(всі)
  - час реєстрації(літак)
  - клас:перший,другий(літак)
  - вартість пального(машина)
  - км(машина)
  - місце: купе,св(поїзд)
4) методи:
  - розрахунок вартості доїзду(машина)
  - загальний час перельоту(літак)
  - порівняти час в дорозі між двома будь якими транспортними засобами(двома об'єктами) - наприклад"літак на 5 годин швидше за поїзд"
  - вивести всі дані про перевезення(поїзд)
'''

class Transpotration:
    def __init__(self, travel_time, ticket_price):
        self.travel_time = travel_time
        self.ticket_price = ticket_price

    def compare_time(self, other):
        if self.travel_time < other.travel_time:
            return f'{self.__class__.__name__} на {other.travel_time - self.travel_time} ' \
                   f'годин швидше, ніж {other.__class__.__name__}'
        elif self.travel_time > other.travel_time:
            return f'{other.__class__.__name__} на {other.travel_time - self.travel_time} ' \
                   f'годин швидше, ніж {self.__class__.__name__}'
        else:
            return f'Час на дорогу однаковий'

    def __repr__(self):
        return f'{self.__dict__}'


class Plane(Transpotration):
    def __init__(self, travel_time, ticket_price, registration_time, departure_time, class_type):
        super(Plane, self).__init__(travel_time, ticket_price)
        self.registration_time = registration_time
        self.departure_time = departure_time
        self.class_type = class_type

    def total_time(self):
        return (self.departure_time - self.registration_time) + self.travel_time

class Car(Transpotration):
    def __init__(self, travel_time, passangers, cost_of_fuel, km, ticket_price = 0):
        super(Car, self).__init__(travel_time, ticket_price)
        self.passangers = passangers
        self.cost_of_fuel = cost_of_fuel
        self.km = km

    def travel_price(self):
        return (self.cost_of_fuel * self.km)/self.passangers

class Train(Transpotration):
    def __init__(self, travel_time, ticket_price, seat):
        super(Train, self).__init__(travel_time, ticket_price)
        self.seat = seat

    def travel_data(self):
        return f'Інформація про поїздку потягом: ' \
               f'Час в дорозі: {self.travel_time} ' \
               f'Ціна квитка: {self.ticket_price} ' \
               f'Місце: {self.seat}'

plane = Plane(1.5, 1600, 16.18, 17.40, 'перший')
car = Car(7.34, 3, 30.15, 1400)
train = Train(5.50, 1100, 'cv 17')

print(plane)
print(car)
print(train)

print(plane.total_time())
print(car.travel_price())
print(train.travel_data())

print(plane.compare_time(car))
