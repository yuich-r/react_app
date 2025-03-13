import { useState } from 'react';
import './App.css';
import { InputForm } from './InputForm';

function App() {
  const [todos, setTodos] = useState([
  ]);

  let [test, setTest] = useState(0);
  console.log(test)
  const countup = () => {
    setTest(test + 1);
    console.log(test)
  }




  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   setTodos([...todos,{id:todos.length + 1,content:inputText,done:false}]);
  //   setInputText('');
  // }

  const handleOnToggle = (id) => {
    const newTodos = todos.map(
      (todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done }
        }
        return todo;
      }


    )
    setTodos(newTodos);
  }


  return (
    <div className="">
      <h1>
        TODO_app
      </h1>
      <h2>
        タスク
      </h2>
      <InputForm />

      <ol>
        {
          todos.map((todo) => (
            <li key={todo.id} style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              color: todo.done ? 'gray' : 'black'
            }}>
              <input type='checkbox' checked={todo.done} onChange={() => handleOnToggle(todo.id)}></input>
              {todo.content}
            </li>
          )
          )
        }

      </ol>


      <button onClick={countup}>{test}</button>
    </div>
  );
}

export default App;
