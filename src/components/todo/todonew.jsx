const Todonew = (props) => {
    console.log(props)
    const { addNewTodo } = props;
    addNewTodo()
    const Click = () => {
        alert("Click thực hiện thêm mới thành công")
    }
    const Change = (event) => {
        console.log(event.target.value)
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={Change} />
            <button onClick={Click}>ADD</button>
        </div>
    )
}
export default Todonew;