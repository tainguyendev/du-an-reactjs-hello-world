import { useState } from "react";

const Todonew = (props) => {
    const [valueInput, setvalueInput] = useState()

    const { addNewTodo } = props;
    // addNewTodo()


    const Click = () => {
        alert("Click thực hiện thành công")
        addNewTodo(valueInput)
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