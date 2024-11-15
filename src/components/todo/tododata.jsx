const Tododata = (props) => {
    const { todolist } = props; // Lấy danh sách todo từ props

    return (
        <div className="todo-data"> {/* Div chứa danh sách todos */}
            {todolist.map((item, index) => { // Duyệt qua từng item trong todolist
                return (
                    <div className="todo-item" key={item.id}> {/* Mỗi todo được hiển thị trong một div với key là id */}
                        <div>{item.name}</div> {/* Hiển thị tên của todo */}
                        <button>Delete</button> {/* Nút để xóa todo, có thể thêm chức năng sau */}
                    </div>
                )
            })}
        </div>
    )
}

export default Tododata; // Xuất component Tododata để sử dụng trong các file khác
