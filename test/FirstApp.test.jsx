/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

describe('Prueba en <FirstApp />', () => { 

    // test('debe de hacer match con el snapshot', () => {
    //     const titulo='Hola soy jose manuel';
    //     const num=9121;
    //     const { container } = render(<FirstApp title={ titulo } subtitle={ num }/>);
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo de un h1', () => { 
        const titulo = 'hola soy Goku';
        const num=123;
        const { container, getByText, getByTestId } = render(<FirstApp title={ titulo } subtitle={ num }/>);
        expect(getByText(titulo)).toBeTruthy();
        
        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(titulo);
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(titulo);
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const titulo = 'Hola Soy Goku';
        const Subtitulo = 'Soy un subtitulo';
        /** getAllByText se utiliza si se tiene mas del mismo elemento  */
        const { getByText } = render(

            <FirstApp
                title={ titulo }
                subtitle={ Subtitulo }
            >
            </FirstApp>
        );

        expect(getByText(Subtitulo)).toBeTruthy();
        //expect(getAllByText(Subtitulo)).toBe("")
    });

})