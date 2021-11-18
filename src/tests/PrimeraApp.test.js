import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'

describe('testing the fisrt app component', () => {
    // test("should show the msg 'Hello world'",()=>{
    //     const hey = 'Hello world';
    //     const { getByText } = render( <PrimeraApp wave={hey}/>);
    //     // wrapper.getByText()
    //     expect( getByText(hey)).toBeInTheDocument()
    // })

    test('should show <first app > alrithg', () => {

        const greeting = 'Hello World';
        const wrapper = shallow( <PrimeraApp wave={greeting}/>)

        expect( wrapper ).toMatchSnapshot();

    })

    test('should show the sutitle from props', () => {
        
        const saludo = 'Hello World';
        const subtitulo = "I wish you the best!"
        const wrapper = shallow(
            <PrimeraApp 
                wave={saludo}
                subtitulo={ subtitulo } 
            />
        )

        const textoParrafo = wrapper.find('p').text()
        // document.querySelector()

        expect(textoParrafo).toBe( subtitulo );
        
    })
    

})