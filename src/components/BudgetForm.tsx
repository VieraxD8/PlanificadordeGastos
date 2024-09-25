import { useState, useMemo, FormEvent } from "react"
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {

    const [ budget, setBubget] = useState(0);
    const { dispatch } = useBudget()

    /*esto es para cuando colocan un valor en el input de dinero */
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        setBubget(e.target.valueAsNumber)
    }

    /*validaremos lo que colocan en el input de dinero */
    const isValid = useMemo( () => {

        return(isNaN(budget)) || budget <= 0

    }, [budget])

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch( {type: 'add-budget', payload: {budget} })
        
    }

  return (
    <form className='space-y-5'  onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-5'> 
            <label htmlFor="buget" className='text-4xl text-blue-600 font-bold text-center'>
                Definir Presupuesto
            </label>
        </div>
        
       <input 
            id="budget"
            type="number" 
            className='w-full bg-white border bordger-gray-200 p-2'
            placeholder='Define tu presupuesto'
            name='budget'
            value={budget}
            onChange={handleChange}
        />

        <input 

            type="submit" 
            className='bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white font-black uppercase disabled:opacity-40'
            value='Definir Presupuesto'
            disabled={isValid}
          
        />

    </form>
  )
}
