import './components/todo/todo.css';
import Tododata from './components/todo/tododata';
import Todonew from './components/todo/todonew';
import LogoImage from './assets/react.svg';
import { useState } from 'react';


const App = () => {
  const [todolist, settodolist] = useState([
    { id: 1, name: "learning react" },
    { id: 2, name: "watching youtube" }
  ])

  const addNewTodo = (name) => {
    alert(`Xin chào ${name} đã quay trở lại`)

    const newTodo = {
      id: RandomSTT(1, 1000),//id thiết lập từ 1-1000 để random không bị trùng
      name: name
    }
    settodolist([...todolist, newTodo])//todolist là copylại, newtodo là lấy thông tin

  }

  const RandomSTT = (min, max) => {//khai báo random id khi ghi và ấn add sẽ không bị trùng id
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const name = "Nguyễn Tiến Tài";//(đây là props của thằng cha (App.jsx là cha))
  const age = 21;//(đây là props của thằng cha (App.jsx là cha))
  const data = {
    Address: "Bình thuận",
    country: "Việt nam"
  }//(đây là props của thằng cha (App.jsx là cha))
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Todonew
          addNewTodo={addNewTodo} />
        <Tododata
          Tên={name}//(đây là khai báo giá trị props của thằng cha (App.jsx là cha))
          Tuổi={age}//(đây là khai báo giá trị props của thằng cha (App.jsx là cha))
          data={data}//(đây là khai báo giá trị props của thằng cha (App.jsx là cha))

          todolist={todolist}

        />
        <div className="todo-image">
          <img src={LogoImage} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
