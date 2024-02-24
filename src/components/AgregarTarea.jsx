/* eslint-disable react/prop-types */
import { useState } from "react"


export const AgregarTarea = ({agregarTarea}) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = (event) => {
    setInputValue(event.target.value);
}
const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue)
    
}

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="ingresa tarea nueva"
        value ={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
