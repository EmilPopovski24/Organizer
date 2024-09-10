


const [values, setValues] = useState({
    taskName: '',
    taskDescription: '',
    taskDate: '',
})

const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value} ))
}

const onSubmit = (e) => {
    e.preventDefault();
    onNewTaskSubmit(values);
}
