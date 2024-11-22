import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

interface taskProps {
    id: number;
    text: string;
    done: boolean;
}

export const ItiReducer: React.FC = () => {
    const [tasks, setTasks] = useState<taskProps[]>(initialTasks)

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

    function handleDeleteTask(taskId: number) {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }

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