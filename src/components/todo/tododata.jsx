const Tododata = (props) => {
    const { todolist, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className="todo-data">
            {todolist.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button
                            onClick={() => handleClick(item.id)}>Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Tododata;
