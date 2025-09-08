import random

users = []
print("-----------Welcome-----------")
print("""Список команд:
        1 - Добавити учасника
        2 - Видалити учасника
        3 - Вибрати переможця
        4 - Показати учасників
        5 - зробити рандом чесним
        6 - очистити список
        7 - знайти переможця, але після перемоги видалити його зі списку
        exit - завершити конкурс""")

while True:
    answer = input("Введіть команду: ")

    if answer == "1":
        user = input("Введіть учасника конкурсу: ")
        if user.isalpha():
            users.append(user.lower())
            print(f"Список учасників: {users}")
        else:
            print("Неправильне ім'я. Користувача не додано.")

    elif answer == "2":
        user = input("Введіть учасника, якого видалити зі списку: ")
        if user in users:
            users.remove(user)
            print(f"Список учасників: {users}")
        else:
            print("Такого користувача немає у списку.")

    elif answer == "3":
        if users:
            print(f"Переможець конкурсу: {random.choice(users)}")
        else:
            print("Список порожній, нема з кого обирати.")

    elif answer == "4":
        print(f"Список учасників: {users}")

    elif answer == "5":
        users = list(set(users))
        print(f"{users}")

    elif answer == "6":
        users.clear()
        print("Список очищено!")

    elif answer == "7":
        if users:
            winner = random.choice(users)
            users.remove(winner)
            print(f"Переможець конкурсу: {winner} (видалено зі списку)")
        else:
            print("Список порожній")

    elif answer == "exit":
        print("Конкурс завершено.")
        break

    else:
        print("Неправильна команда. Спробуйте ще раз.")