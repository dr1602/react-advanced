import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RegisterForm } from '../RegisterForm';
// para tosos los frameworks con los que trajemos con userEvents
import userEvent from '@testing-library/user-event';

import { User } from './../../types/mainTypes';

describe('RegisterForm', () => {

    let mockFn = vi.fn()

    beforeEach(() => {
        render(<RegisterForm createUser={mockFn} />)
    })

    it('se muestra el titulo de formulario', () => {
        // screen para recuperar los metodos que se estan renderizando
        // getByRol es la busqueda de mayor prioridad en Testing librery
        // ademas procura si se especifica bien el rol en html, hace a los elementos accesibles
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeInTheDocument();
        expect(h1.textContent).toBe('Formulario de registro');
    })

    it('se envia el formulario correctamente', async() => {
        const userTest: User = { username: 'ind', email: 'ind@gmail.com', password: `123` }

        const inputUsername = screen.getByLabelText('Nombre de usuario');
        const inputEmail = screen.getByLabelText('Email');
        const inputPassword = screen.getByLabelText('Password');
        // probar la pulsasion del boton
        const btnSubmit = screen.getByRole('button', {name: 'Enviar'});
        // en lugar de ser "Enviar" el texto para buscar el boton que queremos, tambien
        // puede ser una expresion regular.

        // estas funciones type devuelven una promesa, neceista await
        await userEvent.type(inputUsername, userTest.username);
        await userEvent.type(inputEmail, userTest.email);
        await userEvent.type(inputPassword, userTest.password);

        await userEvent.click(btnSubmit);

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith(userTest);
    })

    it('se muestra el texto de informacion', async() => {
        // no utilizamos la llamada getBy porque esto requiere de forma
        //forzosa que el elemento este en el DOM, 
        //en realidad queremos probar que no esta, y para eso usamos 'Query'
        let paragraphHoover = screen.queryByText(/para poder registrarte/i)
        expect(paragraphHoover).not.toBeInTheDocument();

        // llamamos al elemento
        const paragraphInfo = screen.getByText(/Más información/i)
        
        // simulamos la interaccion de hacer hoover
        await userEvent.hover(paragraphInfo)

        // ahora quiero probar si si esta el texto una vez que le hacemos hoover:
        paragraphHoover = screen.queryByText(/para poder registrarte/i)
        // las pruebas SIN "not", si se realizan sin llamar nuevamente al elemento, seran fallidas
        expect(paragraphHoover).toBeInTheDocument()

        // simulamos la interaccion de dejar de hacer hoover
        await userEvent.unhover(paragraphInfo)

        // las pruebas con "not", si se realizan sin llamar nuevamente al elemento, seran exitosas
        paragraphHoover = screen.queryByText(/para poder registrarte/i)
        expect(paragraphHoover).not.toBeInTheDocument()
    })

}) 