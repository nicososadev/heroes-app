import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { Navbar } from '../../../components/ui/NavBar'
import { AuthContext } from '../../../auth/AuthContext'
import { MemoryRouter, Router } from 'react-router-dom'
import { types } from '../../../types/types'

describe('Pruebas en el componente Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {

        user: {
            name: 'Nicolas',
            logged: false
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={ contextValue }>
                <Router history={ historyMock } >
                    <Navbar />
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    )

    afterEach( () => {
        jest.clearAllMocks()
    })

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe( contextValue.user.name )
    })

    test('Debe llamar el logout y usar history', () => {
        
        wrapper.find('button').simulate('click')

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ type: types.logout })
        expect( historyMock.replace ).toHaveBeenCalledWith('/login')
    })
    
})
