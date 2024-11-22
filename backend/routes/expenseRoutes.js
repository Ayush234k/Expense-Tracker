const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');

const router = express.Router();

router.post('/sms', addExpense);
router.get('/', getExpenses);

module.exports = router;
