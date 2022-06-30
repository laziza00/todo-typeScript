import React from 'react'
import { Todo } from '../model'
import SIngleTodo from './SIngleTodo'

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({todos, setTodos}: Props) {
  return (
    <div className='container'>
      <div className='todos'>
      <span className='todos__heading'>Active Tasks</span>
      {todos.map((todo) => (
            <SIngleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}

      </div>
    </div>

  )
}

export default TodoList