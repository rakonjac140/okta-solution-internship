import { FaTimes } from 'react-icons/fa'
const Expense = ({ expense, onDelete }) => {
    return (
        <div className= 'expense' >
            
            <h3>
                {expense.title}{' '}
                <FaTimes 
                style={{color:'red', cursor: 
                'pointer'}} 
                onClick={() => onDelete(expense.id)} 
                />
            </h3>
            <p>{expense.amount}$</p>
           <p>{new Date(expense.date).toDateString()}</p>
        </div>
    )
}

export default Expense
