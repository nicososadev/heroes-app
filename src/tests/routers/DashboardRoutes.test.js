import React from 'react'
import { mount } from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en el componente DashboardRoutes', () => {
    
    const contextValue = {
        user: {
            name: 'Nicolas',
            logged:false
        },
        dispatch: jest.fn()
    }

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
    })
    
})
