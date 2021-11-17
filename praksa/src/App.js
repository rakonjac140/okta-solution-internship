import { useState } from 'react'
import Header from './components/Header';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';
import Filter from './components/Filter';



const App = () => {

  const [showAddExpense, setShowAddExpense] = useState(false)
  const [expenses, setExpenses] = useState([
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14).toDateString(),
      },
      { id: "e2", 
        title: "New TV", 
        amount: 799.49, 
        date: new Date(2021, 2, 12).toDateString() },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28).toDateString(),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12).toDateString(),
      },
  ] )
  const [tempExpenses, setTempExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14).toDateString(),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12).toDateString() },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28).toDateString(),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12).toDateString(),
    },
] )

  //AddExpense
  const addExpense = (expense) => {
    const id = Math.floor(Math.random() * 
    10000) + 1

    const newExpense = { id, ...expense }
    
    setExpenses([...expenses, newExpense])
    setTempExpenses([...tempExpenses, newExpense])
    setShowAddExpense(false)
  }



  //delete expense 
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !==id))
    setTempExpenses(tempExpenses.filter((expense) => expense.id !==id))
  }

  //filter
  const handleFilterChange = year => {
      expenses.length = 0

    for(var te of tempExpenses)
      expenses.push(te)
    setExpenses(expenses.filter((expense) => new Date(expense.date).getFullYear() == year))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddExpense(!showAddExpense)} showAdd={showAddExpense}/>
      {showAddExpense && <AddExpense onAdd={addExpense} />}
      <Filter handleFilterChange = {handleFilterChange}/>
      {expenses.length > 0 ? (
      <Expenses expenses = {expenses} onDelete=
      {deleteExpense}/> 
      
      ) : ( 
        'No Expenses To Show'
      )}
    
    </div>
  )
}



export default App;
