import { useState } from 'react'

interface AddTaskProps {
    onAddTask: any;
}

export const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [text, setText] = useState('');

    return( 
        <>
            <input 
                placeholder='Agregar tarea'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text)
                }}
            >
                Agregar
            </button>
        </>
    )
}