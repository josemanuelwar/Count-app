import { getUser,getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prubas en 05 funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        const tesUser={
            uid:'ABC123',
            username:'El_Papi1502'
        };
        const user= getUser();
        expect(tesUser).toEqual(user);
    })

    test('getUserioActivo debe retornar un objeto', () => { 
        const name = 'Paulita';
        const tesUser={
            uid:'ABC123',
            username:name
        };
        const usarioActivo=getUsuarioActivo(name);
        expect(usarioActivo).toString(tesUser);
     })
 })