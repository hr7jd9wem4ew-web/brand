# -----------------завдання 1-----------

# text = ("Кава — один із найпопулярніших напоїв у світі. Вона дарує енергію, піднімає настрій і допомагає розпочати день. Дослідження показують, що помірне споживання кави може бути навіть корисним! Ви любите каву?")
# count_dots=text.count(".")+text.count("?")+text.count("!")
# print(f"Кількість речень в тексті: {count_dots}")

# -----------------завдання 2-----------

# text = input("Введіть рядок: ")
# if text == text[::-1]:
#     print(f"{text} - це паліндром")
# else:
#     print(f"{text} - не паліндром")

# -----------------завдання 3-----------

# text = input("Введіть текст: ")
# reserved = "python itstep teacher student roman taras"
# reservedlist = text.split()
# for i in range(len(reservedlist)):
#     if reservedlist[i].lower() in reserved:
#         reservedlist[i] = reservedlist[i].upper()
# result = " ".join(reservedlist)
# print(f"{result}")

# -----------------завдання 4-----------

# text = input("Введіть рядок: ")
# sumvol1 = input("Введіть перший символ: ")
# sumvol2 = input("Введіть другий символ: ")
# search1 = text.find(sumvol1)
# search2 = text.find(sumvol2)
# if search1 != -1 and search2 != -1 and search1 < search2:
#     result = text[:search1] + text[search2+1:]
# else:
#     result = text
# print(f"Результат: {result}")

# -----------------завдання 5-----------

# text = input("Введіть текст: ")
# symbols = input("Введіть символи: ")
# symbols_set = set(symbols)
# words = text.split()
# result_words = []
# for i in words:
#     f = False
#     for c in i:
#         if c in symbols_set:
#             f = True
#             break
#     if not f:
#         result_words.append(i)
# result = " ".join(result_words)
# print(f"Результат: {result}")

# -----------------завдання 6-----------

# text = input("Введіть текст: ")
# text1 = text.split()
# result = " ".join(text1[::-1])
# print(result)
