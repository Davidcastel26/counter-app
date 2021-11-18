import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe( 'testing counter app js', ()=> {
    
    let wrapper = shallow( <CounterApp/> );

    beforeEach(()=>{
        wrapper = shallow( <CounterApp/> )
    })

    test('should show counter app and runnig all right and make a snapshot' , () =>{
        
        expect(wrapper).toMatchSnapshot()

    })

    test('it should show the value as default', () => {
        
        const wrapper = shallow( <CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim()
        //trim sirve para borrar los espacion en blanco
        expect( counterText ).toBe('10')
    })
    
    test('should increment with the btn +', ()=>{

        const btnPlus = wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();        
        expect( counterText ).toBe('11')

    })

    test('should decress with the btn -', () => {

        // const btnLess = 
        wrapper.find('button').at(0).simulate('click')
        
        const counterText = wrapper.find('h2').text().trim();        
        expect( counterText ).toBe('9')
    })

    test('should reset the value with the btn',()=> {
        
        const wrapper = shallow( <CounterApp value={105} />);

        wrapper.find('button').at(1).simulate('click')

        const conterText = wrapper.find('h2').text().trim()

        expect( conterText ).toBe('105')
    })

})