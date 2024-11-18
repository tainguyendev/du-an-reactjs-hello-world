import './components/todo/todo.css';
import Tododata from './components/todo/tododata';
import Todonew from './components/todo/todonew';
import LogoImage from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todolist, settodolist] = useState([]);

  const addNewTodo = (name) => {
    alert(`Xin chào ${name} đã quay trở lại`);

    const newTodo = {
      id: RandomSTT(1, 1000),
      name: name,
    };
    settodolist([...todolist, newTodo]);
  };

  const RandomSTT = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <div className="todo-image">
          <img src={LogoImage} className='logo' />
        </div>
        <Todonew addNewTodo={addNewTodo} />
        <Tododata todolist={todolist} />
      </div>
    </>
  );
}

export default App;
