# OpenCart Test Automation Framework

Фреймворк автоматизированного тестирования для демо-сайта интернет-магазина
[OpenCart](https://opencart.abstracta.us/) на Playwright + TypeScript.

Финальный проект курса AQA (Automation QA), демонстрирующий построение
UI-фреймворка end-to-end: от Page Object Model и переиспользуемых компонентов
до фабрик тестовых данных, аутентификации через `storageState` и CI/CD.

## Список тестов

1. Successful registration
2. Registration — DDT негативные кейсы:
   - пустое поле First Name
   - невалидный формат Email
   - слишком короткий Telephone
   - не отмечен чекбокс Privacy Policy
   - Password и Password Confirm не совпадают
3. Registration with already existing email
4. Successful login
5. Login — DDT негативные кейсы:
   - пустой Email
   - пустой Password
   - невалидный Email
   - неверный Password
   - пустые Email и Password одновременно
6. Login with password containing leading space
7. Adding a product to the cart and checking its name and quantity
8. Changing product quantity recalculates total number and sum
9. Removing the product from the cart
10. Applying an invalid coupon
11. Checkout — DDT негативные кейсы (обязательные billing-поля)
12. Checkout is blocked when Country is not selected
13. Checkout is blocked when Terms and Conditions is not accepted
14. Product price recalculates after currency switch
15. User makes search for a product and opens its card
16. Search — DDT негативные кейсы (нет результатов поиска)
17. **BUG** (`test.fail`): при пустом результате поиска сайт ошибочно
    показывает "Your shopping cart is empty!" вместо корректного сообщения
    об отсутствии результатов — задокументированный баг, тест намеренно
    ожидает падения
18. Adding a product to the wish list
19. e2e checkout, 1 товар, метод Cash On Delivery + комментарий
20. e2e checkout, несколько товаров, метод Bank Transfer

### Тесты с `test.fixme` (временно отключены)

При работе над последним шагом чекаута сайт ведёт себя нестабильно, из-за
чего эти тесты временно исключены из общего прогона:

21. e2e checkout — разбор таблицы order summary — тест написан, но пока
    не включён в общий прогон
22. Checkout is blocked when Region/State is not selected

## Архитектура

- **Page Object Model** — по одному классу на страницу (`pages/`), сложные
  многошаговые страницы (например, чекаут) разбиты на отдельные компоненты
  (`components/checkout/`)
- **Facade** (`facade/PurchaseFacade.ts`) — инкапсулирует сквозной сценарий
  оформления заказа, чтобы не дублировать шаги в разных e2e-тестах
- **Factories** (`factory/`) — генерация случайных пользователей и адресов
  вместо захардкоженных данных
- **Fixtures** (`fixtures/`) — переиспользуемые предусловия для тестов
  (например, товар уже добавлен в корзину)
- **Auth setup** (`tests/setup/auth.setup.ts`) — один раз перед прогоном
  регистрирует пользователя и сохраняет `storageState`, чтобы не логиниться
  в каждом тесте заново

Бизнес-проверки (`expect`) находятся только в файлах тестов. В нескольких
местах в компонентах и фасаде `expect()` всё же используется — но не как
проверка бизнес-логики, а как приём синхронизации (ожидание нужного
состояния UI перед следующим действием).

**Локаторы.** По умолчанию используются `getByRole`/`getByLabel`/`getByTestId`.
Там, где разметка сайта не позволяла однозначно определить элемент только
этими способами (например, несколько элементов с одинаковой ролью, или
Bootstrap подменяет `title` на `data-original-title`), применялись точечные
CSS-локаторы.

**Общая сессия (`storageState`).** Тесты используют общую сессию вместо
изолированного пользователя на каждый тест — сознательный trade-off между
скоростью выполнения и полной изоляцией.

**Тест на валидный купон** сознательно пропущен — нет доступа к номеру
действующего купона.

## Технические примечания

- **HTTPS-сертификат сайта.** 03.08 у тестового сайта `opencart.abstracta.us`
  истёк сертификат HTTPS. Чтобы прогон не падал на этом, в `playwright.config.ts`
  добавлено:
  ```typescript
  ignoreHTTPSErrors: true,
  ```

## Allure Report

Отчёт последнего прогона в CI публикуется на GitHub Pages:
[https://olga-kirienko.github.io/FinalProject/](https://olga-kirienko.github.io/FinalProject/)

## Структура проекта

```
├── components/         # переиспользуемые UI-компоненты (Header, шаги чекаута)
├── facade/              # сценарии в один вызов (полный чекаут)
├── factory/             # генерация случайных пользователей/адресов
├── fixtures/             # кастомные Playwright-фикстуры
├── pages/               # Page Object классы
├── test-data/            # статичные тестовые данные и DDT-кейсы
├── tests/                # сами тесты
│   └── setup/            # auth.setup.ts — подготовка storageState
├── types/                # TypeScript-интерфейсы
└── playwright.config.ts
```

## Установка

```bash
git clone https://github.com/Olga-Kirienko/FinalProject.git
cd FinalProject
npm install
npx playwright install --with-deps
```

## Запуск тестов

Запустить все тесты (headless, во всех сконфигурированных проектах):

```bash
npx playwright test
```

Запустить тесты в конкретном файле:

```bash
npx playwright test tests/login.spec.ts
```

Запустить в headed-режиме (с видимым браузером):

```bash
npx playwright test --headed
```

Запустить в UI-режиме Playwright (интерактивный раннер):

```bash
npx playwright test --ui
```

Посмотреть HTML-отчёт после прогона:

```bash
npx playwright show-report
```

> Перед прогоном UI-тестов автоматически выполняется проект `setup`
> (`auth.setup.ts`), который регистрирует нового пользователя и сохраняет
> сессию в `.auth/user.json` — остальным тестам логиниться заново не нужно.

## Проверка кода (lint/format)

```bash
npm run lint        # проверить код ESLint
npm run lint:fix     # автоматически исправить, что можно
npm run format       # отформатировать Prettier
```

## CI/CD

При каждом push и pull request в ветку `main` тесты автоматически
запускаются в GitHub Actions (`.github/workflows/playwright.yml`).
При падении тестов в артефакты прогона сохраняются скриншоты, видео и трейсы
для разбора причин.

