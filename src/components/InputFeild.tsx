import React, { useRef } from 'react'



interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=> void;
}

const InputFeild:React.FC<Props> =({todo, setTodo, handleAdd}) =>{

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <form className='input' onSubmit={(e) => handleAdd(e)}>
            <input
                type="text"
                ref={inputRef}
                value={todo}
                onChange = {(e) => setTodo(e.target.value)}
                placeholder='Enter a task'
                className='input__box' />
            <button className='input_submit'  onClick={handleAdd} type='submit'>Go</button>
       </form>
    </div>
  )
}

export default InputFeild