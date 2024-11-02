const Tododata = (props) => {
    const { Tên, Tuổi, data } = props;
    console.log(props)
    return (
        <div className="todo-data">
            <div>Họ và Tên: {Tên}</div>
            <div>Tuổi: {Tuổi}</div>
            <div>learning react</div>
            <div>watching youtube</div>
        </div>
    )
}
export default Tododata;