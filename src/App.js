import { useState } from 'react';
import './App.css';



function App() {

    const [budgetInput, setBudgetInput] = useState('');
    const [expenseDescInput, setExpenseDescInput] = useState('');
    const [expenseAmtInput, setExpenseAmtInput] = useState('');
    const [budget, setBudget] = useState('');
    const [expenseDesc, setExpenseDesc] = useState(0);
    const [expenseAmt, setExpenseAmt] = useState(0);

    const [currentBalance, setCurrentBalance] = useState('');

  
    const handleBudgetChange = (e) => {
        setBudgetInput(e.target.value);
    }
  
    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        setBudget(budgetInput);
        handleBalanceChange(budgetInput);
        setBudgetInput('');
    }
  
    const handleExpenseDescChange = (e) => {
        setExpenseDescInput(e.target.value);
    }
  
    const handleExpenseAmtChange = (e) => {
        setExpenseAmtInput(e.target.value);
    }
  
    const handleExpenseSubmit = (e) => {
      e.preventDefault();
      setExpenseDesc(expenseDescInput);
      setExpenseAmt(expenseAmtInput);
      handleBalanceChange(expenseAmtInput);
      setExpenseDescInput('');
      setExpenseAmtInput('');
    }

    const handleBalanceChange = () => {
      setCurrentBalance(currentBalance);
    };

  return (
    <div>
      <h2>Budget Calculator</h2>
      <div>
        <h2>Budget</h2>
        <input 
            type="number" 
            placeholder='what is your budget?'
            value={budgetInput}
            onChange={handleBudgetChange}
        />
        <button onClick={handleBudgetSubmit}>Calculate</button>
      </div>

      <div>
        <h2>Expenses</h2>

        <label>Expense Description</label>
        <input 
            type='text' 
            placeholder='What type of expense'
            value={expenseDescInput}
            onChange={handleExpenseDescChange}
        />

        <label>Expense Amount</label>
        <input 
            type="number" 
            placeholder='How much is the expense?'
            value={expenseAmtInput}
            onChange={handleExpenseAmtChange}
        />

        <button onClick={handleExpenseSubmit}>Calculate</button>
      </div>

      <div>

        <div>
          <h2>Budget</h2>
          <span>$ {budget}</span>
        </div>

        <div>
          <h2>Expenses</h2>
          <span>$ {expenseAmt}</span>
        </div>

        <div>
          <h2>Balance</h2>
          <span>$ {currentBalance + budget - expenseAmt}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
