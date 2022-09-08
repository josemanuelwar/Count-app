import {getSaludo} from '../../src/base-pruebas/02-template-string'
describe('Pruebas en 02-tamplate.string', () => {
    test(`getSalaudo debe de reornar "hola fernado"`, () => {
        const name="jose manuel";
        const message = getSaludo(name);
        expect(message).toBe('Hola '+name);
    })
})