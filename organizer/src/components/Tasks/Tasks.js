import { TaskItem } from "./TaskItem.js/TaskItem";

export const Tasks = ({
    tasks
}) => {
    return (
        <>
            <h3>My Tasks</h3>
            {tasks.map(x => <TaskItem key={x._id} {...x} />)}
            {tasks.length === 0 && (<h3>No tasks for now</h3>)}
        </>
    )
}