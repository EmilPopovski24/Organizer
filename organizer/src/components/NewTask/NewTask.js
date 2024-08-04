import "./NewTask.css";

export const NewTask = () => {



    return (
        <>
        
            <section id ="create-page">
                <form className="create" method="POST">
                    <h1 className='addNewTask'>Add New Task</h1>
                    <label htmlFor="task-name">Task Name</label>
                    <input type="text" id="taskName" name="taskName" placeholder="Task name..." className='parameters' required/>

                    <label htmlFor="description">Description:</label>
                    <textarea name="task-description" id="task-description" className='parameters' required></textarea>

                    <label htmlFor="date">Date</label>
                    <input type="datetime-local" id="task-datedate" name="task-date" className='parameters' required/>

                    <button type="submit" className="addTaskBtn">Add Task</button>
                </form>
            </section>
        </>
    )
}