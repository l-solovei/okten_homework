class Ccy:
    def __init__(self, value: float, currency: str):
        self.value = value
        if currency.upper() == 'EUR' or 'USD' 'UAH':
            self.currency = currency.upper()
        else:
            self.currency = 'UAH'
            print('Невідома валюта. Встановленно за замовчуванням - UAH')

    def __str__(self):
        return f'{self.value} - {self.currency}'

    def __repr__(self):
        return f'{self.value} - {self.currency}'

    def exchange_uah(self):
        to_uah = 0
        if self.currency == 'UAH':
            to_uah = self.value

        elif self.currency == 'EUR':
            to_uah = self.value * 33.74

        elif self.currency == 'USD':
            to_uah = self.value * 27.95

        return to_uah

    def exchange_eur(self):
        to_eur = 0
        if self.currency == 'EUR':
            to_eur = self.value

        elif self.currency == 'UAH':
            to_eur = self.value * 0.030

        elif self.currency == 'USD':
            to_eur = self.value * 0.83

        return to_eur

    def exchange_usd(self):
        to_usd = 0
        if self.currency == 'USD':
            to_usd = self.value

        elif self.currency == 'UAH':
            to_usd = self.value * 0.036

        elif self.currency == 'EUR':
            to_usd = self.value * 1,21

        return to_usd

    def exchange(func):
        def wrap(self, other):
            if self.currency == other.currency:
                pass

            elif other.currency == 'UAH':
                self.value = self.exchange_uah()

            elif other.currency == 'EUR':
                self.value = self.exchange_eur()

            elif other.currency == 'USD':
                self.value = self.exchange_usd()

            return f'{func(self, other)} - {other.currency}'
        return wrap

    @exchange
    def __add__(self, other):
        return self.value + other.value

    @exchange
    def __sub__(self, other):
        return self.value - other.value

    @exchange
    def __eq__(self, other):
        return self.value == other.value

    @exchange
    def __ne__(self, other):
        return self.value != other.value

    @exchange
    def __lt__(self, other):
        return self.value < other.value

    @exchange
    def __le__(self, other):
        return self.value <= other.value

    @exchange
    def __gt__(self, other):
        return self.value > other.value

    @exchange
    def __ge__(self, other):
        return self.value >= other.value

c1 = Ccy(1000, 'usd')
print(c1)
print(c1.exchange_uah())
print(c1.exchange_eur())
print(c1.exchange_usd())
c2 = Ccy(1000, 'eur')
print(c2)
print(c1+c2)
print(c1-c2)
print(c1==c2)
print(c1!=c2)
print(c1>c2)
print(c1>=c2)
print(c1<c2)
print(c1<=c2)