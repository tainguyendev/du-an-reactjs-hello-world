const Todonew = (props) => {
    console.log(props)
    const { addNewTodo } = props;
    addNewTodo("")
    return (
        <div className="todo-new">
            <input type="text" />
            <button>ADD</button>
        </div>
    )
}
export default Todonew;