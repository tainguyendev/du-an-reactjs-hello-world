import { useState } from "react";

const Todonew = (props) => {

    const [valueInput, setvalueInput] = useState("")

    const { addNewTodo } = props;

    const Click = () => {
        alert("Click thực hiện thêm mới thành công");
        addNewTodo(valueInput);
        setvalueInput("");
    }


    const Change = (event) => {
        setvalueInput(event.target.value);
    }


    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={Change}
                value={valueInput}
            />

            <button onClick={Click}>ADD</button>
            <div className="todo-conntent">Xuất ra màn hình nội dung sau: {valueInput} </div>
        </div>
    )
}

export default Todonew; 
