import React, { useState } from "react";

interface TaskListProps {
    tasks: any;
    onChangeTask: any;
    onDeleteTask: any;
}

interface TaskProps {
    task: any;
    onChange: any;
    onDelete: any;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onChangeTask, onDeleteTask}) => {
    return(
        <>
            <ul>
                {tasks.map((task: any) => (
                    <li key={task.id}>
                        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if(isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}> Guardar </button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}> editar </button>
            </>
        )
    }

    return(
        <>
            <label>
                <input
                    type='checkbox'
                    checked={task.done}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            done: e.target.checked,
                        })
                    }}
                />
                {taskContent}
                <button onClick={() =>  onDelete(task.id)}> Borrar </button>
            </label>
        </>
    )
}