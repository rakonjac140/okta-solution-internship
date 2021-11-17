import Expense from './Expense'

const Expenses = ({ expenses, onDelete }) => {
    return (
        <>
            {expenses.map((expense) => (
                <Expense 
                  key={expense.id} 
                  expense={expense} 
                  onDelete={onDelete} 
                />
            ))}
        </>
  )
    
}

export default Expenses
