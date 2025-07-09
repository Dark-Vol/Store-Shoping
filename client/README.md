# Client Directory Structure

### 1. Технологии и библиотеки

Клиентская часть реализована с использованием современного стека технологий:

* **React** — основная библиотека для построения пользовательского интерфейса.
* **TypeScript** — для типизации кода и повышения надежности.
* **Redux Toolkit** — управление состоянием приложения.
* **React Router DOM** — маршрутизация внутри приложения.
* **Axios** — библиотека для выполнения HTTP-запросов.
* **Framer Motion** — анимации и визуальные эффекты.
* **Socket.IO Client** — взаимодействие с сервером в реальном времени.
* **Sass** — препроцессор для стилей с возможностью модульного подключения.
* **Тестирование:**

  * `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event` — для написания и запуска тестов.
* **Инструменты разработки и качества кода:**

  * ESLint, TypeScript ESLint, плагины для React и Vite обеспечивают стандартизацию и контроль качества кода.
* **Другие библиотеки:**

  * `classnames` — для удобного управления классами CSS,
  * `lucide-react` — иконки,
  * `react-content-loader` — отображение загрузочных состояний,
  * `react-paginate` — пагинация.

### 2. Структура проекта

* **Компоненты** — функциональные React-компоненты с разделением по зонам ответственности.
* **Сторы (Redux Toolkit)** — централизованное управление состоянием.
* **Стили** — модули Sass с логическим разделением и переиспользованием.
* **Маршруты** — конфигурация навигации для удобства пользователей.
* **Тесты** — покрытие ключевых компонентов и функций тестами для обеспечения стабильности.

### 3. Особенности реализации

* Активное использование хуков React для управления состоянием и жизненным циклом компонентов.
* Использование lazy loading и динамического импорта для оптимизации загрузки.
* Реализация анимаций для повышения интерактивности и пользовательского опыта.
* Интеграция с сервером через REST API и WebSocket для обмена данными в реальном времени.

---

## 📁 Структура проекта

```
client/
├── node_modules/                        # Установленные зависимости (автоматически создается npm/yarn)
├── public/                              # Публичные файлы, доступные напрямую по URL
│   └── assets/                          # Статические ресурсы: изображения, иконки и т.д.
│       ├── arrows/                      # Графика со стрелками (например, для UI)
│       ├── icons/                       # Иконки для интерфейса
│       ├── react.svg                    # Логотип React
│       └── vite.svg                     # Логотип Vite
├── src/                                 # Исходный код приложения
│   ├── components/                      # Повторно используемые UI-компоненты
│   │   ├── Buttons/                     # Различные кнопки приложения
│   │   │   ├── BtnChat/                 # Кнопка: открыть чат
│   │   │   │   ├── BtnChat.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BtnCloseTicket/          # Кнопка: закрыть запрос (ticket)
│   │   │   │   ├── BtnCloseTicket.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BtnLogin/                # Кнопка: вход в аккаунт
│   │   │   │   ├── BtnLogin.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BtnRegistration/         # Кнопка: регистрация (исправлено имя)
│   │   │   │   ├── BtnRegistration.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BtnSendMessage/          # Кнопка: отправить сообщение
│   │   │   │   ├── BtnSendMessage.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BtnStartChat/            # Кнопка: начать чат с админом
│   │   │   │   ├── BtnStartChat.module.scss
│   │   │   │   └── index.tsx
│   │   │   └── BtnThemeToggle/          # Кнопка: смена темы
│   │   │       ├── BtnThemeToggle.module.scss
│   │   │       └── index.tsx
│   │   ├── Chat/                         # Компоненты чата
│   │   │   ├── ChatContainer/
│   │   │   │   ├── ChatContainer.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── GetLayoutChat/
│   │   │   │   ├── GetLayoutChat.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── LoginForm/
│   │   │   │   ├── LoginForm.module.scss
│   │   │   │   └── index.tsx
│   │   │   └── StartChatForm/
│   │   │       ├── StartChatForm.module.scss
│   │   │       └── index.tsx
│   │   ├── Footer/                      # Нижняя часть страницы
│   │   ├── Header/                      # Верхняя часть страницы
│   │   ├── Inputs/                      # Компоненты ввода
│   │   │   ├── InputDiscription/        # описание проблемы
│   │   │   │   ├── InputDiscription.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputEmail/              # ввод почты
│   │   │   │   ├── InputEmail.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputFirstName/          # ввод Имени
│   │   │   │   ├── InputFirstName.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputLastName/           # ввод Фамилии
│   │   │   │   ├── InputLastName.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputPassword/           # ввод Пароля
│   │   │   │   ├── InputPassword.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputSetMasseg/          # ввод Фамилии
│   │   │   │   ├── InputSetMasseg.module.scss
│   │   │   │   └── index.tsx
│   │   │   └── InputTitle/              # ввод Заголовка проблемы
│   │   │       ├── InputTitle.module.scss
│   │   │       └── index.tsx
│   │   └── LayOut/                      # Компоновка страниц
│   ├── hooks/                           # Пользовательские React-хуки
│   │   ├── useAuth.ts                   # для авторизации
│   │   └── useChat.ts                   # для чата, получение и отправкии сообщений
│   ├── pages/                           # Страницы приложения
│   │   ├── Admin/
│   │   │   ├── Admin.module.scss
│   │   │   └── index.tsx
│   │   ├── Error/
│   │   │   ├── Error.module.scss
│   │   │   └── index.tsx
│   │   ├── Home/
│   │   │   ├── Home.module.scss
│   │   │   └── index.tsx
│   │   ├── Login/
│   │   │   ├── Login.module.scss
│   │   │   └── index.tsx
│   │   ├── Preloader/
│   │   │   ├── Preloader.module.scss
│   │   │   └── index.tsx
│   │   ├── Products/
│   │   │   └── index.tsx
│   │   └── User/
│   │       ├── User.module.scss
│   │       └── index.tsx
│   ├── scss/                            # Общие SCSS-стили проекта
│   │   ├── Main.scss                    # Основной файл для стилей
│   │   ├── Mixins.scss                  # Миксины для повторного использования стилей
│   │   ├── MixinsButton.scss            # -||- для кнопок
│   │   ├── MixinsInputs.scss            # -||- для инпутов
│   │   ├── Reset.scss                   # для обнуление стилей
│   │   └── Variables.scss               # Этот файл содержит все переменные, используемые в проекте.
│   ├── types/                           # Пользовательские типы TypeScript
│   │   └── chat.ts
│   ├── main.tsx                         # Точка входа в приложение React
│   └── RouterSystem.tsx                # Система маршрутизации (React Router)
├── .gitignore                           # Исключения Git
├── eslint.config.js                     # Конфигурация ESLint
├── index.html                           # HTML-шаблон для сборки
├── package-lock.json                    # Фиксация зависимостей (авто)
├── package.json                         # Метаинформация и зависимости проекта
├── README.md                            # Документация проекта
├── tsconfig.app.json                    # TypeScript-конфигурация для приложения
├── tsconfig.json                        # Основной TypeScript-конфиг
├── tsconfig.node.json                   # TypeScript-конфиг для Node.js скриптов
└── vite.config.ts                       # Конфигурация сборщика Vite
```