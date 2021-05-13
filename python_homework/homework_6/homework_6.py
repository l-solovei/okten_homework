# Создать класс File:
# -он должен принимать любое количество уникальных имен файлов но не меньше 2-х
# -создать метод который будет проверять существуют ли эти файлы, если нет то создать их
# -создать метод который принимает текст и выводит список файлов (записать текст в выбранный файл)
# -создать метод который выводит список файлов, и при выборе, выводит содержимое в консоль
# -создать метод который даёт возможность выбрать два файла и меняет их содержимое местами


class File:
    def __init__(self, file1, file2, *args):
        files = list({file1, file2, *args})
        self.files = files if len(files) >= 2 else ['file1.txt, file2.txt']

    def exist_file(self):
        for name_file in self.files:
            file = None
            try:
                file = open(name_file)
            except FileNotFoundError:
                file = open(name_file, 'w')
            finally:
                if file:
                    file.close()

    def write_file_text(self):
        for name_file in self.files:
            print(name_file)
        chose_file = input('Введіть назву файлу: ')
        text = input('Введіть текст: ')
        if chose_file in self.files:
            with open(chose_file, 'w') as cf:
                cf.write(text)
        else:
            print('Такого файлу не існує')

    def read_file_text(self):
        for name_file in self.files:
            print(name_file)
        chose_file = input('Введіть назву файлу: ')
        if chose_file in self.files:
            with open(chose_file) as cf:
                print(cf.read())
        else:
            print('Такого файлу не існує')

    def replace_text(self):
        for name_file in self.files:
            print(name_file)
        chose_file = input('Введіть назву файлу: ')
        chose_file2 = input('Введіть назву другого файлу: ')
        if chose_file in self.files and chose_file2 in self.files:
            with open(chose_file) as cf:
                text = cf.read()
            with open(chose_file2) as cf2:
                text2 = cf2.read()
            with open(chose_file, 'w') as cf:
                cf.write(text2)
            with open(chose_file2, 'w') as cf2:
                cf2.write(text)
        else:
            print('Такого файлу не існує')



file = File('file1.txt', 'file2.txt')
file.exist_file()
file.write_file_text()
file.read_file_text()
file.replace_text()