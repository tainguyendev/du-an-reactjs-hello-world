import './components/todo/todo.css';
import Tododata from './components/todo/tododata';
import Todonew from './components/todo/todonew';
import LogoImage from './assets/react.svg';


const App = () => {
  const addNewTodo = () => {
    alert(`bạn đã thêm mới thành công ${age} `)
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
        />
        <div className="todo-image">
          <img src={LogoImage} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
