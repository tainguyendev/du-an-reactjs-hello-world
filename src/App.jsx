import './components/todo/todo.css';
import Tododata from './components/todo/tododata';
import Todonew from './components/todo/todonew';
const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Todonew />
        <Tododata />
      </div>
    </>
  )
}

export default App
