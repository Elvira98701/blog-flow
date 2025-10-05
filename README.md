# Blog-Flow (Админ панель)

В разработке

## Архитектура проекта

```text
app/                # Next.js маршруты + API routes
components/         # Переиспользуемые UI-компоненты (UI kit)
constants/          # Константы проекта
features/           # Конкретные фичи (createPost, commentsList и т.д.)
hooks/              # Глобальные кастомные хуки
lib/                # Хелперы, утилиты (getRandomNumber и подобные)
prisma/             # Модели Prisma, seed, миграции
providers/          # Провайдеры контекста, темы, queryClient и т.д.

services/           # Слой работы с данными
  api/              # Клиентский слой (fetch через jsonApiInstance)
    posts-api.ts
    comments-api.ts
    likes-api.ts
  db/               # Серверный слой (Prisma, репозитории)
    posts-repo.ts
    comments-repo.ts
    likes-repo.ts

styles/             # Глобальные стили
types/              # Глобальные типы/DTO


