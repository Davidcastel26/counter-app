import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Tests promises', () =>{
    test('get Heroe by Id Async should return a heroa sync', ( done ) =>{

        const id = 1;

        getHeroeByIdAsync( id )
            .then(heroe =>{

                // expect(true).toBe(false)
                expect( heroe ).toBe( heroes[0] )
                done()

            })
    });

    test('it should get an error if heroe id does not match', ( done )=>{

        const id = 123;

        getHeroeByIdAsync( id )
            .catch(error => {

                expect( error ).toBe('No se pudo encontrar el heroe')
                done()
            
            })
    });
})