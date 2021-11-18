import { getImagen } from "../../base/11-async-await"

describe('testing asycin and await with fetch', () =>{

    test('should return url of the img',async() => {

        const url = await getImagen()

        expect( typeof url).toBe('string')
        expect( url.includes('https://') ).toBe( true )

    })
})