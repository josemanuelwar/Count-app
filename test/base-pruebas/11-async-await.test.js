import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImagen debe retornar un url de imagen', async () => {
        const url = await getImagen();
        console.log(url);
    })
 })