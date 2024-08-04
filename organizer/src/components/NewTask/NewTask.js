

export const NewTask = () => {



    return (
        <>
        <h1 className='addNewTask'>Add New Task</h1>
            <section id ="create-page">
                <form id="create" method="POST">
                    <label htmlFor="task-name">Task Name</label>
                    <input type="text" id="taskName" name="taskName" placeholder="Task name..." className='parameters'/>
                    <hr />
                    <label htmlFor="description">Description:</label>
                    <textarea className="description" name="task-description" id="task-description" required></textarea>
                    <hr />
                    <label htmlFor="date">Date</label>
                    <input type="datetime-local" id="task-datedate" name="task-date" className='parameters'/>
                    <hr />
                    <button type="submit" className="addTaskBtn">Add</button>
                </form>
            </section>
        </>
    )
}