"""
написати програму, яка підраховує вартість витрачених коштів за тиждень.
  1)Ви записуєте: дату, товар і ціну,
  2)ці записи можна редагувати,
  3)таких записів у вас може бути безліч
  4)у вас має бути меню:
    - список всіх записів
    - загальна вартість всіх покупок
    - найдорожча покупка
    - пошук по назві товару
    - покупки по днях
"""

def menu():
    shopping = [{'data': '21.12.2020', 'item': 'present', 'price': 1024.5},
                {'data': '15.09.2020', 'item': 'phone', 'price': 12500.00} ]
    while True:
        print("""
        1. Вивести список усіх покупок
        2. Додати покупку
        3. Редагувати покупку
        4. Видалити покупку
        5. Вивести загальну вартість всіх покупок
        6. Вивести найдорожчу покупку
        7. Знайти покупку за назвою
        8. Вивести покупки за певний день
        9. Вихід""")
        chose = input("Введіть номер завдання: ")

        def all_shopping(shopping):
            for s in shopping:
                print(f'''data : {s['data']}
item : {s['item']}
price : {s['price']}''')

        def add_shopping(shopping):
            date = input("Введіть дату: ")
            item = input("Введіть назву покупки: ")
            price = float(input("Введіть суму: "))
            new_shopping = {'data': date, 'item': item, 'price': price}
            shopping.append(new_shopping)
            all_shopping(shopping)
            return shopping

        def edit_shopping(shopping):
            item = input("Введіть назву покупки: ")
            for s in shopping:
                for v in s.values():
                    if v == item:
                        new_date = input("Введіть дату: ")
                        new_item = input("Введіть назву покупки: ")
                        new_price = float(input("Введіть суму: "))
                        s.update({'data': new_date, 'item': new_item, 'price': new_price})
            all_shopping(shopping)
            return shopping

        def del_shopping(shopping):
            item = input("Введіть назву покупки: ")
            for s in shopping:
                for v in s.values():
                    if v == item:
                        shopping.remove(s)
            all_shopping(shopping)
            return shopping

        def total_price(shopping):
            total_price = 0
            for s in shopping:
                for k, v in list(s.items()):
                    if k == 'price':
                        total_price += v

            print(total_price)

        def expensive_purchase(shopping):
            prices = sorted([v for s in shopping for k, v in list(s.items()) if k == 'price'])
            expensive = max(prices)
            for s in shopping:
                for k, v in list(s.items()):
                    if v == expensive:
                        print(f'''data : {s['data']}
                        item : {s['item']}
                        price : {s['price']}''')

        def name_item(shopping):
            item = input("Введіть назву покупки: ")
            for s in shopping:
                for k, v in list(s.items()):
                    if v == item:
                        print(f'''data : {s['data']}
item : {s['item']}
price : {s['price']}''')

        def date_shopping(shopping):
            item = input("Введіть дату: ")
            for s in shopping:
                for k, v in list(s.items()):
                    if v == item:
                        print(f'''data : {s['data']}
item : {s['item']}
price : {s['price']}''')



        if chose == '1':
            all_shopping(shopping)

        elif chose == '2':
            add_shopping(shopping)

        elif chose == '3':
            edit_shopping(shopping)

        elif chose == '4':
            del_shopping(shopping)

        elif chose == '5':
            total_price(shopping)

        elif chose == '6':
            expensive_purchase(shopping)

        elif chose == '7':
            name_item(shopping)

        elif chose == '8':
            date_shopping(shopping)

        elif chose == '9':
            break

        else:
            print('Введіть число від 1 до 9')

menu()