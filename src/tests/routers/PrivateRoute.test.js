import React from 'react'
import { mount, shallow } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el componente PrivateRoute', () => {
    
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()  

    test('Debe mostrar el componente si el usuario esta autenticado y guardarlo en localstorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <p>Prueba</p> }
                    {...props}
                />
            </MemoryRouter>
        )

        expect( wrapper.find('p').exists() ).toBe( true )
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', props.location.pathname)
    })

    test('Debe bloquear el componente si no esta autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <p>Prueba</p> }
                    {...props}
                />
            </MemoryRouter>
        )   
    
        expect( wrapper.find('p').exists() ).toBe( false )
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', props.location.pathname)
    })
    
    
})
