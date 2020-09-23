import React from 'react'
import { mount } from 'enzyme'
import { LoginPage } from '../../../components/login/LoginPage'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

describe('Pruebas en el componente LoginPage', () => {
    
    const contextValue = {

        user: {
            name: 'Nicolas',
            logged: false
        },
        dispatch: jest.fn()
    }

    const historyMock = {
        replace: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginPage history={ historyMock } />
        </AuthContext.Provider>
    )

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe realizar el dispatch y la redireccion', () => {

        const user = {
            name: 'Nicolas'
        }

        wrapper.find('button').simulate('click')

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ type: types.login, payload: user })
        expect( historyMock.replace ).toHaveBeenCalledWith('/')

        localStorage.setItem('lastPath', '/marvel')
        wrapper.find('button').simulate('click')

        expect( historyMock.replace ).toHaveBeenCalledWith('/marvel')
    })
})
