// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть файли роутів
const nav = require('./nav')

// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/nav', nav)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
