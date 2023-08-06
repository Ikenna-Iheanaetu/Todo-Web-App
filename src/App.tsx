import InputField from "./components/InputField"
import './App.css'
import { useState } from "react"
import TodoList from "./components/TodoList"

const App: React.FC = () => {

  interface Todo {
    id: number,
    todo: string,
    isDone: boolean
  }



  const [ todo, setTodo ] = useState<string>('')
  const [ todos, setTodos ] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false } ])
        setTodo('')
        console.log(todos);
        
    }

  }

  console.log(todo);
  

  return (
    <div className="App">
      <span className="heading">Task</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos=
      {setTodos} />
    </div>
  )
}

export default App