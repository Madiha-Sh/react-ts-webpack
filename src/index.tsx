import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  isComplete: boolean
}
 
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, {text, isComplete: false}]
    setTodos(newTodos)
  }

  const isCompleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].isComplete = !newTodos[index].isComplete 
    setTodos(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return ( 
    <Fragment>
      <h1>Todo List</h1> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => {
          setValue(e.target.value)
        }} required/>
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => 
        <Fragment key={index}>
          <div style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>{todo.text}</div>
          <button type='button' onClick={() => isCompleteTodo(index)}>{todo.isComplete? 'Incomplete' : 'Complete'}</button>
          <button type='button' onClick={() => removeTodo(index)}>&times;</button>
        </Fragment>
        )}
      </section>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root)
