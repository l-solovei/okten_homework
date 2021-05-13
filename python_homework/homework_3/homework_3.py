#- створити функцію яка виводить ліст

def print_list(lst):
    print(lst)

#- створити функцію яка приймає три числа та виводить та повертає найменьше.

def three_num(a, b, c):
    min_num = min(a, b, c)
    print(min_num)
    return min_num

print(three_num(2, -4, 13))

#- створити функцію яка приймає три числа та виводить та повертає найбільше.

def three_num_2(a, b, c):
    max_num = max(a, b, c)
    print(max_num)
    return max_num

print(three_num_2(2, -4, 13))

#- створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше

def many_num(*args):
    min_num = min(args)
    max_num = max(args)
    print(max_num)
    return min_num

print(many_num(2, -4, 13, -154, 17638))

#- створити функцію яка повертає найбільше число з ліста
max_num = lambda lst: max(lst)
print(max_num([2, -4, 13, -154, 17638]))

#- створити функцію яка повертає найменьше число з ліста
min_num = lambda lst: min(lst)
print(min_num([2, -4, 13, -154, 17638]))

#- створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його.
# 1
def sum_lst(lst):
    summa = 0
    for l in lst:
        summa+= l
    return summa
#2
sum_lst_2 = lambda lst: sum(lst)

print(sum_lst([1, 2, 3, 4]))
print(sum_lst_2([1, 2, 3, 4]))


# - створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.
def aver_lst(lst):
    summa = 0
    for l in lst:
        summa+= l
    aver = summa/len(lst)
    return aver
#2
aver_lst_2 = lambda lst: sum(lst)/len(lst)

print(aver_lst([1, 2, 3, 4]))
print(aver_lst_2([1, 2, 3, 4]))

'''
- є функція:
def pr():
    return 'Hello_boss_!!!'
написати декоратор до цієї функції, який замінює нижні підчеркування на пробіли і повертає це значення
'''
def decor(func):
    def wrap():
        return func().replace('_', ' ')
    return wrap

@decor
def pr():
    return 'Hello_boss_!!!'

print(pr())