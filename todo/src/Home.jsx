import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

const Home = () => {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

   

    const handleDelete = (id) =>{
         axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
             console.log(result)
        })
        .catch(err => console.log(err))
        
    }
  return (
    <div>
        <h2>Todo List</h2>
        <Create setTodos={setTodos}/>
        {
            todos.length === 0 ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                    {todo.task}
                    <div>
                        <span onClick={() => handleDelete(todo._id)}>delete</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home