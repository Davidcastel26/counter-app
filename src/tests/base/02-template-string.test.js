import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', ()=>{
    
    test( 'getSaludo debe retornar hola dave', ()=> {
        const nombre = 'Dave';

        const saludos = getSaludo(nombre);

        expect( saludos ).toBe('Hola ' + nombre)
    })

    test( 'get saludo debe de retornar Hola carlos si no hay argumento nombre', () => {
        
        const saludo = getSaludo()
        
        expect( saludo ).toBe('Hola Carlos')
    })
})