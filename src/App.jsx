import './components/todo/todo.css';
import Tododata from './components/todo/tododata';
import Todonew from './components/todo/todonew';
import LogoImage from './assets/react.svg';


const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Todonew />
        <Tododata />
        <div className="todo-image">
          <img src={LogoImage} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
