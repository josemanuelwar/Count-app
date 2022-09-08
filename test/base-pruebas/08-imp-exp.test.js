import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe('Espero que me retorne un heroe', () => {
 
    test('deve rtornar un heroe', () => { 
        const id= 1;
        const heroe=getHeroeById(id);
        expect(heroe).toEqual({id:1,name:'Batman',owner: 'DC'})
    })

    test('getHeroeByID debe de retornar undefined si no existe', () => { 
        const id = 100;
        const hero =getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('Debe de retornar una arreglos con los heroes de DC', () => {
       const owner='DC';
       const heroe = getHeroesByOwner(owner); 
       expect(heroe.length).toBe(3);
       expect(heroe).toEqual(heroes.filter((heroe)=>heroe.owner === owner));
    });

    test('Debe de retornar una arreglos con los heroes de Marvel', () => {
        const owner='Marvel';
        const heroe = getHeroesByOwner(owner); 
        expect(heroe.length).toBe(2);
        expect(heroe).toEqual(heroes.filter((heroe)=>heroe.owner === owner));
     });

 })