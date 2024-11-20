import { useEffect, useState, useRef } from "react";

export const MenPrev: React.FC = () => {

    const [mensaje, setMensaje] = useState('')
    const prevMensaje = useRef('')

    useEffect(() => {
        prevMensaje.current = mensaje
    }, [mensaje])

    const modificaMensaje = (e: any) => {
        console.log('Modifica Mensaje');
        setMensaje(e.target.value);
    }

    return(
        <>
            <input
                type='text'
                onChange={modificaMensaje}
            />
            <p>
                Mensaje: {mensaje}
            </p>
            <p>
                Mensaje Previo: {prevMensaje.current}
            </p>
        </>
    )
}