const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  const { userId, amount, description } = req.body;

  try {
    const expense = new Expense({ userId, amount, description });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error saving expense', error: error.message });
  }
};

const getExpenses = async (req, res) => {
  const { userId } = req.query;

  try {
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error: error.message });
  }
};

module.exports = { addExpense, getExpenses };
