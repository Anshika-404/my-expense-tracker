import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SummaryPanel from './components/SummaryPanel';
import CurrencyConverter from './components/CurrencyConverter'; 
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

 
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  
return (
  <div className="main-layout">
    <header>
      <h1>Expense Tracker</h1>
    </header>

    <div className="grid-container">
      <section className="controls">
        <SummaryPanel expenses={expenses} total={totalAmount} />
        <CurrencyConverter total={totalAmount} />
        <ExpenseForm onAddExpense={addExpense} />
      </section>

      <section className="history">
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </section>
    </div>
  </div>
);
}

export default App;