import { useState } from "react";

const Todonew = (props) => {
    const [valueInput, setvalueInput] = useState("Họ Tên")

    const { addNewTodo } = props;
    // addNewTodo()
    const Click = () => {
        alert("Click thực hiện thêm mới thành công")
        console.log(valueInput)
    }
    const Change = (event) => {
        setvalueInput(event.target.value)
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={Change} />
            <button onClick={Click}>ADD</button>
            <div>Xuất ra màn hình nội dung sau: {valueInput} </div>
        </div>
    )
}
export default Todonew;