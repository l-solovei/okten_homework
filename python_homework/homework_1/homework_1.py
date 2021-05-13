"""
1)Дан лист:
  list = [22, 3,5,2,8,2,-23, 8,23,5]
  - найти min число в листе
  - удалить все одинаковые значения
  - заменить каждое четвертое значение на "Х"
  - вывести элемент листа, значение которого ближе всего к среднему арифметическому всех элементов этого же листа
пример:
[1, 2, 3, 4, 5, 6, 7, 8, 9] => 5
[-1, -2, 3, 4, 555] => 4
[5, 5, 5, 5] => 5
[-10, 5, 5] => 5
P. S. Функция len() также используется для листов


2)вывести на экран пустой квадрат из "*" сторона которого указана в переменой:
3) переделать первое задание под меню с помощью цикла
4) вывести табличку умножения с помощью цикла while
"""
#1)Дан лист:
list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]

#- найти min число в листе
#version 1
min = min(list)
print(min)

#version 2
def min_in_list(list):
    min = list[0]
    for i in range(len(list)-1):
        if min >= list[i+1]:
            min = list[i+1]
        else:
            min = min
    return min

print(min_in_list(list))

#- удалить все одинаковые значения
def unic_list(list):
    list1 = []
    for i in list:
        if i not in list1:
            list1.append(i)
    return list1

print(unic_list(list))

#- заменить каждое четвертое значение на "Х"
def every_fourth(list):
    list1 = list.copy()
    for i in range(len(list1)):
        if (i+1)%4 == 0:
            list1[i] = 'X'
    return list1

print(every_fourth(list))

# - вывести элемент листа, значение которого ближе всего к среднему арифметическому всех элементов этого же листа
list4 = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
def average(list):
    sum = 0
    list.sort()
    almost_averange = []
    for l in list:
        sum += l
    average = sum/len(list)

    for i in range(len(list)):
        if list[i] >= average:
            almost_averange.append(list[i])
            almost_averange.append(list[i-1])
            break
    if average - almost_averange[1] <= almost_averange[0] - average:
        return almost_averange[1]
    else:
        return almost_averange[0]

print(average(list4))
print(average([1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(average([-1, -2, 3, 4, 555]))
print(average([5, 5, 5, 5]))
print(average([-10, 5, 5]))


#2)вывести на экран пустой квадрат из "*" сторона которого указана в переменой:
a = int(input('Введите сторону квадрата: '))
i = a
while i >= 1:
    if i == a or i == 1:
        j = a
        while j > 0:
            print('*', end='  ')
            j -= 1
        print()
    else:
        j = a - 2
        print('*', end='  ')
        while j > 0:
            print(' ', end='  ')
            j -= 1
        print('*')
    i -= 1

#3) переделать первое задание под меню с помощью цикла
def first_task_menu():
    list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
    while True:
        print("""
        1. найти min число в листе
        2. удалить все одинаковые значения
        3. заменить каждое четвертое значение на "Х"
        4. вывести элемент листа, значение которого ближе всего к среднему арифметическому всех элементов этого же листа
        5. выход
        """)
        chose = input("Сделайте свой выбор: ")

        if chose is '1':
            print(list)
            print(min_in_list(list))

        elif chose is '2':
            print(list)
            print(unic_list(list))

        elif chose is '3':
            print(list)
            print(every_fourth(list))

        elif chose is '4':
            print(list)
            print(average(list))

        elif chose is '5':
            break
        else:
            print("Введите число от 1 до 5")

#first_task_menu()


#4) вывести табличку умножения с помощью цикла while
i = 1
size = int(input('Введите размер таблицы умножения: '))
while i <= size:
    j = 1
    while j <= size:
        res = i * j
        if res // 10:
            print(res, end='  ')
        else:
            print(res, end='   ')
        j += 1
    print()
    i += 1



