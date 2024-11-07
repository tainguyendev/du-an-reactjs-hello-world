import './components/todo/todo.css'; // Import file CSS để style cho component Todo
import Tododata from './components/todo/tododata'; // Import component Tododata dùng để hiển thị danh sách todos
import Todonew from './components/todo/todonew'; // Import component Todonew dùng để thêm một todo mới
import LogoImage from './assets/react.svg'; // Import hình ảnh logo React để hiển thị
import { useState } from 'react'; // Import hook useState để quản lý trạng thái của component

// Khởi tạo component App
const App = () => {
  // Khởi tạo state "todolist" để lưu danh sách các todo
  const [todolist, settodolist] = useState([
    // Danh sách các todo có thể được khởi tạo ở đây
    // Ví dụ:
    // { id: 1, name: "learning react" },
    // { id: 2, name: "watching youtube" }
  ])

  // Hàm addNewTodo dùng để thêm một todo mới vào danh sách
  const addNewTodo = (name) => {
    // Hiển thị thông báo khi thêm mới
    alert(`Xin chào ${name} đã quay trở lại`)

    // Tạo một đối tượng todo mới với id ngẫu nhiên và tên đã nhập
    const newTodo = {
      id: RandomSTT(1, 1000), // Gán id ngẫu nhiên từ 1-1000 để tránh trùng lặp
      name: name
    }
    // Cập nhật lại state "todolist" bằng cách thêm newTodo vào danh sách hiện tại
    settodolist([...todolist, newTodo])
  }

  // Hàm RandomSTT tạo id ngẫu nhiên trong khoảng từ min đến max
  const RandomSTT = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Tạo số nguyên ngẫu nhiên từ min đến max
  }

  // Phần JSX trả về giao diện người dùng
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div> {/* Tiêu đề của danh sách todo */}
        <div className="todo-image">
          <img src={LogoImage} className='logo' /> {/* Hiển thị logo */}
        </div>
        {/* Component Todonew với props addNewTodo để thêm todo mới */}
        <Todonew x={addNewTodo} />
        {/* Component Tododata với props todolist để hiển thị danh sách todos */}
        <Tododata todolist={todolist} />
      </div>
    </>
  )
}

export default App; // Xuất component App để sử dụng trong các file khác
