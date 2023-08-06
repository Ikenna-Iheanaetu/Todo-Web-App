import React from 'react'
import './style.css'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({ todo, setTodos }: Props ) {
  return (
    <div className='todos'>
      {TodoList.map((todo) => {
        return 
      })}
    </div>
  )
}

export default TodoList
