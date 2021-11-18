import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('test about heores functions', ()=> {
    test('should return a heroe by ID', () =>{

        const id = 1;
        const heroe = getHeroeById( id )

        const heroeData = heroes.find(hs => hs.id === id);

        expect( heroe ).toEqual( heroeData  )

    })

    test('should return undefined if heroe does not exist', ()=>{

        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined)

    })

    test('should return an array whith heroes from DC', ()=> {

        const owner = 'DC'
        const hereosDC = getHeroesByOwner( owner )
        const onwnerData = heroes.filter( d => d.owner === owner)

        expect( hereosDC ).toEqual( onwnerData )
    })

    test('should return an array with the marvels heroes', () => {

        const owner = 'Marvel'
        const heroesMCU = getHeroesByOwner(owner);

        expect( heroesMCU.length ).toBe(2)

    })
})