# 🌍 Earth–Moon–Sun Simulator

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Three.js](https://img.shields.io/badge/Three.js-3D-black)
![Vite](https://img.shields.io/badge/Vite-fast-purple)
![Node](https://img.shields.io/badge/Node-20-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Интерактивный **3D симулятор системы Земля–Луна–Солнце** с визуализацией движения небесных тел и демонстрацией **солнечных и лунных затмений**.

Проект разработан в рамках IT-проекта (команда №46).

---

# 📷 Пример симуляции

*(сюда позже можно добавить скриншот или GIF)*

```
Sun —— Earth —— Moon
```

---

# 📌 Описание проекта

Приложение моделирует движение:

* 🌞 Солнца
* 🌍 Земли
* 🌙 Луны

в **трёхмерном пространстве**.

Симулятор позволяет:

* наблюдать орбиты небесных тел
* визуализировать освещение
* видеть тени
* наблюдать **солнечные и лунные затмения**
* управлять временем симуляции

Проект создаётся для **образовательных и демонстрационных целей**.

---

# 👨‍💻 Команда

Команда №46

* Краснопольский Арсений
* Бакирова Полина
* Наталенко Михаил
* Кирпичёв Евгений
* Горбунова Екатерина

Контакт:
**Краснопольский Арсений**
Telegram: `@viennall`

---

# ⚙️ Технологии

| Технология | Назначение               |
| ---------- | ------------------------ |
| TypeScript | основной язык разработки |
| Three.js   | 3D графика               |
| Vite       | dev-сервер и сборка      |
| Node.js    | среда выполнения         |
| Git        | контроль версий          |
| GitHub     | совместная разработка    |

---

# 🧰 Требования

Перед запуском необходимо установить:

* Node.js **20 LTS**
* npm
* Git

Проверка:

```bash
node -v
npm -v
git --version
```

---

# 🚀 Быстрый запуск

## 1. Клонировать репозиторий

```bash
git clone https://github.com/earth-moon-sun-simulator/earth-moon-sun-web.git
```

Перейти в папку проекта:

```bash
cd earth-moon-sun-web
```

---

## 2. Переключиться на ветку разработки

```bash
git checkout dev
```

---

## 3. Установить зависимости

```bash
npm install
```

---

## 4. Запустить dev-сервер

```bash
npm run dev
```

Открыть в браузере:

```
http://localhost:5173
```

---

# 👨‍💻 Настройка проекта для команды

Этот раздел предназначен для **участников проекта**.

## Первый запуск

Каждый разработчик должен выполнить:

```bash
git clone https://github.com/earth-moon-sun-simulator/earth-moon-sun-web.git
cd earth-moon-sun-web
git checkout dev
npm install
npm run dev
```

---

# 🔧 Рабочий процесс (Git workflow)

Основные ветки:

```
main  → стабильная версия
dev   → основная разработка
```

Для каждой задачи создаётся отдельная ветка.

## Создание ветки

```bash
git checkout dev
git pull
git checkout -b feature/название-задачи
```

Пример:

```bash
git checkout -b feature/moon-orbit
```

---

## После завершения задачи

```bash
git add .
git commit -m "Add moon orbit simulation"
git push
```

После этого создаётся **Pull Request → dev**.

---

# 🏗 Архитектура проекта

```
Physics Engine
      ↓
Orbit Calculations
      ↓
Three.js Scene
      ↓
Rendering
```

---

# 📁 Структура проекта

```
src
 ├ core
 │   physics.ts
 │
 ├ objects
 │   sun.ts
 │   earth.ts
 │   moon.ts
 │
 ├ scene
 │   scene.ts
 │
 ├ ui
 │   controls.ts
 │
 └ main.ts
```

---

# 🛰 Планируемый функционал

* 3D модель системы Земля–Луна–Солнце
* движение Земли вокруг Солнца
* движение Луны вокруг Земли
* визуализация орбит
* симуляция освещения
* солнечные затмения
* лунные затмения
* управление временем симуляции

---


