/*

Todo list (array) 
En este ejemplo, el reducer gestiona un array de tareas. El array necesita ser actualizado sin mutación.

*/

// import { useState } from "react";
import React, { useReducer } from 'react';
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

/*
interface taskProps {
    id: number;
    text: string;
    done: boolean;
}
*/

//Los nombres de los tipos de acción son locales a tu componente. Cada acción describe una única interacción, aunque provoque múltiples cambios en los datos. La forma del estado es arbitraria, pero normalmente será un objeto o un array.

function tasksReducer(tasks: any, action: any) {
    switch(action.type) {
        case 'added': {
            // En su lugar, devuelve siempre nuevos objetos desde tu reducer:
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case 'changed': {
            return tasks.map((t: any) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t
                }
            })
        }
        case 'deleted': {
            return tasks.filter((t: any) => t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}


export const ItiReducer: React.FC = () => {
    // const [tasks, setTasks] = useState<taskProps[]>(initialTasks)
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    )

    function handleAddTasks(text: string) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    /*
    function handleAddTasks(text: string) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false,
            }
        ])
    }
    */

    function handleChangeTask(task: number) {
        dispatch({
            type: 'changed',
            task: task
        })
    }

    /*
    function handleChangeTask(task: any) {
        setTasks(
            tasks.map((t: any) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        )
    }
    */

    function handleDeleteTask(taskId: number) {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }

    /*
    function handleDeleteTask(taskId: number) {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }
    */

    return(
        <> 
            <h1> Itinerario en Praga </h1>
            <AddTask onAddTask={handleAddTasks}/>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visitar el Museo Kafka', done: true},
    {id: 1, text: 'Ver espectáculo de títeres', done: false},
    {id: 2, text: 'Foto del muro de Lennon', done: false},
]