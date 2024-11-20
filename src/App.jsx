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
  const deleteTodo = (id) => {
    alert(`id của phần tử ${id} đã được xóa`)
    const xoa = todolist.filter(item => item.id !== id)
    // Tạo một mảng các số

    // Sử dụng vòng lặp for để lặp qua từng phần tử trong mảng
    for (let i = 0; i < xoa.length; i++) {
      console.log(xoa[i].id);
    }
    settodolist(xoa);


  }


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Todonew addNewTodo={addNewTodo} />

        {todolist.length > 0 ? // điều kiện toán tử đúng sai
          <Tododata
            todolist={todolist}
            deleteTodo={deleteTodo}
          />
          :
          <div className="todo-image">
            <img src={LogoImage} className='logo' />
          </div>
        }

      </div>
    </>
  );
}

export default App;
