import { useState } from "react";

const Todonew = (props) => {
    const [valueInput, setvalueInput] = useState()

    const { addNewTodo } = props;
    // addNewTodo()


    const Click = () => {
        alert("Click thực hiện thêm mới thành công")//thông báo
        addNewTodo(valueInput)//thực hiện add nội dung vừa ghi ra màn hình
        setvalueInput("")//thêm dòng này khi ấn thì dữ liệu trong ô seach về rỗng
    }


    const Change = (event) => {
        setvalueInput(event.target.value)
    }


    return (
        <div className="todo-new">
            <input type="text" onChange={Change}
                value={valueInput}//thêm hàm này để khi add xong tự động xóa dữ liệu ô seach
            />

            <button onClick={Click}>ADD</button>
            <div>Xuất ra màn hình nội dung sau: {valueInput} </div>
        </div>
    )
}
export default Todonew;