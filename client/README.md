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
│   │   │   ├── InputDiscription/
│   │   │   │   ├── InputDiscription.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputEmail/
│   │   │   │   ├── InputEmail.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputFirstName/
│   │   │   │   ├── InputFirstName.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputLastName/
│   │   │   │   ├── InputLastName.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputPassword/
│   │   │   │   ├── InputPassword.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── InputSetMasseg/
│   │   │   │   ├── InputSetMasseg.module.scss
│   │   │   │   └── index.tsx
│   │   │   └── InputTitle/
│   │   │       ├── InputTitle.module.scss
│   │   │       └── index.tsx
│   │   └── LayOut/                      # Компоновка страниц
│   ├── hooks/                           # Пользовательские React-хуки
│   │   ├── useAuth.ts
│   │   └── useChat.ts
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
│   │   ├── Main.scss
│   │   ├── Mixins.scss
│   │   ├── MixinsButton.scss
│   │   ├── MixinsInputs.scss
│   │   ├── Reset.scss
│   │   └── Variables.scss
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