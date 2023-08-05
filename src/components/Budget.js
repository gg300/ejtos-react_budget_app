import React, {  useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [budget,setbudget]= useState("2000")
    const { expenses , Currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if (budget>20000){
        alert("The budget cannot exceed 20.000")
        setbudget("20000")
    }
    if(budget<totalExpenses){
        alert("The budget cannot be lower than the spending")
        setbudget("20000")
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} <input
                        required='required'
                        type='number'
                        value={budget}
                        style={{ size: 10}}
                        onChange={(event) => setbudget(event.target.value)}
                    >
                        </input></span>
            
        </div>
    );
};
export default Budget;