import { useState } from "react"; // Import hook useState để quản lý trạng thái của component

// Khởi tạo component Todonew
const Todonew = (props) => {
    // Khởi tạo state "valueInput" để lưu giá trị nhập vào ô input
    const [valueInput, setvalueInput] = useState("")

    const { addNewTodo } = props; // Lấy hàm addNewTodo từ props

    // Hàm Click được gọi khi nhấn nút ADD
    const Click = () => {
        alert("Click thực hiện thêm mới thành công"); // Hiển thị thông báo khi thêm thành công
        addNewTodo(valueInput); // Gọi hàm addNewTodo với giá trị nhập từ ô input
        setvalueInput(""); // Đặt lại giá trị ô input về rỗng sau khi thêm
    }

    // Hàm Change được gọi khi có sự thay đổi trong ô input
    const Change = (event) => {
        setvalueInput(event.target.value); // Cập nhật giá trị của state "valueInput" với giá trị mới
    }

    // Phần JSX trả về giao diện cho component
    return (
        <div className="todo-new"> {/* Div chứa giao diện thêm todo mới */}
            <input
                type="text"
                onChange={Change} // Gọi hàm Change khi có sự thay đổi trong ô input
                value={valueInput} // Liên kết giá trị của ô input với state valueInput
            />

            <button onClick={Click}>ADD</button> {/* Nút để thêm todo mới, gọi hàm Click khi nhấn */}
            <div className="todo-conntent">Xuất ra màn hình nội dung sau: {valueInput} </div> {/* Hiển thị giá trị nhập vào */}
        </div>
    )
}

export default Todonew; // Xuất component Todonew để sử dụng trong các file khác
