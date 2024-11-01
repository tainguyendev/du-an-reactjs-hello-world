import './components/todo/todo.css';
const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <div>
          <input type="text" />
          <button>ADD</button>
        </div>
        <div>
          <div className="image">learning react</div>
        </div>
      </div>
    </>
  )
}

export default App
