const Tododata = (props) => {
    const { todolist } = props;

    return (
        <div className="todo-data">
            {todolist.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Tododata;
