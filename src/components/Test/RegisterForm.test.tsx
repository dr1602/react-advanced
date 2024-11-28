import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RegisterForm } from '../RegisterForm';

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

})