# По поводу Pixel Perfect

Pixel Perfect соответствие было ограничено тем, что исходные материалы представляли собой AI-generated изображения, а не полноценный дизайн-макет из Figma/Sketch с точными параметрами интерфейса.

В предоставленных изображениях отсутствовали:

- точные размеры элементов
- spacing system
- typography scale
- grid system
- состояния компонентов
- responsive behavior
- интерактивные состояния

Из-за этого некоторые значения приходилось интерпретировать и адаптировать вручную для сохранения:

- визуальной консистентности
- usability
- responsive behavior
- корректной работы интерфейса на разных устройствах

Основной фокус был сделан на:

- архитектуре приложения
- UX
- адаптивности
- интерактивности
- чистоте кода
- state management
- тестируемости проекта

---

---

---

---

---

## The Artisan Kiln — Test Assignment Notes

Проект реализован на:

- Next.js
- TypeScript
- Tailwind CSS
- Redux Toolkit

Также были использованы:

- React Hook Form + Zod для валидации
- Framer Motion для анимаций
- dnd-kit для drag & drop
- Vitest + React Testing Library для тестирования

## Что реализовано

### Responsive Layout

- Адаптивная mobile/desktop верстка
- Responsive typography и spacing
- Отдельное поведение для мобильных устройств
- Scroll-safe таблица корзины

### Shopping Cart

- Добавление плиток в корзину
- Удаление плиток
- Изменение количества
- Динамический расчет:
  - Subtotal
  - Shipping
  - Grand Total

- Подсветка корзины при взаимодействии через header

### Design Tool

- Интерактивная сетка 6x6
- Drag & Drop размещение плиток
- Поддержка touch devices
- Хранение состояния сетки в Redux Store

### Checkout Form

- Валидация полей через Zod
- Валидация email и credit card полей
- Переключение payment methods:
  - Credit Card
  - PayPal
  - Apple Pay
  - Bank Transfer

- Loading states
- Success modal
- Полный reset state после успешного submit

### State Management

В Redux Store вынесены:

- cart state
- design grid state
- UI interactions

### Testing

Реализованы:

- Unit tests
- Integration tests

Покрыты:

- reducers
- selectors
- validation schema
- business logic
- cart interactions
- checkout interactions
