client/
├── node_modules/           # Установленные зависимости
├── public/                 # Публичные ресурсы (не проходят через сборщик)
│   └── assets/             # Статические файлы
│       ├── arrows/
│       ├── icons/
│       ├── react.svg
│       └── vite.svg
├── src/                    # Исходный код приложения
│   ├── components/         # UI-компоненты
│   │   ├── Buttons/
│   │   ├── Chat/
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Inputs
│   │   └── LayOut
│   ├── hooks/              # Пользовательские хуки
│   ├── pages/              # Страницы по маршрутам
│   │   ├── Admin/
│   │   ├── Error/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Preloader/
│   │   ├── Products/
│   │   └── User/
│   ├── scss/               # SCSS-стили
│   ├── types/              # Пользовательские типы TypeScript
│   ├── main.tsx            # Точка входа
│   └── RouterSystem.tsx    # Система маршрутизации
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
