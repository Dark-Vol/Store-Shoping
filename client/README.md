# Client Directory Structure

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
│   │   │   │   ├── BtnChat.module.scss  # Стили кнопки
│   │   │   │   └── index.tsx            # Компонент кнопки
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
│   │   │   ├── GetLayoutChat/
│   │   │   ├── LoginForm/
│   │   │   └── StartChatForm/
│   │   ├── Footer/                      # Нижняя часть страницы
│   │   ├── Header/                      # Верхняя часть страницы
│   │   ├── Inputs/                      # Компоненты ввода
│   │   └── LayOut/                      # Компоновка страниц
│   ├── hooks/                           # Пользовательские React-хуки
│   ├── pages/                           # Страницы приложения
│   │   ├── Admin/                       # Модуль администратора
│   │   ├── Error/                       # Страницы ошибок (например, 404)
│   │   ├── Home/                        # Главная страница
│   │   ├── Login/                       # Страница входа
│   │   ├── Preloader/                   # Компоненты загрузки
│   │   ├── Products/                    # Страница товаров
│   │   └── User/                        # Страница пользователя
│   ├── scss/                            # Общие SCSS-стили проекта
│   ├── types/                           # Пользовательские типы TypeScript
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