import { retornaArreglo } from "../../base/07-deses-arr";
import '@testing-library/jest-dom';

describe( 'destructuring test', ()=> {

    test('should return a string and a number', ()=> {
        
        const arr = retornaArreglo();
        expect( arr ).toEqual( ['ABC', 123] );
    
    })

    test('should return an array but using destructuring', ()=>{

        const [letters, numbers] = retornaArreglo()
 
        expect( letters ).toBe( 'ABC' );
        expect( typeof letters).toBe( 'string' );
        expect(numbers).toBe( 123 );
        expect( typeof numbers).toBe( 'number' );

    })

})