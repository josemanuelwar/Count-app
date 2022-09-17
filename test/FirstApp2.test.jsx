/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

describe('Prueba en <FirstApp />', () => { 
    const titulo = 'Hola, Soy Goku';
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={ titulo }/>);
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<FirstApp title={ titulo }/>);
        expect(screen.getByAltText(titulo)).toBeTruthy();
    })

    test('debe de mostrar el titulo de un h1', () => {
        render(<FirstApp title={ titulo }/>);
        expect(screen.getByRole('heading',{ level:1 }).innerHTML).toContain(titulo);
    });

    test('debe mostrar el subtitulo enviado por props', () => { 
        
        const Subtitulo = 'Soy un subtitulo';
        render(
            <FirstApp
                title={ titulo }
                subtitle={ Subtitulo }
            >
            </FirstApp>
        );
        expect(screen.getByText(Subtitulo)).toBeTruthy();
     })

})