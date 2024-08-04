

export const NewTask = () => {



    return (
        <>
        <h1 className='addNewTask'>Add New Task</h1>
            <section id ="create-page">
                <form id="create" method="POST">
                    <label htmlFor="task-title">Task Name</label>
                    <input type="text" id="name" name="taskName" placeholder="Task name..." className='parameters'/>
                    <hr />
                    <label htmlFor="task-title">Description</label>
                    <input type="textarea" id="description" name="description" placeholder="Description..." className='parameters'/>
                    <hr />
                    <button type="submit" className="addPetBtn">Add</button>
                </form>
            </section>
        </>
    )
}