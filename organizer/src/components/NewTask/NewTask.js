import "./NewTask.css";
import { useForm } from "../../hooks/useForm";

export const NewTask = ({
    onNewTaskSubmit
}) => {

    const [values, setValues] = useForm({
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
    
    return (
        <>
            <section id ="create-page">
                <form className="create" onSubmit={onSubmit}>
                    <h1 className='addNewTask'>Add New Task</h1>

                    <label htmlFor="task-name">Task Name</label>
                    <input type="text" id="taskName" name="taskName" value ={values.taskName} onChange={onChangeHandler} placeholder="Task name..." className='parameters' required/>

                    <label htmlFor="description">Description</label>
                    <textarea id="taskDescription" name="taskDescription" value ={values.taskDescription} onChange={onChangeHandler} className='parameters' required></textarea>

                    <label htmlFor="date">Date</label>
                    <input type="datetime-local" id="taskDate" name="taskDate" value ={values.taskDate} onChange={onChangeHandler} className='parameters' required/>

                    <button type="submit" className="addTaskBtn">Add Task</button>
                </form>
            </section>
        </>
    )
}