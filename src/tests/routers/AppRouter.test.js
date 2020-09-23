import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'

describe('Pruebas en el componente AppRouter', () => {

    const contextValue = {
        user: {
            logged:false
        },
        dispatch: jest.fn()
    }

    test('Debe mostrar el login si el usuario no esta autenticado ', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe mostrar el componente de Marvel si el usuario esta autenticado', () => {
        
        const contextValue = {
            user: {
                name: 'Nicolas',
                logged:true
            },
            dispatch: jest.fn()
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper.find('HeroesList').exists() ).toBe( true )
    })
    

})
