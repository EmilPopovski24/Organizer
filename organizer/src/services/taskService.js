import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/tasks";

// export const taskServiceFactory = (token) => {

    export const getAll = async() => {
        const result = await request.get(baseUrl)
        const tasks = Object.values(result);
        return tasks
    }

    export const addTask = async(taskData) => {
        const result = await request.post(baseUrl, taskData);
        return result
    }
 

// return {

// }

// }