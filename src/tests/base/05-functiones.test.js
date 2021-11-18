import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-functiones"

describe( 'test from 05 - functions', () =>{
  test( 'should return an object', ()=>{
      
    const userTest = {
        uid:'ABC123',
        username:'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual( userTest)
  })  

  test( 'get active user should return an object', () => {
    
    const name = 'Dave';
    const user = getUsuarioActivo(name);

    const userHere = {
      uid: 'ABC567',
      username: name,
    }

    expect( user ).toEqual( userHere)

  })
})