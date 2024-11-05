const Tododata = (props) => {
    console.log(props)
    const { Tên, Tuổi, data } = props;
    return (
        <div className="todo-data">
            <div>Họ và Tên: {Tên}</div>
            <div>Tuổi: {Tuổi}</div>
            <div>learning react</div>
            <div>watching youtube</div>


            <div>
                {JSON.stringify(props.todolist)}
            </div>

        </div>
    )
}
export default Tododata;