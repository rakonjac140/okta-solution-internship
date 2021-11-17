import { useState } from "react"


const AddExpense = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a expense')
            return
        }
        
        onAdd({ title, amount, date })
    

        setTitle('')
        setAmount('')
        setDate('')

    }
    

    return (
        <form className='add-form' onSubmit=
        {onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input 
                type='Text' 
                placeholder='Add title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />

            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input 
                type='number' placeholder='Add amount' 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                />

            </div>
            <div className='form-control'>
                <label>Date</label>
                <input 
                type='date'
                placeholder=''
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                />

            </div>

            <input type='submit' value='Add Expense'
            className='btn btn-block' />
            
        </form>
    )
}

export default AddExpense
