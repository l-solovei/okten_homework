# 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
# наприклад:
# st = 'as 23 fdfdg544' введена строка
# 2,3,5,4,4        #вивело в консолі.
st = 'as 23 fdfdg544'

def num_in_str(st):
    num = [s for s in st if s.isdigit()]
    print(', '.join(num))

num_in_str(st)

# 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
# так як вони написані
# наприклад:
#   st = 'as 23 fdfdg544 34' #введена строка
#   23, 544, 34              #вивело в консолі

st2 = 'as 23 fdfdg544 34'

def num_in_str(st):
    num = ''
    for s in st:
        if s.isdigit():
            num += s
        else:
            num += ' '
    print(', '.join(num.split()))

num_in_str(st2)

#
# 3)прога, що виводить кількість кожного символа з введеної строки,
# наприклад:
# st = 'as 23 fdfdg544' #введена строка
#
# 'a' -> 1  #вивело в консолі
# 's' -> 1
# ' ' -> 2
# '2' -> 1
# '3' -> 1
# 'f' -> 2
# 'd' -> 2
# 'g' -> 1
# '5' -> 1
# '4' -> 2
#
st3 = 'as 23 fdfdg544'
def count_same(st):
    unic = []
    for s in st:
        if s not in unic:
            unic.append(s)
            print(f'\'{s}\' -> {st.count(s)}')

count_same((st3))


# 1)есть строка:
# greeting = 'Hello, world'
# записать каждый символ в лист поменяв его на верхний регистр
# пример:
# ['H', 'E', 'L', 'L', 'O', ',', ' ', 'W', 'O', 'R', 'L', 'D']
greeting = 'Hello, world'
greeting_list = [g.upper() for g in greeting]

print(greeting_list)

# 2) с диапазона от 0-50 записать в лист только не парные числа, при этом возвести их в квадрат
# пример:
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, ...]

list2 = [i**2 for i in range(51) if i%2 !=0]
print(list2)


# 3)  есть лист:
# numbers = [1, 2, 3, 4, 5, 6, 7, 8]
# создать новый лист и записать в него 'GT' если элемент в numbers больше 4 и 'LT' если элемент меньше или равен 4
# пример:
# ['LT', 'LT', 'LT', 'LT', 'GT', 'GT', 'GT', 'GT']

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
list3 = ['GT' if n > 4 else 'LT' for n in numbers]
print(list3)

# 4) есть два листа:
# list1 = [1, 2, 3, 4, 5]
# list2 = [-1, 7, 10, -5, -2]
#
# записать в лист тюплы (x,y) если x+y == 0
# пример:
# [(1, -1), (2, -2), (5, -5)]

list1 = [1, 2, 3, 4, 5]
list2 = [-1, 7, 10, -5, -2]

list4 = [(i, j) for i in list1 for j in list2 if i + j == 0]

print(list4)