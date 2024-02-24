import { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'
// eslint-disable-next-line react/prop-types
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? '✅' : '❌'}
    </li>
  )
}


const ListadoApp = () => {
    // eslint-disable-next-line no-unused-vars
    const addTasks = () => {
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    
    } //this will be use the spread op and will allow us to use the botton for adding another item to the array but since there is no unique key an error will appears after the first click

        
  let listadoSecciones = [
    {id:1, nombre: "lala", visto: true},
    {id:2, nombre: "dioa", visto: true},
    {id:3, nombre: "pepe", visto: true},
    {id:4, nombre: "coco", visto: true},
    {id:5, nombre: "lisa", visto: true},
    {id:6, nombre: "bart", visto: false},
    {id:7, nombre: "none", visto: false},
  ]

  const [arreglo, setArreglo] = useState(listadoSecciones)


  const onAddTask = (val) => {
    let valor = val.trim()
    if (valor < 1) return

    const envio = {
        id: arreglo.length + 1,
        nombre: valor,
        visto: false
    }
    setArreglo([...arreglo, envio])
  } 
  return (
    <>
        <h1>Listado de Temas del curso</h1>
        <AgregarTarea agregarTarea={onAddTask}></AgregarTarea>
        <ol>
        {arreglo.map(item => <Items nombre={item.nombre} visto = {item.visto} key={item.id}></Items>)}
        </ol>
    
    
    </>
  )
}

export default ListadoApp;
