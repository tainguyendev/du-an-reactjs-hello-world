const Tododata = (props) => {
    const { todolist } = props;
    return (
        <div className="todo-data">
            {todolist.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}


            <div>
                {JSON.stringify(props.todolist)}
            </div>

        </div>
    )
}
export default Tododata;