## Подготовка к старту

- Склонируйте репозиторий
- Установите зависимости командой, если используете npm:

```bash
npm install
```

## Запуск проекта локально в IDE

```bash
npm run dev
```
В консоли увидите что-то похожее:

```bash
> nextjs@0.1.0 dev
> next dev --webpack

▲ Next.js 16.1.6 (webpack)
- Local:         http://localhost:3000
- Network:       http://*********:3000
- Environments: .env.local
- Experiments (use with caution):
  · optimizePackageImports

✓ Starting...
✓ Ready in 7.2s
```
После чего необходимо откыть [http://localhost:3000](http://localhost:3000) в браузере

Отобразится окно с двумя кнопками:
- "Make a Reservation" - форма бронирования столика в ресторане
- "Login to Portal" - админ панель для персонала

## Деплой

https://resto.skroy.ru/ - тестовое окружение

## Общая информация

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
